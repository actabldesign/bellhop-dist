import { EventEmitter } from '../../stencil-public-runtime';
export interface BhProduct {
    id: string;
    name: string;
    description: string;
    logo: string;
    current?: boolean;
}
export interface AnchorPosition {
    top: number;
    left: number;
}
export declare class BhProductSwitcher {
    /**
     * Whether the product switcher is open
     */
    isOpen: boolean;
    /**
     * Position to anchor the popover
     */
    anchorPosition: AnchorPosition;
    /**
     * Array of products to display
     */
    products: BhProduct[];
    /**
     * Event emitted when the switcher should close
     */
    bhClose: EventEmitter<void>;
    /**
     * Event emitted when a product is selected
     */
    bhProductSelect: EventEmitter<BhProduct>;
    isClosing: boolean;
    private containerRef?;
    handleDocumentClick(event: MouseEvent): void;
    private handleClose;
    private handleProductClick;
    render(): any;
}
