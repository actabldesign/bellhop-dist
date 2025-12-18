import { r as registerInstance, c as createEvent, h } from './index-nAAobRRQ.js';

const bhButtonCss = ":host{display:inline-block}.btn{display:inline-flex;align-items:center;justify-content:center;gap:var(--spacing-xs);font-family:var(--font-inter);font-weight:var(--weight-medium);border:1px solid transparent;cursor:pointer;text-align:center;white-space:nowrap;transition:all 0.2s ease-in-out;text-decoration:none;outline:none}.btn-xs{padding:0 var(--spacing-lg);height:24px;border-radius:var(--radius-md);font-size:var(--text-sm-size)}.btn-sm{padding:0 var(--spacing-xl);height:32px;border-radius:var(--radius-md);font-size:var(--text-sm-size)}.btn-md{padding:0 var(--spacing-xl);height:40px;border-radius:var(--radius-md);font-size:var(--text-sm-size)}.btn-lg{padding:0 var(--spacing-xl);height:48px;border-radius:var(--radius-md);gap:var(--spacing-sm);font-size:var(--text-md-size)}.btn-xs.btn-icon-leading{padding-left:var(\n    --icon-compensation-xs-btn,\n    calc(var(--spacing-lg) - var(--spacing-xs))\n  )}.btn-sm.btn-icon-leading{padding-left:var(\n    --icon-compensation-sm-btn,\n    calc(var(--spacing-xl) - var(--spacing-xs))\n  )}.btn-md.btn-icon-leading{padding-left:var(\n    --icon-compensation-md-btn,\n    calc(var(--spacing-xl) - var(--spacing-xs))\n  )}.btn-lg.btn-icon-leading{padding-left:var(\n    --icon-compensation-lg-btn,\n    calc(var(--spacing-xl) - var(--spacing-xs))\n  )}.btn-xs.btn-icon-trailing{padding-right:var(\n    --icon-compensation-xs-btn,\n    calc(var(--spacing-lg) - var(--spacing-xs))\n  )}.btn-sm.btn-icon-trailing{padding-right:var(\n    --icon-compensation-sm-btn,\n    calc(var(--spacing-xl) - var(--spacing-xs))\n  )}.btn-md.btn-icon-trailing{padding-right:var(\n    --icon-compensation-md-btn,\n    calc(var(--spacing-xl) - var(--spacing-xs))\n  )}.btn-lg.btn-icon-trailing{padding-right:var(\n    --icon-compensation-lg-btn,\n    calc(var(--spacing-xl) - var(--spacing-xs))\n  )}.btn-primary.btn-default{background-color:var(--color-brand-600);color:var(--color-white);border-color:var(--color-brand-600)}.btn-secondary.btn-default{background-color:var(--color-white);color:var(--color-neutral-600);border-color:var(--color-neutral-300)}.btn-tertiary.btn-default{background-color:transparent;color:var(--color-neutral-600);border-color:transparent}.btn-quaternary.btn-default{background-color:transparent;color:var(--color-brand-600);border-color:transparent}.btn-primary.btn-destructive{background-color:var(--color-error-600);color:var(--color-white);border-color:var(--color-error-600)}.btn-secondary.btn-destructive{background-color:var(--color-white);color:var(--color-error-600);border-color:var(--color-error-300)}.btn-tertiary.btn-destructive{background-color:transparent;color:var(--color-error-600);border-color:transparent}.btn-quaternary.btn-destructive{background-color:transparent;color:var(--color-error-600);border-color:transparent}.btn-primary.btn-success{background-color:var(--color-success-600);color:var(--color-white);border-color:var(--color-success-600)}.btn-secondary.btn-success{background-color:var(--color-white);color:var(--color-success-600);border-color:var(--color-success-300)}.btn-tertiary.btn-success{background-color:transparent;color:var(--color-success-600);border-color:transparent}.btn-quaternary.btn-success{background-color:transparent;color:var(--color-success-600);border-color:transparent}.btn-primary.btn-default:hover:not(:disabled):not(.btn-disabled){background-color:var(--color-brand-700);border-color:var(--color-brand-700)}.btn-secondary.btn-default:hover:not(:disabled):not(.btn-disabled){background-color:var(--color-neutral-50);color:var(--color-neutral-700);border-color:var(--color-neutral-400)}.btn-tertiary.btn-default:hover:not(:disabled):not(.btn-disabled){background-color:var(--color-neutral-100);color:var(--color-neutral-700)}.btn-quaternary.btn-default:hover:not(:disabled):not(.btn-disabled){color:var(--color-brand-700)}.btn-primary.btn-destructive:hover:not(:disabled):not(.btn-disabled){background-color:var(--color-error-700);border-color:var(--color-error-700)}.btn-secondary.btn-destructive:hover:not(:disabled):not(.btn-disabled){background-color:var(--color-error-50);border-color:var(--color-error-300)}.btn-tertiary.btn-destructive:hover:not(:disabled):not(.btn-disabled){background-color:var(--color-error-50)}.btn-quaternary.btn-destructive:hover:not(:disabled):not(.btn-disabled){color:var(--color-error-700)}.btn-primary.btn-success:hover:not(:disabled):not(.btn-disabled){background-color:var(--color-success-700);border-color:var(--color-success-700)}.btn-secondary.btn-success:hover:not(:disabled):not(.btn-disabled){background-color:var(--color-success-50);border-color:var(--color-success-300)}.btn-tertiary.btn-success:hover:not(:disabled):not(.btn-disabled){background-color:var(--color-success-50)}.btn-quaternary.btn-success:hover:not(:disabled):not(.btn-disabled){color:var(--color-success-700)}.btn-primary.btn-default:active:not(:disabled):not(.btn-disabled){background-color:var(--color-brand-800);border-color:var(--color-brand-800)}.btn-secondary.btn-default:active:not(:disabled):not(.btn-disabled){background-color:var(--color-neutral-100);border-color:var(--color-neutral-500)}.btn-tertiary.btn-default:active:not(:disabled):not(.btn-disabled){background-color:var(--color-neutral-100)}.btn-quaternary.btn-default:active:not(:disabled):not(.btn-disabled){color:var(--color-brand-800)}.btn-primary.btn-destructive:active:not(:disabled):not(.btn-disabled){background-color:var(--color-error-800);border-color:var(--color-error-800)}.btn-secondary.btn-destructive:active:not(:disabled):not(.btn-disabled){background-color:var(--color-error-100);border-color:var(--color-error-400)}.btn-tertiary.btn-destructive:active:not(:disabled):not(.btn-disabled){background-color:var(--color-error-100)}.btn-quaternary.btn-destructive:active:not(:disabled):not(.btn-disabled){color:var(--color-error-800)}.btn-primary.btn-success:active:not(:disabled):not(.btn-disabled){background-color:var(--color-success-800);border-color:var(--color-success-800)}.btn-secondary.btn-success:active:not(:disabled):not(.btn-disabled){background-color:var(--color-success-100);border-color:var(--color-success-400)}.btn-tertiary.btn-success:active:not(:disabled):not(.btn-disabled){background-color:var(--color-success-100)}.btn-quaternary.btn-success:active:not(:disabled):not(.btn-disabled){color:var(--color-success-800)}.btn.btn-default:focus,.btn.btn-default:focus-visible{outline:2px solid var(--color-brand-500);outline-offset:2px}.btn.btn-destructive:focus,.btn.btn-destructive:focus-visible{outline:2px solid var(--color-error-500);outline-offset:2px}.btn.btn-success:focus,.btn.btn-success:focus-visible{outline:2px solid var(--color-success-500);outline-offset:2px}.btn:disabled,.btn-disabled{cursor:not-allowed;pointer-events:none}.btn-primary:disabled,.btn-primary.btn-disabled{background-color:var(--color-neutral-200);color:var(--color-neutral-400);border-color:var(--color-neutral-200)}.btn-secondary:disabled,.btn-secondary.btn-disabled,.btn-tertiary:disabled,.btn-tertiary.btn-disabled,.btn-quaternary:disabled,.btn-quaternary.btn-disabled{opacity:0.5}.btn-loading{cursor:wait;pointer-events:none}.btn-loading .btn-label{opacity:0.7}.btn-label{display:inline-block;line-height:inherit}.btn-quaternary .btn-label{text-decoration:underline}.btn-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0}.btn-icon-material{line-height:1;vertical-align:middle;color:inherit !important}.btn-xs .btn-icon-material{font-size:var(--text-sm-size)}.btn-sm .btn-icon-material{font-size:var(--text-md-size)}.btn-md .btn-icon-material{font-size:var(--text-lg-size)}.btn-lg .btn-icon-material{font-size:var(--text-lg-size)}.btn-icon-only{padding:0}.btn-icon-only.btn-xs{width:24px;height:24px}.btn-icon-only.btn-sm{width:32px;height:32px}.btn-icon-only.btn-md{width:40px;height:40px}.btn-icon-only.btn-lg{width:48px;height:48px}.btn-icon-only .btn-icon-material{margin:0}.btn-loading-icon{line-height:1;vertical-align:middle;color:inherit;animation:spin 1s linear infinite}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.text-sm{font-size:var(--text-sm-size);line-height:var(--text-sm-line)}.text-md{font-size:var(--text-md-size);line-height:var(--text-md-line)}.icon-md{width:20px;height:20px}.icon-lg{width:24px;height:24px}";

const BhButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhClick = createEvent(this, "bhClick");
    }
    /**
     * The visual hierarchy of the button
     */
    hierarchy = 'primary';
    /**
     * The kind/semantic meaning of the button
     */
    kind = 'default';
    /**
     * Icon position relative to the label
     */
    icon = 'none';
    /**
     * The size of the button
     */
    size = 'md';
    /**
     * Fallback text label (used only if no slot content is provided)
     */
    label;
    /**
     * Material Symbols icon name (e.g., 'add', 'edit', 'delete')
     */
    iconName;
    /**
     * Whether the button is disabled
     */
    disabled = false;
    /**
     * Whether the button is in a loading state
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
     * Emitted when the button is clicked
     */
    bhClick;
    handleClick = (event) => {
        if (!this.disabled && !this.loading) {
            this.bhClick.emit(event);
        }
    };
    getIconSizeClass() {
        switch (this.size) {
            case 'sm':
            case 'md':
                return 'icon-md';
            case 'lg':
                return 'icon-lg';
            default:
                return 'icon-md';
        }
    }
    getTextSizeClass() {
        switch (this.size) {
            case 'sm':
            case 'md':
                return 'text-sm';
            case 'lg':
                return 'text-md';
            default:
                return 'text-sm';
        }
    }
    getLoaderSize() {
        switch (this.size) {
            case 'xs':
            case 'sm':
                return 'sm';
            default:
                return 'sm';
        }
    }
    getLoaderVariant() {
        // Primary buttons (all kinds) have dark background, so use white spinner
        return this.hierarchy === 'primary' ? 'white' : 'default';
    }
    render() {
        const showLabel = this.icon !== 'only';
        const showLeadingIcon = this.icon === 'leading' && (this.iconName || this.loading);
        const showTrailingIcon = this.icon === 'trailing' && this.iconName && !this.loading;
        const showOnlyIcon = this.icon === 'only' && (this.iconName || this.loading);
        const buttonClasses = {
            btn: true,
            [`btn-${this.hierarchy}`]: true,
            [`btn-${this.kind}`]: true,
            [`btn-${this.size}`]: true,
            [`btn-icon-${this.icon}`]: true,
            'btn-disabled': this.disabled,
            'btn-loading': this.loading,
        };
        return (h("button", { key: 'f2f54633cb42a7fea15c38aa8bc24be085320dc9', type: this.type, class: buttonClasses, disabled: this.disabled, onClick: this.handleClick, part: "button" }, showLeadingIcon && (h("span", { key: '682a4704e4f874b4f3d051aab4738829cbd47778', class: `btn-icon ${this.getIconSizeClass()}` }, this.loading ? (h("bh-loader-spinner", { size: this.getLoaderSize(), variant: this.getLoaderVariant() })) : (h("span", { class: "btn-icon-material material-symbols-outlined" }, this.iconName)))), showOnlyIcon && (h("span", { key: '767e0ee41843e2ef8b3a45ec82f15602848ad751', class: `btn-icon ${this.getIconSizeClass()}` }, this.loading ? (h("bh-loader-spinner", { size: this.getLoaderSize(), variant: this.getLoaderVariant() })) : (h("span", { class: "btn-icon-material material-symbols-outlined" }, this.iconName)))), showLabel && (h("span", { key: 'bb2ddbcf7eb35dd5af688a6fc6d61d07f67d90ba', class: `btn-label ${this.getTextSizeClass()}` }, h("slot", { key: '010690eeab4cea1205d2ebca5cc2e1bfc95048c7' }, this.label))), showTrailingIcon && (h("span", { key: '9de8df1ab10e9035affbd766fea95896762e2bca', class: `btn-icon ${this.getIconSizeClass()}` }, h("span", { key: 'b50370274c0513a7885eae4bf40235c3e7e245aa', class: "btn-icon-material material-symbols-outlined" }, this.iconName)))));
    }
};
BhButton.style = bhButtonCss;

export { BhButton as B };
//# sourceMappingURL=bh-button-ImGVvXaj.js.map

//# sourceMappingURL=bh-button-ImGVvXaj.js.map