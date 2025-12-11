import { h, Host } from "@stencil/core";
export class BhLogoBox {
    /**
     * Type of logo to display
     */
    logoType = 'actabl';
    /**
     * Array of products to display in the switcher
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
     * Event emitted when a product is selected
     */
    bhProductSelect;
    isOpen = false;
    anchorPosition = { top: 0, left: 0 };
    logoActiveRef;
    handleLogoClick = () => {
        if (this.logoActiveRef) {
            const rect = this.logoActiveRef.getBoundingClientRect();
            this.anchorPosition = {
                top: rect.bottom + 8,
                left: rect.left,
            };
            this.isOpen = !this.isOpen;
        }
    };
    handleClose = () => {
        this.isOpen = false;
    };
    handleProductSelect = (event) => {
        this.bhProductSelect.emit(event.detail);
        this.isOpen = false;
    };
    getLogoSrc = () => {
        switch (this.logoType) {
            case 'actabl':
                return './assets/logos/actabl.svg';
            case 'al':
                return './assets/logos/AL.svg';
            case 'he':
                return './assets/logos/HE.svg';
            case 'ps':
                return './assets/logos/PS.svg';
            case 'tr':
                return './assets/logos/TR.svg';
            default:
                return './assets/logos/actabl.svg';
        }
    };
    render() {
        const logoBoxClasses = {
            'logo-box': true,
            'dropdown-open': this.isOpen,
        };
        const logoClasses = {
            'logo': true,
            [`logo-${this.logoType}`]: true,
        };
        return (h(Host, { key: '7701200e2297867a3188f74663d5dcfc3c1bddbe' }, h("div", { key: 'c625d8d74cd94e2e2abfa283f45a79a6928e3868', class: logoBoxClasses }, h("div", { key: 'bcc3c1e4dfd02e590264ac1075632af0c0626edb', ref: (el) => (this.logoActiveRef = el), class: "logo-active", onClick: this.handleLogoClick }, h("img", { key: '592a65fe63945bcb878a0065c4427f19e1bac041', src: this.getLogoSrc(), alt: `${this.logoType} logo`, class: logoClasses })), h("div", { key: '552fbdbb59627349a60f86724677cbec7403ddf8', class: "logo-more-products" })), h("bh-product-switcher", { key: '588e16d9ad19f15c2c46509562ca78bd0aa5f7ae', isOpen: this.isOpen, anchorPosition: this.anchorPosition, products: this.products, onBhClose: this.handleClose, onBhProductSelect: this.handleProductSelect })));
    }
    static get is() { return "bh-logo-box"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-logo-box.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-logo-box.css"]
        };
    }
    static get properties() {
        return {
            "logoType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "LogoType",
                    "resolved": "\"actabl\" | \"al\" | \"he\" | \"ps\" | \"tr\"",
                    "references": {
                        "LogoType": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-logo-box/bh-logo-box.tsx",
                            "id": "src/components/bh-logo-box/bh-logo-box.tsx::LogoType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of logo to display"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "logo-type",
                "defaultValue": "'actabl'"
            },
            "products": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "BhProduct[]",
                    "resolved": "BhProduct[]",
                    "references": {
                        "BhProduct": {
                            "location": "import",
                            "path": "../bh-product-switcher/bh-product-switcher",
                            "id": "src/components/bh-product-switcher/bh-product-switcher.tsx::BhProduct"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of products to display in the switcher"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[\n    {\n      id: 'alice',\n      name: 'Alice',\n      description: 'Housekeeping & Guest Services',\n      logo: './assets/logos/AL.svg',\n    },\n    {\n      id: 'hotel-effectiveness',\n      name: 'Hotel Effectiveness',\n      description: 'Labor planning',\n      logo: './assets/logos/HE.svg',\n    },\n    {\n      id: 'profit-sword',\n      name: 'ProfitSword',\n      description: 'B.I and Finance',\n      logo: './assets/logos/PS.svg',\n    },\n    {\n      id: 'transcendent',\n      name: 'Transcendent',\n      description: 'Asset Management & CapEx',\n      logo: './assets/logos/TR.svg',\n    },\n  ]"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "anchorPosition": {}
        };
    }
    static get events() {
        return [{
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
                            "location": "import",
                            "path": "../bh-product-switcher/bh-product-switcher",
                            "id": "src/components/bh-product-switcher/bh-product-switcher.tsx::BhProduct"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=bh-logo-box.js.map
