import KeenSlider from 'keen-slider';
document.dispatchEvent(new CustomEvent("custom:keenLoaded", {
    detail: { slider: KeenSlider }
}));
window.Slider = KeenSlider;