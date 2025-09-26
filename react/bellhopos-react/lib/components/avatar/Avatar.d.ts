import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/avatar.css';
export type AvatarSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarType = 'image' | 'placeholder' | 'text';
export type AvatarStatus = 'online' | 'offline' | 'none';
export interface AvatarProps {
    size?: AvatarSize;
    type?: AvatarType;
    status?: AvatarStatus;
    text?: string;
    imageSrc?: string;
    alt?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}
export declare const Avatar: React.FC<AvatarProps>;
//# sourceMappingURL=Avatar.d.ts.map