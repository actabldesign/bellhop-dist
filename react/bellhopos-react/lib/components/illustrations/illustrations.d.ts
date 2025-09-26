import React from 'react';
import '../../../../../bellhopos-styles/src/components/illustrations.css';
export type IllustrationSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export interface IllustrationsProps {
    size?: IllustrationSize;
    title?: string;
    description?: string;
    svgPath?: string;
    alt?: string;
    className?: string;
}
export declare const Illustrations: React.FC<IllustrationsProps>;
//# sourceMappingURL=illustrations.d.ts.map