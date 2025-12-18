import { h, Host, } from "@stencil/core";
/**
 * @slot - Tab items (bh-tab-item components)
 */
export class BhTabs {
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
        return (h(Host, { key: '93b74ceb1d093513ff2d5a167e3de238209411a4', class: hostClasses }, h("div", { key: '290c0e7ce4d1ae84e566237a122786e305522b9f', class: "tabs-container", part: "container" }, h("div", { key: '424276b73c8279c24441a389026c0c7db25e55b1', class: "tabs-list", part: "list", role: "tablist", "aria-orientation": this.orientation }, h("slot", { key: 'fe8030d885237dccbef3d1a70bc912c338b038c6' })))));
    }
    static get is() { return "bh-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-tabs.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-tabs.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TabsType",
                    "resolved": "\"contained\" | \"underline\"",
                    "references": {
                        "TabsType": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-tabs/bh-tabs.tsx",
                            "id": "src/components/bh-tabs/bh-tabs.tsx::TabsType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of tabs: underline or contained style"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'contained'"
            },
            "orientation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TabsOrientation",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "TabsOrientation": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-tabs/bh-tabs.tsx",
                            "id": "src/components/bh-tabs/bh-tabs.tsx::TabsOrientation"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The orientation of the tabs: horizontal or vertical"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "orientation",
                "defaultValue": "'horizontal'"
            },
            "fullWidth": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the tabs should take up the full width of the container"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "full-width",
                "defaultValue": "false"
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The value of the currently active tab"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "''"
            }
        };
    }
    static get events() {
        return [{
                "method": "bhTabChange",
                "name": "bhTabChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the active tab changes"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "bhTabItemClick",
                "method": "handleTabItemClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=bh-tabs.js.map
