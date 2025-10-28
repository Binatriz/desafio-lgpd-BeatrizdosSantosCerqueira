

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(img, texto, link) {
        this.img = img;
        this.texto = texto;
        this.link = link;
    }

    static Start(arr) {

        if (arr.length > 0) {
            Carousel._arr = arr;
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel.Show(); //start
            Carousel._interval = setInterval(function () { Carousel.Next(); }, 3000);

            document.getElementById('next').addEventListener('click', () => {
                clearInterval(Carousel._interval);
                Carousel.Next();
                Carousel._interval = setInterval(() => Carousel.Next(), 3000);
            });

            document.getElementById('prev').addEventListener('click', () => {
                clearInterval(Carousel._interval);
                Carousel.Prev();
                Carousel._interval = setInterval(() => Carousel.Next(), 3000);
            });
        }
    }

    static Show() {
        const carousel = document.getElementById('carousel');
        const carouselTitle = document.getElementById('carousel-title');
        const atual = Carousel._arr[Carousel._sequence];

        carousel.querySelector('img')?.remove(); // remove imagem anterior, se existir
        const img = document.createElement('img');
        img.src = `./img/${atual.img}`;
        img.alt = atual.texto;
        carousel.insertBefore(img, document.getElementById('prev')); // insere antes das setas

        carouselTitle.innerHTML = `<a href="${atual.link}">${atual.texto}</a>`;
    }

    static Next() {
        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.Show();
    }

    static Prev() {
        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel.Show();
    }
};
