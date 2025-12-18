'use strict';

var index = require('./index-DQwSUT6k.js');
var bhPagination = require('./bh-pagination-CgER63yz.js');

const bhEmptyStateCss = ":host{display:block;font-family:var(\n    --font-inter,\n    'Inter',\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif\n  )}.empty-state{display:flex;flex-direction:column;align-items:center;gap:32px;padding:48px 24px;text-align:center}.empty-state-content{display:flex;flex-direction:column;align-items:center;gap:24px}.empty-state-illustration{display:flex;align-items:center;justify-content:center}.empty-state-illustration img{object-fit:contain}.empty-state-text{display:flex;flex-direction:column;align-items:center;gap:8px}.empty-state-title{font-size:var(--text-lg-size, 18px);font-weight:600;color:var(--color-neutral-900, #101828);margin:0;line-height:1.33}.empty-state-description{font-size:var(--text-sm-size, 14px);font-weight:400;color:var(--color-neutral-600, #475467);margin:0;line-height:1.43;max-width:400px}.empty-state-actions{display:flex;gap:12px;flex-wrap:wrap;justify-content:center}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-smoothing:antialiased;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24}";

const BhEmptyState = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhPrimaryAction = index.createEvent(this, "bhPrimaryAction");
        this.bhSecondaryAction = index.createEvent(this, "bhSecondaryAction");
    }
    /**
     * Title text
     */
    emptyTitle = 'No items found';
    /**
     * Description text
     */
    description = 'There are no items to display at the moment.';
    /**
     * Size of the illustration
     */
    illustrationSize = 'md';
    /**
     * Path to the illustration SVG
     */
    illustrationPath = '';
    /**
     * Primary action button text
     */
    primaryActionText = '';
    /**
     * Primary action icon name
     */
    primaryActionIcon = '';
    /**
     * Secondary action button text
     */
    secondaryActionText = '';
    /**
     * Secondary action icon name
     */
    secondaryActionIcon = '';
    /**
     * Max width of the component
     */
    maxWidth = '512px';
    /**
     * Emitted when primary action is clicked
     */
    bhPrimaryAction;
    /**
     * Emitted when secondary action is clicked
     */
    bhSecondaryAction;
    handlePrimaryAction = () => {
        this.bhPrimaryAction.emit();
    };
    handleSecondaryAction = () => {
        this.bhSecondaryAction.emit();
    };
    getIllustrationDimensions() {
        switch (this.illustrationSize) {
            case 'sm':
                return { width: '120px', height: '120px' };
            case 'md':
                return { width: '200px', height: '200px' };
            case 'lg':
                return { width: '280px', height: '280px' };
            default:
                return { width: '200px', height: '200px' };
        }
    }
    render() {
        const dimensions = this.getIllustrationDimensions();
        const hasActions = this.primaryActionText || this.secondaryActionText;
        return (index.h("div", { key: '726baf337a04c6f733957320b6efeb4a62cff3e8', class: "empty-state", style: { maxWidth: this.maxWidth }, part: "container" }, index.h("div", { key: '353101a9835cc3d88f5a97cca24585603f6b541f', class: "empty-state-content" }, this.illustrationPath && (index.h("div", { key: '2a1c5d14866012705df5f25d6096ba8c72cedf45', class: "empty-state-illustration" }, index.h("img", { key: 'aff2cf53fe902ab41a1708f7d56a8b2de75fd9dd', src: this.illustrationPath, alt: "Empty state illustration", style: { width: dimensions.width, height: dimensions.height } }))), index.h("div", { key: 'a9ffc2cf98530396089a3f97e74a936c454dca2d', class: "empty-state-text" }, index.h("h3", { key: 'dc547b53a660a139bd37c730b540ae199e64d17d', class: "empty-state-title" }, this.emptyTitle), index.h("p", { key: '55cdffdb165ac37592d479f13e2f31fe6bf41e1e', class: "empty-state-description" }, this.description))), hasActions && (index.h("div", { key: '57b26d57995e7f3c0f9086989f29b0fee4045d6a', class: "empty-state-actions" }, this.secondaryActionText && (index.h("bh-button", { key: 'f4bf465a1b45dfbf3fd0e86eb2adc44840891df7', hierarchy: "secondary", size: "md", label: this.secondaryActionText, icon: this.secondaryActionIcon ? 'leading' : 'none', iconName: this.secondaryActionIcon, onBhClick: this.handleSecondaryAction })), this.primaryActionText && (index.h("bh-button", { key: '3b2e7ec45aad23a60efe35c5fbe3fd572616e577', hierarchy: "primary", size: "md", label: this.primaryActionText, icon: this.primaryActionIcon ? 'leading' : 'none', iconName: this.primaryActionIcon, onBhClick: this.handlePrimaryAction }))))));
    }
};
BhEmptyState.style = bhEmptyStateCss;

const bhSkeletonLoaderCss = ":host{display:inline-block}.skeleton{display:inline-block;background:linear-gradient(\n    90deg,\n    rgba(0, 0, 0, 0.06) 25%,\n    rgba(0, 0, 0, 0.03) 50%,\n    rgba(0, 0, 0, 0.06) 75%\n  );background-size:400% 100%;animation:shimmer 1.5s ease-in-out infinite;border-radius:var(--radius-sm);line-height:1}.skeleton-circle{border-radius:50%}.skeleton::before{content:'\\00a0'}@keyframes shimmer{0%{background-position:100% 50%}100%{background-position:0 50%}}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}";

const BhSkeletonLoader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Width of the skeleton (CSS value)
     */
    width = '100%';
    /**
     * Height of the skeleton (CSS value)
     */
    height = '1em';
    /**
     * Whether the skeleton should be circular
     */
    circle = false;
    render() {
        const skeletonClasses = {
            'skeleton': true,
            'skeleton-circle': this.circle,
        };
        return (index.h("span", { key: 'db0a5cf09470b6bd54d8e8aa8f9a19e35bc0f949', class: skeletonClasses, style: { width: this.width, height: this.height }, role: "status", "aria-live": "polite", "aria-busy": "true", part: "skeleton" }, index.h("span", { key: '2e21ff7d34283aaef05044985e05a565df7f06d7', class: "visually-hidden" }, "Loading...")));
    }
};
BhSkeletonLoader.style = bhSkeletonLoaderCss;

exports.bh_pagination = bhPagination.BhPagination;
exports.bh_empty_state = BhEmptyState;
exports.bh_skeleton_loader = BhSkeletonLoader;
//# sourceMappingURL=bh-empty-state.bh-pagination.bh-skeleton-loader.entry.cjs.js.map
