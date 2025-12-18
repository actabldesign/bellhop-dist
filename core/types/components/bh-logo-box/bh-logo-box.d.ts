import { EventEmitter } from '../../stencil-public-runtime';
import { BhProduct } from '../bh-product-switcher/bh-product-switcher';
export type LogoType = 'actabl' | 'al' | 'he' | 'ps' | 'tr';
export declare class BhLogoBox {
    /**
     * Type of logo to display
     */
    logoType: LogoType;
    /**
     * Custom logo source URL. If provided, overrides the default logo path.
     */
    logoSrc?: string;
    /**
     * Base path for asset URLs. Defaults to '/bellhop/assets'
     */
    assetBasePath: string;
    /**
     * Array of products to display in the switcher
     */
    products: BhProduct[];
    /**
     * Event emitted when a product is selected
     */
    bhProductSelect: EventEmitter<BhProduct>;
    isOpen: boolean;
    anchorPosition: {
        top: number;
        left: number;
    };
    private logoActiveRef?;
    private handleLogoClick;
    private handleClose;
    private handleProductSelect;
    private getLogoSrc;
    render(): any;
}
