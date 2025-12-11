import { EventEmitter } from '../../stencil-public-runtime';
export type LabelLayout = 'block' | 'inline' | 'inline-start' | 'inline-space-between';
export declare class BhLabel {
    el: HTMLElement;
    private tooltipTimerRef?;
    /**
     * The label text to display
     */
    label: string;
    /**
     * Layout style for the label container
     * - block: Label above content (default for form fields)
     * - inline: Label next to content (label first)
     * - inline-start: Content next to label (content first, for checkboxes/radios)
     * - inline-space-between: Label and content on opposite ends
     */
    layout: LabelLayout;
    /**
     * The id of the form element the label is bound to.
     * Use when the labeled element is not a child of this component.
     */
    for: string;
    /**
     * Supporting text displayed below the label (second line)
     * for instructions or additional description
     */
    supportingText: string;
    /**
     * Whether to show the required asterisk
     */
    required: boolean;
    /**
     * Whether to show the help icon
     */
    showHelpIcon: boolean;
    /**
     * Tooltip text for the help icon
     */
    helpIconTooltip: string;
    /**
     * Whether the label is disabled
     */
    disabled: boolean;
    showHelpTooltip: boolean;
    /**
     * Emitted when the help icon is clicked
     */
    bhHelpClick: EventEmitter<void>;
    disconnectedCallback(): void;
    private handleHelpIconMouseEnter;
    private handleHelpIconMouseLeave;
    private handleHelpIconClick;
    render(): any;
}
