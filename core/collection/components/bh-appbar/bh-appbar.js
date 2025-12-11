import { h, Host } from "@stencil/core";
export class BhAppbar {
    /**
     * Whether the menu is open
     */
    isMenuOpen = false;
    /**
     * Logo source URL
     */
    logoSrc;
    /**
     * Logo alt text
     */
    logoAlt = 'Solstice';
    /**
     * Breadcrumb items
     */
    breadcrumbItems = [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Dashboards', isActive: true },
    ];
    /**
     * Notification count
     */
    notificationCount = 0;
    /**
     * Event emitted when menu toggle is clicked
     */
    bhMenuToggle;
    /**
     * Event emitted when a breadcrumb is clicked
     */
    bhBreadcrumbClick;
    /**
     * Event emitted when notification icon is clicked
     */
    bhNotificationClick;
    /**
     * Event emitted when calendar icon is clicked
     */
    bhCalendarClick;
    /**
     * Event emitted when settings icon is clicked
     */
    bhSettingsClick;
    handleMenuToggle = () => {
        this.bhMenuToggle.emit();
    };
    handleBreadcrumbClick = (item) => {
        if (item.path && !item.isActive) {
            this.bhBreadcrumbClick.emit(item);
        }
    };
    handleNotificationClick = () => {
        this.bhNotificationClick.emit();
    };
    handleCalendarClick = () => {
        this.bhCalendarClick.emit();
    };
    handleSettingsClick = () => {
        this.bhSettingsClick.emit();
    };
    render() {
        return (h(Host, { key: 'ae8a4a515b6384418dc4a73297d049d052b311f2' }, h("header", { key: '999bad1f106bf9a4fe8107894a55b3b1f683dd84', class: "appbar" }, h("div", { key: 'a5ff9a5e8d90adbf67ad2782eaf5e6ca43702bd4', class: "left-section" }, h("bh-button-icon", { key: '7c25230ad01e084e3ffa43bb3ce037fe9d90724b', hierarchy: "quaternary", size: "sm", iconName: this.isMenuOpen ? 'menu_open' : 'last_page', onClick: this.handleMenuToggle }), this.logoSrc && (h("div", { key: 'dd1630e2a2ff83874a9989fec6c5966d74f6a374', class: "logo" }, h("img", { key: '0971c0630bf69f35db53b36af4c5fc5c38518f56', src: this.logoSrc, alt: this.logoAlt, class: "logo-image" }))), h("slot", { key: '6b42819c05444a2a32522983a18a4526d6ad5753', name: "property-switcher" }), h("bh-breadcrumbs", { key: 'b63deedb1242f22179056f539baff4c118c43ca7', items: this.breadcrumbItems, showHome: true, onBhItemClick: (e) => this.handleBreadcrumbClick(e.detail) })), h("div", { key: '792c8be8095c8a41fbbd57e939bc7a3c8e00dee5', class: "right-section" }, h("div", { key: '3e30fbfaf6989ddea20e90e6e225462bbd5f341d', class: "icon-button-wrapper" }, h("bh-button-icon", { key: '4c91cff44cafe0595adb1dd482e3e6deb62176d0', hierarchy: "quaternary", size: "sm", iconName: "calendar_today", onClick: this.handleCalendarClick }), h("bh-badge-dot", { key: 'a6a0d51fdc1306b3a0006a0dd59a4f8c44445c7d', size: "sm", color: "success", outline: true, class: "icon-badge-dot" })), h("div", { key: 'f6ea9f12906da34315ad1d075fad964473b1bf0b', class: "icon-button-wrapper" }, h("bh-button-icon", { key: 'f35e426048468766bf5c1f314b713b710b095a53', hierarchy: "quaternary", size: "sm", iconName: "settings", onClick: this.handleSettingsClick }), h("bh-badge-dot", { key: 'f94d20164a8a8b21ac09456e824d83b2667efb66', size: "sm", color: "blue", outline: true, class: "icon-badge-dot" })), h("div", { key: 'b92beef52a5fb8d9a20ddf0d65e1de350af7cf14', class: "icon-button-wrapper" }, h("bh-button-icon", { key: '55f3c7485ac9c8aa5ba83fb699c1716cca91e7ae', hierarchy: "quaternary", size: "sm", iconName: "notifications", onClick: this.handleNotificationClick }), this.notificationCount > 0 && (h("bh-badge-dot", { key: 'a7fd28338df24721fd1bf2b6b045631cf86093f0', size: "sm", color: "error", outline: true, class: "icon-badge-dot" })))))));
    }
    static get is() { return "bh-appbar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-appbar.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-appbar.css"]
        };
    }
    static get properties() {
        return {
            "isMenuOpen": {
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
                    "text": "Whether the menu is open"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-menu-open",
                "defaultValue": "false"
            },
            "logoSrc": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Logo source URL"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "logo-src"
            },
            "logoAlt": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Logo alt text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "logo-alt",
                "defaultValue": "'Solstice'"
            },
            "breadcrumbItems": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "BreadcrumbItem[]",
                    "resolved": "BreadcrumbItem[]",
                    "references": {
                        "BreadcrumbItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-appbar/bh-appbar.tsx",
                            "id": "src/components/bh-appbar/bh-appbar.tsx::BreadcrumbItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Breadcrumb items"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[\n    { label: 'Dashboard', path: '/dashboard' },\n    { label: 'Dashboards', isActive: true },\n  ]"
            },
            "notificationCount": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Notification count"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "notification-count",
                "defaultValue": "0"
            }
        };
    }
    static get events() {
        return [{
                "method": "bhMenuToggle",
                "name": "bhMenuToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when menu toggle is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhBreadcrumbClick",
                "name": "bhBreadcrumbClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when a breadcrumb is clicked"
                },
                "complexType": {
                    "original": "BreadcrumbItem",
                    "resolved": "BreadcrumbItem",
                    "references": {
                        "BreadcrumbItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-appbar/bh-appbar.tsx",
                            "id": "src/components/bh-appbar/bh-appbar.tsx::BreadcrumbItem"
                        }
                    }
                }
            }, {
                "method": "bhNotificationClick",
                "name": "bhNotificationClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when notification icon is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhCalendarClick",
                "name": "bhCalendarClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when calendar icon is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhSettingsClick",
                "name": "bhSettingsClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when settings icon is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-appbar.js.map
