import { r as registerInstance, h } from './index-nAAobRRQ.js';

const bhContainerCss = ":host{display:block}.container{display:flex;flex-direction:column;gap:var(--spacing-2xl);padding:var(--spacing-2xl);background:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:var(--radius-xl);width:fit-content;font-family:var(--font-inter)}.container-with-footer{border-bottom:none;border-radius:var(--radius-xl) var(--radius-xl) var(--radius-none) var(--radius-none)}";

const BhContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Whether the container has a footer attached (removes bottom border radius and border)
     */
    withFooter = false;
    render() {
        const containerClasses = {
            'container': true,
            'container-with-footer': this.withFooter,
        };
        return (h("div", { key: '096e9dd4d72f0cf782ce816dc340f78778e2b635', class: containerClasses }, h("slot", { key: '436351398c2377581596f9956df6b7681d9c8aac' })));
    }
};
BhContainer.style = bhContainerCss;

export { BhContainer as bh_container };
//# sourceMappingURL=bh-container.entry.js.map
