import { EventEmitter } from '../../stencil-public-runtime';
export type ButtonIconHierarchy = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
export type ButtonIconSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonIconType = 'button' | 'submit' | 'reset';
export declare class BhButtonIcon {
    /**
     * The visual hierarchy of the button
     */
    hierarchy: ButtonIconHierarchy;
    /**
     * The size of the button
     */
    size: ButtonIconSize;
    /**
     * The icon name (Material Symbols)
     */
    iconName: string;
    /**
     * Whether the button is disabled
     */
    disabled: boolean;
    /**
     * Whether the button is in loading state
     */
    loading: boolean;
    /**
     * The type of button for form submission
     * - 'button': No form submission (default)
     * - 'submit': Submits the form
     * - 'reset': Resets the form
     */
    type: ButtonIconType;
    /**
     * Accessible label for the button
     */
    ariaLabel: string | null;
    /**
     * Emitted when the button is clicked
     */
    bhClick: EventEmitter<MouseEvent>;
    private handleClick;
    private handleKeyDown;
    render(): any;
}
