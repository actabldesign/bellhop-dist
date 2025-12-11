import { EventEmitter } from '../../stencil-public-runtime';
export type EmptyStateIllustrationSize = 'sm' | 'md' | 'lg';
export declare class BhEmptyState {
    /**
     * Title text
     */
    emptyTitle: string;
    /**
     * Description text
     */
    description: string;
    /**
     * Size of the illustration
     */
    illustrationSize: EmptyStateIllustrationSize;
    /**
     * Path to the illustration SVG
     */
    illustrationPath: string;
    /**
     * Primary action button text
     */
    primaryActionText: string;
    /**
     * Primary action icon name
     */
    primaryActionIcon: string;
    /**
     * Secondary action button text
     */
    secondaryActionText: string;
    /**
     * Secondary action icon name
     */
    secondaryActionIcon: string;
    /**
     * Max width of the component
     */
    maxWidth: string;
    /**
     * Emitted when primary action is clicked
     */
    bhPrimaryAction: EventEmitter<void>;
    /**
     * Emitted when secondary action is clicked
     */
    bhSecondaryAction: EventEmitter<void>;
    private handlePrimaryAction;
    private handleSecondaryAction;
    private getIllustrationDimensions;
    render(): any;
}
