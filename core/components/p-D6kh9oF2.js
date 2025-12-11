import { p as proxyCustomElement, H, h } from './p-9a7sQzad.js';

const bhTooltipCss = ":host{display:inline-block}.tooltip{position:absolute;z-index:10000;pointer-events:none;opacity:0;transition:opacity 0.2s ease-in-out;white-space:nowrap}.tooltip-visible{opacity:1}.tooltip-content{background-color:var(--color-neutral-900);color:var(--color-white);font-family:var(--font-inter);font-weight:var(--weight-semibold);font-size:12px;line-height:1.5em;padding:8px 12px;border-radius:8px;box-shadow:var(--shadow-popover);position:relative}.tooltip-top{bottom:100%;left:50%;transform:translateX(-50%);margin-bottom:6px}.tooltip-bottom{top:100%;left:50%;transform:translateX(-50%);margin-top:6px}.tooltip-left{right:100%;top:50%;transform:translateY(-50%);margin-right:6px}.tooltip-right{left:100%;top:50%;transform:translateY(-50%);margin-left:6px}.tooltip.multiline{white-space:normal}.tooltip.multiline .tooltip-content{max-width:240px}.tooltip-icon.tooltip-top{margin-bottom:4px}.tooltip-icon.tooltip-bottom{margin-top:4px}.tooltip-icon.tooltip-left{margin-right:4px}.tooltip-icon.tooltip-right{margin-left:4px}";

const BhTooltip = /*@__PURE__*/ proxyCustomElement(class BhTooltip extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    /**
     * The tooltip text content
     */
    text = '';
    /**
     * Position of the tooltip relative to its target
     */
    position = 'top';
    /**
     * Variant of the tooltip (default or icon)
     */
    variant = 'default';
    /**
     * Whether the tooltip is visible
     */
    visible = false;
    /**
     * Maximum width in pixels (enables multiline if > 240)
     */
    maxWidth;
    render() {
        const tooltipClasses = {
            'tooltip': true,
            [`tooltip-${this.position}`]: true,
            [`tooltip-${this.variant}`]: true,
            'tooltip-visible': this.visible,
            'multiline': this.maxWidth !== undefined && this.maxWidth > 240,
        };
        const tooltipStyles = this.maxWidth ? { maxWidth: `${this.maxWidth}px` } : {};
        return (h("div", { key: '1306877d710884c4fee82aec1abb4ff8b8cddc9b', class: tooltipClasses, style: tooltipStyles, role: "tooltip", part: "tooltip" }, h("div", { key: 'e0163acbd31726d37b1c3fa249640a9f3af447ca', class: "tooltip-content" }, this.text)));
    }
    static get style() { return bhTooltipCss; }
}, [769, "bh-tooltip", {
        "text": [1],
        "position": [1],
        "variant": [1],
        "visible": [4],
        "maxWidth": [2, "max-width"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-tooltip":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhTooltip);
            }
            break;
    } });
}
defineCustomElement();

export { BhTooltip as B, defineCustomElement as d };
//# sourceMappingURL=p-D6kh9oF2.js.map

//# sourceMappingURL=p-D6kh9oF2.js.map