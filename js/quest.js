// Данные для поиска, соответствующие секциям страницы
const searchSections = {
    "о нас": "#about",
    "услуги": "#services",
    "контакты": "#contact",
    "главная": "#home",
    "botox": "#botox"

};

// Показать или скрыть поле поиска
document.getElementById('toggle-search').addEventListener('click', function() {
    const searchContainer = document.querySelector('.search-container');
    searchContainer.style.display = (searchContainer.style.display === 'none' || searchContainer.style.display === '') ? 'flex' : 'none';
});

// Обработка поиска и переход к нужной секции
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    const targetSection = searchSections[query];

    if (targetSection) {
        // Прокрутка к выбранной секции
        document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
        document.getElementById('search-input').value = ''; // Очистка поля поиска
        document.querySelector('.search-container').style.display = 'none'; // Скрыть поле поиска после поиска
    } else {
        alert('Секция не найдена. Попробуйте другой запрос.');
    }
});