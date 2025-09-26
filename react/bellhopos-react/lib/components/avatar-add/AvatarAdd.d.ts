import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/avatar-add.css';
export type AvatarAddSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarAddState = 'default' | 'hover' | 'focus' | 'disabled';
export interface AvatarAddProps {
    size?: AvatarAddSize;
    state?: AvatarAddState;
    disabled?: boolean;
    showTooltip?: boolean;
    tooltipText?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const AvatarAdd: React.FC<AvatarAddProps>;
//# sourceMappingURL=AvatarAdd.d.ts.map