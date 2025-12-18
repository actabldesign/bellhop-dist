import { EventEmitter } from '../../stencil-public-runtime';
export interface PopoverItem {
    id: string;
    label: string;
    type?: 'portfolio' | 'region' | 'property' | 'header';
    selected?: boolean;
}
export declare class BhPopover {
    /**
     * Title displayed in the header
     */
    popoverTitle: string;
    /**
     * Text for the portfolio link
     */
    viewPortfolioText: string;
    /**
     * Placeholder text for search input
     */
    searchPlaceholder: string;
    /**
     * Width of the popover
     */
    width: string;
    /**
     * Whether to show search input
     */
    showSearch: boolean;
    /**
     * Whether to show avatar section
     */
    showAvatar: boolean;
    /**
     * Avatar image source URL
     */
    avatarSrc?: string;
    /**
     * Menu items array (JSON string or array)
     */
    items: PopoverItem[] | string;
    searchTerm: string;
    /**
     * Event emitted when a menu item is selected
     */
    bhItemSelect: EventEmitter<PopoverItem>;
    /**
     * Event emitted when portfolio link is clicked
     */
    bhPortfolioClick: EventEmitter<void>;
    /**
     * Event emitted when search input changes
     */
    bhSearchChange: EventEmitter<string>;
    private get parsedItems();
    private handleItemClick;
    private handlePortfolioClick;
    private handleSearchInput;
    private getItemClasses;
    render(): any;
}
