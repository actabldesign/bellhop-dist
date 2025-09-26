import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/logo-box.css';
import { Product } from '../product-switcher/ProductSwitcher';
export type LogoType = 'actabl' | 'al' | 'he' | 'ps' | 'tr';
export interface LogoBoxProps {
    logoType?: LogoType;
    products?: Product[];
    onProductSelect?: (product: Product) => void;
    className?: string;
}
export declare const LogoBox: React.FC<LogoBoxProps>;
export default LogoBox;
//# sourceMappingURL=LogoBox.d.ts.map