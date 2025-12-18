import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @slot - Content displayed when the accordion item is expanded
 */
export declare class BhAccordionItem {
    /**
     * Unique identifier for this accordion item
     */
    value: string;
    /**
     * The header/title text for the accordion item
     */
    header: string;
    /**
     * Whether this accordion item is currently expanded
     */
    expanded: boolean;
    /**
     * Whether this accordion item is disabled
     */
    disabled: boolean;
    /**
     * Internal state for animation
     */
    isAnimating: boolean;
    /**
     * Emitted when the accordion item is toggled
     */
    bhAccordionToggle: EventEmitter<{
        value: string;
        expanded: boolean;
    }>;
    /**
     * Emitted when the accordion header is clicked
     */
    bhAccordionClick: EventEmitter<string>;
    handleExpandedChange(): void;
    private handleHeaderClick;
    private handleKeyDown;
    render(): any;
}
