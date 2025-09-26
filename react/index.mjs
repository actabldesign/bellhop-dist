import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as React from 'react';

const Button = ({ hierarchy = 'primary', type = 'solid', icon = 'none', state = 'default', size = 'md', label = 'Label', iconName, disabled = false, loading = false, className, onClick, }) => {
    const handleClick = (event) => {
        if (!disabled && !loading && onClick) {
            onClick(event);
        }
    };
    const buttonClasses = [
        'btn',
        `btn-${hierarchy}`,
        `btn-${type}`,
        `btn-${size}`,
        `btn-icon-${icon}`,
        disabled || state === 'disabled' ? 'btn-disabled' : '',
        loading ? 'btn-loading' : '',
        state === 'focus' ? 'btn-focus' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const showLabel = icon !== 'only';
    const showLeadingIcon = icon === 'leading' && (iconName || loading);
    const showTrailingIcon = icon === 'trailing' && iconName && !loading;
    const showOnlyIcon = icon === 'only' && (iconName || loading);
    const getIconSizeClass = () => {
        switch (size) {
            case 'sm':
                return 'icon-md';
            case 'md':
                return 'icon-md';
            case 'lg':
                return 'icon-lg';
            default:
                return 'icon-md';
        }
    };
    const getTextSizeClass = () => {
        switch (size) {
            case 'sm':
                return 'text-sm';
            case 'md':
                return 'text-sm';
            case 'lg':
                return 'text-md';
            default:
                return 'text-sm';
        }
    };
    return (jsxs("button", { className: buttonClasses, disabled: disabled, onClick: handleClick, children: [showLeadingIcon && (jsx("span", { className: `btn-icon ${getIconSizeClass()}`, children: loading ? (jsx("span", { className: "btn-loading-icon", children: "\u27F3" })) : (jsx("span", { className: "btn-icon-material material-symbols-outlined", children: iconName })) })), showOnlyIcon && (jsx("span", { className: `btn-icon ${getIconSizeClass()}`, children: loading ? (jsx("span", { className: "btn-loading-icon", children: "\u27F3" })) : (jsx("span", { className: "btn-icon-material material-symbols-outlined", children: iconName })) })), showLabel && (jsx("span", { className: `btn-label ${getTextSizeClass()}`, children: label })), showTrailingIcon && (jsx("span", { className: `btn-icon ${getIconSizeClass()}`, children: jsx("span", { className: "btn-icon-material material-symbols-outlined", children: iconName }) }))] }));
};

const ButtonIcon = ({ hierarchy = 'primary', state = 'default', size = 'md', iconName, disabled = false, loading = false, onClick, className = '', 'aria-label': ariaLabel, }) => {
    const handleClick = (event) => {
        if (!disabled && !loading && onClick) {
            onClick(event);
        }
    };
    const buttonClasses = [
        'btn', // Temporary: use button classes until button-icon.css exists
        `btn-${hierarchy}`,
        'btn-solid', // ButtonIcon always uses solid type
        `btn-${size}`,
        'btn-icon-only', // Temporary: use existing icon-only styling
        disabled || state === 'disabled' ? 'btn-disabled' : '',
        loading ? 'btn-loading' : '',
        state === 'focus' ? 'btn-focus' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const getIconSizeClass = () => {
        switch (size) {
            case 'xs':
                return 'icon-xs';
            case 'sm':
                return 'icon-sm';
            case 'md':
                return 'icon-md';
            case 'lg':
                return 'icon-lg';
            default:
                return 'icon-md';
        }
    };
    return (jsx("button", { className: buttonClasses, disabled: disabled, onClick: handleClick, "aria-label": ariaLabel || iconName, children: jsx("span", { className: `btn-icon ${getIconSizeClass()}`, children: loading ? (jsx("span", { className: "btn-loading-icon", children: "\u27F3" })) : (jsx("span", { className: "btn-icon-material material-symbols-outlined", children: iconName })) }) }));
};

const Badge = ({ variant = 'gray', size = 'md', emphasis = 'high', label = 'Label', icon, dismissible = false, disabled = false, onDismiss, }) => {
    const handleDismiss = (e) => {
        e.stopPropagation();
        if (dismissible && !disabled && onDismiss) {
            onDismiss();
        }
    };
    const badgeClasses = [
        'badge',
        `badge-${variant}`,
        `badge-${size}`,
        `badge-${emphasis}`,
        disabled ? 'badge-disabled' : '',
    ]
        .filter(Boolean)
        .join(' ');
    const iconColorClass = `badge-icon-${variant}-${emphasis}`;
    return (jsxs("span", { className: badgeClasses, children: [icon && (jsx("span", { className: `material-symbols-outlined ${iconColorClass} ${icon === 'dot' ? 'badge-icon-dot' : 'badge-icon-custom'}`, children: icon === 'dot' ? 'fiber_manual_record' : icon })), jsx("span", { className: "badge-label", children: label }), dismissible && (jsx("button", { className: "badge-dismiss", onClick: handleDismiss, disabled: disabled, type: "button", "aria-label": "Dismiss", children: jsx("span", { className: `material-symbols-outlined badge-dismiss-icon ${iconColorClass}`, children: "close" }) }))] }));
};

const Container = ({ children, withFooter = false }) => {
    const containerClasses = ['container', withFooter ? 'container-with-footer' : ''].filter(Boolean).join(' ');
    return (jsx("div", { className: containerClasses, children: children }));
};

const ContainerFooter = ({ size = 'standard', buttonLabel = 'View report', onButtonClick }) => {
    const footerClasses = ['container-footer', `container-footer-${size}`].join(' ');
    return (jsx("div", { className: footerClasses, children: jsx("div", { className: "container-footer-content", children: jsx(Button, { hierarchy: "quaternary", type: "link", size: "md", label: buttonLabel, onClick: onButtonClick }) }) }));
};

const FeaturedIcon = ({ size = 'md', color = 'gray', style = 'outlined', icon = 'star' }) => {
    const containerClasses = [
        'featured-icon',
        `featured-icon-${size}`,
        `featured-icon-${color}`,
        `featured-icon-${style}`,
    ].join(' ');
    const materialIconClass = `material-symbols-outlined icon-${size}`;
    return (jsx("div", { className: containerClasses, children: jsx("span", { className: materialIconClass, children: icon }) }));
};

const LoaderSpinner = ({ size = 'md', overlay = false, overlayMessage = '', showMessage = false, message = 'Loading...', }) => {
    const renderSpinner = () => (jsx("div", { className: "loader-spinner", children: jsx("div", { className: "spinner-gradient", children: jsxs("svg", { className: "gradient-svg", viewBox: "0 0 50 50", children: [jsx("defs", { children: jsxs("linearGradient", { id: "bellhop-gradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [jsx("stop", { offset: "0%", style: { stopColor: 'var(--color-accent-300)' } }), jsx("stop", { offset: "51%", style: { stopColor: 'var(--color-brand-400)' } }), jsx("stop", { offset: "100%", style: { stopColor: 'var(--color-brand-800)' } })] }) }), jsx("circle", { className: "gradient-path", cx: "25", cy: "25", r: "20", fill: "none", stroke: "url(#bellhop-gradient)", strokeWidth: "4", strokeLinecap: "round" })] }) }) }));
    const renderMessage = (isOverlay) => {
        const shouldShowMessage = isOverlay
            ? (showMessage || overlayMessage)
            : showMessage;
        if (!shouldShowMessage)
            return null;
        return (jsx("div", { className: "loader-message", children: isOverlay ? (overlayMessage || message) : message }));
    };
    if (overlay) {
        return (jsx("div", { className: "loader-overlay", children: jsxs("div", { className: "loader-overlay-content", children: [jsx("div", { className: `loader-container size-${size}`, children: renderSpinner() }), renderMessage(true)] }) }));
    }
    return (jsxs("div", { className: `loader-container size-${size}`, children: [renderSpinner(), renderMessage(false)] }));
};

const SkeletonLoader = ({ width = '100%', height = '1em', circle = false, }) => {
    return (jsx("span", { className: `skeleton${circle ? ' skeleton-circle' : ''}`, style: { width, height }, role: "status", "aria-live": "polite", "aria-busy": "true", children: jsx("span", { className: "visually-hidden", children: "Loading..." }) }));
};

const Tooltip = ({ text = '', position = 'top', variant = 'default', visible = false, maxWidth, style, }) => {
    const tooltipClasses = [
        'tooltip',
        `tooltip-${position}`,
        `tooltip-${variant}`,
        visible ? 'tooltip-visible' : '',
        maxWidth && maxWidth > 240 ? 'multiline' : '',
    ]
        .filter(Boolean)
        .join(' ');
    const tooltipStyles = Object.assign(Object.assign({}, (maxWidth && { maxWidth: `${maxWidth}px` })), style);
    return (jsx("div", { className: tooltipClasses, style: tooltipStyles, role: "tooltip", children: jsx("div", { className: "tooltip-content", children: text }) }));
};

const AutocompleteMenu = ({ menuItems = [], visible = false, selectedIndex = -1, maxHeight = 280, multiSelect = false, searchQuery = '', onItemClick, onItemHover, }) => {
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [shouldRender, setShouldRender] = React.useState(visible);
    const [items, setItems] = React.useState(menuItems);
    React.useEffect(() => {
        setItems(menuItems);
    }, [menuItems]);
    React.useEffect(() => {
        if (visible) {
            setShouldRender(true);
            setIsAnimating(false);
        }
        else {
            setIsAnimating(true);
            const timer = setTimeout(() => {
                setShouldRender(false);
                setIsAnimating(false);
            }, 150); // Match exit animation duration
            return () => clearTimeout(timer);
        }
    }, [visible]);
    const getMenuClasses = React.useCallback(() => {
        const classes = ['autocomplete-menu'];
        if (isAnimating && !visible) {
            classes.push('animate-dropdown-exit');
        }
        else if (visible) {
            classes.push('animate-dropdown-enter');
        }
        return classes.join(' ');
    }, [isAnimating, visible]);
    const getItemClasses = React.useCallback((index, item) => {
        const classes = ['autocomplete-item'];
        if (item.disabled) {
            classes.push('disabled');
        }
        if (index === selectedIndex) {
            classes.push('selected');
        }
        return classes.join(' ');
    }, [selectedIndex]);
    const getHighlightedText = React.useCallback((text) => {
        if (!searchQuery || searchQuery.length < 3) {
            return text;
        }
        const regex = new RegExp(`(${searchQuery})`, 'gi');
        const parts = text.split(regex);
        return (jsx(Fragment, { children: parts.map((part, index) => regex.test(part) ? (jsx("span", { className: "highlight", children: part }, index)) : (jsx(React.Fragment, { children: part }, index))) }));
    }, [searchQuery]);
    const handleItemClick = React.useCallback((item, index) => {
        if (!item.disabled) {
            if (multiSelect) {
                // Toggle selection in multi-select mode
                const updatedItems = items.map(i => i.id === item.id ? Object.assign(Object.assign({}, i), { selected: !i.selected }) : i);
                setItems(updatedItems);
                const updatedItem = updatedItems.find(i => i.id === item.id);
                onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(updatedItem);
            }
            else {
                onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
            }
        }
    }, [multiSelect, items, onItemClick]);
    const handleItemMouseEnter = React.useCallback((index) => {
        onItemHover === null || onItemHover === void 0 ? void 0 : onItemHover(index);
    }, [onItemHover]);
    const handleMouseDown = React.useCallback((e) => {
        e.preventDefault();
    }, []);
    if (!shouldRender || items.length === 0) {
        return null;
    }
    return (jsx("div", { className: getMenuClasses(), style: { maxHeight: `${maxHeight}px` }, children: items.map((item, index) => (jsx("div", { className: getItemClasses(index, item), onMouseEnter: () => handleItemMouseEnter(index), role: "option", "aria-selected": index === selectedIndex, "aria-disabled": item.disabled, children: jsxs("div", { className: "item-content", onClick: () => handleItemClick(item, index), onMouseDown: handleMouseDown, children: [jsx("span", { className: "item-text", title: item.label, children: getHighlightedText(item.label) }), multiSelect && item.selected && (jsx("span", { className: "check-icon material-symbols-outlined", children: "check" }))] }) }, item.id))) }));
};

const Avatar = ({ size = 'md', type = 'image', status = 'none', text = 'RD', imageSrc = '/assets/avatars/regionalDirector.png', alt = 'Avatar', onMouseEnter, onMouseLeave, }) => {
    const avatarClasses = React.useMemo(() => {
        const classes = ['avatar', `avatar-${size}`];
        if (status !== 'none') {
            classes.push('avatar-with-status');
        }
        return classes.join(' ');
    }, [size, status]);
    const statusClasses = React.useMemo(() => {
        const classes = [`avatar-status`, `avatar-status-${size}`];
        if (status === 'online') {
            classes.push('avatar-status-online');
        }
        else if (status === 'offline') {
            classes.push('avatar-status-offline');
        }
        return classes.join(' ');
    }, [size, status]);
    const textSizeClass = React.useMemo(() => {
        switch (size) {
            case 'xxs':
                return 'text-xxs';
            case 'xs':
                return 'text-xs';
            case 'sm':
                return 'text-sm';
            case 'md':
                return 'text-md';
            case 'lg':
                return 'text-lg';
            case 'xl':
                return 'text-xl';
            case '2xl':
                return 'text-2xl';
            default:
                return 'text-md';
        }
    }, [size]);
    const iconSizeClass = React.useMemo(() => {
        switch (size) {
            case 'xxs':
                return 'icon-sm';
            case 'xs':
                return 'icon-md';
            case 'sm':
                return 'icon-lg';
            case 'md':
                return 'icon-xl';
            case 'lg':
                return 'icon-2xl';
            case 'xl':
                return 'icon-3xl';
            case '2xl':
                return 'icon-4xl';
            default:
                return 'icon-xl';
        }
    }, [size]);
    return (jsxs("div", { className: avatarClasses, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, children: [jsx("div", { className: "avatar-border" }), jsxs("div", { className: "avatar-content", children: [type === 'image' && (jsx("img", { src: imageSrc, alt: alt, className: "avatar-image" })), type === 'placeholder' && (jsx("span", { className: `material-symbols-outlined avatar-placeholder-icon ${iconSizeClass}`, children: "person" })), type === 'text' && (jsx("span", { className: `avatar-text ${textSizeClass}`, children: text }))] }), status !== 'none' && (jsx("div", { className: statusClasses }))] }));
};

const AvatarAdd = ({ size = 'md', state = 'default', disabled = false, showTooltip = false, tooltipText = 'Add user', onClick, }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const buttonClasses = React.useMemo(() => {
        const classes = ['avatar-add', `avatar-add-${size}`];
        if (disabled || state === 'disabled') {
            classes.push('avatar-add-disabled');
        }
        else if (state === 'focus' || isFocused) {
            classes.push('avatar-add-focus');
        }
        else if (state === 'hover' || isHovered) {
            classes.push('avatar-add-hover');
        }
        return classes.join(' ');
    }, [size, state, disabled, isHovered, isFocused]);
    const iconSizeClass = React.useMemo(() => {
        switch (size) {
            case 'xs':
                return 'icon-md';
            case 'sm':
                return 'icon-md';
            case 'md':
                return 'icon-lg';
            default:
                return 'icon-md';
        }
    }, [size]);
    const handleClick = (event) => {
        if (!disabled) {
            onClick === null || onClick === void 0 ? void 0 : onClick(event);
        }
    };
    const handleMouseEnter = () => {
        if (!disabled) {
            setIsHovered(true);
        }
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handleFocus = () => {
        if (!disabled) {
            setIsFocused(true);
        }
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
    return (jsxs("div", { style: { position: 'relative' }, children: [jsx("button", { type: "button", className: `${buttonClasses} avatar-add-button`, disabled: disabled, onClick: handleClick, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onFocus: handleFocus, onBlur: handleBlur, children: jsx("span", { className: "avatar-add-content", children: jsx("span", { className: `material-symbols-outlined avatar-add-icon ${iconSizeClass}`, children: "add" }) }) }), showTooltip && (jsx(Tooltip, { text: tooltipText, position: "top", visible: isHovered && !disabled }))] }));
};

const AvatarStacked = ({ size = 'md', avatars = [], maxVisible = 10, showAddButton = true, }) => {
    const [hoveredIndex, setHoveredIndex] = React.useState(-1);
    const visibleAvatars = React.useMemo(() => {
        return avatars.slice(0, maxVisible - 1);
    }, [avatars, maxVisible]);
    const remainingCount = React.useMemo(() => {
        const remaining = avatars.length - (maxVisible - 1);
        return remaining > 0 ? remaining : 0;
    }, [avatars.length, maxVisible]);
    const showCountAvatar = remainingCount > 0;
    const avatarStackedClasses = React.useMemo(() => {
        return `avatar-stacked avatar-stacked-${size}`;
    }, [size]);
    return (jsxs("div", { className: avatarStackedClasses, children: [visibleAvatars.map((avatar, index) => (jsxs("div", { className: "avatar-with-tooltip", children: [jsx(Avatar, { size: size, type: avatar.type, imageSrc: avatar.imagePath ? `/assets/avatars/${avatar.imagePath}` : undefined, text: avatar.text, status: avatar.status || 'none', onMouseEnter: () => setHoveredIndex(index), onMouseLeave: () => setHoveredIndex(-1) }), avatar.tooltipText && (jsx(Tooltip, { text: avatar.tooltipText, position: "top", visible: hoveredIndex === index, style: { position: 'absolute', top: 0, left: '50%' } }))] }, index))), showCountAvatar && (jsx(Avatar, { size: size, type: "text", text: `+${remainingCount}`, status: "none" })), showAddButton && (jsx(AvatarAdd, { size: size, showTooltip: true, tooltipText: "Add member" }))] }));
};

const DropdownMenu = ({ header, menuItems = [], visible = true, showIcons = true, scrollable = false, className = '', onItemClick, }) => {
    const [isClosing, setIsClosing] = React.useState(false);
    const [shouldRender, setShouldRender] = React.useState(visible);
    React.useEffect(() => {
        if (visible) {
            setShouldRender(true);
            setIsClosing(false);
        }
        else {
            setIsClosing(true);
            const timer = setTimeout(() => {
                setShouldRender(false);
                setIsClosing(false);
            }, 150);
            return () => clearTimeout(timer);
        }
    }, [visible]);
    const dropdownClasses = React.useMemo(() => {
        const classes = ['dropdown-menu'];
        if (scrollable) {
            classes.push('dropdown-menu-scrollable');
        }
        if (className) {
            classes.push(className);
        }
        if (isClosing) {
            classes.push('animate-dropdown-exit');
        }
        else {
            classes.push('animate-dropdown-enter');
        }
        return classes.join(' ');
    }, [scrollable, className, isClosing]);
    const headerClasses = React.useMemo(() => {
        const classes = ['dropdown-header'];
        if (header === null || header === void 0 ? void 0 : header.avatarGroup) {
            classes.push('dropdown-header-avatar');
        }
        return classes.join(' ');
    }, [header === null || header === void 0 ? void 0 : header.avatarGroup]);
    const getMenuItemClasses = (item) => {
        const classes = ['dropdown-item'];
        if (item.disabled) {
            classes.push('dropdown-item-disabled');
        }
        return classes.join(' ');
    };
    const handleItemClick = (item) => {
        if (!item.disabled && !item.divider) {
            onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
        }
    };
    if (!shouldRender) {
        return null;
    }
    return (jsxs("div", { className: dropdownClasses, children: [header && (jsxs("div", { className: headerClasses, children: [header.avatarGroup && (jsxs("div", { className: "avatar-group", children: [jsx(Avatar, { size: "md", type: "image", status: "online", imageSrc: header.avatarSrc || '', alt: header.name || 'Avatar' }), jsxs("div", { className: "avatar-text", children: [jsx("div", { className: "avatar-name", children: header.name }), jsx("div", { className: "avatar-email", children: header.email })] })] })), !header.avatarGroup && header.title && (jsx("div", { className: "header-title", children: header.title }))] })), jsx("div", { className: "menu-items", children: menuItems.map((item) => (jsxs(React.Fragment, { children: [item.divider && jsx("div", { className: "menu-divider" }), !item.divider && (jsx("div", { className: getMenuItemClasses(item), onClick: () => handleItemClick(item), children: jsxs("div", { className: "item-content", children: [jsxs("div", { className: "item-main", children: [item.icon && showIcons && (jsx("span", { className: "material-symbols-outlined item-icon", children: item.icon })), jsx("span", { className: "item-text", title: item.label, children: item.label })] }), item.shortcut && (jsx("span", { className: "item-shortcut", children: item.shortcut }))] }) }))] }, item.id))) })] }));
};

const Breadcrumbs = ({ items = [], separator = 'chevron_right', showHome = true, maxVisibleItems = 4, onItemClick, onNavigate, className = '', }) => {
    const { displayItems, showEllipsis, collapsedItems } = React.useMemo(() => {
        if (!items || items.length <= maxVisibleItems) {
            return {
                displayItems: items ? [...items] : [],
                showEllipsis: false,
                collapsedItems: [],
            };
        }
        else {
            const lastItems = items.slice(-(maxVisibleItems - 2));
            return {
                displayItems: [items[0], ...lastItems],
                showEllipsis: true,
                collapsedItems: items.slice(1, -(maxVisibleItems - 2)),
            };
        }
    }, [items, maxVisibleItems]);
    const handleItemClick = React.useCallback((item) => {
        if (!item.isActive && item.path) {
            onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
            onNavigate === null || onNavigate === void 0 ? void 0 : onNavigate(item.path);
        }
    }, [onItemClick, onNavigate]);
    const handleHomeClick = React.useCallback(() => {
        const homeItem = {
            label: 'Home',
            path: '/',
            icon: 'cottage',
        };
        onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(homeItem);
        onNavigate === null || onNavigate === void 0 ? void 0 : onNavigate('/');
    }, [onItemClick, onNavigate]);
    const handleEllipsisClick = React.useCallback(() => {
        if (collapsedItems.length > 0) {
            handleItemClick(collapsedItems[0]);
        }
    }, [collapsedItems, handleItemClick]);
    const renderBreadcrumbItem = React.useCallback((item, index) => {
        if (item.isActive || !item.path) {
            return (jsx("div", { className: "breadcrumb-button breadcrumb-current", "aria-current": "page", children: jsx("span", { className: "breadcrumb-text", children: item.label }) }, index));
        }
        return (jsx("button", { type: "button", className: "breadcrumb-button", onClick: () => handleItemClick(item), children: jsx("span", { className: "breadcrumb-text", children: item.label }) }, index));
    }, [handleItemClick]);
    const breadcrumbsClasses = React.useMemo(() => {
        const classes = ['breadcrumbs', className].filter(Boolean);
        return classes.join(' ');
    }, [className]);
    return (jsx("nav", { className: breadcrumbsClasses, "aria-label": "Breadcrumb", children: jsxs("div", { className: "breadcrumbs-container", children: [showHome && (jsx("div", { className: "breadcrumb-item", children: jsx(ButtonIcon, { hierarchy: "tertiary", size: "xs", iconName: "cottage", onClick: handleHomeClick, "aria-label": "Home" }) })), showHome && (displayItems.length > 0 || showEllipsis) && (jsx("div", { className: "breadcrumb-separator", children: jsx("span", { className: "material-symbols-outlined", children: separator }) })), showEllipsis && displayItems.length > 0 && (jsxs(Fragment, { children: [jsx("div", { className: "breadcrumb-item", children: renderBreadcrumbItem(displayItems[0], 0) }), jsx("div", { className: "breadcrumb-separator", children: jsx("span", { className: "material-symbols-outlined", children: separator }) }), jsx("div", { className: "breadcrumb-item", children: jsx("button", { type: "button", className: "breadcrumb-button breadcrumb-ellipsis", onClick: handleEllipsisClick, title: `Show ${collapsedItems.length} hidden items`, children: jsx("span", { className: "breadcrumb-text", children: "..." }) }) }), jsx("div", { className: "breadcrumb-separator", children: jsx("span", { className: "material-symbols-outlined", children: separator }) }), displayItems.slice(1).map((item, index) => (jsxs(React.Fragment, { children: [jsx("div", { className: "breadcrumb-item", children: renderBreadcrumbItem(item, index + 1) }), index < displayItems.slice(1).length - 1 && (jsx("div", { className: "breadcrumb-separator", children: jsx("span", { className: "material-symbols-outlined", children: separator }) }))] }, index + 1)))] })), !showEllipsis && displayItems.map((item, index) => (jsxs(React.Fragment, { children: [jsx("div", { className: "breadcrumb-item", children: renderBreadcrumbItem(item, index) }), index < displayItems.length - 1 && (jsx("div", { className: "breadcrumb-separator", children: jsx("span", { className: "material-symbols-outlined", children: separator }) }))] }, index)))] }) }));
};

const PropertySwitcher = ({ selectedProperty = 'Solstice Hospitality Group', properties = [], onPropertyChange, className = '', }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const switcherRef = React.useRef(null);
    const dropdownMenuItems = React.useMemo(() => {
        const items = [];
        properties.forEach((property, index) => {
            if (property.type === 'portfolio') {
                items.push({
                    id: property.id,
                    label: property.name,
                    icon: 'business',
                });
                // Add divider after portfolio
                items.push({
                    id: `divider-${index}`,
                    divider: true,
                });
            }
            else if (property.type === 'property') {
                items.push({
                    id: property.id,
                    label: property.name,
                    icon: 'location_on',
                });
            }
        });
        return items;
    }, [properties]);
    const handleToggle = React.useCallback(() => {
        setIsExpanded(!isExpanded);
    }, [isExpanded]);
    const handleDropdownItemClick = React.useCallback((item) => {
        if (item.divider)
            return;
        const property = properties.find((p) => p.id === item.id);
        if (property) {
            onPropertyChange === null || onPropertyChange === void 0 ? void 0 : onPropertyChange(property.name);
            setIsExpanded(false);
        }
    }, [properties, onPropertyChange]);
    // Handle clicking outside to close dropdown
    React.useEffect(() => {
        const handleDocumentClick = (event) => {
            if (isExpanded && switcherRef.current && !switcherRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [isExpanded]);
    const containerClasses = React.useMemo(() => {
        const classes = ['property-switcher', className];
        if (isExpanded)
            classes.push('expanded');
        return classes.filter(Boolean).join(' ');
    }, [isExpanded, className]);
    return (jsxs("div", { ref: switcherRef, className: containerClasses, children: [jsxs("button", { className: "property-selector", onClick: handleToggle, "aria-expanded": isExpanded, "aria-label": `Property selector: ${selectedProperty}`, children: [jsx("span", { className: "property-name", children: selectedProperty }), jsx("span", { className: "material-symbols-outlined expand-icon", "aria-label": isExpanded ? 'Collapse Options' : 'Expand Options', children: isExpanded ? 'unfold_less' : 'unfold_more' })] }), jsx("div", { className: "dropdown-menu-container", children: jsx(DropdownMenu, { visible: isExpanded, showIcons: true, scrollable: true, menuItems: dropdownMenuItems, onItemClick: handleDropdownItemClick }) })] }));
};

const Tag = ({ variant = 'text-only', size = 'md', label = 'Label', dismissible = false, disabled = false, maxWidth = 120, className = '', onDismiss, }) => {
    const [isDismissing, setIsDismissing] = React.useState(false);
    const handleDismiss = React.useCallback((event) => {
        if (event) {
            event.stopPropagation();
        }
        if (dismissible && !disabled && !isDismissing) {
            setIsDismissing(true);
            // Simulate animation duration
            setTimeout(() => {
                onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss();
                setIsDismissing(false);
            }, 200);
        }
    }, [dismissible, disabled, isDismissing, onDismiss]);
    const tagClasses = React.useMemo(() => {
        const classes = ['tag', `tag-${size}`, `tag-${variant}`];
        if (dismissible) {
            classes.push('tag-dismissible');
        }
        if (disabled) {
            classes.push('tag-disabled');
        }
        if (isDismissing) {
            classes.push('animate-dismiss');
        }
        if (className) {
            classes.push(className);
        }
        return classes.join(' ');
    }, [size, variant, dismissible, disabled, isDismissing, className]);
    const labelStyle = React.useMemo(() => ({
        maxWidth: `${maxWidth}px`,
    }), [maxWidth]);
    return (jsxs("span", { className: tagClasses, children: [jsxs("div", { className: "tag-content", children: [variant === 'avatar' && (jsx(Avatar, { size: "xxs", type: "image" })), jsx("span", { className: "tag-label-wrapper", children: jsx("span", { className: "tag-label", style: labelStyle, children: label }) })] }), dismissible && (jsx("button", { className: "tag-dismiss", onClick: handleDismiss, disabled: disabled, type: "button", "aria-label": "Dismiss", children: jsx("span", { className: "material-symbols-outlined tag-dismiss-icon", children: "close" }) }))] }));
};

const Notification = ({ type = 'primary', breakpoint = 'desktop', title, description, actionText, dismissText, dismissible = true, imageUrl, avatarUrl, progress, icon, featuredIconStyle = 'outlined', featuredIconColor, animated = false, closing = false, className = '', onAction, onDismiss, onClose, }) => {
    const notificationClasses = React.useMemo(() => {
        const classes = [
            'notification',
            `notification-${type}`,
            `notification-${breakpoint}`,
        ];
        if (animated) {
            classes.push('notification-animated');
        }
        if (closing) {
            classes.push('notification-closing');
        }
        if (className) {
            classes.push(className);
        }
        return classes.join(' ');
    }, [type, breakpoint, animated, closing, className]);
    const iconName = React.useMemo(() => {
        switch (type) {
            case 'primary':
                return 'new_releases';
            case 'success':
                return 'check_circle';
            case 'error':
                return 'error';
            case 'warning':
                return 'warning';
            case 'gray':
                return 'info';
            default:
                return icon || '';
        }
    }, [type, icon]);
    const computedFeaturedIconColor = React.useMemo(() => {
        if (featuredIconColor)
            return featuredIconColor;
        switch (type) {
            case 'primary':
                return 'brand';
            case 'success':
                return 'success';
            case 'error':
                return 'error';
            case 'warning':
                return 'warning';
            case 'gray':
                return 'gray';
            default:
                return 'gray';
        }
    }, [type, featuredIconColor]);
    const handleAction = React.useCallback(() => {
        onAction === null || onAction === void 0 ? void 0 : onAction();
    }, [onAction]);
    const handleDismiss = React.useCallback(() => {
        onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss();
    }, [onDismiss]);
    const handleClose = React.useCallback(() => {
        onClose === null || onClose === void 0 ? void 0 : onClose();
    }, [onClose]);
    const progressDashArray = 50.27;
    const progressOffset = progress ? progressDashArray - (progressDashArray * progress) / 100 : progressDashArray;
    return (jsxs("div", { className: notificationClasses, children: [type === 'image' && breakpoint === 'mobile' && (jsx("div", { className: "notification-image-container", children: jsx("img", { src: imageUrl, alt: "Notification image", className: "notification-image" }) })), jsxs("div", { className: "notification-content", children: [type !== 'no-icon' && type !== 'image' && (jsxs("div", { className: "notification-icon-wrapper", children: [type === 'avatar' && (jsx("div", { className: "notification-avatar", children: jsx("img", { src: avatarUrl, alt: "Avatar" }) })), type === 'progress' && (jsx("div", { className: "notification-progress", children: jsxs("svg", { className: "progress-ring", viewBox: "0 0 20 20", children: [jsx("circle", { className: "progress-ring-circle-bg", cx: "10", cy: "10", r: "8", fill: "none", strokeWidth: "2" }), jsx("circle", { className: "progress-ring-circle", cx: "10", cy: "10", r: "8", fill: "none", strokeWidth: "2", style: {
                                                strokeDasharray: `${progressDashArray} ${progressDashArray}`,
                                                strokeDashoffset: progressOffset,
                                            } })] }) })), type !== 'avatar' && type !== 'progress' && (jsx(FeaturedIcon, { size: "md", color: computedFeaturedIconColor, style: featuredIconStyle, icon: iconName }))] })), jsxs("div", { className: "notification-text", children: [jsxs("div", { className: "notification-text-wrapper", children: [title && jsx("h3", { className: "notification-title", children: title }), description && jsx("p", { className: "notification-description", children: description })] }), (actionText || dismissText) && (jsxs("div", { className: "notification-actions", children: [dismissText && (jsx(Button, { label: dismissText, hierarchy: "tertiary", size: "sm", onClick: handleDismiss })), actionText && (jsx(Button, { label: actionText, hierarchy: "quaternary", size: "sm", onClick: handleAction }))] }))] })] }), dismissible && (jsx("button", { className: "notification-close", onClick: handleClose, children: jsx("span", { className: "material-symbols-outlined notification-close-icon", children: "close" }) }))] }));
};

const InputText = ({ state: controlledState, error = false, required = false, disabled = false, showHelpIcon = true, showLeadingIcon = false, showTrailingIcon = false, showLabel = true, showHintText = true, label = 'Email', placeholder = 'fujiwara@act-hq.com', hintText = 'This is a hint text to help user.', leadingIcon = 'mail', trailingIcon = 'search', helpIconTooltip = 'Help', value: controlledValue = '', width, className = '', onChange, onFocus, onBlur, onHelpClick, }) => {
    const [internalValue, setInternalValue] = React.useState(controlledValue);
    const [internalState, setInternalState] = React.useState(controlledValue ? 'filled' : 'placeholder');
    const [isHovered, setIsHovered] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const [showHelpTooltip, setShowHelpTooltip] = React.useState(false);
    const tooltipTimer = React.useRef(null);
    // Use controlled or internal value
    const value = controlledValue || internalValue;
    // Update internal state when controlled value changes
    React.useEffect(() => {
        if (controlledValue !== undefined) {
            setInternalValue(controlledValue);
            setInternalState(controlledValue ? 'filled' : 'placeholder');
        }
    }, [controlledValue]);
    // Compute input classes
    const inputClasses = React.useMemo(() => {
        const classes = ['input-field'];
        // Use controlled state if provided, otherwise use internal focus state
        const isCurrentlyFocused = controlledState === 'focused' || (!controlledState && isFocused);
        const isCurrentlyHovered = controlledState === 'hover' || (!controlledState && isHovered && !isCurrentlyFocused);
        if (isCurrentlyHovered) {
            classes.push('input-hover');
        }
        if (isCurrentlyFocused) {
            classes.push('input-focused');
        }
        if (error) {
            classes.push('input-error');
        }
        if (disabled) {
            classes.push('input-disabled');
        }
        if (showLeadingIcon) {
            classes.push('input-icon-leading');
        }
        return classes.join(' ');
    }, [controlledState, isHovered, isFocused, error, disabled, showLeadingIcon]);
    // Compute text color class
    const textColorClass = React.useMemo(() => {
        return value ? 'text-filled' : 'text-placeholder';
    }, [value]);
    // Handle input change
    const handleInputChange = React.useCallback((event) => {
        const newValue = event.target.value || '';
        if (!controlledValue) {
            setInternalValue(newValue);
            setInternalState(newValue ? 'filled' : 'placeholder');
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    }, [controlledValue, onChange]);
    // Handle input focus
    const handleInputFocus = React.useCallback(() => {
        setIsFocused(true);
        onFocus === null || onFocus === void 0 ? void 0 : onFocus();
    }, [onFocus]);
    // Handle input blur
    const handleInputBlur = React.useCallback(() => {
        setIsFocused(false);
        onBlur === null || onBlur === void 0 ? void 0 : onBlur();
    }, [onBlur]);
    // Handle mouse enter
    const handleMouseEnter = React.useCallback(() => {
        if (!isFocused) {
            setIsHovered(true);
        }
    }, [isFocused]);
    // Handle mouse leave
    const handleMouseLeave = React.useCallback(() => {
        setIsHovered(false);
    }, []);
    // Handle help icon click
    const handleHelpIconClick = React.useCallback(() => {
        onHelpClick === null || onHelpClick === void 0 ? void 0 : onHelpClick();
    }, [onHelpClick]);
    // Handle help icon mouse enter (tooltip)
    const handleHelpIconMouseEnter = React.useCallback(() => {
        if (tooltipTimer.current) {
            clearTimeout(tooltipTimer.current);
        }
        tooltipTimer.current = setTimeout(() => {
            setShowHelpTooltip(true);
        }, 300);
    }, []);
    // Handle help icon mouse leave (tooltip)
    const handleHelpIconMouseLeave = React.useCallback(() => {
        if (tooltipTimer.current) {
            clearTimeout(tooltipTimer.current);
            tooltipTimer.current = null;
        }
        setShowHelpTooltip(false);
    }, []);
    // Cleanup tooltip timer on unmount
    React.useEffect(() => {
        return () => {
            if (tooltipTimer.current) {
                clearTimeout(tooltipTimer.current);
            }
        };
    }, []);
    const wrapperClasses = ['input-wrapper', className].filter(Boolean).join(' ');
    return (jsxs("div", { className: wrapperClasses, style: { width }, children: [jsxs("div", { className: "input-with-label", children: [showLabel && (jsxs("div", { className: "label-wrapper", children: [jsx("label", { className: "label", children: label }), required && jsx("span", { className: "asterisk", children: "*" }), showHelpIcon && (jsxs("div", { className: "icon-with-tooltip", children: [jsx("span", { className: "help-icon material-symbols-outlined", onMouseEnter: handleHelpIconMouseEnter, onMouseLeave: handleHelpIconMouseLeave, onClick: handleHelpIconClick, children: "help" }), jsx(Tooltip, { text: helpIconTooltip, position: "top", variant: "icon", visible: showHelpTooltip, style: { position: 'absolute', top: 0, left: '50%' } })] }))] })), jsx("div", { className: inputClasses, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: jsxs("div", { className: "input-content", children: [showLeadingIcon && (jsx("span", { className: "leading-icon material-symbols-outlined", children: leadingIcon })), jsx("input", { type: "text", value: value, placeholder: placeholder, disabled: disabled, className: `input-element ${textColorClass}`, onChange: handleInputChange, onFocus: handleInputFocus, onBlur: handleInputBlur }), showTrailingIcon && (jsx("span", { className: "trailing-icon material-symbols-outlined", children: trailingIcon }))] }) })] }), showHintText && hintText && (jsx("div", { className: `hint-text ${error ? 'hint-error' : ''}`, children: hintText }))] }));
};

const InputPassword = ({ state: controlledState, error = false, required = false, disabled = false, showHelpIcon = false, showLeadingIcon = true, showLabel = true, showHintText = true, label = 'Password', placeholder = 'Enter your password', hintText = 'Must be at least 8 characters', leadingIcon = 'lock', helpIconTooltip = 'Password requirements', value: controlledValue = '', width, className = '', onChange, onFocus, onBlur, onHelpClick, }) => {
    const [internalValue, setInternalValue] = React.useState(controlledValue);
    const [internalState, setInternalState] = React.useState(controlledValue ? 'filled' : 'placeholder');
    const [isHovered, setIsHovered] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const [showHelpTooltip, setShowHelpTooltip] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const tooltipTimer = React.useRef(null);
    // Use controlled or internal value
    const value = controlledValue || internalValue;
    // Update internal state when controlled value changes
    React.useEffect(() => {
        if (controlledValue !== undefined) {
            setInternalValue(controlledValue);
            setInternalState(controlledValue ? 'filled' : 'placeholder');
        }
    }, [controlledValue]);
    // Compute input classes
    const inputClasses = React.useMemo(() => {
        const classes = ['input-field', 'input-field-with-toggle'];
        // Use controlled state if provided, otherwise use internal focus state
        const isCurrentlyFocused = controlledState === 'focused' || (!controlledState && isFocused);
        const isCurrentlyHovered = controlledState === 'hover' || (!controlledState && isHovered && !isCurrentlyFocused);
        if (isCurrentlyHovered) {
            classes.push('input-hover');
        }
        if (isCurrentlyFocused) {
            classes.push('input-focused');
        }
        if (error) {
            classes.push('input-error');
        }
        if (disabled) {
            classes.push('input-disabled');
        }
        if (showLeadingIcon) {
            classes.push('input-icon-leading');
        }
        return classes.join(' ');
    }, [controlledState, isHovered, isFocused, error, disabled, showLeadingIcon]);
    // Compute text color class
    const textColorClass = React.useMemo(() => {
        return value ? 'text-filled' : 'text-placeholder';
    }, [value]);
    // Handle input change
    const handleInputChange = React.useCallback((event) => {
        const newValue = event.target.value || '';
        if (!controlledValue) {
            setInternalValue(newValue);
            setInternalState(newValue ? 'filled' : 'placeholder');
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    }, [controlledValue, onChange]);
    // Handle input focus
    const handleInputFocus = React.useCallback(() => {
        setIsFocused(true);
        onFocus === null || onFocus === void 0 ? void 0 : onFocus();
    }, [onFocus]);
    // Handle input blur
    const handleInputBlur = React.useCallback(() => {
        setIsFocused(false);
        onBlur === null || onBlur === void 0 ? void 0 : onBlur();
    }, [onBlur]);
    // Handle mouse enter
    const handleMouseEnter = React.useCallback(() => {
        if (!isFocused) {
            setIsHovered(true);
        }
    }, [isFocused]);
    // Handle mouse leave
    const handleMouseLeave = React.useCallback(() => {
        setIsHovered(false);
    }, []);
    // Handle password visibility toggle
    const handleTogglePasswordVisibility = React.useCallback(() => {
        if (!disabled) {
            setShowPassword(prev => !prev);
        }
    }, [disabled]);
    // Handle help icon click
    const handleHelpIconClick = React.useCallback(() => {
        onHelpClick === null || onHelpClick === void 0 ? void 0 : onHelpClick();
    }, [onHelpClick]);
    // Handle help icon mouse enter (tooltip)
    const handleHelpIconMouseEnter = React.useCallback(() => {
        if (tooltipTimer.current) {
            clearTimeout(tooltipTimer.current);
        }
        tooltipTimer.current = setTimeout(() => {
            setShowHelpTooltip(true);
        }, 300);
    }, []);
    // Handle help icon mouse leave (tooltip)
    const handleHelpIconMouseLeave = React.useCallback(() => {
        if (tooltipTimer.current) {
            clearTimeout(tooltipTimer.current);
            tooltipTimer.current = null;
        }
        setShowHelpTooltip(false);
    }, []);
    // Cleanup tooltip timer on unmount
    React.useEffect(() => {
        return () => {
            if (tooltipTimer.current) {
                clearTimeout(tooltipTimer.current);
            }
        };
    }, []);
    const wrapperClasses = ['input-wrapper', className].filter(Boolean).join(' ');
    return (jsxs("div", { className: wrapperClasses, style: { width }, children: [jsxs("div", { className: "input-with-label", children: [showLabel && (jsxs("div", { className: "label-wrapper", children: [jsx("label", { className: "label", children: label }), required && jsx("span", { className: "asterisk", children: "*" }), showHelpIcon && (jsxs("div", { className: "icon-with-tooltip", children: [jsx("span", { className: "help-icon material-symbols-outlined", onMouseEnter: handleHelpIconMouseEnter, onMouseLeave: handleHelpIconMouseLeave, onClick: handleHelpIconClick, children: "help" }), jsx(Tooltip, { text: helpIconTooltip, position: "top", variant: "icon", visible: showHelpTooltip, style: { position: 'absolute', top: 0, left: '50%' } })] }))] })), jsxs("div", { className: inputClasses, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: [jsxs("div", { className: "input-content", children: [showLeadingIcon && (jsx("span", { className: "leading-icon material-symbols-outlined", children: leadingIcon })), jsx("input", { type: showPassword ? 'text' : 'password', value: value, placeholder: placeholder, disabled: disabled, className: `input-element ${textColorClass}`, onChange: handleInputChange, onFocus: handleInputFocus, onBlur: handleInputBlur })] }), jsx("span", { className: "visibility-toggle material-symbols-outlined", onClick: handleTogglePasswordVisibility, title: showPassword ? 'Hide password' : 'Show password', children: showPassword ? 'visibility_off' : 'visibility' })] })] }), showHintText && hintText && (jsx("div", { className: `hint-text ${error ? 'hint-error' : ''}`, children: hintText }))] }));
};

const InputNumber = ({ state = 'placeholder', error = false, required = false, disabled = false, showHelpIcon = false, showLeadingIcon = false, showLabel = true, showHintText = true, label = 'Amount', placeholder = '0', hintText = 'Enter a numeric value.', leadingIcon = 'tag', helpIconTooltip = 'Help', value, min = null, max = null, step = 1, prefix = '', suffix = '', width, onChange, onFocus, onBlur, onHelpClick, className = '', }) => {
    const [internalState, setInternalState] = React.useState(state);
    const [isHovered, setIsHovered] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const [showHelpTooltip, setShowHelpTooltip] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(0);
    const [hasValidationError, setHasValidationError] = React.useState(false);
    const tooltipTimerRef = React.useRef(null);
    const inputRef = React.useRef(null);
    // Determine if this is controlled mode (value prop was explicitly passed)
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    // Check if current value is within bounds
    const isOutOfBounds = React.useCallback((val) => {
        if (val === null)
            return false;
        if (min !== null && val < min)
            return true;
        if (max !== null && val > max)
            return true;
        return false;
    }, [min, max]);
    // Update validation error state whenever value changes
    React.useEffect(() => {
        setHasValidationError(isOutOfBounds(currentValue));
    }, [currentValue, isOutOfBounds]);
    // Update internal state based on value
    React.useEffect(() => {
        if (currentValue !== null && currentValue !== undefined) {
            setInternalState('filled');
        }
        else if (!isFocused && !isHovered) {
            setInternalState('placeholder');
        }
    }, [currentValue, isFocused, isHovered]);
    const validateValue = React.useCallback((val) => {
        if (min !== null && val < min) {
            return min;
        }
        if (max !== null && val > max) {
            return max;
        }
        return val;
    }, [min, max]);
    const updateValue = React.useCallback((newValue, allowOutOfBounds = false) => {
        let finalValue;
        if (newValue === null) {
            finalValue = null;
        }
        else if (allowOutOfBounds) {
            // Allow out of bounds values (for manual typing)
            finalValue = newValue;
        }
        else {
            // Constrain to bounds (for increment/decrement buttons)
            finalValue = validateValue(newValue);
        }
        if (!isControlled) {
            setInternalValue(finalValue);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(finalValue);
    }, [isControlled, validateValue, onChange]);
    const handleInputChange = React.useCallback((event) => {
        const inputValue = event.target.value;
        const numericValue = inputValue === '' ? null : parseFloat(inputValue);
        if (numericValue !== null && !isNaN(numericValue)) {
            updateValue(numericValue, true); // Allow out of bounds for manual typing
        }
        else if (inputValue === '') {
            updateValue(null, true);
        }
    }, [updateValue]);
    const increment = React.useCallback(() => {
        const baseValue = currentValue !== null && currentValue !== void 0 ? currentValue : 0;
        const newValue = baseValue + step;
        updateValue(newValue);
    }, [currentValue, step, updateValue]);
    const decrement = React.useCallback(() => {
        const baseValue = currentValue !== null && currentValue !== void 0 ? currentValue : 0;
        const newValue = baseValue - step;
        updateValue(newValue);
    }, [currentValue, step, updateValue]);
    const handleInputFocus = React.useCallback(() => {
        setIsFocused(true);
        setInternalState('focused');
        onFocus === null || onFocus === void 0 ? void 0 : onFocus();
    }, [onFocus]);
    const handleInputBlur = React.useCallback(() => {
        setIsFocused(false);
        if (currentValue !== null && currentValue !== undefined) {
            setInternalState('filled');
        }
        else {
            setInternalState('placeholder');
        }
        onBlur === null || onBlur === void 0 ? void 0 : onBlur();
    }, [currentValue, onBlur]);
    const handleMouseEnter = React.useCallback(() => {
        if (!isFocused) {
            setIsHovered(true);
            setInternalState('hover');
        }
    }, [isFocused]);
    const handleMouseLeave = React.useCallback(() => {
        setIsHovered(false);
        if (!isFocused) {
            if (currentValue !== null && currentValue !== undefined) {
                setInternalState('filled');
            }
            else {
                setInternalState('placeholder');
            }
        }
    }, [isFocused, currentValue]);
    const handleHelpIconClick = React.useCallback(() => {
        onHelpClick === null || onHelpClick === void 0 ? void 0 : onHelpClick();
    }, [onHelpClick]);
    const handleHelpIconMouseEnter = React.useCallback(() => {
        if (tooltipTimerRef.current) {
            clearTimeout(tooltipTimerRef.current);
        }
        tooltipTimerRef.current = setTimeout(() => {
            setShowHelpTooltip(true);
        }, 300);
    }, []);
    const handleHelpIconMouseLeave = React.useCallback(() => {
        if (tooltipTimerRef.current) {
            clearTimeout(tooltipTimerRef.current);
            tooltipTimerRef.current = null;
        }
        setShowHelpTooltip(false);
    }, []);
    // Cleanup timer on unmount
    React.useEffect(() => {
        return () => {
            if (tooltipTimerRef.current) {
                clearTimeout(tooltipTimerRef.current);
            }
        };
    }, []);
    // Show error if either the error prop is true OR validation fails
    const showError = error || hasValidationError;
    // Generate error message for validation
    const getValidationErrorMessage = React.useCallback(() => {
        if (!hasValidationError || currentValue === null)
            return '';
        // If both min and max are defined, show range message
        if (min !== null && max !== null) {
            return `Enter a number between ${min} and ${max}.`;
        }
        // If only min is defined
        if (min !== null && currentValue < min) {
            return `Value must be at least ${min}`;
        }
        // If only max is defined
        if (max !== null && currentValue > max) {
            return `Value must be no more than ${max}`;
        }
        return '';
    }, [hasValidationError, currentValue, min, max]);
    // Determine the hint text to display
    const displayHintText = showError && hasValidationError ? getValidationErrorMessage() : hintText;
    const inputClasses = [
        'input-field',
        internalState === 'hover' || isHovered ? 'input-hover' : '',
        internalState === 'focused' || isFocused ? 'input-focused' : '',
        showError ? 'input-error' : '',
        disabled ? 'input-disabled' : '',
        showLeadingIcon ? 'input-icon-leading' : '',
        className
    ].filter(Boolean).join(' ');
    const textColorClass = (currentValue !== null && currentValue !== undefined) ? 'text-filled' : 'text-placeholder';
    const wrapperClasses = [
        'input-wrapper',
        className
    ].filter(Boolean).join(' ');
    return (jsxs("div", { className: wrapperClasses, style: { width }, children: [jsxs("div", { className: "input-with-label", children: [showLabel && (jsxs("div", { className: "label-wrapper", children: [jsx("label", { className: "label", children: label }), required && jsx("span", { className: "asterisk", children: "*" }), showHelpIcon && (jsxs("div", { className: "icon-with-tooltip", children: [jsx("span", { className: "help-icon material-symbols-outlined", onMouseEnter: handleHelpIconMouseEnter, onMouseLeave: handleHelpIconMouseLeave, onClick: handleHelpIconClick, children: "help" }), jsx(Tooltip, { text: helpIconTooltip, position: "top", visible: showHelpTooltip })] }))] })), jsx("div", { className: inputClasses, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: jsxs("div", { className: "input-content", children: [showLeadingIcon && (jsx("span", { className: "leading-icon material-symbols-outlined", children: leadingIcon })), prefix && jsx("span", { className: "prefix-text", children: prefix }), jsx("input", { ref: inputRef, type: "number", value: currentValue !== null && currentValue !== void 0 ? currentValue : '', placeholder: placeholder, disabled: disabled, className: `input-element ${textColorClass}`, onChange: handleInputChange, onFocus: handleInputFocus, onBlur: handleInputBlur, min: min !== null && min !== void 0 ? min : undefined, max: max !== null && max !== void 0 ? max : undefined, step: step }), suffix && jsx("span", { className: "suffix-text", children: suffix }), jsx(ButtonIcon, { hierarchy: "tertiary", size: "xs", iconName: "remove", disabled: disabled || (min !== null && currentValue !== null && currentValue <= min), onClick: decrement, "aria-label": "Decrease value" }), jsx(ButtonIcon, { hierarchy: "tertiary", size: "xs", iconName: "add", disabled: disabled || (max !== null && currentValue !== null && currentValue >= max), onClick: increment, "aria-label": "Increase value" })] }) })] }), showHintText && displayHintText && (jsx("div", { className: `hint-text ${showError ? 'hint-error' : ''}`, children: displayHintText }))] }));
};

const InputVerification = ({ size = 'md', digits = 4, label = 'Secure code', showLabel = true, hintText = 'This is a hint text to help user.', showHintText = true, error = false, disabled = false, required = false, showSeparator = true, placeholder, width, value = '', onChange, onComplete, className = '', }) => {
    const [values, setValues] = React.useState(Array(digits).fill(''));
    const inputRefs = React.useRef([]);
    // Initialize input refs array
    React.useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, digits);
    }, [digits]);
    // Sync with external value prop
    React.useEffect(() => {
        if (value !== undefined) {
            const newValues = value.split('').concat(Array(digits).fill('')).slice(0, digits);
            setValues(newValues);
        }
    }, [value, digits]);
    // Focus first input on mount
    React.useEffect(() => {
        if (!disabled && inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [disabled]);
    const updateValues = React.useCallback((newValues) => {
        setValues(newValues);
        const newValue = newValues.join('');
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
        // Check if all fields are filled
        if (newValues.every(val => val !== '')) {
            onComplete === null || onComplete === void 0 ? void 0 : onComplete(newValue);
        }
    }, [onChange, onComplete]);
    const handleInputChange = React.useCallback((index, inputValue) => {
        var _a;
        // Only allow single digits
        const digit = inputValue.replace(/\D/g, '').slice(-1);
        const newValues = [...values];
        newValues[index] = digit;
        updateValues(newValues);
        // Auto-advance to next input if digit entered
        if (digit && index < digits - 1) {
            (_a = inputRefs.current[index + 1]) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [values, digits, updateValues]);
    const handleKeyDown = React.useCallback((index, event) => {
        var _a, _b, _c, _d;
        if (event.key === 'Backspace') {
            const newValues = [...values];
            if (values[index]) {
                // Clear current field
                newValues[index] = '';
                updateValues(newValues);
            }
            else if (index > 0) {
                // Move to previous field and clear it
                newValues[index - 1] = '';
                updateValues(newValues);
                (_a = inputRefs.current[index - 1]) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }
        else if (event.key === 'ArrowLeft' && index > 0) {
            event.preventDefault();
            (_b = inputRefs.current[index - 1]) === null || _b === void 0 ? void 0 : _b.focus();
        }
        else if (event.key === 'ArrowRight' && index < digits - 1) {
            event.preventDefault();
            (_c = inputRefs.current[index + 1]) === null || _c === void 0 ? void 0 : _c.focus();
        }
        else if (event.key >= '0' && event.key <= '9') {
            // Replace current digit
            event.preventDefault();
            const newValues = [...values];
            newValues[index] = event.key;
            updateValues(newValues);
            // Auto-advance to next input
            if (index < digits - 1) {
                (_d = inputRefs.current[index + 1]) === null || _d === void 0 ? void 0 : _d.focus();
            }
        }
    }, [values, digits, updateValues]);
    const handlePaste = React.useCallback((event) => {
        var _a;
        event.preventDefault();
        const pastedText = event.clipboardData.getData('text');
        const pastedDigits = pastedText.replace(/\D/g, '').slice(0, digits);
        if (pastedDigits) {
            const newValues = pastedDigits.split('').concat(Array(digits).fill('')).slice(0, digits);
            updateValues(newValues);
            // Focus on the next empty input or last input
            const nextEmptyIndex = newValues.findIndex(val => val === '');
            const focusIndex = nextEmptyIndex === -1 ? digits - 1 : Math.min(nextEmptyIndex, digits - 1);
            (_a = inputRefs.current[focusIndex]) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [digits, updateValues]);
    const handleFocus = React.useCallback((index) => {
        var _a;
        // Select all text when input is focused
        (_a = inputRefs.current[index]) === null || _a === void 0 ? void 0 : _a.select();
    }, []);
    const wrapperClasses = [
        'input-verification-wrapper',
        className
    ].filter(Boolean).join(' ');
    const inputClasses = [
        'verification-input',
        `size-${size}`,
        error ? 'error' : '',
    ].filter(Boolean).join(' ');
    const separatorClasses = [
        'separator',
        `size-${size}`
    ].filter(Boolean).join(' ');
    const renderInputs = () => {
        const inputs = [];
        for (let i = 0; i < digits; i++) {
            // Add separator for 6-digit codes
            if (digits === 6 && i === 3 && showSeparator) {
                inputs.push(jsx("span", { className: separatorClasses, children: "-" }, "separator"));
            }
            inputs.push(jsx("input", { ref: el => inputRefs.current[i] = el, type: "text", inputMode: "numeric", pattern: "[0-9]", maxLength: 1, value: values[i] || '', placeholder: placeholder && i < placeholder.length ? placeholder[i] : '', disabled: disabled, className: inputClasses, onChange: (e) => handleInputChange(i, e.target.value), onKeyDown: (e) => handleKeyDown(i, e), onPaste: handlePaste, onFocus: () => handleFocus(i), "aria-label": `Digit ${i + 1} of ${digits}` }, i));
        }
        return inputs;
    };
    return (jsxs("div", { className: wrapperClasses, style: { width }, children: [showLabel && (jsxs("div", { className: "label-wrapper", children: [jsx("label", { className: "label", children: label }), required && jsx("span", { className: "asterisk", children: "*" })] })), jsx("div", { className: "input-verification-container", children: renderInputs() }), showHintText && hintText && (jsx("div", { className: `hint-text ${error ? 'error' : ''}`, children: hintText }))] }));
};

const InputAutocomplete = ({ 
// Base props
state, error = false, required = false, disabled = false, showHelpIcon = false, showLeadingIcon = true, showLabel = true, showHintText = true, label = 'Search', placeholder = 'Search...', hintText = 'This is a hint text to help user.', leadingIcon = 'search', helpIconTooltip = 'Help', value: externalValue, width, className = '', 
// Autocomplete props
options = [], maxOptions = 10, multiSelect = false, minSearchLength = 3, selectedItems: externalSelectedItems, 
// Event handlers
onChange, onSelectedItemsChange, onFocus, onBlur, onHelpClick, onOptionSelect, }) => {
    // Internal state
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [focusedOptionIndex, setFocusedOptionIndex] = React.useState(-1);
    const [internalValue, setInternalValue] = React.useState('');
    const [internalSelectedItems, setInternalSelectedItems] = React.useState([]);
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const [isTagClickOpen, setIsTagClickOpen] = React.useState(false);
    // Refs
    const containerRef = React.useRef(null);
    // Controlled/uncontrolled value management
    const isControlled = externalValue !== undefined;
    const searchTerm = isControlled ? externalValue : internalValue;
    const selectedItems = externalSelectedItems !== undefined ? externalSelectedItems : internalSelectedItems;
    // Sync external values with internal state
    React.useEffect(() => {
        if (externalValue !== undefined) {
            setInternalValue(externalValue);
        }
    }, [externalValue]);
    React.useEffect(() => {
        if (externalSelectedItems !== undefined) {
            setInternalSelectedItems(externalSelectedItems);
        }
    }, [externalSelectedItems]);
    // Filter options based on search term and mark selected items
    const filteredOptions = React.useMemo(() => {
        let baseOptions = [];
        // If dropdown is shown via tag click, show only selected items
        if (isTagClickOpen && multiSelect) {
            baseOptions = selectedItems;
        }
        // If dropdown is shown via input click (when searchTerm is empty), show all options
        else if (showDropdown && (!searchTerm || searchTerm.length === 0)) {
            baseOptions = options.slice(0, maxOptions);
        }
        else if (searchTerm && typeof searchTerm === 'string' && searchTerm.length >= minSearchLength) {
            const searchLower = searchTerm.toLowerCase();
            const filtered = options.filter(option => {
                return option.label.toLowerCase().includes(searchLower);
            });
            baseOptions = filtered.slice(0, maxOptions);
        }
        // Mark selected items for checkbox display
        return baseOptions.map(option => (Object.assign(Object.assign({}, option), { selected: multiSelect && selectedItems.some(item => item.id === option.id) })));
    }, [searchTerm, options, maxOptions, multiSelect, selectedItems, minSearchLength, showDropdown, isTagClickOpen]);
    // Show/hide dropdown based on filtered options
    React.useEffect(() => {
        if (typeof searchTerm === 'string' && searchTerm.length >= minSearchLength && filteredOptions.length > 0 && (isFocused || isHovered)) {
            setShowDropdown(true);
        }
    }, [searchTerm, minSearchLength, filteredOptions.length, isFocused, isHovered]);
    // Calculate whether to show clear button
    const shouldShowClearButton = !disabled && ((multiSelect && selectedItems.length > 0) ||
        (!multiSelect && searchTerm && searchTerm.length > 0));
    // Calculate visible tags for multi-select based on available width
    const { visibleTags, remainingCount } = React.useMemo(() => {
        if (!multiSelect || selectedItems.length === 0) {
            return { visibleTags: [], remainingCount: 0 };
        }
        // Parse width or use default
        const containerWidth = width ? parseFloat(width.toString().replace('px', '')) : 450;
        // Calculate reserved widths
        const searchIconWidth = showLeadingIcon ? 40 : 0;
        const clearButtonWidth = shouldShowClearButton ? 32 : 0;
        const inputFieldMinWidth = 60;
        const padding = 24;
        const reservedWidth = searchIconWidth + clearButtonWidth + inputFieldMinWidth + padding;
        const availableWidth = Math.max(containerWidth - reservedWidth, 80);
        // Calculate which tags can fit
        let currentWidth = 0;
        const visibleTagsList = [];
        const tagSpacing = 8;
        const counterWidth = 40;
        // Show most recent tags first (reversed array)
        const reversedItems = [...selectedItems].reverse();
        for (let i = 0; i < reversedItems.length; i++) {
            const tag = reversedItems[i];
            // Estimate tag width: character count * 8 + padding (36px base)
            const baseTagWidth = Math.min(tag.label.length * 8 + 36, 150);
            // Check if we need space for counter
            const remainingAfterThis = reversedItems.length - (i + 1);
            const needsCounter = remainingAfterThis > 0;
            // Check if this tag + potential counter fits
            const totalRequiredWidth = currentWidth + baseTagWidth + (needsCounter ? counterWidth : 0);
            if (totalRequiredWidth <= availableWidth) {
                visibleTagsList.push(tag);
                currentWidth += baseTagWidth + tagSpacing;
            }
            else {
                break; // Stop adding tags
            }
        }
        // Reverse back to show in original order
        const finalVisibleTags = visibleTagsList.reverse();
        const remainingCount = selectedItems.length - finalVisibleTags.length;
        return { visibleTags: finalVisibleTags, remainingCount };
    }, [selectedItems, multiSelect, width, showLeadingIcon, shouldShowClearButton]);
    // Update value handler
    const updateValue = React.useCallback((newValue) => {
        if (!isControlled) {
            setInternalValue(newValue);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    }, [isControlled, onChange]);
    // Update selected items handler
    const updateSelectedItems = React.useCallback((newItems) => {
        if (externalSelectedItems === undefined) {
            setInternalSelectedItems(newItems);
        }
        onSelectedItemsChange === null || onSelectedItemsChange === void 0 ? void 0 : onSelectedItemsChange(newItems);
    }, [externalSelectedItems, onSelectedItemsChange]);
    // Handle input change
    const handleInputChange = React.useCallback((newValue) => {
        updateValue(newValue);
        // Reset tag click state when user starts typing
        setIsTagClickOpen(false);
        // Auto-show dropdown when typing
        if (newValue.length >= minSearchLength) {
            // We'll show dropdown after re-render when filteredOptions are calculated
            setFocusedOptionIndex(-1);
        }
        else {
            setShowDropdown(false);
        }
    }, [updateValue, minSearchLength]);
    // Handle input focus
    const handleInputFocus = React.useCallback(() => {
        setIsFocused(true);
        onFocus === null || onFocus === void 0 ? void 0 : onFocus();
        // Show dropdown if we have filtered options
        if (typeof searchTerm === 'string' && searchTerm.length >= minSearchLength && filteredOptions.length > 0) {
            setShowDropdown(true);
        }
    }, [onFocus, searchTerm.length, minSearchLength, filteredOptions.length]);
    // Handle input blur
    const handleInputBlur = React.useCallback(() => {
        // Delay blur to allow click events on dropdown items
        setTimeout(() => {
            setIsFocused(false);
            setShowDropdown(false);
            setFocusedOptionIndex(-1);
            setIsTagClickOpen(false);
            onBlur === null || onBlur === void 0 ? void 0 : onBlur();
        }, 200);
    }, [onBlur]);
    // Handle option selection
    const handleOptionSelect = React.useCallback((option) => {
        if (option.disabled)
            return;
        onOptionSelect === null || onOptionSelect === void 0 ? void 0 : onOptionSelect(option);
        if (multiSelect) {
            const isSelected = selectedItems.some(item => item.id === option.id);
            const newItems = isSelected
                ? selectedItems.filter(item => item.id !== option.id)
                : [...selectedItems, option];
            updateSelectedItems(newItems);
            updateValue(''); // Clear search after selection
            setIsTagClickOpen(false); // Reset tag click state
            setShowDropdown(false); // Close dropdown after selection
        }
        else {
            updateValue(option.label);
            setShowDropdown(false);
        }
    }, [multiSelect, selectedItems, onOptionSelect, updateSelectedItems, updateValue]);
    // Handle tag removal
    const handleTagRemove = React.useCallback((tagToRemove) => {
        const newItems = selectedItems.filter(item => item.id !== tagToRemove.id);
        updateSelectedItems(newItems);
    }, [selectedItems, updateSelectedItems]);
    // Handle tag click - show dropdown with selected options
    const handleTagClick = React.useCallback((event) => {
        // Don't trigger if clicking on dismiss button
        if (event.target.closest('.tag-dismiss')) {
            return;
        }
        // Prevent the blur event from firing
        event.preventDefault();
        event.stopPropagation();
        if (!disabled) {
            setIsTagClickOpen(true);
            setShowDropdown(true);
            setIsFocused(true);
        }
    }, [disabled]);
    // Handle counter tag click - same as tag click
    const handleCounterTagClick = React.useCallback((event) => {
        // Prevent the blur event from firing
        event.preventDefault();
        event.stopPropagation();
        if (!disabled) {
            setIsTagClickOpen(true);
            setShowDropdown(true);
            setIsFocused(true);
        }
    }, [disabled]);
    // Handle clear all
    const handleClearAll = React.useCallback(() => {
        if (multiSelect) {
            updateSelectedItems([]);
        }
        updateValue('');
    }, [multiSelect, updateSelectedItems, updateValue]);
    // Handle keyboard navigation - we'll pass this to InputText
    const handleKeyDown = React.useCallback((event) => {
        if (!showDropdown || filteredOptions.length === 0)
            return;
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                setFocusedOptionIndex(prev => prev < filteredOptions.length - 1 ? prev + 1 : 0);
                break;
            case 'ArrowUp':
                event.preventDefault();
                setFocusedOptionIndex(prev => prev > 0 ? prev - 1 : filteredOptions.length - 1);
                break;
            case 'Enter':
                event.preventDefault();
                if (focusedOptionIndex >= 0 && focusedOptionIndex < filteredOptions.length) {
                    handleOptionSelect(filteredOptions[focusedOptionIndex]);
                }
                break;
            case 'Escape':
                event.preventDefault();
                setShowDropdown(false);
                setFocusedOptionIndex(-1);
                break;
        }
    }, [showDropdown, filteredOptions, focusedOptionIndex, handleOptionSelect]);
    // Close dropdown when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setShowDropdown(false);
                setFocusedOptionIndex(-1);
            }
        };
        if (showDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [showDropdown]);
    return (jsxs("div", { className: `input-autocomplete-wrapper ${className}`.trim(), ref: containerRef, style: { width: width || '450px' }, onKeyDown: handleKeyDown, children: [multiSelect ? (
            // Custom multi-select input with flowing tags
            jsxs("div", { className: "input-wrapper", children: [showLabel && (jsxs("div", { className: "label-wrapper", children: [jsx("label", { className: "label", children: label }), required && jsx("span", { className: "asterisk", children: "*" }), showHelpIcon && (jsx("div", { className: "icon-with-tooltip", children: jsx("span", { className: "help-icon material-symbols-outlined", onClick: onHelpClick, children: "help" }) }))] })), jsx("div", { className: `input-field autocomplete-multi-input ${error ? 'input-error' : ''} ${disabled ? 'input-disabled' : ''} ${isFocused ? 'input-focused' : ''} ${isHovered ? 'input-hover' : ''}`, onMouseEnter: () => !isFocused && setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: jsxs("div", { className: "input-content-flow", children: [showLeadingIcon && (jsx("span", { className: "leading-icon material-symbols-outlined", children: leadingIcon })), visibleTags.map(tag => (jsx("div", { onClick: handleTagClick, onMouseDown: (e) => e.preventDefault(), style: { cursor: 'pointer' }, children: jsx(Tag, { variant: "text-only", size: "sm", label: tag.label, dismissible: !disabled, disabled: disabled, maxWidth: 150, onDismiss: () => handleTagRemove(tag) }) }, tag.id))), remainingCount > 0 && (jsx("div", { onClick: handleCounterTagClick, onMouseDown: (e) => e.preventDefault(), style: { cursor: 'pointer' }, children: jsx(Tag, { variant: "text-only", size: "sm", label: `+${remainingCount}`, dismissible: false, disabled: disabled }) })), jsx("input", { type: "text", value: searchTerm || '', placeholder: visibleTags.length === 0 ? placeholder : '', disabled: disabled, className: "inline-input", onChange: (e) => handleInputChange(e.target.value), onFocus: (e) => {
                                        setIsFocused(true);
                                        setIsHovered(false);
                                        handleInputFocus();
                                    }, onBlur: (e) => {
                                        setIsFocused(false);
                                        handleInputBlur();
                                    } }), shouldShowClearButton && (jsx(ButtonIcon, { hierarchy: "tertiary", size: "xs", iconName: "close", onClick: handleClearAll, disabled: disabled, "aria-label": "Clear all" }))] }) }), showHintText && hintText && (jsx("div", { className: `hint-text ${error ? 'hint-error' : ''}`, style: { opacity: showDropdown ? 0 : 1 }, children: hintText }))] })) : (
            // Standard single-select using InputText
            jsx(InputText, { state: state, error: error, required: required, disabled: disabled, showHelpIcon: showHelpIcon, showLeadingIcon: showLeadingIcon, showLabel: showLabel, showHintText: showHintText, label: label, placeholder: placeholder, hintText: hintText, leadingIcon: leadingIcon, helpIconTooltip: helpIconTooltip, value: searchTerm, width: "100%", onChange: handleInputChange, onFocus: handleInputFocus, onBlur: handleInputBlur, onHelpClick: onHelpClick, className: "autocomplete-input" })), jsx(AutocompleteMenu, { visible: showDropdown, menuItems: filteredOptions, selectedIndex: focusedOptionIndex, multiSelect: multiSelect, searchQuery: searchTerm, onItemClick: handleOptionSelect, onItemHover: setFocusedOptionIndex })] }));
};

const Textarea = ({ type = 'default', state: controlledState, label = 'Comment', placeholder = 'Write a message...', hintText = 'This is a hint text to help user.', showLabel = true, showHintText = true, showHelpIcon = true, error = false, disabled = false, required = false, helpIconTooltip = 'Help', value: controlledValue = '', rows = 4, resize = 'none', maxLength, width, className = '', 
// Tags props
tags: controlledTags = [], allowTagCreation = true, availableTags = [], enableAutocomplete = true, 
// Events
onChange, onFocus, onBlur, onHelpClick, onTagsChange, onTagCreated, onTagRemoved, }) => {
    const [internalValue, setInternalValue] = React.useState(controlledValue);
    const [internalState, setInternalState] = React.useState('default');
    const [internalTags, setInternalTags] = React.useState(controlledTags);
    const [showHelpTooltip, setShowHelpTooltip] = React.useState(false);
    const [autocompleteVisible, setAutocompleteVisible] = React.useState(false);
    const [autocompleteItems, setAutocompleteItems] = React.useState([]);
    const [currentSearchQuery, setCurrentSearchQuery] = React.useState('');
    const [selectedAutocompleteIndex, setSelectedAutocompleteIndex] = React.useState(-1);
    const editableDivRef = React.useRef(null);
    const tooltipTimer = React.useRef(null);
    // Use controlled or internal values
    const value = controlledValue || internalValue;
    const state = controlledState || internalState;
    const tags = controlledTags.length > 0 ? controlledTags : internalTags;
    // Update internal state when controlled values change
    React.useEffect(() => {
        if (controlledValue !== undefined) {
            setInternalValue(controlledValue);
        }
    }, [controlledValue]);
    React.useEffect(() => {
        if (controlledTags.length > 0) {
            setInternalTags(controlledTags);
        }
    }, [controlledTags]);
    // Compute container classes
    const containerClasses = React.useMemo(() => {
        const classes = ['textarea-container'];
        if (error) {
            classes.push('textarea-container-error');
        }
        if (state === 'focused') {
            classes.push('textarea-container-focused');
        }
        if (disabled) {
            classes.push('textarea-container-disabled');
        }
        return classes.join(' ');
    }, [error, state, disabled]);
    // Compute textarea classes for default type
    const textareaClasses = React.useMemo(() => {
        const classes = ['textarea'];
        if (error) {
            classes.push('textarea-error');
        }
        if (state !== 'default') {
            classes.push(`textarea-${state}`);
        }
        return classes.join(' ');
    }, [error, state]);
    // Handle textarea input for default type
    const handleTextareaInput = React.useCallback((event) => {
        const newValue = event.target.value;
        if (!controlledValue) {
            setInternalValue(newValue);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    }, [controlledValue, onChange]);
    // Handle contentEditable input for tags type
    const handleContentEditableInput = React.useCallback((event) => {
        const target = event.target;
        const text = target.textContent || '';
        if (!controlledValue) {
            setInternalValue(text);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(text);
        // Show autocomplete for tags type
        if (type === 'tags') {
            displayAutocomplete(text);
        }
    }, [controlledValue, onChange, type]);
    // Handle focus
    const handleFocus = React.useCallback(() => {
        if (!controlledState) {
            setInternalState('focused');
        }
        onFocus === null || onFocus === void 0 ? void 0 : onFocus();
    }, [controlledState, onFocus]);
    // Handle blur
    const handleBlur = React.useCallback(() => {
        // Create tag from current text when blurring for tags type
        if (type === 'tags' && value.trim()) {
            createTagFromText(value.trim());
        }
        if (!controlledState) {
            setInternalState('default');
        }
        onBlur === null || onBlur === void 0 ? void 0 : onBlur();
    }, [controlledState, onBlur, type, value]);
    // Handle keydown for tags type
    const handleKeyDown = React.useCallback((event) => {
        if (type !== 'tags')
            return;
        const target = event.target;
        const text = target.textContent || '';
        // Handle autocomplete-specific keys first
        if (autocompleteVisible) {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                setSelectedAutocompleteIndex(prev => Math.min(prev + 1, autocompleteItems.length - 1));
                return;
            }
            else if (event.key === 'ArrowUp') {
                event.preventDefault();
                setSelectedAutocompleteIndex(prev => Math.max(prev - 1, 0));
                return;
            }
            else if (event.key === 'Escape') {
                hideAutocomplete();
                return;
            }
            else if ((event.key === 'Enter' || event.key === ' ') &&
                selectedAutocompleteIndex >= 0) {
                event.preventDefault();
                selectAutocompleteItem(autocompleteItems[selectedAutocompleteIndex]);
                return;
            }
        }
        // Normal key handling for tag creation
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            if (text.trim()) {
                createTagFromText(text.trim());
            }
        }
        else if (event.key === 'Backspace') {
            if (!text && tags.length > 0) {
                // Remove last tag if no text content
                const lastTag = tags[tags.length - 1];
                handleTagRemove(lastTag);
            }
        }
    }, [type, autocompleteVisible, autocompleteItems, selectedAutocompleteIndex, tags]);
    // Create tag from text
    const createTagFromText = React.useCallback((text) => {
        if (allowTagCreation && text.trim()) {
            const existingTag = tags.find(tag => tag.label.toLowerCase() === text.toLowerCase());
            if (!existingTag) {
                const newTag = {
                    id: Date.now().toString(),
                    label: text.trim(),
                };
                const newTags = [...tags, newTag];
                setInternalTags(newTags);
                onTagsChange === null || onTagsChange === void 0 ? void 0 : onTagsChange(newTags);
                onTagCreated === null || onTagCreated === void 0 ? void 0 : onTagCreated(newTag);
                clearInput();
            }
        }
    }, [allowTagCreation, tags, onTagsChange, onTagCreated]);
    // Remove tag
    const handleTagRemove = React.useCallback((tag) => {
        const newTags = tags.filter(t => t.id !== tag.id);
        setInternalTags(newTags);
        onTagsChange === null || onTagsChange === void 0 ? void 0 : onTagsChange(newTags);
        onTagRemoved === null || onTagRemoved === void 0 ? void 0 : onTagRemoved(tag);
    }, [tags, onTagsChange, onTagRemoved]);
    // Clear input
    const clearInput = React.useCallback(() => {
        if (editableDivRef.current) {
            editableDivRef.current.textContent = '';
        }
        setInternalValue('');
        setCurrentSearchQuery('');
        onChange === null || onChange === void 0 ? void 0 : onChange('');
    }, [onChange]);
    // Display autocomplete
    const displayAutocomplete = React.useCallback((query) => {
        if (!enableAutocomplete || !query.trim()) {
            hideAutocomplete();
            return;
        }
        setCurrentSearchQuery(query);
        // Filter available tags based on query and exclude already selected tags
        const selectedTagLabels = tags.map(tag => tag.label.toLowerCase());
        const filteredTags = availableTags.filter(tag => tag.label.toLowerCase().includes(query.toLowerCase()) &&
            !selectedTagLabels.includes(tag.label.toLowerCase()));
        // Convert to autocomplete items
        const items = filteredTags.map(tag => ({
            id: tag.id,
            label: tag.label,
            disabled: false,
            selected: false,
        }));
        // Add "Create new tag" option if tag doesn't exist
        const exactMatch = filteredTags.find(tag => tag.label.toLowerCase() === query.toLowerCase());
        if (!exactMatch && query.trim()) {
            items.unshift({
                id: 'create-new',
                label: `Create "${query}"`,
                disabled: false,
                selected: false,
            });
        }
        setAutocompleteItems(items);
        setAutocompleteVisible(items.length > 0);
        setSelectedAutocompleteIndex(items.length > 0 ? 0 : -1);
    }, [enableAutocomplete, tags, availableTags]);
    // Hide autocomplete
    const hideAutocomplete = React.useCallback(() => {
        setAutocompleteVisible(false);
        setAutocompleteItems([]);
        setSelectedAutocompleteIndex(-1);
    }, []);
    // Select autocomplete item
    const selectAutocompleteItem = React.useCallback((item) => {
        const searchQuery = currentSearchQuery;
        clearInput();
        if (item.id === 'create-new') {
            createTagFromText(searchQuery);
        }
        else {
            const tagData = availableTags.find(tag => tag.id === item.id);
            if (tagData) {
                const newTags = [...tags, tagData];
                setInternalTags(newTags);
                onTagsChange === null || onTagsChange === void 0 ? void 0 : onTagsChange(newTags);
                onTagCreated === null || onTagCreated === void 0 ? void 0 : onTagCreated(tagData);
            }
        }
        hideAutocomplete();
    }, [currentSearchQuery, clearInput, createTagFromText, availableTags, tags, onTagsChange, onTagCreated, hideAutocomplete]);
    // Handle autocomplete item click
    const handleAutocompleteItemClick = React.useCallback((item) => {
        selectAutocompleteItem(item);
    }, [selectAutocompleteItem]);
    // Handle autocomplete item hover
    const handleAutocompleteItemHover = React.useCallback((index) => {
        setSelectedAutocompleteIndex(index);
    }, []);
    // Handle help icon interactions
    const handleHelpIconClick = React.useCallback(() => {
        onHelpClick === null || onHelpClick === void 0 ? void 0 : onHelpClick();
    }, [onHelpClick]);
    const handleHelpIconMouseEnter = React.useCallback(() => {
        if (tooltipTimer.current) {
            clearTimeout(tooltipTimer.current);
        }
        tooltipTimer.current = setTimeout(() => {
            setShowHelpTooltip(true);
        }, 300);
    }, []);
    const handleHelpIconMouseLeave = React.useCallback(() => {
        if (tooltipTimer.current) {
            clearTimeout(tooltipTimer.current);
            tooltipTimer.current = null;
        }
        setShowHelpTooltip(false);
    }, []);
    // Cleanup tooltip timer on unmount
    React.useEffect(() => {
        return () => {
            if (tooltipTimer.current) {
                clearTimeout(tooltipTimer.current);
            }
        };
    }, []);
    const wrapperClasses = ['textarea-wrapper', className].filter(Boolean).join(' ');
    return (jsxs("div", { className: wrapperClasses, style: { width }, children: [jsxs("div", { className: "textarea-with-label", children: [showLabel && (jsxs("div", { className: "label-wrapper", children: [jsx("label", { className: "label", children: label }), required && jsx("span", { className: "asterisk", children: "*" }), showHelpIcon && (jsxs("div", { className: "icon-with-tooltip", children: [jsx("span", { className: "material-symbols-outlined", style: {
                                            fontSize: '20px',
                                            color: 'var(--color-neutral-400)',
                                            cursor: 'pointer',
                                        }, onMouseEnter: handleHelpIconMouseEnter, onMouseLeave: handleHelpIconMouseLeave, onClick: handleHelpIconClick, children: "help" }), jsx(Tooltip, { text: helpIconTooltip, position: "top", variant: "icon", visible: showHelpTooltip, style: { position: 'absolute', top: 0, left: '50%' } })] }))] })), jsxs("div", { className: containerClasses, children: [jsx("div", { className: "textarea-content", children: type === 'tags' ? (jsx("div", { className: "tags-and-text-container", children: jsxs("div", { className: "text-and-tags-flow", children: [jsx("div", { ref: editableDivRef, className: "textarea-editable", contentEditable: !disabled, "aria-label": label, "aria-describedby": showHintText ? 'hint-text' : undefined, "aria-invalid": error, "data-placeholder": placeholder, onInput: handleContentEditableInput, onFocus: handleFocus, onBlur: handleBlur, onKeyDown: handleKeyDown }), tags.length > 0 && (jsx("div", { className: "tags-flow", children: tags.map(tag => (jsx(Tag, { label: tag.label, size: "sm", dismissible: !disabled, onDismiss: () => handleTagRemove(tag) }, tag.id))) }))] }) })) : (jsx("textarea", { className: textareaClasses, value: value, placeholder: placeholder, disabled: disabled, rows: rows, maxLength: maxLength, style: { resize }, "aria-label": label, "aria-describedby": showHintText ? 'hint-text' : undefined, "aria-invalid": error, onChange: handleTextareaInput, onFocus: handleFocus, onBlur: handleBlur })) }), type === 'tags' && (jsx("div", { className: "autocomplete-wrapper", children: jsx(AutocompleteMenu, { menuItems: autocompleteItems, visible: autocompleteVisible, selectedIndex: selectedAutocompleteIndex, searchQuery: currentSearchQuery, maxHeight: 200, onItemClick: handleAutocompleteItemClick, onItemHover: handleAutocompleteItemHover }) }))] })] }), showHintText && hintText && (jsx("div", { className: `hint-text ${error ? 'hint-error' : ''}`, id: "hint-text", children: hintText }))] }));
};

const Dropdown = ({ size = 'md', state = 'default', variant = 'outlined', label = 'Options', iconName = 'more_vert', disabled = false, menuItems = [], header, avatarSrc = '', avatarAlt = 'Avatar', avatarSize = 'md', avatarName, avatarEmail, showIcons = true, forcePosition, onItemClick, }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);
    // Click outside handler
    React.useEffect(() => {
        if (!isOpen)
            return;
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);
    const toggleDropdown = () => {
        if (disabled)
            return;
        setIsOpen(!isOpen);
    };
    const handleMenuItemClick = (item) => {
        if (item.disabled)
            return;
        onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
        setIsOpen(false);
    };
    // Compute button state
    const buttonState = disabled || state === 'disabled'
        ? 'disabled'
        : (isOpen || state === 'focus')
            ? 'focus'
            : 'default';
    // Determine what to render
    const isIconOnly = variant === 'icon-only-outlined' || variant === 'icon-only-ghost';
    const showAvatar = variant === 'avatar';
    const showButton = !showAvatar;
    // Position and header - always position underneath the element
    const positionClass = `dropdown-menu-bottom-right`;
    const menuHeader = showAvatar ? {
        avatarGroup: true,
        avatarSrc,
        name: avatarName,
        email: avatarEmail,
    } : header;
    return (jsxs("div", { className: "dropdown-container", ref: dropdownRef, children: [showButton && (jsx("div", { className: isOpen ? 'dropdown-open' : '', children: jsx(Button, { hierarchy: variant === 'ghost' || variant === 'icon-only-ghost' ? 'tertiary' : 'secondary', icon: isIconOnly ? 'only' : 'trailing', size: size, label: isIconOnly ? '' : label, iconName: isIconOnly ? iconName : 'expand_more', state: buttonState, disabled: disabled, onClick: toggleDropdown }) })), showAvatar && (jsx("div", { className: `dropdown-avatar ${isOpen ? 'dropdown-avatar-focus' : ''} ${disabled ? 'dropdown-avatar-disabled' : ''}`, onClick: !disabled ? toggleDropdown : undefined, children: jsx(Avatar, { type: "image", size: avatarSize, imageSrc: avatarSrc, alt: avatarAlt }) })), jsx(DropdownMenu, { visible: isOpen, showIcons: showIcons, menuItems: menuItems, header: menuHeader, className: positionClass, onItemClick: handleMenuItemClick })] }));
};

const Toggle = ({ size = 'md', showText = false, label = '', supportingText = '', disabled = false, id, className = '', checked, defaultChecked = false, onChange, }) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    // Determine if controlled or uncontrolled
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;
    const handleToggle = React.useCallback(() => {
        if (disabled)
            return;
        const newChecked = !isChecked;
        // Always update internal state for uncontrolled components
        if (!isControlled) {
            setInternalChecked(newChecked);
        }
        // Always call onChange if provided
        onChange === null || onChange === void 0 ? void 0 : onChange(newChecked);
    }, [isChecked, isControlled, disabled, onChange]);
    const handleKeyDown = React.useCallback((event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            handleToggle();
        }
    }, [handleToggle]);
    const handleMouseEnter = React.useCallback(() => {
        setIsHovered(true);
    }, []);
    const handleMouseLeave = React.useCallback(() => {
        setIsHovered(false);
    }, []);
    const handleFocus = React.useCallback(() => {
        setIsFocused(true);
    }, []);
    const handleBlur = React.useCallback(() => {
        setIsFocused(false);
    }, []);
    const wrapperClasses = React.useMemo(() => {
        const classes = ['toggle-wrapper'];
        if (showText) {
            classes.push('toggle-with-text');
        }
        classes.push(`toggle-size-${size}`);
        if (className) {
            classes.push(className);
        }
        return classes.join(' ');
    }, [showText, size, className]);
    const switchClasses = React.useMemo(() => {
        const classes = ['toggle-switch'];
        classes.push(isChecked ? 'toggle-pressed' : 'toggle-unpressed');
        classes.push(`toggle-${size}`);
        if (disabled) {
            classes.push('toggle-disabled');
        }
        if (isFocused && !disabled) {
            classes.push('toggle-focus');
        }
        if (isHovered && !disabled) {
            classes.push('toggle-hover');
        }
        return classes.join(' ');
    }, [isChecked, size, disabled, isFocused, isHovered]);
    const buttonClasses = React.useMemo(() => {
        const classes = ['toggle-button'];
        classes.push(isChecked ? 'toggle-button-pressed' : 'toggle-button-unpressed');
        classes.push(`toggle-button-${size}`);
        if (disabled) {
            classes.push('toggle-button-disabled');
        }
        return classes.join(' ');
    }, [isChecked, size, disabled]);
    const labelClasses = React.useMemo(() => {
        const classes = ['toggle-label'];
        classes.push(`toggle-label-${size}`);
        return classes.join(' ');
    }, [size]);
    return (jsxs("div", { className: wrapperClasses, children: [jsx("div", { className: switchClasses, onClick: handleToggle, onKeyDown: handleKeyDown, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onFocus: handleFocus, onBlur: handleBlur, tabIndex: disabled ? -1 : 0, id: id, role: "switch", "aria-checked": isChecked, "aria-disabled": disabled, "aria-label": label || undefined, children: jsx("div", { className: buttonClasses }) }), showText && (label || supportingText) && (jsxs("div", { className: "toggle-text", children: [label && (jsx("label", { htmlFor: id, className: labelClasses, children: label })), supportingText && (jsx("div", { className: "toggle-supporting-text", children: supportingText }))] }))] }));
};

const Checkbox = ({ size = 'md', disabled = false, indeterminate = false, checked, defaultChecked = false, id, className = '', onChange, }) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    // Determine if controlled or uncontrolled
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;
    const checkboxClasses = React.useMemo(() => {
        const classes = ['checkbox', `checkbox-${size}`];
        if (isChecked || indeterminate) {
            classes.push('checkbox-checked');
        }
        if (disabled) {
            classes.push('checkbox-disabled');
        }
        if (isFocused && !disabled) {
            classes.push('checkbox-focused');
        }
        if (isHovered && !disabled) {
            classes.push('checkbox-hover');
        }
        if (className) {
            classes.push(className);
        }
        return classes.join(' ');
    }, [size, isChecked, indeterminate, disabled, isFocused, isHovered, className]);
    const handleClick = React.useCallback(() => {
        if (disabled)
            return;
        const newChecked = indeterminate ? false : !isChecked;
        // Always update internal state for uncontrolled components
        if (!isControlled) {
            setInternalChecked(newChecked);
        }
        // Always call onChange if provided
        onChange === null || onChange === void 0 ? void 0 : onChange(newChecked);
    }, [disabled, indeterminate, isChecked, isControlled, onChange]);
    const handleFocus = React.useCallback(() => {
        setIsFocused(true);
    }, []);
    const handleBlur = React.useCallback(() => {
        setIsFocused(false);
    }, []);
    const handleMouseEnter = React.useCallback(() => {
        setIsHovered(true);
    }, []);
    const handleMouseLeave = React.useCallback(() => {
        setIsHovered(false);
    }, []);
    const handleKeyDown = React.useCallback((event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            handleClick();
        }
    }, [handleClick]);
    return (jsxs("div", { id: id, className: checkboxClasses, onClick: handleClick, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onFocus: handleFocus, onBlur: handleBlur, onKeyDown: handleKeyDown, tabIndex: disabled ? -1 : 0, role: "checkbox", "aria-checked": indeterminate ? 'mixed' : isChecked, "aria-disabled": disabled, children: [isChecked && !indeterminate && (jsx("span", { className: "material-symbols-outlined checkbox-icon check-icon", children: "check" })), indeterminate && (jsx("span", { className: "material-symbols-outlined checkbox-icon minus-icon", children: "remove" }))] }));
};

const CheckboxLabel = ({ label = '', supportingText = '', size = 'md', disabled = false, checked, defaultChecked, indeterminate = false, onChange, className = '', id, }) => {
    const wrapperClasses = [
        'checkbox-label-wrapper',
        disabled ? 'checkbox-label-disabled' : '',
        className
    ].filter(Boolean).join(' ');
    const labelTextClasses = [
        'label-text',
        disabled ? 'label-disabled' : ''
    ].filter(Boolean).join(' ');
    const supportingTextClasses = [
        'supporting-text',
        disabled ? 'supporting-disabled' : ''
    ].filter(Boolean).join(' ');
    return (jsxs("label", { className: wrapperClasses, htmlFor: id, children: [jsx(Checkbox, { id: id, checked: checked, defaultChecked: defaultChecked, indeterminate: indeterminate, size: size, disabled: disabled, onChange: onChange }), jsxs("div", { className: "label-content", children: [jsx("span", { className: labelTextClasses, children: label }), supportingText && (jsx("p", { className: supportingTextClasses, children: supportingText }))] })] }));
};

const RadioButton = ({ size = 'md', disabled = false, value = null, name = '', selected, defaultSelected = false, id, className = '', onChange, }) => {
    const [internalSelected, setInternalSelected] = React.useState(defaultSelected);
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    // Determine if controlled or uncontrolled
    const isControlled = selected !== undefined;
    const isSelected = isControlled ? selected : internalSelected;
    const radioClasses = React.useMemo(() => {
        const classes = ['radio', `radio-${size}`];
        if (isSelected) {
            classes.push('radio-selected');
        }
        if (disabled) {
            classes.push('radio-disabled');
        }
        if (isFocused && !disabled) {
            classes.push('radio-focused');
        }
        if (isHovered && !disabled) {
            classes.push('radio-hover');
        }
        if (className) {
            classes.push(className);
        }
        return classes.join(' ');
    }, [size, isSelected, disabled, isFocused, isHovered, className]);
    const handleClick = React.useCallback(() => {
        if (disabled || isSelected)
            return; // Don't toggle if already selected
        // Always update internal state for uncontrolled components
        if (!isControlled) {
            setInternalSelected(true);
        }
        // Always call onChange if provided
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [disabled, isSelected, isControlled, value, onChange]);
    const handleFocus = React.useCallback(() => {
        setIsFocused(true);
    }, []);
    const handleBlur = React.useCallback(() => {
        setIsFocused(false);
    }, []);
    const handleMouseEnter = React.useCallback(() => {
        setIsHovered(true);
    }, []);
    const handleMouseLeave = React.useCallback(() => {
        setIsHovered(false);
    }, []);
    const handleKeyDown = React.useCallback((event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            handleClick();
        }
    }, [handleClick]);
    return (jsx("div", { id: id, className: radioClasses, onClick: handleClick, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onFocus: handleFocus, onBlur: handleBlur, onKeyDown: handleKeyDown, tabIndex: disabled ? -1 : 0, role: "radio", "aria-checked": isSelected, "aria-disabled": disabled, children: jsx("div", { className: "radio-dot" }) }));
};

const RadioButtonLabel = ({ label = '', supportingText = '', size = 'md', disabled = false, value = '', name = '', selectedValue = null, onChange, className = '', id, }) => {
    const selected = selectedValue === value;
    const wrapperClasses = [
        'radio-button-label-wrapper',
        disabled ? 'radio-button-label-disabled' : '',
        className
    ].filter(Boolean).join(' ');
    const labelTextClasses = [
        'label-text',
        disabled ? 'label-disabled' : ''
    ].filter(Boolean).join(' ');
    const supportingTextClasses = [
        'supporting-text',
        disabled ? 'supporting-disabled' : ''
    ].filter(Boolean).join(' ');
    return (jsxs("label", { className: wrapperClasses, htmlFor: id, children: [jsx(RadioButton, { id: id, selected: selected, value: value, size: size, disabled: disabled, name: name, onChange: onChange }), jsxs("div", { className: "label-content", children: [jsx("span", { className: labelTextClasses, children: label }), supportingText && (jsx("p", { className: supportingTextClasses, children: supportingText }))] })] }));
};

const BadgeDot = ({ size = 'md', color = 'error', outline = false, className, }) => {
    const dotClasses = [
        'badge-dot',
        `badge-dot-${size}`,
        `badge-dot-${color}`,
        outline ? 'badge-dot-outline' : '',
        className
    ]
        .filter(Boolean)
        .join(' ');
    return jsx("div", { className: dotClasses });
};

const ProductSwitcher = ({ isOpen = false, onClose, anchorPosition = { top: 0, left: 0 }, products = [
    {
        id: 'alice',
        name: 'Alice',
        description: 'Housekeeping & Guest Services',
        logo: './assets/logos/AL.svg',
    },
    {
        id: 'hotel-effectiveness',
        name: 'Hotel Effectiveness',
        description: 'Labor planning',
        logo: './assets/logos/HE.svg',
    },
    {
        id: 'profit-sword',
        name: 'ProfitSword',
        description: 'B.I and Finance',
        logo: './assets/logos/PS.svg',
    },
    {
        id: 'transcendent',
        name: 'Transcendent',
        description: 'Asset Management & CapEx',
        logo: './assets/logos/TR.svg',
    },
], onProductSelect, className, }) => {
    const [isClosing, setIsClosing] = React.useState(false);
    const containerRef = React.useRef(null);
    // Handle click outside to close
    React.useEffect(() => {
        const handleDocumentClick = (event) => {
            const target = event.target;
            if (!target.closest('.product-switcher-container') &&
                !target.closest('.logo-active')) {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('click', handleDocumentClick);
        }
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [isOpen, onClose]);
    // Handle closing animation
    React.useEffect(() => {
        if (!isOpen && isClosing) {
            setIsClosing(false);
        }
    }, [isOpen, isClosing]);
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }, 200); // Animation duration
    };
    const handleProductClick = (product) => {
        onProductSelect === null || onProductSelect === void 0 ? void 0 : onProductSelect(product);
        handleClose();
    };
    if (!isOpen)
        return null;
    return (jsxs(Fragment, { children: [jsx("div", { className: "product-switcher-backdrop" }), jsx("div", { ref: containerRef, className: [
                    'product-switcher-container',
                    isClosing ? 'closing' : '',
                    className
                ]
                    .filter(Boolean)
                    .join(' '), style: {
                    top: anchorPosition.top,
                    left: anchorPosition.left,
                }, children: jsx("div", { className: "product-switcher-popover", children: products.map((product) => (jsxs("div", { className: [
                            'product-item',
                            product.current ? 'current' : ''
                        ]
                            .filter(Boolean)
                            .join(' '), onClick: () => handleProductClick(product), children: [jsx("div", { className: "product-icon-container", children: jsx("img", { src: product.logo, alt: `${product.name} logo`, className: "product-icon" }) }), jsxs("div", { className: "product-info", children: [jsx("div", { className: "product-name", children: product.name }), jsx("div", { className: "product-description", children: product.description })] })] }, product.id))) }) })] }));
};

const Appbar = ({ isMenuOpen = false, onMenuToggle, selectedProperty = 'Solstice Hospitality Group', properties = [
    // Portfolio
    { id: '1', name: 'Solstice Hospitality Group', type: 'portfolio' },
    // Hawaii Region
    { id: '2', name: 'Hawaii', type: 'region' },
    { id: '3', name: 'Solstice Maui at Wailea Bay', type: 'property' },
    { id: '4', name: 'Solstice Kona Coast Retreat', type: 'property' },
    { id: '5', name: 'Solstice Hana Oceanfront', type: 'property' },
    // Sicily Region
    { id: '6', name: 'Sicily', type: 'region' },
    { id: '7', name: 'Solstice Taormina Clifftop', type: 'property' },
    { id: '8', name: 'Solstice Etna Vineyard Estate', type: 'property' },
    { id: '9', name: 'Solstice Palermo Seaside', type: 'property' },
    // Dubai Region
    { id: '10', name: 'Dubai', type: 'region' },
    { id: '11', name: 'Solstice Jumeirah Beachfront', type: 'property' },
    { id: '12', name: 'Solstice Desert Dunes Retreat', type: 'property' },
    { id: '13', name: 'Solstice Palm Island Estate', type: 'property' },
    // Thailand Region
    { id: '14', name: 'Thailand', type: 'region' },
    { id: '15', name: 'Solstice Phuket Ocean Pavilion', type: 'property' },
    { id: '16', name: 'Solstice Chiang Mai Mountain Estate', type: 'property' },
    { id: '17', name: 'Solstice Koh Samui Beachfront', type: 'property' },
    // Maldives Region
    { id: '18', name: 'Maldives', type: 'region' },
    { id: '19', name: 'Solstice North Atoll Sanctuary', type: 'property' },
    { id: '20', name: 'Solstice Coral Lagoon Retreat', type: 'property' },
    { id: '21', name: 'Solstice Azure Waters Villa', type: 'property' },
    // Brazil Region
    { id: '22', name: 'Brazil', type: 'region' },
    { id: '23', name: 'Solstice Maragogi Bay', type: 'property' },
], onPropertyChange, breadcrumbItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Dashboards', isActive: true },
], onBreadcrumbClick, notificationCount = 1, onNotificationClick, onCalendarClick, onSettingsClick, logoSrc = '/bellhopos/assets/logos/solstice.svg', logoAlt = 'Solstice', className, }) => {
    const handleMenuToggle = () => {
        onMenuToggle === null || onMenuToggle === void 0 ? void 0 : onMenuToggle();
    };
    const handleNotificationClick = () => {
        onNotificationClick === null || onNotificationClick === void 0 ? void 0 : onNotificationClick();
    };
    const handleBreadcrumbClick = (item) => {
        if (item.path && !item.isActive) {
            onBreadcrumbClick === null || onBreadcrumbClick === void 0 ? void 0 : onBreadcrumbClick(item);
        }
    };
    const handlePropertyChange = (propertyName) => {
        onPropertyChange === null || onPropertyChange === void 0 ? void 0 : onPropertyChange(propertyName);
    };
    return (jsxs("header", { className: [
            'appbar',
            className
        ]
            .filter(Boolean)
            .join(' '), children: [jsxs("div", { className: "left-section", children: [jsx(ButtonIcon, { hierarchy: "tertiary", size: "sm", iconName: isMenuOpen ? 'menu_open' : 'last_page', onClick: handleMenuToggle }), jsx("div", { className: "logo", children: jsx("img", { src: logoSrc, alt: logoAlt, className: "logo-image" }) }), jsx(PropertySwitcher, { selectedProperty: selectedProperty, properties: properties, onPropertyChange: handlePropertyChange }), jsx(Breadcrumbs, { items: breadcrumbItems, showHome: true, onItemClick: handleBreadcrumbClick })] }), jsxs("div", { className: "right-section", children: [jsxs("div", { className: "icon-button-wrapper", children: [jsx(ButtonIcon, { hierarchy: "tertiary", size: "sm", iconName: "calendar_today", onClick: onCalendarClick }), jsx(BadgeDot, { size: "sm", color: "success", outline: true, className: "icon-badge-dot" })] }), jsxs("div", { className: "icon-button-wrapper", children: [jsx(ButtonIcon, { hierarchy: "tertiary", size: "sm", iconName: "settings", onClick: onSettingsClick }), jsx(BadgeDot, { size: "sm", color: "blue", outline: true, className: "icon-badge-dot" })] }), jsxs("div", { className: "icon-button-wrapper", children: [jsx(ButtonIcon, { hierarchy: "tertiary", size: "sm", iconName: "notifications", onClick: handleNotificationClick }), notificationCount > 0 && (jsx(BadgeDot, { size: "sm", color: "error", outline: true, className: "icon-badge-dot" }))] })] })] }));
};

const LogoBox = ({ logoType = 'actabl', products = [
    {
        id: 'alice',
        name: 'Alice',
        description: 'Housekeeping & Guest Services',
        logo: './assets/logos/AL.svg',
    },
    {
        id: 'hotel-effectiveness',
        name: 'Hotel Effectiveness',
        description: 'Labor planning',
        logo: './assets/logos/HE.svg',
    },
    {
        id: 'profit-sword',
        name: 'ProfitSword',
        description: 'B.I and Finance',
        logo: './assets/logos/PS.svg',
    },
    {
        id: 'transcendent',
        name: 'Transcendent',
        description: 'Asset Management & CapEx',
        logo: './assets/logos/TR.svg',
    },
], onProductSelect, className, }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [anchorPosition, setAnchorPosition] = React.useState({ top: 0, left: 0 });
    const logoActiveRef = React.useRef(null);
    const handleLogoClick = () => {
        if (logoActiveRef.current) {
            const rect = logoActiveRef.current.getBoundingClientRect();
            setAnchorPosition({
                top: rect.bottom + 8,
                left: rect.left,
            });
            setIsOpen(!isOpen);
        }
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    const handleProductSelect = (product) => {
        onProductSelect === null || onProductSelect === void 0 ? void 0 : onProductSelect(product);
        setIsOpen(false);
    };
    const logoBoxClasses = [
        'logo-box',
        isOpen ? 'dropdown-open' : '',
        className
    ]
        .filter(Boolean)
        .join(' ');
    const logoClasses = [
        'logo',
        `logo-${logoType}`
    ]
        .filter(Boolean)
        .join(' ');
    const getLogoSrc = () => {
        switch (logoType) {
            case 'actabl':
                return './assets/logos/actabl.svg';
            case 'al':
                return './assets/logos/AL.svg';
            case 'he':
                return './assets/logos/HE.svg';
            case 'ps':
                return './assets/logos/PS.svg';
            case 'tr':
                return './assets/logos/TR.svg';
            default:
                return './assets/logos/actabl.svg';
        }
    };
    return (jsxs(Fragment, { children: [jsxs("div", { className: logoBoxClasses, children: [jsx("div", { ref: logoActiveRef, className: "logo-active", onClick: handleLogoClick, children: jsx("img", { src: getLogoSrc(), alt: `${logoType} logo`, className: logoClasses }) }), jsx("div", { className: "logo-more-products" })] }), jsx(ProductSwitcher, { isOpen: isOpen, onClose: handleClose, anchorPosition: anchorPosition, products: products, onProductSelect: handleProductSelect })] }));
};

const NavItem = ({ icon, label, isActive = false, disabled = false, onClick, className = '', }) => {
    const navItemClasses = [
        'nav-item',
        isActive ? 'active' : '',
        disabled ? 'disabled' : '',
        className,
    ].filter(Boolean).join(' ');
    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };
    const handleKeyDown = (event) => {
        if ((event.key === 'Enter' || event.key === ' ') && !disabled && onClick) {
            event.preventDefault();
            onClick();
        }
    };
    return (jsxs("div", { className: navItemClasses, children: [jsx("button", { className: "nav-item-button", "aria-label": label, type: "button", onClick: handleClick, onKeyDown: handleKeyDown, disabled: disabled, tabIndex: disabled ? -1 : 0, children: jsx("span", { className: "material-symbols-outlined icon", children: icon }) }), jsx("p", { className: "nav-item-label", children: label })] }));
};

const Sidebar = ({ logoType = 'actabl', avatarUrl, avatarInitials = 'DM', avatarName = 'Daniel Mobara', avatarEmail = 'daniel@solsticehospitality.com', menuItems = [
    { label: 'Dashboard', icon: 'dashboard', isActive: true },
    { label: 'Analytics', icon: 'analytics', isActive: false },
    { label: 'Reports', icon: 'assessment', isActive: false },
    { label: 'Calendar', icon: 'calendar_today', isActive: false },
    { label: 'Messages', icon: 'message', isActive: false },
    { label: 'Contacts', icon: 'contacts', isActive: false },
    { label: 'Files', icon: 'folder', isActive: false },
], footerItems = [
    { label: 'Help', icon: 'help_outline' },
    { label: 'Settings', icon: 'settings' },
], onMenuItemClick, onSearchClick, onAvatarMenuClick, className = '', collapsed = false, }) => {
    var _a;
    const [activeItem, setActiveItem] = React.useState(((_a = menuItems.find(item => item.isActive)) === null || _a === void 0 ? void 0 : _a.label) || '');
    const avatarMenuItems = [
        { id: '1', label: 'View profile', icon: 'person', shortcut: '⌘P' },
        { id: '2', label: 'Account settings', icon: 'settings', shortcut: '⌘,' },
        { id: '3', label: 'Notifications', icon: 'notifications', shortcut: '⌘N' },
        { id: '4', label: 'Privacy & Security', icon: 'shield', shortcut: '⌘S' },
        { id: '5', divider: true },
        { id: '6', label: 'Billing', icon: 'credit_card', shortcut: '⌘B' },
        { id: '7', label: 'Team management', icon: 'group', shortcut: '⌘T' },
        { id: '8', label: 'Integrations', icon: 'extension', shortcut: '⌘I' },
        { id: '9', divider: true },
        { id: '10', label: 'Help center', icon: 'help', shortcut: '⌘H' },
        { id: '11', label: 'Keyboard shortcuts', icon: 'keyboard', shortcut: '?' },
        { id: '12', divider: true },
        { id: '13', label: 'Sign out', icon: 'logout', shortcut: '⇧⌘Q' },
    ];
    const handleNavItemClick = (label) => {
        setActiveItem(label);
        onMenuItemClick === null || onMenuItemClick === void 0 ? void 0 : onMenuItemClick(label);
    };
    const handleAvatarMenuClick = (item) => {
        onAvatarMenuClick === null || onAvatarMenuClick === void 0 ? void 0 : onAvatarMenuClick(item);
    };
    const sidebarClasses = [
        'sidebar-container',
        collapsed ? 'sidebar-collapsed' : '',
        className,
    ].filter(Boolean).join(' ');
    return (jsx("div", { className: sidebarClasses, children: jsxs("div", { className: "navigation", children: [jsx("div", { className: "gradient-bar", children: jsx("div", { className: "detail-bar" }) }), jsxs("div", { className: "sidebar-content", children: [jsx(LogoBox, { logoType: logoType }), jsxs("div", { className: "navigation-section", children: [jsx("div", { className: "search-container", children: jsx(ButtonIcon, { hierarchy: "secondary", size: "sm", iconName: "search", onClick: onSearchClick }) }), jsx("div", { className: "nav-items", children: menuItems.map((item) => (jsx(NavItem, { icon: item.icon, label: item.label, isActive: activeItem === item.label, onClick: () => handleNavItemClick(item.label) }, item.label))) })] }), jsxs("div", { className: "sidebar-footer", children: [jsx("div", { className: "footer-navigation", children: footerItems.map((item) => (jsx(NavItem, { icon: item.icon, label: item.label, isActive: false, onClick: () => handleNavItemClick(item.label) }, item.label))) }), jsx(Dropdown, { variant: "avatar", size: "md", avatarSize: "md", avatarSrc: avatarUrl || '/assets/avatars/regionalDirector.png', avatarName: avatarName, avatarEmail: avatarEmail, menuItems: avatarMenuItems, showIcons: true, onItemClick: handleAvatarMenuClick })] })] })] }) }));
};

const PageNavigationSingleLevel$1 = ({ label, icon = 'radio_button_unchecked', isActive = false, onItemClick, className = '', }) => {
    const itemClasses = [
        'page-navigation-single-level',
        'page-navigation-animate-smooth',
        isActive ? 'active' : '',
        className,
    ].filter(Boolean).join(' ');
    const handleClick = () => {
        onItemClick();
    };
    return (jsx("div", { className: itemClasses, onClick: handleClick, children: jsxs("div", { className: "page-navigation-item-content", children: [jsx("span", { className: "page-navigation-item-icon material-symbols-outlined", children: icon }), jsx("span", { className: "page-navigation-item-label", children: label })] }) }));
};

const PageNavigationChild$1 = ({ label, badge, showBadge = true, isActive = false, onItemClick, className = '', }) => {
    const itemClasses = [
        'page-navigation-child',
        isActive ? 'active' : '',
        className,
    ].filter(Boolean).join(' ');
    const handleClick = () => {
        onItemClick();
    };
    return (jsx("div", { className: itemClasses, onClick: handleClick, children: jsxs("div", { className: "page-navigation-child-content", children: [jsx("span", { className: "page-navigation-child-label", children: label }), badge && showBadge && (jsx(Badge, { label: String(badge), size: "sm", variant: "gray", emphasis: "medium" }))] }) }));
};

const PageNavigationMultiLevel = ({ label, icon = 'radio_button_unchecked', children, isExpanded = false, onItemClick, className = '', }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [animationClass, setAnimationClass] = React.useState('');
    const hasActiveChild = React.useMemo(() => {
        return children.some(child => child.isActive);
    }, [children]);
    // Handle expand/collapse animations
    React.useEffect(() => {
        if (isExpanded) {
            // Expanding
            setIsAnimating(true);
            setAnimationClass('animate-slide-down-enter');
        }
        else if (!isExpanded && isAnimating) {
            // Collapsing
            setAnimationClass('animate-slide-down-exit');
            const timer = setTimeout(() => {
                setIsAnimating(false);
                setAnimationClass('');
            }, 150); // Match animation duration
            return () => clearTimeout(timer);
        }
    }, [isExpanded, isAnimating]);
    const itemClasses = [
        'page-navigation-multi-level',
        'page-navigation-animate-smooth',
        hasActiveChild ? 'has-active-child' : '',
        isExpanded ? 'expanded' : '',
        className,
    ].filter(Boolean).join(' ');
    const handleParentClick = () => {
        onItemClick();
    };
    const handleChildClick = (childIndex) => {
        onItemClick(childIndex);
    };
    return (jsxs("div", { className: itemClasses, children: [jsx("div", { className: "page-navigation-multi-level-parent", onClick: handleParentClick, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: jsxs("div", { className: "page-navigation-item-content", children: [!isHovered && (jsx("span", { className: "page-navigation-item-icon material-symbols-outlined", children: icon })), isHovered && (jsx("span", { className: `page-navigation-chevron-icon material-symbols-outlined ${isExpanded ? 'expanded' : ''}`, children: "expand_more" })), jsx("span", { className: "page-navigation-item-label", children: label }), jsx(Button, { hierarchy: "tertiary", icon: "only", size: "xs", iconName: "add", onClick: (e) => {
                                e.stopPropagation();
                                // Handle add action here
                            } })] }) }), (isExpanded || isAnimating) && (jsx("div", { className: `page-navigation-children ${animationClass}`, children: children.map((child, index) => (jsx(PageNavigationChild$1, { label: child.label, badge: child.badge, showBadge: child.showBadge, isActive: child.isActive, onItemClick: () => handleChildClick(index) }, index))) }))] }));
};

const PageNavigation = ({ title = 'Navigation', navigationItems: initialItems, onItemClick, className = '', }) => {
    const [navigationItems, setNavigationItems] = React.useState(initialItems);
    const clearAllSelections = () => {
        setNavigationItems(items => items.map(item => {
            var _a;
            return (Object.assign(Object.assign({}, item), { isActive: false, children: (_a = item.children) === null || _a === void 0 ? void 0 : _a.map(child => (Object.assign(Object.assign({}, child), { isActive: false }))) }));
        }));
    };
    const onSingleLevelClick = (itemId) => {
        clearAllSelections();
        setNavigationItems(items => items.map(item => item.id === itemId
            ? Object.assign(Object.assign({}, item), { isActive: true }) : item));
        onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(itemId);
    };
    const onMultiLevelClick = (itemId, childIndex) => {
        if (childIndex !== undefined) {
            // Child item clicked - activate it and clear others
            clearAllSelections();
            setNavigationItems(items => items.map(item => item.id === itemId && item.children
                ? Object.assign(Object.assign({}, item), { children: item.children.map((child, index) => (Object.assign(Object.assign({}, child), { isActive: index === childIndex }))) }) : item));
            onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(itemId, childIndex);
        }
        else {
            // Parent item clicked - toggle expansion
            setNavigationItems(items => items.map(item => item.id === itemId
                ? Object.assign(Object.assign({}, item), { isExpanded: !item.isExpanded }) : item));
        }
    };
    const pageNavigationClasses = [
        'page-navigation',
        className,
    ].filter(Boolean).join(' ');
    return (jsxs("div", { className: pageNavigationClasses, children: [jsx("div", { className: "page-navigation-header", children: jsx("h2", { className: "page-navigation-title", children: title }) }), jsx("nav", { className: "page-navigation-list", children: navigationItems.map(item => (item.type === 'single' ? (jsx(PageNavigationSingleLevel$1, { label: item.label, icon: item.icon, badge: item.badge, isActive: item.isActive || false, onItemClick: () => onSingleLevelClick(item.id) }, item.id)) : (jsx(PageNavigationMultiLevel, { label: item.label, icon: item.icon, badge: item.badge, children: item.children || [], isExpanded: item.isExpanded || false, onItemClick: (childIndex) => onMultiLevelClick(item.id, childIndex) }, item.id)))) })] }));
};

const PageNavigationSingleLevel = ({ label, icon = 'radio_button_unchecked', badge, isActive = false, onItemClick, className = '', }) => {
    const itemClasses = [
        'page-navigation-single-level',
        isActive ? 'active' : '',
        className,
    ].filter(Boolean).join(' ');
    const handleClick = () => {
        onItemClick();
    };
    return (jsx("div", { className: itemClasses, onClick: handleClick, children: jsxs("div", { className: "page-navigation-item-content", children: [jsx("span", { className: "page-navigation-item-icon material-symbols-outlined", children: icon }), jsx("span", { className: "page-navigation-item-label", children: label }), badge && (jsx("span", { className: "page-navigation-item-badge", children: badge }))] }) }));
};

const PageNavigationChild = ({ label, badge, isActive = false, onItemClick, className = '', }) => {
    const itemClasses = [
        'page-navigation-child',
        isActive ? 'active' : '',
        className,
    ].filter(Boolean).join(' ');
    const handleClick = () => {
        onItemClick();
    };
    return (jsx("div", { className: itemClasses, onClick: handleClick, children: jsxs("div", { className: "page-navigation-child-content", children: [jsx("span", { className: "page-navigation-child-label", children: label }), badge && (jsx("span", { className: "page-navigation-child-badge", children: badge }))] }) }));
};

const ChartTooltip = ({ visible = false, x = 0, y = 0, header = '', items = [], total = '', showTotal = false, storybookMode = false, }) => {
    return (jsx("div", { className: `chart-tooltip ${visible ? 'visible' : ''} ${storybookMode ? 'storybook-mode' : ''}`, style: {
            left: `${x}px`,
            top: `${y}px`,
        }, children: jsxs("div", { className: "tooltip-content", children: [jsx("div", { className: "tooltip-items", children: items.map((item, index) => (jsxs("div", { className: "tooltip-item", children: [item.color && (jsx("span", { className: "tooltip-dot", style: { backgroundColor: item.color } })), item.label && (jsxs("span", { className: "tooltip-label", children: [item.label, ":"] })), jsx("span", { className: "tooltip-value", children: item.value })] }, index))) }), showTotal && total && (jsxs("div", { className: "tooltip-total", children: [jsx("span", { className: "total-label", children: "Total:" }), jsx("span", { className: "total-value", children: total })] }))] }) }));
};

const defaultData = {
    series: [
        {
            name: 'Series 1',
            values: [30, 45, 20, 35, 50, 40, 60, 35, 25, 55, 40],
            color: '#94a3b8',
        },
        {
            name: 'Series 2',
            values: [20, 25, 40, 30, 35, 45, 25, 30, 40, 20, 50],
            color: '#2563eb',
        },
        {
            name: 'Series 3',
            values: [25, 15, 35, 20, 15, 20, 30, 25, 30, 35, 25],
            color: '#7c3aed',
        },
    ],
};
const BarChart = ({ data = defaultData, type = 'stacked', orientation = 'vertical', animated = true, maxHeight = 150, maxWidth = 200, }) => {
    const [tooltipVisible, setTooltipVisible] = React.useState(false);
    const [tooltipX, setTooltipX] = React.useState(0);
    const [tooltipY, setTooltipY] = React.useState(0);
    const [tooltipHeader, setTooltipHeader] = React.useState('');
    const [tooltipItems, setTooltipItems] = React.useState([]);
    const [tooltipTotal, setTooltipTotal] = React.useState('');
    const [showTooltipTotal, setShowTooltipTotal] = React.useState(false);
    const processedData = React.useMemo(() => {
        var _a, _b, _c;
        if (!((_a = data.series) === null || _a === void 0 ? void 0 : _a.length) || !data.series[0].values.length) {
            return [];
        }
        const bars = [];
        if (type === 'simple') {
            const values = data.series[0].values;
            const maxValue = Math.max(...values);
            const colors = [
                'var(--color-brand-600)',
                'var(--color-orange-500)',
                'var(--color-success-500)',
                'var(--color-purple-600)',
                'var(--color-accent-500)',
                'var(--color-teal-500)',
                'var(--color-lime-500)',
                'var(--color-amber-500)',
            ];
            for (let i = 0; i < values.length; i++) {
                const value = values[i] || 0;
                const segments = [];
                if (value > 0) {
                    const height = (value / maxValue) * maxHeight;
                    const width = (value / maxValue) * maxWidth;
                    segments.push({
                        value,
                        height,
                        width,
                        color: colors[i % colors.length],
                        seriesName: `Bar ${i + 1}`,
                    });
                }
                bars.push({
                    segments,
                    totalValue: value,
                    category: (_b = data.categories) === null || _b === void 0 ? void 0 : _b[i],
                });
            }
        }
        else {
            const numBars = data.series[0].values.length;
            const maxTotal = Math.max(...Array.from({ length: numBars }, (_, i) => data.series.reduce((sum, series) => sum + (series.values[i] || 0), 0)));
            for (let barIndex = 0; barIndex < numBars; barIndex++) {
                const segments = [];
                let totalValue = 0;
                for (const series of data.series) {
                    const value = series.values[barIndex] || 0;
                    totalValue += value;
                    if (value > 0) {
                        const height = (value / maxTotal) * maxHeight;
                        const width = (value / maxTotal) * maxWidth;
                        segments.push({
                            value,
                            height,
                            width,
                            color: series.color || '#64748b',
                            seriesName: series.name,
                        });
                    }
                }
                bars.push({
                    segments,
                    totalValue,
                    category: (_c = data.categories) === null || _c === void 0 ? void 0 : _c[barIndex],
                });
            }
        }
        return bars;
    }, [data, type, maxHeight, maxWidth]);
    const containerClasses = React.useMemo(() => {
        const classes = ['bar-chart', type, orientation];
        if (animated) {
            classes.push('bar-chart-animated');
        }
        return classes.join(' ');
    }, [type, orientation, animated]);
    const handleColumnHover = React.useCallback((event, bar, columnIndex) => {
        setTooltipVisible(true);
        setTooltipX(event.clientX);
        setTooltipY(event.clientY);
        setTooltipHeader(bar.category || `Column ${columnIndex + 1}`);
        const items = [];
        bar.segments.forEach((segment) => {
            if (segment.seriesName && segment.value > 0) {
                items.push({
                    color: segment.color,
                    label: segment.seriesName,
                    value: segment.value.toString(),
                });
            }
        });
        setTooltipItems(items);
        setTooltipTotal(bar.totalValue.toString());
        setShowTooltipTotal(items.length > 1);
    }, []);
    const handleColumnMove = React.useCallback((event) => {
        if (tooltipVisible) {
            setTooltipX(event.clientX);
            setTooltipY(event.clientY);
        }
    }, [tooltipVisible]);
    const handleColumnLeave = React.useCallback(() => {
        setTooltipVisible(false);
    }, []);
    if (orientation === 'vertical') {
        return (jsxs(Fragment, { children: [jsx("div", { className: `vertical-container ${containerClasses}`, children: processedData.map((bar, i) => (jsx("div", { className: "bar-column vertical", onMouseEnter: (e) => handleColumnHover(e, bar, i), onMouseMove: handleColumnMove, onMouseLeave: handleColumnLeave, children: bar.segments.map((segment, segIndex) => (jsx("div", { className: "bar-segment vertical", style: {
                                height: `${segment.height}px`,
                                backgroundColor: segment.color,
                            } }, segIndex))) }, i))) }), jsx(ChartTooltip, { visible: tooltipVisible, x: tooltipX, y: tooltipY, header: tooltipHeader, items: tooltipItems, total: tooltipTotal, showTotal: showTooltipTotal })] }));
    }
    return (jsxs(Fragment, { children: [jsx("div", { className: `horizontal-container ${containerClasses}`, children: processedData.map((bar, i) => (jsx("div", { className: "bar-row horizontal", onMouseEnter: (e) => handleColumnHover(e, bar, i), onMouseMove: handleColumnMove, onMouseLeave: handleColumnLeave, children: bar.segments.map((segment, segIndex) => (jsx("div", { className: "bar-segment horizontal", style: {
                            width: `${(segment.value / bar.totalValue) * 100}%`,
                            backgroundColor: segment.color,
                        } }, segIndex))) }, i))) }), jsx(ChartTooltip, { visible: tooltipVisible, x: tooltipX, y: tooltipY, header: tooltipHeader, items: tooltipItems, total: tooltipTotal, showTotal: showTooltipTotal })] }));
};

const defaultDropdownMenuItems$2 = [
    { id: 'view-report', label: 'View full report', icon: 'assessment' },
    { id: 'export-csv', label: 'Export as CSV', icon: 'download' },
    { id: 'export-pdf', label: 'Export as PDF', icon: 'picture_as_pdf' },
    { id: 'divider', label: '', divider: true },
    { id: 'configure', label: 'Configure chart', icon: 'settings' },
    { id: 'share', label: 'Share chart', icon: 'share' },
];
const BarChartCard = ({ breakpoint = 'desktop', data, chartType = 'stacked', orientation = 'vertical', animated = true, showDropdown = true, dropdownVariant = 'icon-only-ghost', showFooter = false, footerButtonLabel = 'View report', showXAxis = false, showYAxis = false, showTargetLine = false, targetLineColor = 'neutral', onDropdownSelect, onFooterButtonClick, }) => {
    const containerClasses = React.useMemo(() => {
        const classes = ['bar-chart-card', `bar-chart-card-${breakpoint}`];
        if (showFooter) {
            classes.push('has-footer');
        }
        return classes.join(' ');
    }, [breakpoint, showFooter]);
    const effectiveXAxis = React.useMemo(() => (Object.assign(Object.assign({}, (data.xAxis || { show: false })), { show: showXAxis })), [data.xAxis, showXAxis]);
    const effectiveYAxis = React.useMemo(() => (Object.assign(Object.assign({}, (data.yAxis || { show: false })), { show: showYAxis })), [data.yAxis, showYAxis]);
    const xAxisTicks = React.useMemo(() => {
        if (!effectiveXAxis.show || !data.chartData.categories)
            return [];
        return data.chartData.categories;
    }, [effectiveXAxis.show, data.chartData.categories]);
    const getMaxValue = () => {
        if (!data.chartData.series.length)
            return 0;
        if (chartType === 'stacked') {
            const numBars = data.chartData.series[0].values.length;
            let maxTotal = 0;
            for (let i = 0; i < numBars; i++) {
                const total = data.chartData.series.reduce((sum, series) => sum + (series.values[i] || 0), 0);
                maxTotal = Math.max(maxTotal, total);
            }
            return maxTotal;
        }
        else {
            return Math.max(...data.chartData.series[0].values);
        }
    };
    const yAxisTicks = React.useMemo(() => {
        if (!effectiveYAxis.show)
            return [];
        const maxValue = getMaxValue();
        const tickCount = effectiveYAxis.tickCount || 5;
        const ticks = [];
        for (let i = 0; i <= tickCount; i++) {
            ticks.push(Math.round((maxValue / tickCount) * i));
        }
        return ticks;
    }, [effectiveYAxis.show, effectiveYAxis.tickCount, data.chartData, chartType]);
    const formatYAxisTick = (value) => {
        if (value >= 1000) {
            return (value / 1000).toLocaleString() + ',000';
        }
        return value.toLocaleString();
    };
    const targetLinePosition = React.useMemo(() => {
        if (!showTargetLine || !data.targetLine)
            return null;
        const maxValue = getMaxValue();
        if (maxValue === 0)
            return null;
        const percentage = (data.targetLine.value / maxValue) * 100;
        return Math.min(100, Math.max(0, percentage));
    }, [showTargetLine, data.targetLine, data.chartData, chartType]);
    const targetLineColorVar = React.useMemo(() => {
        const colorMap = {
            neutral: 'var(--color-neutral-900)',
            brand: 'var(--color-brand-600)',
            success: 'var(--color-success-600)',
        };
        return colorMap[targetLineColor];
    }, [targetLineColor]);
    const handleDropdownSelect = (item) => {
        onDropdownSelect === null || onDropdownSelect === void 0 ? void 0 : onDropdownSelect(item);
    };
    const handleFooterButtonClick = () => {
        onFooterButtonClick === null || onFooterButtonClick === void 0 ? void 0 : onFooterButtonClick();
    };
    const showAxes = effectiveYAxis.show || effectiveXAxis.show;
    return (jsxs("div", { className: "bar-chart-card-wrapper", children: [jsxs("div", { className: containerClasses, children: [showDropdown && (jsx("div", { className: "bar-chart-card-dropdown", children: jsx(Dropdown, { variant: dropdownVariant, size: "md", iconName: "more_vert", menuItems: defaultDropdownMenuItems$2, onItemClick: handleDropdownSelect, forcePosition: "bottom-right" }) })), jsxs("div", { className: "bar-chart-card-header", children: [jsx("h3", { className: "bar-chart-card-heading", children: data.title }), jsx("p", { className: "bar-chart-card-subtitle", children: data.subtitle }), jsxs("div", { className: "bar-chart-card-row", children: [jsx("div", { className: "bar-chart-card-number", children: data.value }), data.badge && (jsx("div", { className: "bar-chart-card-badge", children: data.badge }))] })] }), jsxs("div", { className: "bar-chart-card-content", children: [data.legend && data.legend.length > 0 && (jsx("div", { className: "bar-chart-card-legend", children: data.legend.map((item, index) => (jsxs("div", { className: "legend-item", children: [jsx("div", { className: "legend-color", style: { backgroundColor: item.color } }), jsx("span", { className: "legend-text", children: item.name })] }, index))) })), showAxes ? (jsxs("div", { className: "bar-chart-card-chart-container", children: [effectiveYAxis.show && orientation === 'vertical' && (jsx("div", { className: "y-axis-container", children: jsx("div", { className: "y-axis-labels", children: yAxisTicks.slice().reverse().map((tick, index) => (jsx("div", { className: "y-axis-tick-label", children: formatYAxisTick(tick) }, index))) }) })), jsxs("div", { className: "chart-grid-container", children: [effectiveYAxis.showGridLines && orientation === 'vertical' && (jsx("div", { className: "grid-lines", children: yAxisTicks.slice().reverse().map((_, index) => (jsx("div", { className: "grid-line" }, index))) })), jsxs("div", { className: "chart-content", children: [data.targetLine &&
                                                        targetLinePosition !== null &&
                                                        orientation === 'vertical' && (jsx("div", { className: "target-line", style: {
                                                            bottom: `${targetLinePosition}%`,
                                                            borderColor: targetLineColorVar,
                                                        } })), jsx(BarChart, { data: data.chartData, type: chartType, orientation: orientation, animated: animated })] }), effectiveXAxis.show && (jsx("div", { className: "x-axis-container", children: jsx("div", { className: "x-axis-labels", children: xAxisTicks.map((tick, index) => (jsx("div", { className: "x-axis-tick-label", children: tick }, index))) }) }))] })] })) : (
                            /* Simple Chart without Axes */
                            jsx("div", { className: "simple-chart-container", children: jsx(BarChart, { data: data.chartData, type: chartType, orientation: orientation, animated: animated }) }))] })] }), showFooter && (jsx(ContainerFooter, { size: "standard", buttonLabel: footerButtonLabel, onButtonClick: handleFooterButtonClick }))] }));
};

const DEFAULT_COLORS = [
    '#2642CF', // Series 1 - Blue
    '#8E4B9B', // Series 2 - Purple
    '#BB81BA', // Series 3 - Light Purple
    '#E14C94', // Series 4 - Pink
    '#E47789', // Series 5 - Coral
    '#E9AAAE', // Series 6 - Light Coral
    '#BACEFC', // Series 7 - Light Blue
];
const DEFAULT_DATA = {
    series: [
        { name: 'Series 1', value: 30, color: '#2642CF' },
        { name: 'Series 2', value: 25, color: '#8E4B9B' },
        { name: 'Series 3', value: 20, color: '#BB81BA' },
        { name: 'Series 4', value: 15, color: '#E14C94' },
        { name: 'Series 5', value: 10, color: '#E47789' },
    ],
};
const PieChart = ({ data = DEFAULT_DATA, hole = 'none', size = 160, animated = true, gap = 0, }) => {
    const [tooltip, setTooltip] = React.useState({
        visible: false,
        x: 0,
        y: 0,
        items: [],
    });
    const innerRadius = React.useMemo(() => {
        switch (hole) {
            case '25%':
                return 20;
            case '50%':
                return 40;
            case '75%':
                return 60;
            case '85%':
                return 68;
            default:
                return 0;
        }
    }, [hole]);
    const createArcPath = (centerX, centerY, outerRadius, innerRadius, startAngle, endAngle, hasGap = false) => {
        const startAngleRad = (startAngle * Math.PI) / 180;
        const endAngleRad = (endAngle * Math.PI) / 180;
        const outerStartX = centerX + outerRadius * Math.cos(startAngleRad);
        const outerStartY = centerY + outerRadius * Math.sin(startAngleRad);
        const outerEndX = centerX + outerRadius * Math.cos(endAngleRad);
        const outerEndY = centerY + outerRadius * Math.sin(endAngleRad);
        const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
        if (innerRadius === 0) {
            // Regular pie chart
            return [
                'M',
                centerX,
                centerY,
                'L',
                outerStartX,
                outerStartY,
                'A',
                outerRadius,
                outerRadius,
                0,
                largeArcFlag,
                1,
                outerEndX,
                outerEndY,
                'Z',
            ].join(' ');
        }
        else {
            // Donut chart with optional rounded corners
            const innerStartX = centerX + innerRadius * Math.cos(startAngleRad);
            const innerStartY = centerY + innerRadius * Math.sin(startAngleRad);
            const innerEndX = centerX + innerRadius * Math.cos(endAngleRad);
            const innerEndY = centerY + innerRadius * Math.sin(endAngleRad);
            if (hasGap) {
                // With rounded corners using small arc commands at corners
                const cornerRadius = 4; // Increased from 2 to 4 for more visible rounding
                // Calculate offset for corner arcs
                const angleOffsetOuter = cornerRadius / outerRadius;
                const angleOffsetInner = cornerRadius / innerRadius;
                // Adjusted angles for corner arcs
                const outerStartAngleAdj = startAngleRad + angleOffsetOuter;
                const outerEndAngleAdj = endAngleRad - angleOffsetOuter;
                const innerStartAngleAdj = startAngleRad + angleOffsetInner;
                const innerEndAngleAdj = endAngleRad - angleOffsetInner;
                // Adjusted points
                const outerStartXAdj = centerX + outerRadius * Math.cos(outerStartAngleAdj);
                const outerStartYAdj = centerY + outerRadius * Math.sin(outerStartAngleAdj);
                const outerEndXAdj = centerX + outerRadius * Math.cos(outerEndAngleAdj);
                const outerEndYAdj = centerY + outerRadius * Math.sin(outerEndAngleAdj);
                const innerStartXAdj = centerX + innerRadius * Math.cos(innerStartAngleAdj);
                const innerStartYAdj = centerY + innerRadius * Math.sin(innerStartAngleAdj);
                const innerEndXAdj = centerX + innerRadius * Math.cos(innerEndAngleAdj);
                const innerEndYAdj = centerY + innerRadius * Math.sin(innerEndAngleAdj);
                // Points for straight edges (perpendicular to arc)
                const startEdgeOuterX = centerX + (outerRadius - cornerRadius) * Math.cos(startAngleRad);
                const startEdgeOuterY = centerY + (outerRadius - cornerRadius) * Math.sin(startAngleRad);
                const startEdgeInnerX = centerX + (innerRadius + cornerRadius) * Math.cos(startAngleRad);
                const startEdgeInnerY = centerY + (innerRadius + cornerRadius) * Math.sin(startAngleRad);
                const endEdgeOuterX = centerX + (outerRadius - cornerRadius) * Math.cos(endAngleRad);
                const endEdgeOuterY = centerY + (outerRadius - cornerRadius) * Math.sin(endAngleRad);
                const endEdgeInnerX = centerX + (innerRadius + cornerRadius) * Math.cos(endAngleRad);
                const endEdgeInnerY = centerY + (innerRadius + cornerRadius) * Math.sin(endAngleRad);
                return [
                    // Start at adjusted outer arc start
                    'M', outerStartXAdj, outerStartYAdj,
                    // Main outer arc
                    'A', outerRadius, outerRadius, 0, largeArcFlag, 1, outerEndXAdj, outerEndYAdj,
                    // Corner arc from outer to edge
                    'A', cornerRadius, cornerRadius, 0, 0, 1, endEdgeOuterX, endEdgeOuterY,
                    // Straight line across
                    'L', endEdgeInnerX, endEdgeInnerY,
                    // Corner arc from edge to inner
                    'A', cornerRadius, cornerRadius, 0, 0, 1, innerEndXAdj, innerEndYAdj,
                    // Inner arc (reverse)
                    'A', innerRadius, innerRadius, 0, largeArcFlag, 0, innerStartXAdj, innerStartYAdj,
                    // Corner arc from inner to edge
                    'A', cornerRadius, cornerRadius, 0, 0, 1, startEdgeInnerX, startEdgeInnerY,
                    // Straight line across
                    'L', startEdgeOuterX, startEdgeOuterY,
                    // Corner arc from edge to outer
                    'A', cornerRadius, cornerRadius, 0, 0, 1, outerStartXAdj, outerStartYAdj,
                    'Z',
                ].join(' ');
            }
            else {
                // Without rounded corners
                return [
                    'M',
                    outerStartX,
                    outerStartY,
                    'A',
                    outerRadius,
                    outerRadius,
                    0,
                    largeArcFlag,
                    1,
                    outerEndX,
                    outerEndY,
                    'L',
                    innerEndX,
                    innerEndY,
                    'A',
                    innerRadius,
                    innerRadius,
                    0,
                    largeArcFlag,
                    0,
                    innerStartX,
                    innerStartY,
                    'Z',
                ].join(' ');
            }
        }
    };
    const segments = React.useMemo(() => {
        var _a;
        if (!((_a = data.series) === null || _a === void 0 ? void 0 : _a.length)) {
            return [];
        }
        const total = data.series.reduce((sum, item) => sum + item.value, 0);
        if (total === 0) {
            return [];
        }
        const calculatedSegments = [];
        let currentAngle = -90; // Start from top (-90 degrees)
        const radius = 80;
        const centerX = 80;
        const centerY = 80;
        // Calculate total available angle space (360 degrees minus total gap space)
        const totalGaps = data.series.length * gap;
        const availableAngle = 360 - totalGaps;
        data.series.forEach((item, index) => {
            const percentage = (item.value / total) * 100;
            const angleSize = (item.value / total) * availableAngle;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angleSize;
            // Generate SVG path
            const path = createArcPath(centerX, centerY, radius, innerRadius, startAngle, endAngle, gap > 0);
            calculatedSegments.push({
                value: item.value,
                percentage,
                startAngle,
                endAngle,
                color: item.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length],
                name: item.name,
                path,
            });
            // Move to next segment with gap
            currentAngle = endAngle + gap;
        });
        return calculatedSegments;
    }, [data, innerRadius, gap]);
    const handleSegmentHover = (event, segment) => {
        setTooltip({
            visible: true,
            x: event.clientX,
            y: event.clientY,
            items: [
                {
                    label: segment.name,
                    value: `${segment.percentage.toFixed(0)}%`,
                    color: segment.color,
                },
            ],
        });
    };
    const handleSegmentLeave = () => {
        setTooltip(prev => (Object.assign(Object.assign({}, prev), { visible: false })));
    };
    return (jsxs(Fragment, { children: [jsx("div", { className: "pie-chart-container", style: { width: size, height: size }, children: jsxs("svg", { width: size, height: size, viewBox: "0 0 160 160", className: "pie-chart-svg", children: [jsx("circle", { cx: "80", cy: "80", r: "80", fill: "transparent", className: "pie-background" }), segments.map((segment, index) => (jsx("g", { className: "pie-segment-group", children: jsx("path", { d: segment.path, fill: segment.color, className: `pie-segment ${animated ? 'animated' : ''}`, style: {
                                    animationDelay: animated ? `${index * 0.03}s` : '0s',
                                }, onMouseEnter: (e) => handleSegmentHover(e, segment), onMouseLeave: handleSegmentLeave }) }, index))), hole !== 'none' && (jsx("circle", { cx: "80", cy: "80", r: innerRadius, fill: "white", className: "pie-inner-hole" }))] }) }), jsx(ChartTooltip, { visible: tooltip.visible, x: tooltip.x, y: tooltip.y, items: tooltip.items })] }));
};

const defaultDropdownMenuItems$1 = [
    { id: 'view-report', label: 'View full report', icon: 'assessment' },
    { id: 'export-csv', label: 'Export as CSV', icon: 'download' },
    { id: 'export-pdf', label: 'Export as PDF', icon: 'picture_as_pdf' },
    { id: 'divider', label: '', divider: true },
    { id: 'configure', label: 'Configure chart', icon: 'settings' },
    { id: 'share', label: 'Share chart', icon: 'share' },
];
const PieChartCard = ({ breakpoint = 'desktop', data, hole = '85%', size = 160, animated = true, gap = 5, showDropdown = true, dropdownVariant = 'icon-only-ghost', showFooter = false, footerButtonLabel = 'View report', showLegend = true, onDropdownSelect, onFooterButtonClick, }) => {
    const containerClasses = React.useMemo(() => {
        const classes = ['pie-chart-card', `pie-chart-card-${breakpoint}`];
        if (showFooter) {
            classes.push('has-footer');
        }
        return classes.join(' ');
    }, [breakpoint, showFooter]);
    const legendItems = React.useMemo(() => {
        if (data.legend && data.legend.length > 0) {
            return data.legend;
        }
        // Generate legend from chart data
        const total = data.chartData.series.reduce((sum, item) => sum + item.value, 0);
        return data.chartData.series.map((item) => ({
            name: item.name,
            color: item.color || '#000',
            percentage: total > 0 ? `${Math.round((item.value / total) * 100)}%` : '0%',
        }));
    }, [data]);
    const handleDropdownSelect = (item) => {
        onDropdownSelect === null || onDropdownSelect === void 0 ? void 0 : onDropdownSelect(item);
    };
    const handleFooterButtonClick = () => {
        onFooterButtonClick === null || onFooterButtonClick === void 0 ? void 0 : onFooterButtonClick();
    };
    return (jsxs("div", { className: "pie-chart-card-wrapper", children: [jsxs("div", { className: containerClasses, children: [showDropdown && (jsx("div", { className: "pie-chart-card-dropdown", children: jsx(Dropdown, { variant: dropdownVariant, size: "md", iconName: "more_vert", menuItems: defaultDropdownMenuItems$1, onItemClick: handleDropdownSelect }) })), jsxs("div", { className: "pie-chart-card-header", children: [jsx("h3", { className: "pie-chart-card-heading", children: data.title }), jsx("p", { className: "pie-chart-card-subtitle", children: data.subtitle })] }), jsx("div", { className: "pie-chart-card-content", children: jsxs("div", { className: "chart-and-legend-container", children: [jsx("div", { className: "pie-chart-container", children: jsxs("div", { className: "chart-wrapper", children: [jsx(PieChart, { data: data.chartData, hole: hole, size: size, animated: animated, gap: gap }), jsxs("div", { className: `chart-center-content ${animated ? 'animated' : ''}`, children: [jsx("div", { className: "chart-center-value", children: data.value }), data.badge && (jsx("div", { className: "chart-center-badge-container", children: jsx(Badge, { variant: "green", size: "sm", emphasis: "medium", icon: "trending_up", label: data.badge }) }))] })] }) }), showLegend && legendItems.length > 0 && (jsx("div", { className: "pie-chart-card-legend", children: legendItems.map((item, index) => (jsxs("div", { className: "legend-item", children: [jsx("div", { className: "legend-color", style: { backgroundColor: item.color } }), jsxs("div", { className: "legend-content", children: [jsx("span", { className: "legend-text", children: item.name }), item.percentage && (jsx("div", { className: "legend-values", children: jsx("span", { className: "legend-percentage", children: item.percentage }) }))] })] }, index))) }))] }) })] }), showFooter && (jsx(ContainerFooter, { size: "standard", buttonLabel: footerButtonLabel, onButtonClick: handleFooterButtonClick }))] }));
};

const TrendChart = ({ trend = 'positive', data = [20, 45, 30, 60, 35, 70, 40], animated = true, variant = 'line-only', width = 112, height = 56, }) => {
    const { pathData, backgroundPath, strokeColor, fillColor } = React.useMemo(() => {
        const normalizedPoints = normalizeData(data, width, height);
        const pathData = generateRealisticPath(normalizedPoints);
        const backgroundPath = variant !== 'line-only' ? generateBackgroundPath(normalizedPoints, height) : '';
        const strokeColor = getStrokeColor(trend);
        const fillColor = getFillColor(trend);
        return { pathData, backgroundPath, strokeColor, fillColor };
    }, [data, trend, variant, width, height]);
    const containerClasses = React.useMemo(() => {
        const classes = [
            'trend-chart',
            `trend-chart-${trend}`,
            `trend-chart-${variant}`,
        ];
        if (animated) {
            classes.push('trend-chart-animated');
        }
        return classes.join(' ');
    }, [trend, variant, animated]);
    const gradientId = `gradient-${trend}`;
    return (jsx("div", { className: containerClasses, children: jsxs("svg", { width: width, height: height, viewBox: `0 0 ${width} ${height}`, className: "chart-svg", children: [jsx("defs", { children: jsxs("linearGradient", { id: gradientId, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [jsx("stop", { offset: "0%", stopColor: fillColor, stopOpacity: variant === 'fill-only' ? 0.4 : 0.2 }), jsx("stop", { offset: "100%", stopColor: fillColor, stopOpacity: variant === 'fill-only' ? 0.1 : 0.05 })] }) }), backgroundPath && variant !== 'line-only' && (jsx("path", { className: "chart-background", d: backgroundPath, fill: `url(#${gradientId})` })), pathData && variant !== 'fill-only' && (jsx("path", { className: "chart-line", d: pathData, stroke: strokeColor, strokeWidth: "2", fill: "none" }))] }) }));
};
function normalizeData(data, width, height) {
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    const range = maxValue - minValue;
    return data.map((value, index) => ({
        x: (index / (data.length - 1)) * width,
        y: height - ((value - minValue) / range) * (height - 20) - 10,
    }));
}
function generateRealisticPath(points) {
    if (points.length < 2)
        return '';
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const tension = 0.5; // realistic tension value
        const cp1x = prev.x + (curr.x - prev.x) * tension;
        const cp1y = prev.y;
        const cp2x = curr.x - (curr.x - prev.x) * tension;
        const cp2y = curr.y;
        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }
    return path;
}
function generateBackgroundPath(points, height) {
    if (points.length < 2)
        return '';
    let path = `M ${points[0].x} ${height}`;
    path += ` L ${points[0].x} ${points[0].y}`;
    // Follow the same realistic curve as the line
    for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const tension = 0.5;
        const cp1x = prev.x + (curr.x - prev.x) * tension;
        const cp1y = prev.y;
        const cp2x = curr.x - (curr.x - prev.x) * tension;
        const cp2y = curr.y;
        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }
    path += ` L ${points[points.length - 1].x} ${height}`;
    path += ' Z';
    return path;
}
function getStrokeColor(trend) {
    switch (trend) {
        case 'positive':
            return 'var(--color-success-500)';
        case 'negative':
            return 'var(--color-error-500)';
        case 'neutral':
            return 'var(--color-neutral-500)';
        default:
            return 'var(--color-neutral-500)';
    }
}
function getFillColor(trend) {
    switch (trend) {
        case 'positive':
            return 'var(--color-success-600)';
        case 'negative':
            return 'var(--color-error-600)';
        case 'neutral':
            return 'var(--color-neutral-600)';
        default:
            return 'var(--color-neutral-600)';
    }
}

const defaultDropdownMenuItems = [
    { id: 'view', label: 'View details', icon: 'visibility' },
    { id: 'edit', label: 'Edit', icon: 'edit' },
    { id: 'export', label: 'Export data', icon: 'download' },
    { id: 'divider', label: '', divider: true },
    { id: 'delete', label: 'Delete', icon: 'delete' },
];
const TrendChartCard = ({ type = 'metric', breakpoint = 'desktop', heading = 'RevPAR', value = 125.5, valueType = 'currency', trend = 'positive', showTrendIcon = true, showDropdown = true, dropdownVariant = 'icon-only-ghost', trendPercentage = '12.5%', showChart = false, chartData = [95, 105, 110, 108, 115, 120, 125], showFooter = false, footerButtonLabel = 'View report', icon = 'trending_up', iconSize = 'lg', iconColor = 'brand', iconStyle = 'outlined', onDropdownSelect, onFooterButtonClick, }) => {
    const containerClasses = React.useMemo(() => {
        const classes = [
            'trend-chart-card',
            `trend-chart-card-${type}`,
            `trend-chart-card-${breakpoint}`,
        ];
        if (showFooter) {
            classes.push('has-footer');
        }
        return classes.join(' ');
    }, [type, breakpoint, showFooter]);
    const formattedValue = React.useMemo(() => {
        switch (valueType) {
            case 'currency':
                return `$${value.toFixed(2)}`;
            case 'percentage':
                return `${value.toFixed(1)}%`;
            default:
                // Special case for guest satisfaction ratings
                if (heading.toLowerCase().includes('satisfaction') && value >= 1000) {
                    const rating = (value / 1000).toFixed(1);
                    return `${rating}/5`;
                }
                return value.toLocaleString();
        }
    }, [value, valueType, heading]);
    const trendIcon = React.useMemo(() => {
        if (trend === 'positive')
            return 'trending_up';
        if (trend === 'negative')
            return 'trending_down';
        return 'trending_flat';
    }, [trend]);
    const badgeVariant = React.useMemo(() => {
        if (trend === 'positive')
            return 'green';
        if (trend === 'negative')
            return 'red';
        return 'gray';
    }, [trend]);
    const badgeIconName = React.useMemo(() => {
        if (trend === 'positive')
            return 'trending_up';
        if (trend === 'negative')
            return 'trending_down';
        return 'trending_flat';
    }, [trend]);
    const handleDropdownSelect = (item) => {
        onDropdownSelect === null || onDropdownSelect === void 0 ? void 0 : onDropdownSelect(item);
    };
    const handleFooterButtonClick = () => {
        onFooterButtonClick === null || onFooterButtonClick === void 0 ? void 0 : onFooterButtonClick();
    };
    return (jsxs("div", { className: "trend-chart-card-wrapper", children: [jsxs("div", { className: containerClasses, children: [type === 'metric' && (jsxs("div", { className: "trend-chart-card-header", children: [jsx("h3", { className: "trend-chart-card-heading", children: heading }), showDropdown && (jsx("div", { className: "trend-chart-card-dropdown", children: jsx(Dropdown, { variant: dropdownVariant, size: "md", iconName: "more_vert", menuItems: defaultDropdownMenuItems, onItemClick: handleDropdownSelect }) }))] })), type === 'simple' && (jsxs("div", { className: "trend-chart-card-header", children: [jsx("h3", { className: "trend-chart-card-heading", children: heading }), showDropdown && (jsx("div", { className: "trend-chart-card-dropdown", children: jsx(Dropdown, { variant: dropdownVariant, size: "md", iconName: "more_vert", menuItems: defaultDropdownMenuItems, onItemClick: handleDropdownSelect }) }))] })), showDropdown && type === 'featured-icon' && (jsx("div", { className: "trend-chart-card-dropdown", children: jsx(Dropdown, { variant: dropdownVariant, size: "md", iconName: "more_vert", menuItems: defaultDropdownMenuItems, onItemClick: handleDropdownSelect }) })), type === 'featured-icon' && (jsx("div", { className: "trend-chart-card-icon", children: jsx(FeaturedIcon, { icon: icon, size: iconSize, color: iconColor, style: iconStyle }) })), type === 'featured-icon' && (jsx("h3", { className: "trend-chart-card-heading", children: heading })), jsxs("div", { className: "trend-chart-card-row", children: [jsxs("div", { className: "trend-chart-card-number-wrap", children: [jsx("div", { className: "trend-chart-card-number", children: formattedValue }), type === 'metric' && showTrendIcon && (jsx("span", { className: `trend-icon trend-icon-${trend}`, children: jsx("span", { className: "material-symbols-outlined", children: trendIcon }) })), showChart && showTrendIcon && (type === 'simple' || type === 'featured-icon') && (jsx("div", { className: "trend-chart-card-badge-inline", children: jsx(Badge, { variant: badgeVariant, size: "sm", emphasis: "medium", icon: badgeIconName, label: trendPercentage }) }))] }), (type === 'simple' || type === 'featured-icon') && showTrendIcon && !showChart && (jsx("div", { className: "trend-chart-card-badge-wrap", children: jsx(Badge, { variant: badgeVariant, size: "sm", emphasis: "medium", icon: badgeIconName, label: trendPercentage }) })), showChart && (jsx(TrendChart, { variant: "line-only", trend: trend, data: chartData, animated: true, width: 112, height: 56 }))] })] }), showFooter && (jsx(ContainerFooter, { size: type === 'metric' ? 'minimal' : 'standard', buttonLabel: footerButtonLabel, onButtonClick: handleFooterButtonClick }))] }));
};

const MonthPickerContent = ({ minYear = 1998, maxYear = 2060, disabled = false, disabledMonths = [], scrollable = true, selectedMonth: propSelectedMonth = null, selectedYear: propSelectedYear = null, height = '375px', value, onChange, onMonthYearSelect, }) => {
    const monthPickerContentRef = React.useRef(null);
    const [isUsingKeyboard, setIsUsingKeyboard] = React.useState(false);
    // Abbreviated month names as per Figma
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    // Generate years array
    const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i);
    // Track current date
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    // Internal selected state
    const [internalSelectedMonth, setInternalSelectedMonth] = React.useState(() => {
        if (value)
            return value.month;
        if (propSelectedMonth !== null)
            return propSelectedMonth;
        // Initialize with current date if within range
        if (currentYear >= minYear && currentYear <= maxYear) {
            return currentMonth;
        }
        else {
            return currentMonth;
        }
    });
    const [internalSelectedYear, setInternalSelectedYear] = React.useState(() => {
        if (value)
            return value.year;
        if (propSelectedYear !== null)
            return propSelectedYear;
        // Initialize with current date if within range
        if (currentYear >= minYear && currentYear <= maxYear) {
            return currentYear;
        }
        else {
            // If current year is out of range, select closest available year
            return currentYear < minYear ? minYear : maxYear;
        }
    });
    // Sync with props
    React.useEffect(() => {
        if (value) {
            setInternalSelectedMonth(value.month);
            setInternalSelectedYear(value.year);
        }
        else if (propSelectedMonth !== null || propSelectedYear !== null) {
            setInternalSelectedMonth(propSelectedMonth);
            setInternalSelectedYear(propSelectedYear);
        }
    }, [value, propSelectedMonth, propSelectedYear]);
    // Scroll to selected year
    const scrollToSelectedYearInstantly = React.useCallback(() => {
        if (internalSelectedYear !== null && monthPickerContentRef.current && scrollable) {
            const yearElement = monthPickerContentRef.current.querySelector(`#year-${internalSelectedYear}`);
            if (yearElement) {
                const container = monthPickerContentRef.current;
                const containerHeight = container.clientHeight;
                const yearElementTop = yearElement.offsetTop;
                const yearElementHeight = yearElement.offsetHeight;
                const isFirstYear = internalSelectedYear === minYear;
                const isLastYear = internalSelectedYear === maxYear;
                if (!isFirstYear && !isLastYear) {
                    const scrollOffset = 50;
                    const scrollTop = yearElementTop - containerHeight / 2 + yearElementHeight / 2 + scrollOffset;
                    container.scrollTop = Math.max(0, scrollTop);
                }
                else if (isFirstYear) {
                    container.scrollTop = 0;
                }
                else {
                    container.scrollTop = container.scrollHeight;
                }
            }
        }
    }, [internalSelectedYear, minYear, maxYear, scrollable]);
    // Scroll to selected year only on mount
    React.useEffect(() => {
        if (scrollable) {
            setTimeout(scrollToSelectedYearInstantly, 0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollable]); // Only depend on scrollable, not on scrollToSelectedYearInstantly
    const handleKeyDown = () => {
        setIsUsingKeyboard(true);
    };
    const handleMouseDown = () => {
        setIsUsingKeyboard(false);
    };
    const isCurrentMonth = (monthIndex, year) => {
        return currentMonth === monthIndex && currentYear === year;
    };
    const isMonthSelectable = (monthIndex, year) => {
        // Check if year is within range
        if (year < minYear || year > maxYear) {
            return false;
        }
        // Check if month is in disabled list
        return !disabledMonths.some((disabledMonth) => disabledMonth.month === monthIndex && disabledMonth.year === year);
    };
    const selectMonth = (monthIndex, year) => {
        if (disabled || !isMonthSelectable(monthIndex, year)) {
            return;
        }
        setInternalSelectedMonth(monthIndex);
        setInternalSelectedYear(year);
        const selection = {
            month: monthIndex,
            year: year,
        };
        onChange === null || onChange === void 0 ? void 0 : onChange(selection);
        onMonthYearSelect === null || onMonthYearSelect === void 0 ? void 0 : onMonthYearSelect(selection);
    };
    const handleMonthButtonFocus = (event) => {
        if (isUsingKeyboard) {
            event.target.classList.add('keyboard-focused');
        }
    };
    const handleMonthButtonBlur = (event) => {
        event.target.classList.remove('keyboard-focused');
    };
    const getMonthLabel = (monthIndex) => {
        return months[monthIndex];
    };
    return (jsx("div", { className: `month-picker-content animate-slide-up-enter ${scrollable ? 'scrollable' : ''}`, style: { height }, ref: monthPickerContentRef, onKeyDown: handleKeyDown, onMouseDown: handleMouseDown, children: jsx("div", { className: "calendar", children: years.map((year, yearIndex) => (jsxs("div", { className: "year-section", id: `year-${year}`, children: [jsxs("div", { className: "year-month-container", children: [jsx("div", { className: "year-label", children: year }), jsxs("div", { className: "months-row", children: [jsx("div", { className: "month-row", children: months.slice(0, 6).map((monthName, monthIndex) => (jsx("button", { className: `month-button ${!isMonthSelectable(monthIndex, year) ? 'inactive' : ''} ${internalSelectedMonth === monthIndex && internalSelectedYear === year
                                                ? 'selected'
                                                : ''} ${isCurrentMonth(monthIndex, year) ? 'today' : ''}`, disabled: !isMonthSelectable(monthIndex, year), onClick: () => selectMonth(monthIndex, year), onFocus: handleMonthButtonFocus, onBlur: handleMonthButtonBlur, children: getMonthLabel(monthIndex) }, monthIndex))) }), jsx("div", { className: "month-row", children: months.slice(6, 12).map((monthName, monthIndex) => {
                                            const actualMonthIndex = monthIndex + 6;
                                            return (jsx("button", { className: `month-button ${!isMonthSelectable(actualMonthIndex, year) ? 'inactive' : ''} ${internalSelectedMonth === actualMonthIndex && internalSelectedYear === year
                                                    ? 'selected'
                                                    : ''} ${isCurrentMonth(actualMonthIndex, year) ? 'today' : ''}`, disabled: !isMonthSelectable(actualMonthIndex, year), onClick: () => selectMonth(actualMonthIndex, year), onFocus: handleMonthButtonFocus, onBlur: handleMonthButtonBlur, children: getMonthLabel(actualMonthIndex) }, actualMonthIndex));
                                        }) })] })] }), yearIndex < years.length - 1 && (jsx("div", { className: "section-divider", children: jsx("div", { className: "divider-container", children: jsx("div", { className: "divider-line" }) }) }))] }, year))) }) }));
};

const DatePickerContent = React.memo(({ minYear = 1998, maxYear = 2060, disabled = false, disabledDates = [], scrollable = true, animationClass = 'animate-dropdown-enter', initialMonth = null, initialYear = null, displayMonth, displayYear, rangeStart = null, rangeEnd = null, value, showOtherMonthDays = true, isDateInRange, isDateSelected, isDateRangeStart, isDateRangeEnd, onChange, onDateSelect, onMonthChange, onMonthYearChange, }) => {
    const today = new Date();
    const selectedDateRef = React.useRef(value || null);
    const [, forceUpdate] = React.useState({});
    const [currentMonth, setCurrentMonth] = React.useState(displayMonth !== undefined ? displayMonth : (initialMonth !== null ? initialMonth : today.getMonth()));
    const [currentYear, setCurrentYear] = React.useState(displayYear !== undefined ? displayYear : (initialYear !== null ? initialYear : today.getFullYear()));
    const [isMonthDropdownOpen, setIsMonthDropdownOpen] = React.useState(false);
    const [isMonthDropdownClosing, setIsMonthDropdownClosing] = React.useState(false);
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    // Sync with value prop only when actually different
    React.useEffect(() => {
        if (value !== undefined) {
            const current = selectedDateRef.current;
            const isDifferent = !current !== !value ||
                (current && value && (current.year !== value.year ||
                    current.month !== value.month ||
                    current.day !== value.day));
            if (isDifferent) {
                selectedDateRef.current = value;
                // Only auto-navigate to value's month if we're not in external control mode
                if (value && displayMonth === undefined && displayYear === undefined) {
                    setCurrentMonth(value.month);
                    setCurrentYear(value.year);
                }
                forceUpdate({});
            }
        }
    }, [value]);
    // Sync with initial values
    React.useEffect(() => {
        if (initialMonth !== null)
            setCurrentMonth(initialMonth);
        if (initialYear !== null)
            setCurrentYear(initialYear);
    }, [initialMonth, initialYear]);
    // Sync with display month/year for date range picker
    React.useEffect(() => {
        if (displayMonth !== undefined)
            setCurrentMonth(displayMonth);
        if (displayYear !== undefined)
            setCurrentYear(displayYear);
    }, [displayMonth, displayYear]);
    const isInRangeMode = React.useMemo(() => {
        return rangeStart !== null || rangeEnd !== null;
    }, [rangeStart, rangeEnd]);
    const calendarCells = React.useMemo(() => {
        const cells = [];
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        // Helper functions defined inside useMemo to avoid dependency issues
        const isSameDay = (date1, date2) => {
            return (date1.getFullYear() === date2.getFullYear() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getDate() === date2.getDate());
        };
        const isDateDisabled = (date) => {
            if (!disabledDates || !Array.isArray(disabledDates)) {
                return false;
            }
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            return disabledDates.some((disabled) => disabled.year === year &&
                disabled.month === month &&
                disabled.day === day);
        };
        // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
        let firstDayOfWeek = firstDay.getDay();
        // Convert to Monday start (0 = Monday, 6 = Sunday)
        firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
        // Add empty cells for days before the first of the month
        if (showOtherMonthDays) {
            for (let i = 0; i < firstDayOfWeek; i++) {
                const prevMonthLastDay = new Date(currentYear, currentMonth, -i);
                cells.unshift({
                    day: prevMonthLastDay.getDate(),
                    isCurrentMonth: false,
                    isToday: false,
                    isSelected: false,
                    isDisabled: true,
                    isRangeStart: false,
                    isRangeEnd: false,
                    isInRange: false,
                    date: prevMonthLastDay,
                });
            }
        }
        else {
            // Add empty cells without dates
            for (let i = 0; i < firstDayOfWeek; i++) {
                cells.unshift({
                    day: 0, // Use 0 to indicate empty cell
                    isCurrentMonth: false,
                    isToday: false,
                    isSelected: false,
                    isDisabled: true,
                    isRangeStart: false,
                    isRangeEnd: false,
                    isInRange: false,
                    date: new Date(currentYear, currentMonth, -i),
                });
            }
        }
        // Add cells for current month
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const date = new Date(currentYear, currentMonth, day);
            let isRangeStart = false;
            let isRangeEnd = false;
            let isInRange = false;
            // Check for range start using callback
            if (isDateRangeStart) {
                const cellDate = { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() };
                isRangeStart = isDateRangeStart(cellDate);
            }
            else if (rangeStart && rangeStart.year !== undefined && rangeStart.month !== undefined && rangeStart.day !== undefined) {
                const start = new Date(rangeStart.year, rangeStart.month, rangeStart.day);
                isRangeStart = date.getTime() === start.getTime();
            }
            // Check for range end using callback
            if (isDateRangeEnd) {
                const cellDate = { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() };
                isRangeEnd = isDateRangeEnd(cellDate);
            }
            else if (rangeStart && rangeEnd &&
                rangeStart.year !== undefined && rangeStart.month !== undefined && rangeStart.day !== undefined &&
                rangeEnd.year !== undefined && rangeEnd.month !== undefined && rangeEnd.day !== undefined) {
                const start = new Date(rangeStart.year, rangeStart.month, rangeStart.day);
                const end = new Date(rangeEnd.year, rangeEnd.month, rangeEnd.day);
                isRangeEnd = date.getTime() === end.getTime();
                isInRange = date > start && date < end;
            }
            cells.push({
                day,
                isCurrentMonth: true,
                isToday: isSameDay(date, today),
                isSelected: false, // We'll update this after calendar generation
                isDisabled: isDateDisabled(date),
                isRangeStart,
                isRangeEnd,
                isInRange,
                date,
            });
        }
        // Add next month days to fill the grid (only if showing other month days)
        if (showOtherMonthDays) {
            const totalCells = cells.length;
            const remainingCells = 42 - totalCells; // 6 weeks × 7 days = 42 cells max
            for (let day = 1; day <= remainingCells; day++) {
                const nextMonthDay = new Date(currentYear, currentMonth + 1, day);
                cells.push({
                    day: nextMonthDay.getDate(),
                    isCurrentMonth: false,
                    isToday: false,
                    isSelected: false,
                    isDisabled: true,
                    isRangeStart: false,
                    isRangeEnd: false,
                    isInRange: false,
                    date: nextMonthDay,
                });
                // Stop when we have a complete week (7 days per row)
                if (cells.length % 7 === 0)
                    break;
            }
        }
        return cells;
    }, [currentMonth, currentYear, rangeStart, rangeEnd, disabledDates, isInRangeMode, showOtherMonthDays]);
    const handleCellClick = (cell) => {
        if (cell.isDisabled || disabled || !cell.isCurrentMonth) {
            return;
        }
        const newSelectedDate = {
            year: cell.date.getFullYear(),
            month: cell.date.getMonth(),
            day: cell.date.getDate(),
        };
        // If we're in range mode, let the parent handle it
        if (rangeStart !== null || rangeEnd !== null) {
            onDateSelect === null || onDateSelect === void 0 ? void 0 : onDateSelect(newSelectedDate);
            return;
        }
        // In regular mode, manage internal state
        const currentSelected = selectedDateRef.current;
        const isCurrentlySelected = currentSelected &&
            currentSelected.year === newSelectedDate.year &&
            currentSelected.month === newSelectedDate.month &&
            currentSelected.day === newSelectedDate.day;
        if (isCurrentlySelected) {
            // Deselect
            selectedDateRef.current = null;
            onChange === null || onChange === void 0 ? void 0 : onChange(null);
            onDateSelect === null || onDateSelect === void 0 ? void 0 : onDateSelect(null);
        }
        else {
            // Select
            selectedDateRef.current = newSelectedDate;
            onChange === null || onChange === void 0 ? void 0 : onChange(newSelectedDate);
            onDateSelect === null || onDateSelect === void 0 ? void 0 : onDateSelect(newSelectedDate);
        }
        // Force re-render of cells only
        forceUpdate({});
    };
    const handleMonthDropdownToggle = () => {
        if (isMonthDropdownOpen) {
            closeMonthDropdown();
        }
        else {
            setIsMonthDropdownOpen(true);
        }
    };
    const closeMonthDropdown = () => {
        setIsMonthDropdownClosing(true);
        setTimeout(() => {
            setIsMonthDropdownOpen(false);
            setIsMonthDropdownClosing(false);
        }, 150);
    };
    const handleMonthYearSelect = (monthYear) => {
        closeMonthDropdown();
        // Delay the calendar update until after the dropdown animation completes
        setTimeout(() => {
            setCurrentMonth(monthYear.month);
            setCurrentYear(monthYear.year);
            onMonthChange === null || onMonthChange === void 0 ? void 0 : onMonthChange({ month: monthYear.month, year: monthYear.year });
            onMonthYearChange === null || onMonthYearChange === void 0 ? void 0 : onMonthYearChange(monthYear.month, monthYear.year);
        }, 100); // Shorter delay for more responsive feel
    };
    const handlePreviousMonth = () => {
        if (disabled)
            return;
        let newMonth = currentMonth - 1;
        let newYear = currentYear;
        if (newMonth < 0) {
            newMonth = 11;
            newYear = currentYear - 1;
        }
        // Check if new date is within allowed range
        if (newYear >= minYear) {
            setCurrentMonth(newMonth);
            setCurrentYear(newYear);
            onMonthChange === null || onMonthChange === void 0 ? void 0 : onMonthChange({ month: newMonth, year: newYear });
            onMonthYearChange === null || onMonthYearChange === void 0 ? void 0 : onMonthYearChange(newMonth, newYear);
        }
    };
    const handleNextMonth = () => {
        if (disabled)
            return;
        let newMonth = currentMonth + 1;
        let newYear = currentYear;
        if (newMonth > 11) {
            newMonth = 0;
            newYear = currentYear + 1;
        }
        // Check if new date is within allowed range
        if (newYear <= maxYear) {
            setCurrentMonth(newMonth);
            setCurrentYear(newYear);
            onMonthChange === null || onMonthChange === void 0 ? void 0 : onMonthChange({ month: newMonth, year: newYear });
            onMonthYearChange === null || onMonthYearChange === void 0 ? void 0 : onMonthYearChange(newMonth, newYear);
        }
    };
    const getCellClass = (cell) => {
        const classes = ['calendar-cell'];
        if (!cell.isCurrentMonth)
            classes.push('other-month');
        if (cell.isToday)
            classes.push('today');
        if (cell.isRangeStart)
            classes.push('range-start');
        if (cell.isRangeEnd)
            classes.push('range-end');
        if (cell.isInRange)
            classes.push('in-range');
        // Use external isDateSelected function if provided, otherwise use internal logic
        const cellDate = { year: cell.date.getFullYear(), month: cell.date.getMonth(), day: cell.date.getDate() };
        let isSelected = false;
        if (isDateSelected && cell.isCurrentMonth) {
            isSelected = isDateSelected(cellDate);
        }
        else if (!isInRangeMode && selectedDateRef.current && cell.isCurrentMonth) {
            isSelected = cell.date.getFullYear() === selectedDateRef.current.year &&
                cell.date.getMonth() === selectedDateRef.current.month &&
                cell.date.getDate() === selectedDateRef.current.day;
        }
        // Check if date is in range using external function if provided
        if (isDateInRange && cell.isCurrentMonth && isDateInRange(cellDate)) {
            classes.push('in-range');
        }
        if (isSelected)
            classes.push('selected');
        if (cell.isDisabled)
            classes.push('disabled');
        else if (cell.isCurrentMonth)
            classes.push('selectable');
        return classes.join(' ');
    };
    const currentMonthYear = `${monthNames[currentMonth]} ${currentYear}`;
    return (jsxs("div", { className: "date-picker-content", children: [jsxs("div", { className: "month-navigation", children: [jsx(Button, { hierarchy: "tertiary", type: "ghost", size: "sm", icon: "only", iconName: "chevron_left", onClick: handlePreviousMonth, disabled: disabled || (currentYear === minYear && currentMonth === 0), className: "nav-button" }), jsx(Button, { hierarchy: "tertiary", type: "ghost", size: "sm", label: currentMonthYear, icon: "trailing", iconName: "expand_more", onClick: handleMonthDropdownToggle, className: `${isMonthDropdownOpen ? 'dropdown-open' : ''}` }), jsx(Button, { hierarchy: "tertiary", type: "ghost", size: "sm", icon: "only", iconName: "chevron_right", onClick: handleNextMonth, disabled: disabled || (currentYear === maxYear && currentMonth === 11), className: "nav-button" })] }), !isMonthDropdownOpen && (jsxs("div", { className: "calendar-grid", children: [jsx("div", { className: "day-names", children: dayNames.map((dayName) => (jsx("div", { className: "day-name", children: dayName }, dayName))) }), jsx("div", { className: "date-cells", children: calendarCells.map((cell, index) => (jsx("div", { className: getCellClass(cell), onClick: () => handleCellClick(cell), children: jsx("span", { className: "date-number", children: cell.day === 0 ? '' : cell.day }) }, index))) })] })), (isMonthDropdownOpen || isMonthDropdownClosing) && (jsx("div", { className: `month-picker-inline ${isMonthDropdownClosing ? 'animate-fade-out' : ''}`, children: jsx(MonthPickerContent, { scrollable: true, height: "275px", selectedMonth: currentMonth, selectedYear: currentYear, onChange: handleMonthYearSelect, minYear: minYear, maxYear: maxYear }) }))] }));
});

const PickerMenu = ({ minYear = 1998, maxYear = 2060, disabled = false, disabledMonths = [], animationClass = 'animate-dropdown-enter', visible = true, showFooter = true, showTodayButton = false, disableApply = false, value, children, onChange, onMonthYearSelect, onCancel, onApply, onToday, }) => {
    const [isClosing, setIsClosing] = React.useState(false);
    const [shouldRender, setShouldRender] = React.useState(visible);
    const [selectedMonth, setSelectedMonth] = React.useState(null);
    const [selectedYear, setSelectedYear] = React.useState(null);
    // Initialize with current date or provided value
    React.useEffect(() => {
        if (value) {
            setSelectedMonth(value.month);
            setSelectedYear(value.year);
        }
        else {
            // Initialize with current date
            const now = new Date();
            const currentMonth = now.getMonth();
            const currentYear = now.getFullYear();
            // Set initial selection to current month/year if within range
            if (currentYear >= minYear && currentYear <= maxYear) {
                setSelectedMonth(currentMonth);
                setSelectedYear(currentYear);
            }
            else {
                // If current year is out of range, select closest available year with current month
                if (currentYear < minYear) {
                    setSelectedYear(minYear);
                }
                else {
                    setSelectedYear(maxYear);
                }
                setSelectedMonth(currentMonth);
            }
        }
    }, [value, minYear, maxYear]);
    // Handle visibility changes with animation
    React.useEffect(() => {
        if (visible) {
            setShouldRender(true);
            setIsClosing(false);
        }
        else {
            setIsClosing(true);
            const timer = setTimeout(() => {
                setShouldRender(false);
                setIsClosing(false);
            }, 150);
            return () => clearTimeout(timer);
        }
    }, [visible]);
    const handleMonthYearSelect = (selection) => {
        setSelectedMonth(selection.month);
        setSelectedYear(selection.year);
        onChange === null || onChange === void 0 ? void 0 : onChange(selection);
        onMonthYearSelect === null || onMonthYearSelect === void 0 ? void 0 : onMonthYearSelect(selection);
    };
    const handleCancel = () => {
        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
    };
    const handleApply = () => {
        if (children) {
            // For custom content (like DatePickerContent), just call onApply
            onApply === null || onApply === void 0 ? void 0 : onApply();
        }
        else {
            // For MonthPickerContent, handle the selection
            if (selectedMonth !== null && selectedYear !== null) {
                onApply === null || onApply === void 0 ? void 0 : onApply();
            }
        }
    };
    if (!shouldRender) {
        return null;
    }
    const menuClasses = `picker-menu ${isClosing ? 'animate-dropdown-exit' : animationClass} ${!showFooter ? 'no-footer' : ''}`;
    return (jsxs("div", { className: menuClasses, children: [children || (jsx(MonthPickerContent, { minYear: minYear, maxYear: maxYear, disabled: disabled, disabledMonths: disabledMonths, scrollable: true, selectedMonth: selectedMonth, selectedYear: selectedYear, onChange: handleMonthYearSelect })), showFooter && (jsx("div", { className: "picker-menu-footer", children: jsxs("div", { className: `picker-menu-actions ${showTodayButton ? 'has-today-button' : ''}`, children: [showTodayButton && (jsx(Button, { hierarchy: "secondary", type: "outline", size: "sm", icon: "only", iconName: "today", onClick: onToday, className: "today-button" })), jsxs("div", { className: "picker-menu-main-actions", children: [jsx(Button, { hierarchy: "secondary", size: "sm", label: "Cancel", onClick: handleCancel }), jsx(Button, { hierarchy: "primary", size: "sm", label: "Apply", disabled: disableApply || (!children && (selectedMonth === null || selectedYear === null)), onClick: handleApply })] })] }) }))] }));
};

const MonthPicker = ({ variant = 'dropdown-outlined', minYear = 1998, maxYear = 2060, disabled = false, disabledMonths = [], label = 'Select Month', placeholder = 'Choose month and year', inputWidth = '200px', showLabel = true, showFooter = true, value, onChange, onMonthYearSelect, }) => {
    const [selectedValue, setSelectedValue] = React.useState(value || null);
    const [tempSelection, setTempSelection] = React.useState(null);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMenuClosing, setIsMenuClosing] = React.useState(false);
    const containerRef = React.useRef(null);
    // Sync with external value prop
    React.useEffect(() => {
        if (value !== undefined) {
            setSelectedValue(value);
        }
    }, [value]);
    const getDisplayValue = () => {
        if (!selectedValue)
            return '';
        // US convention: MM/YYYY (01/2025)
        const month = (selectedValue.month + 1).toString().padStart(2, '0');
        return `${month}/${selectedValue.year}`;
    };
    const getButtonLabel = () => {
        return getDisplayValue() || placeholder;
    };
    const handleTriggerClick = () => {
        if (disabled)
            return;
        if (!isMenuOpen && showFooter) {
            // When opening with footer, initialize temp selection with current value
            setTempSelection(selectedValue);
        }
        setIsMenuOpen(!isMenuOpen);
    };
    const handleInputValueChange = (inputValue) => {
        if (disabled)
            return;
        parseInputValue(inputValue);
    };
    const handleInputFocus = () => {
        if (disabled)
            return;
        if (!isMenuOpen && showFooter) {
            // When opening with footer, initialize temp selection with current value
            setTempSelection(selectedValue);
        }
        setIsMenuOpen(true);
    };
    const parseInputValue = (inputValue) => {
        // Parse MM/YYYY format
        const match = inputValue.match(/^(\d{1,2})\/(\d{4})$/);
        if (match) {
            const month = parseInt(match[1], 10) - 1; // Convert to 0-based month
            const year = parseInt(match[2], 10);
            // Validate month and year
            if (month >= 0 &&
                month <= 11 &&
                year >= minYear &&
                year <= maxYear) {
                const newValue = { month, year };
                setSelectedValue(newValue);
                onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
                onMonthYearSelect === null || onMonthYearSelect === void 0 ? void 0 : onMonthYearSelect(newValue);
                return;
            }
        }
        // If parsing fails, keep the current selected value but update display
    };
    const handleMonthYearSelect = (monthYear) => {
        if (showFooter) {
            // With footer: just update temp selection, don't apply yet
            setTempSelection(monthYear);
        }
        else {
            // Without footer: immediately apply and close
            setSelectedValue(monthYear);
            onChange === null || onChange === void 0 ? void 0 : onChange(monthYear);
            onMonthYearSelect === null || onMonthYearSelect === void 0 ? void 0 : onMonthYearSelect(monthYear);
            closeMenu();
        }
    };
    const handleMenuCancel = () => {
        // Reset temp selection and close
        setTempSelection(null);
        closeMenu();
    };
    const handleMenuApply = () => {
        // Apply the temp selection and close
        if (tempSelection) {
            setSelectedValue(tempSelection);
            onChange === null || onChange === void 0 ? void 0 : onChange(tempSelection);
            onMonthYearSelect === null || onMonthYearSelect === void 0 ? void 0 : onMonthYearSelect(tempSelection);
            setTempSelection(null);
        }
        closeMenu();
    };
    const closeMenu = () => {
        setIsMenuClosing(true);
        setTimeout(() => {
            setIsMenuOpen(false);
            setIsMenuClosing(false);
        }, 150);
    };
    const handleBackdropClick = () => {
        handleMenuCancel();
    };
    const handleCalendarIconClick = () => {
        handleTriggerClick();
    };
    return (jsxs(Fragment, { children: [jsxs("div", { className: "month-picker-container", ref: containerRef, children: [variant === 'dropdown-outlined' && (jsx("div", { className: "month-picker-trigger", onClick: handleTriggerClick, children: jsx(Button, { hierarchy: "secondary", type: "outline", size: "sm", icon: "trailing", label: getButtonLabel(), iconName: "expand_more", disabled: disabled }) })), variant === 'dropdown-ghost' && (jsx("div", { className: "month-picker-trigger", onClick: handleTriggerClick, children: jsx(Button, { hierarchy: "tertiary", type: "ghost", size: "sm", icon: "trailing", label: getButtonLabel(), iconName: "expand_more", disabled: disabled }) })), variant === 'input' && (jsxs("div", { className: "month-picker-trigger input-field-container", children: [jsx(InputText, { label: label, placeholder: placeholder, value: getDisplayValue(), disabled: disabled, showTrailingIcon: true, trailingIcon: "calendar_month", showHelpIcon: false, showHintText: false, showLabel: showLabel, width: inputWidth, onChange: handleInputValueChange, onFocus: handleInputFocus }), jsx("div", { className: "calendar-icon-overlay", onClick: handleCalendarIconClick })] })), jsx("div", { className: "month-picker-menu-container", children: jsx(PickerMenu, { visible: isMenuOpen, minYear: minYear, maxYear: maxYear, disabled: disabled, disabledMonths: disabledMonths, showFooter: showFooter, value: tempSelection || selectedValue, onChange: handleMonthYearSelect, onMonthYearSelect: handleMonthYearSelect, onCancel: handleMenuCancel, onApply: handleMenuApply }) })] }), (isMenuOpen || isMenuClosing) && (jsx("div", { className: "month-picker-backdrop", onClick: handleBackdropClick }))] }));
};

const DatePicker = ({ variant = 'input', minYear = 1998, maxYear = 2060, disabled = false, disabledDates = [], label = 'Select Date', placeholder = 'Choose date', inputWidth = '200px', showLabel = true, showFooter = false, showOtherMonthDays = true, value, onChange, onDateSelect, }) => {
    const [selectedValue, setSelectedValue] = React.useState(value || null);
    const [tempSelection, setTempSelection] = React.useState(null);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMenuClosing, setIsMenuClosing] = React.useState(false);
    const containerRef = React.useRef(null);
    // Sync with external value prop
    React.useEffect(() => {
        if (value !== undefined) {
            setSelectedValue(value);
        }
    }, [value]);
    const getDisplayValue = () => {
        if (!selectedValue)
            return '';
        // Format as MM/DD/YYYY
        const month = (selectedValue.month + 1).toString().padStart(2, '0');
        const day = selectedValue.day.toString().padStart(2, '0');
        return `${month}/${day}/${selectedValue.year}`;
    };
    const getButtonLabel = () => {
        return getDisplayValue() || placeholder;
    };
    const handleTriggerClick = () => {
        if (disabled)
            return;
        if (!isMenuOpen && showFooter) {
            // When opening with footer, initialize temp selection with current value
            setTempSelection(selectedValue);
        }
        setIsMenuOpen(!isMenuOpen);
    };
    const handleInputValueChange = (inputValue) => {
        if (disabled)
            return;
        parseInputValue(inputValue);
    };
    const handleInputFocus = () => {
        if (disabled)
            return;
        if (!isMenuOpen && showFooter) {
            // When opening with footer, initialize temp selection with current value
            setTempSelection(selectedValue);
        }
        setIsMenuOpen(true);
    };
    const parseInputValue = (inputValue) => {
        // Parse MM/DD/YYYY format
        const match = inputValue.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
        if (match) {
            const month = parseInt(match[1], 10) - 1; // Convert to 0-based month
            const day = parseInt(match[2], 10);
            const year = parseInt(match[3], 10);
            // Validate date
            if (month >= 0 &&
                month <= 11 &&
                day >= 1 &&
                day <= 31 &&
                year >= minYear &&
                year <= maxYear) {
                const date = new Date(year, month, day);
                // Verify the date is valid (handles invalid dates like Feb 30)
                if (date.getFullYear() === year &&
                    date.getMonth() === month &&
                    date.getDate() === day) {
                    const newValue = { year, month, day };
                    setSelectedValue(newValue);
                    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
                    onDateSelect === null || onDateSelect === void 0 ? void 0 : onDateSelect(newValue);
                }
            }
        }
    };
    const handleDateSelect = (date) => {
        if (showFooter && date) {
            // With footer: just update temp selection, don't apply yet
            setTempSelection(date);
        }
        else {
            // Without footer: immediately apply and close
            setSelectedValue(date);
            onChange === null || onChange === void 0 ? void 0 : onChange(date);
            onDateSelect === null || onDateSelect === void 0 ? void 0 : onDateSelect(date);
            if (!showFooter) {
                closeMenu();
            }
        }
    };
    const handleMenuCancel = () => {
        // Reset temp selection and close
        setTempSelection(null);
        closeMenu();
    };
    const handleMenuApply = () => {
        // Apply the temp selection and close
        if (tempSelection) {
            setSelectedValue(tempSelection);
            setTempSelection(null);
            onChange === null || onChange === void 0 ? void 0 : onChange(tempSelection);
            onDateSelect === null || onDateSelect === void 0 ? void 0 : onDateSelect(tempSelection);
        }
        closeMenu();
    };
    const handleToday = () => {
        const today = new Date();
        const todayDate = {
            year: today.getFullYear(),
            month: today.getMonth(),
            day: today.getDate(),
        };
        if (showFooter) {
            setTempSelection(todayDate);
        }
        else {
            setSelectedValue(todayDate);
            onChange === null || onChange === void 0 ? void 0 : onChange(todayDate);
            onDateSelect === null || onDateSelect === void 0 ? void 0 : onDateSelect(todayDate);
            closeMenu();
        }
    };
    const closeMenu = () => {
        setIsMenuClosing(true);
        setTimeout(() => {
            setIsMenuOpen(false);
            setIsMenuClosing(false);
        }, 150);
    };
    const handleBackdropClick = () => {
        handleMenuCancel();
    };
    const handleCalendarIconClick = () => {
        handleTriggerClick();
    };
    return (jsxs(Fragment, { children: [jsxs("div", { className: "date-picker-container", ref: containerRef, children: [variant === 'dropdown-outlined' && (jsx("div", { className: "date-picker-trigger", onClick: handleTriggerClick, children: jsx(Button, { hierarchy: "secondary", type: "outline", size: "sm", icon: "trailing", label: getButtonLabel(), iconName: "expand_more", disabled: disabled }) })), variant === 'dropdown-ghost' && (jsx("div", { className: "date-picker-trigger", onClick: handleTriggerClick, children: jsx(Button, { hierarchy: "tertiary", type: "ghost", size: "sm", icon: "trailing", label: getButtonLabel(), iconName: "expand_more", disabled: disabled }) })), variant === 'input' && (jsxs("div", { className: "date-picker-trigger input-field-container", children: [jsx(InputText, { label: label, placeholder: placeholder, value: getDisplayValue(), disabled: disabled, showTrailingIcon: true, trailingIcon: "calendar_today", showHelpIcon: false, showHintText: false, showLabel: showLabel, width: inputWidth, onChange: handleInputValueChange, onFocus: handleInputFocus }), jsx("div", { className: "calendar-icon-overlay", onClick: handleCalendarIconClick })] })), jsx("div", { className: "date-picker-menu-container", children: jsx(PickerMenu, { visible: isMenuOpen, showFooter: showFooter, showTodayButton: showFooter, disableApply: showFooter && tempSelection === null, onCancel: handleMenuCancel, onApply: handleMenuApply, onToday: handleToday, children: jsx(DatePickerContent, { minYear: minYear, maxYear: maxYear, disabled: disabled, disabledDates: disabledDates, showOtherMonthDays: showOtherMonthDays, value: tempSelection || selectedValue, onDateSelect: handleDateSelect }) }) })] }), (isMenuOpen || isMenuClosing) && (jsx("div", { className: "date-picker-backdrop", onClick: handleBackdropClick }))] }));
};

const DateRangePickerContent = ({ minYear = 1998, maxYear = 2060, disabled = false, disabledDates = [], showOtherMonthDays = true, value, onChange, onDateRangeSelect, }) => {
    const [selectedRange, setSelectedRange] = React.useState(value || null);
    // Initialize left calendar with current month
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const [leftMonth, setLeftMonth] = React.useState(currentMonth);
    const [leftYear, setLeftYear] = React.useState(currentYear);
    // Helper functions for month navigation
    const getNextMonth = (month, year) => {
        const nextMonth = month + 1;
        if (nextMonth > 11) {
            return { month: 0, year: year + 1 };
        }
        return { month: nextMonth, year };
    };
    const getPreviousMonth = (month, year) => {
        const prevMonth = month - 1;
        if (prevMonth < 0) {
            return { month: 11, year: year - 1 };
        }
        return { month: prevMonth, year };
    };
    const nextMonthYear = getNextMonth(currentMonth, currentYear);
    const [rightMonth, setRightMonth] = React.useState(nextMonthYear.month);
    const [rightYear, setRightYear] = React.useState(nextMonthYear.year);
    // Sync with external value prop
    React.useEffect(() => {
        if (value !== undefined) {
            setSelectedRange(value);
        }
    }, [value]);
    const handleLeftDateSelect = (date) => {
        if (!date)
            return;
        let newRange;
        if (!(selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.startDate) || (selectedRange.startDate && selectedRange.endDate)) {
            // Start new range
            newRange = { startDate: date, endDate: null };
        }
        else if (selectedRange.startDate && !selectedRange.endDate) {
            // Complete the range
            const startDate = selectedRange.startDate;
            const isAfterStart = date.year > startDate.year ||
                (date.year === startDate.year && date.month > startDate.month) ||
                (date.year === startDate.year && date.month === startDate.month && date.day > startDate.day);
            if (isAfterStart) {
                newRange = { startDate, endDate: date };
            }
            else {
                newRange = { startDate: date, endDate: startDate };
            }
        }
        else {
            newRange = { startDate: date, endDate: null };
        }
        setSelectedRange(newRange);
        onChange === null || onChange === void 0 ? void 0 : onChange(newRange);
        onDateRangeSelect === null || onDateRangeSelect === void 0 ? void 0 : onDateRangeSelect(newRange);
    };
    const handleRightDateSelect = (date) => {
        if (!date)
            return;
        let newRange;
        if (!(selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.startDate) || (selectedRange.startDate && selectedRange.endDate)) {
            // Start new range
            newRange = { startDate: date, endDate: null };
        }
        else if (selectedRange.startDate && !selectedRange.endDate) {
            // Complete the range
            const startDate = selectedRange.startDate;
            const isAfterStart = date.year > startDate.year ||
                (date.year === startDate.year && date.month > startDate.month) ||
                (date.year === startDate.year && date.month === startDate.month && date.day > startDate.day);
            if (isAfterStart) {
                newRange = { startDate, endDate: date };
            }
            else {
                newRange = { startDate: date, endDate: startDate };
            }
        }
        else {
            newRange = { startDate: date, endDate: null };
        }
        setSelectedRange(newRange);
        onChange === null || onChange === void 0 ? void 0 : onChange(newRange);
        onDateRangeSelect === null || onDateRangeSelect === void 0 ? void 0 : onDateRangeSelect(newRange);
    };
    const handleLeftMonthYearChange = (month, year) => {
        setLeftMonth(month);
        setLeftYear(year);
        // Ensure right calendar is always at least one month ahead
        if (year > rightYear || (year === rightYear && month >= rightMonth)) {
            const nextMonthYear = getNextMonth(month, year);
            setRightMonth(nextMonthYear.month);
            setRightYear(nextMonthYear.year);
        }
    };
    const handleRightMonthYearChange = (month, year) => {
        setRightMonth(month);
        setRightYear(year);
        // Ensure left calendar is always at least one month behind
        if (year < leftYear || (year === leftYear && month <= leftMonth)) {
            const prevMonthYear = getPreviousMonth(month, year);
            setLeftMonth(prevMonthYear.month);
            setLeftYear(prevMonthYear.year);
        }
    };
    const isDateInRange = (date) => {
        if (!(selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.startDate) || !(selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.endDate))
            return false;
        const dateTime = new Date(date.year, date.month, date.day).getTime();
        const startTime = new Date(selectedRange.startDate.year, selectedRange.startDate.month, selectedRange.startDate.day).getTime();
        const endTime = new Date(selectedRange.endDate.year, selectedRange.endDate.month, selectedRange.endDate.day).getTime();
        // Only return true for dates between start and end (excluding start and end themselves)
        return dateTime > startTime && dateTime < endTime;
    };
    const isDateSelected = (date) => {
        // Don't mark dates as selected if they are range start/end - let them use range classes instead
        return false;
    };
    const isDateRangeStart = (date) => {
        if (!(selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.startDate))
            return false;
        return selectedRange.startDate.year === date.year &&
            selectedRange.startDate.month === date.month &&
            selectedRange.startDate.day === date.day;
    };
    const isDateRangeEnd = (date) => {
        if (!(selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.endDate))
            return false;
        return selectedRange.endDate.year === date.year &&
            selectedRange.endDate.month === date.month &&
            selectedRange.endDate.day === date.day;
    };
    return (jsx("div", { className: "date-range-picker-content", children: jsxs("div", { className: "date-pickers", children: [jsx("div", { className: "left-picker", children: jsx(DatePickerContent, { minYear: minYear, maxYear: maxYear, disabled: disabled, disabledDates: disabledDates, showOtherMonthDays: showOtherMonthDays, displayMonth: leftMonth, displayYear: leftYear, value: (selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.startDate) || null, isDateInRange: isDateInRange, isDateSelected: isDateSelected, isDateRangeStart: isDateRangeStart, isDateRangeEnd: isDateRangeEnd, onChange: handleLeftDateSelect, onMonthYearChange: handleLeftMonthYearChange }) }), jsx("div", { className: "right-picker", children: jsx(DatePickerContent, { minYear: minYear, maxYear: maxYear, disabled: disabled, disabledDates: disabledDates, showOtherMonthDays: showOtherMonthDays, displayMonth: rightMonth, displayYear: rightYear, value: (selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.endDate) || null, isDateInRange: isDateInRange, isDateSelected: isDateSelected, isDateRangeStart: isDateRangeStart, isDateRangeEnd: isDateRangeEnd, onChange: handleRightDateSelect, onMonthYearChange: handleRightMonthYearChange }) })] }) }));
};

const DateRangePicker = ({ variant = 'input', minYear = 1998, maxYear = 2060, disabled = false, disabledDates = [], startLabel = 'Start Date', endLabel = 'End Date', startPlaceholder = 'Choose start date', endPlaceholder = 'Choose end date', inputWidth = '200px', showLabel = true, showFooter = true, showOtherMonthDays = false, value, onChange, onDateRangeSelect, }) => {
    const [selectedValue, setSelectedValue] = React.useState(value || null);
    const [tempSelection, setTempSelection] = React.useState(null);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMenuClosing, setIsMenuClosing] = React.useState(false);
    const containerRef = React.useRef(null);
    // Sync with external value prop
    React.useEffect(() => {
        if (value !== undefined) {
            setSelectedValue(value);
        }
    }, [value]);
    const formatDate = (date) => {
        if (!date)
            return '';
        // Format as MM/DD/YYYY
        const month = (date.month + 1).toString().padStart(2, '0');
        const day = date.day.toString().padStart(2, '0');
        return `${month}/${day}/${date.year}`;
    };
    const getButtonLabel = () => {
        if (!selectedValue || !selectedValue.startDate)
            return 'Select date range';
        const startStr = formatDate(selectedValue.startDate);
        const endStr = selectedValue.endDate ? formatDate(selectedValue.endDate) : '';
        if (endStr) {
            return `${startStr} - ${endStr}`;
        }
        return startStr;
    };
    const handleTriggerClick = () => {
        if (disabled)
            return;
        if (!isMenuOpen && showFooter) {
            setTempSelection(selectedValue);
        }
        setIsMenuOpen(!isMenuOpen);
    };
    const handleDateRangeSelect = (range) => {
        if (showFooter && range) {
            // With footer: just update temp selection, don't apply yet
            setTempSelection(range);
        }
        else {
            // Without footer: immediately apply and close
            setSelectedValue(range);
            onChange === null || onChange === void 0 ? void 0 : onChange(range);
            onDateRangeSelect === null || onDateRangeSelect === void 0 ? void 0 : onDateRangeSelect(range);
            if (!showFooter) {
                closeMenu();
            }
        }
    };
    const handleMenuCancel = () => {
        setTempSelection(null);
        closeMenu();
    };
    const handleMenuApply = () => {
        if (tempSelection) {
            setSelectedValue(tempSelection);
            onChange === null || onChange === void 0 ? void 0 : onChange(tempSelection);
            onDateRangeSelect === null || onDateRangeSelect === void 0 ? void 0 : onDateRangeSelect(tempSelection);
            setTempSelection(null);
        }
        closeMenu();
    };
    const closeMenu = () => {
        setIsMenuClosing(true);
        setTimeout(() => {
            setIsMenuOpen(false);
            setIsMenuClosing(false);
        }, 150);
    };
    const handleBackdropClick = () => {
        handleMenuCancel();
    };
    return (jsxs(Fragment, { children: [jsxs("div", { className: "date-range-picker-container", ref: containerRef, children: [variant === 'dropdown-outlined' && (jsx("div", { className: "date-range-picker-trigger", onClick: handleTriggerClick, children: jsx(Button, { hierarchy: "secondary", type: "outline", size: "sm", icon: "trailing", label: getButtonLabel(), iconName: "expand_more", disabled: disabled }) })), variant === 'dropdown-ghost' && (jsx("div", { className: "date-range-picker-trigger", onClick: handleTriggerClick, children: jsx(Button, { hierarchy: "tertiary", type: "ghost", size: "sm", icon: "trailing", label: getButtonLabel(), iconName: "expand_more", disabled: disabled }) })), variant === 'input' && (jsx("div", { className: "date-range-picker-trigger", children: jsxs("div", { className: "date-range-inputs", onClick: handleTriggerClick, children: [jsx(InputText, { label: startLabel, placeholder: startPlaceholder, value: formatDate((selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.startDate) || null), disabled: disabled, showTrailingIcon: true, trailingIcon: "calendar_today", showHelpIcon: false, showHintText: false, showLabel: showLabel, width: inputWidth, readOnly: true }), jsx(InputText, { label: endLabel, placeholder: endPlaceholder, value: formatDate((selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.endDate) || null), disabled: disabled, showTrailingIcon: true, trailingIcon: "calendar_today", showHelpIcon: false, showHintText: false, showLabel: showLabel, width: inputWidth, readOnly: true })] }) })), jsx("div", { className: "date-range-picker-menu-container", children: jsx(PickerMenu, { visible: isMenuOpen, showFooter: showFooter, disableApply: showFooter && (!(tempSelection === null || tempSelection === void 0 ? void 0 : tempSelection.startDate) || !(tempSelection === null || tempSelection === void 0 ? void 0 : tempSelection.endDate)), onCancel: handleMenuCancel, onApply: handleMenuApply, children: jsx(DateRangePickerContent, { minYear: minYear, maxYear: maxYear, disabled: disabled, disabledDates: disabledDates, showOtherMonthDays: showOtherMonthDays, value: tempSelection || selectedValue, onChange: handleDateRangeSelect, onDateRangeSelect: handleDateRangeSelect }) }) })] }), (isMenuOpen || isMenuClosing) && (jsx("div", { className: "date-range-picker-backdrop", onClick: handleBackdropClick }))] }));
};

const getSvgDimensions = (size) => {
    switch (size) {
        case 'sm':
            return { width: 120, height: 120 };
        case 'md':
            return { width: 160, height: 160 };
        case 'lg':
            return { width: 200, height: 200 };
        case 'xl':
            return { width: 280, height: 280 };
        case '2xl':
            return { width: 360, height: 360 };
        case '3xl':
            return { width: 480, height: 480 };
        case '4xl':
            return { width: 600, height: 600 };
        default:
            return { width: 200, height: 200 };
    }
};
const Illustrations = ({ size = 'lg', title = '', description = '', svgPath = '/illustrations/Search-not-found.svg', alt = 'Illustration', className, }) => {
    const dimensions = getSvgDimensions(size);
    const classNames = ['illustration', `illustration-${size}`, className].filter(Boolean).join(' ');
    return (jsx("div", { className: classNames, children: jsxs("div", { className: "illustration-wrapper", children: [jsx("div", { className: "illustration-svg-container", style: {
                        width: `${dimensions.width}px`,
                        height: `${dimensions.height}px`,
                    }, children: jsx("img", { src: svgPath, alt: alt, style: {
                            width: `${dimensions.width}px`,
                            height: `${dimensions.height}px`,
                        }, className: "illustration-image" }) }), (title || description) && (jsxs("div", { className: "illustration-content", children: [title && jsx("h3", { className: "illustration-title", children: title }), description && jsx("p", { className: "illustration-description", children: description })] }))] }) }));
};
Illustrations.displayName = 'Illustrations';

const EmptyState = ({ title = 'No items found', description = 'There are no items to display at the moment.', illustrationSize = 'md', illustrationPath = '/illustrations/Search-not-found.svg', actions = [], maxWidth = '512px', }) => {
    const handleActionClick = (action) => {
        action.action();
    };
    return (jsxs("div", { className: "empty-state", style: { maxWidth }, children: [jsxs("div", { className: "empty-state-content", children: [jsx("div", { className: "empty-state-illustration", children: jsx(Illustrations, { size: illustrationSize, svgPath: illustrationPath, alt: "Empty state illustration" }) }), jsxs("div", { className: "empty-state-text", children: [jsx("h3", { className: "empty-state-title", children: title }), jsx("p", { className: "empty-state-description", children: description })] })] }), actions.length > 0 && (jsx("div", { className: "empty-state-actions", children: actions.map((action, index) => (jsx(Button, { hierarchy: action.type, type: action.type === 'secondary' ? 'outline' : 'solid', size: "md", label: action.label, iconName: action.icon, icon: action.icon ? 'leading' : 'none', onClick: () => handleActionClick(action) }, index))) }))] }));
};
EmptyState.displayName = 'EmptyState';

export { Appbar, AutocompleteMenu, Avatar, AvatarAdd, AvatarStacked, Badge, BadgeDot, BarChart, BarChartCard, Breadcrumbs, Button, ButtonIcon, ChartTooltip, Checkbox, CheckboxLabel, Container, ContainerFooter, DatePicker, DatePickerContent, DateRangePicker, DateRangePickerContent, Dropdown, DropdownMenu, EmptyState, FeaturedIcon, Illustrations, InputAutocomplete, InputNumber, InputPassword, InputText, InputVerification, LoaderSpinner, LogoBox, MonthPicker, MonthPickerContent, NavItem, Notification, PageNavigation, PageNavigationChild, PageNavigationSingleLevel, PickerMenu, PieChart, PieChartCard, ProductSwitcher, PropertySwitcher, RadioButton, RadioButtonLabel, Sidebar, SkeletonLoader, Tag, Textarea, Toggle, Tooltip, TrendChart, TrendChartCard };
//# sourceMappingURL=index.mjs.map
