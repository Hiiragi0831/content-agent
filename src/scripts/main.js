import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

import '@styles/vendor.scss';
import '@styles/main.scss';
import 'swiper/swiper-bundle.css';

import actualYear from '@scripts/modules/actual-year';
import lazyLoad from '@scripts/modules/lazy-load';
import uaParser from '@scripts/modules/ua-parser';
import vhFix from '@scripts/modules/vh-fix';

import {isDevices} from '@scripts/helpers/index';
import cases from '../components/cases/cases';
import partners from '../components/partners/partners';
import reviews from '../components/reviews/reviews';
import productInfo from '../components/product-info/product-info';

// eslint-disable-next-line no-underscore-dangle
window._debounce = debounce;
// eslint-disable-next-line no-underscore-dangle
window._throttle = throttle;

let resizeWidth = null;

const resize = () => {
	if (isDevices() && resizeWidth && resizeWidth === innerWidth) {
		return;
	}

	document.body.classList.add('is-resizing');

	uaParser.resize();
	// resize logic

	document.body.classList.remove('is-resizing');

	resizeWidth = innerWidth;
};

const init = () => {
	uaParser.init();
	actualYear.init();
	vhFix.init();
	lazyLoad.init();
	cases.init();
	partners.init();
	reviews.init();
	productInfo.init();

	resizeWidth = innerWidth;

	window.addEventListener('resize', _debounce(resize, 500));
};

init();
