import Glide, { Controls, Breakpoints, Swipe} from '@glidejs/glide'

const glideSlider = new Glide('.glide', {
  type: 'carousel',
  perView: 3,
  autoplay: 3500,
  focusAt: 'center',
  breakpoints: {
    480: {
      perView: 1
    },
  }
}).mount();

export default glideSlider;
