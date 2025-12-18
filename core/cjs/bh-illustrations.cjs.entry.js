'use strict';

var index = require('./index-DQwSUT6k.js');

const bhIllustrationsCss = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'); :root{--color-white:hsl(0, 0%, 100%);--color-black:hsl(0, 0%, 0%);--color-transparent:hsla(0, 0%, 100%, 0);--color-neutral-25:hsl(240, 20%, 99%);--color-neutral-50:hsl(240, 20%, 98%);--color-neutral-100:hsl(240, 17%, 95%);--color-neutral-200:hsl(227, 25%, 89%);--color-neutral-300:hsl(224, 24%, 78%);--color-neutral-400:hsl(226, 24%, 59%);--color-neutral-500:hsl(226, 24%, 48%);--color-neutral-600:hsl(226, 24%, 38%);--color-neutral-700:hsl(226, 24%, 25%);--color-neutral-800:hsl(233, 33%, 10%);--color-neutral-900:hsl(231, 32%, 8%);--color-neutral-950:hsl(231, 32%, 8%);--color-brand-25:hsl(220, 82%, 98%);--color-brand-50:hsl(222, 87%, 97%);--color-brand-100:hsl(221, 94%, 94%);--color-brand-200:hsl(221, 92%, 86%);--color-brand-300:hsl(224, 95%, 77%);--color-brand-400:hsl(224, 94%, 72%);--color-brand-500:hsl(230, 67%, 58%);--color-brand-600:hsl(230, 69%, 48%);--color-brand-700:hsl(230, 75%, 34%);--color-brand-800:hsl(243, 86%, 44%);--color-brand-900:hsl(237, 69%, 24%);--color-brand-950:hsl(237, 61%, 20%);--color-error-25:hsl(12, 100%, 99%);--color-error-50:hsl(5, 86%, 97%);--color-error-100:hsl(4, 93%, 94%);--color-error-200:hsl(3, 96%, 89%);--color-error-300:hsl(4, 96%, 80%);--color-error-400:hsl(4, 92%, 69%);--color-error-500:hsl(4, 86%, 58%);--color-error-600:hsl(4, 74%, 49%);--color-error-700:hsl(4, 76%, 40%);--color-error-800:hsl(4, 72%, 33%);--color-error-900:hsl(8, 65%, 29%);--color-error-950:hsl(8, 75%, 19%);--color-warning-25:hsl(42, 100%, 98%);--color-warning-50:hsl(45, 100%, 96%);--color-warning-100:hsl(45, 96%, 89%);--color-warning-200:hsl(44, 98%, 77%);--color-warning-300:hsl(42, 99%, 65%);--color-warning-400:hsl(39, 98%, 56%);--color-warning-500:hsl(34, 94%, 50%);--color-warning-600:hsl(28, 97%, 44%);--color-warning-700:hsl(22, 92%, 37%);--color-warning-800:hsl(19, 84%, 31%);--color-warning-900:hsl(18, 79%, 27%);--color-warning-950:hsl(17, 79%, 17%);--color-success-25:hsl(142, 80%, 98%);--color-success-50:hsl(145, 81%, 96%);--color-success-100:hsl(140, 80%, 90%);--color-success-200:hsl(144, 78%, 80%);--color-success-300:hsl(148, 63%, 67%);--color-success-400:hsl(150, 57%, 54%);--color-success-500:hsl(152, 77%, 39%);--color-success-600:hsl(153, 91%, 30%);--color-success-700:hsl(155, 90%, 24%);--color-success-800:hsl(155, 84%, 20%);--color-success-900:hsl(156, 83%, 16%);--color-success-950:hsl(157, 82%, 11%);--font-inter:'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    'Liberation Mono', 'Courier New', monospace;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--text-xl-size:1.25rem;--text-lg-size:1.125rem;--text-md-size:1rem;--text-sm-size:0.875rem;--text-xs-size:0.75rem;--text-xl-line:1.875rem;--text-lg-line:1.75rem;--text-md-line:1.5rem;--text-sm-line:1.25rem;--text-xs-line:1.125rem;--spacing-none:0rem;--spacing-xxs:0.125rem;--spacing-xs:0.25rem;--spacing-sm:0.375rem;--spacing-md:0.5rem;--spacing-lg:0.75rem;--spacing-xl:1rem;--spacing-2xl:1.25rem;--spacing-3xl:1.5rem;--spacing-4xl:2rem;--spacing-5xl:2.5rem;--spacing-6xl:3rem;--radius-none:0rem;--radius-xxs:0.125rem;--radius-xs:0.25rem;--radius-sm:0.375rem;--radius-md:0.5rem;--radius-lg:0.625rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.25rem;--radius-4xl:1.5rem;--radius-full:9999px;--shadow-xs:0px 1px 2px rgba(16, 24, 40, 0.05);--shadow-sm:0px 1px 3px rgba(16, 24, 40, 0.1),\n    0px 1px 2px rgba(16, 24, 40, 0.06);--shadow-md:0px 4px 8px -2px rgba(16, 24, 40, 0.1),\n    0px 2px 4px -2px rgba(16, 24, 40, 0.06);--shadow-lg:0px 12px 16px -4px rgba(16, 24, 40, 0.08),\n    0px 4px 6px -2px rgba(16, 24, 40, 0.03);--shadow-xl:0px 20px 24px -4px rgba(16, 24, 40, 0.08),\n    0px 8px 8px -4px rgba(16, 24, 40, 0.03);--icon-compensation-xs-btn:calc(var(--spacing-lg) - var(--spacing-xs));--icon-compensation-sm-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-md-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-lg-btn:calc(var(--spacing-xl) - var(--spacing-xs))}*,*::before,*::after{box-sizing:border-box}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host{display:inline-flex}.illustration{display:inline-flex;align-items:center;justify-content:center;position:relative}.illustration-wrapper{display:flex;flex-direction:column;align-items:center;gap:var(--spacing-3xl)}.illustration-svg-container{display:flex;align-items:center;justify-content:center;position:relative}.illustration-image{width:100%;height:100%;object-fit:contain}.illustration-content{text-align:center;max-width:480px}.illustration-title{font-family:var(--font-inter);font-size:var(--text-lg-size);font-weight:var(--weight-semibold);line-height:var(--text-lg-line);color:var(--color-neutral-900);margin:0 0 var(--spacing-md) 0}.illustration-description{font-family:var(--font-inter);font-size:var(--text-md-size);font-weight:var(--weight-regular);line-height:var(--text-md-line);color:var(--color-neutral-600);margin:0}.illustration-sm .illustration-svg-container{width:80px;height:80px}.illustration-md .illustration-svg-container{width:120px;height:120px}.illustration-lg .illustration-svg-container{width:160px;height:160px}.illustration-xl .illustration-svg-container{width:200px;height:200px}.illustration-2xl .illustration-svg-container{width:240px;height:240px}.illustration-3xl .illustration-svg-container{width:280px;height:280px}.illustration-4xl .illustration-svg-container{width:320px;height:320px}@media (max-width: 768px){.illustration-4xl .illustration-svg-container{width:400px;height:400px}.illustration-3xl .illustration-svg-container{width:320px;height:320px}.illustration-content{max-width:320px}}@media (max-width: 480px){.illustration-4xl .illustration-svg-container,.illustration-3xl .illustration-svg-container{width:280px;height:280px}.illustration-2xl .illustration-svg-container{width:240px;height:240px}}";

