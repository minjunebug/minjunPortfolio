document.addEventListener('DOMContentLoaded', () => {
    const block = document.getElementById('googleIntroBlock');
    const toggleBtn = document.getElementById('googleIntroToggle');

    if (!block || !toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        block.classList.toggle('expanded');
    });
});
