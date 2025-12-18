import { h, Host } from "@stencil/core";
export class BhCardFooter {
    /**
     * Whether to show the divider above the footer
     */
    showDivider = true;
    /**
     * Alignment of the footer content
     */
    alignment = 'space-between';
    render() {
        const footerContentClasses = {
            'card-footer-content': true,
            [`card-footer-align-${this.alignment}`]: true,
        };
        return (h(Host, { key: '27230a36e6bafcbb61bdac3bc0bcebbd550e70c8' }, h("div", { key: '1f0088fbe2a962080e5db856eb534029ed94d8e2', class: "card-footer" }, this.showDivider && h("div", { key: 'f320e028a9c4675b151547f6e368f67910e87d85', class: "card-footer-divider" }), h("div", { key: '9f35426a461e248e09de3c5e9eca23e7d63d9f08', class: footerContentClasses }, h("div", { key: 'd1d17256b3aa704bb898f711519c96405a7927af', class: "card-footer-primary-actions" }, h("slot", { key: '5f18da8ec38e3a2e2237a3bd4d1269686514047d', name: "primary-actions" })), h("div", { key: '0754da91faf75928a1070a01960f41395f0387dc', class: "card-footer-secondary-actions" }, h("slot", { key: '2ffc5290e3499d62e72fd1398b44811d0f0970ba', name: "secondary-actions" }))))));
    }
    static get is() { return "bh-card-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-card-footer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-card-footer.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Whether to show the divider above the footer"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-divider",
                "defaultValue": "true"
            },
            "alignment": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "CardFooterAlignment",
                    "resolved": "\"left\" | \"right\" | \"space-between\"",
                    "references": {
                        "CardFooterAlignment": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-card-footer/bh-card-footer.tsx",
                            "id": "src/components/bh-card-footer/bh-card-footer.tsx::CardFooterAlignment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Alignment of the footer content"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "alignment",
                "defaultValue": "'space-between'"
            }
        };
    }
}
//# sourceMappingURL=bh-card-footer.js.map
