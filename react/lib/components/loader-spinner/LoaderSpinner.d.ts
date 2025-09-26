import React from 'react';
import './LoaderSpinner.css';
export type LoaderSize = 'sm' | 'md' | 'lg' | 'xl';
export interface LoaderSpinnerProps {
    size?: LoaderSize;
    overlay?: boolean;
    overlayMessage?: string;
    showMessage?: boolean;
    message?: string;
}
export declare const LoaderSpinner: React.FC<LoaderSpinnerProps>;
//# sourceMappingURL=LoaderSpinner.d.ts.map