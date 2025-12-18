import { h, Host } from "@stencil/core";
export class BhPropertySwitcher {
    /**
     * Selected property name to display (initial value)
     */
    selectedProperty = 'Select a property';
    /**
     * Array of property options
     */
    properties = [];
    /**
     * Whether to group properties by their group field
     */
    grouped = false;
    /**
     * Placeholder text for search input
     */
    searchPlaceholder = 'Search properties...';
    /**
     * Event emitted when a property is selected
     */
    bhPropertyChange;
    isExpanded = false;
    searchQuery = '';
    expandedGroups = new Set();
    internalSelectedProperty = '';
    switcherRef;
    searchInputRef;
    componentWillLoad() {
        this.internalSelectedProperty = this.selectedProperty;
    }
    handleDocumentClick(event) {
        if (!this.isExpanded) {
            return;
        }
        // Check if click is on this component or inside it using composedPath for Shadow DOM
        const clickedInside = event.composedPath().includes(this.switcherRef);
        if (!clickedInside) {
            this.isExpanded = false;
        }
    }
    handleToggle = () => {
        this.isExpanded = !this.isExpanded;
        if (this.isExpanded) {
            this.searchQuery = '';
            // Initialize all groups as expanded when opening
            if (this.grouped) {
                const groups = this.getPropertyGroups();
                this.expandedGroups = new Set(groups.map(g => g.id));
            }
            // Focus search input when opening
            setTimeout(() => {
                if (this.searchInputRef) {
                    this.searchInputRef.focus();
                }
            }, 50);
        }
    };
    handleSearchInput = (event) => {
        const target = event.target;
        this.searchQuery = target.value;
    };
    handleGroupToggle = (groupId) => {
        const newSet = new Set(this.expandedGroups);
        if (newSet.has(groupId)) {
            newSet.delete(groupId);
        }
        else {
            newSet.add(groupId);
        }
        this.expandedGroups = newSet;
    };
    handlePropertySelect = (property) => {
        this.internalSelectedProperty = property.name;
        this.bhPropertyChange.emit(property);
        this.isExpanded = false;
        this.searchQuery = '';
    };
    getPropertyGroups = () => {
        const groupMap = new Map();
        const ungrouped = [];
        this.properties.forEach((property) => {
            if (property.group) {
                const existing = groupMap.get(property.group) || [];
                existing.push(property);
                groupMap.set(property.group, existing);
            }
            else {
                ungrouped.push(property);
            }
        });
        const groups = [];
        groupMap.forEach((properties, name) => {
            groups.push({
                id: name.toLowerCase().replace(/\s+/g, '-'),
                name,
                properties,
            });
        });
        // Add ungrouped properties as a special group if any exist
        if (ungrouped.length > 0) {
            groups.push({
                id: 'ungrouped',
                name: 'Other',
                properties: ungrouped,
            });
        }
        return groups;
    };
    filterProperties = (properties) => {
        if (!this.searchQuery.trim()) {
            return properties;
        }
        const query = this.searchQuery.toLowerCase();
        return properties.filter((p) => p.name.toLowerCase().includes(query));
    };
    filterGroups = (groups) => {
        if (!this.searchQuery.trim()) {
            return groups;
        }
        const query = this.searchQuery.toLowerCase();
        return groups
            .map((group) => {
            // Check if group name matches
            const groupMatches = group.name.toLowerCase().includes(query);
            // Filter properties within the group
            const filteredProperties = group.properties.filter((p) => p.name.toLowerCase().includes(query));
            // Include group if group name matches (show all properties) or if any properties match
            if (groupMatches) {
                return { ...group }; // Return group with all properties
            }
            else if (filteredProperties.length > 0) {
                return { ...group, properties: filteredProperties };
            }
            return null;
        })
            .filter((g) => g !== null);
    };
    getPropertyIcon = (type) => {
        switch (type) {
            case 'portfolio':
                return 'business';
            case 'region':
                return 'public';
            case 'property':
            default:
                return 'location_on';
        }
    };
    renderSearchInput() {
        return (h("div", { class: "search-container" }, h("span", { class: "material-symbols-outlined search-icon" }, "search"), h("input", { ref: (el) => (this.searchInputRef = el), type: "text", class: "search-input", placeholder: this.searchPlaceholder, value: this.searchQuery, onInput: this.handleSearchInput, onClick: (e) => e.stopPropagation() }), this.searchQuery && (h("button", { class: "clear-search", onClick: (e) => {
                e.stopPropagation();
                this.searchQuery = '';
                this.searchInputRef?.focus();
            }, "aria-label": "Clear search" }, h("span", { class: "material-symbols-outlined" }, "close")))));
    }
    renderPropertyItem(property) {
        const isSelected = property.name === this.internalSelectedProperty;
        return (h("button", { class: {
                'property-item': true,
                'selected': isSelected,
            }, onClick: () => this.handlePropertySelect(property) }, h("span", { class: "material-symbols-outlined property-icon" }, this.getPropertyIcon(property.type)), h("span", { class: "property-item-name", title: property.name }, property.name), isSelected && (h("span", { class: "material-symbols-outlined check-icon" }, "check"))));
    }
    renderGroupedView() {
        const groups = this.getPropertyGroups();
        const filteredGroups = this.filterGroups(groups);
        if (filteredGroups.length === 0) {
            return this.renderEmptyState();
        }
        return (h("div", { class: "groups-container" }, filteredGroups.map((group) => {
            const isExpanded = this.expandedGroups.has(group.id);
            return (h("div", { class: "property-group", key: group.id }, h("button", { class: {
                    'group-header': true,
                    'expanded': isExpanded,
                }, onClick: () => this.handleGroupToggle(group.id), "aria-expanded": isExpanded ? 'true' : 'false' }, h("span", { class: "material-symbols-outlined group-expand-icon" }, isExpanded ? 'expand_more' : 'chevron_right'), h("span", { class: "group-name" }, group.name), h("span", { class: "group-count" }, group.properties.length)), isExpanded && (h("div", { class: "group-properties" }, group.properties.map((property) => (h("div", { key: property.id }, this.renderPropertyItem(property))))))));
        })));
    }
    renderFlatView() {
        const filteredProperties = this.filterProperties(this.properties);
        if (filteredProperties.length === 0) {
            return this.renderEmptyState();
        }
        // Legacy behavior: render portfolios with dividers, skip regions
        const items = [];
        filteredProperties.forEach((property) => {
            if (property.type === 'portfolio') {
                items.push(property);
                items.push({ divider: true });
            }
            else if (property.type === 'property') {
                items.push(property);
            }
        });
        return (h("div", { class: "flat-list-container" }, items.map((item, index) => {
            if ('divider' in item) {
                return h("div", { class: "menu-divider", key: `divider-${index}` });
            }
            return (h("div", { key: item.id }, this.renderPropertyItem(item)));
        })));
    }
    renderEmptyState() {
        return (h("div", { class: "empty-state" }, h("span", { class: "material-symbols-outlined empty-icon" }, "search_off"), h("span", { class: "empty-text" }, "No properties found")));
    }
    getSelectedProperty() {
        return this.properties.find(p => p.name === this.internalSelectedProperty);
    }
    render() {
        const containerClasses = {
            'property-switcher': true,
            'expanded': this.isExpanded,
        };
        const selectedProp = this.getSelectedProperty();
        const displayName = this.internalSelectedProperty || this.selectedProperty;
        return (h(Host, { key: '02541bacd9b48dbf5c8939ed6b4f9a08393e788c' }, h("div", { key: 'cb0f6de5ee67caa19e6a7022ec89347d81dbda7e', ref: (el) => (this.switcherRef = el), class: containerClasses }, h("button", { key: '4fc5cd736389e8707d4c86ae319a721e685dc88a', class: "property-selector", onClick: () => this.handleToggle(), "aria-expanded": this.isExpanded ? 'true' : 'false', "aria-label": `Property selector: ${displayName}` }, selectedProp && (h("span", { key: 'dfe3c36f344113c8edb18c234dc0e9d81fbed9ef', class: "material-symbols-outlined selector-icon" }, this.getPropertyIcon(selectedProp.type))), h("span", { key: 'e83cbe7b26f6d8b94557003da87580dd00053acc', class: "property-name" }, displayName), h("span", { key: '4f6d01218d1d60afaa148d375d911d2701d9b5bd', class: "material-symbols-outlined expand-icon", "aria-label": this.isExpanded ? 'Collapse Options' : 'Expand Options' }, this.isExpanded ? 'unfold_less' : 'unfold_more')), this.isExpanded && (h("div", { key: '9c6ee765cd36535305b9236d46ba96657aeac308', class: "dropdown-panel" }, this.renderSearchInput(), h("div", { key: '5433d7a5ad985549a332cd7df7070d123ce98153', class: "dropdown-content" }, this.grouped
            ? this.renderGroupedView()
            : this.renderFlatView()))))));
    }
    static get is() { return "bh-property-switcher"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-property-switcher.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-property-switcher.css"]
        };
    }
    static get properties() {
        return {
            "selectedProperty": {
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
                    "text": "Selected property name to display (initial value)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selected-property",
                "defaultValue": "'Select a property'"
            },
            "properties": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "PropertyOption[]",
                    "resolved": "PropertyOption[]",
                    "references": {
                        "PropertyOption": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-property-switcher/bh-property-switcher.tsx",
                            "id": "src/components/bh-property-switcher/bh-property-switcher.tsx::PropertyOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of property options"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "grouped": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to group properties by their group field"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "grouped",
                "defaultValue": "false"
            },
            "searchPlaceholder": {
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
                    "text": "Placeholder text for search input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "search-placeholder",
                "defaultValue": "'Search properties...'"
            }
        };
    }
    static get states() {
        return {
            "isExpanded": {},
            "searchQuery": {},
            "expandedGroups": {},
            "internalSelectedProperty": {}
        };
    }
    static get events() {
        return [{
                "method": "bhPropertyChange",
                "name": "bhPropertyChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when a property is selected"
                },
                "complexType": {
                    "original": "PropertyOption",
                    "resolved": "PropertyOption",
                    "references": {
                        "PropertyOption": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-property-switcher/bh-property-switcher.tsx",
                            "id": "src/components/bh-property-switcher/bh-property-switcher.tsx::PropertyOption"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleDocumentClick",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=bh-property-switcher.js.map
