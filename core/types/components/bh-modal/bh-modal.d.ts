import { EventEmitter } from '../../stencil-public-runtime';
export type ModalWidth = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export declare class BhModal {
    /**
     * Whether the modal is visible
     */
    visible: boolean;
    /**
     * Whether to show the backdrop overlay
     */
    overlay: boolean;
    /**
     * Preset width of the modal: sm (400px), md (480px), lg (520px), xl (640px), xxl (688px)
     */
    width: ModalWidth;
    /**
     * Emitted when the modal is closed (overlay click or close button)
     */
    bhClose: EventEmitter<void>;
    private handleClose;
    private handleOverlayClick;
    render(): any;
}
