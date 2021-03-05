import Glide from '@glidejs/glide'

const glideSlider = new Glide('.glide', {
  type: 'carousel',
  autoplay: 3500,
  perView: 3
});

export default glideSlider;
