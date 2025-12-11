import { p as proxyCustomElement, H, c as createEvent, h } from './p-9a7sQzad.js';
import { d as defineCustomElement$1 } from './p-YJm8-pxX.js';

const bhTagCss = ":host{display:inline-block}.tag{display:inline-flex;align-items:center;justify-content:center;gap:var(--spacing-sm);font-family:var(--font-inter);font-weight:var(--weight-medium);background-color:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:var(--radius-sm);white-space:nowrap;cursor:default;user-select:none}.tag-dismissible{cursor:pointer}.tag-sm{padding:var(--spacing-xxs) var(--spacing-md);font-size:var(--text-sm-size);line-height:var(--text-sm-line)}.tag-sm.tag-dismissible{padding:var(--spacing-xxs) var(--spacing-xs) var(--spacing-xxs) var(--spacing-md)}.tag-md{padding:var(--spacing-xxs) var(--spacing-md);font-size:var(--text-md-size);line-height:var(--text-md-line)}.tag-md.tag-dismissible{padding:var(--spacing-xxs) var(--spacing-xs) var(--spacing-xxs) var(--spacing-md)}.tag-lg{padding:var(--spacing-xs) var(--spacing-lg);font-size:var(--text-md-size);line-height:var(--text-md-line)}.tag-lg.tag-dismissible{padding:var(--spacing-xs) var(--spacing-xs) var(--spacing-xs) var(--spacing-lg)}.tag-content{display:flex;align-items:center;gap:var(--spacing-xs)}.tag-avatar .tag-content{gap:var(--spacing-sm)}.tag-sm.tag-avatar{padding-left:var(--spacing-xs)}.tag-sm.tag-avatar.tag-dismissible{padding-left:var(--spacing-xs)}.tag-md.tag-avatar{padding-left:var(--spacing-sm)}.tag-md.tag-avatar.tag-dismissible{padding-left:var(--spacing-sm)}.tag-lg.tag-avatar{padding-left:var(--spacing-sm)}.tag-lg.tag-avatar.tag-dismissible{padding-left:var(--spacing-sm)}.tag-label-wrapper{position:relative;display:inline-flex;align-items:center;max-width:100%}.tag-label{color:var(--color-neutral-700);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag-dismiss{display:flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:var(--spacing-xxs);border-radius:var(--radius-xs);transition:background-color 0.2s ease;width:var(--spacing-xl);height:var(--spacing-xl);flex-shrink:0}.tag-lg .tag-dismiss{padding:var(--spacing-xs);width:var(--spacing-2xl);height:var(--spacing-2xl)}.tag-dismiss:hover{background-color:var(--color-neutral-100)}.tag-dismiss:disabled{cursor:not-allowed;opacity:0.5}.tag-dismiss-icon{font-size:var(--text-sm-size);color:var(--color-neutral-500);line-height:1;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20}.tag-lg .tag-dismiss-icon{font-size:var(--text-md-size)}.tag-disabled{opacity:0.5;cursor:not-allowed}.tag:hover{border-color:var(--color-neutral-300)}.tag-disabled:hover{border-color:var(--color-neutral-200)}.animate-dismiss{animation:dismiss 0.2s ease-out forwards}@keyframes dismiss{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.8)}}";

const BhTag = /*@__PURE__*/ proxyCustomElement(class BhTag extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhDismiss = createEvent(this, "bhDismiss");
    }
    /** Tag variant */
    variant = 'text-only';
    /** Tag size */
    size = 'md';
    /** Tag label text */
    label = 'Label';
    /** Whether the tag is dismissible */
    dismissible = false;
    /** Whether the tag is disabled */
    disabled = false;
    /** Maximum width for the label (in pixels) */
    maxWidth = 120;
    /** Avatar image source (for avatar variant) */
    avatarSrc = '';
    /** Internal dismissing state */
    isDismissing = false;
    /** Emitted when dismiss button is clicked */
    bhDismiss;
    handleDismiss = (event) => {
        event.stopPropagation();
        if (this.dismissible && !this.disabled && !this.isDismissing) {
            this.isDismissing = true;
            // Simulate animation duration
            setTimeout(() => {
                this.bhDismiss.emit();
                this.isDismissing = false;
            }, 200);
        }
    };
    render() {
        const classes = {
            'tag': true,
            [`tag-${this.size}`]: true,
            [`tag-${this.variant}`]: true,
            'tag-dismissible': this.dismissible,
            'tag-disabled': this.disabled,
            'animate-dismiss': this.isDismissing,
        };
        const labelStyle = {
            maxWidth: `${this.maxWidth}px`,
        };
        return (h("span", { key: '1ca1b5c6087d2ab438975c186b35bba2e6efa577', class: classes }, h("div", { key: '154d89498369ad08173f16fd04a29dd58b65aba0', class: "tag-content" }, this.variant === 'avatar' && (h("bh-avatar", { key: '85475fb7ed5ec15a68951c1048ce050c43044671', size: "xxs", type: this.avatarSrc ? 'image' : 'placeholder', imageSrc: this.avatarSrc })), h("span", { key: '5acc3f84536abd3b2603fe2f9c015fcb676375e7', class: "tag-label-wrapper" }, h("span", { key: '6314f8db254195d2f412467f349e2a372c9c379f', class: "tag-label", style: labelStyle }, this.label))), this.dismissible && (h("button", { key: '77377b1400258cf418da5391b54229d9e76c715f', class: "tag-dismiss", onClick: this.handleDismiss, disabled: this.disabled, type: "button", "aria-label": "Dismiss" }, h("span", { key: 'd6d6f39c326413da4f155974359960bd121dcbdb', class: "material-symbols-outlined tag-dismiss-icon" }, "close")))));
    }
    static get style() { return bhTagCss; }
}, [769, "bh-tag", {
        "variant": [1],
        "size": [1],
        "label": [1],
        "dismissible": [4],
        "disabled": [4],
        "maxWidth": [2, "max-width"],
        "avatarSrc": [1, "avatar-src"],
        "isDismissing": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-tag", "bh-avatar"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-tag":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhTag);
            }
            break;
        case "bh-avatar":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { BhTag as B, defineCustomElement as d };
//# sourceMappingURL=p-CDPKBnfQ.js.map

//# sourceMappingURL=p-CDPKBnfQ.js.map