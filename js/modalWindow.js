
// Закрытие модального окна при нажатии на крестик
document.querySelector(".close-button-thank").addEventListener("click", function() {
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