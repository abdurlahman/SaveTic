// =======================
// Translation Dictionary
// =======================
const translations = {
  vi: { 
    heroTitle: "Tải video TikTok không có watermark", 
    heroDesc: "Dán liên kết TikTok bên dưới để tải video của bạn.", 
    downloadBtn: "Tải xuống", 
    normalBtn: "Tải Video", 
    hdBtn: "Tải Video HD", 
    tiktokInput: "Dán URL TikTok ở đây" 
  },
  sy: { 
    heroTitle: "تحميل فيديو TikTok بدون علامة مائية", 
    heroDesc: "الصق رابط TikTok أدناه لتنزيل الفيديو الخاص بك.", 
    downloadBtn: "تحميل", 
    normalBtn: "تحميل الفيديو", 
    hdBtn: "تحميل الفيديو HD", 
    tiktokInput: "الصق رابط TikTok هنا" 
  },
  hi: { 
    heroTitle: "वॉटरमार्क के बिना TikTok वीडियो डाउनलोड करें", 
    heroDesc: "अपना वीडियो डाउनलोड करने के लिए नीचे TikTok लिंक पेस्ट करें।", 
    downloadBtn: "डाउनलोड", 
    normalBtn: "वीडियो डाउनलोड करें", 
    hdBtn: "एचडी वीडियो डाउनलोड करें", 
    tiktokInput: "यहाँ TikTok URL पेस्ट करें" 
  },
  en: { 
    heroTitle: "Download TikTok Videos Without Watermark", 
    heroDesc: "Paste the TikTok link below to download your video.", 
    downloadBtn: "Download", 
    normalBtn: "Download Video", 
    hdBtn: "Download HD Video", 
    tiktokInput: "Paste TikTok URL here" 
  },
  de: { 
    heroTitle: "TikTok-Videos ohne Wasserzeichen herunterladen", 
    heroDesc: "Fügen Sie den TikTok-Link unten ein, um Ihr Video herunterzuladen.", 
    downloadBtn: "Herunterladen", 
    normalBtn: "Video herunterladen", 
    hdBtn: "HD-Video herunterladen", 
    tiktokInput: "TikTok-URL hier einfügen" 
  },
  fr: { 
    heroTitle: "Télécharger des vidéos TikTok sans filigrane", 
    heroDesc: "Collez le lien TikTok ci-dessous pour télécharger votre vidéo.", 
    downloadBtn: "Télécharger", 
    normalBtn: "Télécharger la vidéo", 
    hdBtn: "Télécharger la vidéo HD", 
    tiktokInput: "Collez l'URL TikTok ici" 
  },
  es: { 
    heroTitle: "Descargar videos de TikTok sin marca de agua", 
    heroDesc: "Pega el enlace de TikTok a continuación para descargar tu video.", 
    downloadBtn: "Descargar", 
    normalBtn: "Descargar Video", 
    hdBtn: "Descargar Video HD", 
    tiktokInput: "Pega la URL de TikTok aquí" 
  },
  ja: { 
    heroTitle: "ウォーターマークなしでTikTok動画をダウンロード", 
    heroDesc: "動画をダウンロードするには、以下にTikTokリンクを貼り付けてください。", 
    downloadBtn: "ダウンロード", 
    normalBtn: "動画をダウンロード", 
    hdBtn: "HD動画をダウンロード", 
    tiktokInput: "ここにTikTok URLを貼り付け" 
  }
};

// =======================
// DOM Elements
// =======================
const downloadBtn = document.getElementById('download-btn');
const loading = document.getElementById('loading');
const downloadButtons = document.getElementById('download-buttons');
const videoPreview = document.getElementById('video-preview');
const errorMsg = document.getElementById('error-msg');
const previewVideo = document.getElementById('preview-video');
const tiktokInput = document.getElementById('tiktok-url');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const normalBtn = document.getElementById('normal-btn');
const hdBtn = document.getElementById('hd-btn');

// =======================
// Apply Selected Language
// =======================
function applyLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  heroTitle.textContent = translations[lang].heroTitle;
  heroDesc.textContent = translations[lang].heroDesc;
  downloadBtn.textContent = translations[lang].downloadBtn;
  normalBtn.textContent = translations[lang].normalBtn;
  hdBtn.textContent = translations[lang].hdBtn;
  tiktokInput.placeholder = translations[lang].tiktokInput;
}

// =======================
// Load Saved Language
// =======================
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selectedLang') || 'en';
  applyLanguage(savedLang);
});

// =======================
// Language Switcher
// =======================
document.querySelectorAll('.dropdown-content a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const lang = link.getAttribute('data-lang');
    localStorage.setItem('selectedLang', lang);
    applyLanguage(lang);
  });
});

// =======================
// Validate TikTok URL
// =======================
function isValidTikTokURL(url) {
  const regex = /^https?:\/\/(www\.)?tiktok\.com\/@[\w.-]+\/video\/\d+/;
  const shortRegex = /^https?:\/\/vm\.tiktok\.com\/[\w\d]+/; // optional short link support
  return regex.test(url) || shortRegex.test(url);
}

// =======================
// Simulate Download
// =======================
downloadBtn.addEventListener('click', () => {
  const url = tiktokInput.value.trim();

  // Hide previous messages and video
  errorMsg.style.display = 'none';
  videoPreview.style.display = 'none';
  downloadButtons.style.display = 'none';

  if (!isValidTikTokURL(url)) {
    errorMsg.style.display = 'block';
    return;
  }

  // Show loading
  loading.style.display = 'block';

  // Simulate fetching video (2 sec)
  setTimeout(() => {
    loading.style.display = 'none';
    videoPreview.style.display = 'block';
    downloadButtons.style.display = 'block';
    // Keep sample video static or dynamically assign if backend available
    previewVideo.src = "sample.mp4";
  }, 2000);
});

// =======================
// Optional: Download Button Actions
// =======================
normalBtn.addEventListener('click', () => {
  alert("Normal video download triggered (simulation).");
});

hdBtn.addEventListener('click', () => {
  alert("HD video download triggered (simulation).");
});