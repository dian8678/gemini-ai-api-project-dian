// --- STATIC DATA ---
const COFFEES = [
  {
    id: 1,
    name: "Aceh Gayo Arabica",
    flavor: "Dark Chocolate, Rempah, Earthy",
    intensity: "Strong",
    description: "Kopi berkarakter kuat dengan sentuhan rempah khas Nusantara dan cokelat hitam yang pekat. Cocok untuk memulai hari.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    tags: ["cokelat", "rempah", "strong", "tubruk", "espresso"],
    price: 95000,
    weight: "250g"
  },
  {
    id: 2,
    name: "Sumatra Mandailing",
    flavor: "Cedar, Tembakau Manis, Cokelat",
    intensity: "Strong",
    description: "Dikenal dengan bodi yang tebal dan tingkat keasaman rendah. Memberikan sensasi rasa yang kaya dan panjang di mulut.",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop",
    tags: ["cokelat", "earthy", "strong", "french press", "tubruk"],
    price: 90000,
    weight: "250g"
  },
  {
    id: 3,
    name: "Bali Kintamani",
    flavor: "Jeruk Kintamani, Floral, Cerah",
    intensity: "Light",
    description: "Kopi dengan tingkat keasaman yang menyegarkan bak buah jeruk, dipadukan dengan aroma bunga yang lembut.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
    tags: ["buah", "light", "v60"],
    price: 85000,
    weight: "250g"
  },
  {
    id: 4,
    name: "Toraja Sapan",
    flavor: "Karamel, Buah Tropis, Herbal",
    intensity: "Medium",
    description: "Seimbang dan kompleks. Menawarkan perpaduan manis karamel dengan sentuhan buah tropis yang unik.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
    tags: ["manis", "buah", "seimbang", "medium", "bebas"],
    price: 100000,
    weight: "250g"
  },
  {
    id: 5,
    name: "Java Preanger",
    flavor: "Vanilla Manis, Beri, Floral",
    intensity: "Light",
    description: "Kopi legendaris dari tanah Sunda. Sangat aromatik dengan profil rasa manis dan aroma buah beri yang lembut.",
    image: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=800&auto=format&fit=crop",
    tags: ["buah", "manis", "light", "v60"],
    price: 90000,
    weight: "250g"
  },
  {
    id: 6,
    name: "Flores Bajawa",
    flavor: "Kacang Panggang, Karamel, Cokelat Susu",
    intensity: "Medium",
    description: "Profil rasa kacang-kacangan yang menonjol dengan rasa manis karamel yang tertinggal lama di lidah.",
    image: "https://images.unsplash.com/photo-1606791405792-1004f1718d0c?q=80&w=800&auto=format&fit=crop",
    tags: ["kacang", "manis", "seimbang", "medium", "bebas"],
    price: 85000,
    weight: "250g"
  },
  {
    id: 7,
    name: "Papua Wamena",
    flavor: "Gula Aren, Earthy, Smooth",
    intensity: "Medium",
    description: "Ditanam di ketinggian ekstrim, menghasilkan kopi yang sangat halus dengan kemanisan alami menyerupai gula aren.",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=800&auto=format&fit=crop",
    tags: ["manis", "earthy", "medium", "v60", "french press"],
    price: 110000,
    weight: "250g"
  },
  {
    id: 8,
    name: "Lampung Fine Robusta",
    flavor: "Dark Cocoa, Gula Aren, Bold",
    intensity: "Strong",
    description: "Pilihan wajib untuk pencinta Es Kopi Susu! Bodi sangat tebal, tidak mudah tenggelam meski dicampur susu dan es.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop",
    tags: ["cokelat", "strong", "es kopi susu", "espresso"],
    price: 65000,
    weight: "250g"
  }
];

