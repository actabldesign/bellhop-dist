import React from 'react';
import '../../../../../bellhopos-styles/src/components/nav-item.css';
export interface NavItemProps {
    icon: string;
    label: string;
    isActive?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
}
export declare const NavItem: React.FC<NavItemProps>;
export default NavItem;
//# sourceMappingURL=NavItem.d.ts.map