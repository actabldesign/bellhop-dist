import React from 'react';
import { IllustrationSize } from '../illustrations/illustrations';
import '../../../../../bellhopos-styles/src/components/empty-state.css';
export interface EmptyStateAction {
    label: string;
    type: 'primary' | 'secondary';
    icon?: string;
    action: () => void;
}
export interface EmptyStateProps {
    title?: string;
    description?: string;
    illustrationSize?: IllustrationSize;
    illustrationPath?: string;
    actions?: EmptyStateAction[];
    maxWidth?: string;
}
export declare const EmptyState: React.FC<EmptyStateProps>;
//# sourceMappingURL=EmptyState.d.ts.map