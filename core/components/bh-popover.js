import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';

const bhPopoverCss = ".popover{position:relative;border-radius:var(--radius-md);width:320px}.popover-content{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;width:100%;height:100%}.popover-menu{background-color:#ffffff;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;border-radius:var(--radius-md);flex-shrink:0;width:100%;max-height:400px;border:1px solid #dcdfea;box-shadow:var(--shadow-popover)}.popover-header{box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--spacing-lg) var(--spacing-xl);position:relative;flex-shrink:0;width:100%;border-bottom:1px solid #dcdfea}.avatar-group{display:flex;gap:var(--spacing-lg);align-items:center;justify-content:flex-start;position:relative;flex-shrink:0;width:100%}.avatar{background-color:#ffffff;position:relative;border-radius:var(--radius-full);flex-shrink:0;width:40px;height:40px;border:0.75px solid rgba(0, 0, 0, 0.08);overflow:hidden;display:flex;align-items:center;justify-content:center}.avatar-image{width:100%;height:100%;object-fit:cover}.brand-info{flex-basis:0;display:flex;flex-direction:column;flex-grow:1;align-items:flex-start;justify-content:flex-start;line-height:0;min-height:1px;min-width:1px;position:relative;flex-shrink:0}.brand-name{font-family:var(--font-inter);font-weight:600;position:relative;flex-shrink:0;color:#404968;font-size:14px;line-height:20px;width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.portfolio-link{font-family:var(--font-inter);font-weight:400;position:relative;flex-shrink:0;color:#2642cf;font-size:14px;line-height:20px;width:100%;text-decoration:underline;text-decoration-skip-ink:none;text-underline-position:from-font;background:none;border:none;cursor:pointer;text-align:left;padding:0}.portfolio-link:hover{color:#1a2bb8}.search-container{box-sizing:border-box;display:flex;flex-direction:column;gap:6px;align-items:center;justify-content:center;overflow:visible;padding:0;position:relative;flex-shrink:0;width:100%}.search-input{display:flex;flex-direction:column;gap:var(--spacing-sm);padding:var(--spacing-xs) var(--spacing-none) var(--spacing-none) var(--spacing-lg);align-items:flex-start;justify-content:flex-start;position:relative;flex-shrink:0;width:100%}.search-content{background-color:#ffffff;box-sizing:border-box;display:flex;gap:var(--spacing-md);height:var(--spacing-4xl);align-items:center;justify-content:flex-start;overflow:hidden;padding:var(--spacing-none);position:relative;border-radius:var(--radius-md);flex-shrink:0;width:100%;border:none}.search-icon{width:20px;height:20px;flex-shrink:0;color:#5d6b98}.search-field{flex-basis:0;font-family:var(--font-inter);font-weight:500;flex-grow:1;line-height:0;min-height:1px;min-width:1px;overflow:hidden;text-overflow:ellipsis;position:relative;flex-shrink:0;color:#404968;font-size:14px;line-height:20px;white-space:nowrap;border:none;outline:none;background:none}.search-field::placeholder{color:#5d6b98}.menu-items{box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow-y:auto;padding:var(--spacing-xs) var(--spacing-none);position:relative;flex-grow:1;width:100%;max-height:calc(400px - 180px)}.menu-header{box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--spacing-lg) var(--spacing-xl);position:relative;flex-shrink:0;width:100%;border-top:1px solid #dcdfea;border-bottom:1px solid #dcdfea;font-family:var(--font-inter);font-weight:600;line-height:0;color:#404968;font-size:14px;line-height:20px}.menu-item-container{box-sizing:border-box;display:flex;align-items:center;justify-content:flex-start;padding:var(--spacing-xxs) var(--spacing-sm);position:relative;flex-shrink:0;width:100%}.menu-item{flex-basis:0;box-sizing:border-box;display:flex;flex-grow:1;align-items:center;justify-content:flex-start;min-height:1px;min-width:1px;overflow:hidden;padding:var(--spacing-md) var(--spacing-lg);position:relative;border-radius:var(--radius-sm);flex-shrink:0;font-family:var(--font-inter);font-weight:500;line-height:0;color:#404968;font-size:14px;line-height:20px;background:none;border:none;cursor:pointer;text-align:left;width:100%;transition:all 0.2s ease}.menu-item:hover{background-color:#f9f9fb;color:#30374f}.menu-item.selected{background-color:#f9f9fb;color:#30374f}.menu-item-portfolio{font-weight:600;color:#2642cf}.menu-item-portfolio:hover{color:#1a2bb8}.menu-item-region{font-weight:500;padding-left:26px;color:#404968;font-size:13px}.menu-item-property{color:#5d6b98;font-size:13px}";

