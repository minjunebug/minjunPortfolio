let translations = {};

async function loadTranslations() {
    const response = await fetch('./translation.json');
    translations = await response.json();

    const savedLang = localStorage.getItem('lang');
    const initialLang = savedLang || detectLanguage();
    changeLanguage(initialLang);
}

function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage || '';
    // 'ko', 'ko-KR' 등 한국어 계열이면 ko, 그 외엔 전부 en
    return browserLang.toLowerCase().startsWith('ko') ? 'ko' : 'en';
}

function changeLanguage(lang) {
    if (!translations[lang]) return;

    // 일반 텍스트 요소 (textContent만 교체)
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const text = translations[lang][key];
        if (text !== undefined) {
            el.textContent = text;
        }
    });

    // <br> 등 HTML 태그가 포함된 요소 (innerHTML로 교체)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        const key = el.getAttribute('data-i18n-html');
        const html = translations[lang][key];
        if (html !== undefined) {
            el.innerHTML = html;
        }
    });

    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('.langBtn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const indicator = document.getElementById('langIndicator');
    if (indicator) {
        indicator.classList.toggle('en-active', lang === 'en');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadTranslations();

    document.querySelectorAll('.langBtn').forEach((btn) => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.dataset.lang);
        });
    });
});
