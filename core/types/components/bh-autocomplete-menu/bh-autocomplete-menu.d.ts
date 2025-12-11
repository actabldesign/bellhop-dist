import { EventEmitter } from '../../stencil-public-runtime';
export interface AutocompleteMenuItem {
    id: string;
    label: string;
    disabled?: boolean;
    selected?: boolean;
}
export declare class BhAutocompleteMenu {
    /**
     * Array of menu items
     */
    menuItems: AutocompleteMenuItem[];
    /**
     * Whether the menu is visible
     */
    visible: boolean;
    /**
     * Currently selected item index
     */
    selectedIndex: number;
    /**
     * Maximum height of the menu in pixels
     */
    maxHeight: number;
    /**
     * Enable multi-select mode with checkmarks
     */
    multiSelect: boolean;
    /**
     * Search query for highlighting text
     */
    searchQuery: string;
    /**
     * Event emitted when an item is clicked
     */
    bhItemClick: EventEmitter<AutocompleteMenuItem>;
    /**
     * Event emitted when an item is hovered
     */
    bhItemHover: EventEmitter<number>;
    isAnimating: boolean;
    shouldRender: boolean;
    items: AutocompleteMenuItem[];
    watchVisible(newValue: boolean): void;
    watchMenuItems(newValue: AutocompleteMenuItem[]): void;
    componentWillLoad(): void;
    private handleItemClick;
    private handleItemMouseEnter;
    private handleMouseDown;
    private getMenuClasses;
    private getItemClasses;
    private getHighlightedText;
    render(): any;
}