const BREWING_GUIDES = [
  {
    id: 'tubruk',
    title: "Kopi Tubruk",
    shortDesc: "Metode klasik Indonesia. Sederhana, pekat, dan otentik.",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=800&auto=format&fit=crop",
    steps: [
      "Siapkan 12g kopi bubuk gilingan halus-sedang (fine-medium).",
      "Masukkan kopi ke dalam cangkir favoritmu.",
      "Tuangkan 150ml air panas (suhu sekitar 90-93°C).",
      "Tunggu 3-4 menit agar ampas turun, lalu aduk perlahan bagian atasnya."
    ],
    ratio: "1:12 hingga 1:15 (Kopi : Air)",
    tip: "Biarkan ampas mengendap sempurna sebelum diseruput. Jangan diminum sampai habis ke dasarnya!"
  },
  {
    id: 'v60',
    title: "V60 / Pour Over",
    shortDesc: "Bersih, aromatik, cocok menonjolkan rasa buah dan bunga.",
    image: "https://images.unsplash.com/photo-1495474472206-bf7364cea457?q=80&w=800&auto=format&fit=crop",
    steps: [
      "Bilas kertas saringan dengan air panas, lalu buang air bekas bilasan.",
      "Masukkan 15g kopi gilingan sedang (medium).",
      "Tuang 30g air untuk fase 'bloom' selama 30 detik.",
      "Tuang perlahan sisa air dalam gerakan memutar hingga total 225g.",
      "Total waktu seduh idealnya sekitar 2,5 - 3 menit."
    ],
    ratio: "1:15 (Kopi : Air)",
    tip: "Gunakan teko berleher angsa (gooseneck) agar aliran air stabil dan presisi."
  },
  {
    id: 'eskopisusu',
    title: "Es Kopi Susu",
    shortDesc: "Creamy, manis, dan menyegarkan. Favorit masa kini.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop",
    steps: [
      "Siapkan 30ml espresso (sangat disarankan memakai Lampung Robusta).",
      "Tuangkan 15-20ml sirup gula aren ke dalam gelas.",
      "Masukkan es batu secukupnya.",
      "Tuangkan 100-120ml susu segar (fresh milk).",
      "Terakhir, tuangkan espresso di bagian paling atas."
    ],
    ratio: "Sesuaikan takaran gula aren dan susu dengan selera manismu.",
    tip: "Aduk rata sebelum diminum agar sensasi gula aren dan kopinya menyatu sempurna!"
  }
];

const SUGGESTED_PROMPTS = [
  "Rekomendasi kopi untuk pemula?",
  "Apa bedanya Arabika dan Robusta?",
  "Cara membuat es kopi susu?",
  "Kopi yang cocok untuk V60?"
];

// --- APP STATE ---
let cart = [];
let toastTimeout = null;
let currentChatContext = null;
let isChatOpen = false;
let isTyping = false;

let conversation = [
  {
    role: 'model',
    text: "Halo! Saya Barista AI dari BrewMate. Ada yang bisa dibantu untuk mencari kopi Nusantara favoritmu hari ini?"
  }
];

const finderPreferences = {
  flavor: '',
  strength: '',
  method: ''
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderCoffeeCollection();
  initCoffeeFinder();
  renderBrewingGuides();
  initNewsletter();
  initChatbot();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// --- HELPER FUNCTIONS ---
function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function showToast(message) {
  const toast = document.getElementById('cart-toast');
  const toastText = document.getElementById('cart-toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
  }, 3000);
}

function updateCartUI() {
  const count = cart.length;
  const cartBadge = document.getElementById('cart-count');
  const mobileCartBadge = document.getElementById('mobile-cart-count');

  if (cartBadge) {
    cartBadge.textContent = count;
    if (count > 0) cartBadge.classList.remove('hidden');
    else cartBadge.classList.add('hidden');
  }

  if (mobileCartBadge) {
    mobileCartBadge.textContent = count;
    if (count > 0) mobileCartBadge.classList.remove('hidden');
    else mobileCartBadge.classList.add('hidden');
  }
}

function addToCart(coffee) {
  cart.push(coffee);
  updateCartUI();
  showToast(`${coffee.name} ditambahkan ke keranjang!`);
}

