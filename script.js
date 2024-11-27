$(document).ready(() => {
    $('.testimoni-left').click(() => {
        $('.img-testimoni').attr("src","img/korean.jpg")
        $('.testimoni-name').html('– Lisa M., Traveler')
        $('.testimoni-text').html(' "Mengendarai BYD telah mengubah cara saya bepergian. Dengan teknologi canggihnya, saya merasa aman dan nyaman di setiap perjalanan. Penghematan energi dan efisiensi baterainya luar biasa."');
        $('.testimoni-left').addClass("btn-primary");
        $('.testimoni-right').addClass("btn-outline-dark");
        $('.testimoni-right').removeClass("btn-primary");
        $('.testimoni-left').removeClass("btn-outline-dark");
    })
    $('.testimoni-right').click(() => {
        $('.img-testimoni').attr("src","img/man.jpg")
        $('.testimoni-name').html('– Budi S., Pengusaha')
        $('.testimoni-text').html('"Sistem navigasi pintar di mobil BYD benar-benar membantu saya menemukan rute tercepat dengan perhitungan baterai yang akurat. Tidak perlu khawatir tentang pengisian daya di perjalanan."');
        $('.testimoni-right').addClass("btn-primary");
        $('.testimoni-left').addClass("btn-outline-dark");
        $('.testimoni-left').removeClass("btn-primary");
        $('.testimoni-right').removeClass("btn-light");
        $('.testimoni-right').removeClass("btn-outline-dark");
    })
})

fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(countries => {
  const select = document.getElementById('country-select');
  countries.forEach(country => {
    let option = document.createElement('option');
    option.value = country.cca2;
    option.textContent = country.name.common;
    select.appendChild(option);
  });
});

