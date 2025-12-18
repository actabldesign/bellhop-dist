import { EventEmitter } from '../../stencil-public-runtime';
export type AccordionMode = 'single' | 'multiple';
/**
 * @slot - Accordion items (bh-accordion-item components)
 */
export declare class BhAccordion {
    /**
     * The mode of the accordion:
     * - 'single': Only one item can be expanded at a time
     * - 'multiple': Multiple items can be expanded simultaneously
     */
    mode: AccordionMode;
    /**
     * The value(s) of the currently expanded item(s).
     * For single mode: a string value
     * For multiple mode: an array of string values (comma-separated string)
     */
    value: string;
    /**
     * Whether to collapse other items when one is expanded (only applies in single mode)
     */
    collapsible: boolean;
    /**
     * Internal state to track expanded items
     */
    expandedItems: Set<string>;
    /**
     * Emitted when the expanded state changes
     */
    bhAccordionChange: EventEmitter<string | string[]>;
    componentWillLoad(): void;
    handleValueChange(): void;
    private parseValue;
    private updateChildItems;
    private getSlot;
    handleAccordionToggle(event: CustomEvent<{
        value: string;
        expanded: boolean;
    }>): void;
    private updateValue;
    render(): any;
}
