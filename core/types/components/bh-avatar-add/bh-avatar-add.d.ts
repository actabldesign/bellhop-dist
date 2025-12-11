import { EventEmitter } from '../../stencil-public-runtime';
export type AvatarAddSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export declare class BhAvatarAdd {
    /**
     * Size of the avatar add button
     */
    size: AvatarAddSize;
    /**
     * Whether the button is disabled
     */
    disabled: boolean;
    /**
     * Whether to show tooltip on hover
     */
    showTooltip: boolean;
    /**
     * Tooltip text
     */
    tooltipText: string;
    /**
     * Track hover state
     */
    isHovered: boolean;
    /**
     * Track focus state
     */
    isFocused: boolean;
    /**
     * Emitted when the button is clicked
     */
    bhClick: EventEmitter<MouseEvent>;
    private handleClick;
    private handleKeyDown;
    render(): any;
}
