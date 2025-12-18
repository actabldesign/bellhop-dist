import { r as registerInstance, c as createEvent, h } from './index-nAAobRRQ.js';

const bhContainerFooterCss = ".container-footer{background:var(--color-white);border:1px solid var(--color-neutral-200);border-top:1px solid var(--color-neutral-200);border-radius:var(--radius-none) var(--radius-none) var(--radius-xl)\n    var(--radius-xl);box-sizing:border-box;width:100%}.container-footer-content{display:flex;justify-content:flex-end;align-items:center;padding:var(--spacing-md) var(--spacing-2xl)}.container-footer-minimal .container-footer-content{padding:var(--spacing-sm) var(--spacing-2xl)}";

const BhContainerFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhButtonClick = createEvent(this, "bhButtonClick");
    }
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
};
BhContainerFooter.style = bhContainerFooterCss;

export { BhContainerFooter as bh_container_footer };
//# sourceMappingURL=bh-container-footer.entry.js.map
