import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/tag.css';
import '../../../../../bellhopos-styles/src/tokens/bellhop-animations.css';
export type TagVariant = 'text-only' | 'avatar';
export type TagSize = 'sm' | 'md' | 'lg';
export interface TagProps {
    variant?: TagVariant;
    size?: TagSize;
    label?: string;
    dismissible?: boolean;
    disabled?: boolean;
    maxWidth?: number;
    className?: string;
    onDismiss?: () => void;
}
export declare const Tag: React.FC<TagProps>;
//# sourceMappingURL=Tag.d.ts.map