// --- NAVBAR COMPONENT ---
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('bg-[#F8F5EF]/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
      navbar.classList.remove('bg-transparent', 'py-6');
    } else {
      navbar.classList.remove('bg-[#F8F5EF]/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
      navbar.classList.add('bg-transparent', 'py-6');
    }
  });

  // Mobile menu toggle
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        if (menuIcon) menuIcon.setAttribute('data-lucide', 'x');
      } else {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.setAttribute('data-lucide', 'menu');
      }
      refreshIcons();
    });
  }

  // Close mobile menu on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.add('hidden');
      if (menuIcon) menuIcon.setAttribute('data-lucide', 'menu');
      refreshIcons();
    });
  });

  // Chat openers in Nav & Hero & Footer
  document.getElementById('nav-open-chat-btn')?.addEventListener('click', openChat);
  document.getElementById('hero-open-chat-btn')?.addEventListener('click', openChat);
  document.getElementById('mobile-open-chat-btn')?.addEventListener('click', () => {
    if (mobileMenu) mobileMenu.classList.add('hidden');
    openChat();
  });
  document.getElementById('footer-chat-btn')?.addEventListener('click', openChat);
}

// --- COFFEE COLLECTION COMPONENT ---
function renderCoffeeCollection() {
  const container = document.getElementById('coffee-grid');
  if (!container) return;

  container.innerHTML = COFFEES.map(coffee => `
    <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
      <div class="relative h-64 overflow-hidden">
        <img 
          src="${coffee.image}" 
          alt="${coffee.name}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#3B2418]">
          ${coffee.intensity}
        </div>
        <div class="absolute bottom-4 left-4 bg-[#24150F]/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold text-white shadow-lg">
          Rp ${coffee.price.toLocaleString('id-ID')} <span class="text-[#EDE4D8] font-normal text-xs ml-1">/ ${coffee.weight}</span>
        </div>
      </div>
      <div class="p-6 flex flex-col flex-1">
        <h3 class="font-serif text-xl font-bold text-[#24150F] mb-2">${coffee.name}</h3>
        <p class="text-sm text-[#B87945] font-medium mb-3">${coffee.flavor}</p>
        <p class="text-[#30251F] text-sm mb-6 line-clamp-2 flex-1">${coffee.description}</p>
        
        <div class="space-y-2 mt-auto">
          <button 
            onclick="handleAddToCartClick(${coffee.id})"
            class="w-full py-3 rounded-xl bg-[#3B2418] text-white font-medium flex items-center justify-center gap-2 hover:bg-[#B87945] transition-colors"
          >
            <i data-lucide="plus" class="w-4 h-4"></i>
            Tambah ke Keranjang
          </button>
          <button 
            onclick="handleAskAIClick(${coffee.id})"
            class="w-full py-3 rounded-xl border border-[#EDE4D8] text-[#3B2418] font-medium flex items-center justify-center gap-2 hover:bg-[#F8F5EF] transition-colors"
          >
            <i data-lucide="bot" class="w-4 h-4"></i>
            Tanya Barista
          </button>
        </div>
      </div>
    </div>
  `).join('');

  refreshIcons();
}

window.handleAddToCartClick = function (id) {
  const coffee = COFFEES.find(c => c.id === id);
  if (coffee) addToCart(coffee);
};

window.handleAskAIClick = function (id) {
  const coffee = COFFEES.find(c => c.id === id);
  if (coffee) {
    openChatWithContext({ type: 'coffee', name: coffee.name });
  }
};

