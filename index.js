import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, 'public');

const app = express();
const upload = multer();
const ai = new GoogleGenAI({ apikey: process.env.GEMINI_API_KEY });
const GEMINI_MODEL = process.env.GEMINI_MODEL;

// Middlewares
app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(publicPath));

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/generate-text', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: prompt
        });
        res.status(200).json({ result: response.text });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
});

app.post("/generate-from-image", upload.single("image"), async (req, res) => {
    const { prompt } = req.body;
    const base64Image = req.file.buffer.toString("base64");

    try {
        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: [
                { text: prompt, type: "text" },
                { inlineData: { data: base64Image, mimeType: req.file.mimetype } }
            ],
        });
        res.status(200).json({ result: response.text });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
});

app.post('/api/chat', async (req, res) => {
    const { conversation } = req.body;

    try {
        if (!Array.isArray(conversation)) throw new Error("Messages must be an array");

        // Format role agar sesuai spesifikasi Gemini ('user' atau 'model')
        const mapped = conversation.map(({ role, text }) => ({
            role: role === 'user' ? 'user' : 'model',
            parts: [{ text: text || '' }]
        })).filter(item => item.parts[0].text.trim().length > 0);

        // Gemini mengharuskan percakapan multi-turn dimulai dari role 'user'
        const firstUserIndex = mapped.findIndex(m => m.role === 'user');
        const contents = firstUserIndex !== -1 ? mapped.slice(firstUserIndex) : mapped;

        if (contents.length === 0) {
            return res.status(400).json({ message: "Pesan user tidak ditemukan." });
        }

        const systemInstruction = await fs.readFile(
            new URL('./systemInstruction.md', import.meta.url),
            'utf-8'
        );

        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: contents,
            config: {
                temperature: 0.9,
                systemInstruction: systemInstruction,
            },
        });
        res.status(200).json({ result: response.text });
    } catch (e) {
        console.error("Gemini API Error:", e);
        // Jangan tampilkan detail error teknis ke user, kirimkan pesan ramah
        res.status(500).json({ 
            result: "Maaf, barista sedang sibuk. Coba tanya beberapa saat lagi ya!" 
        });
    }
});

app.listen(port, () => {
    console.log(`Server is ready on http://localhost:${port}`);
});
