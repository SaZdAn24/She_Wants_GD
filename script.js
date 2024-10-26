// Инициализация EmailJS с вашим User ID
(function() {
    emailjs.init("tFJhhvUUdCaq7C1S-"); // Замените на ваш реальный User ID
})();

// Обработка отправки формы
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Установка получателя (на ваш email)
    this.to_name.value = 'sazdaniil2409@gmail.com'; // Укажите адрес, на который хотите получать сообщения

    // Отправка формы
    emailjs.sendForm('service_rs819hh', 'template_hs6z0rd', this)
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

// проба
const contentData = {
    depilacja: `
  
  <section id="zabiegi" class="zabiegi">
    <div class="container">
      <h2>Zabiegi Depilacji</h2>
      <div class="grid">
        <div class="grid-item large">
          <div class="overlay">
            <h3>Depilacja Laserowa</h3>
            <p>Skuteczna metoda usuwania owłosienia na stałe. Efekty widoczne już po kilku zabiegach.</p>
            <a href="#contact" class="cta-button">Zapisz się</a>
          </div>
          <img src="imeges/laser.jpg" alt="Depilacja Laserowa">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Depilacja Woskiem</h3>
            <p>Szybka i skuteczna metoda usuwania włosów na dłuższy czas.</p>
            <a href="#contact" class="cta-button">Zapisz się</a>
          </div>
          <img src="imeges/lasernogi.jpg" alt="Depilacja Woskiem">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Depilacja Cukrowa</h3>
            <p>Naturalna metoda usuwania owłosienia, delikatna dla skóry.</p>
            <a href="#contact" class="cta-button">Zapisz się</a>
          </div>
          <img src="imeges/lasergolova.jpg" alt="Depilacja Cukrowa">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Depilacja Kremem</h3>
            <p>Bezbolesne usuwanie włosów, idealne dla osób z wrażliwą skórą.</p>
            <a href="#contact" class="cta-button">Zapisz się</a>
          </div>
          <img src="imeges/laser.jpg" alt="Depilacja Kremem">
        </div>
      </div>
    </div>
</section>
    `,
    masaż: `
      
    <section id="zabiegi" class="zabiegi">
    <div class="container">
      <h2>Zabiegi Masażu</h2>
      <div class="grid">
        <div class="grid-item large">
          <div class="overlay">
            <h3>Masaż Klasyczny</h3>
            <p>Relaksacja mięśni i redukcja stresu. Odpowiedni dla osób w każdym wieku.</p>
            <a href="#contact" class="cta-button">Zapisz się</a>
          </div>
          <img src="imeges/massaz body.jpg" alt="Masaż klasyczny">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Masaż Tajski</h3>
            <p>Głęboki masaż z elementami rozciągania, ukierunkowany na równowagę energetyczną.</p>
            <a href="#contact" class="cta-button">Zapisz się</a>
          </div>
          <img src="imeges/massaz.jpg" alt="Masaż tajski">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Masaż Limfatyczny</h3>
            <p>Poprawa krążenia limfy i usuwanie toksyn z organizmu.</p>
            <a href="#contact" class="cta-button">Zapisz się</a>
          </div>
          <img src="imeges/massaz face.jpg" alt="Masaż limfatyczny">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Masaż Antycellulitowy</h3>
            <p>Ujędrnienie skóry i redukcja cellulitu.</p>
            <a href="#contact" class="cta-button">Zapisz się</a>
          </div>
          <img src="imeges/massaz body.jpg" alt="Masaż antycellulitowy">
        </div>
      </div>
    </div>
</section>


    `,
    medycyna: `
  <section id="zabiegi" class="zabiegi">
    <div class="container">
      <h2>Zabiegi Medycyny Estetycznej</h2>
      <div class="grid">
        <div class="grid-item large">
          <div class="overlay">
            <h3>Botox</h3>
            <p>Redukcja zmarszczek mimicznych. Szybkie i trwałe efekty.</p>
            <a href="#contact" class="cta-button">Zapisać się</a>
          </div>
          <img src="imeges/botox.jpg" alt="Botox">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Kwas Hialuronowy</h3>
            <p>Nawilżenie i wypełnienie zmarszczek. Widoczne efekty już po pierwszym zabiegu.</p>
            <a href="#contact" class="cta-button">Zapisać się</a>
          </div>
          <img src="imeges/Kwas_Hialuronowy.jpg" alt="Kwas Hialuronowy">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Mezoterapia</h3>
            <p>Poprawa jędrności skóry oraz jej regeneracja.</p>
            <a href="#contact" class="cta-button">Zapisać się</a>
          </div>
          <img src="imeges/mezo.jpg" alt="Mezoterapia">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Lifting</h3>
            <p>Naturalny efekt liftingu bez skalpela.</p>
            <a href="#contact" class="cta-button">Zapisać się</a>
          </div>
          <img src="imeges/lifting.jpg" alt="Lifting">
        </div>
      </div>
    </div>
  </section> 
    `
  };
  
  function showContent(category) {
    const contentSection = document.getElementById("zabiegi");
    contentSection.innerHTML = contentData[category];
  
    document.querySelectorAll(".tab-button").forEach(button => {
      button.classList.remove("active");
    });
    event.target.classList.add("active");
  }
  
  // Показать контент по умолчанию
  showContent('medycyna');
  