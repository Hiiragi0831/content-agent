import Swiper, {Pagination} from 'swiper';
const init = () => {
	const slider = new Swiper('.reviews__infos .swiper', {
		modules: [Pagination],
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.reviews__infos .reviews__markers',
			bulletClass: 'reviews__markers_marker',
			bulletActiveClass: 'reviews__markers_marker-active',
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
			},
		},
	});
};

export default {
	init,
};
