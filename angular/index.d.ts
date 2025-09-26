import * as i0 from '@angular/core';
import { EventEmitter, TemplateRef, OnInit, OnChanges, SimpleChanges, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as rxjs from 'rxjs';
import { ControlValueAccessor } from '@angular/forms';

interface PopoverItem {
    id: string;
    label: string;
    type?: 'portfolio' | 'region' | 'property' | 'header';
    selected?: boolean;
}
declare class PopoverComponent {
    title: string;
    viewPortfolioText: string;
    searchPlaceholder: string;
    items: PopoverItem[];
    width: string;
    showSearch: boolean;
    showAvatar: boolean;
    itemSelect: EventEmitter<PopoverItem>;
    portfolioClick: EventEmitter<void>;
    searchChange: EventEmitter<string>;
    avatarTemplate?: TemplateRef<any>;
    searchTerm: string;
    onItemClick(item: PopoverItem): void;
    onPortfolioClick(): void;
    onSearchInput(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverComponent, "app-popover", never, { "title": { "alias": "title"; "required": false; }; "viewPortfolioText": { "alias": "viewPortfolioText"; "required": false; }; "searchPlaceholder": { "alias": "searchPlaceholder"; "required": false; }; "items": { "alias": "items"; "required": false; }; "width": { "alias": "width"; "required": false; }; "showSearch": { "alias": "showSearch"; "required": false; }; "showAvatar": { "alias": "showAvatar"; "required": false; }; }, { "itemSelect": "itemSelect"; "portfolioClick": "portfolioClick"; "searchChange": "searchChange"; }, ["avatarTemplate"], never, true, never>;
}

interface DropdownMenuItem {
    id: string;
    label?: string;
    icon?: string;
    shortcut?: string;
    disabled?: boolean;
    divider?: boolean;
}
interface DropdownMenuHeader {
    title?: string;
    avatarGroup?: boolean;
    avatarSrc?: string;
    name?: string;
    email?: string;
}

interface PropertyOption {
    id: string;
    name: string;
    type: 'portfolio' | 'region' | 'property';
}
declare class PropertySwitcherComponent implements OnInit {
    selectedProperty: string;
    properties: PropertyOption[];
    propertyChange: EventEmitter<string>;
    isExpanded: boolean;
    isClosing: boolean;
    searchTerm: string;
    filteredItems: PopoverItem[];
    get dropdownMenuItems(): DropdownMenuItem[];
    get popoverItems(): PopoverItem[];
    onToggle(): void;
    private openPopover;
    private closePopover;
    onSelectProperty(property: PropertyOption): void;
    onPopoverItemSelect(item: PopoverItem): void;
    onSearchChange(searchTerm: string): void;
    onPortfolioClick(): void;
    onDropdownItemClick(item: DropdownMenuItem): void;
    onDocumentClick(event: Event): void;
    private updateFilteredItems;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PropertySwitcherComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PropertySwitcherComponent, "app-property-switcher", never, { "selectedProperty": { "alias": "selectedProperty"; "required": false; }; "properties": { "alias": "properties"; "required": false; }; }, { "propertyChange": "propertyChange"; }, never, never, true, never>;
}

interface BreadcrumbItem {
    label: string;
    path?: string;
    isActive?: boolean;
    icon?: string;
}
declare class BreadcrumbsComponent implements OnInit, OnChanges {
    private router;
    items: BreadcrumbItem[];
    separator: string;
    showHome: boolean;
    maxVisibleItems: number;
    itemClick: EventEmitter<BreadcrumbItem>;
    navigate: EventEmitter<string>;
    displayItems: BreadcrumbItem[];
    showEllipsis: boolean;
    collapsedItems: BreadcrumbItem[];
    constructor(router: Router);
    ngOnInit(): void;
    ngOnChanges(): void;
    private updateDisplayItems;
    onItemClick(item: BreadcrumbItem): void;
    onHomeClick(): void;
    onEllipsisClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbsComponent, "app-breadcrumbs", never, { "items": { "alias": "items"; "required": false; }; "separator": { "alias": "separator"; "required": false; }; "showHome": { "alias": "showHome"; "required": false; }; "maxVisibleItems": { "alias": "maxVisibleItems"; "required": false; }; }, { "itemClick": "itemClick"; "navigate": "navigate"; }, never, never, true, never>;
}

declare class AppbarComponent {
    isMenuOpen: boolean;
    menuToggle: EventEmitter<void>;
    selectedProperty: string;
    notificationCount: number;
    properties: PropertyOption[];
    breadcrumbItems: BreadcrumbItem[];
    onMenuToggle(): void;
    onNotificationClick(): void;
    onBreadcrumbClick(item: BreadcrumbItem): void;
    onPropertyChange(propertyName: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppbarComponent, "app-appbar", never, { "isMenuOpen": { "alias": "isMenuOpen"; "required": false; }; }, { "menuToggle": "menuToggle"; }, never, never, true, never>;
}

type BadgeVariant = 'gray' | 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'pink' | 'orange';
type BadgeSize = 'sm' | 'md' | 'lg';
type BadgeEmphasis = 'high' | 'medium' | 'low';
declare class BadgeComponent {
    variant: BadgeVariant;
    size: BadgeSize;
    emphasis: BadgeEmphasis;
    label: string;
    icon?: string;
    dismissible: boolean;
    disabled: boolean;
    dismiss: EventEmitter<void>;
    onDismiss(): void;
    get badgeClasses(): string;
    get iconColorClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BadgeComponent, "app-badge", never, { "variant": { "alias": "variant"; "required": false; }; "size": { "alias": "size"; "required": false; }; "emphasis": { "alias": "emphasis"; "required": false; }; "label": { "alias": "label"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "dismissible": { "alias": "dismissible"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "dismiss": "dismiss"; }, never, never, true, never>;
}

type BadgeDotSize = 'sm' | 'md' | 'lg';
type BadgeDotColor = 'success' | 'blue' | 'error' | 'warning';
declare class BadgeDotComponent {
    size: BadgeDotSize;
    color: BadgeDotColor;
    outline: boolean;
    get dotClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeDotComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BadgeDotComponent, "app-badge-dot", never, { "size": { "alias": "size"; "required": false; }; "color": { "alias": "color"; "required": false; }; "outline": { "alias": "outline"; "required": false; }; }, {}, never, never, true, never>;
}

interface TooltipItem {
    color?: string;
    label?: string;
    value: string;
}

type BarChartType = 'simple' | 'stacked';
type BarChartOrientation = 'vertical' | 'horizontal';
interface BarChartData {
    series: {
        name: string;
        values: number[];
        color?: string;
    }[];
    categories?: string[];
}
interface BarSegment {
    value: number;
    height: number;
    width: number;
    color: string;
    seriesName?: string;
}
interface ProcessedBar {
    segments: BarSegment[];
    totalValue: number;
    category?: string;
}
declare class BarChartComponent implements OnChanges {
    tooltipVisible: boolean;
    tooltipX: number;
    tooltipY: number;
    tooltipHeader: string;
    tooltipItems: TooltipItem[];
    tooltipTotal: string;
    showTooltipTotal: boolean;
    data: BarChartData;
    type: BarChartType;
    orientation: BarChartOrientation;
    animated: boolean;
    maxHeight: number;
    maxWidth: number;
    private _processedData;
    private _lastDataHash;
    get containerClasses(): string;
    ngOnChanges(changes: SimpleChanges): void;
    get processedData(): ProcessedBar[];
    private calculateProcessedData;
    onColumnHover(event: MouseEvent, bar: ProcessedBar, columnIndex: number): void;
    onColumnMove(event: MouseEvent): void;
    onColumnLeave(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BarChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BarChartComponent, "app-bar-chart", never, { "data": { "alias": "data"; "required": false; }; "type": { "alias": "type"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "animated": { "alias": "animated"; "required": false; }; "maxHeight": { "alias": "maxHeight"; "required": false; }; "maxWidth": { "alias": "maxWidth"; "required": false; }; }, {}, never, never, true, never>;
}

type ButtonHierarchy = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
type ButtonType = 'solid' | 'outline' | 'ghost' | 'link';
type ButtonIcon = 'none' | 'leading' | 'trailing' | 'only';
type ButtonState = 'default' | 'hover' | 'focus' | 'disabled';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
declare class ButtonComponent {
    hierarchy: ButtonHierarchy;
    type: ButtonType;
    icon: ButtonIcon;
    state: ButtonState;
    size: ButtonSize;
    label: string;
    iconName?: string;
    disabled: boolean;
    loading: boolean;
    onClick: EventEmitter<Event>;
    onButtonClick(event: Event): void;
    get buttonClasses(): string;
    get showLabel(): boolean;
    get showLeadingIcon(): boolean;
    get showTrailingIcon(): boolean;
    getIconSizeClass(): string;
    getTextSizeClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "app-button", never, { "hierarchy": { "alias": "hierarchy"; "required": false; }; "type": { "alias": "type"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "state": { "alias": "state"; "required": false; }; "size": { "alias": "size"; "required": false; }; "label": { "alias": "label"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; }, { "onClick": "onClick"; }, never, never, true, never>;
}

declare class ContainerComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<ContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContainerComponent, "app-container", never, {}, {}, never, ["*"], true, never>;
}

type ContainerFooterSize = 'minimal' | 'standard';
declare class ContainerFooterComponent {
    size: ContainerFooterSize;
    buttonLabel: string;
    onButtonClick: EventEmitter<void>;
    get footerClasses(): string;
    handleButtonClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContainerFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContainerFooterComponent, "app-container-footer", never, { "size": { "alias": "size"; "required": false; }; "buttonLabel": { "alias": "buttonLabel"; "required": false; }; }, { "onButtonClick": "onButtonClick"; }, never, never, true, never>;
}

type DropdownSize = 'sm' | 'md';
type DropdownState = 'default' | 'focus' | 'disabled';
type DropdownVariant = 'outlined' | 'ghost' | 'icon-only-outlined' | 'icon-only-ghost' | 'avatar';
declare class DropdownComponent implements AfterViewInit {
    private elementRef;
    size: DropdownSize;
    state: DropdownState;
    variant: DropdownVariant;
    label: string;
    iconName: string;
    disabled: boolean;
    menuItems: DropdownMenuItem[];
    header?: DropdownMenuHeader;
    avatarSrc: string;
    avatarAlt: string;
    avatarSize: 'sm' | 'md' | 'lg';
    avatarName?: string;
    avatarEmail?: string;
    showIcons: boolean;
    forcePosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'bottom-center' | 'top-center' | 'left-top' | 'left-center' | 'left-bottom' | 'right-top' | 'right-center' | 'right-bottom';
    onItemClick: EventEmitter<DropdownMenuItem>;
    dropdownMenu: ElementRef;
    isOpen: boolean;
    dropdownPosition: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'bottom-center' | 'top-center' | 'left-top' | 'left-center' | 'left-bottom' | 'right-top' | 'right-center' | 'right-bottom';
    onDocumentClick(event: Event): void;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    toggleDropdown(): void;
    closeDropdown(): void;
    onMenuItemClick(item: DropdownMenuItem): void;
    get buttonState(): 'default' | 'focus' | 'disabled';
    get trailingIconName(): string;
    get buttonIconType(): 'leading' | 'trailing' | 'only';
    get buttonLabel(): string;
    get buttonHierarchy(): 'secondary' | 'tertiary';
    get isIconOnly(): boolean;
    get showAvatar(): boolean;
    get showButton(): boolean;
    get dropdownMenuHeader(): DropdownMenuHeader | undefined;
    private calculatePosition;
    get positionClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownComponent, "app-dropdown", never, { "size": { "alias": "size"; "required": false; }; "state": { "alias": "state"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "label": { "alias": "label"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "menuItems": { "alias": "menuItems"; "required": false; }; "header": { "alias": "header"; "required": false; }; "avatarSrc": { "alias": "avatarSrc"; "required": false; }; "avatarAlt": { "alias": "avatarAlt"; "required": false; }; "avatarSize": { "alias": "avatarSize"; "required": false; }; "avatarName": { "alias": "avatarName"; "required": false; }; "avatarEmail": { "alias": "avatarEmail"; "required": false; }; "showIcons": { "alias": "showIcons"; "required": false; }; "forcePosition": { "alias": "forcePosition"; "required": false; }; }, { "onItemClick": "onItemClick"; }, never, never, true, never>;
}

type FeaturedIconSize = 'sm' | 'md' | 'lg' | 'xl';
type FeaturedIconColor = 'brand' | 'gray' | 'error' | 'warning' | 'success' | 'highlight';
type FeaturedIconStyle = 'outlined' | 'filled';
declare class FeaturedIconComponent {
    size: FeaturedIconSize;
    color: FeaturedIconColor;
    style: FeaturedIconStyle;
    icon: string;
    get containerClasses(): string;
    get iconSize(): number;
    get materialIconClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeaturedIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FeaturedIconComponent, "app-featured-icon", never, { "size": { "alias": "size"; "required": false; }; "color": { "alias": "color"; "required": false; }; "style": { "alias": "style"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; }, {}, never, never, true, never>;
}

declare class ProductSwitcherService {
    private isOpenSubject;
    isOpen$: rxjs.Observable<boolean>;
    private isClosingSubject;
    isClosing$: rxjs.Observable<boolean>;
    private anchorPositionSubject;
    anchorPosition$: rxjs.Observable<{
        top: number;
        left: number;
    } | null>;
    open(anchorElement: HTMLElement): void;
    close(): void;
    toggle(anchorElement: HTMLElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductSwitcherService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductSwitcherService>;
}

declare class LogoBoxComponent {
    private productSwitcherService;
    logoType: 'actabl' | 'al' | 'he' | 'ps' | 'tr';
    logoActive: ElementRef;
    isOpen$: rxjs.Observable<boolean>;
    constructor(productSwitcherService: ProductSwitcherService);
    onLogoClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogoBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LogoBoxComponent, "app-logo-box", never, { "logoType": { "alias": "logoType"; "required": false; }; }, {}, never, never, true, never>;
}

declare class NavItemComponent {
    private router;
    icon: string;
    label: string;
    isActive: boolean;
    itemClick: EventEmitter<string>;
    constructor(router: Router);
    navigate(): void;
    private getRouteFromLabel;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavItemComponent, "app-nav-item", never, { "icon": { "alias": "icon"; "required": false; }; "label": { "alias": "label"; "required": false; }; "isActive": { "alias": "isActive"; "required": false; }; }, { "itemClick": "itemClick"; }, never, never, true, never>;
}

type NotificationType = 'primary' | 'gray' | 'success' | 'error' | 'warning' | 'progress' | 'image' | 'avatar' | 'no-icon';
type NotificationBreakpoint = 'desktop' | 'mobile';
declare class NotificationComponent {
    type: NotificationType;
    breakpoint: NotificationBreakpoint;
    title: string;
    description: string;
    actionText?: string;
    dismissText?: string;
    dismissible: boolean;
    imageUrl?: string;
    avatarUrl?: string;
    progress?: number;
    icon?: string;
    featuredIconStyle: FeaturedIconStyle;
    animated: boolean;
    closing: boolean;
    action: EventEmitter<void>;
    dismiss: EventEmitter<void>;
    close: EventEmitter<void>;
    onAction(): void;
    onDismiss(): void;
    onClose(): void;
    get notificationClasses(): string;
    get iconName(): string;
    get featuredIconColor(): FeaturedIconColor;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationComponent, "app-notification", never, { "type": { "alias": "type"; "required": false; }; "breakpoint": { "alias": "breakpoint"; "required": false; }; "title": { "alias": "title"; "required": false; }; "description": { "alias": "description"; "required": false; }; "actionText": { "alias": "actionText"; "required": false; }; "dismissText": { "alias": "dismissText"; "required": false; }; "dismissible": { "alias": "dismissible"; "required": false; }; "imageUrl": { "alias": "imageUrl"; "required": false; }; "avatarUrl": { "alias": "avatarUrl"; "required": false; }; "progress": { "alias": "progress"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "featuredIconStyle": { "alias": "featuredIconStyle"; "required": false; }; "animated": { "alias": "animated"; "required": false; }; "closing": { "alias": "closing"; "required": false; }; }, { "action": "action"; "dismiss": "dismiss"; "close": "close"; }, never, never, true, never>;
}

interface ChildItem {
    label: string;
    badge?: string | number;
    isActive?: boolean;
}
declare class PageNavigationMultiLevelComponent {
    label: string;
    icon: string;
    badge?: string | number;
    children: ChildItem[];
    isExpanded: boolean;
    itemClick: EventEmitter<ChildItem | null>;
    get hasActiveChild(): boolean;
    isHovered: boolean;
    onMouseEnter(): void;
    onMouseLeave(): void;
    get displayIcon(): string;
    toggleExpanded(): void;
    onParentClick(): void;
    onChildClick(child: ChildItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageNavigationMultiLevelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageNavigationMultiLevelComponent, "app-page-navigation-multi-level", never, { "label": { "alias": "label"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "badge": { "alias": "badge"; "required": false; }; "children": { "alias": "children"; "required": false; }; "isExpanded": { "alias": "isExpanded"; "required": false; }; }, { "itemClick": "itemClick"; }, never, never, true, never>;
}

interface NavigationItem {
    id: string;
    label: string;
    icon?: string;
    type: 'single' | 'expandable';
    isActive?: boolean;
    isExpanded?: boolean;
    badge?: string | number;
    children?: ChildItem[];
}
declare class PageNavigationComponent {
    pageTitle: string;
    selectedItem: string | null;
    navigationItems: NavigationItem[];
    onSingleLevelClick(item: NavigationItem): void;
    onMultiLevelClick(item: NavigationItem, child: ChildItem | null): void;
    private clearAllSelections;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageNavigationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageNavigationComponent, "app-page-navigation", never, {}, {}, never, never, true, never>;
}

declare class PageNavigationChildComponent {
    label: string;
    badge?: string | number;
    isActive: boolean;
    itemClick: EventEmitter<void>;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageNavigationChildComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageNavigationChildComponent, "app-page-navigation-child", never, { "label": { "alias": "label"; "required": false; }; "badge": { "alias": "badge"; "required": false; }; "isActive": { "alias": "isActive"; "required": false; }; }, { "itemClick": "itemClick"; }, never, never, true, never>;
}

declare class PageNavigationSingleLevelComponent {
    label: string;
    icon: string;
    badge?: string | number;
    isActive: boolean;
    itemClick: EventEmitter<void>;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageNavigationSingleLevelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageNavigationSingleLevelComponent, "app-page-navigation-single-level", never, { "label": { "alias": "label"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "badge": { "alias": "badge"; "required": false; }; "isActive": { "alias": "isActive"; "required": false; }; }, { "itemClick": "itemClick"; }, never, never, true, never>;
}

interface Product {
    id: string;
    name: string;
    description: string;
    logo: string;
    current?: boolean;
}
declare class ProductSwitcherComponent {
    private productSwitcherService;
    isOpen$: rxjs.Observable<boolean>;
    isClosing$: rxjs.Observable<boolean>;
    anchorPosition$: rxjs.Observable<{
        top: number;
        left: number;
    } | null>;
    constructor(productSwitcherService: ProductSwitcherService);
    onDocumentClick(event: Event): void;
    products: Product[];
    onProductClick(product: Product): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductSwitcherComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProductSwitcherComponent, "app-product-switcher", never, {}, {}, never, never, true, never>;
}

type ProgressDirection$1 = 'positive' | 'negative' | 'neutral' | 'automatic';
type ThresholdStatus = 'success' | 'warning' | 'danger';
declare class ProgressChartComponent implements OnInit, OnDestroy, OnChanges {
    trend: ProgressDirection$1;
    progress: number;
    animated: boolean;
    showTarget: boolean;
    target: number;
    thresholdStatus?: ThresholdStatus;
    warningThreshold?: number;
    dangerThreshold?: number;
    displayedProgress: number;
    private animationFrameId?;
    get containerClasses(): string;
    get strokeColor(): string;
    get progressPercentage(): number;
    get targetPercentage(): number;
    get targetLineData(): {
        x: number;
        y: number;
        rotation: number;
        lineLength: number;
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        transform: string;
    };
    get targetLineColor(): string;
    private calculateThresholdStatus;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private animateProgress;
    private animateProgressFromCurrent;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressChartComponent, "app-progress-chart", never, { "trend": { "alias": "trend"; "required": false; }; "progress": { "alias": "progress"; "required": false; }; "animated": { "alias": "animated"; "required": false; }; "showTarget": { "alias": "showTarget"; "required": false; }; "target": { "alias": "target"; "required": false; }; "thresholdStatus": { "alias": "thresholdStatus"; "required": false; }; "warningThreshold": { "alias": "warningThreshold"; "required": false; }; "dangerThreshold": { "alias": "dangerThreshold"; "required": false; }; }, {}, never, never, true, never>;
}

type TrendDirection = 'positive' | 'negative' | 'neutral';
type TrendVariant = 'line-only' | 'fill-only';
type ValueType = 'currency' | 'percentage' | 'number';
type ChartData = number[];
type ComponentSize = 'sm' | 'md' | 'lg' | 'xl';
type StatusColor = 'success' | 'warning' | 'error' | 'info' | 'neutral';

type ProgressChartCardType = 'simple' | 'featured-icon';
type ProgressChartCardBreakpoint = 'desktop' | 'mobile';
type ProgressDirection = 'positive' | 'negative' | 'neutral' | 'automatic';
declare class ProgressChartCardComponent {
    type: ProgressChartCardType;
    breakpoint: ProgressChartCardBreakpoint;
    heading: string;
    value: number;
    valueType: ValueType;
    progress: ProgressDirection;
    showProgressIcon: boolean;
    showDropdown: boolean;
    dropdownVariant: DropdownVariant;
    progressPercentage: string;
    badgeColor: BadgeVariant | 'auto';
    showChart: boolean;
    progressValue: number;
    showFooter: boolean;
    footerButtonLabel: string;
    icon: string;
    iconSize: FeaturedIconSize;
    iconColor: FeaturedIconColor;
    iconStyle: FeaturedIconStyle;
    showTarget: boolean;
    target: number;
    warningThreshold?: number;
    dangerThreshold?: number;
    dropdownMenuItems: DropdownMenuItem[];
    get containerClasses(): string;
    get formattedValue(): string;
    get progressIcon(): string;
    get badgeVariant(): BadgeVariant;
    get badgeIconName(): string;
    onDropdownSelect(item: DropdownMenuItem): void;
    onFooterButtonClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressChartCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressChartCardComponent, "app-progress-chart-card", never, { "type": { "alias": "type"; "required": false; }; "breakpoint": { "alias": "breakpoint"; "required": false; }; "heading": { "alias": "heading"; "required": false; }; "value": { "alias": "value"; "required": false; }; "valueType": { "alias": "valueType"; "required": false; }; "progress": { "alias": "progress"; "required": false; }; "showProgressIcon": { "alias": "showProgressIcon"; "required": false; }; "showDropdown": { "alias": "showDropdown"; "required": false; }; "dropdownVariant": { "alias": "dropdownVariant"; "required": false; }; "progressPercentage": { "alias": "progressPercentage"; "required": false; }; "badgeColor": { "alias": "badgeColor"; "required": false; }; "showChart": { "alias": "showChart"; "required": false; }; "progressValue": { "alias": "progressValue"; "required": false; }; "showFooter": { "alias": "showFooter"; "required": false; }; "footerButtonLabel": { "alias": "footerButtonLabel"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconSize": { "alias": "iconSize"; "required": false; }; "iconColor": { "alias": "iconColor"; "required": false; }; "iconStyle": { "alias": "iconStyle"; "required": false; }; "showTarget": { "alias": "showTarget"; "required": false; }; "target": { "alias": "target"; "required": false; }; "warningThreshold": { "alias": "warningThreshold"; "required": false; }; "dangerThreshold": { "alias": "dangerThreshold"; "required": false; }; }, {}, never, never, true, never>;
}

interface MenuItem {
    label: string;
    icon: string;
    isActive: boolean;
}
interface FooterItem {
    label: string;
    icon: string;
}
declare class SidebarComponent {
    logoType: 'actabl' | 'al' | 'he' | 'ps' | 'tr';
    avatarUrl?: string;
    avatarInitials?: string;
    menuItems: MenuItem[];
    footerItems: FooterItem[];
    avatarMenuItems: DropdownMenuItem[];
    onNavItemClick(label: string): void;
    onAvatarMenuClick(item: DropdownMenuItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarComponent, "app-sidebar", never, { "logoType": { "alias": "logoType"; "required": false; }; "avatarUrl": { "alias": "avatarUrl"; "required": false; }; "avatarInitials": { "alias": "avatarInitials"; "required": false; }; "menuItems": { "alias": "menuItems"; "required": false; }; "footerItems": { "alias": "footerItems"; "required": false; }; }, {}, never, never, true, never>;
}

type ToggleSize = 'sm' | 'md';
type ToggleState = 'default' | 'hover' | 'focus' | 'disabled';
declare class ToggleComponent implements ControlValueAccessor {
    size: ToggleSize;
    showText: boolean;
    label: string;
    supportingText: string;
    disabled: boolean;
    id: string;
    toggleChange: EventEmitter<boolean>;
    private _checked;
    private _state;
    private onChange;
    private onTouched;
    get checked(): boolean;
    set checked(value: boolean);
    get state(): ToggleState;
    onToggle(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    onFocus(): void;
    onBlur(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (value: boolean) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleComponent, "app-toggle", never, { "size": { "alias": "size"; "required": false; }; "showText": { "alias": "showText"; "required": false; }; "label": { "alias": "label"; "required": false; }; "supportingText": { "alias": "supportingText"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "id": { "alias": "id"; "required": false; }; }, { "toggleChange": "toggleChange"; }, never, never, true, never>;
}

type TrendChartCardType = 'metric' | 'simple' | 'featured-icon';
type TrendChartCardBreakpoint = 'desktop' | 'mobile';
declare class TrendChartCardComponent {
    type: TrendChartCardType;
    breakpoint: TrendChartCardBreakpoint;
    heading: string;
    value: number;
    valueType: ValueType;
    trend: TrendDirection;
    showTrendIcon: boolean;
    showDropdown: boolean;
    dropdownVariant: DropdownVariant;
    trendPercentage: string;
    showChart: boolean;
    chartData: number[];
    showFooter: boolean;
    footerButtonLabel: string;
    icon: string;
    iconSize: FeaturedIconSize;
    iconColor: FeaturedIconColor;
    iconStyle: FeaturedIconStyle;
    dropdownMenuItems: DropdownMenuItem[];
    get containerClasses(): string;
    get formattedValue(): string;
    get trendIcon(): string;
    get badgeVariant(): 'green' | 'red' | 'gray';
    get badgeIconName(): string;
    onDropdownSelect(item: DropdownMenuItem): void;
    onFooterButtonClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrendChartCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TrendChartCardComponent, "app-trend-chart-card", never, { "type": { "alias": "type"; "required": false; }; "breakpoint": { "alias": "breakpoint"; "required": false; }; "heading": { "alias": "heading"; "required": false; }; "value": { "alias": "value"; "required": false; }; "valueType": { "alias": "valueType"; "required": false; }; "trend": { "alias": "trend"; "required": false; }; "showTrendIcon": { "alias": "showTrendIcon"; "required": false; }; "showDropdown": { "alias": "showDropdown"; "required": false; }; "dropdownVariant": { "alias": "dropdownVariant"; "required": false; }; "trendPercentage": { "alias": "trendPercentage"; "required": false; }; "showChart": { "alias": "showChart"; "required": false; }; "chartData": { "alias": "chartData"; "required": false; }; "showFooter": { "alias": "showFooter"; "required": false; }; "footerButtonLabel": { "alias": "footerButtonLabel"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconSize": { "alias": "iconSize"; "required": false; }; "iconColor": { "alias": "iconColor"; "required": false; }; "iconStyle": { "alias": "iconStyle"; "required": false; }; }, {}, never, never, true, never>;
}

declare class TrendChartMiniComponent implements OnInit {
    trend: TrendDirection;
    data: number[];
    animated: boolean;
    variant: TrendVariant;
    svgElement: ElementRef<SVGElement>;
    pathElement?: ElementRef<SVGPathElement>;
    pathData: string;
    backgroundPath: string;
    width: number;
    height: number;
    ngOnInit(): void;
    get containerClasses(): string;
    get strokeColor(): string;
    get fillColor(): string;
    generatePath(): void;
    private normalizeData;
    private generateRealisticPath;
    private generateBackgroundPath;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrendChartMiniComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TrendChartMiniComponent, "app-trend-chart-mini", never, { "trend": { "alias": "trend"; "required": false; }; "data": { "alias": "data"; "required": false; }; "animated": { "alias": "animated"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, never, true, never>;
}

declare class BellhoposAngularModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BellhoposAngularModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BellhoposAngularModule, never, [typeof AppbarComponent, typeof BadgeComponent, typeof BadgeDotComponent, typeof BarChartComponent, typeof BreadcrumbsComponent, typeof ButtonComponent, typeof ContainerComponent, typeof ContainerFooterComponent, typeof DropdownComponent, typeof FeaturedIconComponent, typeof LogoBoxComponent, typeof NavItemComponent, typeof NotificationComponent, typeof PageNavigationComponent, typeof PageNavigationChildComponent, typeof PageNavigationMultiLevelComponent, typeof PageNavigationSingleLevelComponent, typeof PopoverComponent, typeof ProductSwitcherComponent, typeof ProgressChartComponent, typeof ProgressChartCardComponent, typeof PropertySwitcherComponent, typeof SidebarComponent, typeof ToggleComponent, typeof TrendChartCardComponent, typeof TrendChartMiniComponent], [typeof AppbarComponent, typeof BadgeComponent, typeof BadgeDotComponent, typeof BarChartComponent, typeof BreadcrumbsComponent, typeof ButtonComponent, typeof ContainerComponent, typeof ContainerFooterComponent, typeof DropdownComponent, typeof FeaturedIconComponent, typeof LogoBoxComponent, typeof NavItemComponent, typeof NotificationComponent, typeof PageNavigationComponent, typeof PageNavigationChildComponent, typeof PageNavigationMultiLevelComponent, typeof PageNavigationSingleLevelComponent, typeof PopoverComponent, typeof ProductSwitcherComponent, typeof ProgressChartComponent, typeof ProgressChartCardComponent, typeof PropertySwitcherComponent, typeof SidebarComponent, typeof ToggleComponent, typeof TrendChartCardComponent, typeof TrendChartMiniComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BellhoposAngularModule>;
}

declare const ChartCardArgTypes: {
    type: {
        control: {
            type: string;
        };
        options: string[];
        description: string;
        table: {
            category: string;
        };
    };
    breakpoint: {
        control: {
            type: string;
        };
        options: string[];
        description: string;
        table: {
            category: string;
        };
    };
    showFooter: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
    };
    heading: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
    };
    value: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
    };
    valueType: {
        control: {
            type: string;
        };
        options: ValueType[];
        description: string;
        table: {
            category: string;
        };
    };
    footerButtonLabel: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
    };
    trend: {
        control: {
            type: string;
        };
        options: TrendDirection[];
        description: string;
        table: {
            category: string;
        };
    };
    showTrendIcon: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
    };
    trendPercentage: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
    };
    icon: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
        if: {
            arg: string;
            eq: string;
        };
    };
    iconSize: {
        control: {
            type: string;
        };
        options: FeaturedIconSize[];
        description: string;
        table: {
            category: string;
        };
        if: {
            arg: string;
            eq: string;
        };
    };
    iconColor: {
        control: {
            type: string;
        };
        options: FeaturedIconColor[];
        description: string;
        table: {
            category: string;
        };
        if: {
            arg: string;
            eq: string;
        };
    };
    iconStyle: {
        control: {
            type: string;
        };
        options: FeaturedIconStyle[];
        description: string;
        table: {
            category: string;
        };
        if: {
            arg: string;
            eq: string;
        };
    };
    showDropdown: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
    };
    dropdownVariant: {
        control: {
            type: string;
        };
        options: DropdownVariant[];
        description: string;
        table: {
            category: string;
        };
        if: {
            arg: string;
            eq: boolean;
        };
    };
};
declare const TrendChartCardArgTypes: {
    type: {
        control: {
            type: string;
        };
        options: string[];
        description: string;
        table: {
            category: string;
        };
    };
    chartData: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
        if: {
            arg: string;
            eq: string;
        };
    };
    breakpoint: {
        control: {
            type: string;
        };
        options: string[];
        description: string;
        table: {
            category: string;
        };
    };
    showFooter: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
    };
    heading: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
    };
    value: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
    };
    valueType: {
        control: {
            type: string;
        };
        options: ValueType[];
        description: string;
        table: {
            category: string;
        };
    };
    footerButtonLabel: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
    };
    trend: {
        control: {
            type: string;
        };
        options: TrendDirection[];
        description: string;
        table: {
            category: string;
        };
    };
    showTrendIcon: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
    };
    trendPercentage: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
    };
    icon: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
        if: {
            arg: string;
            eq: string;
        };
    };
    iconSize: {
        control: {
            type: string;
        };
        options: FeaturedIconSize[];
        description: string;
        table: {
            category: string;
        };
        if: {
            arg: string;
            eq: string;
        };
    };
    iconColor: {
        control: {
            type: string;
        };
        options: FeaturedIconColor[];
        description: string;
        table: {
            category: string;
        };
        if: {
            arg: string;
            eq: string;
        };
    };
    iconStyle: {
        control: {
            type: string;
        };
        options: FeaturedIconStyle[];
        description: string;
        table: {
            category: string;
        };
        if: {
            arg: string;
            eq: string;
        };
    };
    showDropdown: {
        control: {
            type: string;
        };
        description: string;
        table: {
            category: string;
        };
    };
    dropdownVariant: {
        control: {
            type: string;
        };
        options: DropdownVariant[];
        description: string;
        table: {
            category: string;
        };
        if: {
            arg: string;
            eq: boolean;
        };
    };
};

type IllustrationSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
declare class IllustrationsComponent {
    size: IllustrationSize;
    title: string;
    description: string;
    svgPath: string;
    alt: string;
    get illustrationClasses(): string;
    get svgDimensions(): {
        width: number;
        height: number;
    };
    get currentSvgPath(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<IllustrationsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IllustrationsComponent, "app-illustrations", never, { "size": { "alias": "size"; "required": false; }; "title": { "alias": "title"; "required": false; }; "description": { "alias": "description"; "required": false; }; "svgPath": { "alias": "svgPath"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; }, {}, never, never, true, never>;
}

interface EmptyStateAction {
    label: string;
    type: 'primary' | 'secondary';
    icon?: string;
    action: () => void;
}
declare class EmptyStateComponent {
    title: string;
    description: string;
    illustrationSize: IllustrationSize;
    illustrationPath: string;
    actions: EmptyStateAction[];
    maxWidth: string;
    onActionClick(action: EmptyStateAction): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmptyStateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmptyStateComponent, "app-empty-state", never, { "title": { "alias": "title"; "required": false; }; "description": { "alias": "description"; "required": false; }; "illustrationSize": { "alias": "illustrationSize"; "required": false; }; "illustrationPath": { "alias": "illustrationPath"; "required": false; }; "actions": { "alias": "actions"; "required": false; }; "maxWidth": { "alias": "maxWidth"; "required": false; }; }, {}, never, never, true, never>;
}

export { AppbarComponent, BadgeComponent, BadgeDotComponent, BarChartComponent, BellhoposAngularModule, BreadcrumbsComponent, ButtonComponent, ChartCardArgTypes, ContainerComponent, ContainerFooterComponent, DropdownComponent, EmptyStateComponent, FeaturedIconComponent, IllustrationsComponent, LogoBoxComponent, NavItemComponent, NotificationComponent, PageNavigationChildComponent, PageNavigationComponent, PageNavigationMultiLevelComponent, PageNavigationSingleLevelComponent, PopoverComponent, ProductSwitcherComponent, ProgressChartCardComponent, ProgressChartComponent, PropertySwitcherComponent, SidebarComponent, ToggleComponent, TrendChartCardArgTypes, TrendChartCardComponent, TrendChartMiniComponent };
export type { BadgeDotColor, BadgeDotSize, BadgeEmphasis, BadgeSize, BadgeVariant, BarChartData, BarChartOrientation, BarChartType, BarSegment, BreadcrumbItem, ButtonHierarchy, ButtonIcon, ButtonSize, ButtonState, ButtonType, ChartData, ChildItem, ComponentSize, ContainerFooterSize, DropdownMenuHeader, DropdownMenuItem, DropdownSize, DropdownState, DropdownVariant, EmptyStateAction, FeaturedIconColor, FeaturedIconSize, FeaturedIconStyle, FooterItem, IllustrationSize, MenuItem, NotificationBreakpoint, NotificationType, PopoverItem, ProcessedBar, Product, ProgressChartCardBreakpoint, ProgressChartCardType, ProgressDirection$1 as ProgressDirection, PropertyOption, StatusColor, ThresholdStatus, ToggleSize, ToggleState, TrendChartCardBreakpoint, TrendChartCardType, TrendDirection, TrendVariant, ValueType };
