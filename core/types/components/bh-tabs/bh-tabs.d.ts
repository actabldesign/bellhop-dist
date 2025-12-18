import { EventEmitter } from '../../stencil-public-runtime';
export type TabsType = 'underline' | 'contained';
export type TabsOrientation = 'horizontal' | 'vertical';
/**
 * @slot - Tab items (bh-tab-item components)
 */
export declare class BhTabs {
    /**
     * The type of tabs: underline or contained style
     */
    type: TabsType;
    /**
     * The orientation of the tabs: horizontal or vertical
     */
    orientation: TabsOrientation;
    /**
     * Whether the tabs should take up the full width of the container
     */
    fullWidth: boolean;
    /**
     * The value of the currently active tab
     */
    value: string;
    /**
     * Emitted when the active tab changes
     */
    bhTabChange: EventEmitter<string>;
    handleTabItemClick(event: CustomEvent<string>): void;
    render(): any;
}
