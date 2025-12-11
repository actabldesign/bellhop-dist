import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';
import { d as defineCustomElement$1 } from './p-HEcFS8Jc.js';

const bhLogoBoxCss = ".logo-box{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;position:relative;width:40px;flex-shrink:0;isolation:isolate}.logo-active{background-color:var(--color-brand-600);box-sizing:border-box;display:flex;gap:var(--spacing-lg);align-items:center;justify-content:center;padding:var(--spacing-sm);position:relative;border-radius:var(--radius-md);flex-shrink:0;width:40px;height:40px;z-index:2;transition:background-color 0.3s ease;cursor:pointer}.logo-box:hover .logo-active,.logo-box.dropdown-open .logo-active{background-color:var(--color-brand-700)}.logo{overflow:hidden;position:relative;flex-shrink:0;width:32px;height:32px;background-size:contain;background-repeat:no-repeat;background-position:center;transition:background-image 0.4s cubic-bezier(0.08, 0.52, 0.52, 1)}.logo-actabl{}.logo-al{}.logo-he{}.logo-ps{}.logo-tr{}.logo-more-products{position:absolute;background-color:var(--color-brand-200);right:2px;bottom:-4px;border-radius:5px;width:36px;height:35px;z-index:1;transition:transform 0.3s ease}.logo-box:hover .logo-more-products,.logo-box.dropdown-open .logo-more-products{transform:translateY(-4px)}";

const BhLogoBox = /*@__PURE__*/ proxyCustomElement(class BhLogoBox extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhProductSelect = createEvent(this, "bhProductSelect");
    }
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
    static get style() { return bhLogoBoxCss; }
}, [769, "bh-logo-box", {
        "logoType": [1, "logo-type"],
        "products": [16],
        "isOpen": [32],
        "anchorPosition": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-logo-box", "bh-product-switcher"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-logo-box":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhLogoBox);
            }
            break;
        case "bh-product-switcher":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { BhLogoBox as B, defineCustomElement as d };
//# sourceMappingURL=p-DfXkVfrE.js.map

//# sourceMappingURL=p-DfXkVfrE.js.map