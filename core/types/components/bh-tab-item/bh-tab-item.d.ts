import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @slot - Tab content (usually just text, but can include badges)
 */
export declare class BhTabItem {
    el: HTMLElement;
    /**
     * Unique identifier for this tab
     */
    value: string;
    /**
     * The label text for the tab
     */
    label: string;
    /**
     * Whether this tab is currently active
     */
    active: boolean;
    /**
     * Whether this tab is disabled
     */
    disabled: boolean;
    /**
     * Emitted when the tab is clicked
     */
    bhTabItemClick: EventEmitter<string>;
    private handleClick;
    render(): any;
}
