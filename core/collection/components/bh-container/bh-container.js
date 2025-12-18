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
        return (h("div", { key: '096e9dd4d72f0cf782ce816dc340f78778e2b635', class: containerClasses }, h("slot", { key: '436351398c2377581596f9956df6b7681d9c8aac' })));
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
