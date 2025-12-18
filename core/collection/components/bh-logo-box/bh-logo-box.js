import { h, Host } from "@stencil/core";
export class BhLogoBox {
    /**
     * Type of logo to display
     */
    logoType = 'actabl';
    /**
     * Custom logo source URL. If provided, overrides the default logo path.
     */
    logoSrc;
    /**
     * Base path for asset URLs. Defaults to '/bellhop/assets'
     */
    assetBasePath = '/bellhop/assets';
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
        if (this.logoSrc) {
            return this.logoSrc;
        }
        const logoMap = {
            actabl: 'actabl.svg',
            al: 'AL.svg',
            he: 'HE.svg',
            ps: 'PS.svg',
            tr: 'TR.svg',
        };
        const logoFile = logoMap[this.logoType] || 'actabl.svg';
        return `${this.assetBasePath}/logos/${logoFile}`;
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
        return (h(Host, { key: 'cddf182854e6f8d264dd11f87ff837c116b4b749' }, h("div", { key: '592e2ba2a109d7c88ebd32718ba6e58bfa5fdc2f', class: logoBoxClasses }, h("div", { key: '219a43154e0e2d216beaf5c071d36a09bf6de8a9', ref: (el) => (this.logoActiveRef = el), class: "logo-active", onClick: this.handleLogoClick }, h("img", { key: '7e69029e9e9f70f6395f128b348a6592fcce6731', src: this.getLogoSrc(), alt: `${this.logoType} logo`, class: logoClasses })), h("div", { key: '81edc7607a9aceb72d32d790e948d347f50555dc', class: "logo-more-products" })), h("bh-product-switcher", { key: '17d181c5e33d7cc942433345cc8c88a5b1ef1671', isOpen: this.isOpen, anchorPosition: this.anchorPosition, products: this.products, onBhClose: this.handleClose, onBhProductSelect: this.handleProductSelect })));
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
                    "text": "Custom logo source URL. If provided, overrides the default logo path."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "logo-src"
            },
            "assetBasePath": {
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
                    "text": "Base path for asset URLs. Defaults to '/bellhop/assets'"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "asset-base-path",
                "defaultValue": "'/bellhop/assets'"
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
