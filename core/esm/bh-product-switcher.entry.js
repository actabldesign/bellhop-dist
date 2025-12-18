import { r as registerInstance, c as createEvent, h, H as Host } from './index-nAAobRRQ.js';

const bhProductSwitcherCss = ".product-switcher-container{position:fixed;z-index:10000;animation:popoverSlideIn 0.3s ease-out;transform-origin:top center}.product-switcher-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;background:transparent;z-index:9999}.product-switcher-popover{background:rgba(255, 255, 255, 0.9);border:1px solid var(--color-neutral-100);border-radius:var(--radius-lg);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(3px);box-shadow:0px 24px 48px -12px rgba(64, 73, 104, 0.1);padding:var(--spacing-lg);display:flex;flex-direction:column;gap:var(--spacing-md);min-width:250px;position:relative;z-index:10001}@keyframes popoverSlideIn{0%{opacity:0;transform:translateY(-12px)}100%{opacity:1;transform:translateY(0)}}.product-switcher-container.closing{animation:popoverSlideOut 0.2s ease-in forwards}@keyframes popoverSlideOut{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(-12px)}}.product-item{display:flex;align-items:center;gap:var(--spacing-lg);width:100%;padding:var(--spacing-sm) var(--spacing-lg) var(--spacing-sm) var(--spacing-sm);border-radius:var(--radius-md);cursor:pointer;transition:background-color 0.2s ease}.product-item:hover{background-color:var(--color-neutral-100)}.product-item.current{background-color:var(--color-brand-50)}.product-icon-container{width:36px;height:36px;background:var(--color-white);border:1px solid var(--color-neutral-100);border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:var(--spacing-xs)}.product-icon{width:100%;height:100%;object-fit:contain;object-position:center;filter:invert(25%) sepia(190%) saturate(210%) hue-rotate(190deg) brightness(120%) contrast(210%)}.product-icon svg path{fill:var(--color-brand-600)}.product-info{display:flex;flex-direction:column;flex:1}.product-name{font-weight:var(--weight-semibold);font-size:var(--text-md-size);line-height:var(--text-md-line);color:var(--color-neutral-900)}.product-description{font-weight:var(--weight-regular);font-size:var(--text-sm-size);line-height:var(--text-sm-line);color:var(--color-neutral-600)}";

const BhProductSwitcher = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhClose = createEvent(this, "bhClose");
        this.bhProductSelect = createEvent(this, "bhProductSelect");
    }
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
};
BhProductSwitcher.style = bhProductSwitcherCss;

export { BhProductSwitcher as bh_product_switcher };
//# sourceMappingURL=bh-product-switcher.entry.js.map
