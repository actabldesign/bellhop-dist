export type BadgeDotSize = 'sm' | 'md' | 'lg';
export type BadgeDotColor = 'success' | 'blue' | 'error' | 'warning';
export declare class BhBadgeDot {
    /**
     * The size of the badge dot
     */
    size: BadgeDotSize;
    /**
     * The color of the badge dot
     */
    color: BadgeDotColor;
    /**
     * Whether to show an outline ring around the dot
     */
    outline: boolean;
    render(): any;
}