const BhIllustrations = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Size of the illustration
     */
    size = 'lg';
    /**
     * Title text to display below the illustration
     */
    illustrationTitle;
    /**
     * Description text to display below the title
     */
    description;
    /**
     * Path to the SVG illustration
     */
    svgPath = '/illustrations/Search-not-found.svg';
    /**
     * Alt text for the illustration image
     */
    alt = 'Illustration';
    getSvgDimensions() {
        switch (this.size) {
            case 'sm':
                return { width: 120, height: 120 };
            case 'md':
                return { width: 160, height: 160 };
            case 'lg':
                return { width: 200, height: 200 };
            case 'xl':
                return { width: 280, height: 280 };
            case '2xl':
                return { width: 360, height: 360 };
            case '3xl':
                return { width: 480, height: 480 };
            case '4xl':
                return { width: 600, height: 600 };
            default:
                return { width: 200, height: 200 };
        }
    }
    render() {
        const dimensions = this.getSvgDimensions();
        return (index.h(index.Host, { key: '3de29d491a6ca150687d9ee0aaaac249d60cc966' }, index.h("div", { key: '03fe38b304e4f6f33018e29e3049ba32adc0dc5d', class: `illustration illustration-${this.size}` }, index.h("div", { key: '49ccf2fd59aee6ed12ae6a341732b98dbc39f60e', class: "illustration-wrapper" }, index.h("div", { key: '0f16a287aa62f2c0f44b08b92434c4495d140c56', class: "illustration-svg-container", style: {
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`,
            } }, index.h("img", { key: '1452a2a5215e1392bea453a1e06590e66c070370', src: this.svgPath, alt: this.alt, style: {
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`,
            }, class: "illustration-image" })), (this.illustrationTitle || this.description) && (index.h("div", { key: '5d57a72b5fa2537061212a20182a4b8802435ca9', class: "illustration-content" }, this.illustrationTitle && (index.h("h3", { key: '32e360bc3e5f033004a02e72f588066324a50781', class: "illustration-title" }, this.illustrationTitle)), this.description && (index.h("p", { key: '32b2d8ea6272362145e5de4ea6077f5ca6fb2373', class: "illustration-description" }, this.description))))))));
    }
};
BhIllustrations.style = bhIllustrationsCss;

exports.bh_illustrations = BhIllustrations;
//# sourceMappingURL=bh-illustrations.entry.cjs.js.map
