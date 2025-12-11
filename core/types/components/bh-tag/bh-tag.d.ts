import { EventEmitter } from '../../stencil-public-runtime';
export type TagVariant = 'text-only' | 'avatar';
export type TagSize = 'sm' | 'md' | 'lg';
export declare class BhTag {
    /** Tag variant */
    variant: TagVariant;
    /** Tag size */
    size: TagSize;
    /** Tag label text */
    label: string;
    /** Whether the tag is dismissible */
    dismissible: boolean;
    /** Whether the tag is disabled */
    disabled: boolean;
    /** Maximum width for the label (in pixels) */
    maxWidth: number;
    /** Avatar image source (for avatar variant) */
    avatarSrc: string;
    /** Internal dismissing state */
    isDismissing: boolean;
    /** Emitted when dismiss button is clicked */
    bhDismiss: EventEmitter<void>;
    private handleDismiss;
    render(): any;
}
