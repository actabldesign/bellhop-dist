import React from 'react';
import '../../../../../bellhopos-styles/src/components/page-navigation.css';
export interface PageNavigationSingleLevelProps {
    label: string;
    icon?: string;
    badge?: string | number;
    isActive?: boolean;
    onItemClick: () => void;
    className?: string;
}
export declare const PageNavigationSingleLevel: React.FC<PageNavigationSingleLevelProps>;
//# sourceMappingURL=PageNavigationSingleLevel.d.ts.map