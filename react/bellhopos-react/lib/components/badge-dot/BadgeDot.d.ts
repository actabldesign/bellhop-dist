import React from 'react';
import '../../../../../bellhopos-styles/src/components/badge-dot.css';
export type BadgeDotSize = 'sm' | 'md' | 'lg';
export type BadgeDotColor = 'success' | 'blue' | 'error' | 'warning';
export interface BadgeDotProps {
    size?: BadgeDotSize;
    color?: BadgeDotColor;
    outline?: boolean;
    className?: string;
}
export declare const BadgeDot: React.FC<BadgeDotProps>;
export default BadgeDot;
//# sourceMappingURL=BadgeDot.d.ts.map