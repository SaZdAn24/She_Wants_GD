// Получаем элементы
const openModalBtns = document.querySelectorAll('.open-modal-btn');
const modal = document.getElementById('procedureModal');
const closeModal = document.querySelector('.close-modal');

// Открытие модального окна
openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});

// Закрытие модального окна
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закрытие модального окна при клике вне содержимого
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
