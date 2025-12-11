'use strict';

var index = require('./index-tZqSQc8E.js');

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
        return (index.h("span", { key: 'c49b2ec3dced60f158ec5dbb0471f6fc057984d1', class: skeletonClasses, style: { width: this.width, height: this.height }, role: "status", "aria-live": "polite", "aria-busy": "true", part: "skeleton" }, index.h("span", { key: 'b360eefd8747e5b5c2a863bf6bf6083b978a6a55', class: "visually-hidden" }, "Loading...")));
    }
};
BhSkeletonLoader.style = bhSkeletonLoaderCss;

exports.bh_skeleton_loader = BhSkeletonLoader;
//# sourceMappingURL=bh-skeleton-loader.entry.cjs.js.map
