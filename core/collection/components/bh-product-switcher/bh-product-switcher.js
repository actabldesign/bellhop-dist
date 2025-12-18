import { h, Host } from "@stencil/core";
export class BhProductSwitcher {
    /**
     * Whether the product switcher is open
     */
    isOpen = false;
    /**
     * Position to anchor the popover
     */
    anchorPosition = { top: 0, left: 0 };
    /**
     * Array of products to display
     */
    products = [
        {
            id: 'alice',
            name: 'Alice',
            description: 'Housekeeping & Guest Services',
            logo: './assets/logos/AL.svg',
        },
        {
            id: 'hotel-effectiveness',
            name: 'Hotel Effectiveness',
            description: 'Labor planning',
            logo: './assets/logos/HE.svg',
        },
        {
            id: 'profit-sword',
            name: 'ProfitSword',
            description: 'B.I and Finance',
            logo: './assets/logos/PS.svg',
        },
        {
            id: 'transcendent',
            name: 'Transcendent',
            description: 'Asset Management & CapEx',
            logo: './assets/logos/TR.svg',
        },
    ];
    /**
     * Event emitted when the switcher should close
     */
    bhClose;
    /**
     * Event emitted when a product is selected
     */
    bhProductSelect;
    isClosing = false;
    containerRef;
    handleDocumentClick(event) {
        const target = event.target;
        if (this.isOpen &&
            this.containerRef &&
            !this.containerRef.contains(target) &&
            !target.closest('.logo-active')) {
            this.handleClose();
        }
    }
    handleClose = () => {
        this.isClosing = true;
        setTimeout(() => {
            this.bhClose.emit();
            this.isClosing = false;
        }, 200);
    };
    handleProductClick = (product) => {
        this.bhProductSelect.emit(product);
        this.handleClose();
    };
    render() {
        if (!this.isOpen)
            return null;
        const containerClasses = {
            'product-switcher-container': true,
            'closing': this.isClosing,
        };
        return (h(Host, null, h("div", { class: "product-switcher-backdrop", onClick: this.handleClose }), h("div", { ref: (el) => this.containerRef = el, class: containerClasses, style: {
                top: `${this.anchorPosition.top}px`,
                left: `${this.anchorPosition.left}px`,
            } }, h("div", { class: "product-switcher-popover" }, this.products.map((product) => {
            const itemClasses = {
                'product-item': true,
                'current': product.current || false,
            };
            return (h("div", { key: product.id, class: itemClasses, onClick: () => this.handleProductClick(product) }, h("div", { class: "product-icon-container" }, h("img", { src: product.logo, alt: `${product.name} logo`, class: "product-icon" })), h("div", { class: "product-info" }, h("div", { class: "product-name" }, product.name), h("div", { class: "product-description" }, product.description))));
        })))));
    }
    static get is() { return "bh-product-switcher"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-product-switcher.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-product-switcher.css"]
        };
    }
    static get properties() {
        return {
            "isOpen": {
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
                    "text": "Whether the product switcher is open"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-open",
                "defaultValue": "false"
            },
            "anchorPosition": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AnchorPosition",
                    "resolved": "AnchorPosition",
                    "references": {
                        "AnchorPosition": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-product-switcher/bh-product-switcher.tsx",
                            "id": "src/components/bh-product-switcher/bh-product-switcher.tsx::AnchorPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position to anchor the popover"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{ top: 0, left: 0 }"
            },
            "products": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "BhProduct[]",
                    "resolved": "BhProduct[]",
                    "references": {
                        "BhProduct": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-product-switcher/bh-product-switcher.tsx",
                            "id": "src/components/bh-product-switcher/bh-product-switcher.tsx::BhProduct"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of products to display"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[\n    {\n      id: 'alice',\n      name: 'Alice',\n      description: 'Housekeeping & Guest Services',\n      logo: './assets/logos/AL.svg',\n    },\n    {\n      id: 'hotel-effectiveness',\n      name: 'Hotel Effectiveness',\n      description: 'Labor planning',\n      logo: './assets/logos/HE.svg',\n    },\n    {\n      id: 'profit-sword',\n      name: 'ProfitSword',\n      description: 'B.I and Finance',\n      logo: './assets/logos/PS.svg',\n    },\n    {\n      id: 'transcendent',\n      name: 'Transcendent',\n      description: 'Asset Management & CapEx',\n      logo: './assets/logos/TR.svg',\n    },\n  ]"
            }
        };
    }
    static get states() {
        return {
            "isClosing": {}
        };
    }
    static get events() {
        return [{
                "method": "bhClose",
                "name": "bhClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the switcher should close"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhProductSelect",
                "name": "bhProductSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when a product is selected"
                },
                "complexType": {
                    "original": "BhProduct",
                    "resolved": "BhProduct",
                    "references": {
                        "BhProduct": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-product-switcher/bh-product-switcher.tsx",
                            "id": "src/components/bh-product-switcher/bh-product-switcher.tsx::BhProduct"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleDocumentClick",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=bh-product-switcher.js.map
