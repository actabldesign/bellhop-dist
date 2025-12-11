import { EventEmitter } from '../../stencil-public-runtime';
export type AvatarSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarType = 'image' | 'placeholder' | 'text';
export type AvatarStatus = 'online' | 'offline' | 'none';
export declare class BhAvatar {
    /**
     * The size of the avatar
     */
    size: AvatarSize;
    /**
     * The type of avatar content
     */
    type: AvatarType;
    /**
     * The status indicator (online, offline, or none)
     */
    status: AvatarStatus;
    /**
     * Text to display for text-type avatars (initials)
     */
    text: string;
    /**
     * Image source URL for image-type avatars
     */
    imageSrc?: string;
    /**
     * Alt text for the avatar image
     */
    alt: string;
    /**
     * Emitted when the avatar is hovered
     */
    bhMouseEnter: EventEmitter<void>;
    /**
     * Emitted when the mouse leaves the avatar
     */
    bhMouseLeave: EventEmitter<void>;
    private handleMouseEnter;
    private handleMouseLeave;
    private getTextSizeClass;
    private getIconSizeClass;
    render(): any;
}