// --- COFFEE FINDER COMPONENT ---
function initCoffeeFinder() {
  const flavorContainer = document.getElementById('flavor-options');
  const strengthContainer = document.getElementById('strength-options');
  const methodContainer = document.getElementById('method-options');
  const submitBtn = document.getElementById('finder-submit-btn');
  const resetBtn = document.getElementById('finder-reset-btn');
  const chatBtn = document.getElementById('finder-chat-btn');

  const flavors = ['Manis', 'Cokelat', 'Buah', 'Kacang', 'Rempah', 'Seimbang'];
  const strengths = ['Light', 'Medium', 'Strong'];
  const methods = ['Tubruk', 'V60', 'Es Kopi Susu', 'Espresso', 'Bebas'];

  function createButtons(container, list, category) {
    if (!container) return;
    container.innerHTML = list.map(item => `
      <button 
        type="button" 
        data-category="${category}" 
        data-val="${item}"
        class="finder-pill px-5 py-2.5 rounded-full border-2 border-[#3B2418] text-[#3B2418] font-medium transition-all hover:bg-[#3B2418]/10"
      >
        ${item}
      </button>
    `).join('');

    container.querySelectorAll('.finder-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-category');
        const val = btn.getAttribute('data-val');
        finderPreferences[cat] = val;

        // Highlight selected in category
        container.querySelectorAll('.finder-pill').forEach(b => {
          b.classList.remove('bg-[#3B2418]', 'text-white');
          b.classList.add('bg-transparent', 'text-[#3B2418]');
        });
        btn.classList.remove('bg-transparent', 'text-[#3B2418]');
        btn.classList.add('bg-[#3B2418]', 'text-white');

        // Check if all selected
        if (finderPreferences.flavor && finderPreferences.strength && finderPreferences.method) {
          submitBtn.removeAttribute('disabled');
        }
      });
    });
  }

  createButtons(flavorContainer, flavors, 'flavor');
  createButtons(strengthContainer, strengths, 'strength');
  createButtons(methodContainer, methods, 'method');

  // Submit search
  submitBtn?.addEventListener('click', () => {
    let bestMatch = COFFEES[0];
    let maxScore = -1;

    COFFEES.forEach(coffee => {
      let score = 0;
      if (coffee.tags.includes(finderPreferences.flavor.toLowerCase())) score += 2;
      if (coffee.tags.includes(finderPreferences.strength.toLowerCase())) score += 2;
      if (coffee.tags.includes(finderPreferences.method.toLowerCase()) || coffee.tags.includes('bebas')) score += 1;

      if (score > maxScore) {
        maxScore = score;
        bestMatch = coffee;
      }
    });

    document.getElementById('recommendation-name').textContent = bestMatch.name;
    document.getElementById('recommendation-desc').textContent = `"${bestMatch.description}"`;
    document.getElementById('recommendation-flavor').textContent = bestMatch.flavor;
    document.getElementById('recommendation-intensity').textContent = bestMatch.intensity;

    document.getElementById('finder-step-1')?.classList.add('hidden');
    document.getElementById('finder-step-2')?.classList.remove('hidden');
  });

  // Reset search
  resetBtn?.addEventListener('click', () => {
    finderPreferences.flavor = '';
    finderPreferences.strength = '';
    finderPreferences.method = '';

    document.querySelectorAll('.finder-pill').forEach(b => {
      b.classList.remove('bg-[#3B2418]', 'text-white');
      b.classList.add('bg-transparent', 'text-[#3B2418]');
    });

    submitBtn?.setAttribute('disabled', 'true');
    document.getElementById('finder-step-2')?.classList.add('hidden');
    document.getElementById('finder-step-1')?.classList.remove('hidden');
  });

  // Chat with recommended coffee
  chatBtn?.addEventListener('click', () => {
    const recName = document.getElementById('recommendation-name')?.textContent;
    if (recName && recName !== '-') {
      openChatWithContext({ type: 'coffee', name: recName });
    } else {
      openChat();
    }
  });
}

// --- BREWING GUIDES COMPONENT ---
function renderBrewingGuides() {
  const container = document.getElementById('brewing-grid');
  if (!container) return;

  container.innerHTML = BREWING_GUIDES.map(guide => `
    <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div class="h-48 overflow-hidden">
        <img src="${guide.image}" alt="${guide.title}" class="w-full h-full object-cover" loading="lazy" />
      </div>
      <div class="p-6">
        <h3 class="font-serif text-2xl font-bold text-[#24150F] mb-2">${guide.title}</h3>
        <p class="text-[#30251F] mb-6">${guide.shortDesc}</p>
        <button 
          onclick="openGuideModal('${guide.id}')"
          class="text-[#B87945] font-semibold flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
        >
          Pelajari Lebih Lanjut <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `).join('');

  refreshIcons();

  // Guide Modal handlers
  const modal = document.getElementById('guide-modal');
  const closeBtn = document.getElementById('guide-modal-close');

  closeBtn?.addEventListener('click', () => {
    modal?.classList.add('hidden');
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  });
}

