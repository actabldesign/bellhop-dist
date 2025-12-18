'use strict';

var index = require('./index-DQwSUT6k.js');

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
        return (index.h("div", { key: '096e9dd4d72f0cf782ce816dc340f78778e2b635', class: containerClasses }, index.h("slot", { key: '436351398c2377581596f9956df6b7681d9c8aac' })));
    }
};
BhContainer.style = bhContainerCss;

exports.bh_container = BhContainer;
//# sourceMappingURL=bh-container.entry.cjs.js.map
