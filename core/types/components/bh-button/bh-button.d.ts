import { EventEmitter } from '../../stencil-public-runtime';
export type ButtonHierarchy = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
export type ButtonIconPosition = 'none' | 'leading' | 'trailing' | 'only';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonKind = 'default' | 'destructive' | 'success';
export type ButtonType = 'button' | 'submit' | 'reset';
export declare class BhButton {
    /**
     * The visual hierarchy of the button
     */
    hierarchy: ButtonHierarchy;
    /**
     * The kind/semantic meaning of the button
     */
    kind: ButtonKind;
    /**
     * Icon position relative to the label
     */
    icon: ButtonIconPosition;
    /**
     * The size of the button
     */
    size: ButtonSize;
    /**
     * Fallback text label (used only if no slot content is provided)
     */
    label?: string;
    /**
     * Material Symbols icon name (e.g., 'add', 'edit', 'delete')
     */
    iconName?: string;
    /**
     * Whether the button is disabled
     */
    disabled: boolean;
    /**
     * Whether the button is in a loading state
     */
    loading: boolean;
    /**
     * The type of button for form submission
     * - 'button': No form submission (default)
     * - 'submit': Submits the form
     * - 'reset': Resets the form
     */
    type: ButtonType;
    /**
     * Emitted when the button is clicked
     */
    bhClick: EventEmitter<MouseEvent>;
    private handleClick;
    private getIconSizeClass;
    private getTextSizeClass;
    private getLoaderSize;
    private getLoaderVariant;
    render(): any;
}
