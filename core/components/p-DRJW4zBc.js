import { p as proxyCustomElement, H, h } from './p-9a7sQzad.js';

const bhBadgeDotCss = ":host{display:inline-block}.badge-dot{border-radius:9999px;position:relative;display:inline-block;box-sizing:border-box}.badge-dot-sm{width:6px;height:6px}.badge-dot-md{width:8px;height:8px}.badge-dot-lg{width:10px;height:10px}.badge-dot-success{background-color:var(--color-success-500, #17B26A)}.badge-dot-blue{background-color:var(--color-blue-500, #5068DD)}.badge-dot-error{background-color:var(--color-error-500, #F05250)}.badge-dot-warning{background-color:var(--color-warning-500, #F79009)}.badge-dot-outline.badge-dot-sm{outline:3px solid;outline-offset:0}.badge-dot-outline.badge-dot-md{outline:4px solid;outline-offset:0}.badge-dot-outline.badge-dot-lg{outline:5px solid;outline-offset:0}.badge-dot-outline.badge-dot-success{outline-color:var(--color-success-100, #D1FADF)}.badge-dot-outline.badge-dot-blue{outline-color:var(--color-blue-200, #E1EAFE)}.badge-dot-outline.badge-dot-error{outline-color:var(--color-error-200, #FEE4E2)}.badge-dot-outline.badge-dot-warning{outline-color:var(--color-warning-200, #FEF0C7)}";

const BhBadgeDot = /*@__PURE__*/ proxyCustomElement(class BhBadgeDot extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    /**
     * The size of the badge dot
     */
    size = 'md';
    /**
     * The color of the badge dot
     */
    color = 'error';
    /**
     * Whether to show an outline ring around the dot
     */
    outline = false;
    render() {
        const dotClasses = {
            'badge-dot': true,
            [`badge-dot-${this.size}`]: true,
            [`badge-dot-${this.color}`]: true,
            'badge-dot-outline': this.outline,
        };
        return h("div", { key: 'c5ce0849442e1b1551185936a328987877a888f5', class: dotClasses, part: "dot" });
    }
    static get style() { return bhBadgeDotCss; }
}, [769, "bh-badge-dot", {
        "size": [1],
        "color": [1],
        "outline": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-badge-dot"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-badge-dot":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhBadgeDot);
            }
            break;
    } });
}
defineCustomElement();

export { BhBadgeDot as B, defineCustomElement as d };
//# sourceMappingURL=p-DRJW4zBc.js.map

//# sourceMappingURL=p-DRJW4zBc.js.map