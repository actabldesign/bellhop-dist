import { EventEmitter } from '../../stencil-public-runtime';
export type ContainerFooterSize = 'minimal' | 'standard';
export declare class BhContainerFooter {
    /**
     * Size variant of the footer
     */
    size: ContainerFooterSize;
    /**
     * Label for the footer button
     */
    buttonLabel: string;
    /**
     * Event emitted when the button is clicked
     */
    bhButtonClick: EventEmitter<void>;
    private handleButtonClick;
    render(): any;
}
