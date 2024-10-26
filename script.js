// Инициализация EmailJS с вашим User ID
(function() {
    emailjs.init("tFJhhvUUdCaq7C1S-"); // Замените user_xxx на ваш реальный User ID
})();

// Обработка отправки формы
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Установка получателя (на ваш email)
    this.to_name.value = 'sazdaniil2409@gmail.com'; // Укажите адрес, на который хотите получать сообщения

    // Отправка формы
    emailjs.sendForm('service_rs819hh', 'template_hs6z0rd', this) // Замените your_template_id на ваш реальный Template ID
        .then(function() {
            // Показать модальное окно
            const modal = document.getElementById("confirmation-modal");
            modal.style.display = "block"; // Показать модальное окно
        }, function(error) {
            console.error('Ошибка: ', error); // Лог ошибок в консоль
            alert('Ошибка: ' + JSON.stringify(error)); // Уведомление об ошибке
        });
});
// Данные для поиска, соответствующие секциям страницы
const searchSections = {
    "о нас": "#about",
    "услуги": "#services",
    "контакты": "#contact",
    "главная": "#home"
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
// Закрытие модального окна при нажатии на крестик
document.querySelector(".close-button").addEventListener("click", function() {
    const modal = document.getElementById("confirmation-modal");
    modal.style.display = "none"; // Скрыть модальное окно
});

// Закрытие модального окна при клике вне его области
window.addEventListener("click", function(event) {
    const modal = document.getElementById("confirmation-modal");
    if (event.target === modal) {
        modal.style.display = "none"; // Скрыть модальное окно
    }
});