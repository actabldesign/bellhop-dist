import React from 'react';
import '../../../../../bellhopos-styles/src/components/page-navigation.css';
export interface PageNavigationChildProps {
    label: string;
    badge?: string | number;
    isActive?: boolean;
    onItemClick: () => void;
    className?: string;
}
export declare const PageNavigationChild: React.FC<PageNavigationChildProps>;
//# sourceMappingURL=PageNavigationChild.d.ts.map