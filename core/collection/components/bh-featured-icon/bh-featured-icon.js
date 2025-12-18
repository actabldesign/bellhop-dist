import { h } from "@stencil/core";
export class BhFeaturedIcon {
    /**
     * The size of the featured icon
     */
    size = 'md';
    /**
     * The color theme of the featured icon
     */
    color = 'gray';
    /**
     * The style variant (outlined or filled)
     */
    iconStyle = 'outlined';
    /**
     * The Material Symbol icon name
     */
    icon = 'star';
    render() {
        const containerClasses = {
            'featured-icon': true,
            [`featured-icon-${this.size}`]: true,
            [`featured-icon-${this.color}`]: true,
            [`featured-icon-${this.iconStyle}`]: true,
        };
        const iconClasses = `material-symbols-outlined icon-${this.size}`;
        return (h("div", { key: '93ed57fa603fa36d0eb2ddcfa83895f3b5969083', class: containerClasses, part: "container" }, h("span", { key: '5dd3699dba085ab2e9b8a2d76318edae8e1b8cba', class: iconClasses }, this.icon)));
    }
    static get is() { return "bh-featured-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-featured-icon.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-featured-icon.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FeaturedIconSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\"",
                    "references": {
                        "FeaturedIconSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-featured-icon/bh-featured-icon.tsx",
                            "id": "src/components/bh-featured-icon/bh-featured-icon.tsx::FeaturedIconSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the featured icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FeaturedIconColor",
                    "resolved": "\"brand\" | \"error\" | \"gray\" | \"highlight\" | \"success\" | \"warning\"",
                    "references": {
                        "FeaturedIconColor": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-featured-icon/bh-featured-icon.tsx",
                            "id": "src/components/bh-featured-icon/bh-featured-icon.tsx::FeaturedIconColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The color theme of the featured icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color",
                "defaultValue": "'gray'"
            },
            "iconStyle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FeaturedIconStyle",
                    "resolved": "\"filled\" | \"outlined\"",
                    "references": {
                        "FeaturedIconStyle": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-featured-icon/bh-featured-icon.tsx",
                            "id": "src/components/bh-featured-icon/bh-featured-icon.tsx::FeaturedIconStyle"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The style variant (outlined or filled)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon-style",
                "defaultValue": "'outlined'"
            },
            "icon": {
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
                    "text": "The Material Symbol icon name"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "'star'"
            }
        };
    }
}
//# sourceMappingURL=bh-featured-icon.js.map
