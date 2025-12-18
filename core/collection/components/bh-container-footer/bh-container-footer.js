import { h } from "@stencil/core";
export class BhContainerFooter {
    /**
     * Size variant of the footer
     */
    size = 'standard';
    /**
     * Label for the footer button
     */
    buttonLabel = 'View report';
    /**
     * Event emitted when the button is clicked
     */
    bhButtonClick;
    handleButtonClick = () => {
        this.bhButtonClick.emit();
    };
    render() {
        const footerClasses = {
            'container-footer': true,
            [`container-footer-${this.size}`]: true,
        };
        return (h("div", { key: '88f782bfc7a086e8facafa3450e19eb0b354e842', class: footerClasses }, h("div", { key: '02e63532e246742d155a5f74b4e8f777482711ca', class: "container-footer-content" }, h("bh-button", { key: '83aa00d05a1c0fa98fedca50724ce1fb3d293f8a', hierarchy: "quaternary", size: "sm", label: this.buttonLabel, onClick: this.handleButtonClick }))));
    }
    static get is() { return "bh-container-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-container-footer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-container-footer.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ContainerFooterSize",
                    "resolved": "\"minimal\" | \"standard\"",
                    "references": {
                        "ContainerFooterSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-container-footer/bh-container-footer.tsx",
                            "id": "src/components/bh-container-footer/bh-container-footer.tsx::ContainerFooterSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size variant of the footer"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'standard'"
            },
            "buttonLabel": {
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
                    "text": "Label for the footer button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "button-label",
                "defaultValue": "'View report'"
            }
        };
    }
    static get events() {
        return [{
                "method": "bhButtonClick",
                "name": "bhButtonClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-container-footer.js.map
