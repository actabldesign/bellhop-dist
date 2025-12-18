'use strict';

var index = require('./index-DQwSUT6k.js');

const bhTabsCss = ":host{display:block;width:100%}.tabs-container{display:flex;flex-direction:column;width:100%}.tabs-list{display:flex;gap:var(--spacing-xs);padding:var(--spacing-none);position:relative}.tabs-full-width .tabs-list{width:100%;gap:var(--spacing-lg);justify-content:center}.tabs-underline.tabs-horizontal .tabs-container{border-bottom:1px solid var(--color-neutral-200)}.tabs-underline.tabs-horizontal .tabs-list{gap:var(--spacing-lg)}.tabs-underline.tabs-horizontal.tabs-full-width .tabs-list{gap:var(--spacing-lg)}.tabs-contained .tabs-list{gap:var(--spacing-xs)}.tabs-vertical{width:auto}.tabs-vertical .tabs-container{width:auto}.tabs-vertical .tabs-list{flex-direction:column;gap:var(--spacing-xs);width:204px}.tabs-underline.tabs-vertical .tabs-container{border-bottom:none}";

const BhTabs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhTabChange = index.createEvent(this, "bhTabChange");
    }
    /**
     * The type of tabs: underline or contained style
     */
    type = 'contained';
    /**
     * The orientation of the tabs: horizontal or vertical
     */
    orientation = 'horizontal';
    /**
     * Whether the tabs should take up the full width of the container
     */
    fullWidth = false;
    /**
     * The value of the currently active tab
     */
    value = '';
    /**
     * Emitted when the active tab changes
     */
    bhTabChange;
    handleTabItemClick(event) {
        const value = event.detail;
        if (this.value !== value) {
            this.value = value;
            this.bhTabChange.emit(value);
        }
    }
    render() {
        const hostClasses = {
            tabs: true,
            [`tabs-${this.type}`]: true,
            [`tabs-${this.orientation}`]: true,
            'tabs-full-width': this.fullWidth,
        };
        return (index.h(index.Host, { key: '93b74ceb1d093513ff2d5a167e3de238209411a4', class: hostClasses }, index.h("div", { key: '290c0e7ce4d1ae84e566237a122786e305522b9f', class: "tabs-container", part: "container" }, index.h("div", { key: '424276b73c8279c24441a389026c0c7db25e55b1', class: "tabs-list", part: "list", role: "tablist", "aria-orientation": this.orientation }, index.h("slot", { key: 'fe8030d885237dccbef3d1a70bc912c338b038c6' })))));
    }
};
BhTabs.style = bhTabsCss;

exports.bh_tabs = BhTabs;
//# sourceMappingURL=bh-tabs.entry.cjs.js.map
