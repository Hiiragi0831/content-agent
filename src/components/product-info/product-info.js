import Swiper, {Thumbs} from 'swiper';

const init = () => {
	if (document.querySelector('.product-info')) {
		const sliderThumbs = new Swiper('.product-info__img_secondary .swiper', {
			slidesPerView: 2,
			freeMode: true,
			watchSlidesProgress: true,
			breakpoints: {
				1024: {
					slidesPerView: 4,
				},
			},
		});

		const slider = new Swiper('.product-info__img_main .swiper', {
			modules: [Thumbs],
			thumbs: {
				swiper: sliderThumbs,
			},
		});
	}
};

export default {
	init,
};