window.openGuideModal = function (guideId) {
  const guide = BREWING_GUIDES.find(g => g.id === guideId);
  if (!guide) return;

  const modal = document.getElementById('guide-modal');
  document.getElementById('guide-modal-img').src = guide.image;
  document.getElementById('guide-modal-title').textContent = `Panduan ${guide.title}`;
  document.getElementById('guide-modal-ratio').textContent = `Rasio: ${guide.ratio}`;
  document.getElementById('guide-modal-tip').textContent = guide.tip;

  const stepsList = document.getElementById('guide-modal-steps');
  stepsList.innerHTML = guide.steps.map((step, idx) => `
    <li class="flex gap-4">
      <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#EDE4D8] text-[#3B2418] flex items-center justify-center font-bold font-serif">
        ${idx + 1}
      </span>
      <span class="text-[#30251F] pt-1">${step}</span>
    </li>
  `).join('');

  modal?.classList.remove('hidden');
  refreshIcons();
};

// --- NEWSLETTER COMPONENT ---
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  const successBox = document.getElementById('newsletter-success');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('hidden');
    successBox?.classList.remove('hidden');
    refreshIcons();
  });
}

// --- CHATBOT WIDGET & API INTEGRATION ---
function initChatbot() {
  const toggleBtn = document.getElementById('chat-toggle-btn');
  const chatWindow = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close-btn');
  const clearBtn = document.getElementById('chat-clear-btn');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send-btn');

  // Open & Close
  toggleBtn?.addEventListener('click', toggleChat);
  closeBtn?.addEventListener('click', closeChat);

  // Clear chat
  clearBtn?.addEventListener('click', () => {
    currentChatContext = null;
    conversation = [
      {
        role: 'model',
        text: "Riwayat obrolan dibersihkan. Ada lagi yang bisa saya bantu?"
      }
    ];
    renderChatMessages();
    renderSuggestedPrompts();
  });

  // Auto-resize textarea & enable/disable send button
  input?.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = `${Math.min(input.scrollHeight, 120)}px`;

    if (input.value.trim().length > 0 && !isTyping) {
      sendBtn?.removeAttribute('disabled');
    } else {
      sendBtn?.setAttribute('disabled', 'true');
    }
  });

  // Enter to send (Shift+Enter for newline)
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!sendBtn?.hasAttribute('disabled')) {
        form?.dispatchEvent(new Event('submit'));
      }
    }
  });

  // Send message
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = input.value.trim();
    if (!message || isTyping) return;

    sendMessage(message);
    input.value = '';
    input.style.height = 'auto';
    sendBtn?.setAttribute('disabled', 'true');
  });

  // Initial render
  renderChatMessages();
  renderSuggestedPrompts();
}

function toggleChat() {
  if (isChatOpen) closeChat();
  else openChat();
}

function openChat() {
  const chatWindow = document.getElementById('chat-window');
  const toggleBtn = document.getElementById('chat-toggle-btn');
  if (!chatWindow) return;

  chatWindow.classList.remove('scale-0', 'opacity-0', 'pointer-events-none');
  chatWindow.classList.add('scale-100', 'opacity-100');
  toggleBtn?.classList.add('hidden');
  isChatOpen = true;

  scrollChatToBottom();
  document.getElementById('chat-input')?.focus();
}

function closeChat() {
  const chatWindow = document.getElementById('chat-window');
  const toggleBtn = document.getElementById('chat-toggle-btn');
  if (!chatWindow) return;

  chatWindow.classList.remove('scale-100', 'opacity-100');
  chatWindow.classList.add('scale-0', 'opacity-0', 'pointer-events-none');
  toggleBtn?.classList.remove('hidden');
  isChatOpen = false;
}

