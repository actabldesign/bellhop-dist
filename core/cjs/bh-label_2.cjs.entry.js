'use strict';

var bhLabel = require('./bh-label-MpXjm9k0.js');
var index = require('./index-DQwSUT6k.js');

const bhTooltipCss = ":host{display:inline-block}.tooltip{position:absolute;z-index:10000;pointer-events:none;opacity:0;transition:opacity 0.2s ease-in-out;white-space:nowrap}.tooltip-visible{opacity:1}.tooltip-content{background-color:var(--color-neutral-900);color:var(--color-white);font-family:var(--font-inter);font-weight:var(--weight-semibold);font-size:12px;line-height:1.5em;padding:8px 12px;border-radius:8px;box-shadow:var(--shadow-popover);position:relative}.tooltip-top{bottom:100%;left:50%;transform:translateX(-50%);margin-bottom:6px}.tooltip-bottom{top:100%;left:50%;transform:translateX(-50%);margin-top:6px}.tooltip-left{right:100%;top:50%;transform:translateY(-50%);margin-right:6px}.tooltip-right{left:100%;top:50%;transform:translateY(-50%);margin-left:6px}.tooltip.multiline{white-space:normal}.tooltip.multiline .tooltip-content{max-width:240px}.tooltip-icon.tooltip-top{margin-bottom:4px}.tooltip-icon.tooltip-bottom{margin-top:4px}.tooltip-icon.tooltip-left{margin-right:4px}.tooltip-icon.tooltip-right{margin-left:4px}";

const BhTooltip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The tooltip text content
     */
    text = '';
    /**
     * Position of the tooltip relative to its target
     */
    position = 'top';
    /**
     * Variant of the tooltip (default or icon)
     */
    variant = 'default';
    /**
     * Whether the tooltip is visible
     */
    visible = false;
    /**
     * Maximum width in pixels (enables multiline if > 240)
     */
    maxWidth;
    render() {
        const tooltipClasses = {
            'tooltip': true,
            [`tooltip-${this.position}`]: true,
            [`tooltip-${this.variant}`]: true,
            'tooltip-visible': this.visible,
            'multiline': this.maxWidth !== undefined && this.maxWidth > 240,
        };
        const tooltipStyles = this.maxWidth ? { maxWidth: `${this.maxWidth}px` } : {};
        return (index.h("div", { key: 'a940486923a3a424a3c7e3ffde5251b756800049', class: tooltipClasses, style: tooltipStyles, role: "tooltip", part: "tooltip" }, index.h("div", { key: '78e7c1939da5eaccea4e78a2890982be817b88a9', class: "tooltip-content" }, this.text)));
    }
};
BhTooltip.style = bhTooltipCss;

exports.bh_label = bhLabel.BhLabel;
exports.bh_tooltip = BhTooltip;
//# sourceMappingURL=bh-label.bh-tooltip.entry.cjs.js.map
