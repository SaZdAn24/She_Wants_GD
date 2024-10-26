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

// Закрытие модального окна
document.querySelector(".close-button").addEventListener("click", function() {
    const modal = document.getElementById("confirmation-modal");
    modal.style.display = "none"; // Скрыть модальное окно

    // Очистка формы
    document.getElementById("contact-form").reset(); // Сброс значений формы
});

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById("confirmation-modal");
    if (event.target == modal) {
        modal.style.display = "none"; // Скрыть модальное окно

        // Очистка формы
        document.getElementById("contact-form").reset(); // Сброс значений формы
    }
};
