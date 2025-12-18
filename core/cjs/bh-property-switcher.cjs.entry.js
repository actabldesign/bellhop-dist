'use strict';

var index = require('./index-DQwSUT6k.js');

const bhPropertySwitcherCss = ".property-switcher{position:relative;display:inline-block;width:220px}.property-selector{display:flex;align-items:center;justify-content:flex-start;gap:var(--spacing-xs);padding:var(--spacing-xs) var(--spacing-sm);border:none;background:transparent;cursor:pointer;border-radius:var(--radius-sm);transition:background-color 0.2s ease;width:100%;height:36px;min-width:0}.property-selector:hover{background-color:var(--color-neutral-100)}.selector-icon{font-size:18px;color:var(--color-neutral-500);flex-shrink:0}.property-name{font-family:var(--font-inter);font-weight:var(--weight-medium);font-size:var(--text-sm-size);line-height:var(--text-sm-line);color:var(--color-neutral-700);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex-grow:1;min-width:0;text-align:left}.expand-icon{font-size:18px;flex-shrink:0;color:var(--color-neutral-400);transition:color 0.2s ease}.dropdown-panel{position:absolute;top:100%;left:0;z-index:1000;margin-top:var(--spacing-xs);background-color:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:var(--radius-lg);box-shadow:0 4px 16px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.08);min-width:280px;max-width:360px;animation:dropdownSlideIn 0.15s ease-out;overflow:hidden}@keyframes dropdownSlideIn{0%{opacity:0;transform:translateY(-8px)}100%{opacity:1;transform:translateY(0)}}.search-container{display:flex;align-items:center;gap:var(--spacing-xs);padding:var(--spacing-sm);background-color:var(--color-white);border-bottom:1px solid var(--color-neutral-200)}.search-icon{font-size:20px;color:var(--color-neutral-500);flex-shrink:0}.search-input{flex:1;border:none;outline:none;font-family:var(--font-inter);font-size:var(--text-sm-size);line-height:var(--text-sm-line);color:var(--color-neutral-900);background:transparent;min-width:0}.search-input::placeholder{color:var(--color-neutral-400)}.clear-search{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-sm);color:var(--color-neutral-400);transition:color 0.15s ease, background-color 0.15s ease}.clear-search:hover{color:var(--color-neutral-600);background-color:var(--color-neutral-200)}.clear-search .material-symbols-outlined{font-size:18px}.dropdown-content{max-height:360px;overflow-y:auto}.flat-list-container{padding:var(--spacing-xs) 0}.groups-container{padding:var(--spacing-xs) 0}.property-group{border-bottom:1px solid var(--color-neutral-100)}.property-group:last-child{border-bottom:none}.group-header{display:flex;align-items:center;gap:var(--spacing-xs);width:100%;padding:var(--spacing-sm) var(--spacing-md);border:none;background:var(--color-neutral-50);cursor:pointer;font-family:var(--font-inter);font-size:var(--text-xs-size);font-weight:var(--weight-semibold);color:var(--color-neutral-600);text-transform:uppercase;letter-spacing:0.5px;transition:background-color 0.15s ease}.group-header:hover{background-color:var(--color-neutral-200)}.group-expand-icon{font-size:18px;color:var(--color-neutral-500);transition:transform 0.15s ease}.group-name{flex:1;text-align:left}.group-count{font-size:11px;font-weight:var(--weight-semibold);color:var(--color-neutral-500);background-color:var(--color-neutral-200);padding:2px 8px;border-radius:var(--radius-full);min-width:20px;text-align:center}.group-properties{padding:var(--spacing-xs) 0}.property-item{display:flex;align-items:center;gap:var(--spacing-sm);width:100%;padding:var(--spacing-sm) var(--spacing-md);padding-left:calc(var(--spacing-md) + 26px);border:none;background:transparent;cursor:pointer;font-family:var(--font-inter);font-size:var(--text-sm-size);line-height:var(--text-sm-line);color:var(--color-neutral-700);text-align:left;transition:background-color 0.15s ease}.flat-list-container .property-item{padding-left:var(--spacing-md)}.property-item:hover{background-color:var(--color-neutral-100)}.property-item.selected{background-color:var(--color-brand-50);color:var(--color-brand-700)}.property-item.selected .property-icon{color:var(--color-brand-600)}.property-icon{font-size:20px;color:var(--color-neutral-400);flex-shrink:0}.property-item-name{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:var(--weight-regular)}.property-item.selected .property-item-name{font-weight:var(--weight-medium)}.check-icon{font-size:18px;color:var(--color-brand-600);flex-shrink:0}.menu-divider{height:1px;background-color:var(--color-neutral-150);margin:var(--spacing-xs) var(--spacing-md)}.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--spacing-2xl) var(--spacing-lg);gap:var(--spacing-sm)}.empty-icon{font-size:40px;color:var(--color-neutral-300)}.empty-text{font-family:var(--font-inter);font-size:var(--text-sm-size);color:var(--color-neutral-500)}.dropdown-menu-container{position:absolute;top:100%;left:0;z-index:1000;margin-top:var(--spacing-xs);max-height:320px}.popover-container{position:absolute;top:100%;left:0;z-index:1000;margin-top:var(--spacing-xs);animation:popoverSlideIn 0.3s ease-out;transform-origin:top center}@keyframes popoverSlideIn{0%{opacity:0;transform:translateY(calc(-1 * var(--spacing-lg)))}100%{opacity:1;transform:translateY(0)}}.popover-container.closing{animation:popoverSlideOut 0.2s ease-in forwards}@keyframes popoverSlideOut{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(calc(-1 * var(--spacing-lg)))}}";

