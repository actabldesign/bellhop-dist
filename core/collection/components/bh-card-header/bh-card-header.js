import { h, Host } from "@stencil/core";
export class BhCardHeader {
    /**
     * Whether to show the featured icon
     */
    showFeaturedIcon = true;
    /**
     * The Material Symbol icon name for the featured icon
     */
    featuredIcon = 'star';
    /**
     * The style of the featured icon
     */
    featuredIconStyle = 'outlined';
    /**
     * The color of the featured icon
     */
    featuredIconColor = 'gray';
    /**
     * Whether to show the title
     */
    showTitle = true;
    /**
     * The title text
     */
    headerTitle = 'Card title';
    /**
     * Whether to show the badge
     */
    showBadge = false;
    /**
     * The badge text
     */
    badgeText = '';
    /**
     * Whether to show the supporting text
     */
    showSupportingText = true;
    /**
     * The supporting text (description)
     */
    supportingText = 'Card description';
    /**
     * Whether to show the dropdown menu button
     */
    showDropdown = true;
    /**
     * Whether to show the divider
     */
    showDivider = true;
    /**
     * Emitted when the dropdown button is clicked
     */
    bhDropdownClick;
    handleDropdownClick = () => {
        this.bhDropdownClick.emit();
    };
    render() {
        return (h(Host, { key: '58db2d5c1ca47600da5c07ea2750ecb1c2f2a4a7' }, h("div", { key: '70cbc0d9779b1f5e75a774f40715001c904f2670', class: "card-header" }, h("div", { key: 'fb602ff3a92aa06d51df870ea4e5b3a6f11e9309', class: "card-header-content" }, h("div", { key: '00a315a07bc10dc72c36cbc79e0d24c9570dcdc7', class: "card-header-text-container" }, h("div", { key: '42d15bc872bf00216be3fcff6bee772bcab7b14e', class: "card-header-title-row" }, this.showFeaturedIcon && (h("bh-featured-icon", { key: 'd9294c5035425329806b0b575cf4799defed83f9', size: "sm", icon: this.featuredIcon, iconStyle: this.featuredIconStyle, color: this.featuredIconColor })), this.showTitle && (h("span", { key: '96399bb209d70a9694fab80e0e0c4ece3025ade5', class: "card-header-title" }, this.headerTitle)), this.showBadge && this.badgeText && (h("bh-badge", { key: 'e030d01179a3e0cc3dbbc972a7251dd49a661533', variant: "blue", size: "sm", emphasis: "medium", label: this.badgeText }))), this.showSupportingText && (h("div", { key: 'e4a1253d649a77d9d6a5f12313f279e18b509304', class: "card-header-supporting-row" }, this.showFeaturedIcon && h("div", { key: 'bf5f6482b25ad7c35f6f42f18001064f1a5f8be9', class: "card-header-spacer" }), h("span", { key: '256fa43537b957a80190ce8683484cbaef0ade56', class: "card-header-supporting-text" }, this.supportingText)))), this.showDropdown && (h("bh-button-icon", { key: 'ab3df5c4b4fd8dbeb56c1860d2b38334ed6fa29e', hierarchy: "quaternary", size: "sm", iconName: "more_vert", ariaLabel: "More options", onBhClick: this.handleDropdownClick }))), h("slot", { key: '836d525ba14a3f7020fecdcf3660e2e50353a9de', name: "tabs" }), this.showDivider && h("div", { key: '9b96114d09fb987fe710de8a6438141c380c07e3', class: "card-header-divider" }))));
    }
    static get is() { return "bh-card-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-card-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-card-header.css"]
        };
    }
    static get properties() {
        return {
            "showFeaturedIcon": {
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
                    "text": "Whether to show the featured icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-featured-icon",
                "defaultValue": "true"
            },
            "featuredIcon": {
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
                    "text": "The Material Symbol icon name for the featured icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "featured-icon",
                "defaultValue": "'star'"
            },
            "featuredIconStyle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "CardHeaderFeaturedIconStyle",
                    "resolved": "\"filled\" | \"outlined\"",
                    "references": {
                        "CardHeaderFeaturedIconStyle": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-card-header/bh-card-header.tsx",
                            "id": "src/components/bh-card-header/bh-card-header.tsx::CardHeaderFeaturedIconStyle"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The style of the featured icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "featured-icon-style",
                "defaultValue": "'outlined'"
            },
            "featuredIconColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "CardHeaderFeaturedIconColor",
                    "resolved": "\"brand\" | \"error\" | \"gray\" | \"highlight\" | \"success\" | \"warning\"",
                    "references": {
                        "CardHeaderFeaturedIconColor": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-card-header/bh-card-header.tsx",
                            "id": "src/components/bh-card-header/bh-card-header.tsx::CardHeaderFeaturedIconColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The color of the featured icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "featured-icon-color",
                "defaultValue": "'gray'"
            },
            "showTitle": {
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
                    "text": "Whether to show the title"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-title",
                "defaultValue": "true"
            },
            "headerTitle": {
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
                    "text": "The title text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "header-title",
                "defaultValue": "'Card title'"
            },
            "showBadge": {
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
                    "text": "Whether to show the badge"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-badge",
                "defaultValue": "false"
            },
            "badgeText": {
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
                    "text": "The badge text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "badge-text",
                "defaultValue": "''"
            },
            "showSupportingText": {
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
                    "text": "Whether to show the supporting text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-supporting-text",
                "defaultValue": "true"
            },
            "supportingText": {
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
                    "text": "The supporting text (description)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "supporting-text",
                "defaultValue": "'Card description'"
            },
            "showDropdown": {
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
                    "text": "Whether to show the dropdown menu button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-dropdown",
                "defaultValue": "true"
            },
            "showDivider": {
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
                    "text": "Whether to show the divider"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-divider",
                "defaultValue": "true"
            }
        };
    }
    static get events() {
        return [{
                "method": "bhDropdownClick",
                "name": "bhDropdownClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the dropdown button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-card-header.js.map
