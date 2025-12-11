import { p as proxyCustomElement, H, h } from './p-9a7sQzad.js';

const bhSkeletonLoaderCss = ":host{display:inline-block}.skeleton{display:inline-block;background:linear-gradient(\n    90deg,\n    rgba(0, 0, 0, 0.06) 25%,\n    rgba(0, 0, 0, 0.03) 50%,\n    rgba(0, 0, 0, 0.06) 75%\n  );background-size:400% 100%;animation:shimmer 1.5s ease-in-out infinite;border-radius:var(--radius-sm);line-height:1}.skeleton-circle{border-radius:50%}.skeleton::before{content:'\\00a0'}@keyframes shimmer{0%{background-position:100% 50%}100%{background-position:0 50%}}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}";

const BhSkeletonLoader$1 = /*@__PURE__*/ proxyCustomElement(class BhSkeletonLoader extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    /**
     * Width of the skeleton (CSS value)
     */
    width = '100%';
    /**
     * Height of the skeleton (CSS value)
     */
    height = '1em';
    /**
     * Whether the skeleton should be circular
     */
    circle = false;
    render() {
        const skeletonClasses = {
            'skeleton': true,
            'skeleton-circle': this.circle,
        };
        return (h("span", { key: 'c49b2ec3dced60f158ec5dbb0471f6fc057984d1', class: skeletonClasses, style: { width: this.width, height: this.height }, role: "status", "aria-live": "polite", "aria-busy": "true", part: "skeleton" }, h("span", { key: 'b360eefd8747e5b5c2a863bf6bf6083b978a6a55', class: "visually-hidden" }, "Loading...")));
    }
    static get style() { return bhSkeletonLoaderCss; }
}, [769, "bh-skeleton-loader", {
        "width": [1],
        "height": [1],
        "circle": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-skeleton-loader"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-skeleton-loader":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhSkeletonLoader$1);
            }
            break;
    } });
}
defineCustomElement$1();

const BhSkeletonLoader = BhSkeletonLoader$1;
const defineCustomElement = defineCustomElement$1;

export { BhSkeletonLoader, defineCustomElement };
//# sourceMappingURL=bh-skeleton-loader.js.map

//# sourceMappingURL=bh-skeleton-loader.js.map