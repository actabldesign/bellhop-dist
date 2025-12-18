import { h, Host } from "@stencil/core";
export class BhPageNavigation {
    /**
     * Title displayed at the top of the navigation
     */
    navTitle = 'Navigation';
    /**
     * Array of navigation items
     */
    navigationItems = [];
    /**
     * Internal state to track navigation items
     */
    items = [];
    /**
     * Event emitted when a navigation item is clicked
     */
    bhItemClick;
    handleNavigationItemsChange(newValue) {
        this.items = [...newValue];
    }
    componentWillLoad() {
        this.items = [...this.navigationItems];
    }
    clearAllSelections() {
        this.items = this.items.map(item => ({
            ...item,
            isActive: false,
            children: item.children?.map(child => ({ ...child, isActive: false })),
        }));
    }
    handleSingleLevelClick = (itemId) => {
        this.clearAllSelections();
        this.items = this.items.map(item => item.id === itemId ? { ...item, isActive: true } : item);
        this.bhItemClick.emit({ itemId });
    };
    handleMultiLevelToggle = (itemId) => {
        this.items = this.items.map(item => item.id === itemId ? { ...item, isExpanded: !item.isExpanded } : item);
    };
    handleMultiLevelChildClick = (itemId, childIndex) => {
        this.clearAllSelections();
        this.items = this.items.map(item => item.id === itemId && item.children
            ? {
                ...item,
                children: item.children.map((child, index) => ({
                    ...child,
                    isActive: index === childIndex,
                })),
            }
            : item);
        this.bhItemClick.emit({ itemId, childIndex });
    };
    render() {
        return (h(Host, { key: 'e45e8ce3b4f0357f3e9a388083483a710b1480da' }, h("div", { key: 'fd2b83db1152ee0da4a3700c54bc19eb442e9b7b', class: "page-navigation" }, h("div", { key: 'f0ad1b96f3f1e04e38d4d9d440d3e5efe0d172a4', class: "page-navigation-header" }, h("h2", { key: 'd015280380f4caad460fbb919e82c774d812db98', class: "page-navigation-title" }, this.navTitle)), h("nav", { key: 'ac52f5b69c75376db23ce23de1ee76656cc392f3', class: "page-navigation-list" }, this.items.map(item => item.type === 'single' ? (h("bh-page-navigation-single-level", { key: item.id, label: item.label, icon: item.icon, isActive: item.isActive || false, onBhItemClick: () => this.handleSingleLevelClick(item.id) })) : (h("bh-page-navigation-multi-level", { key: item.id, label: item.label, icon: item.icon, childItems: item.children || [], isExpanded: item.isExpanded || false, onBhToggle: () => this.handleMultiLevelToggle(item.id), onBhChildClick: (e) => this.handleMultiLevelChildClick(item.id, e.detail) })))))));
    }
    static get is() { return "bh-page-navigation"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-page-navigation.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-page-navigation.css"]
        };
    }
    static get properties() {
        return {
            "navTitle": {
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
                    "text": "Title displayed at the top of the navigation"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "nav-title",
                "defaultValue": "'Navigation'"
            },
            "navigationItems": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "NavigationItem[]",
                    "resolved": "NavigationItem[]",
                    "references": {
                        "NavigationItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-page-navigation/bh-page-navigation.tsx",
                            "id": "src/components/bh-page-navigation/bh-page-navigation.tsx::NavigationItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of navigation items"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "items": {}
        };
    }
    static get events() {
        return [{
                "method": "bhItemClick",
                "name": "bhItemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when a navigation item is clicked"
                },
                "complexType": {
                    "original": "{ itemId: string; childIndex?: number }",
                    "resolved": "{ itemId: string; childIndex?: number | undefined; }",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "navigationItems",
                "methodName": "handleNavigationItemsChange"
            }];
    }
}
//# sourceMappingURL=bh-page-navigation.js.map
