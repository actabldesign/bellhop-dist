import { EventEmitter } from '../../stencil-public-runtime';
export interface PropertyOption {
    id: string;
    name: string;
    type: 'portfolio' | 'region' | 'property';
    group?: string;
}
export interface PropertyGroup {
    id: string;
    name: string;
    properties: PropertyOption[];
}
export interface DropdownMenuItem {
    id: string;
    label?: string;
    icon?: string;
    divider?: boolean;
}
export declare class BhPropertySwitcher {
    /**
     * Selected property name to display (initial value)
     */
    selectedProperty: string;
    /**
     * Array of property options
     */
    properties: PropertyOption[];
    /**
     * Whether to group properties by their group field
     */
    grouped: boolean;
    /**
     * Placeholder text for search input
     */
    searchPlaceholder: string;
    /**
     * Event emitted when a property is selected
     */
    bhPropertyChange: EventEmitter<PropertyOption>;
    isExpanded: boolean;
    searchQuery: string;
    expandedGroups: Set<string>;
    internalSelectedProperty: string;
    private switcherRef?;
    private searchInputRef?;
    componentWillLoad(): void;
    handleDocumentClick(event: MouseEvent): void;
    private handleToggle;
    private handleSearchInput;
    private handleGroupToggle;
    private handlePropertySelect;
    private getPropertyGroups;
    private filterProperties;
    private filterGroups;
    private getPropertyIcon;
    private renderSearchInput;
    private renderPropertyItem;
    private renderGroupedView;
    private renderFlatView;
    private renderEmptyState;
    private getSelectedProperty;
    render(): any;
}
