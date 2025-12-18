export { B as bh_button } from './bh-button-ImGVvXaj.js';
import { r as registerInstance, h } from './index-nAAobRRQ.js';

const bhLoaderSpinnerCss = ":host{display:inline-block}.loader-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.3);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:9999}.loader-overlay-content{display:flex;flex-direction:column;align-items:center;gap:var(--spacing-md)}.loader-container{display:flex;flex-direction:column;align-items:center;gap:var(--spacing-sm)}.loader-spinner{position:relative;display:inline-block}.loader-message{color:var(--color-neutral-700);font-size:var(--text-sm-size);line-height:var(--text-sm-line);font-weight:var(--weight-medium);text-align:center;margin-top:var(--spacing-xs)}.loader-overlay .loader-message{color:var(--color-white)}.spinner-gradient{animation:gradient-rotate 2s linear infinite;will-change:transform}.gradient-svg{display:block;transform-origin:50% 50%}.gradient-path{stroke-dasharray:90, 150;stroke-dashoffset:0;animation:gradient-dash 1.5s ease-in-out infinite;transform-origin:50% 50%}.size-sm .gradient-svg{width:20px;height:20px}.size-sm .gradient-path{stroke-width:5}.size-md .gradient-svg{width:30px;height:30px}.size-md .gradient-path{stroke-width:5}.size-lg .gradient-svg{width:40px;height:40px}.size-lg .gradient-path{stroke-width:5}.size-xl .gradient-svg{width:60px;height:60px}.size-xl .gradient-path{stroke-width:6}@keyframes gradient-rotate{100%{transform:rotate(360deg)}}@keyframes gradient-dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124}}.loader-container:hover .spinner-gradient{animation-duration:1s}.loader-container:hover .gradient-path{animation-duration:0.6s}.spinner-gradient{backface-visibility:hidden;perspective:1000px}.gradient-svg{transform:translateZ(0)}";

const BhLoaderSpinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Loader size */
    size = 'md';
    /** Loader color variant - use 'white' for dark surfaces like buttons */
    variant = 'default';
    /** Whether to show as overlay */
    overlay = false;
    /** Message to show in overlay mode */
    overlayMessage = '';
    /** Whether to show message */
    showMessage = false;
    /** Message text */
    message = 'Loading...';
    renderSpinner() {
        const gradientId = this.variant === 'white' ? 'bellhop-gradient-white' : 'bellhop-gradient';
        return (h("div", { class: `loader-spinner variant-${this.variant}` }, h("div", { class: "spinner-gradient" }, h("svg", { class: "gradient-svg", viewBox: "0 0 50 50" }, h("defs", null, this.variant === 'white' ? (h("linearGradient", { id: "bellhop-gradient-white", x1: "0%", y1: "0%", x2: "0%", y2: "100%" }, h("stop", { offset: "0%", style: { stopColor: 'rgba(255, 255, 255, 1)' } }), h("stop", { offset: "50%", style: { stopColor: 'rgba(255, 255, 255, 0.8)' } }), h("stop", { offset: "100%", style: { stopColor: 'rgba(255, 255, 255, 0.5)' } }))) : (h("linearGradient", { id: "bellhop-gradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%" }, h("stop", { offset: "0%", style: { stopColor: 'var(--color-accent-300)' } }), h("stop", { offset: "51%", style: { stopColor: 'var(--color-brand-400)' } }), h("stop", { offset: "100%", style: { stopColor: 'var(--color-brand-600)' } })))), h("circle", { class: "gradient-path", cx: "25", cy: "25", r: "20", fill: "none", stroke: `url(#${gradientId})`, "stroke-width": "4", "stroke-linecap": "round" })))));
    }
    renderMessage(isOverlay) {
        const shouldShowMessage = isOverlay
            ? (this.showMessage || this.overlayMessage)
            : this.showMessage;
        if (!shouldShowMessage)
            return null;
        return (h("div", { class: "loader-message" }, isOverlay ? (this.overlayMessage || this.message) : this.message));
    }
    render() {
        if (this.overlay) {
            return (h("div", { class: "loader-overlay" }, h("div", { class: "loader-overlay-content" }, h("div", { class: `loader-container size-${this.size}` }, this.renderSpinner()), this.renderMessage(true))));
        }
        return (h("div", { class: `loader-container size-${this.size}` }, this.renderSpinner(), this.renderMessage(false)));
    }
};
BhLoaderSpinner.style = bhLoaderSpinnerCss;

export { BhLoaderSpinner as bh_loader_spinner };
//# sourceMappingURL=bh-button.bh-loader-spinner.entry.js.map
