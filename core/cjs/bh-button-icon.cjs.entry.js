'use strict';

var index = require('./index-DQwSUT6k.js');

const bhButtonIconCss = ":host{display:inline-block;font-family:var(--font-inter, 'Inter', -apple-system, BlinkMacSystemFont, sans-serif)}.button-icon{display:inline-flex;align-items:center;justify-content:center;border:none;border-radius:var(--radius-md, 8px);cursor:pointer;transition:all 0.2s ease-in-out;font-family:inherit;outline:none;padding:0}.button-icon:focus-visible{box-shadow:0 0 0 2px var(--color-white, #FFFFFF), 0 0 0 4px var(--color-brand-500, #7F56D9)}.button-icon-xs{width:24px;height:24px}.button-icon-xs .icon{font-size:16px}.button-icon-sm{width:32px;height:32px}.button-icon-sm .icon{font-size:18px}.button-icon-md{width:40px;height:40px}.button-icon-md .icon{font-size:20px}.button-icon-lg{width:48px;height:48px}.button-icon-lg .icon{font-size:24px}.button-icon-primary{background:var(--color-brand-600, #6941C6);color:var(--color-white, #FFFFFF)}.button-icon-primary:hover:not(.button-icon-disabled){background:var(--color-brand-700, #5235A8)}.button-icon-primary:active:not(.button-icon-disabled){background:var(--color-brand-800, #42298F)}.button-icon-secondary{background:var(--color-white, #FFFFFF);color:var(--color-neutral-700, #344054);border:1px solid var(--color-neutral-300, #D0D5DD)}.button-icon-secondary:hover:not(.button-icon-disabled){background:var(--color-neutral-50, #F9FAFB);border-color:var(--color-neutral-400, #98A2B3)}.button-icon-secondary:active:not(.button-icon-disabled){background:var(--color-neutral-100, #F2F4F7)}.button-icon-tertiary{background:transparent;color:var(--color-brand-600, #6941C6)}.button-icon-tertiary:hover:not(.button-icon-disabled){background:var(--color-brand-50, #F9F5FF)}.button-icon-tertiary:active:not(.button-icon-disabled){background:var(--color-brand-100, #F4EBFF)}.button-icon-quaternary{background:transparent;color:var(--color-neutral-500, #667085)}.button-icon-quaternary:hover:not(.button-icon-disabled){background:var(--color-neutral-100, #F2F4F7);color:var(--color-neutral-700, #344054)}.button-icon-quaternary:active:not(.button-icon-disabled){background:var(--color-neutral-200, #EAECF0)}.button-icon-disabled{opacity:0.5;cursor:not-allowed}.button-icon-loading{cursor:wait}.loading-spinner{width:16px;height:16px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:spin 0.8s linear infinite}.button-icon-sm .loading-spinner{width:14px;height:14px}.button-icon-xs .loading-spinner{width:12px;height:12px}.button-icon-lg .loading-spinner{width:20px;height:20px}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.icon{display:flex;align-items:center;justify-content:center}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-smoothing:antialiased;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24}";

const BhButtonIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhClick = index.createEvent(this, "bhClick");
    }
    /**
     * The visual hierarchy of the button
     */
    hierarchy = 'primary';
    /**
     * The size of the button
     */
    size = 'md';
    /**
     * The icon name (Material Symbols)
     */
    iconName = 'add';
    /**
     * Whether the button is disabled
     */
    disabled = false;
    /**
     * Whether the button is in loading state
     */
    loading = false;
    /**
     * The type of button for form submission
     * - 'button': No form submission (default)
     * - 'submit': Submits the form
     * - 'reset': Resets the form
     */
    type = 'button';
    /**
     * Accessible label for the button
     */
    ariaLabel = null;
    /**
     * Emitted when the button is clicked
     */
    bhClick;
    handleClick = (event) => {
        if (!this.disabled && !this.loading) {
            this.bhClick.emit(event);
        }
    };
    handleKeyDown = (event) => {
        if ((event.key === 'Enter' || event.key === ' ') &&
            !this.disabled &&
            !this.loading) {
            event.preventDefault();
            this.bhClick.emit(event);
        }
    };
    render() {
        const buttonClasses = {
            'button-icon': true,
            [`button-icon-${this.hierarchy}`]: true,
            [`button-icon-${this.size}`]: true,
            'button-icon-disabled': this.disabled,
            'button-icon-loading': this.loading,
        };
        return (index.h("button", { key: '8c2a2097a2c7bbbb89a541d4fce7bba4c4eac970', type: this.type, class: buttonClasses, disabled: this.disabled, "aria-label": this.ariaLabel || this.iconName, "aria-disabled": this.disabled ? 'true' : undefined, onClick: this.handleClick, onKeyDown: this.handleKeyDown, part: "button" }, this.loading ? (index.h("span", { class: "loading-spinner", part: "spinner" })) : (index.h("span", { class: "material-symbols-outlined icon", part: "icon" }, this.iconName))));
    }
};
BhButtonIcon.style = bhButtonIconCss;

exports.bh_button_icon = BhButtonIcon;
//# sourceMappingURL=bh-button-icon.entry.cjs.js.map
