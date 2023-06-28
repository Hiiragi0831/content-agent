import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

import '@styles/vendor.scss';
import '@styles/main.scss';
import 'swiper/swiper-bundle.css';

import actualYear from '@scripts/modules/actual-year';
import lazyLoad from '@scripts/modules/lazy-load';
import uaParser from '@scripts/modules/ua-parser';
import vhFix from '@scripts/modules/vh-fix';

import { isDevices } from '@scripts/helpers/index';
import casesSwipper from "../components/cases/cases-swipper";

window._debounce = debounce;
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
    casesSwipper.init();

    resizeWidth = innerWidth;

    window.addEventListener('resize', _debounce(resize, 500));
};

init();
