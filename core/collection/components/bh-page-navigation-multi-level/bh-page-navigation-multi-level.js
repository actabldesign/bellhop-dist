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
        return (h(Host, { key: '15c1b2bbe0ddf13eb25d424ce7c60b281547175e' }, h("div", { key: '6a2ab39d69b4dc007c52cc0af63f39b4f8bf4ee8', class: this.getItemClasses() }, h("div", { key: '3796f0b3fad7ef3f0fd29bc8b8e90738b5165bbf', class: "page-navigation-multi-level-parent", onClick: this.handleParentClick, onMouseEnter: () => (this.isHovered = true), onMouseLeave: () => (this.isHovered = false) }, h("div", { key: '5ae04be6a630fcf8f1f25245ee8e8f5bfde6e27e', class: "page-navigation-item-content" }, !this.isHovered && (h("span", { key: 'e3893980a51628c19f2667d4cbd76958d1b67cff', class: "page-navigation-item-icon material-symbols-outlined" }, this.icon)), this.isHovered && (h("span", { key: '4429219610bf3dbeb1de38ef6f4b3734b3f521da', class: {
                'page-navigation-chevron-icon': true,
                'material-symbols-outlined': true,
                'expanded': this.isExpanded,
            } }, "expand_more")), h("span", { key: '4a81f12b1b2e0ec1e0784858f99845ad4dc3aa62', class: "page-navigation-item-label" }, this.label), h("bh-button", { key: 'bcadba2dff591857aafaaa434d06e97b0727b635', hierarchy: "tertiary", icon: "only", size: "xs", iconName: "add", onClick: this.handleAddClick }))), (this.isExpanded || this.isAnimating) && (h("div", { key: 'd99ed38a4fe97757f660c281b6e34c36f6837d87', class: `page-navigation-children ${this.animationClass}` }, this.childItems.map((child, index) => (h("bh-page-navigation-child", { key: index, label: child.label, badge: child.badge, showBadge: child.showBadge, isActive: child.isActive, onBhItemClick: () => this.handleChildClick(index) }))))))));
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
