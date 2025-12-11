import { EventEmitter } from '../../stencil-public-runtime';
export declare class BhModalHeader {
    /**
     * Modal title (required)
     */
    modalTitle: string;
    /**
     * Modal description/supporting text
     */
    description?: string;
    /**
     * Icon name for the featured icon (Material Symbols)
     */
    icon?: string;
    /**
     * Color theme for the featured icon
     */
    iconColor: 'brand' | 'gray' | 'error' | 'warning' | 'success' | 'highlight';
    /**
     * Whether to show the featured icon
     */
    showIcon: boolean;
    /**
     * Whether to show the close button
     */
    showCloseButton: boolean;
    /**
     * Header alignment type
     */
    type: 'left-aligned' | 'center-aligned' | 'horizontal-left-aligned';
    /**
     * Whether to show padding at the bottom
     */
    paddingBottom: boolean;
    /**
     * Whether to show the divider line
     */
    divider: boolean;
    /**
     * Emitted when the close button is clicked
     */
    bhClose: EventEmitter<void>;
    private handleClose;
    render(): any;
}
