import Swiper, {Navigation, Pagination} from 'swiper';

const init = () => {
	const slider = new Swiper('.cases .swiper', {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.cases .cases__markers',
			bulletClass: 'cases__marker',
			bulletActiveClass: 'cases__marker-active',
		},
		navigation: {
			nextEl: '.cases .cases__swipper-arrow--next',
			prevEl: '.cases .cases__swipper-arrow--prev',
		},
	});
};

export default {
	init,
};
