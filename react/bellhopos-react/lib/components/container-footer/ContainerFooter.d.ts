import React from 'react';
import '../../../../../bellhopos-styles/src/components/container-footer.css';
export type ContainerFooterSize = 'minimal' | 'standard';
export interface ContainerFooterProps {
    size?: ContainerFooterSize;
    buttonLabel?: string;
    onButtonClick?: () => void;
}
export declare const ContainerFooter: React.FC<ContainerFooterProps>;
//# sourceMappingURL=ContainerFooter.d.ts.map