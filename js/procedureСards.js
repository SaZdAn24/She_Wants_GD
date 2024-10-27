
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
          <img src="assets/images/laser.jpg" alt="Depilacja Laserowa">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Depilacja Woskiem</h3>
            <p>Szybka i skuteczna metoda usuwania włosów na dłuższy czas.</p>
            <a href="#contact" class="cta-button">Zapisz się</a>
          </div>
          <img src="assets/images/lasergolova.jpg" alt="Depilacja Woskiem">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Depilacja Cukrowa</h3>
            <p>Naturalna metoda usuwania owłosienia, delikatna dla skóry.</p>
            <a href="#contact" class="cta-button">Zapisz się</a>
          </div>
          <img src="assets/images/lasernogi.jpg" alt="Depilacja Cukrowa">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Depilacja Kremem</h3>
            <p>Bezbolesne usuwanie włosów, idealne dla osób z wrażliwą skórą.</p>
            <a href="#contact" class="cta-button">Zapisz się</a>
          </div>
          <img src="assets/images/laser.jpg" alt="Depilacja Kremem">
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
          <img src="assets/images/massaz body.jpg" alt="Masaż klasyczny">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Masaż Tajski</h3>
            <p>Głęboki masaż z elementami rozciągania, ukierunkowany na równowagę energetyczną.</p>
            <a href="#contact" class="cta-button">Zapisz się</a>
          </div>
          <img src="assets/images/massaz face.jpg" alt="Masaż tajski">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Masaż Limfatyczny</h3>
            <p>Poprawa krążenia limfy i usuwanie toksyn z organizmu.</p>
            <a href="#contact" class="cta-button">Zapisz się</a>
          </div>
          <img src="assets/images/massaz.jpg" alt="Masaż limfatyczny">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Masaż Antycellulitowy</h3>
            <p>Ujędrnienie skóry i redukcja cellulitu.</p>
            <a href="#contact" class="cta-button">Zapisz się</a>
          </div>
          <img src="assets/images/massaz body.jpg" alt="Masaż antycellulitowy">
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
          <img src="assets/images/botox.jpg" alt="Botox">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Kwas Hialuronowy</h3>
            <p>Nawilżenie i wypełnienie zmarszczek. Widoczne efekty już po pierwszym zabiegu.</p>
            <a href="#contact" class="cta-button">Zapisać się</a>
          </div>
          <img src="assets/images/Kwas_Hialuronowy.jpg" alt="Kwas Hialuronowy">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Mezoterapia</h3>
            <p>Poprawa jędrności skóry oraz jej regeneracja.</p>
            <a href="#contact" class="cta-button">Zapisać się</a>
          </div>
          <img src="assets/images/mezo.jpg" alt="Mezoterapia">
        </div>
        <div class="grid-item">
          <div class="overlay">
            <h3>Lifting</h3>
            <p>Naturalny efekt liftingu bez skalpela.</p>
            <a href="#contact" class="cta-button">Zapisać się</a>
          </div>
          <img src="assets/images/lifting.jpg" alt="Lifting">
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
  