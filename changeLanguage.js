let translations = {};

async function loadTranslations () {
    const response = await fetch('./translation.json');
    translations = await response.json();

    const savedLang = localStorage.getItem('lang') || 'ko';
    changeLanguage(savedLang);
}

function changeLanguage(lang) {
    if(!translations[lang]) return;
}