const BhPopover$1 = /*@__PURE__*/ proxyCustomElement(class BhPopover extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhItemSelect = createEvent(this, "bhItemSelect");
        this.bhPortfolioClick = createEvent(this, "bhPortfolioClick");
        this.bhSearchChange = createEvent(this, "bhSearchChange");
    }
    /**
     * Title displayed in the header
     */
    popoverTitle = 'Brand Name';
    /**
     * Text for the portfolio link
     */
    viewPortfolioText = 'view portfolio';
    /**
     * Placeholder text for search input
     */
    searchPlaceholder = 'Search by name or region';
    /**
     * Width of the popover
     */
    width = '240px';
    /**
     * Whether to show search input
     */
    showSearch = true;
    /**
     * Whether to show avatar section
     */
    showAvatar = true;
    /**
     * Avatar image source URL
     */
    avatarSrc;
    /**
     * Menu items array (JSON string or array)
     */
    items = [];
    searchTerm = '';
    /**
     * Event emitted when a menu item is selected
     */
    bhItemSelect;
    /**
     * Event emitted when portfolio link is clicked
     */
    bhPortfolioClick;
    /**
     * Event emitted when search input changes
     */
    bhSearchChange;
    get parsedItems() {
        if (typeof this.items === 'string') {
            try {
                return JSON.parse(this.items);
            }
            catch {
                return [];
            }
        }
        return this.items || [];
    }
    handleItemClick = (item) => {
        if (item.type !== 'header') {
            this.bhItemSelect.emit(item);
        }
    };
    handlePortfolioClick = () => {
        this.bhPortfolioClick.emit();
    };
    handleSearchInput = (event) => {
        const target = event.target;
        this.searchTerm = target.value;
        this.bhSearchChange.emit(this.searchTerm);
    };
    getItemClasses(item) {
        return {
            'menu-item': true,
            'selected': !!item.selected,
            'menu-item-portfolio': item.type === 'portfolio',
            'menu-item-region': item.type === 'region',
            'menu-item-property': item.type === 'property',
        };
    }
    render() {
        const items = this.parsedItems;
        return (h(Host, { key: 'a7558db0c7b23e4ec142ec3ec5e37e5e43ecaf3c' }, h("div", { key: '096623edfec8b24ce671855023676ba9e724141c', class: "popover", style: { width: this.width } }, h("div", { key: '901ff94955110af56d627e145784771975b3b5f8', class: "popover-content" }, h("div", { key: '0948fe57cdbbed592c5f93e8b12536c501cd5e27', class: "popover-menu" }, this.showAvatar && (h("div", { key: '6d0cb4e23fc4ceda1dd68b5d89216c6e50c4c18a', class: "popover-header" }, h("div", { key: '9411bf1f7ada776fe571db95648bb0805e627ede', class: "avatar-group" }, h("div", { key: '5408e5fd2506587cc6fd4899f83094441101dfc3', class: "avatar" }, this.avatarSrc ? (h("img", { src: this.avatarSrc, alt: this.popoverTitle, class: "avatar-image" })) : (h("slot", { name: "avatar" }))), h("div", { key: '9b30791b5bb664c7fcdcf10799b133fa649da830', class: "brand-info" }, h("div", { key: 'cc2304d4e9189485ac3e7f7f7a7bf3b321f99f16', class: "brand-name" }, this.popoverTitle), this.viewPortfolioText && (h("button", { key: 'b3b002ebf605618453618cfdb773c35b3355011a', class: "portfolio-link", onClick: this.handlePortfolioClick, type: "button" }, this.viewPortfolioText)))))), this.showSearch && (h("div", { key: '04798ef99a65da73afbe794250a11dec659868ed', class: "search-container" }, h("div", { key: 'e90f1d2137036da8ba4ad8b02d747892958164c3', class: "search-input" }, h("div", { key: '0efa8b359b1b523c2afd3dc26aa86ce3c86c38f7', class: "search-content" }, h("span", { key: '90d4054abc0c3bb758b3a43b0e21835609ac3b5e', class: "material-symbols-outlined search-icon" }, "search"), h("input", { key: 'abfd05266b12e5599ff3d7c3c79af659e5085584', type: "text", placeholder: this.searchPlaceholder, value: this.searchTerm, onInput: this.handleSearchInput, class: "search-field" }))))), h("div", { key: '82906cd547356049aa9a7541b89152e1a8268cb5', class: "menu-items" }, items.map((item) => (h("div", { key: item.id }, item.type === 'header' && (h("div", { class: "menu-header" }, item.label)), item.type !== 'header' && (h("div", { class: "menu-item-container" }, h("button", { class: this.getItemClasses(item), onClick: () => this.handleItemClick(item), type: "button" }, item.label))))))))))));
    }
    static get style() { return bhPopoverCss; }
}, [769, "bh-popover", {
        "popoverTitle": [1, "popover-title"],
        "viewPortfolioText": [1, "view-portfolio-text"],
        "searchPlaceholder": [1, "search-placeholder"],
        "width": [1],
        "showSearch": [4, "show-search"],
        "showAvatar": [4, "show-avatar"],
        "avatarSrc": [1, "avatar-src"],
        "items": [1],
        "searchTerm": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-popover":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhPopover$1);
            }
            break;
    } });
}
defineCustomElement$1();

const BhPopover = BhPopover$1;
const defineCustomElement = defineCustomElement$1;

export { BhPopover, defineCustomElement };
//# sourceMappingURL=bh-popover.js.map

//# sourceMappingURL=bh-popover.js.map