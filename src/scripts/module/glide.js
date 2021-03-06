import Glide, { Controls, Breakpoints, Swipe} from '@glidejs/glide'

const glideSlider = new Glide('.glide', {
  type: 'carousel',
  autoplay: 3500,
  perView: 3,
  gap: 0,
}).mount();

export default glideSlider;
