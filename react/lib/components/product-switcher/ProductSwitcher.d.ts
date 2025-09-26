import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/product-switcher.css';
export interface Product {
    id: string;
    name: string;
    description: string;
    logo: string;
    current?: boolean;
}
export interface ProductSwitcherProps {
    isOpen?: boolean;
    onClose?: () => void;
    anchorPosition?: {
        top: number;
        left: number;
    };
    products?: Product[];
    onProductSelect?: (product: Product) => void;
    className?: string;
}
export declare const ProductSwitcher: React.FC<ProductSwitcherProps>;
export default ProductSwitcher;
//# sourceMappingURL=ProductSwitcher.d.ts.map