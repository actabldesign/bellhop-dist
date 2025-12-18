import { h, Host } from "@stencil/core";
export class BhPageNavigationMultiLevel {
    /**
     * Label text for the navigation item
     */
    label;
    /**
     * Material icon name
     */
    icon = 'radio_button_unchecked';
    /**
     * Optional badge text/number to display
     */
    badge;
    /**
     * Child navigation items
     */
    childItems = [];
    /**
     * Whether the item is expanded to show children
     */
    isExpanded = false;
    /**
     * Internal state for hover
     */
    isHovered = false;
    /**
     * Internal state for animation
     */
    isAnimating = false;
    /**
     * Animation class
     */
    animationClass = '';
    /**
     * Event emitted when the parent item is clicked (to toggle expansion)
     */
    bhToggle;
    /**
     * Event emitted when a child item is clicked
     */
    bhChildClick;
    /**
     * Event emitted when add button is clicked
     */
    bhAddClick;
    handleExpandedChange(newValue) {
        if (newValue) {
            this.isAnimating = true;
            this.animationClass = 'animate-slide-down-enter';
        }
        else if (this.isAnimating) {
            this.animationClass = 'animate-slide-down-exit';
            setTimeout(() => {
                this.isAnimating = false;
                this.animationClass = '';
            }, 150);
        }
    }
    get hasActiveChild() {
        return this.childItems.some(child => child.isActive);
    }
    handleParentClick = () => {
        this.bhToggle.emit();
    };
    handleChildClick = (index) => {
        this.bhChildClick.emit(index);
    };
    handleAddClick = (e) => {
        e.stopPropagation();
        this.bhAddClick.emit();
    };
    getItemClasses() {
        return {
            'page-navigation-multi-level': true,
            'page-navigation-animate-smooth': true,
            'has-active-child': this.hasActiveChild,
            'expanded': this.isExpanded,
        };
    }
    render() {
        return (h(Host, { key: 'db478fe5c9492c19a41acf68577cb78a00ebdc4f' }, h("div", { key: 'a968be18bbdac5bc39d45cf59b544e5384f7cdfc', class: this.getItemClasses() }, h("div", { key: 'da3f4a3b6246f50b27d2657080488135b85719be', class: "page-navigation-multi-level-parent", onClick: this.handleParentClick, onMouseEnter: () => (this.isHovered = true), onMouseLeave: () => (this.isHovered = false) }, h("div", { key: '64933e8c68ae1238581e4c81f3cae937e3199b1f', class: "page-navigation-item-content" }, !this.isHovered && (h("span", { key: 'd8369d06118533f5cdb2e228bc72cc0aafc71b79', class: "page-navigation-item-icon material-symbols-outlined" }, this.icon)), this.isHovered && (h("span", { key: '852f49d37fa5d47d656aad732c46f23a4438be95', class: {
                'page-navigation-chevron-icon': true,
                'material-symbols-outlined': true,
                'expanded': this.isExpanded,
            } }, "expand_more")), h("span", { key: '5737917e070122fe1b74ff693ed7afceb262ca1d', class: "page-navigation-item-label" }, this.label), h("bh-button", { key: 'b3e29f3b6e7b64daa42a6a9a541cf0278b7dc6b5', hierarchy: "tertiary", icon: "only", size: "xs", iconName: "add", onClick: this.handleAddClick }))), (this.isExpanded || this.isAnimating) && (h("div", { key: 'e9f386ef6ca8757d6aad84d4e90c776e9ee82be8', class: `page-navigation-children ${this.animationClass}` }, this.childItems.map((child, index) => (h("bh-page-navigation-child", { key: index, label: child.label, badge: child.badge, showBadge: child.showBadge, isActive: child.isActive, onBhItemClick: () => this.handleChildClick(index) }))))))));
    }
    static get is() { return "bh-page-navigation-multi-level"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-page-navigation-multi-level.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-page-navigation-multi-level.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label text for the navigation item"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "icon": {
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
                    "text": "Material icon name"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "'radio_button_unchecked'"
            },
            "badge": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional badge text/number to display"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "badge"
            },
            "childItems": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ChildItem[]",
                    "resolved": "ChildItem[]",
                    "references": {
                        "ChildItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-page-navigation-multi-level/bh-page-navigation-multi-level.tsx",
                            "id": "src/components/bh-page-navigation-multi-level/bh-page-navigation-multi-level.tsx::ChildItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Child navigation items"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "isExpanded": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the item is expanded to show children"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-expanded",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isHovered": {},
            "isAnimating": {},
            "animationClass": {}
        };
    }
    static get events() {
        return [{
                "method": "bhToggle",
                "name": "bhToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the parent item is clicked (to toggle expansion)"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhChildClick",
                "name": "bhChildClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when a child item is clicked"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "bhAddClick",
                "name": "bhAddClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when add button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "isExpanded",
                "methodName": "handleExpandedChange"
            }];
    }
}
//# sourceMappingURL=bh-page-navigation-multi-level.js.map
