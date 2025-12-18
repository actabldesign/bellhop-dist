import { r as registerInstance, c as createEvent, h, H as Host } from './index-nAAobRRQ.js';

const bhPopoverCss = ".popover{position:relative;border-radius:var(--radius-md);width:320px}.popover-content{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;width:100%;height:100%}.popover-menu{background-color:#ffffff;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;border-radius:var(--radius-md);flex-shrink:0;width:100%;max-height:400px;border:1px solid #dcdfea;box-shadow:var(--shadow-popover)}.popover-header{box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--spacing-lg) var(--spacing-xl);position:relative;flex-shrink:0;width:100%;border-bottom:1px solid #dcdfea}.avatar-group{display:flex;gap:var(--spacing-lg);align-items:center;justify-content:flex-start;position:relative;flex-shrink:0;width:100%}.avatar{background-color:#ffffff;position:relative;border-radius:var(--radius-full);flex-shrink:0;width:40px;height:40px;border:0.75px solid rgba(0, 0, 0, 0.08);overflow:hidden;display:flex;align-items:center;justify-content:center}.avatar-image{width:100%;height:100%;object-fit:cover}.brand-info{flex-basis:0;display:flex;flex-direction:column;flex-grow:1;align-items:flex-start;justify-content:flex-start;line-height:0;min-height:1px;min-width:1px;position:relative;flex-shrink:0}.brand-name{font-family:var(--font-inter);font-weight:600;position:relative;flex-shrink:0;color:#404968;font-size:14px;line-height:20px;width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.portfolio-link{font-family:var(--font-inter);font-weight:400;position:relative;flex-shrink:0;color:#2642cf;font-size:14px;line-height:20px;width:100%;text-decoration:underline;text-decoration-skip-ink:none;text-underline-position:from-font;background:none;border:none;cursor:pointer;text-align:left;padding:0}.portfolio-link:hover{color:#1a2bb8}.search-container{box-sizing:border-box;display:flex;flex-direction:column;gap:6px;align-items:center;justify-content:center;overflow:visible;padding:0;position:relative;flex-shrink:0;width:100%}.search-input{display:flex;flex-direction:column;gap:var(--spacing-sm);padding:var(--spacing-xs) var(--spacing-none) var(--spacing-none) var(--spacing-lg);align-items:flex-start;justify-content:flex-start;position:relative;flex-shrink:0;width:100%}.search-content{background-color:#ffffff;box-sizing:border-box;display:flex;gap:var(--spacing-md);height:var(--spacing-4xl);align-items:center;justify-content:flex-start;overflow:hidden;padding:var(--spacing-none);position:relative;border-radius:var(--radius-md);flex-shrink:0;width:100%;border:none}.search-icon{width:20px;height:20px;flex-shrink:0;color:#5d6b98}.search-field{flex-basis:0;font-family:var(--font-inter);font-weight:500;flex-grow:1;line-height:0;min-height:1px;min-width:1px;overflow:hidden;text-overflow:ellipsis;position:relative;flex-shrink:0;color:#404968;font-size:14px;line-height:20px;white-space:nowrap;border:none;outline:none;background:none}.search-field::placeholder{color:#5d6b98}.menu-items{box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow-y:auto;padding:var(--spacing-xs) var(--spacing-none);position:relative;flex-grow:1;width:100%;max-height:calc(400px - 180px)}.menu-header{box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--spacing-lg) var(--spacing-xl);position:relative;flex-shrink:0;width:100%;border-top:1px solid #dcdfea;border-bottom:1px solid #dcdfea;font-family:var(--font-inter);font-weight:600;line-height:0;color:#404968;font-size:14px;line-height:20px}.menu-item-container{box-sizing:border-box;display:flex;align-items:center;justify-content:flex-start;padding:var(--spacing-xxs) var(--spacing-sm);position:relative;flex-shrink:0;width:100%}.menu-item{flex-basis:0;box-sizing:border-box;display:flex;flex-grow:1;align-items:center;justify-content:flex-start;min-height:1px;min-width:1px;overflow:hidden;padding:var(--spacing-md) var(--spacing-lg);position:relative;border-radius:var(--radius-sm);flex-shrink:0;font-family:var(--font-inter);font-weight:500;line-height:0;color:#404968;font-size:14px;line-height:20px;background:none;border:none;cursor:pointer;text-align:left;width:100%;transition:all 0.2s ease}.menu-item:hover{background-color:#f9f9fb;color:#30374f}.menu-item.selected{background-color:#f9f9fb;color:#30374f}.menu-item-portfolio{font-weight:600;color:#2642cf}.menu-item-portfolio:hover{color:#1a2bb8}.menu-item-region{font-weight:500;padding-left:26px;color:#404968;font-size:13px}.menu-item-property{color:#5d6b98;font-size:13px}";

const BhPopover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '25499890c1864435bae214a37f7fc8d565d8f3da' }, h("div", { key: 'de6ade64a6cdf7ab299d0ee9187b676d2841d89c', class: "popover", style: { width: this.width } }, h("div", { key: '19d68a071d41a928dde7070ce17ef61ef0770118', class: "popover-content" }, h("div", { key: '103181dbb1ff47314cff71869bb84ad06c78de78', class: "popover-menu" }, this.showAvatar && (h("div", { key: 'd6b413cd6c726078e414174cfc75d5e95ffacddc', class: "popover-header" }, h("div", { key: '4cdad2a1457d4b8df7baeb0f04d849f47471a727', class: "avatar-group" }, h("div", { key: '7c59b44499eaba8da0982939dacef30899273c02', class: "avatar" }, this.avatarSrc ? (h("img", { src: this.avatarSrc, alt: this.popoverTitle, class: "avatar-image" })) : (h("slot", { name: "avatar" }))), h("div", { key: 'bfab1ee98a218d4ee75055872542135fbf179069', class: "brand-info" }, h("div", { key: '9eed24402c23ba99fa9fbcaf4b0a430ea01fe263', class: "brand-name" }, this.popoverTitle), this.viewPortfolioText && (h("button", { key: '2056c40e002bd029545f2f2fb898eed39f8f93db', class: "portfolio-link", onClick: this.handlePortfolioClick, type: "button" }, this.viewPortfolioText)))))), this.showSearch && (h("div", { key: 'd8b487b553522f4c5a0e9e74755c53fb7ff5dc1b', class: "search-container" }, h("div", { key: 'a20d988fa3f86e7c26a1b31ed04b4adfa34a7a36', class: "search-input" }, h("div", { key: 'd75a244d37324a84a8ae8501f334f84a52fe9b0e', class: "search-content" }, h("span", { key: '394b2c5f23949c72109ca5c441ef3069a6424530', class: "material-symbols-outlined search-icon" }, "search"), h("input", { key: '1887ff5e6d3b3c857b5e980d33d8adc0076b23a1', type: "text", placeholder: this.searchPlaceholder, value: this.searchTerm, onInput: this.handleSearchInput, class: "search-field" }))))), h("div", { key: 'e2b6ff5f6b7ba5929db7a9d1401ae2cfc1089eb7', class: "menu-items" }, items.map((item) => (h("div", { key: item.id }, item.type === 'header' && (h("div", { class: "menu-header" }, item.label)), item.type !== 'header' && (h("div", { class: "menu-item-container" }, h("button", { class: this.getItemClasses(item), onClick: () => this.handleItemClick(item), type: "button" }, item.label))))))))))));
    }
};
BhPopover.style = bhPopoverCss;

export { BhPopover as bh_popover };
//# sourceMappingURL=bh-popover.entry.js.map
