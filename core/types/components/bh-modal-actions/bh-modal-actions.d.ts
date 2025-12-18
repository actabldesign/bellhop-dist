import { EventEmitter } from '../../stencil-public-runtime';
export type ModalActionsType = 'fill' | 'right-aligned';
export declare class BhModalActions {
    /**
     * Layout type for the actions:
     * - 'fill': Buttons take full width
     * - 'right-aligned': Buttons aligned to the right with optional left content slot
     */
    type: ModalActionsType;
    /**
     * Whether to show destructive styling on primary button
     */
    destructive: boolean;
    /**
     * Primary/destructive action button label
     */
    primaryLabel: string;
    /**
     * Secondary action button label
     */
    secondaryLabel: string;
    /**
     * Whether to show the divider line above actions
     */
    divider: boolean;
    /**
     * Emitted when the primary/destructive action button is clicked
     */
    bhPrimaryAction: EventEmitter<void>;
    /**
     * Emitted when the secondary action button is clicked
     */
    bhSecondaryAction: EventEmitter<void>;
    private handlePrimaryAction;
    private handleSecondaryAction;
    private renderButtons;
    render(): any;
}