function openChatWithContext(context) {
  currentChatContext = context;
  openChat();

  const contextGreeting = `Saya lihat kamu tertarik dengan **${context.name}**. Ada yang ingin ditanyakan soal rasa atau cara seduhnya?`;

  // Prevent duplicate context greeting
  const lastMsg = conversation[conversation.length - 1];
  if (!lastMsg || lastMsg.text !== contextGreeting) {
    conversation.push({ role: 'model', text: contextGreeting });
    renderChatMessages();
    renderSuggestedPrompts();
    scrollChatToBottom();
  }
}

function formatMarkdownText(text) {
  // Escape basic HTML
  let escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Bold **text**
  escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>');

  // Line breaks
  escaped = escaped.replace(/\n/g, '<br/>');

  return escaped;
}

function renderChatMessages() {
  const container = document.getElementById('chat-messages');
  if (!container) return;

  container.innerHTML = conversation.map(msg => {
    const isUser = msg.role === 'user';
    return `
      <div class="flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in-up">
        <div class="max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${isUser
        ? 'chat-bubble-user rounded-tr-sm'
        : 'chat-bubble-ai shadow-sm rounded-tl-sm'
      }">
          ${formatMarkdownText(msg.text)}
        </div>
      </div>
    `;
  }).join('');

  scrollChatToBottom();
}

function renderSuggestedPrompts() {
  const container = document.getElementById('chat-suggestions');
  if (!container) return;

  // Show suggestions if conversation is short (<= 2 messages)
  if (conversation.length <= 2 && !isTyping) {
    container.classList.remove('hidden');
    container.innerHTML = SUGGESTED_PROMPTS.map(prompt => `
      <button 
        type="button"
        onclick="handlePromptClick('${prompt.replace(/'/g, "\\'")}')"
        class="whitespace-nowrap text-xs bg-[#EDE4D8] text-[#3B2418] px-3 py-1.5 rounded-full hover:bg-[#3B2418] hover:text-white transition-colors cursor-pointer"
      >
        ${prompt}
      </button>
    `).join('');
  } else {
    container.classList.add('hidden');
  }
}

window.handlePromptClick = function (promptText) {
  sendMessage(promptText);
};

function scrollChatToBottom() {
  const container = document.getElementById('chat-messages');
  if (container) {
    setTimeout(() => {
      container.scrollTop = container.scrollHeight;
    }, 50);
  }
}

// --- CALL BACKEND GEMINI API ---
async function sendMessage(userText) {
  // Push user message
  conversation.push({ role: 'user', text: userText });
  renderChatMessages();
  renderSuggestedPrompts();

  // Show typing indicator
  isTyping = true;
  const typingIndicator = document.getElementById('chat-typing');
  if (typingIndicator) typingIndicator.classList.remove('hidden');
  scrollChatToBottom();

  const sendBtn = document.getElementById('chat-send-btn');
  sendBtn?.setAttribute('disabled', 'true');

  try {
    // Tentukan URL Backend API (relatif jika di port 3000, absolut jika di Live Server/lainnya)
    const apiUrl = window.location.origin.includes('3000')
      ? '/api/chat'
      : 'http://localhost:3000/api/chat';

    // Format conversation history
    const payload = {
      conversation: conversation.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        text: m.text
      }))
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      const friendlyMsg = errData.result || "Maaf, barista sedang sibuk. Coba tanya beberapa saat lagi ya!";
      conversation.push({ role: 'model', text: friendlyMsg });
      return;
    }

    const data = await response.json();
    const replyText = data.result || "Maaf, barista sedang sibuk. Coba tanya beberapa saat lagi ya!";

    conversation.push({ role: 'model', text: replyText });
  } catch (error) {
    console.error("Gagal menghubungi AI backend:", error);
    conversation.push({
      role: 'model',
      text: "Maaf, barista sedang sibuk. Coba tanya beberapa saat lagi ya!"
    });
  } finally {
    isTyping = false;
    if (typingIndicator) typingIndicator.classList.add('hidden');
    renderChatMessages();
    renderSuggestedPrompts();
    scrollChatToBottom();
  }
}
