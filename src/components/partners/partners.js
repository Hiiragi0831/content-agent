import Swiper, {Pagination} from "swiper";

const init = () => {
    if (document.querySelector('.partners__slider')) {
        let slider = new Swiper('.partners__slider .swiper', {
            modules: [Pagination],
            slidesPerView: 2,
            pagination: {
                el: '.partners__slider .partners__markers',
                bulletClass: 'partners__marker',
                bulletActiveClass: 'partners__marker-active'
            },
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                }
            }
        });
    }
}

export default {
    init,
}
