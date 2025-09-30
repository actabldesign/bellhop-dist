import * as React from 'react';
import { AvatarSize, AvatarType, AvatarStatus } from '../avatar/Avatar';
import './AvatarStacked.css';
export interface AvatarData {
    type: AvatarType;
    imageSrc?: string;
    text?: string;
    status?: AvatarStatus;
    tooltipText?: string;
}
export interface AvatarStackedProps {
    size?: AvatarSize;
    avatars?: AvatarData[];
    maxVisible?: number;
    showAddButton?: boolean;
}
export declare const AvatarStacked: React.FC<AvatarStackedProps>;
//# sourceMappingURL=AvatarStacked.d.ts.map