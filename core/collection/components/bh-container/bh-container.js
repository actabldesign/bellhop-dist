import { h } from "@stencil/core";
export class BhContainer {
    /**
     * Whether the container has a footer attached (removes bottom border radius and border)
     */
    withFooter = false;
    render() {
        const containerClasses = {
            'container': true,
            'container-with-footer': this.withFooter,
        };
        return (h("div", { key: '5db48ed0eb53a7152f5a4b85bef751aaad74c822', class: containerClasses }, h("slot", { key: '49dee6c4825466b602f2adf88304f8aeb17d9bbe' })));
    }
    static get is() { return "bh-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-container.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-container.css"]
        };
    }
    static get properties() {
        return {
            "withFooter": {
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
                    "text": "Whether the container has a footer attached (removes bottom border radius and border)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "with-footer",
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=bh-container.js.map
