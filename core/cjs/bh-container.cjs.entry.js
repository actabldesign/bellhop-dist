'use strict';

var index = require('./index-tZqSQc8E.js');

const bhContainerCss = ":host{display:block}.container{display:flex;flex-direction:column;gap:var(--spacing-2xl);padding:var(--spacing-2xl);background:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:var(--radius-xl);width:fit-content;font-family:var(--font-inter)}.container-with-footer{border-bottom:none;border-radius:var(--radius-xl) var(--radius-xl) var(--radius-none) var(--radius-none)}";

const BhContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: '5db48ed0eb53a7152f5a4b85bef751aaad74c822', class: containerClasses }, index.h("slot", { key: '49dee6c4825466b602f2adf88304f8aeb17d9bbe' })));
    }
};
BhContainer.style = bhContainerCss;

exports.bh_container = BhContainer;
//# sourceMappingURL=bh-container.entry.cjs.js.map