const BhPropertySwitcher = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhPropertyChange = index.createEvent(this, "bhPropertyChange");
    }
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
        return (index.h("div", { class: "search-container" }, index.h("span", { class: "material-symbols-outlined search-icon" }, "search"), index.h("input", { ref: (el) => (this.searchInputRef = el), type: "text", class: "search-input", placeholder: this.searchPlaceholder, value: this.searchQuery, onInput: this.handleSearchInput, onClick: (e) => e.stopPropagation() }), this.searchQuery && (index.h("button", { class: "clear-search", onClick: (e) => {
                e.stopPropagation();
                this.searchQuery = '';
                this.searchInputRef?.focus();
            }, "aria-label": "Clear search" }, index.h("span", { class: "material-symbols-outlined" }, "close")))));
    }
    renderPropertyItem(property) {
        const isSelected = property.name === this.internalSelectedProperty;
        return (index.h("button", { class: {
                'property-item': true,
                'selected': isSelected,
            }, onClick: () => this.handlePropertySelect(property) }, index.h("span", { class: "material-symbols-outlined property-icon" }, this.getPropertyIcon(property.type)), index.h("span", { class: "property-item-name", title: property.name }, property.name), isSelected && (index.h("span", { class: "material-symbols-outlined check-icon" }, "check"))));
    }
    renderGroupedView() {
        const groups = this.getPropertyGroups();
        const filteredGroups = this.filterGroups(groups);
        if (filteredGroups.length === 0) {
            return this.renderEmptyState();
        }
        return (index.h("div", { class: "groups-container" }, filteredGroups.map((group) => {
            const isExpanded = this.expandedGroups.has(group.id);
            return (index.h("div", { class: "property-group", key: group.id }, index.h("button", { class: {
                    'group-header': true,
                    'expanded': isExpanded,
                }, onClick: () => this.handleGroupToggle(group.id), "aria-expanded": isExpanded ? 'true' : 'false' }, index.h("span", { class: "material-symbols-outlined group-expand-icon" }, isExpanded ? 'expand_more' : 'chevron_right'), index.h("span", { class: "group-name" }, group.name), index.h("span", { class: "group-count" }, group.properties.length)), isExpanded && (index.h("div", { class: "group-properties" }, group.properties.map((property) => (index.h("div", { key: property.id }, this.renderPropertyItem(property))))))));
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
        return (index.h("div", { class: "flat-list-container" }, items.map((item, index$1) => {
            if ('divider' in item) {
                return index.h("div", { class: "menu-divider", key: `divider-${index$1}` });
            }
            return (index.h("div", { key: item.id }, this.renderPropertyItem(item)));
        })));
    }
    renderEmptyState() {
        return (index.h("div", { class: "empty-state" }, index.h("span", { class: "material-symbols-outlined empty-icon" }, "search_off"), index.h("span", { class: "empty-text" }, "No properties found")));
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
        return (index.h(index.Host, { key: '02541bacd9b48dbf5c8939ed6b4f9a08393e788c' }, index.h("div", { key: 'cb0f6de5ee67caa19e6a7022ec89347d81dbda7e', ref: (el) => (this.switcherRef = el), class: containerClasses }, index.h("button", { key: '4fc5cd736389e8707d4c86ae319a721e685dc88a', class: "property-selector", onClick: () => this.handleToggle(), "aria-expanded": this.isExpanded ? 'true' : 'false', "aria-label": `Property selector: ${displayName}` }, selectedProp && (index.h("span", { key: 'dfe3c36f344113c8edb18c234dc0e9d81fbed9ef', class: "material-symbols-outlined selector-icon" }, this.getPropertyIcon(selectedProp.type))), index.h("span", { key: 'e83cbe7b26f6d8b94557003da87580dd00053acc', class: "property-name" }, displayName), index.h("span", { key: '4f6d01218d1d60afaa148d375d911d2701d9b5bd', class: "material-symbols-outlined expand-icon", "aria-label": this.isExpanded ? 'Collapse Options' : 'Expand Options' }, this.isExpanded ? 'unfold_less' : 'unfold_more')), this.isExpanded && (index.h("div", { key: '9c6ee765cd36535305b9236d46ba96657aeac308', class: "dropdown-panel" }, this.renderSearchInput(), index.h("div", { key: '5433d7a5ad985549a332cd7df7070d123ce98153', class: "dropdown-content" }, this.grouped
            ? this.renderGroupedView()
            : this.renderFlatView()))))));
    }
};
BhPropertySwitcher.style = bhPropertySwitcherCss;

exports.bh_property_switcher = BhPropertySwitcher;
//# sourceMappingURL=bh-property-switcher.entry.cjs.js.map
