import * as i0 from '@angular/core';
import { EventEmitter, ContentChild, Output, Input, Component, HostListener, ChangeDetectionStrategy, ViewChild, Injectable, ElementRef, forwardRef, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class PopoverComponent {
    constructor() {
        this.title = 'Brand Name';
        this.viewPortfolioText = 'view portfolio';
        this.searchPlaceholder = 'Search by name or region';
        this.items = [];
        this.width = '240px';
        this.showSearch = true;
        this.showAvatar = true;
        this.itemSelect = new EventEmitter();
        this.portfolioClick = new EventEmitter();
        this.searchChange = new EventEmitter();
        this.searchTerm = '';
    }
    onItemClick(item) {
        if (item.type !== 'header') {
            this.itemSelect.emit(item);
        }
    }
    onPortfolioClick() {
        this.portfolioClick.emit();
    }
    onSearchInput(event) {
        const target = event.target;
        this.searchTerm = target.value;
        this.searchChange.emit(this.searchTerm);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: PopoverComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: PopoverComponent, isStandalone: true, selector: "app-popover", inputs: { title: "title", viewPortfolioText: "viewPortfolioText", searchPlaceholder: "searchPlaceholder", items: "items", width: "width", showSearch: "showSearch", showAvatar: "showAvatar" }, outputs: { itemSelect: "itemSelect", portfolioClick: "portfolioClick", searchChange: "searchChange" }, queries: [{ propertyName: "avatarTemplate", first: true, predicate: ["avatarTemplate"], descendants: true }], ngImport: i0, template: "<div class=\"popover\" [style.width]=\"width\">\n  <div class=\"popover-content\">\n    <div class=\"popover-menu\">\n      <!-- Header with Brand/Avatar -->\n      <div class=\"popover-header\" *ngIf=\"showAvatar\">\n        <div class=\"avatar-group\">\n          <div class=\"avatar\" *ngIf=\"!avatarTemplate\">\n            <!-- Default avatar -->\n          </div>\n          <ng-container *ngIf=\"avatarTemplate\">\n            <ng-container [ngTemplateOutlet]=\"avatarTemplate\"></ng-container>\n          </ng-container>\n          <div class=\"brand-info\">\n            <div class=\"brand-name\">{{ title }}</div>\n            <button\n              class=\"portfolio-link\"\n              (click)=\"onPortfolioClick()\"\n              *ngIf=\"viewPortfolioText\"\n            >\n              {{ viewPortfolioText }}\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <!-- Search Input -->\n      <div class=\"search-container\" *ngIf=\"showSearch\">\n        <div class=\"search-input\">\n          <div class=\"search-content\">\n            <span class=\"material-symbols-outlined search-icon\">search</span>\n            <input\n              type=\"text\"\n              [placeholder]=\"searchPlaceholder\"\n              [value]=\"searchTerm\"\n              (input)=\"onSearchInput($event)\"\n              class=\"search-field\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <!-- Menu Items -->\n      <div class=\"menu-items\">\n        <ng-container *ngFor=\"let item of items\">\n          <!-- Header Item -->\n          <div class=\"menu-header\" *ngIf=\"item.type === 'header'\">\n            {{ item.label }}\n          </div>\n\n          <!-- Regular Item -->\n          <div class=\"menu-item-container\" *ngIf=\"item.type !== 'header'\">\n            <button\n              class=\"menu-item\"\n              [class.selected]=\"item.selected\"\n              [class.menu-item-portfolio]=\"item.type === 'portfolio'\"\n              [class.menu-item-region]=\"item.type === 'region'\"\n              [class.menu-item-property]=\"item.type === 'property'\"\n              (click)=\"onItemClick(item)\"\n            >\n              {{ item.label }}\n            </button>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".popover{position:relative;border-radius:var(--radius-md);width:320px}.popover-content{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;width:100%;height:100%}.popover-menu{background-color:#fff;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;border-radius:var(--radius-md);flex-shrink:0;width:100%;max-height:400px;border:1px solid #dcdfea;box-shadow:var(--shadow-popover)}.popover-header{box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--spacing-lg) var(--spacing-xl);position:relative;flex-shrink:0;width:100%;border-bottom:1px solid #dcdfea}.avatar-group{display:flex;gap:var(--spacing-lg);align-items:center;justify-content:flex-start;position:relative;flex-shrink:0;width:100%}.avatar{background-color:#fff;position:relative;border-radius:var(--radius-full);flex-shrink:0;width:40px;height:40px;border:.75px solid rgba(0,0,0,.01)}.brand-info{flex-basis:0;display:flex;flex-direction:column;flex-grow:1;align-items:flex-start;justify-content:flex-start;line-height:0;min-height:1px;min-width:1px;position:relative;flex-shrink:0}.brand-name{font-family:var(--font-inter);font-weight:600;position:relative;flex-shrink:0;color:#404968;font-size:14px;line-height:20px;width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.portfolio-link{font-family:var(--font-inter);font-weight:400;position:relative;flex-shrink:0;color:#2642cf;font-size:14px;line-height:20px;width:100%;text-decoration:underline;text-decoration-skip-ink:none;text-underline-position:from-font;background:none;border:none;cursor:pointer;text-align:left;padding:0}.portfolio-link:hover{color:#1a2bb8}.search-container{box-sizing:border-box;display:flex;flex-direction:column;gap:6px;align-items:center;justify-content:center;overflow:visible;padding:0;position:relative;flex-shrink:0;width:100%}.search-input{display:flex;flex-direction:column;gap:var(--spacing-sm);padding:var(--spacing-xs) var(--spacing-none) var(--spacing-none) var(--spacing-lg);align-items:flex-start;justify-content:flex-start;position:relative;flex-shrink:0;width:100%}.search-content{background-color:#fff;box-sizing:border-box;display:flex;gap:var(--spacing-md);height:var(--spacing-4xl);align-items:center;justify-content:flex-start;overflow:hidden;padding:var(--spacing-none);position:relative;border-radius:var(--radius-md);flex-shrink:0;width:100%;border:none}.search-icon{width:20px;height:20px;flex-shrink:0}.search-field{flex-basis:0;font-family:var(--font-inter);font-weight:500;flex-grow:1;line-height:0;min-height:1px;min-width:1px;overflow:hidden;text-overflow:ellipsis;position:relative;flex-shrink:0;color:#5d6b98;font-size:14px;line-height:20px;white-space:nowrap;border:none;outline:none;background:none}.search-field::placeholder{color:#5d6b98}.menu-items{box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow-y:auto;padding:var(--spacing-xs) var(--spacing-none);position:relative;flex-grow:1;width:100%;max-height:220px}.menu-header{box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--spacing-lg) var(--spacing-xl);position:relative;flex-shrink:0;width:100%;border-top:1px solid #dcdfea;border-bottom:1px solid #dcdfea;font-family:var(--font-inter);font-weight:600;line-height:0;color:#404968;font-size:14px;line-height:20px}.menu-item-container{box-sizing:border-box;display:flex;align-items:center;justify-content:flex-start;padding:var(--spacing-xxs) var(--spacing-sm);position:relative;flex-shrink:0;width:100%}.menu-item{flex-basis:0;box-sizing:border-box;display:flex;flex-grow:1;align-items:center;justify-content:flex-start;min-height:1px;min-width:1px;overflow:hidden;padding:var(--spacing-md) var(--spacing-lg);position:relative;border-radius:var(--radius-sm);flex-shrink:0;font-family:var(--font-inter);font-weight:500;line-height:0;color:#404968;font-size:14px;line-height:20px;background:none;border:none;cursor:pointer;text-align:left;width:100%;transition:all .2s ease}.menu-item:hover,.menu-item.selected{background-color:#f9f9fb;color:#30374f}.menu-item-portfolio{font-weight:600;color:#2642cf}.menu-item-region{font-weight:500;padding-left:26px;color:#404968;font-size:13px}.menu-item-property{color:#5d6b98;font-size:13px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: PopoverComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-popover', standalone: true, imports: [CommonModule], template: "<div class=\"popover\" [style.width]=\"width\">\n  <div class=\"popover-content\">\n    <div class=\"popover-menu\">\n      <!-- Header with Brand/Avatar -->\n      <div class=\"popover-header\" *ngIf=\"showAvatar\">\n        <div class=\"avatar-group\">\n          <div class=\"avatar\" *ngIf=\"!avatarTemplate\">\n            <!-- Default avatar -->\n          </div>\n          <ng-container *ngIf=\"avatarTemplate\">\n            <ng-container [ngTemplateOutlet]=\"avatarTemplate\"></ng-container>\n          </ng-container>\n          <div class=\"brand-info\">\n            <div class=\"brand-name\">{{ title }}</div>\n            <button\n              class=\"portfolio-link\"\n              (click)=\"onPortfolioClick()\"\n              *ngIf=\"viewPortfolioText\"\n            >\n              {{ viewPortfolioText }}\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <!-- Search Input -->\n      <div class=\"search-container\" *ngIf=\"showSearch\">\n        <div class=\"search-input\">\n          <div class=\"search-content\">\n            <span class=\"material-symbols-outlined search-icon\">search</span>\n            <input\n              type=\"text\"\n              [placeholder]=\"searchPlaceholder\"\n              [value]=\"searchTerm\"\n              (input)=\"onSearchInput($event)\"\n              class=\"search-field\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <!-- Menu Items -->\n      <div class=\"menu-items\">\n        <ng-container *ngFor=\"let item of items\">\n          <!-- Header Item -->\n          <div class=\"menu-header\" *ngIf=\"item.type === 'header'\">\n            {{ item.label }}\n          </div>\n\n          <!-- Regular Item -->\n          <div class=\"menu-item-container\" *ngIf=\"item.type !== 'header'\">\n            <button\n              class=\"menu-item\"\n              [class.selected]=\"item.selected\"\n              [class.menu-item-portfolio]=\"item.type === 'portfolio'\"\n              [class.menu-item-region]=\"item.type === 'region'\"\n              [class.menu-item-property]=\"item.type === 'property'\"\n              (click)=\"onItemClick(item)\"\n            >\n              {{ item.label }}\n            </button>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".popover{position:relative;border-radius:var(--radius-md);width:320px}.popover-content{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;width:100%;height:100%}.popover-menu{background-color:#fff;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow:hidden;position:relative;border-radius:var(--radius-md);flex-shrink:0;width:100%;max-height:400px;border:1px solid #dcdfea;box-shadow:var(--shadow-popover)}.popover-header{box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--spacing-lg) var(--spacing-xl);position:relative;flex-shrink:0;width:100%;border-bottom:1px solid #dcdfea}.avatar-group{display:flex;gap:var(--spacing-lg);align-items:center;justify-content:flex-start;position:relative;flex-shrink:0;width:100%}.avatar{background-color:#fff;position:relative;border-radius:var(--radius-full);flex-shrink:0;width:40px;height:40px;border:.75px solid rgba(0,0,0,.01)}.brand-info{flex-basis:0;display:flex;flex-direction:column;flex-grow:1;align-items:flex-start;justify-content:flex-start;line-height:0;min-height:1px;min-width:1px;position:relative;flex-shrink:0}.brand-name{font-family:var(--font-inter);font-weight:600;position:relative;flex-shrink:0;color:#404968;font-size:14px;line-height:20px;width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.portfolio-link{font-family:var(--font-inter);font-weight:400;position:relative;flex-shrink:0;color:#2642cf;font-size:14px;line-height:20px;width:100%;text-decoration:underline;text-decoration-skip-ink:none;text-underline-position:from-font;background:none;border:none;cursor:pointer;text-align:left;padding:0}.portfolio-link:hover{color:#1a2bb8}.search-container{box-sizing:border-box;display:flex;flex-direction:column;gap:6px;align-items:center;justify-content:center;overflow:visible;padding:0;position:relative;flex-shrink:0;width:100%}.search-input{display:flex;flex-direction:column;gap:var(--spacing-sm);padding:var(--spacing-xs) var(--spacing-none) var(--spacing-none) var(--spacing-lg);align-items:flex-start;justify-content:flex-start;position:relative;flex-shrink:0;width:100%}.search-content{background-color:#fff;box-sizing:border-box;display:flex;gap:var(--spacing-md);height:var(--spacing-4xl);align-items:center;justify-content:flex-start;overflow:hidden;padding:var(--spacing-none);position:relative;border-radius:var(--radius-md);flex-shrink:0;width:100%;border:none}.search-icon{width:20px;height:20px;flex-shrink:0}.search-field{flex-basis:0;font-family:var(--font-inter);font-weight:500;flex-grow:1;line-height:0;min-height:1px;min-width:1px;overflow:hidden;text-overflow:ellipsis;position:relative;flex-shrink:0;color:#5d6b98;font-size:14px;line-height:20px;white-space:nowrap;border:none;outline:none;background:none}.search-field::placeholder{color:#5d6b98}.menu-items{box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;overflow-y:auto;padding:var(--spacing-xs) var(--spacing-none);position:relative;flex-grow:1;width:100%;max-height:220px}.menu-header{box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:var(--spacing-lg) var(--spacing-xl);position:relative;flex-shrink:0;width:100%;border-top:1px solid #dcdfea;border-bottom:1px solid #dcdfea;font-family:var(--font-inter);font-weight:600;line-height:0;color:#404968;font-size:14px;line-height:20px}.menu-item-container{box-sizing:border-box;display:flex;align-items:center;justify-content:flex-start;padding:var(--spacing-xxs) var(--spacing-sm);position:relative;flex-shrink:0;width:100%}.menu-item{flex-basis:0;box-sizing:border-box;display:flex;flex-grow:1;align-items:center;justify-content:flex-start;min-height:1px;min-width:1px;overflow:hidden;padding:var(--spacing-md) var(--spacing-lg);position:relative;border-radius:var(--radius-sm);flex-shrink:0;font-family:var(--font-inter);font-weight:500;line-height:0;color:#404968;font-size:14px;line-height:20px;background:none;border:none;cursor:pointer;text-align:left;width:100%;transition:all .2s ease}.menu-item:hover,.menu-item.selected{background-color:#f9f9fb;color:#30374f}.menu-item-portfolio{font-weight:600;color:#2642cf}.menu-item-region{font-weight:500;padding-left:26px;color:#404968;font-size:13px}.menu-item-property{color:#5d6b98;font-size:13px}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], viewPortfolioText: [{
                type: Input
            }], searchPlaceholder: [{
                type: Input
            }], items: [{
                type: Input
            }], width: [{
                type: Input
            }], showSearch: [{
                type: Input
            }], showAvatar: [{
                type: Input
            }], itemSelect: [{
                type: Output
            }], portfolioClick: [{
                type: Output
            }], searchChange: [{
                type: Output
            }], avatarTemplate: [{
                type: ContentChild,
                args: ['avatarTemplate']
            }] } });

class AvatarComponent {
    constructor() {
        this.size = 'md';
        this.type = 'image';
        this.status = 'none';
        this.text = 'RD';
        this.imageSrc = '/bellhopos/assets/avatars/regionalDirector.png';
        this.alt = 'Avatar';
    }
    get avatarClasses() {
        const classes = ['avatar', `avatar-${this.size}`];
        if (this.status !== 'none') {
            classes.push('avatar-with-status');
        }
        return classes.join(' ');
    }
    get statusClasses() {
        return `avatar-status avatar-status-${this.size} ${this.status === 'online' ? 'avatar-status-online' : ''}`;
    }
    get textSizeClass() {
        switch (this.size) {
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
    }
    get iconSizeClass() {
        switch (this.size) {
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
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: AvatarComponent, isStandalone: true, selector: "app-avatar", inputs: { size: "size", type: "type", status: "status", text: "text", imageSrc: "imageSrc", alt: "alt" }, ngImport: i0, template: "<div [ngClass]=\"avatarClasses\">\n  <!-- Contrast border -->\n  <div class=\"avatar-border\"></div>\n\n  <!-- Avatar content -->\n  <div class=\"avatar-content\">\n    <!-- Image avatar -->\n    <img\n      *ngIf=\"type === 'image'\"\n      [src]=\"imageSrc\"\n      [alt]=\"alt\"\n      class=\"avatar-image\"\n    />\n\n    <!-- Placeholder avatar -->\n    <span\n      *ngIf=\"type === 'placeholder'\"\n      class=\"material-symbols-outlined avatar-placeholder-icon\"\n      [ngClass]=\"iconSizeClass\"\n    >\n      person\n    </span>\n\n    <!-- Text avatar -->\n    <span *ngIf=\"type === 'text'\" class=\"avatar-text\" [ngClass]=\"textSizeClass\">\n      {{ text }}\n    </span>\n  </div>\n\n  <!-- Status indicator -->\n  <div *ngIf=\"status === 'online'\" [ngClass]=\"statusClasses\"></div>\n</div>\n", styles: [".avatar{position:relative;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;background-color:var(--color-neutral-100);flex-shrink:0}.avatar-xxs{width:16px;height:16px}.avatar-xs{width:24px;height:24px}.avatar-sm{width:32px;height:32px}.avatar-md{width:40px;height:40px}.avatar-lg{width:48px;height:48px}.avatar-xl{width:56px;height:56px}.avatar-2xl{width:64px;height:64px}.avatar-border{position:absolute;inset:0;border-radius:50%;pointer-events:none;z-index:1}.avatar-xs .avatar-border,.avatar-sm .avatar-border{border:.5px solid rgba(0,0,0,.08)}.avatar-md .avatar-border,.avatar-lg .avatar-border,.avatar-xl .avatar-border,.avatar-2xl .avatar-border{border:.75px solid rgba(0,0,0,.08)}.avatar-content{position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-radius:50%;overflow:hidden;z-index:0}.avatar-image{width:100%;height:100%;object-fit:cover;border-radius:50%}.avatar-placeholder-icon{color:var(--color-neutral-500);line-height:1;display:flex;align-items:center;justify-content:center}.avatar-text{color:var(--color-neutral-500);font-family:var(--font-inter);font-weight:var(--weight-semibold);text-align:center;line-height:1}.text-xs{font-size:12px;line-height:1.5em}.text-sm{font-size:14px;line-height:1.43em}.text-md{font-size:16px;line-height:1.5em}.text-lg{font-size:18px;line-height:1.56em}.text-xl{font-size:20px;line-height:1.5em}.text-2xl{font-size:24px;line-height:1.33em}.icon-3xl,.icon-4xl{font-size:32px}.avatar-status{position:absolute;border-radius:50%;background-color:var(--color-success-500);border:1.5px solid var(--color-white);z-index:2}.avatar-status-online{background-color:var(--color-success-500)}.avatar-status-xxs{width:4px;height:4px;bottom:0;right:0}.avatar-status-xs{width:6px;height:6px;bottom:0;right:0}.avatar-status-sm{width:8px;height:8px;bottom:0;right:0}.avatar-status-md{width:10px;height:10px;bottom:0;right:0}.avatar-status-lg{width:12px;height:12px;bottom:0;right:0}.avatar-status-xl{width:14px;height:14px;bottom:0;right:0}.avatar-status-2xl{width:16px;height:16px;bottom:0;right:0}:host(.dropdown-avatar) .avatar{transition:box-shadow .15s ease}:host(.dropdown-avatar:hover) .avatar{box-shadow:0 0 0 2px var(--color-brand-500)!important}:host(.dropdown-avatar-focus) .avatar{box-shadow:0 0 0 2px var(--color-brand-500)!important}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-avatar', standalone: true, imports: [CommonModule], template: "<div [ngClass]=\"avatarClasses\">\n  <!-- Contrast border -->\n  <div class=\"avatar-border\"></div>\n\n  <!-- Avatar content -->\n  <div class=\"avatar-content\">\n    <!-- Image avatar -->\n    <img\n      *ngIf=\"type === 'image'\"\n      [src]=\"imageSrc\"\n      [alt]=\"alt\"\n      class=\"avatar-image\"\n    />\n\n    <!-- Placeholder avatar -->\n    <span\n      *ngIf=\"type === 'placeholder'\"\n      class=\"material-symbols-outlined avatar-placeholder-icon\"\n      [ngClass]=\"iconSizeClass\"\n    >\n      person\n    </span>\n\n    <!-- Text avatar -->\n    <span *ngIf=\"type === 'text'\" class=\"avatar-text\" [ngClass]=\"textSizeClass\">\n      {{ text }}\n    </span>\n  </div>\n\n  <!-- Status indicator -->\n  <div *ngIf=\"status === 'online'\" [ngClass]=\"statusClasses\"></div>\n</div>\n", styles: [".avatar{position:relative;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;background-color:var(--color-neutral-100);flex-shrink:0}.avatar-xxs{width:16px;height:16px}.avatar-xs{width:24px;height:24px}.avatar-sm{width:32px;height:32px}.avatar-md{width:40px;height:40px}.avatar-lg{width:48px;height:48px}.avatar-xl{width:56px;height:56px}.avatar-2xl{width:64px;height:64px}.avatar-border{position:absolute;inset:0;border-radius:50%;pointer-events:none;z-index:1}.avatar-xs .avatar-border,.avatar-sm .avatar-border{border:.5px solid rgba(0,0,0,.08)}.avatar-md .avatar-border,.avatar-lg .avatar-border,.avatar-xl .avatar-border,.avatar-2xl .avatar-border{border:.75px solid rgba(0,0,0,.08)}.avatar-content{position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-radius:50%;overflow:hidden;z-index:0}.avatar-image{width:100%;height:100%;object-fit:cover;border-radius:50%}.avatar-placeholder-icon{color:var(--color-neutral-500);line-height:1;display:flex;align-items:center;justify-content:center}.avatar-text{color:var(--color-neutral-500);font-family:var(--font-inter);font-weight:var(--weight-semibold);text-align:center;line-height:1}.text-xs{font-size:12px;line-height:1.5em}.text-sm{font-size:14px;line-height:1.43em}.text-md{font-size:16px;line-height:1.5em}.text-lg{font-size:18px;line-height:1.56em}.text-xl{font-size:20px;line-height:1.5em}.text-2xl{font-size:24px;line-height:1.33em}.icon-3xl,.icon-4xl{font-size:32px}.avatar-status{position:absolute;border-radius:50%;background-color:var(--color-success-500);border:1.5px solid var(--color-white);z-index:2}.avatar-status-online{background-color:var(--color-success-500)}.avatar-status-xxs{width:4px;height:4px;bottom:0;right:0}.avatar-status-xs{width:6px;height:6px;bottom:0;right:0}.avatar-status-sm{width:8px;height:8px;bottom:0;right:0}.avatar-status-md{width:10px;height:10px;bottom:0;right:0}.avatar-status-lg{width:12px;height:12px;bottom:0;right:0}.avatar-status-xl{width:14px;height:14px;bottom:0;right:0}.avatar-status-2xl{width:16px;height:16px;bottom:0;right:0}:host(.dropdown-avatar) .avatar{transition:box-shadow .15s ease}:host(.dropdown-avatar:hover) .avatar{box-shadow:0 0 0 2px var(--color-brand-500)!important}:host(.dropdown-avatar-focus) .avatar{box-shadow:0 0 0 2px var(--color-brand-500)!important}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], type: [{
                type: Input
            }], status: [{
                type: Input
            }], text: [{
                type: Input
            }], imageSrc: [{
                type: Input
            }], alt: [{
                type: Input
            }] } });

class DropdownMenuComponent {
    constructor() {
        this.menuItems = [];
        this.visible = true;
        this.showIcons = true;
        this.scrollable = false;
        this.itemClick = new EventEmitter();
        this.isAnimating = false;
        this.shouldRender = this.visible;
    }
    ngOnChanges(changes) {
        if (changes['visible']) {
            this.handleVisibilityChange(changes['visible'].currentValue);
        }
    }
    ngOnInit() {
        this.shouldRender = this.visible;
    }
    handleVisibilityChange(isVisible) {
        if (isVisible) {
            this.shouldRender = true;
            this.isAnimating = false;
        }
        else {
            this.isAnimating = true;
            setTimeout(() => {
                this.shouldRender = false;
                this.isAnimating = false;
            }, 150);
        }
    }
    getDropdownClasses() {
        const classes = ['dropdown-menu', 'animate-base'];
        if (this.isAnimating && !this.visible) {
            classes.push('animate-dropdown-exit');
        }
        else if (this.visible) {
            classes.push('animate-dropdown-enter');
        }
        if (this.scrollable) {
            classes.push('dropdown-menu-scrollable');
        }
        return classes.join(' ');
    }
    shouldShowDropdown() {
        return this.shouldRender;
    }
    getHeaderClasses() {
        const classes = ['dropdown-header'];
        if (this.header?.avatarGroup) {
            classes.push('dropdown-header-avatar');
        }
        return classes.join(' ');
    }
    getMenuItemClasses(item) {
        const classes = ['dropdown-item'];
        if (item.disabled) {
            classes.push('dropdown-item-disabled');
        }
        return classes.join(' ');
    }
    shouldShowIcons() {
        return this.showIcons;
    }
    onItemClick(item) {
        if (!item.disabled && !item.divider) {
            this.itemClick.emit(item);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: DropdownMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: DropdownMenuComponent, isStandalone: true, selector: "app-dropdown-menu", inputs: { header: "header", menuItems: "menuItems", visible: "visible", showIcons: "showIcons", scrollable: "scrollable" }, outputs: { itemClick: "itemClick" }, usesOnChanges: true, ngImport: i0, template: "<div [ngClass]=\"getDropdownClasses()\" *ngIf=\"shouldShowDropdown()\">\n  <!-- Header Section -->\n  <div *ngIf=\"header\" [ngClass]=\"getHeaderClasses()\">\n    <!-- Avatar Group Header -->\n    <div *ngIf=\"header.avatarGroup\" class=\"avatar-group\">\n      <app-avatar\n        size=\"md\"\n        type=\"image\"\n        status=\"online\"\n        [imageSrc]=\"header.avatarSrc || ''\"\n        [alt]=\"header.name || 'Avatar'\"\n      >\n      </app-avatar>\n      <div class=\"avatar-text\">\n        <div class=\"avatar-name\">{{ header.name }}</div>\n        <div class=\"avatar-email\">{{ header.email }}</div>\n      </div>\n    </div>\n    <!-- Simple Text Header -->\n    <div *ngIf=\"!header.avatarGroup && header.title\" class=\"header-title\">\n      {{ header.title }}\n    </div>\n  </div>\n\n  <!-- Menu Items Section -->\n  <div class=\"menu-items\">\n    <ng-container *ngFor=\"let item of menuItems\">\n      <!-- Divider -->\n      <div *ngIf=\"item.divider\" class=\"menu-divider\"></div>\n\n      <!-- Menu Item -->\n      <div\n        *ngIf=\"!item.divider\"\n        [ngClass]=\"getMenuItemClasses(item)\"\n        (click)=\"onItemClick(item)\"\n      >\n        <div class=\"item-content\">\n          <div class=\"item-main\">\n            <span\n              *ngIf=\"item.icon && shouldShowIcons()\"\n              class=\"material-symbols-outlined item-icon\"\n              >{{ item.icon }}</span\n            >\n            <span class=\"item-text\" [title]=\"item.label\">{{ item.label }}</span>\n          </div>\n          <span *ngIf=\"item.shortcut\" class=\"item-shortcut\">{{\n            item.shortcut\n          }}</span>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n", styles: [":root{--animation-duration-fast: .15s;--animation-duration-normal: .2s;--animation-duration-slow: .3s;--animation-ease-enter: cubic-bezier(.16, 1, .3, 1);--animation-ease-exit: cubic-bezier(.4, 0, 1, 1);--animation-ease-bounce: cubic-bezier(.68, -.55, .265, 1.55);--animation-ease-smooth: cubic-bezier(.25, .46, .45, .94);--animation-slide-distance: 8px;--animation-scale-start: .96;--animation-scale-end: 1}.dropdown-menu.animate-dropdown-enter{animation:dropdownEnter .2s cubic-bezier(.16,1,.3,1) forwards}.dropdown-menu.animate-dropdown-exit{animation:dropdownExit .15s cubic-bezier(.4,0,1,1) forwards}@keyframes dropdownEnter{0%{opacity:0;transform:translateY(calc(-1 * var(--spacing-md))) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes dropdownExit{0%{opacity:1;transform:translateY(0) scale(1)}to{opacity:0;transform:translateY(calc(-1 * var(--spacing-md))) scale(.96)}}.dropdown-menu{width:240px;background:var(--color-white);border-radius:var(--radius-md);box-shadow:0 32px 64px -12px #40496824,0 0 1px 1px #4049681a;border:1px solid var(--color-neutral-200);overflow:hidden}.dropdown-header{padding:var(--spacing-lg) var(--spacing-xl);border-bottom:1px solid var(--color-neutral-200)}.dropdown-header-avatar{padding:var(--spacing-lg) var(--spacing-xl)}.avatar-group{display:flex;align-items:center;gap:var(--spacing-lg);width:100%}.avatar-text{display:flex;flex-direction:column;flex:1;min-width:0}.avatar-name{font-family:var(--font-family);font-weight:600;font-size:14px;line-height:1.43;color:var(--color-neutral-800);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.avatar-email{font-family:var(--font-family);font-weight:400;font-size:14px;line-height:1.43;color:var(--color-neutral-600);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.header-title{font-family:var(--font-family);font-weight:600;font-size:14px;line-height:1.43;color:var(--color-neutral-800);margin:0}.menu-items{padding:var(--spacing-xs) 0}.dropdown-item{padding:var(--spacing-xxs) var(--spacing-sm);cursor:pointer}.dropdown-item-disabled{opacity:.5;cursor:not-allowed}.item-content{display:flex;align-items:center;gap:var(--spacing-lg);padding:var(--spacing-xl) var(--spacing-md);border-radius:var(--radius-sm);transition:background-color .15s ease}.dropdown-item:hover:not(.dropdown-item-disabled) .item-content{background:var(--color-neutral-100)}.item-main{display:flex;align-items:center;gap:var(--spacing-md);flex:1;min-width:0}.item-icon{font-size:var(--icon-size-md);color:var(--color-neutral-600);flex-shrink:0;display:flex;align-items:center;justify-content:center}.item-text{font-family:var(--font-inter);font-weight:var(--weight-medium);font-size:var(--text-md-size);line-height:var(--text-sm-line);color:var(--color-neutral-700);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}.item-shortcut{font-family:var(--font-family);font-weight:400;font-size:12px;line-height:1.5;color:var(--color-neutral-500);flex-shrink:0}.menu-divider{height:1px;background:var(--color-neutral-200);margin:var(--spacing-xs) 0}.dropdown-menu-scrollable .menu-items{max-height:280px;overflow-y:auto;overflow-x:hidden}.dropdown-menu-scrollable .menu-items::-webkit-scrollbar{width:6px}.dropdown-menu-scrollable .menu-items::-webkit-scrollbar-track{background:var(--color-neutral-50);border-radius:var(--radius-xs)}.dropdown-menu-scrollable .menu-items::-webkit-scrollbar-thumb{background:var(--color-neutral-200);border-radius:var(--radius-xs)}.dropdown-menu-scrollable .menu-items::-webkit-scrollbar-thumb:hover{background:var(--color-neutral-300)}.dropdown-menu-scrollable .menu-items{scrollbar-width:thin;scrollbar-color:var(--color-neutral-200) var(--color-neutral-50)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: AvatarComponent, selector: "app-avatar", inputs: ["size", "type", "status", "text", "imageSrc", "alt"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: DropdownMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dropdown-menu', standalone: true, imports: [CommonModule, AvatarComponent], template: "<div [ngClass]=\"getDropdownClasses()\" *ngIf=\"shouldShowDropdown()\">\n  <!-- Header Section -->\n  <div *ngIf=\"header\" [ngClass]=\"getHeaderClasses()\">\n    <!-- Avatar Group Header -->\n    <div *ngIf=\"header.avatarGroup\" class=\"avatar-group\">\n      <app-avatar\n        size=\"md\"\n        type=\"image\"\n        status=\"online\"\n        [imageSrc]=\"header.avatarSrc || ''\"\n        [alt]=\"header.name || 'Avatar'\"\n      >\n      </app-avatar>\n      <div class=\"avatar-text\">\n        <div class=\"avatar-name\">{{ header.name }}</div>\n        <div class=\"avatar-email\">{{ header.email }}</div>\n      </div>\n    </div>\n    <!-- Simple Text Header -->\n    <div *ngIf=\"!header.avatarGroup && header.title\" class=\"header-title\">\n      {{ header.title }}\n    </div>\n  </div>\n\n  <!-- Menu Items Section -->\n  <div class=\"menu-items\">\n    <ng-container *ngFor=\"let item of menuItems\">\n      <!-- Divider -->\n      <div *ngIf=\"item.divider\" class=\"menu-divider\"></div>\n\n      <!-- Menu Item -->\n      <div\n        *ngIf=\"!item.divider\"\n        [ngClass]=\"getMenuItemClasses(item)\"\n        (click)=\"onItemClick(item)\"\n      >\n        <div class=\"item-content\">\n          <div class=\"item-main\">\n            <span\n              *ngIf=\"item.icon && shouldShowIcons()\"\n              class=\"material-symbols-outlined item-icon\"\n              >{{ item.icon }}</span\n            >\n            <span class=\"item-text\" [title]=\"item.label\">{{ item.label }}</span>\n          </div>\n          <span *ngIf=\"item.shortcut\" class=\"item-shortcut\">{{\n            item.shortcut\n          }}</span>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n", styles: [":root{--animation-duration-fast: .15s;--animation-duration-normal: .2s;--animation-duration-slow: .3s;--animation-ease-enter: cubic-bezier(.16, 1, .3, 1);--animation-ease-exit: cubic-bezier(.4, 0, 1, 1);--animation-ease-bounce: cubic-bezier(.68, -.55, .265, 1.55);--animation-ease-smooth: cubic-bezier(.25, .46, .45, .94);--animation-slide-distance: 8px;--animation-scale-start: .96;--animation-scale-end: 1}.dropdown-menu.animate-dropdown-enter{animation:dropdownEnter .2s cubic-bezier(.16,1,.3,1) forwards}.dropdown-menu.animate-dropdown-exit{animation:dropdownExit .15s cubic-bezier(.4,0,1,1) forwards}@keyframes dropdownEnter{0%{opacity:0;transform:translateY(calc(-1 * var(--spacing-md))) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes dropdownExit{0%{opacity:1;transform:translateY(0) scale(1)}to{opacity:0;transform:translateY(calc(-1 * var(--spacing-md))) scale(.96)}}.dropdown-menu{width:240px;background:var(--color-white);border-radius:var(--radius-md);box-shadow:0 32px 64px -12px #40496824,0 0 1px 1px #4049681a;border:1px solid var(--color-neutral-200);overflow:hidden}.dropdown-header{padding:var(--spacing-lg) var(--spacing-xl);border-bottom:1px solid var(--color-neutral-200)}.dropdown-header-avatar{padding:var(--spacing-lg) var(--spacing-xl)}.avatar-group{display:flex;align-items:center;gap:var(--spacing-lg);width:100%}.avatar-text{display:flex;flex-direction:column;flex:1;min-width:0}.avatar-name{font-family:var(--font-family);font-weight:600;font-size:14px;line-height:1.43;color:var(--color-neutral-800);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.avatar-email{font-family:var(--font-family);font-weight:400;font-size:14px;line-height:1.43;color:var(--color-neutral-600);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.header-title{font-family:var(--font-family);font-weight:600;font-size:14px;line-height:1.43;color:var(--color-neutral-800);margin:0}.menu-items{padding:var(--spacing-xs) 0}.dropdown-item{padding:var(--spacing-xxs) var(--spacing-sm);cursor:pointer}.dropdown-item-disabled{opacity:.5;cursor:not-allowed}.item-content{display:flex;align-items:center;gap:var(--spacing-lg);padding:var(--spacing-xl) var(--spacing-md);border-radius:var(--radius-sm);transition:background-color .15s ease}.dropdown-item:hover:not(.dropdown-item-disabled) .item-content{background:var(--color-neutral-100)}.item-main{display:flex;align-items:center;gap:var(--spacing-md);flex:1;min-width:0}.item-icon{font-size:var(--icon-size-md);color:var(--color-neutral-600);flex-shrink:0;display:flex;align-items:center;justify-content:center}.item-text{font-family:var(--font-inter);font-weight:var(--weight-medium);font-size:var(--text-md-size);line-height:var(--text-sm-line);color:var(--color-neutral-700);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}.item-shortcut{font-family:var(--font-family);font-weight:400;font-size:12px;line-height:1.5;color:var(--color-neutral-500);flex-shrink:0}.menu-divider{height:1px;background:var(--color-neutral-200);margin:var(--spacing-xs) 0}.dropdown-menu-scrollable .menu-items{max-height:280px;overflow-y:auto;overflow-x:hidden}.dropdown-menu-scrollable .menu-items::-webkit-scrollbar{width:6px}.dropdown-menu-scrollable .menu-items::-webkit-scrollbar-track{background:var(--color-neutral-50);border-radius:var(--radius-xs)}.dropdown-menu-scrollable .menu-items::-webkit-scrollbar-thumb{background:var(--color-neutral-200);border-radius:var(--radius-xs)}.dropdown-menu-scrollable .menu-items::-webkit-scrollbar-thumb:hover{background:var(--color-neutral-300)}.dropdown-menu-scrollable .menu-items{scrollbar-width:thin;scrollbar-color:var(--color-neutral-200) var(--color-neutral-50)}\n"] }]
        }], propDecorators: { header: [{
                type: Input
            }], menuItems: [{
                type: Input
            }], visible: [{
                type: Input
            }], showIcons: [{
                type: Input
            }], scrollable: [{
                type: Input
            }], itemClick: [{
                type: Output
            }] } });

class PropertySwitcherComponent {
    constructor() {
        this.selectedProperty = 'Solstice Hospitality Group';
        this.properties = [];
        this.propertyChange = new EventEmitter();
        this.isExpanded = false;
        this.isClosing = false;
        this.searchTerm = '';
        this.filteredItems = [];
    }
    get dropdownMenuItems() {
        const items = [];
        this.properties.forEach((property, index) => {
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
    }
    get popoverItems() {
        const items = [];
        let currentRegion = '';
        this.properties.forEach((property) => {
            if (property.type === 'region') {
                if (currentRegion !== property.name) {
                    items.push({
                        id: property.id,
                        label: property.name,
                        type: 'header',
                    });
                    currentRegion = property.name;
                }
            }
            else if (property.type === 'property') {
                items.push({
                    id: property.id,
                    label: property.name,
                    type: 'property',
                    selected: property.name === this.selectedProperty,
                });
            }
        });
        return items;
    }
    onToggle() {
        if (this.isExpanded) {
            this.closePopover();
        }
        else {
            this.openPopover();
        }
    }
    openPopover() {
        this.isExpanded = true;
        this.isClosing = false;
        this.updateFilteredItems();
    }
    closePopover() {
        this.isExpanded = false;
    }
    onSelectProperty(property) {
        this.selectedProperty = property.name;
        this.closePopover();
        this.propertyChange.emit(property.name);
    }
    onPopoverItemSelect(item) {
        if (item.type !== 'header') {
            const property = this.properties.find((p) => p.id === item.id);
            if (property) {
                this.onSelectProperty(property);
            }
        }
    }
    onSearchChange(searchTerm) {
        this.searchTerm = searchTerm;
        this.updateFilteredItems();
    }
    onPortfolioClick() {
        // Clear search and show all items when viewing portfolio
        this.searchTerm = '';
        this.updateFilteredItems();
        // Select the portfolio (Solstice Hospitality Group)
        const portfolio = this.properties.find((p) => p.type === 'portfolio');
        if (portfolio) {
            this.onSelectProperty(portfolio);
        }
    }
    onDropdownItemClick(item) {
        if (item.divider)
            return;
        const property = this.properties.find((p) => p.id === item.id);
        if (property) {
            this.selectedProperty = property.name;
            this.propertyChange.emit(property.name);
            this.closePopover();
        }
    }
    onDocumentClick(event) {
        if (this.isExpanded && !this.isClosing) {
            const target = event.target;
            const propertySwitcher = target.closest('.property-switcher');
            if (!propertySwitcher) {
                this.closePopover();
            }
        }
    }
    updateFilteredItems() {
        if (!this.searchTerm.trim()) {
            this.filteredItems = this.popoverItems;
            return;
        }
        const searchLower = this.searchTerm.toLowerCase();
        this.filteredItems = this.popoverItems.filter((item) => item.type === 'header' || item.label.toLowerCase().includes(searchLower));
    }
    ngOnInit() {
        this.updateFilteredItems();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: PropertySwitcherComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: PropertySwitcherComponent, isStandalone: true, selector: "app-property-switcher", inputs: { selectedProperty: "selectedProperty", properties: "properties" }, outputs: { propertyChange: "propertyChange" }, host: { listeners: { "document:click": "onDocumentClick($event)" } }, ngImport: i0, template: "<div class=\"property-switcher\" [class.expanded]=\"isExpanded\">\n  <button\n    class=\"property-selector\"\n    (click)=\"onToggle()\"\n    [attr.aria-expanded]=\"isExpanded\"\n    [attr.aria-label]=\"'Property selector: ' + selectedProperty\"\n  >\n    <span class=\"property-name\">{{ selectedProperty }}</span>\n    <span\n      class=\"material-symbols-outlined expand-icon\"\n      [attr.aria-label]=\"isExpanded ? 'Collapse Options' : 'Expand Options'\"\n    >\n      {{ isExpanded ? 'unfold_less' : 'unfold_more' }}\n    </span>\n  </button>\n\n  <div class=\"dropdown-menu-container\">\n    <app-dropdown-menu\n      [visible]=\"isExpanded\"\n      [showIcons]=\"true\"\n      [scrollable]=\"true\"\n      [menuItems]=\"dropdownMenuItems\"\n      (itemClick)=\"onDropdownItemClick($event)\"\n    >\n    </app-dropdown-menu>\n  </div>\n</div>\n", styles: [".property-switcher{position:relative;display:inline-block;width:180px}.property-selector{display:flex;align-items:center;justify-content:flex-start;gap:var(--spacing-xxs);padding:var(--spacing-xxs) var(--spacing-xs);margin:var(--spacing-none) calc(-1 * var(--spacing-xs));border:none;background:transparent;cursor:pointer;border-radius:var(--radius-xs);transition:background-color .2s ease;width:100%;min-width:0}.property-selector:hover{background-color:#eff1f5}.property-name{font-family:Inter,sans-serif;font-weight:500;font-size:14px;line-height:20px;color:#404968;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex-grow:1;min-width:0;max-width:180px}.expand-icon{font-size:20px;width:20px;height:20px;flex-shrink:0;color:#404968;transition:color .2s ease}.popover-container{position:absolute;top:100%;left:0;z-index:1000;margin-top:var(--spacing-xs);animation:popoverSlideIn .3s ease-out;transform-origin:top center}@keyframes popoverSlideIn{0%{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}.popover-container.closing{animation:popoverSlideOut .2s ease-in forwards}@keyframes popoverSlideOut{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-12px)}}.dropdown-menu-container{position:absolute;top:100%;left:0;z-index:1000;margin-top:var(--spacing-xs)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "component", type: DropdownMenuComponent, selector: "app-dropdown-menu", inputs: ["header", "menuItems", "visible", "showIcons", "scrollable"], outputs: ["itemClick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: PropertySwitcherComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-property-switcher', standalone: true, imports: [CommonModule, PopoverComponent, DropdownMenuComponent], template: "<div class=\"property-switcher\" [class.expanded]=\"isExpanded\">\n  <button\n    class=\"property-selector\"\n    (click)=\"onToggle()\"\n    [attr.aria-expanded]=\"isExpanded\"\n    [attr.aria-label]=\"'Property selector: ' + selectedProperty\"\n  >\n    <span class=\"property-name\">{{ selectedProperty }}</span>\n    <span\n      class=\"material-symbols-outlined expand-icon\"\n      [attr.aria-label]=\"isExpanded ? 'Collapse Options' : 'Expand Options'\"\n    >\n      {{ isExpanded ? 'unfold_less' : 'unfold_more' }}\n    </span>\n  </button>\n\n  <div class=\"dropdown-menu-container\">\n    <app-dropdown-menu\n      [visible]=\"isExpanded\"\n      [showIcons]=\"true\"\n      [scrollable]=\"true\"\n      [menuItems]=\"dropdownMenuItems\"\n      (itemClick)=\"onDropdownItemClick($event)\"\n    >\n    </app-dropdown-menu>\n  </div>\n</div>\n", styles: [".property-switcher{position:relative;display:inline-block;width:180px}.property-selector{display:flex;align-items:center;justify-content:flex-start;gap:var(--spacing-xxs);padding:var(--spacing-xxs) var(--spacing-xs);margin:var(--spacing-none) calc(-1 * var(--spacing-xs));border:none;background:transparent;cursor:pointer;border-radius:var(--radius-xs);transition:background-color .2s ease;width:100%;min-width:0}.property-selector:hover{background-color:#eff1f5}.property-name{font-family:Inter,sans-serif;font-weight:500;font-size:14px;line-height:20px;color:#404968;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex-grow:1;min-width:0;max-width:180px}.expand-icon{font-size:20px;width:20px;height:20px;flex-shrink:0;color:#404968;transition:color .2s ease}.popover-container{position:absolute;top:100%;left:0;z-index:1000;margin-top:var(--spacing-xs);animation:popoverSlideIn .3s ease-out;transform-origin:top center}@keyframes popoverSlideIn{0%{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}.popover-container.closing{animation:popoverSlideOut .2s ease-in forwards}@keyframes popoverSlideOut{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-12px)}}.dropdown-menu-container{position:absolute;top:100%;left:0;z-index:1000;margin-top:var(--spacing-xs)}\n"] }]
        }], propDecorators: { selectedProperty: [{
                type: Input
            }], properties: [{
                type: Input
            }], propertyChange: [{
                type: Output
            }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class ButtonComponent {
    constructor() {
        this.hierarchy = 'primary';
        this.type = 'solid';
        this.icon = 'none';
        this.state = 'default';
        this.size = 'md';
        this.label = 'Label';
        this.disabled = false;
        this.loading = false;
        this.onClick = new EventEmitter();
    }
    onButtonClick(event) {
        if (!this.disabled && !this.loading) {
            this.onClick.emit(event);
        }
    }
    get buttonClasses() {
        const classes = [
            'btn',
            `btn-${this.hierarchy}`,
            `btn-${this.size}`,
            `btn-icon-${this.icon}`,
        ];
        if (this.disabled || this.state === 'disabled') {
            classes.push('btn-disabled');
        }
        if (this.loading) {
            classes.push('btn-loading');
        }
        if (this.state === 'focus') {
            classes.push('btn-focus');
        }
        return classes.join(' ');
    }
    get showLabel() {
        return this.icon !== 'only';
    }
    get showLeadingIcon() {
        return ((this.icon === 'leading' || this.icon === 'only') &&
            (!!this.iconName || this.loading));
    }
    get showTrailingIcon() {
        return this.icon === 'trailing' && !!this.iconName && !this.loading;
    }
    getIconSizeClass() {
        switch (this.size) {
            case 'sm':
                return 'icon-md'; // Same as md
            case 'md':
                return 'icon-md';
            case 'lg':
                return 'icon-lg';
            default:
                return 'icon-md';
        }
    }
    getTextSizeClass() {
        switch (this.size) {
            case 'sm':
                return 'text-md'; // Same as md
            case 'md':
                return 'text-md'; // 16px
            case 'lg':
                return 'text-lg'; // 18px
            default:
                return 'text-md';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: ButtonComponent, isStandalone: true, selector: "app-button", inputs: { hierarchy: "hierarchy", type: "type", icon: "icon", state: "state", size: "size", label: "label", iconName: "iconName", disabled: "disabled", loading: "loading" }, outputs: { onClick: "onClick" }, ngImport: i0, template: "<button\n  [ngClass]=\"buttonClasses\"\n  [disabled]=\"disabled || loading\"\n  (click)=\"onButtonClick($event)\"\n  type=\"button\"\n>\n  <!-- Leading Icon or Loading Spinner -->\n  <span *ngIf=\"showLeadingIcon\" class=\"btn-icon btn-icon-leading\">\n    <span\n      *ngIf=\"!loading && iconName\"\n      class=\"material-symbols-outlined btn-icon-material\"\n      [ngClass]=\"getIconSizeClass()\"\n    >\n      {{ iconName }}\n    </span>\n    <!-- Loading spinner -->\n    <span\n      *ngIf=\"loading\"\n      class=\"material-symbols-outlined btn-loading-icon icon-spin\"\n      [ngClass]=\"getIconSizeClass()\"\n    >\n      refresh\n    </span>\n  </span>\n\n  <!-- Button Text -->\n  <span *ngIf=\"showLabel\" class=\"btn-label\" [ngClass]=\"getTextSizeClass()\">{{\n    label\n  }}</span>\n\n  <!-- Trailing Icon -->\n  <span *ngIf=\"showTrailingIcon\" class=\"btn-icon btn-icon-trailing\">\n    <span\n      class=\"material-symbols-outlined btn-icon-material\"\n      [ngClass]=\"getIconSizeClass()\"\n    >\n      {{ iconName }}\n    </span>\n  </span>\n</button>\n", styles: [".btn{display:inline-flex;align-items:center;justify-content:center;gap:var(--spacing-xs);font-family:var(--font-inter);font-weight:var(--weight-semibold);border:1px solid transparent;cursor:pointer;text-align:center;white-space:nowrap;transition:all .2s ease-in-out;text-decoration:none;outline:none}.btn-sm{padding:0 var(--spacing-xl);height:32px;border-radius:var(--radius-md)}.btn-md{padding:0 var(--spacing-xl);height:40px;border-radius:var(--radius-lg)}.btn-lg{padding:0 var(--spacing-xl);height:48px;border-radius:var(--radius-xl)}.btn-primary{background-color:var(--color-brand-600);color:var(--color-white);border-color:var(--color-brand-600)}.btn-secondary{background-color:var(--color-white);color:var(--color-neutral-600);border-color:var(--color-neutral-300)}.btn-tertiary{background-color:transparent;color:var(--color-neutral-600);border-color:transparent}.btn-quaternary{background-color:transparent;color:var(--color-brand-600);border-color:transparent}.btn-primary:hover:not(:disabled){background-color:var(--color-brand-700);border-color:var(--color-brand-700)}.btn-secondary:hover:not(:disabled){background-color:var(--color-neutral-50);color:var(--color-neutral-700);border-color:var(--color-neutral-400)}.btn-tertiary:hover:not(:disabled){background-color:var(--color-neutral-100);color:var(--color-neutral-700)}.btn-quaternary:hover:not(:disabled){color:var(--color-brand-700)}.btn-primary:active:not(:disabled){background-color:var(--color-brand-800);border-color:var(--color-brand-800)}.btn-secondary:active:not(:disabled){background-color:var(--color-neutral-100);border-color:var(--color-neutral-500)}.btn-tertiary:active:not(:disabled){background-color:var(--color-neutral-100)}.btn-quaternary:active:not(:disabled){color:var(--color-brand-800)}.btn:focus,.btn-focus{outline:2px solid var(--color-brand-500);outline-offset:2px}.btn:disabled,.btn-disabled{cursor:not-allowed;pointer-events:none}.btn-primary:disabled,.btn-primary.btn-disabled{background-color:var(--color-neutral-200);color:var(--color-neutral-400);border-color:var(--color-neutral-200)}.btn-secondary:disabled,.btn-secondary.btn-disabled,.btn-tertiary:disabled,.btn-tertiary.btn-disabled,.btn-quaternary:disabled,.btn-quaternary.btn-disabled{opacity:.5}.btn-loading{cursor:wait;pointer-events:none}.btn-loading .btn-label{opacity:.7}.btn-label{display:inline-block;line-height:inherit}.btn-quaternary .btn-label{text-decoration:underline}.btn-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0}.btn-icon-material{line-height:1;vertical-align:middle;color:inherit}.btn-icon-only{padding:0}.btn-icon-only.btn-sm{width:32px;height:32px}.btn-icon-only.btn-md{width:40px;height:40px}.btn-icon-only.btn-lg{width:48px;height:48px}.btn-icon-only .btn-icon-material{margin:0}.btn-loading-icon{line-height:1;vertical-align:middle;color:inherit}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-button', standalone: true, imports: [CommonModule], template: "<button\n  [ngClass]=\"buttonClasses\"\n  [disabled]=\"disabled || loading\"\n  (click)=\"onButtonClick($event)\"\n  type=\"button\"\n>\n  <!-- Leading Icon or Loading Spinner -->\n  <span *ngIf=\"showLeadingIcon\" class=\"btn-icon btn-icon-leading\">\n    <span\n      *ngIf=\"!loading && iconName\"\n      class=\"material-symbols-outlined btn-icon-material\"\n      [ngClass]=\"getIconSizeClass()\"\n    >\n      {{ iconName }}\n    </span>\n    <!-- Loading spinner -->\n    <span\n      *ngIf=\"loading\"\n      class=\"material-symbols-outlined btn-loading-icon icon-spin\"\n      [ngClass]=\"getIconSizeClass()\"\n    >\n      refresh\n    </span>\n  </span>\n\n  <!-- Button Text -->\n  <span *ngIf=\"showLabel\" class=\"btn-label\" [ngClass]=\"getTextSizeClass()\">{{\n    label\n  }}</span>\n\n  <!-- Trailing Icon -->\n  <span *ngIf=\"showTrailingIcon\" class=\"btn-icon btn-icon-trailing\">\n    <span\n      class=\"material-symbols-outlined btn-icon-material\"\n      [ngClass]=\"getIconSizeClass()\"\n    >\n      {{ iconName }}\n    </span>\n  </span>\n</button>\n", styles: [".btn{display:inline-flex;align-items:center;justify-content:center;gap:var(--spacing-xs);font-family:var(--font-inter);font-weight:var(--weight-semibold);border:1px solid transparent;cursor:pointer;text-align:center;white-space:nowrap;transition:all .2s ease-in-out;text-decoration:none;outline:none}.btn-sm{padding:0 var(--spacing-xl);height:32px;border-radius:var(--radius-md)}.btn-md{padding:0 var(--spacing-xl);height:40px;border-radius:var(--radius-lg)}.btn-lg{padding:0 var(--spacing-xl);height:48px;border-radius:var(--radius-xl)}.btn-primary{background-color:var(--color-brand-600);color:var(--color-white);border-color:var(--color-brand-600)}.btn-secondary{background-color:var(--color-white);color:var(--color-neutral-600);border-color:var(--color-neutral-300)}.btn-tertiary{background-color:transparent;color:var(--color-neutral-600);border-color:transparent}.btn-quaternary{background-color:transparent;color:var(--color-brand-600);border-color:transparent}.btn-primary:hover:not(:disabled){background-color:var(--color-brand-700);border-color:var(--color-brand-700)}.btn-secondary:hover:not(:disabled){background-color:var(--color-neutral-50);color:var(--color-neutral-700);border-color:var(--color-neutral-400)}.btn-tertiary:hover:not(:disabled){background-color:var(--color-neutral-100);color:var(--color-neutral-700)}.btn-quaternary:hover:not(:disabled){color:var(--color-brand-700)}.btn-primary:active:not(:disabled){background-color:var(--color-brand-800);border-color:var(--color-brand-800)}.btn-secondary:active:not(:disabled){background-color:var(--color-neutral-100);border-color:var(--color-neutral-500)}.btn-tertiary:active:not(:disabled){background-color:var(--color-neutral-100)}.btn-quaternary:active:not(:disabled){color:var(--color-brand-800)}.btn:focus,.btn-focus{outline:2px solid var(--color-brand-500);outline-offset:2px}.btn:disabled,.btn-disabled{cursor:not-allowed;pointer-events:none}.btn-primary:disabled,.btn-primary.btn-disabled{background-color:var(--color-neutral-200);color:var(--color-neutral-400);border-color:var(--color-neutral-200)}.btn-secondary:disabled,.btn-secondary.btn-disabled,.btn-tertiary:disabled,.btn-tertiary.btn-disabled,.btn-quaternary:disabled,.btn-quaternary.btn-disabled{opacity:.5}.btn-loading{cursor:wait;pointer-events:none}.btn-loading .btn-label{opacity:.7}.btn-label{display:inline-block;line-height:inherit}.btn-quaternary .btn-label{text-decoration:underline}.btn-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0}.btn-icon-material{line-height:1;vertical-align:middle;color:inherit}.btn-icon-only{padding:0}.btn-icon-only.btn-sm{width:32px;height:32px}.btn-icon-only.btn-md{width:40px;height:40px}.btn-icon-only.btn-lg{width:48px;height:48px}.btn-icon-only .btn-icon-material{margin:0}.btn-loading-icon{line-height:1;vertical-align:middle;color:inherit}\n"] }]
        }], propDecorators: { hierarchy: [{
                type: Input
            }], type: [{
                type: Input
            }], icon: [{
                type: Input
            }], state: [{
                type: Input
            }], size: [{
                type: Input
            }], label: [{
                type: Input
            }], iconName: [{
                type: Input
            }], disabled: [{
                type: Input
            }], loading: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });

class BadgeDotComponent {
    constructor() {
        this.size = 'md';
        this.color = 'error';
        this.outline = false;
    }
    get dotClasses() {
        return [
            'badge-dot',
            `badge-dot-${this.size}`,
            `badge-dot-${this.color}`,
            this.outline ? 'badge-dot-outline' : '',
        ]
            .filter((cls) => cls)
            .join(' ');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: BadgeDotComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: BadgeDotComponent, isStandalone: true, selector: "app-badge-dot", inputs: { size: "size", color: "color", outline: "outline" }, ngImport: i0, template: "<div [ngClass]=\"dotClasses\"></div>\n", styles: [".badge-dot{border-radius:9999px;position:relative;display:inline-block;box-sizing:border-box}.badge-dot-sm{width:6px;height:6px}.badge-dot-md{width:8px;height:8px}.badge-dot-lg{width:10px;height:10px}.badge-dot-success{background-color:var(--color-success-500)}.badge-dot-blue{background-color:var(--color-blue-500)}.badge-dot-error{background-color:var(--color-error-500)}.badge-dot-warning{background-color:var(--color-warning-500)}.badge-dot-outline.badge-dot-sm{outline:3px solid;outline-offset:0}.badge-dot-outline.badge-dot-md{outline:4px solid;outline-offset:0}.badge-dot-outline.badge-dot-lg{outline:5px solid;outline-offset:0}.badge-dot-outline.badge-dot-success{outline-color:var( --color-success-100 )}.badge-dot-outline.badge-dot-blue{outline-color:var(--color-blue-200)}.badge-dot-outline.badge-dot-error{outline-color:var( --color-error-200 )}.badge-dot-outline.badge-dot-warning{outline-color:var(--color-warning-200)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: BadgeDotComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-badge-dot', standalone: true, imports: [CommonModule], template: "<div [ngClass]=\"dotClasses\"></div>\n", styles: [".badge-dot{border-radius:9999px;position:relative;display:inline-block;box-sizing:border-box}.badge-dot-sm{width:6px;height:6px}.badge-dot-md{width:8px;height:8px}.badge-dot-lg{width:10px;height:10px}.badge-dot-success{background-color:var(--color-success-500)}.badge-dot-blue{background-color:var(--color-blue-500)}.badge-dot-error{background-color:var(--color-error-500)}.badge-dot-warning{background-color:var(--color-warning-500)}.badge-dot-outline.badge-dot-sm{outline:3px solid;outline-offset:0}.badge-dot-outline.badge-dot-md{outline:4px solid;outline-offset:0}.badge-dot-outline.badge-dot-lg{outline:5px solid;outline-offset:0}.badge-dot-outline.badge-dot-success{outline-color:var( --color-success-100 )}.badge-dot-outline.badge-dot-blue{outline-color:var(--color-blue-200)}.badge-dot-outline.badge-dot-error{outline-color:var( --color-error-200 )}.badge-dot-outline.badge-dot-warning{outline-color:var(--color-warning-200)}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], color: [{
                type: Input
            }], outline: [{
                type: Input
            }] } });

class BreadcrumbsComponent {
    constructor(router) {
        this.router = router;
        this.items = [];
        this.separator = 'chevron_right';
        this.showHome = true;
        this.maxVisibleItems = 4; // Maximum items to show before collapsing
        this.itemClick = new EventEmitter();
        this.navigate = new EventEmitter();
        this.displayItems = [];
        this.showEllipsis = false;
        this.collapsedItems = [];
    }
    ngOnInit() {
        this.updateDisplayItems();
    }
    ngOnChanges() {
        this.updateDisplayItems();
    }
    updateDisplayItems() {
        if (this.items.length <= this.maxVisibleItems) {
            this.displayItems = [...this.items];
            this.showEllipsis = false;
            this.collapsedItems = [];
        }
        else {
            // Show first item, ellipsis, and last few items
            const lastItems = this.items.slice(-(this.maxVisibleItems - 2));
            this.displayItems = [this.items[0], ...lastItems];
            this.showEllipsis = true;
            this.collapsedItems = this.items.slice(1, -(this.maxVisibleItems - 2));
        }
    }
    onItemClick(item) {
        if (!item.isActive && item.path) {
            this.itemClick.emit(item);
            this.navigate.emit(item.path);
            this.router.navigate([item.path]);
        }
    }
    onHomeClick() {
        const homeItem = {
            label: 'Home',
            path: '/',
            icon: 'cottage',
        };
        this.itemClick.emit(homeItem);
        this.navigate.emit('/');
        this.router.navigate(['/']);
    }
    onEllipsisClick() {
        // Could emit an event or show a dropdown menu with collapsed items
        // For now, just emit the first collapsed item
        if (this.collapsedItems.length > 0) {
            this.onItemClick(this.collapsedItems[0]);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: BreadcrumbsComponent, deps: [{ token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: BreadcrumbsComponent, isStandalone: true, selector: "app-breadcrumbs", inputs: { items: "items", separator: "separator", showHome: "showHome", maxVisibleItems: "maxVisibleItems" }, outputs: { itemClick: "itemClick", navigate: "navigate" }, usesOnChanges: true, ngImport: i0, template: "<nav class=\"breadcrumbs\" aria-label=\"Breadcrumb\">\n  <div class=\"breadcrumbs-container\">\n    <!-- Home button -->\n    <div class=\"breadcrumb-item\" *ngIf=\"showHome\">\n      <button\n        type=\"button\"\n        class=\"breadcrumb-button breadcrumb-home\"\n        (click)=\"onHomeClick()\"\n        aria-label=\"Go to home\"\n      >\n        <span class=\"material-symbols-outlined breadcrumb-icon\">cottage</span>\n      </button>\n    </div>\n\n    <!-- Separator after home -->\n    <div\n      class=\"breadcrumb-separator\"\n      *ngIf=\"showHome && (displayItems.length > 0 || showEllipsis)\"\n    >\n      <span class=\"material-symbols-outlined\">{{ separator }}</span>\n    </div>\n\n    <!-- First item (if ellipsis is shown) -->\n    <ng-container *ngIf=\"showEllipsis && displayItems.length > 0\">\n      <div class=\"breadcrumb-item\">\n        <button\n          *ngIf=\"\n            !displayItems[0].isActive && displayItems[0].path;\n            else currentItem\n          \"\n          type=\"button\"\n          class=\"breadcrumb-button\"\n          (click)=\"onItemClick(displayItems[0])\"\n          [attr.aria-current]=\"displayItems[0].isActive ? 'page' : null\"\n        >\n          <span class=\"breadcrumb-text\">{{ displayItems[0].label }}</span>\n        </button>\n\n        <ng-template #currentItem>\n          <div\n            class=\"breadcrumb-button breadcrumb-current\"\n            [attr.aria-current]=\"'page'\"\n          >\n            <span class=\"breadcrumb-text\">{{ displayItems[0].label }}</span>\n          </div>\n        </ng-template>\n      </div>\n\n      <div class=\"breadcrumb-separator\">\n        <span class=\"material-symbols-outlined\">{{ separator }}</span>\n      </div>\n\n      <!-- Ellipsis button -->\n      <div class=\"breadcrumb-item\">\n        <button\n          type=\"button\"\n          class=\"breadcrumb-button breadcrumb-ellipsis\"\n          (click)=\"onEllipsisClick()\"\n          [title]=\"'Show ' + collapsedItems.length + ' hidden items'\"\n        >\n          <span class=\"breadcrumb-text\">...</span>\n        </button>\n      </div>\n\n      <div class=\"breadcrumb-separator\">\n        <span class=\"material-symbols-outlined\">{{ separator }}</span>\n      </div>\n\n      <!-- Remaining items -->\n      <ng-container\n        *ngFor=\"\n          let item of displayItems.slice(1);\n          let i = index;\n          let last = last\n        \"\n      >\n        <div class=\"breadcrumb-item\">\n          <button\n            *ngIf=\"!item.isActive && item.path; else currentItem\"\n            type=\"button\"\n            class=\"breadcrumb-button\"\n            (click)=\"onItemClick(item)\"\n            [attr.aria-current]=\"item.isActive ? 'page' : null\"\n          >\n            <span class=\"breadcrumb-text\">{{ item.label }}</span>\n          </button>\n\n          <ng-template #currentItem>\n            <div\n              class=\"breadcrumb-button breadcrumb-current\"\n              [attr.aria-current]=\"'page'\"\n            >\n              <span class=\"breadcrumb-text\">{{ item.label }}</span>\n            </div>\n          </ng-template>\n        </div>\n\n        <div class=\"breadcrumb-separator\" *ngIf=\"!last\">\n          <span class=\"material-symbols-outlined\">{{ separator }}</span>\n        </div>\n      </ng-container>\n    </ng-container>\n\n    <!-- All items (when no ellipsis) -->\n    <ng-container *ngIf=\"!showEllipsis\">\n      <ng-container\n        *ngFor=\"let item of displayItems; let i = index; let last = last\"\n      >\n        <div class=\"breadcrumb-item\">\n          <button\n            *ngIf=\"!item.isActive && item.path; else currentItem\"\n            type=\"button\"\n            class=\"breadcrumb-button\"\n            (click)=\"onItemClick(item)\"\n            [attr.aria-current]=\"item.isActive ? 'page' : null\"\n          >\n            <span class=\"breadcrumb-text\">{{ item.label }}</span>\n          </button>\n\n          <ng-template #currentItem>\n            <div\n              class=\"breadcrumb-button breadcrumb-current\"\n              [attr.aria-current]=\"'page'\"\n            >\n              <span class=\"breadcrumb-text\">{{ item.label }}</span>\n            </div>\n          </ng-template>\n        </div>\n\n        <div class=\"breadcrumb-separator\" *ngIf=\"!last\">\n          <span class=\"material-symbols-outlined\">{{ separator }}</span>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</nav>\n", styles: [".breadcrumbs{font-family:var(--font-inter);user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.breadcrumbs-container{display:flex;align-items:center;gap:var(--spacing-xs);flex-wrap:wrap}.breadcrumb-item{display:flex;align-items:center}.breadcrumb-button{display:flex;align-items:center;justify-content:center;padding:var(--spacing-xs) var(--spacing-sm);border:none;background:transparent;border-radius:6px;cursor:pointer;transition:all .15s ease;color:var(--color-neutral-600);text-decoration:none;font-family:var(--font-inter);font-size:var(--text-sm-size);font-weight:500;line-height:1.4285714285714286em;min-height:24px;box-sizing:border-box}.breadcrumb-button:hover{background-color:var(--color-neutral-50);color:var(--color-neutral-900)}.breadcrumb-button:focus-visible{outline:2px solid var(--color-brand-500);outline-offset:2px}.breadcrumb-home{padding:var(--spacing-xs);min-width:24px;min-height:24px}.breadcrumb-home:hover{background-color:var(--color-neutral-50)}.breadcrumb-current{background-color:var(--color-neutral-50);color:var(--color-neutral-800);font-weight:500;cursor:default}.breadcrumb-current:hover{background-color:var(--color-neutral-50);color:var(--color-neutral-800)}.breadcrumb-ellipsis{color:var(--color-neutral-600);font-weight:500}.breadcrumb-ellipsis:hover{background-color:var(--color-neutral-50);color:var(--color-neutral-900)}.breadcrumb-text{white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis}.breadcrumb-icon{flex-shrink:0;font-size:var(--icon-size-md);width:var(--icon-size-md);height:var(--icon-size-md);color:var(--color-neutral-600)}.breadcrumb-home .breadcrumb-icon{font-size:var(--icon-size-md);width:var(--icon-size-md);height:var(--icon-size-md)}.breadcrumb-separator{display:flex;align-items:center;color:var(--color-neutral-300);font-size:var(--icon-size-md);flex-shrink:0}.breadcrumb-separator .material-symbols-outlined{font-size:var(--icon-size-md);width:var(--icon-size-md);height:var(--icon-size-md)}@media (max-width: 640px){.breadcrumb-text{max-width:120px}.breadcrumbs-container{gap:var(--spacing-xxs)}.breadcrumb-button{padding:var(--spacing-xxs) var(--spacing-xs);font-size:12px}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: BreadcrumbsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-breadcrumbs', standalone: true, imports: [CommonModule], template: "<nav class=\"breadcrumbs\" aria-label=\"Breadcrumb\">\n  <div class=\"breadcrumbs-container\">\n    <!-- Home button -->\n    <div class=\"breadcrumb-item\" *ngIf=\"showHome\">\n      <button\n        type=\"button\"\n        class=\"breadcrumb-button breadcrumb-home\"\n        (click)=\"onHomeClick()\"\n        aria-label=\"Go to home\"\n      >\n        <span class=\"material-symbols-outlined breadcrumb-icon\">cottage</span>\n      </button>\n    </div>\n\n    <!-- Separator after home -->\n    <div\n      class=\"breadcrumb-separator\"\n      *ngIf=\"showHome && (displayItems.length > 0 || showEllipsis)\"\n    >\n      <span class=\"material-symbols-outlined\">{{ separator }}</span>\n    </div>\n\n    <!-- First item (if ellipsis is shown) -->\n    <ng-container *ngIf=\"showEllipsis && displayItems.length > 0\">\n      <div class=\"breadcrumb-item\">\n        <button\n          *ngIf=\"\n            !displayItems[0].isActive && displayItems[0].path;\n            else currentItem\n          \"\n          type=\"button\"\n          class=\"breadcrumb-button\"\n          (click)=\"onItemClick(displayItems[0])\"\n          [attr.aria-current]=\"displayItems[0].isActive ? 'page' : null\"\n        >\n          <span class=\"breadcrumb-text\">{{ displayItems[0].label }}</span>\n        </button>\n\n        <ng-template #currentItem>\n          <div\n            class=\"breadcrumb-button breadcrumb-current\"\n            [attr.aria-current]=\"'page'\"\n          >\n            <span class=\"breadcrumb-text\">{{ displayItems[0].label }}</span>\n          </div>\n        </ng-template>\n      </div>\n\n      <div class=\"breadcrumb-separator\">\n        <span class=\"material-symbols-outlined\">{{ separator }}</span>\n      </div>\n\n      <!-- Ellipsis button -->\n      <div class=\"breadcrumb-item\">\n        <button\n          type=\"button\"\n          class=\"breadcrumb-button breadcrumb-ellipsis\"\n          (click)=\"onEllipsisClick()\"\n          [title]=\"'Show ' + collapsedItems.length + ' hidden items'\"\n        >\n          <span class=\"breadcrumb-text\">...</span>\n        </button>\n      </div>\n\n      <div class=\"breadcrumb-separator\">\n        <span class=\"material-symbols-outlined\">{{ separator }}</span>\n      </div>\n\n      <!-- Remaining items -->\n      <ng-container\n        *ngFor=\"\n          let item of displayItems.slice(1);\n          let i = index;\n          let last = last\n        \"\n      >\n        <div class=\"breadcrumb-item\">\n          <button\n            *ngIf=\"!item.isActive && item.path; else currentItem\"\n            type=\"button\"\n            class=\"breadcrumb-button\"\n            (click)=\"onItemClick(item)\"\n            [attr.aria-current]=\"item.isActive ? 'page' : null\"\n          >\n            <span class=\"breadcrumb-text\">{{ item.label }}</span>\n          </button>\n\n          <ng-template #currentItem>\n            <div\n              class=\"breadcrumb-button breadcrumb-current\"\n              [attr.aria-current]=\"'page'\"\n            >\n              <span class=\"breadcrumb-text\">{{ item.label }}</span>\n            </div>\n          </ng-template>\n        </div>\n\n        <div class=\"breadcrumb-separator\" *ngIf=\"!last\">\n          <span class=\"material-symbols-outlined\">{{ separator }}</span>\n        </div>\n      </ng-container>\n    </ng-container>\n\n    <!-- All items (when no ellipsis) -->\n    <ng-container *ngIf=\"!showEllipsis\">\n      <ng-container\n        *ngFor=\"let item of displayItems; let i = index; let last = last\"\n      >\n        <div class=\"breadcrumb-item\">\n          <button\n            *ngIf=\"!item.isActive && item.path; else currentItem\"\n            type=\"button\"\n            class=\"breadcrumb-button\"\n            (click)=\"onItemClick(item)\"\n            [attr.aria-current]=\"item.isActive ? 'page' : null\"\n          >\n            <span class=\"breadcrumb-text\">{{ item.label }}</span>\n          </button>\n\n          <ng-template #currentItem>\n            <div\n              class=\"breadcrumb-button breadcrumb-current\"\n              [attr.aria-current]=\"'page'\"\n            >\n              <span class=\"breadcrumb-text\">{{ item.label }}</span>\n            </div>\n          </ng-template>\n        </div>\n\n        <div class=\"breadcrumb-separator\" *ngIf=\"!last\">\n          <span class=\"material-symbols-outlined\">{{ separator }}</span>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</nav>\n", styles: [".breadcrumbs{font-family:var(--font-inter);user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.breadcrumbs-container{display:flex;align-items:center;gap:var(--spacing-xs);flex-wrap:wrap}.breadcrumb-item{display:flex;align-items:center}.breadcrumb-button{display:flex;align-items:center;justify-content:center;padding:var(--spacing-xs) var(--spacing-sm);border:none;background:transparent;border-radius:6px;cursor:pointer;transition:all .15s ease;color:var(--color-neutral-600);text-decoration:none;font-family:var(--font-inter);font-size:var(--text-sm-size);font-weight:500;line-height:1.4285714285714286em;min-height:24px;box-sizing:border-box}.breadcrumb-button:hover{background-color:var(--color-neutral-50);color:var(--color-neutral-900)}.breadcrumb-button:focus-visible{outline:2px solid var(--color-brand-500);outline-offset:2px}.breadcrumb-home{padding:var(--spacing-xs);min-width:24px;min-height:24px}.breadcrumb-home:hover{background-color:var(--color-neutral-50)}.breadcrumb-current{background-color:var(--color-neutral-50);color:var(--color-neutral-800);font-weight:500;cursor:default}.breadcrumb-current:hover{background-color:var(--color-neutral-50);color:var(--color-neutral-800)}.breadcrumb-ellipsis{color:var(--color-neutral-600);font-weight:500}.breadcrumb-ellipsis:hover{background-color:var(--color-neutral-50);color:var(--color-neutral-900)}.breadcrumb-text{white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis}.breadcrumb-icon{flex-shrink:0;font-size:var(--icon-size-md);width:var(--icon-size-md);height:var(--icon-size-md);color:var(--color-neutral-600)}.breadcrumb-home .breadcrumb-icon{font-size:var(--icon-size-md);width:var(--icon-size-md);height:var(--icon-size-md)}.breadcrumb-separator{display:flex;align-items:center;color:var(--color-neutral-300);font-size:var(--icon-size-md);flex-shrink:0}.breadcrumb-separator .material-symbols-outlined{font-size:var(--icon-size-md);width:var(--icon-size-md);height:var(--icon-size-md)}@media (max-width: 640px){.breadcrumb-text{max-width:120px}.breadcrumbs-container{gap:var(--spacing-xxs)}.breadcrumb-button{padding:var(--spacing-xxs) var(--spacing-xs);font-size:12px}}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.Router }], propDecorators: { items: [{
                type: Input
            }], separator: [{
                type: Input
            }], showHome: [{
                type: Input
            }], maxVisibleItems: [{
                type: Input
            }], itemClick: [{
                type: Output
            }], navigate: [{
                type: Output
            }] } });

class AppbarComponent {
    constructor() {
        this.isMenuOpen = false;
        this.menuToggle = new EventEmitter();
        this.selectedProperty = 'Solstice Hospitality Group';
        this.notificationCount = 1;
        this.properties = [
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
        ];
        this.breadcrumbItems = [
            { label: 'Dashboard', path: '/dashboard' },
            { label: 'Dashboards', isActive: true },
        ];
    }
    onMenuToggle() {
        this.menuToggle.emit();
    }
    onNotificationClick() {
        // Implement notification click logic
        console.log('Notifications clicked');
    }
    onBreadcrumbClick(item) {
        if (item.path && !item.isActive) {
            // Implement navigation logic
            console.log('Navigate to:', item.path);
        }
    }
    onPropertyChange(propertyName) {
        this.selectedProperty = propertyName;
        console.log('Property changed to:', propertyName);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: AppbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: AppbarComponent, isStandalone: true, selector: "app-appbar", inputs: { isMenuOpen: "isMenuOpen" }, outputs: { menuToggle: "menuToggle" }, ngImport: i0, template: "<header class=\"appbar\">\n  <!-- Left Section -->\n  <div class=\"left-section\">\n    <!-- Menu Toggle -->\n    <app-button\n      hierarchy=\"tertiary\"\n      icon=\"only\"\n      size=\"sm\"\n      [iconName]=\"isMenuOpen ? 'menu_open' : 'last_page'\"\n      (onClick)=\"onMenuToggle()\"\n    >\n    </app-button>\n\n    <!-- Logo -->\n    <div class=\"logo\">\n      <img\n        src=\"/bellhopos/assets/logos/solstice.svg\"\n        alt=\"Solstice\"\n        class=\"logo-image\"\n      />\n    </div>\n\n    <!-- Property Switcher -->\n    <app-property-switcher\n      [selectedProperty]=\"selectedProperty\"\n      [properties]=\"properties\"\n      (propertyChange)=\"onPropertyChange($event)\"\n    >\n    </app-property-switcher>\n\n    <!-- Center Section - Breadcrumbs -->\n    <app-breadcrumbs\n      [items]=\"breadcrumbItems\"\n      [showHome]=\"true\"\n      (itemClick)=\"onBreadcrumbClick($event)\"\n    >\n    </app-breadcrumbs>\n  </div>\n\n  <!-- Right Section -->\n  <div class=\"right-section\">\n    <!-- Calendar Icon -->\n    <div class=\"icon-button-wrapper\">\n      <app-button\n        hierarchy=\"tertiary\"\n        icon=\"only\"\n        size=\"sm\"\n        iconName=\"calendar_today\"\n      >\n      </app-button>\n      <app-badge-dot\n        size=\"sm\"\n        color=\"success\"\n        [outline]=\"true\"\n        class=\"icon-badge-dot\"\n      >\n      </app-badge-dot>\n    </div>\n\n    <!-- Settings Icon -->\n    <div class=\"icon-button-wrapper\">\n      <app-button\n        hierarchy=\"tertiary\"\n        icon=\"only\"\n        size=\"sm\"\n        iconName=\"settings\"\n      >\n      </app-button>\n      <app-badge-dot\n        size=\"sm\"\n        color=\"blue\"\n        [outline]=\"true\"\n        class=\"icon-badge-dot\"\n      >\n      </app-badge-dot>\n    </div>\n\n    <!-- Notifications -->\n    <div class=\"icon-button-wrapper\">\n      <app-button\n        hierarchy=\"tertiary\"\n        icon=\"only\"\n        size=\"sm\"\n        iconName=\"notifications\"\n        (onClick)=\"onNotificationClick()\"\n      >\n      </app-button>\n      <app-badge-dot\n        *ngIf=\"notificationCount > 0\"\n        size=\"sm\"\n        color=\"error\"\n        [outline]=\"true\"\n        class=\"icon-badge-dot\"\n      >\n      </app-badge-dot>\n    </div>\n  </div>\n</header>\n", styles: [".appbar{display:flex;align-items:center;justify-content:space-between;height:56px;padding:0 var(--spacing-sm);background-color:var(--color-white);border-bottom:1px solid var(--color-neutral-200);font-family:var(--font-inter);position:sticky;top:0;z-index:1000;box-sizing:border-box;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.left-section{display:flex;align-items:center;gap:var(--spacing-xl);flex-shrink:0}.logo{display:flex;align-items:center;justify-content:center;width:var(--spacing-4xl);height:var(--spacing-4xl);color:var(--color-brand-500)}.logo-image{width:36px;height:36px;object-fit:contain}.property-name{font-size:var(--text-md-size);font-weight:var(--weight-semibold);color:var(--color-neutral-800);line-height:var(--text-md-line);white-space:nowrap}.center-section{flex:1;display:flex;justify-content:center;min-width:0}.breadcrumbs{display:flex;align-items:center;gap:var(--spacing-md);max-width:100%}.breadcrumb-item{font-size:var(--text-sm-size);font-weight:var(--weight-regular);line-height:var(--text-sm-line);color:var(--color-neutral-500);background:none;border:none;cursor:pointer;padding:var(--spacing-xs) var(--spacing-md);border-radius:var(--radius-xs);transition:all .2s ease;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.breadcrumb-item:hover:not(:disabled){background-color:var(--color-neutral-50);color:var(--color-neutral-700)}.breadcrumb-item.active{color:var(--color-neutral-800);font-weight:var(--weight-medium);cursor:default}.breadcrumb-item:disabled{cursor:default}.breadcrumb-separator{color:var(--color-neutral-200);flex-shrink:0}.right-section{display:flex;align-items:center;gap:var(--spacing-md);flex-shrink:0}.icon-button-wrapper{position:relative}.icon-badge-dot{position:absolute;top:0;right:4px}@media (max-width: 768px){.appbar{padding:0 16px}.property-name{display:none}.left-section{gap:12px}.breadcrumbs{max-width:200px}.breadcrumb-item{font-size:13px;padding:2px 6px;max-width:80px}}@media (max-width: 480px){.appbar{padding:0 12px}.breadcrumbs{max-width:150px}.breadcrumb-item{font-size:12px;max-width:60px}.right-section{gap:4px}.icon-button{width:32px;height:32px}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ButtonComponent, selector: "app-button", inputs: ["hierarchy", "type", "icon", "state", "size", "label", "iconName", "disabled", "loading"], outputs: ["onClick"] }, { kind: "component", type: PropertySwitcherComponent, selector: "app-property-switcher", inputs: ["selectedProperty", "properties"], outputs: ["propertyChange"] }, { kind: "component", type: BadgeDotComponent, selector: "app-badge-dot", inputs: ["size", "color", "outline"] }, { kind: "component", type: BreadcrumbsComponent, selector: "app-breadcrumbs", inputs: ["items", "separator", "showHome", "maxVisibleItems"], outputs: ["itemClick", "navigate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: AppbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-appbar', standalone: true, imports: [
                        CommonModule,
                        ButtonComponent,
                        PropertySwitcherComponent,
                        BadgeDotComponent,
                        BreadcrumbsComponent,
                    ], template: "<header class=\"appbar\">\n  <!-- Left Section -->\n  <div class=\"left-section\">\n    <!-- Menu Toggle -->\n    <app-button\n      hierarchy=\"tertiary\"\n      icon=\"only\"\n      size=\"sm\"\n      [iconName]=\"isMenuOpen ? 'menu_open' : 'last_page'\"\n      (onClick)=\"onMenuToggle()\"\n    >\n    </app-button>\n\n    <!-- Logo -->\n    <div class=\"logo\">\n      <img\n        src=\"/bellhopos/assets/logos/solstice.svg\"\n        alt=\"Solstice\"\n        class=\"logo-image\"\n      />\n    </div>\n\n    <!-- Property Switcher -->\n    <app-property-switcher\n      [selectedProperty]=\"selectedProperty\"\n      [properties]=\"properties\"\n      (propertyChange)=\"onPropertyChange($event)\"\n    >\n    </app-property-switcher>\n\n    <!-- Center Section - Breadcrumbs -->\n    <app-breadcrumbs\n      [items]=\"breadcrumbItems\"\n      [showHome]=\"true\"\n      (itemClick)=\"onBreadcrumbClick($event)\"\n    >\n    </app-breadcrumbs>\n  </div>\n\n  <!-- Right Section -->\n  <div class=\"right-section\">\n    <!-- Calendar Icon -->\n    <div class=\"icon-button-wrapper\">\n      <app-button\n        hierarchy=\"tertiary\"\n        icon=\"only\"\n        size=\"sm\"\n        iconName=\"calendar_today\"\n      >\n      </app-button>\n      <app-badge-dot\n        size=\"sm\"\n        color=\"success\"\n        [outline]=\"true\"\n        class=\"icon-badge-dot\"\n      >\n      </app-badge-dot>\n    </div>\n\n    <!-- Settings Icon -->\n    <div class=\"icon-button-wrapper\">\n      <app-button\n        hierarchy=\"tertiary\"\n        icon=\"only\"\n        size=\"sm\"\n        iconName=\"settings\"\n      >\n      </app-button>\n      <app-badge-dot\n        size=\"sm\"\n        color=\"blue\"\n        [outline]=\"true\"\n        class=\"icon-badge-dot\"\n      >\n      </app-badge-dot>\n    </div>\n\n    <!-- Notifications -->\n    <div class=\"icon-button-wrapper\">\n      <app-button\n        hierarchy=\"tertiary\"\n        icon=\"only\"\n        size=\"sm\"\n        iconName=\"notifications\"\n        (onClick)=\"onNotificationClick()\"\n      >\n      </app-button>\n      <app-badge-dot\n        *ngIf=\"notificationCount > 0\"\n        size=\"sm\"\n        color=\"error\"\n        [outline]=\"true\"\n        class=\"icon-badge-dot\"\n      >\n      </app-badge-dot>\n    </div>\n  </div>\n</header>\n", styles: [".appbar{display:flex;align-items:center;justify-content:space-between;height:56px;padding:0 var(--spacing-sm);background-color:var(--color-white);border-bottom:1px solid var(--color-neutral-200);font-family:var(--font-inter);position:sticky;top:0;z-index:1000;box-sizing:border-box;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.left-section{display:flex;align-items:center;gap:var(--spacing-xl);flex-shrink:0}.logo{display:flex;align-items:center;justify-content:center;width:var(--spacing-4xl);height:var(--spacing-4xl);color:var(--color-brand-500)}.logo-image{width:36px;height:36px;object-fit:contain}.property-name{font-size:var(--text-md-size);font-weight:var(--weight-semibold);color:var(--color-neutral-800);line-height:var(--text-md-line);white-space:nowrap}.center-section{flex:1;display:flex;justify-content:center;min-width:0}.breadcrumbs{display:flex;align-items:center;gap:var(--spacing-md);max-width:100%}.breadcrumb-item{font-size:var(--text-sm-size);font-weight:var(--weight-regular);line-height:var(--text-sm-line);color:var(--color-neutral-500);background:none;border:none;cursor:pointer;padding:var(--spacing-xs) var(--spacing-md);border-radius:var(--radius-xs);transition:all .2s ease;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.breadcrumb-item:hover:not(:disabled){background-color:var(--color-neutral-50);color:var(--color-neutral-700)}.breadcrumb-item.active{color:var(--color-neutral-800);font-weight:var(--weight-medium);cursor:default}.breadcrumb-item:disabled{cursor:default}.breadcrumb-separator{color:var(--color-neutral-200);flex-shrink:0}.right-section{display:flex;align-items:center;gap:var(--spacing-md);flex-shrink:0}.icon-button-wrapper{position:relative}.icon-badge-dot{position:absolute;top:0;right:4px}@media (max-width: 768px){.appbar{padding:0 16px}.property-name{display:none}.left-section{gap:12px}.breadcrumbs{max-width:200px}.breadcrumb-item{font-size:13px;padding:2px 6px;max-width:80px}}@media (max-width: 480px){.appbar{padding:0 12px}.breadcrumbs{max-width:150px}.breadcrumb-item{font-size:12px;max-width:60px}.right-section{gap:4px}.icon-button{width:32px;height:32px}}\n"] }]
        }], propDecorators: { isMenuOpen: [{
                type: Input
            }], menuToggle: [{
                type: Output
            }] } });

class BadgeComponent {
    constructor() {
        this.variant = 'gray';
        this.size = 'md';
        this.emphasis = 'high';
        this.label = 'Label';
        this.dismissible = false;
        this.disabled = false;
        this.dismiss = new EventEmitter();
    }
    onDismiss() {
        if (this.dismissible && !this.disabled) {
            this.dismiss.emit();
        }
    }
    get badgeClasses() {
        const classes = [
            'badge',
            `badge-${this.variant}`,
            `badge-${this.size}`,
            `badge-${this.emphasis}`,
        ];
        if (this.disabled) {
            classes.push('badge-disabled');
        }
        return classes.join(' ');
    }
    get iconColorClass() {
        // Use the same color logic as FeaturedIcon component
        // High emphasis: white icons on dark backgrounds
        // Medium/Low emphasis: darker color icons on light backgrounds
        const baseClass = `badge-icon-${this.variant}-${this.emphasis}`;
        return baseClass;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: BadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: BadgeComponent, isStandalone: true, selector: "app-badge", inputs: { variant: "variant", size: "size", emphasis: "emphasis", label: "label", icon: "icon", dismissible: "dismissible", disabled: "disabled" }, outputs: { dismiss: "dismiss" }, ngImport: i0, template: "<span [class]=\"badgeClasses\">\n  <!-- Icon (if provided) -->\n  <span\n    *ngIf=\"icon\"\n    class=\"material-symbols-outlined\"\n    [ngClass]=\"[\n      iconColorClass,\n      icon === 'dot' ? 'badge-icon-dot' : 'badge-icon-custom'\n    ]\"\n  >\n    {{ icon === 'dot' ? 'fiber_manual_record' : icon }}\n  </span>\n\n  <!-- Label -->\n  <span class=\"badge-label\">{{ label }}</span>\n\n  <!-- Dismiss button (if dismissible) -->\n  <button\n    *ngIf=\"dismissible\"\n    class=\"badge-dismiss\"\n    (click)=\"onDismiss()\"\n    [disabled]=\"disabled\"\n    type=\"button\"\n    aria-label=\"Dismiss\"\n  >\n    <span\n      class=\"material-symbols-outlined badge-dismiss-icon\"\n      [ngClass]=\"iconColorClass\"\n    >\n      close\n    </span>\n  </button>\n</span>\n", styles: [".badge{display:inline-flex;align-items:center;justify-content:center;gap:var(--spacing-sm);font-family:var(--font-inter);font-weight:var(--weight-medium);border-radius:var(--radius-full);white-space:nowrap;text-align:center;transition:all .2s ease;border:1px solid transparent;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;cursor:default}.badge-sm{padding:var(--spacing-xxs) var(--spacing-md);font-size:var(--text-sm-size);line-height:var(--text-xs-line)}.badge-md{padding:var(--spacing-xs) var(--spacing-md);font-size:var(--text-md-size);line-height:var(--text-smd-line)}.badge-lg{padding:var(--spacing-sm) var(--spacing-lg);font-size:var(--text-md-size);line-height:var(--text-md-line)}.badge-icon-dot{font-size:var(--icon-size-xs)!important;width:var(--icon-size-xs);height:var(--icon-size-xs);line-height:1;flex-shrink:0;font-variation-settings:\"FILL\" 1,\"wght\" 400,\"GRAD\" 0,\"opsz\" 16}.badge-sm .badge-icon-dot{font-size:var(--icon-size-2xs)!important;width:var(--icon-size-2xs);height:var(--icon-size-2xs)}.badge-lg .badge-icon-dot{font-size:var(--icon-size-sm)!important;width:var(--icon-size-sm);height:var(--icon-size-sm)}.badge-icon-custom{font-size:var(--icon-size-md)!important;font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 16}.badge-sm .badge-icon-custom{font-size:var(--icon-size-xs)!important}.badge-lg .badge-icon-custom{font-size:var(--icon-size-lg)!important}.badge-icon-gray-high,.badge-icon-blue-high,.badge-icon-red-high,.badge-icon-yellow-high,.badge-icon-green-high,.badge-icon-purple-high,.badge-icon-pink-high,.badge-icon-orange-high{color:var(--color-white)!important}.badge-icon-gray-medium{color:var(--color-neutral-600)!important}.badge-icon-blue-medium{color:var(--color-blue-600)!important}.badge-icon-red-medium{color:var(--color-error-600)!important}.badge-icon-yellow-medium{color:var(--color-yellow-600)!important}.badge-icon-green-medium{color:var(--color-success-600)!important}.badge-icon-purple-medium{color:var(--color-purple-600)!important}.badge-icon-pink-medium{color:var(--color-pink-600)!important}.badge-icon-orange-medium{color:var(--color-orange-600)!important}.badge-icon-gray-low{color:var(--color-neutral-500)!important}.badge-icon-blue-low{color:var(--color-blue-500)!important}.badge-icon-red-low{color:var(--color-error-500)!important}.badge-icon-yellow-low{color:var(--color-yellow-500)!important}.badge-icon-green-low{color:var(--color-success-500)!important}.badge-icon-purple-low{color:var(--color-purple-500)!important}.badge-icon-pink-low{color:var(--color-pink-500)!important}.badge-icon-orange-low{color:var(--color-orange-500)!important}.badge-label{flex-shrink:0}.badge-dismiss{display:flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:0;margin-left:var(--spacing-xxs);border-radius:var(--radius-full);transition:all .2s ease;width:16px;height:16px}.badge-dismiss-icon{font-size:var(--icon-size-sm)!important;width:var(--icon-size-sm);height:var(--icon-size-sm);line-height:1;font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 14}.badge-sm .badge-dismiss{width:14px;height:14px}.badge-sm .badge-dismiss-icon{font-size:var(--icon-size-xs)!important;width:var(--icon-size-xs);height:var(--icon-size-xs)}.badge-lg .badge-dismiss{width:18px;height:18px}.badge-lg .badge-dismiss-icon{font-size:var(--icon-size-md)!important;width:var(--icon-size-md);height:var(--icon-size-md)}.badge-dismiss-icon.badge-icon-gray-high,.badge-dismiss-icon.badge-icon-blue-high,.badge-dismiss-icon.badge-icon-red-high,.badge-dismiss-icon.badge-icon-yellow-high,.badge-dismiss-icon.badge-icon-green-high,.badge-dismiss-icon.badge-icon-purple-high,.badge-dismiss-icon.badge-icon-pink-high,.badge-dismiss-icon.badge-icon-orange-high{color:var(--color-white)!important}.badge-dismiss-icon.badge-icon-gray-medium{color:var(--color-neutral-600)!important}.badge-dismiss-icon.badge-icon-blue-medium{color:var(--color-blue-600)!important}.badge-dismiss-icon.badge-icon-red-medium{color:var(--color-error-600)!important}.badge-dismiss-icon.badge-icon-yellow-medium{color:var(--color-yellow-600)!important}.badge-dismiss-icon.badge-icon-green-medium{color:var(--color-success-600)!important}.badge-dismiss-icon.badge-icon-purple-medium{color:var(--color-purple-600)!important}.badge-dismiss-icon.badge-icon-pink-medium{color:var(--color-pink-600)!important}.badge-dismiss-icon.badge-icon-orange-medium{color:var(--color-orange-600)!important}.badge-dismiss-icon.badge-icon-gray-low{color:var(--color-neutral-500)!important}.badge-dismiss-icon.badge-icon-blue-low{color:var(--color-blue-500)!important}.badge-dismiss-icon.badge-icon-red-low{color:var(--color-error-500)!important}.badge-dismiss-icon.badge-icon-yellow-low{color:var(--color-yellow-500)!important}.badge-dismiss-icon.badge-icon-green-low{color:var(--color-success-500)!important}.badge-dismiss-icon.badge-icon-purple-low{color:var(--color-purple-500)!important}.badge-dismiss-icon.badge-icon-pink-low{color:var(--color-pink-500)!important}.badge-dismiss-icon.badge-icon-orange-low{color:var(--color-orange-500)!important}.badge-dismiss:hover{background-color:#fff3}.badge-dismiss:disabled{cursor:not-allowed;opacity:.5}.badge-high.badge-gray{background-color:var(--color-neutral-500);color:var(--color-white)}.badge-high.badge-blue{background-color:var(--color-blue-500);color:var(--color-white)}.badge-high.badge-red{background-color:var(--color-error-500);color:var(--color-white)}.badge-high.badge-yellow{background-color:var(--color-yellow-500);color:var(--color-white)}.badge-high.badge-green{background-color:var(--color-success-500);color:var(--color-white)}.badge-high.badge-purple{background-color:var(--color-purple-500);color:var(--color-white)}.badge-high.badge-pink{background-color:var(--color-pink-500);color:var(--color-white)}.badge-high.badge-orange{background-color:var(--color-orange-500);color:var(--color-white)}.badge-medium.badge-gray{background-color:var(--color-neutral-100);color:var(--color-neutral-700);border-color:var(--color-neutral-200)}.badge-medium.badge-blue{background-color:var(--color-blue-50);color:var(--color-blue-700);border-color:var(--color-blue-200)}.badge-medium.badge-red{background-color:var(--color-error-50);color:var(--color-error-700);border-color:var(--color-error-200)}.badge-medium.badge-yellow{background-color:var(--color-yellow-50);color:var(--color-yellow-700);border-color:var(--color-yellow-200)}.badge-medium.badge-green{background-color:var(--color-success-50);color:var(--color-success-700);border-color:var(--color-success-200)}.badge-medium.badge-purple{background-color:var(--color-purple-50);color:var(--color-purple-700);border-color:var(--color-purple-200)}.badge-medium.badge-pink{background-color:var(--color-pink-50);color:var(--color-pink-700);border-color:var(--color-pink-200)}.badge-medium.badge-orange{background-color:var(--color-orange-50);color:var(--color-orange-700);border-color:var(--color-orange-200)}.badge-low.badge-gray{background-color:transparent;color:var(--color-neutral-500);border-color:var(--color-neutral-300)}.badge-low.badge-blue{background-color:transparent;color:var(--color-blue-500);border-color:var(--color-blue-300)}.badge-low.badge-red{background-color:transparent;color:var(--color-error-500);border-color:var(--color-error-300)}.badge-low.badge-yellow{background-color:transparent;color:var(--color-yellow-500);border-color:var(--color-yellow-300)}.badge-low.badge-green{background-color:transparent;color:var(--color-success-500);border-color:var(--color-success-300)}.badge-low.badge-purple{background-color:transparent;color:var(--color-purple-500);border-color:var(--color-purple-300)}.badge-low.badge-pink{background-color:transparent;color:var(--color-pink-500);border-color:var(--color-pink-300)}.badge-low.badge-orange{background-color:transparent;color:var(--color-orange-500);border-color:var(--color-orange-300)}.badge-disabled{opacity:.5;cursor:not-allowed}.badge:has(.badge-dismiss):hover.badge-high.badge-gray{background-color:var(--color-neutral-600)}.badge:has(.badge-dismiss):hover.badge-high.badge-blue{background-color:var(--color-blue-600)}.badge:has(.badge-dismiss):hover.badge-high.badge-red{background-color:var(--color-error-600)}.badge:has(.badge-dismiss):hover.badge-high.badge-yellow{background-color:var(--color-yellow-600)}.badge:has(.badge-dismiss):hover.badge-high.badge-green{background-color:var(--color-success-600)}.badge:has(.badge-dismiss):hover.badge-high.badge-purple{background-color:var(--color-purple-600)}.badge:has(.badge-dismiss):hover.badge-high.badge-pink{background-color:var(--color-pink-600)}.badge:has(.badge-dismiss):hover.badge-high.badge-orange{background-color:var(--color-orange-600)}.badge:has(.badge-dismiss):hover.badge-medium.badge-gray{background-color:var(--color-neutral-200)}.badge:has(.badge-dismiss):hover.badge-medium.badge-blue{background-color:var(--color-blue-100)}.badge:has(.badge-dismiss):hover.badge-medium.badge-red{background-color:var(--color-error-100)}.badge:has(.badge-dismiss):hover.badge-medium.badge-yellow{background-color:var(--color-yellow-100)}.badge:has(.badge-dismiss):hover.badge-medium.badge-green{background-color:var(--color-success-100)}.badge:has(.badge-dismiss):hover.badge-medium.badge-purple{background-color:var(--color-purple-100)}.badge:has(.badge-dismiss):hover.badge-medium.badge-pink{background-color:var(--color-pink-100)}.badge:has(.badge-dismiss):hover.badge-medium.badge-orange{background-color:var(--color-orange-100)}.badge:has(.badge-dismiss):hover.badge-low.badge-gray{background-color:var(--color-neutral-50)}.badge:has(.badge-dismiss):hover.badge-low.badge-blue{background-color:var(--color-blue-50)}.badge:has(.badge-dismiss):hover.badge-low.badge-red{background-color:var(--color-error-50)}.badge:has(.badge-dismiss):hover.badge-low.badge-yellow{background-color:var(--color-yellow-50)}.badge:has(.badge-dismiss):hover.badge-low.badge-green{background-color:var(--color-success-50)}.badge:has(.badge-dismiss):hover.badge-low.badge-purple{background-color:var(--color-purple-50)}.badge:has(.badge-dismiss):hover.badge-low.badge-pink{background-color:var(--color-pink-50)}.badge:has(.badge-dismiss):hover.badge-low.badge-orange{background-color:var(--color-orange-50)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: BadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-badge', standalone: true, imports: [CommonModule], template: "<span [class]=\"badgeClasses\">\n  <!-- Icon (if provided) -->\n  <span\n    *ngIf=\"icon\"\n    class=\"material-symbols-outlined\"\n    [ngClass]=\"[\n      iconColorClass,\n      icon === 'dot' ? 'badge-icon-dot' : 'badge-icon-custom'\n    ]\"\n  >\n    {{ icon === 'dot' ? 'fiber_manual_record' : icon }}\n  </span>\n\n  <!-- Label -->\n  <span class=\"badge-label\">{{ label }}</span>\n\n  <!-- Dismiss button (if dismissible) -->\n  <button\n    *ngIf=\"dismissible\"\n    class=\"badge-dismiss\"\n    (click)=\"onDismiss()\"\n    [disabled]=\"disabled\"\n    type=\"button\"\n    aria-label=\"Dismiss\"\n  >\n    <span\n      class=\"material-symbols-outlined badge-dismiss-icon\"\n      [ngClass]=\"iconColorClass\"\n    >\n      close\n    </span>\n  </button>\n</span>\n", styles: [".badge{display:inline-flex;align-items:center;justify-content:center;gap:var(--spacing-sm);font-family:var(--font-inter);font-weight:var(--weight-medium);border-radius:var(--radius-full);white-space:nowrap;text-align:center;transition:all .2s ease;border:1px solid transparent;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;cursor:default}.badge-sm{padding:var(--spacing-xxs) var(--spacing-md);font-size:var(--text-sm-size);line-height:var(--text-xs-line)}.badge-md{padding:var(--spacing-xs) var(--spacing-md);font-size:var(--text-md-size);line-height:var(--text-smd-line)}.badge-lg{padding:var(--spacing-sm) var(--spacing-lg);font-size:var(--text-md-size);line-height:var(--text-md-line)}.badge-icon-dot{font-size:var(--icon-size-xs)!important;width:var(--icon-size-xs);height:var(--icon-size-xs);line-height:1;flex-shrink:0;font-variation-settings:\"FILL\" 1,\"wght\" 400,\"GRAD\" 0,\"opsz\" 16}.badge-sm .badge-icon-dot{font-size:var(--icon-size-2xs)!important;width:var(--icon-size-2xs);height:var(--icon-size-2xs)}.badge-lg .badge-icon-dot{font-size:var(--icon-size-sm)!important;width:var(--icon-size-sm);height:var(--icon-size-sm)}.badge-icon-custom{font-size:var(--icon-size-md)!important;font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 16}.badge-sm .badge-icon-custom{font-size:var(--icon-size-xs)!important}.badge-lg .badge-icon-custom{font-size:var(--icon-size-lg)!important}.badge-icon-gray-high,.badge-icon-blue-high,.badge-icon-red-high,.badge-icon-yellow-high,.badge-icon-green-high,.badge-icon-purple-high,.badge-icon-pink-high,.badge-icon-orange-high{color:var(--color-white)!important}.badge-icon-gray-medium{color:var(--color-neutral-600)!important}.badge-icon-blue-medium{color:var(--color-blue-600)!important}.badge-icon-red-medium{color:var(--color-error-600)!important}.badge-icon-yellow-medium{color:var(--color-yellow-600)!important}.badge-icon-green-medium{color:var(--color-success-600)!important}.badge-icon-purple-medium{color:var(--color-purple-600)!important}.badge-icon-pink-medium{color:var(--color-pink-600)!important}.badge-icon-orange-medium{color:var(--color-orange-600)!important}.badge-icon-gray-low{color:var(--color-neutral-500)!important}.badge-icon-blue-low{color:var(--color-blue-500)!important}.badge-icon-red-low{color:var(--color-error-500)!important}.badge-icon-yellow-low{color:var(--color-yellow-500)!important}.badge-icon-green-low{color:var(--color-success-500)!important}.badge-icon-purple-low{color:var(--color-purple-500)!important}.badge-icon-pink-low{color:var(--color-pink-500)!important}.badge-icon-orange-low{color:var(--color-orange-500)!important}.badge-label{flex-shrink:0}.badge-dismiss{display:flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:0;margin-left:var(--spacing-xxs);border-radius:var(--radius-full);transition:all .2s ease;width:16px;height:16px}.badge-dismiss-icon{font-size:var(--icon-size-sm)!important;width:var(--icon-size-sm);height:var(--icon-size-sm);line-height:1;font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 14}.badge-sm .badge-dismiss{width:14px;height:14px}.badge-sm .badge-dismiss-icon{font-size:var(--icon-size-xs)!important;width:var(--icon-size-xs);height:var(--icon-size-xs)}.badge-lg .badge-dismiss{width:18px;height:18px}.badge-lg .badge-dismiss-icon{font-size:var(--icon-size-md)!important;width:var(--icon-size-md);height:var(--icon-size-md)}.badge-dismiss-icon.badge-icon-gray-high,.badge-dismiss-icon.badge-icon-blue-high,.badge-dismiss-icon.badge-icon-red-high,.badge-dismiss-icon.badge-icon-yellow-high,.badge-dismiss-icon.badge-icon-green-high,.badge-dismiss-icon.badge-icon-purple-high,.badge-dismiss-icon.badge-icon-pink-high,.badge-dismiss-icon.badge-icon-orange-high{color:var(--color-white)!important}.badge-dismiss-icon.badge-icon-gray-medium{color:var(--color-neutral-600)!important}.badge-dismiss-icon.badge-icon-blue-medium{color:var(--color-blue-600)!important}.badge-dismiss-icon.badge-icon-red-medium{color:var(--color-error-600)!important}.badge-dismiss-icon.badge-icon-yellow-medium{color:var(--color-yellow-600)!important}.badge-dismiss-icon.badge-icon-green-medium{color:var(--color-success-600)!important}.badge-dismiss-icon.badge-icon-purple-medium{color:var(--color-purple-600)!important}.badge-dismiss-icon.badge-icon-pink-medium{color:var(--color-pink-600)!important}.badge-dismiss-icon.badge-icon-orange-medium{color:var(--color-orange-600)!important}.badge-dismiss-icon.badge-icon-gray-low{color:var(--color-neutral-500)!important}.badge-dismiss-icon.badge-icon-blue-low{color:var(--color-blue-500)!important}.badge-dismiss-icon.badge-icon-red-low{color:var(--color-error-500)!important}.badge-dismiss-icon.badge-icon-yellow-low{color:var(--color-yellow-500)!important}.badge-dismiss-icon.badge-icon-green-low{color:var(--color-success-500)!important}.badge-dismiss-icon.badge-icon-purple-low{color:var(--color-purple-500)!important}.badge-dismiss-icon.badge-icon-pink-low{color:var(--color-pink-500)!important}.badge-dismiss-icon.badge-icon-orange-low{color:var(--color-orange-500)!important}.badge-dismiss:hover{background-color:#fff3}.badge-dismiss:disabled{cursor:not-allowed;opacity:.5}.badge-high.badge-gray{background-color:var(--color-neutral-500);color:var(--color-white)}.badge-high.badge-blue{background-color:var(--color-blue-500);color:var(--color-white)}.badge-high.badge-red{background-color:var(--color-error-500);color:var(--color-white)}.badge-high.badge-yellow{background-color:var(--color-yellow-500);color:var(--color-white)}.badge-high.badge-green{background-color:var(--color-success-500);color:var(--color-white)}.badge-high.badge-purple{background-color:var(--color-purple-500);color:var(--color-white)}.badge-high.badge-pink{background-color:var(--color-pink-500);color:var(--color-white)}.badge-high.badge-orange{background-color:var(--color-orange-500);color:var(--color-white)}.badge-medium.badge-gray{background-color:var(--color-neutral-100);color:var(--color-neutral-700);border-color:var(--color-neutral-200)}.badge-medium.badge-blue{background-color:var(--color-blue-50);color:var(--color-blue-700);border-color:var(--color-blue-200)}.badge-medium.badge-red{background-color:var(--color-error-50);color:var(--color-error-700);border-color:var(--color-error-200)}.badge-medium.badge-yellow{background-color:var(--color-yellow-50);color:var(--color-yellow-700);border-color:var(--color-yellow-200)}.badge-medium.badge-green{background-color:var(--color-success-50);color:var(--color-success-700);border-color:var(--color-success-200)}.badge-medium.badge-purple{background-color:var(--color-purple-50);color:var(--color-purple-700);border-color:var(--color-purple-200)}.badge-medium.badge-pink{background-color:var(--color-pink-50);color:var(--color-pink-700);border-color:var(--color-pink-200)}.badge-medium.badge-orange{background-color:var(--color-orange-50);color:var(--color-orange-700);border-color:var(--color-orange-200)}.badge-low.badge-gray{background-color:transparent;color:var(--color-neutral-500);border-color:var(--color-neutral-300)}.badge-low.badge-blue{background-color:transparent;color:var(--color-blue-500);border-color:var(--color-blue-300)}.badge-low.badge-red{background-color:transparent;color:var(--color-error-500);border-color:var(--color-error-300)}.badge-low.badge-yellow{background-color:transparent;color:var(--color-yellow-500);border-color:var(--color-yellow-300)}.badge-low.badge-green{background-color:transparent;color:var(--color-success-500);border-color:var(--color-success-300)}.badge-low.badge-purple{background-color:transparent;color:var(--color-purple-500);border-color:var(--color-purple-300)}.badge-low.badge-pink{background-color:transparent;color:var(--color-pink-500);border-color:var(--color-pink-300)}.badge-low.badge-orange{background-color:transparent;color:var(--color-orange-500);border-color:var(--color-orange-300)}.badge-disabled{opacity:.5;cursor:not-allowed}.badge:has(.badge-dismiss):hover.badge-high.badge-gray{background-color:var(--color-neutral-600)}.badge:has(.badge-dismiss):hover.badge-high.badge-blue{background-color:var(--color-blue-600)}.badge:has(.badge-dismiss):hover.badge-high.badge-red{background-color:var(--color-error-600)}.badge:has(.badge-dismiss):hover.badge-high.badge-yellow{background-color:var(--color-yellow-600)}.badge:has(.badge-dismiss):hover.badge-high.badge-green{background-color:var(--color-success-600)}.badge:has(.badge-dismiss):hover.badge-high.badge-purple{background-color:var(--color-purple-600)}.badge:has(.badge-dismiss):hover.badge-high.badge-pink{background-color:var(--color-pink-600)}.badge:has(.badge-dismiss):hover.badge-high.badge-orange{background-color:var(--color-orange-600)}.badge:has(.badge-dismiss):hover.badge-medium.badge-gray{background-color:var(--color-neutral-200)}.badge:has(.badge-dismiss):hover.badge-medium.badge-blue{background-color:var(--color-blue-100)}.badge:has(.badge-dismiss):hover.badge-medium.badge-red{background-color:var(--color-error-100)}.badge:has(.badge-dismiss):hover.badge-medium.badge-yellow{background-color:var(--color-yellow-100)}.badge:has(.badge-dismiss):hover.badge-medium.badge-green{background-color:var(--color-success-100)}.badge:has(.badge-dismiss):hover.badge-medium.badge-purple{background-color:var(--color-purple-100)}.badge:has(.badge-dismiss):hover.badge-medium.badge-pink{background-color:var(--color-pink-100)}.badge:has(.badge-dismiss):hover.badge-medium.badge-orange{background-color:var(--color-orange-100)}.badge:has(.badge-dismiss):hover.badge-low.badge-gray{background-color:var(--color-neutral-50)}.badge:has(.badge-dismiss):hover.badge-low.badge-blue{background-color:var(--color-blue-50)}.badge:has(.badge-dismiss):hover.badge-low.badge-red{background-color:var(--color-error-50)}.badge:has(.badge-dismiss):hover.badge-low.badge-yellow{background-color:var(--color-yellow-50)}.badge:has(.badge-dismiss):hover.badge-low.badge-green{background-color:var(--color-success-50)}.badge:has(.badge-dismiss):hover.badge-low.badge-purple{background-color:var(--color-purple-50)}.badge:has(.badge-dismiss):hover.badge-low.badge-pink{background-color:var(--color-pink-50)}.badge:has(.badge-dismiss):hover.badge-low.badge-orange{background-color:var(--color-orange-50)}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], size: [{
                type: Input
            }], emphasis: [{
                type: Input
            }], label: [{
                type: Input
            }], icon: [{
                type: Input
            }], dismissible: [{
                type: Input
            }], disabled: [{
                type: Input
            }], dismiss: [{
                type: Output
            }] } });

class ChartTooltipComponent {
    constructor() {
        this.visible = false;
        this.x = 0;
        this.y = 0;
        this.header = '';
        this.items = [];
        this.total = '';
        this.showTotal = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ChartTooltipComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: ChartTooltipComponent, isStandalone: true, selector: "app-chart-tooltip", inputs: { visible: "visible", x: "x", y: "y", header: "header", items: "items", total: "total", showTotal: "showTotal" }, ngImport: i0, template: `
    <div
      class="chart-tooltip"
      [class.visible]="visible"
      [style.left.px]="x"
      [style.top.px]="y"
    >
      <div class="tooltip-content">
        <div class="tooltip-header" *ngIf="header">{{ header }}</div>
        <div class="tooltip-items">
          <div class="tooltip-item" *ngFor="let item of items">
            <span
              class="tooltip-dot"
              *ngIf="item.color"
              [style.background-color]="item.color"
            ></span>
            <span class="tooltip-label" *ngIf="item.label"
              >{{ item.label }}:</span
            >
            <span class="tooltip-value">{{ item.value }}</span>
          </div>
        </div>
        <div class="tooltip-total" *ngIf="showTotal && total">
          <span class="total-label">Total:</span>
          <span class="total-value">{{ total }}</span>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".chart-tooltip{position:fixed;z-index:10000;pointer-events:none;opacity:0;transition:opacity .15s ease;transform:translate(-50%,-100%);margin-top:-10px}.chart-tooltip.visible{opacity:1}.tooltip-content{background:var(--color-white);color:var(--color-neutral-900);padding:8px 12px;border-radius:6px;font-family:var(--font-inter);font-size:12px;line-height:1.4;box-shadow:0 2px 8px #0000001f,0 0 1px #00000014;border:1px solid rgba(0,0,0,.05)}.tooltip-header{font-weight:var(--weight-semibold);margin-bottom:4px;padding-bottom:4px;border-bottom:1px solid var(--color-neutral-100)}.tooltip-items{display:flex;flex-direction:column;gap:3px}.tooltip-item{display:flex;align-items:center;gap:6px;white-space:nowrap}.tooltip-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}.tooltip-label{color:var(--color-neutral-600);font-weight:var(--weight-regular)}.tooltip-value{color:var(--color-neutral-900);font-weight:var(--weight-medium)}.tooltip-total{margin-top:4px;padding-top:4px;border-top:1px solid var(--color-neutral-100);display:flex;justify-content:space-between;gap:12px}.total-label{color:var(--color-neutral-600);font-weight:var(--weight-medium)}.total-value{color:var(--color-neutral-900);font-weight:var(--weight-semibold)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ChartTooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-chart-tooltip', standalone: true, imports: [CommonModule], template: `
    <div
      class="chart-tooltip"
      [class.visible]="visible"
      [style.left.px]="x"
      [style.top.px]="y"
    >
      <div class="tooltip-content">
        <div class="tooltip-header" *ngIf="header">{{ header }}</div>
        <div class="tooltip-items">
          <div class="tooltip-item" *ngFor="let item of items">
            <span
              class="tooltip-dot"
              *ngIf="item.color"
              [style.background-color]="item.color"
            ></span>
            <span class="tooltip-label" *ngIf="item.label"
              >{{ item.label }}:</span
            >
            <span class="tooltip-value">{{ item.value }}</span>
          </div>
        </div>
        <div class="tooltip-total" *ngIf="showTotal && total">
          <span class="total-label">Total:</span>
          <span class="total-value">{{ total }}</span>
        </div>
      </div>
    </div>
  `, styles: [".chart-tooltip{position:fixed;z-index:10000;pointer-events:none;opacity:0;transition:opacity .15s ease;transform:translate(-50%,-100%);margin-top:-10px}.chart-tooltip.visible{opacity:1}.tooltip-content{background:var(--color-white);color:var(--color-neutral-900);padding:8px 12px;border-radius:6px;font-family:var(--font-inter);font-size:12px;line-height:1.4;box-shadow:0 2px 8px #0000001f,0 0 1px #00000014;border:1px solid rgba(0,0,0,.05)}.tooltip-header{font-weight:var(--weight-semibold);margin-bottom:4px;padding-bottom:4px;border-bottom:1px solid var(--color-neutral-100)}.tooltip-items{display:flex;flex-direction:column;gap:3px}.tooltip-item{display:flex;align-items:center;gap:6px;white-space:nowrap}.tooltip-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}.tooltip-label{color:var(--color-neutral-600);font-weight:var(--weight-regular)}.tooltip-value{color:var(--color-neutral-900);font-weight:var(--weight-medium)}.tooltip-total{margin-top:4px;padding-top:4px;border-top:1px solid var(--color-neutral-100);display:flex;justify-content:space-between;gap:12px}.total-label{color:var(--color-neutral-600);font-weight:var(--weight-medium)}.total-value{color:var(--color-neutral-900);font-weight:var(--weight-semibold)}\n"] }]
        }], propDecorators: { visible: [{
                type: Input
            }], x: [{
                type: Input
            }], y: [{
                type: Input
            }], header: [{
                type: Input
            }], items: [{
                type: Input
            }], total: [{
                type: Input
            }], showTotal: [{
                type: Input
            }] } });

class BarChartComponent {
    constructor() {
        // Tooltip properties
        this.tooltipVisible = false;
        this.tooltipX = 0;
        this.tooltipY = 0;
        this.tooltipHeader = '';
        this.tooltipItems = [];
        this.tooltipTotal = '';
        this.showTooltipTotal = false;
        this.data = {
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
        this.type = 'stacked';
        this.orientation = 'vertical';
        this.animated = true;
        this.maxHeight = 150;
        this.maxWidth = 200;
        this._processedData = [];
        this._lastDataHash = '';
    }
    get containerClasses() {
        const classes = ['bar-chart', this.type, this.orientation];
        if (this.animated) {
            classes.push('bar-chart-animated');
        }
        return classes.join(' ');
    }
    ngOnChanges(changes) {
        if (changes['data'] ||
            changes['type'] ||
            changes['maxHeight'] ||
            changes['maxWidth']) {
            this._processedData = this.calculateProcessedData();
        }
    }
    get processedData() {
        if (this._processedData.length === 0) {
            this._processedData = this.calculateProcessedData();
        }
        return this._processedData;
    }
    calculateProcessedData() {
        if (!this.data.series?.length || !this.data.series[0].values.length) {
            return [];
        }
        const bars = [];
        if (this.type === 'simple') {
            // For simple: each value becomes a separate bar with different colors
            const values = this.data.series[0].values;
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
                    const height = (value / maxValue) * this.maxHeight;
                    const width = (value / maxValue) * this.maxWidth;
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
                    category: this.data.categories?.[i],
                });
            }
        }
        else {
            // For stacked: stack all series values for each position
            const numBars = this.data.series[0].values.length;
            const maxTotal = Math.max(...Array.from({ length: numBars }, (_, i) => this.data.series.reduce((sum, series) => sum + (series.values[i] || 0), 0)));
            for (let barIndex = 0; barIndex < numBars; barIndex++) {
                const segments = [];
                let totalValue = 0;
                for (const series of this.data.series) {
                    const value = series.values[barIndex] || 0;
                    totalValue += value;
                    if (value > 0) {
                        const height = (value / maxTotal) * this.maxHeight;
                        const width = (value / maxTotal) * this.maxWidth;
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
                    category: this.data.categories?.[barIndex],
                });
            }
        }
        return bars;
    }
    onColumnHover(event, bar, columnIndex) {
        this.tooltipVisible = true;
        this.tooltipX = event.clientX;
        this.tooltipY = event.clientY;
        // Set header (category name if available)
        this.tooltipHeader = bar.category || `Column ${columnIndex + 1}`;
        // Create tooltip items for each series
        this.tooltipItems = [];
        bar.segments.forEach((segment) => {
            if (segment.seriesName && segment.value > 0) {
                this.tooltipItems.push({
                    color: segment.color,
                    label: segment.seriesName,
                    value: segment.value.toString(),
                });
            }
        });
        // Set total
        this.tooltipTotal = bar.totalValue.toString();
        this.showTooltipTotal = this.tooltipItems.length > 1;
    }
    onColumnMove(event) {
        if (this.tooltipVisible) {
            this.tooltipX = event.clientX;
            this.tooltipY = event.clientY;
        }
    }
    onColumnLeave() {
        this.tooltipVisible = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: BarChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: BarChartComponent, isStandalone: true, selector: "app-bar-chart", inputs: { data: "data", type: "type", orientation: "orientation", animated: "animated", maxHeight: "maxHeight", maxWidth: "maxWidth" }, usesOnChanges: true, ngImport: i0, template: `
    <!-- Vertical Bars -->
    <div
      *ngIf="orientation === 'vertical'"
      class="vertical-container"
      [ngClass]="containerClasses"
    >
      <div
        *ngFor="let bar of processedData; let i = index"
        class="bar-column vertical"
        (mouseenter)="onColumnHover($event, bar, i)"
        (mousemove)="onColumnMove($event)"
        (mouseleave)="onColumnLeave()"
      >
        <div
          *ngFor="let segment of bar.segments; let segIndex = index"
          class="bar-segment vertical"
          [style.height.px]="segment.height"
          [style.background-color]="segment.color"
        ></div>
      </div>
    </div>

    <!-- Horizontal Bars -->
    <div
      *ngIf="orientation === 'horizontal'"
      class="horizontal-container"
      [ngClass]="containerClasses"
    >
      <div
        *ngFor="let bar of processedData; let i = index"
        class="bar-row horizontal"
        (mouseenter)="onColumnHover($event, bar, i)"
        (mousemove)="onColumnMove($event)"
        (mouseleave)="onColumnLeave()"
      >
        <div
          *ngFor="let segment of bar.segments; let segIndex = index"
          class="bar-segment horizontal"
          [style.width.%]="(segment.value / bar.totalValue) * 100"
          [style.background-color]="segment.color"
        ></div>
      </div>
    </div>

    <!-- Tooltip -->
    <app-chart-tooltip
      [visible]="tooltipVisible"
      [x]="tooltipX"
      [y]="tooltipY"
      [header]="tooltipHeader"
      [items]="tooltipItems"
      [total]="tooltipTotal"
      [showTotal]="showTooltipTotal"
    >
    </app-chart-tooltip>
  `, isInline: true, styles: [".vertical-container{display:flex;align-items:flex-end;height:180px;width:100%}.vertical-container.simple{height:180px;width:100%}.bar-column.vertical{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;flex:1;gap:var(--spacing-xxs, 2px);margin:0 2px;border-radius:4px;transition:background-color .2s ease}.vertical-container.simple .bar-column.vertical{flex:1;margin:0 2px}.bar-segment.vertical{width:6px;border-radius:2px;min-height:2px;transition:all .3s ease;transform-origin:bottom}.horizontal-container{display:flex;flex-direction:column;justify-content:space-between;height:auto;min-height:140px;gap:var(--spacing-lg, 12px)}.horizontal-container.simple{height:auto;min-height:140px;gap:var(--spacing-lg, 12px)}.bar-row.horizontal{display:flex;align-items:center;width:100%;height:6px!important;min-height:6px;max-height:6px;gap:var(--spacing-xxs, 2px);margin:2px 0;border-radius:4px;transition:background-color .2s ease;padding:2px}.horizontal-container.simple .bar-row.horizontal{height:6px!important;min-height:6px;max-height:6px;margin:2px 0;padding:2px}.bar-segment.horizontal{height:100%!important;min-height:6px;max-height:6px;border-radius:2px;min-width:2px;transition:all .3s ease;transform-origin:left}.horizontal-container.simple .bar-segment.horizontal{min-width:2px;height:6px!important;min-height:6px;max-height:6px}.bar-column,.bar-row{cursor:pointer}.bar-column:hover,.bar-row:hover{background-color:var(--color-neutral-100)}.bar-column:hover .bar-segment,.bar-row:hover .bar-segment{opacity:.9;filter:brightness(1.05)}.bar-chart-animated .bar-segment.vertical{animation:barGrowVertical .8s cubic-bezier(.4,0,.2,1) both}.bar-chart-animated .bar-segment.horizontal{animation:barGrowHorizontal .8s cubic-bezier(.4,0,.2,1) both}@keyframes barGrowVertical{0%{transform:scaleY(0);opacity:0}to{transform:scaleY(1);opacity:1}}@keyframes barGrowHorizontal{0%{transform:scaleX(0);opacity:0}to{transform:scaleX(1);opacity:1}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ChartTooltipComponent, selector: "app-chart-tooltip", inputs: ["visible", "x", "y", "header", "items", "total", "showTotal"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: BarChartComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-bar-chart', standalone: true, imports: [CommonModule, ChartTooltipComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <!-- Vertical Bars -->
    <div
      *ngIf="orientation === 'vertical'"
      class="vertical-container"
      [ngClass]="containerClasses"
    >
      <div
        *ngFor="let bar of processedData; let i = index"
        class="bar-column vertical"
        (mouseenter)="onColumnHover($event, bar, i)"
        (mousemove)="onColumnMove($event)"
        (mouseleave)="onColumnLeave()"
      >
        <div
          *ngFor="let segment of bar.segments; let segIndex = index"
          class="bar-segment vertical"
          [style.height.px]="segment.height"
          [style.background-color]="segment.color"
        ></div>
      </div>
    </div>

    <!-- Horizontal Bars -->
    <div
      *ngIf="orientation === 'horizontal'"
      class="horizontal-container"
      [ngClass]="containerClasses"
    >
      <div
        *ngFor="let bar of processedData; let i = index"
        class="bar-row horizontal"
        (mouseenter)="onColumnHover($event, bar, i)"
        (mousemove)="onColumnMove($event)"
        (mouseleave)="onColumnLeave()"
      >
        <div
          *ngFor="let segment of bar.segments; let segIndex = index"
          class="bar-segment horizontal"
          [style.width.%]="(segment.value / bar.totalValue) * 100"
          [style.background-color]="segment.color"
        ></div>
      </div>
    </div>

    <!-- Tooltip -->
    <app-chart-tooltip
      [visible]="tooltipVisible"
      [x]="tooltipX"
      [y]="tooltipY"
      [header]="tooltipHeader"
      [items]="tooltipItems"
      [total]="tooltipTotal"
      [showTotal]="showTooltipTotal"
    >
    </app-chart-tooltip>
  `, styles: [".vertical-container{display:flex;align-items:flex-end;height:180px;width:100%}.vertical-container.simple{height:180px;width:100%}.bar-column.vertical{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;flex:1;gap:var(--spacing-xxs, 2px);margin:0 2px;border-radius:4px;transition:background-color .2s ease}.vertical-container.simple .bar-column.vertical{flex:1;margin:0 2px}.bar-segment.vertical{width:6px;border-radius:2px;min-height:2px;transition:all .3s ease;transform-origin:bottom}.horizontal-container{display:flex;flex-direction:column;justify-content:space-between;height:auto;min-height:140px;gap:var(--spacing-lg, 12px)}.horizontal-container.simple{height:auto;min-height:140px;gap:var(--spacing-lg, 12px)}.bar-row.horizontal{display:flex;align-items:center;width:100%;height:6px!important;min-height:6px;max-height:6px;gap:var(--spacing-xxs, 2px);margin:2px 0;border-radius:4px;transition:background-color .2s ease;padding:2px}.horizontal-container.simple .bar-row.horizontal{height:6px!important;min-height:6px;max-height:6px;margin:2px 0;padding:2px}.bar-segment.horizontal{height:100%!important;min-height:6px;max-height:6px;border-radius:2px;min-width:2px;transition:all .3s ease;transform-origin:left}.horizontal-container.simple .bar-segment.horizontal{min-width:2px;height:6px!important;min-height:6px;max-height:6px}.bar-column,.bar-row{cursor:pointer}.bar-column:hover,.bar-row:hover{background-color:var(--color-neutral-100)}.bar-column:hover .bar-segment,.bar-row:hover .bar-segment{opacity:.9;filter:brightness(1.05)}.bar-chart-animated .bar-segment.vertical{animation:barGrowVertical .8s cubic-bezier(.4,0,.2,1) both}.bar-chart-animated .bar-segment.horizontal{animation:barGrowHorizontal .8s cubic-bezier(.4,0,.2,1) both}@keyframes barGrowVertical{0%{transform:scaleY(0);opacity:0}to{transform:scaleY(1);opacity:1}}@keyframes barGrowHorizontal{0%{transform:scaleX(0);opacity:0}to{transform:scaleX(1);opacity:1}}\n"] }]
        }], propDecorators: { data: [{
                type: Input
            }], type: [{
                type: Input
            }], orientation: [{
                type: Input
            }], animated: [{
                type: Input
            }], maxHeight: [{
                type: Input
            }], maxWidth: [{
                type: Input
            }] } });

class ContainerComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: ContainerComponent, isStandalone: true, selector: "app-container", ngImport: i0, template: "<div class=\"container\">\n  <ng-content></ng-content>\n</div>\n", styles: [".container{display:flex;flex-direction:column;gap:var(--spacing-2xl);padding:var(--spacing-2xl);background:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:var(--radius-xl);width:fit-content;font-family:var(--font-inter)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-container', standalone: true, imports: [CommonModule], template: "<div class=\"container\">\n  <ng-content></ng-content>\n</div>\n", styles: [".container{display:flex;flex-direction:column;gap:var(--spacing-2xl);padding:var(--spacing-2xl);background:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:var(--radius-xl);width:fit-content;font-family:var(--font-inter)}\n"] }]
        }] });

class ContainerFooterComponent {
    constructor() {
        this.size = 'standard';
        this.buttonLabel = 'View report';
        this.onButtonClick = new EventEmitter();
    }
    get footerClasses() {
        const classes = ['container-footer', `container-footer-${this.size}`];
        return classes.join(' ');
    }
    handleButtonClick() {
        this.onButtonClick.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ContainerFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: ContainerFooterComponent, isStandalone: true, selector: "app-container-footer", inputs: { size: "size", buttonLabel: "buttonLabel" }, outputs: { onButtonClick: "onButtonClick" }, ngImport: i0, template: "<div [ngClass]=\"footerClasses\">\n  <div class=\"container-footer-content\">\n    <app-button\n      hierarchy=\"quaternary\"\n      type=\"link\"\n      size=\"md\"\n      [label]=\"buttonLabel\"\n      (onClick)=\"handleButtonClick()\"\n    >\n    </app-button>\n  </div>\n</div>\n", styles: [".container-footer{background:var(--color-white);border:1px solid var(--color-neutral-200);border-top:1px solid var(--color-neutral-200);border-radius:var(--radius-none) var(--radius-none) var(--radius-xl) var(--radius-xl);box-sizing:border-box;width:100%}.container-footer-content{display:flex;justify-content:flex-end;align-items:center;padding:var(--spacing-lg) var(--spacing-2xl)}.container-footer-minimal .container-footer-content{padding:var(--spacing-sm) var(--spacing-2xl)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: ButtonComponent, selector: "app-button", inputs: ["hierarchy", "type", "icon", "state", "size", "label", "iconName", "disabled", "loading"], outputs: ["onClick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ContainerFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-container-footer', standalone: true, imports: [CommonModule, ButtonComponent], template: "<div [ngClass]=\"footerClasses\">\n  <div class=\"container-footer-content\">\n    <app-button\n      hierarchy=\"quaternary\"\n      type=\"link\"\n      size=\"md\"\n      [label]=\"buttonLabel\"\n      (onClick)=\"handleButtonClick()\"\n    >\n    </app-button>\n  </div>\n</div>\n", styles: [".container-footer{background:var(--color-white);border:1px solid var(--color-neutral-200);border-top:1px solid var(--color-neutral-200);border-radius:var(--radius-none) var(--radius-none) var(--radius-xl) var(--radius-xl);box-sizing:border-box;width:100%}.container-footer-content{display:flex;justify-content:flex-end;align-items:center;padding:var(--spacing-lg) var(--spacing-2xl)}.container-footer-minimal .container-footer-content{padding:var(--spacing-sm) var(--spacing-2xl)}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], buttonLabel: [{
                type: Input
            }], onButtonClick: [{
                type: Output
            }] } });

class DropdownComponent {
    onDocumentClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.closeDropdown();
        }
    }
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.size = 'md';
        this.state = 'default';
        this.variant = 'outlined';
        this.label = 'Options';
        this.iconName = 'more_vert';
        this.disabled = false;
        this.menuItems = [];
        this.avatarSrc = '';
        this.avatarAlt = 'Avatar';
        this.avatarSize = 'md';
        this.showIcons = true;
        this.onItemClick = new EventEmitter();
        this.isOpen = false;
        this.dropdownPosition = 'bottom-right';
    }
    ngAfterViewInit() {
        // Initialize positioning after view is ready
    }
    toggleDropdown() {
        if (this.disabled)
            return;
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            // Calculate smart positioning when opening
            setTimeout(() => {
                this.calculatePosition();
            }, 0);
        }
    }
    closeDropdown() {
        this.isOpen = false;
    }
    onMenuItemClick(item) {
        if (item.disabled)
            return;
        this.onItemClick.emit(item);
        this.closeDropdown();
    }
    get buttonState() {
        if (this.disabled || this.state === 'disabled') {
            return 'disabled';
        }
        if (this.isOpen || this.state === 'focus') {
            return 'focus';
        }
        return 'default';
    }
    get trailingIconName() {
        if (this.isIconOnly) {
            return this.iconName;
        }
        return 'expand_more';
    }
    get buttonIconType() {
        return this.isIconOnly ? 'only' : 'trailing';
    }
    get buttonLabel() {
        return this.isIconOnly ? '' : this.label;
    }
    get buttonHierarchy() {
        return this.variant === 'ghost' || this.variant === 'icon-only-ghost'
            ? 'tertiary'
            : 'secondary';
    }
    get isIconOnly() {
        return (this.variant === 'icon-only-outlined' ||
            this.variant === 'icon-only-ghost');
    }
    get showAvatar() {
        return this.variant === 'avatar';
    }
    get showButton() {
        return this.variant !== 'avatar';
    }
    get dropdownMenuHeader() {
        if (this.variant === 'avatar') {
            return {
                avatarGroup: true,
                avatarSrc: this.avatarSrc,
                name: this.avatarName,
                email: this.avatarEmail,
            };
        }
        return this.header;
    }
    calculatePosition() {
        if (!this.dropdownMenu)
            return;
        // If position is forced, use it directly
        if (this.forcePosition) {
            this.dropdownPosition = this.forcePosition;
            console.log('Using forced position:', this.forcePosition);
            return;
        }
        const container = this.elementRef.nativeElement;
        const menu = this.dropdownMenu.nativeElement;
        const containerRect = container.getBoundingClientRect();
        const menuRect = menu.getBoundingClientRect();
        const viewport = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        const margin = 12; // Consistent margin for all directions
        // Calculate available space in all directions
        const spaceBelow = viewport.height - containerRect.bottom;
        const spaceAbove = containerRect.top;
        const spaceRight = viewport.width - containerRect.right;
        const spaceLeft = containerRect.left;
        // For avatar dropdown, we need to consider all possible positions
        const positions = [
            {
                name: 'bottom-right',
                space: Math.min(spaceBelow, spaceRight),
                fits: spaceBelow >= menuRect.height + margin &&
                    spaceRight >= menuRect.width,
            },
            {
                name: 'bottom-left',
                space: Math.min(spaceBelow, spaceLeft),
                fits: spaceBelow >= menuRect.height + margin && spaceLeft >= menuRect.width,
            },
            {
                name: 'bottom-center',
                space: spaceBelow,
                fits: spaceBelow >= menuRect.height + margin &&
                    containerRect.left + containerRect.width / 2 >= menuRect.width / 2 &&
                    viewport.width - (containerRect.left + containerRect.width / 2) >=
                        menuRect.width / 2,
            },
            {
                name: 'top-right',
                space: Math.min(spaceAbove, spaceRight),
                fits: spaceAbove >= menuRect.height + margin &&
                    spaceRight >= menuRect.width,
            },
            {
                name: 'top-left',
                space: Math.min(spaceAbove, spaceLeft),
                fits: spaceAbove >= menuRect.height + margin && spaceLeft >= menuRect.width,
            },
            {
                name: 'top-center',
                space: spaceAbove,
                fits: spaceAbove >= menuRect.height + margin &&
                    containerRect.left + containerRect.width / 2 >= menuRect.width / 2 &&
                    viewport.width - (containerRect.left + containerRect.width / 2) >=
                        menuRect.width / 2,
            },
            {
                name: 'right-top',
                space: Math.min(spaceRight, spaceAbove),
                fits: spaceRight >= menuRect.width + margin &&
                    spaceAbove >= menuRect.height / 2,
            },
            {
                name: 'right-center',
                space: spaceRight,
                fits: spaceRight >= menuRect.width + margin &&
                    containerRect.top + containerRect.height / 2 >= menuRect.height / 2 &&
                    viewport.height - (containerRect.top + containerRect.height / 2) >=
                        menuRect.height / 2,
            },
            {
                name: 'right-bottom',
                space: Math.min(spaceRight, spaceBelow),
                fits: spaceRight >= menuRect.width + margin &&
                    spaceBelow >= menuRect.height / 2,
            },
            {
                name: 'left-top',
                space: Math.min(spaceLeft, spaceAbove),
                fits: spaceLeft >= menuRect.width + margin &&
                    spaceAbove >= menuRect.height / 2,
            },
            {
                name: 'left-center',
                space: spaceLeft,
                fits: spaceLeft >= menuRect.width + margin &&
                    containerRect.top + containerRect.height / 2 >= menuRect.height / 2 &&
                    viewport.height - (containerRect.top + containerRect.height / 2) >=
                        menuRect.height / 2,
            },
            {
                name: 'left-bottom',
                space: Math.min(spaceLeft, spaceBelow),
                fits: spaceLeft >= menuRect.width + margin &&
                    spaceBelow >= menuRect.height / 2,
            },
        ];
        // Smart context detection for avatar positioning
        const containerWidth = containerRect.width;
        const containerLeft = containerRect.left;
        const containerRight = viewport.width - containerRect.right;
        // More aggressive sidebar detection
        const likelyInSidebar = this.variant === 'avatar' &&
            (containerLeft < 400 || // Avatar is close to left edge (likely in left sidebar)
                containerRight < 400 || // Avatar is close to right edge (likely in right sidebar)
                (containerWidth < 400 && (spaceRight > 200 || spaceLeft > 200))); // Narrow container with space to expand
        // Detect if we're in a header/navbar (wide container with limited vertical space)
        const likelyInHeader = this.variant === 'avatar' &&
            containerWidth > 500 &&
            Math.max(spaceAbove, spaceBelow) < 400;
        let preferredOrder;
        if (likelyInSidebar) {
            // Force side positioning for sidebars - be more aggressive
            if (containerLeft < containerRight) {
                // Avatar is on the left side of screen, force right positioning
                preferredOrder = [
                    'right-center',
                    'right-top',
                    'right-bottom',
                    'bottom-right',
                    'top-right',
                    'bottom-left',
                    'top-left',
                    'bottom-center',
                    'top-center',
                    'left-center',
                    'left-top',
                    'left-bottom',
                ];
            }
            else {
                // Avatar is on the right side of screen, force left positioning
                preferredOrder = [
                    'left-center',
                    'left-top',
                    'left-bottom',
                    'bottom-left',
                    'top-left',
                    'bottom-right',
                    'top-right',
                    'bottom-center',
                    'top-center',
                    'right-center',
                    'right-top',
                    'right-bottom',
                ];
            }
            // Debug info
            console.log('Sidebar detected!', {
                containerLeft,
                containerRight,
                spaceLeft,
                spaceRight,
                preferredOrder: preferredOrder[0],
            });
        }
        else if (likelyInHeader) {
            // Header: Prefer bottom positions first
            preferredOrder = [
                'bottom-center',
                'bottom-right',
                'bottom-left',
                'top-center',
                'top-right',
                'top-left',
                'right-center',
                'left-center',
                'right-top',
                'right-bottom',
                'left-top',
                'left-bottom',
            ];
        }
        else if (this.variant === 'avatar') {
            // General avatar: Prefer bottom, then sides
            preferredOrder = [
                'bottom-right',
                'bottom-left',
                'bottom-center',
                'right-center',
                'left-center',
                'top-right',
                'top-left',
                'top-center',
                'right-top',
                'right-bottom',
                'left-top',
                'left-bottom',
            ];
        }
        else {
            // Button variants: Traditional dropdown behavior
            preferredOrder = [
                'bottom-right',
                'bottom-left',
                'top-right',
                'top-left',
                'bottom-center',
                'top-center',
                'right-center',
                'left-center',
                'right-top',
                'right-bottom',
                'left-top',
                'left-bottom',
            ];
        }
        // Find the first position that fits perfectly
        let bestPosition = positions.find((pos) => pos.fits && preferredOrder.includes(pos.name));
        // If no perfect fit, find the position with most available space
        if (!bestPosition) {
            bestPosition = positions.sort((a, b) => b.space - a.space)[0];
        }
        this.dropdownPosition = bestPosition.name;
    }
    get positionClasses() {
        return `dropdown-menu-${this.dropdownPosition}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: DropdownComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: DropdownComponent, isStandalone: true, selector: "app-dropdown", inputs: { size: "size", state: "state", variant: "variant", label: "label", iconName: "iconName", disabled: "disabled", menuItems: "menuItems", header: "header", avatarSrc: "avatarSrc", avatarAlt: "avatarAlt", avatarSize: "avatarSize", avatarName: "avatarName", avatarEmail: "avatarEmail", showIcons: "showIcons", forcePosition: "forcePosition" }, outputs: { onItemClick: "onItemClick" }, host: { listeners: { "document:click": "onDocumentClick($event)" } }, viewQueries: [{ propertyName: "dropdownMenu", first: true, predicate: ["dropdownMenu"], descendants: true }], ngImport: i0, template: "<div class=\"dropdown-container\">\n  <!-- Dropdown Button -->\n  <app-button\n    *ngIf=\"showButton\"\n    [hierarchy]=\"buttonHierarchy\"\n    type=\"outline\"\n    [icon]=\"buttonIconType\"\n    [size]=\"size\"\n    [label]=\"buttonLabel\"\n    [iconName]=\"trailingIconName\"\n    [state]=\"buttonState\"\n    [disabled]=\"disabled\"\n    [class.dropdown-open]=\"isOpen\"\n    (onClick)=\"toggleDropdown()\"\n  >\n  </app-button>\n\n  <!-- Dropdown Avatar -->\n  <app-avatar\n    *ngIf=\"showAvatar\"\n    type=\"image\"\n    [size]=\"avatarSize\"\n    [imageSrc]=\"avatarSrc\"\n    [alt]=\"avatarAlt\"\n    (click)=\"!disabled ? toggleDropdown() : null\"\n    class=\"dropdown-avatar\"\n    [class.dropdown-avatar-focus]=\"isOpen\"\n    [class.dropdown-avatar-disabled]=\"disabled\"\n  >\n  </app-avatar>\n\n  <!-- Dropdown Menu -->\n  <div class=\"dropdown-menu\" [ngClass]=\"positionClasses\" #dropdownMenu>\n    <app-dropdown-menu\n      [visible]=\"isOpen\"\n      [showIcons]=\"showIcons\"\n      [menuItems]=\"menuItems\"\n      [header]=\"dropdownMenuHeader\"\n    >\n    </app-dropdown-menu>\n  </div>\n</div>\n", styles: [".dropdown-container{position:relative;display:inline-block}.dropdown-container ::ng-deep .btn-icon-trailing .material-symbols-outlined{transition:transform var(--animation-duration-fast) var(--animation-ease-smooth);display:inline-block}.dropdown-container ::ng-deep .dropdown-open .btn-icon-trailing .material-symbols-outlined{transform:rotate(180deg)}.dropdown-menu{position:absolute;z-index:1000;transition:all .15s ease}.dropdown-menu-bottom-right{top:100%;right:0;margin-top:12px}.dropdown-menu-bottom-left{top:100%;left:0;margin-top:12px}.dropdown-menu-bottom-center{top:100%;left:50%;transform:translate(-50%);margin-top:12px}.dropdown-menu-top-right{bottom:100%;right:0;margin-bottom:12px}.dropdown-menu-top-left{bottom:100%;left:0;margin-bottom:12px}.dropdown-menu-top-center{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:12px}.dropdown-menu-right-top{left:100%;top:0;margin-left:12px}.dropdown-menu-right-center{left:100%;top:50%;transform:translateY(-50%);margin-left:12px}.dropdown-menu-right-bottom{left:100%;bottom:0;margin-left:12px}.dropdown-menu-left-top{right:100%;top:0;margin-right:12px}.dropdown-menu-left-center{right:100%;top:50%;transform:translateY(-50%);margin-right:12px}.dropdown-menu-left-bottom{right:100%;bottom:0;margin-right:12px}.dropdown-avatar{cursor:pointer;transition:all .15s ease;border-radius:var(--radius-full);display:block}.dropdown-avatar:hover .avatar,.dropdown-avatar-focus .avatar{box-shadow:0 0 0 2px var(--color-brand-500),0 0 0 4px var(--color-brand-100)!important}.dropdown-avatar[disabled]{cursor:not-allowed;opacity:.5}.dropdown-avatar[disabled]:hover{transform:none;box-shadow:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ButtonComponent, selector: "app-button", inputs: ["hierarchy", "type", "icon", "state", "size", "label", "iconName", "disabled", "loading"], outputs: ["onClick"] }, { kind: "component", type: AvatarComponent, selector: "app-avatar", inputs: ["size", "type", "status", "text", "imageSrc", "alt"] }, { kind: "component", type: DropdownMenuComponent, selector: "app-dropdown-menu", inputs: ["header", "menuItems", "visible", "showIcons", "scrollable"], outputs: ["itemClick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dropdown', standalone: true, imports: [
                        CommonModule,
                        ButtonComponent,
                        AvatarComponent,
                        DropdownMenuComponent,
                    ], template: "<div class=\"dropdown-container\">\n  <!-- Dropdown Button -->\n  <app-button\n    *ngIf=\"showButton\"\n    [hierarchy]=\"buttonHierarchy\"\n    type=\"outline\"\n    [icon]=\"buttonIconType\"\n    [size]=\"size\"\n    [label]=\"buttonLabel\"\n    [iconName]=\"trailingIconName\"\n    [state]=\"buttonState\"\n    [disabled]=\"disabled\"\n    [class.dropdown-open]=\"isOpen\"\n    (onClick)=\"toggleDropdown()\"\n  >\n  </app-button>\n\n  <!-- Dropdown Avatar -->\n  <app-avatar\n    *ngIf=\"showAvatar\"\n    type=\"image\"\n    [size]=\"avatarSize\"\n    [imageSrc]=\"avatarSrc\"\n    [alt]=\"avatarAlt\"\n    (click)=\"!disabled ? toggleDropdown() : null\"\n    class=\"dropdown-avatar\"\n    [class.dropdown-avatar-focus]=\"isOpen\"\n    [class.dropdown-avatar-disabled]=\"disabled\"\n  >\n  </app-avatar>\n\n  <!-- Dropdown Menu -->\n  <div class=\"dropdown-menu\" [ngClass]=\"positionClasses\" #dropdownMenu>\n    <app-dropdown-menu\n      [visible]=\"isOpen\"\n      [showIcons]=\"showIcons\"\n      [menuItems]=\"menuItems\"\n      [header]=\"dropdownMenuHeader\"\n    >\n    </app-dropdown-menu>\n  </div>\n</div>\n", styles: [".dropdown-container{position:relative;display:inline-block}.dropdown-container ::ng-deep .btn-icon-trailing .material-symbols-outlined{transition:transform var(--animation-duration-fast) var(--animation-ease-smooth);display:inline-block}.dropdown-container ::ng-deep .dropdown-open .btn-icon-trailing .material-symbols-outlined{transform:rotate(180deg)}.dropdown-menu{position:absolute;z-index:1000;transition:all .15s ease}.dropdown-menu-bottom-right{top:100%;right:0;margin-top:12px}.dropdown-menu-bottom-left{top:100%;left:0;margin-top:12px}.dropdown-menu-bottom-center{top:100%;left:50%;transform:translate(-50%);margin-top:12px}.dropdown-menu-top-right{bottom:100%;right:0;margin-bottom:12px}.dropdown-menu-top-left{bottom:100%;left:0;margin-bottom:12px}.dropdown-menu-top-center{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:12px}.dropdown-menu-right-top{left:100%;top:0;margin-left:12px}.dropdown-menu-right-center{left:100%;top:50%;transform:translateY(-50%);margin-left:12px}.dropdown-menu-right-bottom{left:100%;bottom:0;margin-left:12px}.dropdown-menu-left-top{right:100%;top:0;margin-right:12px}.dropdown-menu-left-center{right:100%;top:50%;transform:translateY(-50%);margin-right:12px}.dropdown-menu-left-bottom{right:100%;bottom:0;margin-right:12px}.dropdown-avatar{cursor:pointer;transition:all .15s ease;border-radius:var(--radius-full);display:block}.dropdown-avatar:hover .avatar,.dropdown-avatar-focus .avatar{box-shadow:0 0 0 2px var(--color-brand-500),0 0 0 4px var(--color-brand-100)!important}.dropdown-avatar[disabled]{cursor:not-allowed;opacity:.5}.dropdown-avatar[disabled]:hover{transform:none;box-shadow:none}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { size: [{
                type: Input
            }], state: [{
                type: Input
            }], variant: [{
                type: Input
            }], label: [{
                type: Input
            }], iconName: [{
                type: Input
            }], disabled: [{
                type: Input
            }], menuItems: [{
                type: Input
            }], header: [{
                type: Input
            }], avatarSrc: [{
                type: Input
            }], avatarAlt: [{
                type: Input
            }], avatarSize: [{
                type: Input
            }], avatarName: [{
                type: Input
            }], avatarEmail: [{
                type: Input
            }], showIcons: [{
                type: Input
            }], forcePosition: [{
                type: Input
            }], onItemClick: [{
                type: Output
            }], dropdownMenu: [{
                type: ViewChild,
                args: ['dropdownMenu', { static: false }]
            }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class FeaturedIconComponent {
    constructor() {
        this.size = 'md';
        this.color = 'gray';
        this.style = 'outlined';
        this.icon = 'star';
    }
    get containerClasses() {
        const classes = [
            'featured-icon',
            `featured-icon-${this.size}`,
            `featured-icon-${this.color}`,
            `featured-icon-${this.style}`,
        ];
        return classes.join(' ');
    }
    get iconSize() {
        const sizes = {
            sm: 16,
            md: 20,
            lg: 24,
            xl: 32,
        };
        return sizes[this.size];
    }
    get materialIconClass() {
        return `material-symbols-outlined icon-${this.size}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: FeaturedIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: FeaturedIconComponent, isStandalone: true, selector: "app-featured-icon", inputs: { size: "size", color: "color", style: "style", icon: "icon" }, ngImport: i0, template: "<div [ngClass]=\"containerClasses\">\n  <span [ngClass]=\"materialIconClass\">\n    {{ icon }}\n  </span>\n</div>\n", styles: [".featured-icon{display:inline-flex;align-items:center;justify-content:center;transition:all .2s ease}.featured-icon-sm{width:32px;height:32px;border-radius:6px}.featured-icon-md{width:40px;height:40px;border-radius:8px}.featured-icon-lg{width:48px;height:48px;border-radius:10px}.featured-icon-xl{width:56px;height:56px;border-radius:12px}.icon-sm{font-size:var(--icon-size-xs)!important;width:var(--icon-size-xs);height:var(--icon-size-xs);line-height:1}.icon-md{font-size:var(--icon-size-md)!important;width:var(--icon-size-md);height:var(--icon-size-md);line-height:1}.icon-lg{font-size:var(--icon-size-lg)!important;width:var(--icon-size-lg);height:var(--icon-size-lg);line-height:1}.icon-xl{font-size:var(--icon-size-2xl)!important;width:var(--icon-size-2xl);height:var(--icon-size-2xl);line-height:1}.featured-icon-brand.featured-icon-outlined{background-color:var(--color-white);border:1px solid var(--color-neutral-200)}.featured-icon-brand.featured-icon-outlined .material-symbols-outlined{color:var(--color-brand-600)}.featured-icon-gray.featured-icon-outlined{background-color:var(--color-white);border:1px solid var(--color-neutral-200)}.featured-icon-gray.featured-icon-outlined .material-symbols-outlined{color:var(--color-neutral-600)}.featured-icon-error.featured-icon-outlined{background-color:var(--color-white);border:1px solid var(--color-neutral-200)}.featured-icon-error.featured-icon-outlined .material-symbols-outlined{color:var(--color-error-600)}.featured-icon-warning.featured-icon-outlined{background-color:var(--color-white);border:1px solid var(--color-neutral-200)}.featured-icon-warning.featured-icon-outlined .material-symbols-outlined{color:var(--color-warning-600)}.featured-icon-success.featured-icon-outlined{background-color:var(--color-white);border:1px solid var(--color-neutral-200)}.featured-icon-success.featured-icon-outlined .material-symbols-outlined{color:var(--color-success-600)}.featured-icon-highlight.featured-icon-outlined{background-color:var(--color-white);border:1px solid var(--color-neutral-200)}.featured-icon-highlight.featured-icon-outlined .material-symbols-outlined{color:var(--color-purple-600)}.featured-icon-brand.featured-icon-filled{background-color:var(--color-brand-100);border:none}.featured-icon-brand.featured-icon-filled .material-symbols-outlined{color:var(--color-brand-600)}.featured-icon-gray.featured-icon-filled{background-color:var(--color-neutral-100);border:none}.featured-icon-gray.featured-icon-filled .material-symbols-outlined{color:var(--color-neutral-600)}.featured-icon-error.featured-icon-filled{background-color:var(--color-error-100);border:none}.featured-icon-error.featured-icon-filled .material-symbols-outlined{color:var(--color-error-600)}.featured-icon-warning.featured-icon-filled{background-color:var(--color-warning-200);border:none}.featured-icon-warning.featured-icon-filled .material-symbols-outlined{color:var(--color-warning-600)}.featured-icon-success.featured-icon-filled{background-color:var(--color-success-100);border:none}.featured-icon-success.featured-icon-filled .material-symbols-outlined{color:var(--color-success-600)}.featured-icon-highlight.featured-icon-filled{background-color:var(--color-purple-200);border:none}.featured-icon-highlight.featured-icon-filled .material-symbols-outlined{color:var(--color-purple-600)}.material-symbols-outlined{font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 24;-webkit-user-select:none;user-select:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: FeaturedIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-featured-icon', standalone: true, imports: [CommonModule], template: "<div [ngClass]=\"containerClasses\">\n  <span [ngClass]=\"materialIconClass\">\n    {{ icon }}\n  </span>\n</div>\n", styles: [".featured-icon{display:inline-flex;align-items:center;justify-content:center;transition:all .2s ease}.featured-icon-sm{width:32px;height:32px;border-radius:6px}.featured-icon-md{width:40px;height:40px;border-radius:8px}.featured-icon-lg{width:48px;height:48px;border-radius:10px}.featured-icon-xl{width:56px;height:56px;border-radius:12px}.icon-sm{font-size:var(--icon-size-xs)!important;width:var(--icon-size-xs);height:var(--icon-size-xs);line-height:1}.icon-md{font-size:var(--icon-size-md)!important;width:var(--icon-size-md);height:var(--icon-size-md);line-height:1}.icon-lg{font-size:var(--icon-size-lg)!important;width:var(--icon-size-lg);height:var(--icon-size-lg);line-height:1}.icon-xl{font-size:var(--icon-size-2xl)!important;width:var(--icon-size-2xl);height:var(--icon-size-2xl);line-height:1}.featured-icon-brand.featured-icon-outlined{background-color:var(--color-white);border:1px solid var(--color-neutral-200)}.featured-icon-brand.featured-icon-outlined .material-symbols-outlined{color:var(--color-brand-600)}.featured-icon-gray.featured-icon-outlined{background-color:var(--color-white);border:1px solid var(--color-neutral-200)}.featured-icon-gray.featured-icon-outlined .material-symbols-outlined{color:var(--color-neutral-600)}.featured-icon-error.featured-icon-outlined{background-color:var(--color-white);border:1px solid var(--color-neutral-200)}.featured-icon-error.featured-icon-outlined .material-symbols-outlined{color:var(--color-error-600)}.featured-icon-warning.featured-icon-outlined{background-color:var(--color-white);border:1px solid var(--color-neutral-200)}.featured-icon-warning.featured-icon-outlined .material-symbols-outlined{color:var(--color-warning-600)}.featured-icon-success.featured-icon-outlined{background-color:var(--color-white);border:1px solid var(--color-neutral-200)}.featured-icon-success.featured-icon-outlined .material-symbols-outlined{color:var(--color-success-600)}.featured-icon-highlight.featured-icon-outlined{background-color:var(--color-white);border:1px solid var(--color-neutral-200)}.featured-icon-highlight.featured-icon-outlined .material-symbols-outlined{color:var(--color-purple-600)}.featured-icon-brand.featured-icon-filled{background-color:var(--color-brand-100);border:none}.featured-icon-brand.featured-icon-filled .material-symbols-outlined{color:var(--color-brand-600)}.featured-icon-gray.featured-icon-filled{background-color:var(--color-neutral-100);border:none}.featured-icon-gray.featured-icon-filled .material-symbols-outlined{color:var(--color-neutral-600)}.featured-icon-error.featured-icon-filled{background-color:var(--color-error-100);border:none}.featured-icon-error.featured-icon-filled .material-symbols-outlined{color:var(--color-error-600)}.featured-icon-warning.featured-icon-filled{background-color:var(--color-warning-200);border:none}.featured-icon-warning.featured-icon-filled .material-symbols-outlined{color:var(--color-warning-600)}.featured-icon-success.featured-icon-filled{background-color:var(--color-success-100);border:none}.featured-icon-success.featured-icon-filled .material-symbols-outlined{color:var(--color-success-600)}.featured-icon-highlight.featured-icon-filled{background-color:var(--color-purple-200);border:none}.featured-icon-highlight.featured-icon-filled .material-symbols-outlined{color:var(--color-purple-600)}.material-symbols-outlined{font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 24;-webkit-user-select:none;user-select:none}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], color: [{
                type: Input
            }], style: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });

class ProductSwitcherService {
    constructor() {
        this.isOpenSubject = new BehaviorSubject(false);
        this.isOpen$ = this.isOpenSubject.asObservable();
        this.isClosingSubject = new BehaviorSubject(false);
        this.isClosing$ = this.isClosingSubject.asObservable();
        this.anchorPositionSubject = new BehaviorSubject(null);
        this.anchorPosition$ = this.anchorPositionSubject.asObservable();
    }
    open(anchorElement) {
        const rect = anchorElement.getBoundingClientRect();
        this.anchorPositionSubject.next({
            top: rect.bottom + 8,
            left: rect.left,
        });
        this.isClosingSubject.next(false);
        this.isOpenSubject.next(true);
    }
    close() {
        this.isClosingSubject.next(true);
        // Wait for animation to complete before hiding
        setTimeout(() => {
            this.isOpenSubject.next(false);
            this.isClosingSubject.next(false);
        }, 200); // Match the animation duration
    }
    toggle(anchorElement) {
        if (this.isOpenSubject.value) {
            this.close();
        }
        else {
            this.open(anchorElement);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ProductSwitcherService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ProductSwitcherService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ProductSwitcherService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class LogoBoxComponent {
    constructor(productSwitcherService) {
        this.productSwitcherService = productSwitcherService;
        this.logoType = 'actabl';
        this.isOpen$ = this.productSwitcherService.isOpen$;
    }
    onLogoClick() {
        if (this.logoActive) {
            this.productSwitcherService.toggle(this.logoActive.nativeElement);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: LogoBoxComponent, deps: [{ token: ProductSwitcherService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: LogoBoxComponent, isStandalone: true, selector: "app-logo-box", inputs: { logoType: "logoType" }, viewQueries: [{ propertyName: "logoActive", first: true, predicate: ["logoActive"], descendants: true, read: ElementRef }], ngImport: i0, template: "<div class=\"logo-box\" [class.dropdown-open]=\"isOpen$ | async\">\n  <div class=\"logo-active\" #logoActive (click)=\"onLogoClick()\">\n    <div class=\"logo\" [ngClass]=\"'logo-' + logoType\"></div>\n  </div>\n  <div class=\"logo-more-products\"></div>\n</div>\n", styles: [".logo-box{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;position:relative;width:40px;flex-shrink:0;isolation:isolate}.logo-active{background-color:var(--color-brand-600);box-sizing:border-box;display:flex;gap:var(--spacing-lg);align-items:center;justify-content:center;padding:var(--spacing-sm);position:relative;border-radius:var(--radius-md);flex-shrink:0;width:40px;height:40px;z-index:2;transition:background-color .3s ease;cursor:pointer}.logo-box:hover .logo-active,.logo-box.dropdown-open .logo-active{background-color:var(--color-brand-700)}.logo{overflow:hidden;position:relative;flex-shrink:0;width:32px;height:32px;background-size:contain;background-repeat:no-repeat;background-position:center;transition:background-image .4s cubic-bezier(.08,.52,.52,1)}.logo-more-products{position:absolute;background-color:var(--color-brand-200);right:2px;bottom:-4px;border-radius:5px;width:36px;height:35px;z-index:1;transition:transform .3s ease}.logo-box:hover .logo-more-products,.logo-box.dropdown-open .logo-more-products{transform:translateY(-4px)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: LogoBoxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-logo-box', standalone: true, imports: [CommonModule], template: "<div class=\"logo-box\" [class.dropdown-open]=\"isOpen$ | async\">\n  <div class=\"logo-active\" #logoActive (click)=\"onLogoClick()\">\n    <div class=\"logo\" [ngClass]=\"'logo-' + logoType\"></div>\n  </div>\n  <div class=\"logo-more-products\"></div>\n</div>\n", styles: [".logo-box{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;position:relative;width:40px;flex-shrink:0;isolation:isolate}.logo-active{background-color:var(--color-brand-600);box-sizing:border-box;display:flex;gap:var(--spacing-lg);align-items:center;justify-content:center;padding:var(--spacing-sm);position:relative;border-radius:var(--radius-md);flex-shrink:0;width:40px;height:40px;z-index:2;transition:background-color .3s ease;cursor:pointer}.logo-box:hover .logo-active,.logo-box.dropdown-open .logo-active{background-color:var(--color-brand-700)}.logo{overflow:hidden;position:relative;flex-shrink:0;width:32px;height:32px;background-size:contain;background-repeat:no-repeat;background-position:center;transition:background-image .4s cubic-bezier(.08,.52,.52,1)}.logo-more-products{position:absolute;background-color:var(--color-brand-200);right:2px;bottom:-4px;border-radius:5px;width:36px;height:35px;z-index:1;transition:transform .3s ease}.logo-box:hover .logo-more-products,.logo-box.dropdown-open .logo-more-products{transform:translateY(-4px)}\n"] }]
        }], ctorParameters: () => [{ type: ProductSwitcherService }], propDecorators: { logoType: [{
                type: Input
            }], logoActive: [{
                type: ViewChild,
                args: ['logoActive', { read: ElementRef }]
            }] } });

class NavItemComponent {
    constructor(router) {
        this.router = router;
        this.isActive = false;
        this.itemClick = new EventEmitter();
    }
    navigate() {
        this.itemClick.emit(this.label);
        const route = this.getRouteFromLabel();
        if (route) {
            this.router.navigate([route]);
        }
    }
    getRouteFromLabel() {
        switch (this.label) {
            case 'Dashboard':
                return '/dashboard';
            default:
                return null;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: NavItemComponent, deps: [{ token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: NavItemComponent, isStandalone: true, selector: "app-nav-item", inputs: { icon: "icon", label: "label", isActive: "isActive" }, outputs: { itemClick: "itemClick" }, ngImport: i0, template: "<div class=\"nav-item\" [class.active]=\"isActive\">\n  <button\n    class=\"nav-item-button\"\n    [attr.aria-label]=\"label\"\n    type=\"button\"\n    (click)=\"navigate()\"\n  >\n    <span class=\"material-symbols-outlined icon\">{{ icon }}</span>\n  </button>\n  <p class=\"nav-item-label\">{{ label }}</p>\n</div>\n", styles: [".nav-item{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;position:relative;flex-shrink:0;width:52px;height:100%}.nav-item-button{background-color:var(--color-white);box-sizing:border-box;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:var(--spacing-md);position:relative;border-radius:var(--radius-sm);flex-shrink:0;transition:background-color .2s ease;cursor:pointer;border:none}.nav-item-button:hover{background-color:var(--color-neutral-50)}.nav-item.active .nav-item-button{background-color:var(--color-brand-50)}.nav-item-button .icon{width:20px;height:20px;display:block;flex-shrink:0;color:var(--color-neutral-500);transition:color .2s ease;font-size:20px}.nav-item-button:hover .icon{color:var(--color-neutral-700)}.nav-item.active .nav-item-button .icon{color:var(--color-brand-600)}.nav-item-label{font-family:var(--font-inter);font-weight:var(--weight-medium);height:18px;line-height:18px;font-style:normal;overflow:hidden;text-overflow:ellipsis;position:relative;flex-shrink:0;color:var(--color-graycool-700);font-size:10px;text-align:center;white-space:nowrap;width:100%;max-width:100%;margin:var(--spacing-none);box-sizing:border-box}.nav-item.active .nav-item-label{color:var(--color-graycool-700)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: NavItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-nav-item', standalone: true, imports: [CommonModule], template: "<div class=\"nav-item\" [class.active]=\"isActive\">\n  <button\n    class=\"nav-item-button\"\n    [attr.aria-label]=\"label\"\n    type=\"button\"\n    (click)=\"navigate()\"\n  >\n    <span class=\"material-symbols-outlined icon\">{{ icon }}</span>\n  </button>\n  <p class=\"nav-item-label\">{{ label }}</p>\n</div>\n", styles: [".nav-item{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;position:relative;flex-shrink:0;width:52px;height:100%}.nav-item-button{background-color:var(--color-white);box-sizing:border-box;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:var(--spacing-md);position:relative;border-radius:var(--radius-sm);flex-shrink:0;transition:background-color .2s ease;cursor:pointer;border:none}.nav-item-button:hover{background-color:var(--color-neutral-50)}.nav-item.active .nav-item-button{background-color:var(--color-brand-50)}.nav-item-button .icon{width:20px;height:20px;display:block;flex-shrink:0;color:var(--color-neutral-500);transition:color .2s ease;font-size:20px}.nav-item-button:hover .icon{color:var(--color-neutral-700)}.nav-item.active .nav-item-button .icon{color:var(--color-brand-600)}.nav-item-label{font-family:var(--font-inter);font-weight:var(--weight-medium);height:18px;line-height:18px;font-style:normal;overflow:hidden;text-overflow:ellipsis;position:relative;flex-shrink:0;color:var(--color-graycool-700);font-size:10px;text-align:center;white-space:nowrap;width:100%;max-width:100%;margin:var(--spacing-none);box-sizing:border-box}.nav-item.active .nav-item-label{color:var(--color-graycool-700)}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.Router }], propDecorators: { icon: [{
                type: Input
            }], label: [{
                type: Input
            }], isActive: [{
                type: Input
            }], itemClick: [{
                type: Output
            }] } });

class NotificationComponent {
    constructor() {
        this.type = 'primary';
        this.breakpoint = 'desktop';
        this.title = '';
        this.description = '';
        this.dismissible = true;
        this.featuredIconStyle = 'outlined';
        this.animated = false;
        this.closing = false;
        this.action = new EventEmitter();
        this.dismiss = new EventEmitter();
        this.close = new EventEmitter();
    }
    onAction() {
        this.action.emit();
    }
    onDismiss() {
        this.dismiss.emit();
    }
    onClose() {
        this.close.emit();
    }
    get notificationClasses() {
        const classes = [
            'notification',
            `notification-${this.type}`,
            `notification-${this.breakpoint}`,
        ];
        if (this.animated) {
            classes.push('notification-animated');
        }
        if (this.closing) {
            classes.push('notification-closing');
        }
        return classes.join(' ');
    }
    get iconName() {
        switch (this.type) {
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
                return this.icon || '';
        }
    }
    get featuredIconColor() {
        switch (this.type) {
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
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: NotificationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: NotificationComponent, isStandalone: true, selector: "app-notification", inputs: { type: "type", breakpoint: "breakpoint", title: "title", description: "description", actionText: "actionText", dismissText: "dismissText", dismissible: "dismissible", imageUrl: "imageUrl", avatarUrl: "avatarUrl", progress: "progress", icon: "icon", featuredIconStyle: "featuredIconStyle", animated: "animated", closing: "closing" }, outputs: { action: "action", dismiss: "dismiss", close: "close" }, ngImport: i0, template: "<div [ngClass]=\"notificationClasses\">\n  <!-- Image variant (only for mobile) -->\n  <div\n    *ngIf=\"type === 'image' && breakpoint === 'mobile'\"\n    class=\"notification-image-container\"\n  >\n    <img [src]=\"imageUrl\" alt=\"Notification image\" class=\"notification-image\" />\n  </div>\n\n  <!-- Main content area -->\n  <div class=\"notification-content\">\n    <!-- Icon/Avatar/Progress section -->\n    <div\n      class=\"notification-icon-wrapper\"\n      *ngIf=\"type !== 'no-icon' && type !== 'image'\"\n    >\n      <!-- Avatar -->\n      <div *ngIf=\"type === 'avatar'\" class=\"notification-avatar\">\n        <img [src]=\"avatarUrl\" alt=\"Avatar\" />\n      </div>\n\n      <!-- Progress indicator -->\n      <div *ngIf=\"type === 'progress'\" class=\"notification-progress\">\n        <svg class=\"progress-ring\" viewBox=\"0 0 20 20\">\n          <circle\n            class=\"progress-ring-circle-bg\"\n            cx=\"10\"\n            cy=\"10\"\n            r=\"8\"\n            fill=\"none\"\n            stroke-width=\"2\"\n          />\n          <circle\n            class=\"progress-ring-circle\"\n            cx=\"10\"\n            cy=\"10\"\n            r=\"8\"\n            fill=\"none\"\n            stroke-width=\"2\"\n            [style.stroke-dasharray]=\"'50.27 50.27'\"\n            [style.stroke-dashoffset]=\"50.27 - (50.27 * (progress || 0)) / 100\"\n          />\n        </svg>\n      </div>\n\n      <!-- Featured Icon -->\n      <app-featured-icon\n        *ngIf=\"type !== 'avatar' && type !== 'progress'\"\n        [size]=\"'md'\"\n        [color]=\"featuredIconColor\"\n        [style]=\"featuredIconStyle\"\n        [icon]=\"iconName\"\n      >\n      </app-featured-icon>\n    </div>\n\n    <!-- Text content -->\n    <div class=\"notification-text\">\n      <div class=\"notification-text-wrapper\">\n        <h3 class=\"notification-title\" *ngIf=\"title\">{{ title }}</h3>\n        <p class=\"notification-description\" *ngIf=\"description\">\n          {{ description }}\n        </p>\n      </div>\n\n      <!-- Actions -->\n      <div class=\"notification-actions\" *ngIf=\"actionText || dismissText\">\n        <app-button\n          *ngIf=\"dismissText\"\n          [label]=\"dismissText\"\n          [hierarchy]=\"'tertiary'\"\n          [size]=\"'sm'\"\n          (onClick)=\"onDismiss()\"\n        >\n        </app-button>\n        <app-button\n          *ngIf=\"actionText\"\n          [label]=\"actionText\"\n          [hierarchy]=\"'quaternary'\"\n          [size]=\"'sm'\"\n          (onClick)=\"onAction()\"\n        >\n        </app-button>\n      </div>\n    </div>\n  </div>\n\n  <!-- Close button -->\n  <button *ngIf=\"dismissible\" class=\"notification-close\" (click)=\"onClose()\">\n    <span class=\"material-symbols-outlined notification-close-icon\">\n      close\n    </span>\n  </button>\n</div>\n", styles: [".notification{position:relative;display:flex;background:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:var(--radius-xl);box-shadow:var(--shadow-modal);overflow:hidden;font-family:var(--font-inter)}@keyframes slideInRight{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}@keyframes slideOutRight{0%{transform:translate(0);opacity:1}to{transform:translate(100%);opacity:0}}.notification-animated{animation:slideInRight .3s ease-out forwards}.notification-closing{animation:slideOutRight .3s ease-in forwards}.notification-container{position:fixed;top:var(--spacing-3xl);right:var(--spacing-3xl);z-index:1000;pointer-events:none}.notification-container .notification{pointer-events:auto;margin-bottom:var(--spacing-xl)}.notification-desktop{padding:var(--spacing-3xl);max-width:400px}.notification-mobile{width:100%;max-width:343px}.notification-mobile .notification-content{padding:var(--spacing-3xl)}.notification-image-container{width:100%;height:160px;overflow:hidden;flex-shrink:0}.notification-image{width:100%;height:100%;object-fit:cover;display:block}.notification-mobile.notification-image .notification-content{padding-top:var(--spacing-xl);padding-bottom:var(--spacing-xl)}.notification-content{display:flex;align-items:flex-start;gap:var(--spacing-xl);flex:1;padding-right:var(--spacing-4xl)}.notification-mobile .notification-content{flex-direction:column;padding-right:var(--spacing-4xl)}.notification-icon-wrapper{position:relative;flex-shrink:0}.notification-icon-wrapper app-featured-icon{flex-shrink:0}.notification-avatar{width:var(--spacing-5xl);height:var(--spacing-5xl);border-radius:var(--radius-full);overflow:hidden;flex-shrink:0}.notification-avatar img{width:100%;height:100%;object-fit:cover}.notification-progress{width:var(--spacing-5xl);height:var(--spacing-5xl)}.progress-ring{transform:rotate(-90deg)}.progress-ring-circle-bg{stroke:var(--color-neutral-200)}.progress-ring-circle{stroke:var(--color-brand-600);transition:stroke-dashoffset .3s ease}.notification-text{flex:1;display:flex;flex-direction:column;gap:var(--spacing-lg);padding-top:var(--spacing-xxs)}.notification-text-wrapper{display:flex;flex-direction:column;gap:var(--spacing-xs)}.notification-title{font-size:var(--text-sm-size);font-weight:var(--weight-semibold);line-height:var(--text-sm-line);color:var(--color-neutral-800);margin:0}.notification-description{font-size:var(--text-sm-size);font-weight:var(--weight-regular);line-height:var(--text-sm-line);color:var(--color-neutral-600);margin:0}.notification-actions{display:flex;gap:var(--spacing-lg)}.notification-button{padding:0;border:none;background:none;font-family:var(--font-inter);font-size:var(--text-sm-size);font-weight:var(--weight-semibold);line-height:var(--text-sm-line);cursor:pointer;transition:opacity .2s ease}.notification-button:hover{opacity:.8}.notification-button:focus-visible{outline:2px solid var(--color-brand-500);outline-offset:var(--spacing-xxs);border-radius:var(--radius-xs)}.notification-button-primary{color:var(--color-brand-600)}.notification-button-secondary{color:var(--color-neutral-600)}.notification-close{position:absolute;top:var(--spacing-md);right:var(--spacing-md);width:var(--spacing-4xl);height:var(--spacing-4xl);display:flex;align-items:center;justify-content:center;background:transparent;border:none;border-radius:var(--radius-md);cursor:pointer;color:var(--color-neutral-400);transition:background-color .2s ease,color .2s ease}.notification-close-icon{font-size:20px!important;width:20px;height:20px;line-height:1;font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 24}.notification-close:hover{background-color:var(--color-neutral-50);color:var(--color-neutral-600)}.notification-close:focus-visible{outline:2px solid var(--color-brand-500);outline-offset:var(--spacing-xxs)}@media (max-width: 480px){.notification-desktop{max-width:100%}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: FeaturedIconComponent, selector: "app-featured-icon", inputs: ["size", "color", "style", "icon"] }, { kind: "component", type: ButtonComponent, selector: "app-button", inputs: ["hierarchy", "type", "icon", "state", "size", "label", "iconName", "disabled", "loading"], outputs: ["onClick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: NotificationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-notification', standalone: true, imports: [CommonModule, FeaturedIconComponent, ButtonComponent], template: "<div [ngClass]=\"notificationClasses\">\n  <!-- Image variant (only for mobile) -->\n  <div\n    *ngIf=\"type === 'image' && breakpoint === 'mobile'\"\n    class=\"notification-image-container\"\n  >\n    <img [src]=\"imageUrl\" alt=\"Notification image\" class=\"notification-image\" />\n  </div>\n\n  <!-- Main content area -->\n  <div class=\"notification-content\">\n    <!-- Icon/Avatar/Progress section -->\n    <div\n      class=\"notification-icon-wrapper\"\n      *ngIf=\"type !== 'no-icon' && type !== 'image'\"\n    >\n      <!-- Avatar -->\n      <div *ngIf=\"type === 'avatar'\" class=\"notification-avatar\">\n        <img [src]=\"avatarUrl\" alt=\"Avatar\" />\n      </div>\n\n      <!-- Progress indicator -->\n      <div *ngIf=\"type === 'progress'\" class=\"notification-progress\">\n        <svg class=\"progress-ring\" viewBox=\"0 0 20 20\">\n          <circle\n            class=\"progress-ring-circle-bg\"\n            cx=\"10\"\n            cy=\"10\"\n            r=\"8\"\n            fill=\"none\"\n            stroke-width=\"2\"\n          />\n          <circle\n            class=\"progress-ring-circle\"\n            cx=\"10\"\n            cy=\"10\"\n            r=\"8\"\n            fill=\"none\"\n            stroke-width=\"2\"\n            [style.stroke-dasharray]=\"'50.27 50.27'\"\n            [style.stroke-dashoffset]=\"50.27 - (50.27 * (progress || 0)) / 100\"\n          />\n        </svg>\n      </div>\n\n      <!-- Featured Icon -->\n      <app-featured-icon\n        *ngIf=\"type !== 'avatar' && type !== 'progress'\"\n        [size]=\"'md'\"\n        [color]=\"featuredIconColor\"\n        [style]=\"featuredIconStyle\"\n        [icon]=\"iconName\"\n      >\n      </app-featured-icon>\n    </div>\n\n    <!-- Text content -->\n    <div class=\"notification-text\">\n      <div class=\"notification-text-wrapper\">\n        <h3 class=\"notification-title\" *ngIf=\"title\">{{ title }}</h3>\n        <p class=\"notification-description\" *ngIf=\"description\">\n          {{ description }}\n        </p>\n      </div>\n\n      <!-- Actions -->\n      <div class=\"notification-actions\" *ngIf=\"actionText || dismissText\">\n        <app-button\n          *ngIf=\"dismissText\"\n          [label]=\"dismissText\"\n          [hierarchy]=\"'tertiary'\"\n          [size]=\"'sm'\"\n          (onClick)=\"onDismiss()\"\n        >\n        </app-button>\n        <app-button\n          *ngIf=\"actionText\"\n          [label]=\"actionText\"\n          [hierarchy]=\"'quaternary'\"\n          [size]=\"'sm'\"\n          (onClick)=\"onAction()\"\n        >\n        </app-button>\n      </div>\n    </div>\n  </div>\n\n  <!-- Close button -->\n  <button *ngIf=\"dismissible\" class=\"notification-close\" (click)=\"onClose()\">\n    <span class=\"material-symbols-outlined notification-close-icon\">\n      close\n    </span>\n  </button>\n</div>\n", styles: [".notification{position:relative;display:flex;background:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:var(--radius-xl);box-shadow:var(--shadow-modal);overflow:hidden;font-family:var(--font-inter)}@keyframes slideInRight{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}@keyframes slideOutRight{0%{transform:translate(0);opacity:1}to{transform:translate(100%);opacity:0}}.notification-animated{animation:slideInRight .3s ease-out forwards}.notification-closing{animation:slideOutRight .3s ease-in forwards}.notification-container{position:fixed;top:var(--spacing-3xl);right:var(--spacing-3xl);z-index:1000;pointer-events:none}.notification-container .notification{pointer-events:auto;margin-bottom:var(--spacing-xl)}.notification-desktop{padding:var(--spacing-3xl);max-width:400px}.notification-mobile{width:100%;max-width:343px}.notification-mobile .notification-content{padding:var(--spacing-3xl)}.notification-image-container{width:100%;height:160px;overflow:hidden;flex-shrink:0}.notification-image{width:100%;height:100%;object-fit:cover;display:block}.notification-mobile.notification-image .notification-content{padding-top:var(--spacing-xl);padding-bottom:var(--spacing-xl)}.notification-content{display:flex;align-items:flex-start;gap:var(--spacing-xl);flex:1;padding-right:var(--spacing-4xl)}.notification-mobile .notification-content{flex-direction:column;padding-right:var(--spacing-4xl)}.notification-icon-wrapper{position:relative;flex-shrink:0}.notification-icon-wrapper app-featured-icon{flex-shrink:0}.notification-avatar{width:var(--spacing-5xl);height:var(--spacing-5xl);border-radius:var(--radius-full);overflow:hidden;flex-shrink:0}.notification-avatar img{width:100%;height:100%;object-fit:cover}.notification-progress{width:var(--spacing-5xl);height:var(--spacing-5xl)}.progress-ring{transform:rotate(-90deg)}.progress-ring-circle-bg{stroke:var(--color-neutral-200)}.progress-ring-circle{stroke:var(--color-brand-600);transition:stroke-dashoffset .3s ease}.notification-text{flex:1;display:flex;flex-direction:column;gap:var(--spacing-lg);padding-top:var(--spacing-xxs)}.notification-text-wrapper{display:flex;flex-direction:column;gap:var(--spacing-xs)}.notification-title{font-size:var(--text-sm-size);font-weight:var(--weight-semibold);line-height:var(--text-sm-line);color:var(--color-neutral-800);margin:0}.notification-description{font-size:var(--text-sm-size);font-weight:var(--weight-regular);line-height:var(--text-sm-line);color:var(--color-neutral-600);margin:0}.notification-actions{display:flex;gap:var(--spacing-lg)}.notification-button{padding:0;border:none;background:none;font-family:var(--font-inter);font-size:var(--text-sm-size);font-weight:var(--weight-semibold);line-height:var(--text-sm-line);cursor:pointer;transition:opacity .2s ease}.notification-button:hover{opacity:.8}.notification-button:focus-visible{outline:2px solid var(--color-brand-500);outline-offset:var(--spacing-xxs);border-radius:var(--radius-xs)}.notification-button-primary{color:var(--color-brand-600)}.notification-button-secondary{color:var(--color-neutral-600)}.notification-close{position:absolute;top:var(--spacing-md);right:var(--spacing-md);width:var(--spacing-4xl);height:var(--spacing-4xl);display:flex;align-items:center;justify-content:center;background:transparent;border:none;border-radius:var(--radius-md);cursor:pointer;color:var(--color-neutral-400);transition:background-color .2s ease,color .2s ease}.notification-close-icon{font-size:20px!important;width:20px;height:20px;line-height:1;font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 24}.notification-close:hover{background-color:var(--color-neutral-50);color:var(--color-neutral-600)}.notification-close:focus-visible{outline:2px solid var(--color-brand-500);outline-offset:var(--spacing-xxs)}@media (max-width: 480px){.notification-desktop{max-width:100%}}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], breakpoint: [{
                type: Input
            }], title: [{
                type: Input
            }], description: [{
                type: Input
            }], actionText: [{
                type: Input
            }], dismissText: [{
                type: Input
            }], dismissible: [{
                type: Input
            }], imageUrl: [{
                type: Input
            }], avatarUrl: [{
                type: Input
            }], progress: [{
                type: Input
            }], icon: [{
                type: Input
            }], featuredIconStyle: [{
                type: Input
            }], animated: [{
                type: Input
            }], closing: [{
                type: Input
            }], action: [{
                type: Output
            }], dismiss: [{
                type: Output
            }], close: [{
                type: Output
            }] } });

class PageNavigationSingleLevelComponent {
    constructor() {
        this.label = '';
        this.icon = 'radio_button_unchecked';
        this.isActive = false;
        this.itemClick = new EventEmitter();
    }
    onClick() {
        this.itemClick.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: PageNavigationSingleLevelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: PageNavigationSingleLevelComponent, isStandalone: true, selector: "app-page-navigation-single-level", inputs: { label: "label", icon: "icon", badge: "badge", isActive: "isActive" }, outputs: { itemClick: "itemClick" }, ngImport: i0, template: "<div class=\"single-level-item\" [class.selected]=\"isActive\" (click)=\"onClick()\">\n  <span class=\"material-symbols-outlined single-level-icon\">{{ icon }}</span>\n  <span class=\"single-level-label\">{{ label }}</span>\n  <app-badge\n    *ngIf=\"badge\"\n    [label]=\"badge.toString()\"\n    variant=\"gray\"\n    size=\"sm\"\n    emphasis=\"medium\"\n  ></app-badge>\n</div>\n", styles: [".single-level-item{display:flex;align-items:center;padding:var(--spacing-lg);cursor:pointer;gap:var(--spacing-md);position:relative;transition:all .15s ease;min-height:40px;box-sizing:border-box;border-radius:6px;margin:var(--spacing-none) var(--spacing-xs);background-color:transparent;border:1px solid transparent}.single-level-item.selected{background-color:transparent;border:1px solid transparent}.single-level-item:hover{background-color:var(--color-neutral-50)!important}.single-level-icon{flex-shrink:0;color:var(--color-neutral-600);transition:color .15s ease;font-size:20px;width:20px;height:20px}.single-level-item.selected .single-level-icon{color:var(--color-neutral-900)}.single-level-label{font-family:Inter,sans-serif;font-size:14px;font-weight:500;line-height:20px;color:var(--color-neutral-600);flex:1;transition:all .15s ease}.single-level-item.selected .single-level-label{color:var(--color-neutral-900);font-weight:600}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: BadgeComponent, selector: "app-badge", inputs: ["variant", "size", "emphasis", "label", "icon", "dismissible", "disabled"], outputs: ["dismiss"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: PageNavigationSingleLevelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-navigation-single-level', standalone: true, imports: [CommonModule, BadgeComponent], template: "<div class=\"single-level-item\" [class.selected]=\"isActive\" (click)=\"onClick()\">\n  <span class=\"material-symbols-outlined single-level-icon\">{{ icon }}</span>\n  <span class=\"single-level-label\">{{ label }}</span>\n  <app-badge\n    *ngIf=\"badge\"\n    [label]=\"badge.toString()\"\n    variant=\"gray\"\n    size=\"sm\"\n    emphasis=\"medium\"\n  ></app-badge>\n</div>\n", styles: [".single-level-item{display:flex;align-items:center;padding:var(--spacing-lg);cursor:pointer;gap:var(--spacing-md);position:relative;transition:all .15s ease;min-height:40px;box-sizing:border-box;border-radius:6px;margin:var(--spacing-none) var(--spacing-xs);background-color:transparent;border:1px solid transparent}.single-level-item.selected{background-color:transparent;border:1px solid transparent}.single-level-item:hover{background-color:var(--color-neutral-50)!important}.single-level-icon{flex-shrink:0;color:var(--color-neutral-600);transition:color .15s ease;font-size:20px;width:20px;height:20px}.single-level-item.selected .single-level-icon{color:var(--color-neutral-900)}.single-level-label{font-family:Inter,sans-serif;font-size:14px;font-weight:500;line-height:20px;color:var(--color-neutral-600);flex:1;transition:all .15s ease}.single-level-item.selected .single-level-label{color:var(--color-neutral-900);font-weight:600}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], icon: [{
                type: Input
            }], badge: [{
                type: Input
            }], isActive: [{
                type: Input
            }], itemClick: [{
                type: Output
            }] } });

class PageNavigationChildComponent {
    constructor() {
        this.label = '';
        this.isActive = false;
        this.itemClick = new EventEmitter();
    }
    onClick() {
        this.itemClick.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: PageNavigationChildComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: PageNavigationChildComponent, isStandalone: true, selector: "app-page-navigation-child", inputs: { label: "label", badge: "badge", isActive: "isActive" }, outputs: { itemClick: "itemClick" }, ngImport: i0, template: "<div class=\"child-nav-item\" [class.selected]=\"isActive\" (click)=\"onClick()\">\n  <span class=\"child-nav-label\">{{ label }}</span>\n  <app-badge\n    *ngIf=\"badge\"\n    [label]=\"badge.toString()\"\n    variant=\"gray\"\n    size=\"sm\"\n    emphasis=\"medium\"\n  ></app-badge>\n</div>\n", styles: [".child-nav-item{display:flex;align-items:center;padding:var(--spacing-md) var(--spacing-lg);cursor:pointer;gap:var(--spacing-md);position:relative;transition:all .15s ease;min-height:36px;box-sizing:border-box;border-radius:6px;margin:var(--spacing-none) var(--spacing-xs);background-color:transparent;border:1px solid transparent;margin-left:9px}.child-nav-item:hover:not(.selected){background-color:var(--color-neutral-50);position:relative;z-index:1}.child-nav-item:hover:not(.selected):after{content:\"\";position:absolute;left:-20px;top:0;bottom:0;width:20px;background-color:var(--color-neutral-50);z-index:1;border-radius:6px 0 0 6px}.child-nav-item.selected{background-color:transparent}.child-nav-item.selected:before{content:\"\";position:absolute;left:-4.5px;top:50%;transform:translateY(-50%);width:2px;height:24px;background-color:var(--color-brand-600);z-index:3}.child-nav-label{font-family:Inter,sans-serif;font-size:14px;font-weight:500;line-height:20px;color:var(--color-neutral-600);flex:1;transition:all .15s ease}.child-nav-item.selected .child-nav-label{color:var(--color-brand-600);font-weight:600}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: BadgeComponent, selector: "app-badge", inputs: ["variant", "size", "emphasis", "label", "icon", "dismissible", "disabled"], outputs: ["dismiss"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: PageNavigationChildComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-navigation-child', standalone: true, imports: [CommonModule, BadgeComponent], template: "<div class=\"child-nav-item\" [class.selected]=\"isActive\" (click)=\"onClick()\">\n  <span class=\"child-nav-label\">{{ label }}</span>\n  <app-badge\n    *ngIf=\"badge\"\n    [label]=\"badge.toString()\"\n    variant=\"gray\"\n    size=\"sm\"\n    emphasis=\"medium\"\n  ></app-badge>\n</div>\n", styles: [".child-nav-item{display:flex;align-items:center;padding:var(--spacing-md) var(--spacing-lg);cursor:pointer;gap:var(--spacing-md);position:relative;transition:all .15s ease;min-height:36px;box-sizing:border-box;border-radius:6px;margin:var(--spacing-none) var(--spacing-xs);background-color:transparent;border:1px solid transparent;margin-left:9px}.child-nav-item:hover:not(.selected){background-color:var(--color-neutral-50);position:relative;z-index:1}.child-nav-item:hover:not(.selected):after{content:\"\";position:absolute;left:-20px;top:0;bottom:0;width:20px;background-color:var(--color-neutral-50);z-index:1;border-radius:6px 0 0 6px}.child-nav-item.selected{background-color:transparent}.child-nav-item.selected:before{content:\"\";position:absolute;left:-4.5px;top:50%;transform:translateY(-50%);width:2px;height:24px;background-color:var(--color-brand-600);z-index:3}.child-nav-label{font-family:Inter,sans-serif;font-size:14px;font-weight:500;line-height:20px;color:var(--color-neutral-600);flex:1;transition:all .15s ease}.child-nav-item.selected .child-nav-label{color:var(--color-brand-600);font-weight:600}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], badge: [{
                type: Input
            }], isActive: [{
                type: Input
            }], itemClick: [{
                type: Output
            }] } });

class PageNavigationMultiLevelComponent {
    constructor() {
        this.label = '';
        this.icon = 'radio_button_unchecked';
        this.children = [];
        this.isExpanded = false;
        this.itemClick = new EventEmitter();
        this.isHovered = false;
    }
    get hasActiveChild() {
        return this.children.some((child) => child.isActive);
    }
    onMouseEnter() {
        this.isHovered = true;
    }
    onMouseLeave() {
        this.isHovered = false;
    }
    get displayIcon() {
        if (this.isHovered) {
            return 'expand_more';
        }
        return this.icon;
    }
    toggleExpanded() {
        this.isExpanded = !this.isExpanded;
    }
    onParentClick() {
        this.toggleExpanded();
        this.itemClick.emit(null);
    }
    onChildClick(child) {
        this.itemClick.emit(child);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: PageNavigationMultiLevelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: PageNavigationMultiLevelComponent, isStandalone: true, selector: "app-page-navigation-multi-level", inputs: { label: "label", icon: "icon", badge: "badge", children: "children", isExpanded: "isExpanded" }, outputs: { itemClick: "itemClick" }, ngImport: i0, template: "<div class=\"multi-level-item\">\n  <div\n    class=\"multi-level-header\"\n    [class.expanded]=\"isExpanded\"\n    [class.has-active-child]=\"hasActiveChild\"\n    (click)=\"onParentClick()\"\n    (mouseenter)=\"onMouseEnter()\"\n    (mouseleave)=\"onMouseLeave()\"\n  >\n    <span class=\"material-symbols-outlined multi-level-icon\">{{\n      displayIcon\n    }}</span>\n    <span class=\"multi-level-label\">{{ label }}</span>\n    <app-badge\n      *ngIf=\"badge\"\n      [label]=\"badge.toString()\"\n      variant=\"gray\"\n      size=\"sm\"\n      emphasis=\"medium\"\n    ></app-badge>\n    <span class=\"material-symbols-outlined multi-level-expand-icon\"> add </span>\n  </div>\n\n  <div class=\"multi-level-children\" [class.collapsed]=\"!isExpanded\">\n    <app-page-navigation-child\n      *ngFor=\"let child of children\"\n      [label]=\"child.label\"\n      [badge]=\"child.badge\"\n      [isActive]=\"child.isActive || false\"\n      (itemClick)=\"onChildClick(child)\"\n    >\n    </app-page-navigation-child>\n  </div>\n</div>\n", styles: [".multi-level-item{margin:var(--spacing-none) var(--spacing-xs)}.multi-level-header{display:flex;align-items:center;padding:var(--spacing-lg);cursor:pointer;gap:var(--spacing-md);position:relative;transition:all .15s ease;min-height:40px;box-sizing:border-box;border-radius:6px;background-color:transparent;border:1px solid transparent}.multi-level-header.has-active-child{background-color:transparent;border:1px solid transparent}.multi-level-header:hover{background-color:var(--color-neutral-50)!important}.multi-level-icon{flex-shrink:0;color:var(--color-neutral-600);transition:color .15s ease,transform var(--animation-duration-fast) var(--animation-ease-smooth);font-size:20px;width:20px;height:20px;transform:rotate(0)}.multi-level-header.expanded .multi-level-icon{transform:rotate(180deg)}.multi-level-header.has-active-child .multi-level-icon{color:var(--color-neutral-900)}.multi-level-label{font-family:Inter,sans-serif;font-size:14px;font-weight:500;line-height:20px;color:var(--color-neutral-600);flex:1;transition:all .15s ease}.multi-level-header.has-active-child .multi-level-label{color:var(--color-neutral-900);font-weight:600}.multi-level-expand-icon{flex-shrink:0;color:var(--color-neutral-600);font-size:20px;width:20px;height:20px;transition:color .15s ease}.multi-level-children{margin-top:var(--spacing-xs);margin-bottom:var(--spacing-xs);position:relative;margin-left:var(--spacing-xl);display:flex;flex-direction:column;gap:var(--spacing-xs);overflow:hidden;max-height:1000px;opacity:1;transition:max-height .4s cubic-bezier(.08,.52,.52,1),opacity .4s cubic-bezier(.08,.52,.52,1),margin .4s cubic-bezier(.08,.52,.52,1)}.multi-level-children.collapsed{max-height:0;opacity:0;margin-top:0;margin-bottom:0}.multi-level-children:before{content:\"\";position:absolute;left:0;top:0;bottom:0;width:2px;background-color:var(--color-neutral-200);margin-left:var(--spacing-sm);z-index:2}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: PageNavigationChildComponent, selector: "app-page-navigation-child", inputs: ["label", "badge", "isActive"], outputs: ["itemClick"] }, { kind: "component", type: BadgeComponent, selector: "app-badge", inputs: ["variant", "size", "emphasis", "label", "icon", "dismissible", "disabled"], outputs: ["dismiss"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: PageNavigationMultiLevelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-navigation-multi-level', standalone: true, imports: [CommonModule, PageNavigationChildComponent, BadgeComponent], template: "<div class=\"multi-level-item\">\n  <div\n    class=\"multi-level-header\"\n    [class.expanded]=\"isExpanded\"\n    [class.has-active-child]=\"hasActiveChild\"\n    (click)=\"onParentClick()\"\n    (mouseenter)=\"onMouseEnter()\"\n    (mouseleave)=\"onMouseLeave()\"\n  >\n    <span class=\"material-symbols-outlined multi-level-icon\">{{\n      displayIcon\n    }}</span>\n    <span class=\"multi-level-label\">{{ label }}</span>\n    <app-badge\n      *ngIf=\"badge\"\n      [label]=\"badge.toString()\"\n      variant=\"gray\"\n      size=\"sm\"\n      emphasis=\"medium\"\n    ></app-badge>\n    <span class=\"material-symbols-outlined multi-level-expand-icon\"> add </span>\n  </div>\n\n  <div class=\"multi-level-children\" [class.collapsed]=\"!isExpanded\">\n    <app-page-navigation-child\n      *ngFor=\"let child of children\"\n      [label]=\"child.label\"\n      [badge]=\"child.badge\"\n      [isActive]=\"child.isActive || false\"\n      (itemClick)=\"onChildClick(child)\"\n    >\n    </app-page-navigation-child>\n  </div>\n</div>\n", styles: [".multi-level-item{margin:var(--spacing-none) var(--spacing-xs)}.multi-level-header{display:flex;align-items:center;padding:var(--spacing-lg);cursor:pointer;gap:var(--spacing-md);position:relative;transition:all .15s ease;min-height:40px;box-sizing:border-box;border-radius:6px;background-color:transparent;border:1px solid transparent}.multi-level-header.has-active-child{background-color:transparent;border:1px solid transparent}.multi-level-header:hover{background-color:var(--color-neutral-50)!important}.multi-level-icon{flex-shrink:0;color:var(--color-neutral-600);transition:color .15s ease,transform var(--animation-duration-fast) var(--animation-ease-smooth);font-size:20px;width:20px;height:20px;transform:rotate(0)}.multi-level-header.expanded .multi-level-icon{transform:rotate(180deg)}.multi-level-header.has-active-child .multi-level-icon{color:var(--color-neutral-900)}.multi-level-label{font-family:Inter,sans-serif;font-size:14px;font-weight:500;line-height:20px;color:var(--color-neutral-600);flex:1;transition:all .15s ease}.multi-level-header.has-active-child .multi-level-label{color:var(--color-neutral-900);font-weight:600}.multi-level-expand-icon{flex-shrink:0;color:var(--color-neutral-600);font-size:20px;width:20px;height:20px;transition:color .15s ease}.multi-level-children{margin-top:var(--spacing-xs);margin-bottom:var(--spacing-xs);position:relative;margin-left:var(--spacing-xl);display:flex;flex-direction:column;gap:var(--spacing-xs);overflow:hidden;max-height:1000px;opacity:1;transition:max-height .4s cubic-bezier(.08,.52,.52,1),opacity .4s cubic-bezier(.08,.52,.52,1),margin .4s cubic-bezier(.08,.52,.52,1)}.multi-level-children.collapsed{max-height:0;opacity:0;margin-top:0;margin-bottom:0}.multi-level-children:before{content:\"\";position:absolute;left:0;top:0;bottom:0;width:2px;background-color:var(--color-neutral-200);margin-left:var(--spacing-sm);z-index:2}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], icon: [{
                type: Input
            }], badge: [{
                type: Input
            }], children: [{
                type: Input
            }], isExpanded: [{
                type: Input
            }], itemClick: [{
                type: Output
            }] } });

class PageNavigationComponent {
    constructor() {
        this.pageTitle = 'Page Title';
        this.selectedItem = null;
        this.navigationItems = [
            {
                id: 'single-1',
                label: 'Single Level',
                icon: 'radio_button_unchecked',
                type: 'single',
                isActive: false,
            },
            {
                id: 'multi-level-1',
                label: 'Multi Level Menu',
                icon: 'radio_button_unchecked',
                type: 'expandable',
                isActive: false,
                isExpanded: true,
                children: [
                    { label: 'Child (Active)', isActive: true, badge: 10 },
                    { label: 'Child', isActive: false },
                    { label: 'Child', isActive: false },
                    { label: 'Child', isActive: false },
                    { label: 'Child', isActive: false },
                    { label: 'Child', isActive: false },
                ],
            },
            {
                id: 'single-2',
                label: 'Single Level',
                icon: 'radio_button_unchecked',
                type: 'single',
                isActive: false,
            },
        ];
    }
    onSingleLevelClick(item) {
        this.clearAllSelections();
        item.isActive = true;
        this.selectedItem = item.id;
    }
    onMultiLevelClick(item, child) {
        if (child) {
            this.clearAllSelections();
            child.isActive = true;
        }
        else {
            item.isExpanded = !item.isExpanded;
        }
    }
    clearAllSelections() {
        this.navigationItems.forEach((item) => {
            item.isActive = false;
            if (item.children) {
                item.children.forEach((child) => (child.isActive = false));
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: PageNavigationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: PageNavigationComponent, isStandalone: true, selector: "app-page-navigation", ngImport: i0, template: "<div class=\"page-navigation\">\n  <div class=\"page-title\">{{ pageTitle }}</div>\n\n  <div class=\"navigation-list\">\n    <ng-container *ngFor=\"let item of navigationItems\">\n      <!-- Single Level Menu Item -->\n      <app-page-navigation-single-level\n        *ngIf=\"item.type === 'single'\"\n        [label]=\"item.label\"\n        [icon]=\"item.icon || 'radio_button_unchecked'\"\n        [badge]=\"item.badge\"\n        [isActive]=\"item.isActive || false\"\n        (itemClick)=\"onSingleLevelClick(item)\"\n      >\n      </app-page-navigation-single-level>\n\n      <!-- Multi Level Menu Item -->\n      <app-page-navigation-multi-level\n        *ngIf=\"item.type === 'expandable'\"\n        [label]=\"item.label\"\n        [icon]=\"item.icon || 'radio_button_unchecked'\"\n        [badge]=\"item.badge\"\n        [isExpanded]=\"item.isExpanded || false\"\n        [children]=\"item.children || []\"\n        (itemClick)=\"onMultiLevelClick(item, $event)\"\n      >\n      </app-page-navigation-multi-level>\n    </ng-container>\n  </div>\n</div>\n", styles: [".page-navigation{width:280px;min-width:280px;background-color:var(--color-white);padding:var(--spacing-xl) var(--spacing-md);font-family:var(--font-inter);height:100vh;overflow-y:auto;border-right:1px solid var(--color-neutral-200);box-sizing:border-box;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.page-title{font-size:var(--text-xl-size);font-weight:var(--weight-semibold);line-height:var(--text-xl-line);color:var(--color-neutral-900);margin-bottom:var(--spacing-3xl);padding:var(--spacing-none) var(--spacing-xl)}.navigation-list{display:flex;flex-direction:column;gap:var(--spacing-sm)}@media (max-width: 768px){.page-navigation{width:280px;min-width:280px}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: PageNavigationSingleLevelComponent, selector: "app-page-navigation-single-level", inputs: ["label", "icon", "badge", "isActive"], outputs: ["itemClick"] }, { kind: "component", type: PageNavigationMultiLevelComponent, selector: "app-page-navigation-multi-level", inputs: ["label", "icon", "badge", "children", "isExpanded"], outputs: ["itemClick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: PageNavigationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-navigation', standalone: true, imports: [
                        CommonModule,
                        PageNavigationSingleLevelComponent,
                        PageNavigationMultiLevelComponent,
                    ], template: "<div class=\"page-navigation\">\n  <div class=\"page-title\">{{ pageTitle }}</div>\n\n  <div class=\"navigation-list\">\n    <ng-container *ngFor=\"let item of navigationItems\">\n      <!-- Single Level Menu Item -->\n      <app-page-navigation-single-level\n        *ngIf=\"item.type === 'single'\"\n        [label]=\"item.label\"\n        [icon]=\"item.icon || 'radio_button_unchecked'\"\n        [badge]=\"item.badge\"\n        [isActive]=\"item.isActive || false\"\n        (itemClick)=\"onSingleLevelClick(item)\"\n      >\n      </app-page-navigation-single-level>\n\n      <!-- Multi Level Menu Item -->\n      <app-page-navigation-multi-level\n        *ngIf=\"item.type === 'expandable'\"\n        [label]=\"item.label\"\n        [icon]=\"item.icon || 'radio_button_unchecked'\"\n        [badge]=\"item.badge\"\n        [isExpanded]=\"item.isExpanded || false\"\n        [children]=\"item.children || []\"\n        (itemClick)=\"onMultiLevelClick(item, $event)\"\n      >\n      </app-page-navigation-multi-level>\n    </ng-container>\n  </div>\n</div>\n", styles: [".page-navigation{width:280px;min-width:280px;background-color:var(--color-white);padding:var(--spacing-xl) var(--spacing-md);font-family:var(--font-inter);height:100vh;overflow-y:auto;border-right:1px solid var(--color-neutral-200);box-sizing:border-box;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.page-title{font-size:var(--text-xl-size);font-weight:var(--weight-semibold);line-height:var(--text-xl-line);color:var(--color-neutral-900);margin-bottom:var(--spacing-3xl);padding:var(--spacing-none) var(--spacing-xl)}.navigation-list{display:flex;flex-direction:column;gap:var(--spacing-sm)}@media (max-width: 768px){.page-navigation{width:280px;min-width:280px}}\n"] }]
        }] });

class ProductSwitcherComponent {
    constructor(productSwitcherService) {
        this.productSwitcherService = productSwitcherService;
        this.isOpen$ = this.productSwitcherService.isOpen$;
        this.isClosing$ = this.productSwitcherService.isClosing$;
        this.anchorPosition$ = this.productSwitcherService.anchorPosition$;
        this.products = [
            {
                id: 'alice',
                name: 'Alice',
                description: 'Housekeeping & Guest Services',
                logo: '/bellhopos/assets/logos/AL.svg',
            },
            {
                id: 'hotel-effectiveness',
                name: 'Hotel Effectiveness',
                description: 'Labor planning',
                logo: '/bellhopos/assets/logos/HE.svg',
            },
            {
                id: 'profit-sword',
                name: 'ProfitSword',
                description: 'B.I and Finance',
                logo: '/bellhopos/assets/logos/PS.svg',
            },
            {
                id: 'transcendent',
                name: 'Transcendent',
                description: 'Asset Management & CapEx',
                logo: '/bellhopos/assets/logos/TR.svg',
            },
        ];
    }
    onDocumentClick(event) {
        const target = event.target;
        if (!target.closest('.product-switcher-container') &&
            !target.closest('.logo-active')) {
            this.productSwitcherService.close();
        }
    }
    onProductClick(product) {
        console.log('Selected product:', product);
        this.productSwitcherService.close();
        // Here you can handle the product switch logic
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ProductSwitcherComponent, deps: [{ token: ProductSwitcherService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: ProductSwitcherComponent, isStandalone: true, selector: "app-product-switcher", host: { listeners: { "document:click": "onDocumentClick($event)" } }, ngImport: i0, template: "<div class=\"product-switcher-backdrop\" *ngIf=\"isOpen$ | async\"></div>\n\n<div\n  class=\"product-switcher-container\"\n  [class.closing]=\"isClosing$ | async\"\n  *ngIf=\"(isOpen$ | async) && (anchorPosition$ | async) as position\"\n  [style.top.px]=\"position.top\"\n  [style.left.px]=\"position.left\"\n>\n  <div class=\"product-switcher-popover\">\n    <div\n      *ngFor=\"let product of products\"\n      class=\"product-item\"\n      [class.current]=\"product.current\"\n      (click)=\"onProductClick(product)\"\n    >\n      <div class=\"product-icon-container\">\n        <img\n          [src]=\"product.logo\"\n          [alt]=\"product.name + ' logo'\"\n          class=\"product-icon\"\n        />\n      </div>\n\n      <div class=\"product-info\">\n        <div class=\"product-name\">{{ product.name }}</div>\n        <div class=\"product-description\">{{ product.description }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".product-switcher-container{position:fixed;z-index:10000;animation:popoverSlideIn .3s ease-out;transform-origin:top center}.product-switcher-backdrop{position:fixed;inset:0;background:transparent;z-index:9999}.product-switcher-popover{background:#ffffffe6;border:1px solid #eff1f5;border-radius:var(--radius-md);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(3px);box-shadow:0 24px 48px -12px #4049681a;padding:var(--spacing-lg);display:flex;flex-direction:column;gap:var(--spacing-md);min-width:250px;position:relative;z-index:10001}@keyframes popoverSlideIn{0%{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}.product-switcher-container.closing{animation:popoverSlideOut .2s ease-in forwards}@keyframes popoverSlideOut{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-12px)}}.product-item{display:flex;align-items:center;gap:var(--spacing-lg);width:100%;padding:var(--spacing-xs);border-radius:var(--radius-md);cursor:pointer;transition:background-color .2s ease}.product-item:hover{background-color:var(--color-neutral-100)}.product-item.current{background-color:#2642cf1a}.product-icon-container{width:36px;height:36px;background:#fff;border:.77px solid #dcdfea;border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:var(--spacing-xs)}.product-icon{width:100%;height:100%;object-fit:contain;object-position:center;filter:brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(222deg) brightness(97%) contrast(101%)}.product-info{display:flex;flex-direction:column;flex:1}.product-name{font-family:var(--font-inter);font-weight:var(--weight-semibold);font-size:var(--text-md-size);line-height:var(--text-md-line);color:var(--color-neutral-900)}.product-description{font-family:var(--font-inter);font-weight:var(--weight-medium);font-size:var(--text-sm-size);line-height:var(--text-sm-line);color:var(--color-neutral-500)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ProductSwitcherComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-product-switcher', standalone: true, imports: [CommonModule], template: "<div class=\"product-switcher-backdrop\" *ngIf=\"isOpen$ | async\"></div>\n\n<div\n  class=\"product-switcher-container\"\n  [class.closing]=\"isClosing$ | async\"\n  *ngIf=\"(isOpen$ | async) && (anchorPosition$ | async) as position\"\n  [style.top.px]=\"position.top\"\n  [style.left.px]=\"position.left\"\n>\n  <div class=\"product-switcher-popover\">\n    <div\n      *ngFor=\"let product of products\"\n      class=\"product-item\"\n      [class.current]=\"product.current\"\n      (click)=\"onProductClick(product)\"\n    >\n      <div class=\"product-icon-container\">\n        <img\n          [src]=\"product.logo\"\n          [alt]=\"product.name + ' logo'\"\n          class=\"product-icon\"\n        />\n      </div>\n\n      <div class=\"product-info\">\n        <div class=\"product-name\">{{ product.name }}</div>\n        <div class=\"product-description\">{{ product.description }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".product-switcher-container{position:fixed;z-index:10000;animation:popoverSlideIn .3s ease-out;transform-origin:top center}.product-switcher-backdrop{position:fixed;inset:0;background:transparent;z-index:9999}.product-switcher-popover{background:#ffffffe6;border:1px solid #eff1f5;border-radius:var(--radius-md);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(3px);box-shadow:0 24px 48px -12px #4049681a;padding:var(--spacing-lg);display:flex;flex-direction:column;gap:var(--spacing-md);min-width:250px;position:relative;z-index:10001}@keyframes popoverSlideIn{0%{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}.product-switcher-container.closing{animation:popoverSlideOut .2s ease-in forwards}@keyframes popoverSlideOut{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-12px)}}.product-item{display:flex;align-items:center;gap:var(--spacing-lg);width:100%;padding:var(--spacing-xs);border-radius:var(--radius-md);cursor:pointer;transition:background-color .2s ease}.product-item:hover{background-color:var(--color-neutral-100)}.product-item.current{background-color:#2642cf1a}.product-icon-container{width:36px;height:36px;background:#fff;border:.77px solid #dcdfea;border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:var(--spacing-xs)}.product-icon{width:100%;height:100%;object-fit:contain;object-position:center;filter:brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(222deg) brightness(97%) contrast(101%)}.product-info{display:flex;flex-direction:column;flex:1}.product-name{font-family:var(--font-inter);font-weight:var(--weight-semibold);font-size:var(--text-md-size);line-height:var(--text-md-line);color:var(--color-neutral-900)}.product-description{font-family:var(--font-inter);font-weight:var(--weight-medium);font-size:var(--text-sm-size);line-height:var(--text-sm-line);color:var(--color-neutral-500)}\n"] }]
        }], ctorParameters: () => [{ type: ProductSwitcherService }], propDecorators: { onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class ProgressChartComponent {
    constructor() {
        this.trend = 'positive';
        this.progress = 40;
        this.animated = true;
        this.showTarget = false;
        this.target = 75;
        this.displayedProgress = 0;
    }
    get containerClasses() {
        const classes = ['progress-chart', `progress-chart-${this.trend}`];
        if (this.animated) {
            classes.push('progress-chart-animated');
        }
        return classes.join(' ');
    }
    get strokeColor() {
        switch (this.trend) {
            case 'positive':
                return 'var(--color-success-500)';
            case 'negative':
                return 'var(--color-error-500)';
            case 'neutral':
                return 'var(--color-brand-600)';
            case 'automatic':
                // Use threshold-based color for the progress bar when in automatic mode
                return this.targetLineColor;
            default:
                return 'var(--color-success-500)';
        }
    }
    get progressPercentage() {
        return Math.min(100, Math.max(0, this.progress));
    }
    get targetPercentage() {
        return Math.min(100, Math.max(0, this.target));
    }
    get targetLineData() {
        // Calculate all target line properties in one place
        const percentage = this.targetPercentage / 100;
        const angle = Math.PI * percentage; // 0 to PI radians
        // Arc configuration
        const radius = 38.4; // Arc center radius
        const centerX = 48; // SVG center X
        const centerY = 43.2; // SVG center Y
        const lineLength = 8; // Half-length of the target line
        // Position on the arc
        const x = centerX - radius * Math.cos(angle);
        const y = centerY - radius * Math.sin(angle);
        // Rotation to be perpendicular to the arc
        // Convert angle to degrees for CSS transform
        const rotationDegrees = (angle * 180 / Math.PI);
        return {
            x,
            y,
            rotation: rotationDegrees,
            lineLength,
            // Line coordinates (horizontal line centered at position)
            x1: x - lineLength,
            y1: y,
            x2: x + lineLength,
            y2: y,
            // Transform string for SVG
            transform: `rotate(${rotationDegrees} ${x} ${y})`
        };
    }
    get targetLineColor() {
        // Always use automatic calculation based on values
        const status = this.calculateThresholdStatus();
        switch (status) {
            case 'success':
                return 'var(--color-success-500)';
            case 'warning':
                return 'var(--color-warning-500)';
            case 'danger':
                return 'var(--color-error-500)';
            default:
                return 'var(--color-neutral-900)';
        }
    }
    calculateThresholdStatus() {
        // If progress is ahead of target, it's success (green)
        if (this.progressPercentage >= this.targetPercentage) {
            return 'success';
        }
        // Check danger threshold first (lower value = more critical)
        if (this.dangerThreshold !== undefined && this.progressPercentage <= this.dangerThreshold) {
            return 'danger';
        }
        // Check warning threshold
        if (this.warningThreshold !== undefined && this.progressPercentage <= this.warningThreshold) {
            return 'warning';
        }
        // Default to warning if behind target but no thresholds set
        return 'warning';
    }
    ngOnInit() {
        if (this.animated) {
            this.animateProgress();
        }
        else {
            this.displayedProgress = this.progressPercentage;
        }
    }
    ngOnChanges(changes) {
        if (changes['progress'] && !changes['progress'].firstChange) {
            // Cancel any existing animation
            if (this.animationFrameId) {
                cancelAnimationFrame(this.animationFrameId);
            }
            if (this.animated) {
                this.animateProgressFromCurrent();
            }
            else {
                this.displayedProgress = this.progressPercentage;
            }
        }
    }
    ngOnDestroy() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
    animateProgress() {
        const target = this.progressPercentage;
        const duration = 1500; // Match CSS animation duration
        const startTime = performance.now();
        const startValue = 0;
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Easing function to match CSS cubic-bezier(0.4, 0.0, 0.2, 1)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            this.displayedProgress = Math.round(startValue + (target - startValue) * easeOutQuart);
            if (progress < 1) {
                this.animationFrameId = requestAnimationFrame(animate);
            }
            else {
                this.displayedProgress = target;
            }
        };
        // Start animation with delay to match CSS animation delay
        setTimeout(() => {
            this.animationFrameId = requestAnimationFrame(animate);
        }, 300);
    }
    animateProgressFromCurrent() {
        const target = this.progressPercentage;
        const startValue = this.displayedProgress;
        const duration = 500; // Shorter duration for value changes
        const startTime = performance.now();
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            this.displayedProgress = Math.round(startValue + (target - startValue) * easeOutQuart);
            if (progress < 1) {
                this.animationFrameId = requestAnimationFrame(animate);
            }
            else {
                this.displayedProgress = target;
            }
        };
        this.animationFrameId = requestAnimationFrame(animate);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ProgressChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: ProgressChartComponent, isStandalone: true, selector: "app-progress-chart", inputs: { trend: "trend", progress: "progress", animated: "animated", showTarget: "showTarget", target: "target", thresholdStatus: "thresholdStatus", warningThreshold: "warningThreshold", dangerThreshold: "dangerThreshold" }, usesOnChanges: true, ngImport: i0, template: "<div [ngClass]=\"containerClasses\">\n  <div class=\"progress-container\">\n    <svg width=\"96\" height=\"53\" viewBox=\"0 0 96 53\">\n      <!-- Background arc -->\n      <path\n        class=\"progress-background\"\n        d=\"M 9.6 43.2 A 38.4 38.4 0 0 1 86.4 43.2\"\n        fill=\"none\"\n        stroke=\"var(--color-neutral-200)\"\n        stroke-width=\"9.6\"\n        stroke-linecap=\"round\"\n      ></path>\n\n      <!-- Progress arc -->\n      <path\n        class=\"progress-line\"\n        d=\"M 9.6 43.2 A 38.4 38.4 0 0 1 86.4 43.2\"\n        fill=\"none\"\n        [attr.stroke]=\"strokeColor\"\n        stroke-width=\"9.6\"\n        stroke-linecap=\"round\"\n        pathLength=\"100\"\n        [style.--target-offset]=\"100 - progressPercentage\"\n      ></path>\n\n      <!-- Target line indicator -->\n      <g *ngIf=\"showTarget\" class=\"target-indicator\">\n        <line\n          class=\"target-line\"\n          [attr.x1]=\"targetLineData.x1\"\n          [attr.y1]=\"targetLineData.y1\"\n          [attr.x2]=\"targetLineData.x2\"\n          [attr.y2]=\"targetLineData.y2\"\n          [attr.stroke]=\"targetLineColor\"\n          stroke-width=\"1\"\n          stroke-linecap=\"round\"\n          [attr.transform]=\"targetLineData.transform\"\n        ></line>\n      </g>\n    </svg>\n    <div class=\"progress-text\">{{ displayedProgress }}%</div>\n  </div>\n</div>\n", styles: [".progress-chart{position:relative;display:inline-block;width:fit-content;height:fit-content}.progress-container{position:relative;display:flex;align-items:center;justify-content:center;width:96px;height:53px}.progress-text{position:absolute;font-family:var(--font-inter);font-size:18px;font-weight:600;line-height:1.56;text-align:center;color:var(--color-neutral-900);top:50%;left:50%;transform:translate(-50%,-50%);margin-top:4px}.progress-line{stroke-dasharray:100;stroke-dashoffset:100}.progress-chart:not(.progress-chart-animated) .progress-line{stroke-dashoffset:var(--target-offset, 60);transition:stroke-dashoffset .3s ease-out}@keyframes progressFillUp{0%{stroke-dashoffset:100}to{stroke-dashoffset:var(--target-offset, 60)}}.progress-chart-animated .progress-line{stroke-dasharray:100;stroke-dashoffset:100;animation:progressFillUp 1.5s cubic-bezier(.4,0,.2,1) .3s forwards}.progress-text{opacity:1}.progress-chart:not(.progress-chart-animated) .progress-text{opacity:1}.target-indicator{opacity:.9}.target-line{stroke:var(--color-neutral-900);stroke-width:1;stroke-linecap:round}.target-indicator:hover{opacity:1}.target-indicator:hover .target-line{stroke-width:2}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ProgressChartComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-progress-chart', standalone: true, imports: [CommonModule], template: "<div [ngClass]=\"containerClasses\">\n  <div class=\"progress-container\">\n    <svg width=\"96\" height=\"53\" viewBox=\"0 0 96 53\">\n      <!-- Background arc -->\n      <path\n        class=\"progress-background\"\n        d=\"M 9.6 43.2 A 38.4 38.4 0 0 1 86.4 43.2\"\n        fill=\"none\"\n        stroke=\"var(--color-neutral-200)\"\n        stroke-width=\"9.6\"\n        stroke-linecap=\"round\"\n      ></path>\n\n      <!-- Progress arc -->\n      <path\n        class=\"progress-line\"\n        d=\"M 9.6 43.2 A 38.4 38.4 0 0 1 86.4 43.2\"\n        fill=\"none\"\n        [attr.stroke]=\"strokeColor\"\n        stroke-width=\"9.6\"\n        stroke-linecap=\"round\"\n        pathLength=\"100\"\n        [style.--target-offset]=\"100 - progressPercentage\"\n      ></path>\n\n      <!-- Target line indicator -->\n      <g *ngIf=\"showTarget\" class=\"target-indicator\">\n        <line\n          class=\"target-line\"\n          [attr.x1]=\"targetLineData.x1\"\n          [attr.y1]=\"targetLineData.y1\"\n          [attr.x2]=\"targetLineData.x2\"\n          [attr.y2]=\"targetLineData.y2\"\n          [attr.stroke]=\"targetLineColor\"\n          stroke-width=\"1\"\n          stroke-linecap=\"round\"\n          [attr.transform]=\"targetLineData.transform\"\n        ></line>\n      </g>\n    </svg>\n    <div class=\"progress-text\">{{ displayedProgress }}%</div>\n  </div>\n</div>\n", styles: [".progress-chart{position:relative;display:inline-block;width:fit-content;height:fit-content}.progress-container{position:relative;display:flex;align-items:center;justify-content:center;width:96px;height:53px}.progress-text{position:absolute;font-family:var(--font-inter);font-size:18px;font-weight:600;line-height:1.56;text-align:center;color:var(--color-neutral-900);top:50%;left:50%;transform:translate(-50%,-50%);margin-top:4px}.progress-line{stroke-dasharray:100;stroke-dashoffset:100}.progress-chart:not(.progress-chart-animated) .progress-line{stroke-dashoffset:var(--target-offset, 60);transition:stroke-dashoffset .3s ease-out}@keyframes progressFillUp{0%{stroke-dashoffset:100}to{stroke-dashoffset:var(--target-offset, 60)}}.progress-chart-animated .progress-line{stroke-dasharray:100;stroke-dashoffset:100;animation:progressFillUp 1.5s cubic-bezier(.4,0,.2,1) .3s forwards}.progress-text{opacity:1}.progress-chart:not(.progress-chart-animated) .progress-text{opacity:1}.target-indicator{opacity:.9}.target-line{stroke:var(--color-neutral-900);stroke-width:1;stroke-linecap:round}.target-indicator:hover{opacity:1}.target-indicator:hover .target-line{stroke-width:2}\n"] }]
        }], propDecorators: { trend: [{
                type: Input
            }], progress: [{
                type: Input
            }], animated: [{
                type: Input
            }], showTarget: [{
                type: Input
            }], target: [{
                type: Input
            }], thresholdStatus: [{
                type: Input
            }], warningThreshold: [{
                type: Input
            }], dangerThreshold: [{
                type: Input
            }] } });

class ProgressChartCardComponent {
    constructor() {
        this.type = 'simple';
        this.breakpoint = 'desktop';
        this.heading = 'Occupancy Rate';
        this.value = 75;
        this.valueType = 'percentage';
        this.progress = 'positive';
        this.showProgressIcon = true;
        this.showDropdown = true;
        this.dropdownVariant = 'icon-only-ghost';
        this.progressPercentage = '12.5%';
        this.badgeColor = 'auto';
        this.showChart = false;
        this.progressValue = 75;
        this.showFooter = false;
        this.footerButtonLabel = 'View report';
        this.icon = 'trending_up';
        this.iconSize = 'lg';
        this.iconColor = 'brand';
        this.iconStyle = 'outlined';
        // Target line controls
        this.showTarget = false;
        this.target = 75;
        this.dropdownMenuItems = [
            { id: 'view', label: 'View details', icon: 'visibility' },
            { id: 'edit', label: 'Edit', icon: 'edit' },
            { id: 'export', label: 'Export data', icon: 'download' },
            { id: 'divider', label: '', divider: true },
            { id: 'delete', label: 'Delete', icon: 'delete' },
        ];
    }
    get containerClasses() {
        const classes = [
            'progress-chart-card',
            `progress-chart-card-${this.type}`,
            `progress-chart-card-${this.breakpoint}`,
        ];
        if (this.showFooter) {
            classes.push('has-footer');
        }
        return classes.join(' ');
    }
    get formattedValue() {
        switch (this.valueType) {
            case 'currency':
                return `$${this.value.toFixed(2)}`;
            case 'percentage':
                return `${this.value.toFixed(1)}%`;
            default:
                // Special case for guest satisfaction ratings
                if (this.heading.toLowerCase().includes('satisfaction') &&
                    this.value >= 1000) {
                    const rating = (this.value / 1000).toFixed(1);
                    return `${rating}/5`;
                }
                return this.value.toLocaleString();
        }
    }
    get progressIcon() {
        if (this.progress === 'positive')
            return 'north';
        if (this.progress === 'negative')
            return 'south';
        return 'trending_flat';
    }
    get badgeVariant() {
        if (this.badgeColor !== 'auto')
            return this.badgeColor;
        if (this.progress === 'positive')
            return 'green';
        if (this.progress === 'negative')
            return 'red';
        return 'gray';
    }
    get badgeIconName() {
        if (this.progress === 'positive')
            return 'arrow_upward';
        if (this.progress === 'negative')
            return 'arrow_downward';
        return 'trending_flat';
    }
    onDropdownSelect(item) {
        console.log('Dropdown item selected:', item);
        // Handle dropdown actions here
    }
    onFooterButtonClick() {
        console.log('Footer button clicked');
        // Handle footer button action here
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ProgressChartCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: ProgressChartCardComponent, isStandalone: true, selector: "app-progress-chart-card", inputs: { type: "type", breakpoint: "breakpoint", heading: "heading", value: "value", valueType: "valueType", progress: "progress", showProgressIcon: "showProgressIcon", showDropdown: "showDropdown", dropdownVariant: "dropdownVariant", progressPercentage: "progressPercentage", badgeColor: "badgeColor", showChart: "showChart", progressValue: "progressValue", showFooter: "showFooter", footerButtonLabel: "footerButtonLabel", icon: "icon", iconSize: "iconSize", iconColor: "iconColor", iconStyle: "iconStyle", showTarget: "showTarget", target: "target", warningThreshold: "warningThreshold", dangerThreshold: "dangerThreshold" }, ngImport: i0, template: "<div class=\"progress-chart-card-wrapper\">\n  <div [ngClass]=\"containerClasses\">\n    <!-- Header for simple variant -->\n    <div *ngIf=\"type === 'simple'\" class=\"progress-chart-card-header\">\n      <h3 class=\"progress-chart-card-heading\">{{ heading }}</h3>\n      <div *ngIf=\"showDropdown\" class=\"progress-chart-card-dropdown\">\n        <app-dropdown\n          [variant]=\"dropdownVariant\"\n          size=\"md\"\n          iconName=\"more_vert\"\n          [menuItems]=\"dropdownMenuItems\"\n          (onItemClick)=\"onDropdownSelect($event)\"\n        >\n        </app-dropdown>\n      </div>\n    </div>\n\n    <!-- Dropdown Menu for other variants -->\n    <div *ngIf=\"showDropdown && type !== 'simple'\" class=\"progress-chart-card-dropdown\">\n      <app-dropdown\n        [variant]=\"dropdownVariant\"\n        size=\"md\"\n        iconName=\"more_vert\"\n        [menuItems]=\"dropdownMenuItems\"\n        (onItemClick)=\"onDropdownSelect($event)\"\n      >\n      </app-dropdown>\n    </div>\n\n    <!-- Featured icon for featured-icon variant -->\n    <div *ngIf=\"type === 'featured-icon'\" class=\"progress-chart-card-icon\">\n      <app-featured-icon\n        [size]=\"iconSize\"\n        [color]=\"iconColor\"\n        [style]=\"iconStyle\"\n        [icon]=\"icon\"\n      >\n      </app-featured-icon>\n    </div>\n\n    <!-- Heading for other variants -->\n    <h3 *ngIf=\"type !== 'simple'\" class=\"progress-chart-card-heading\">{{ heading }}</h3>\n\n    <!-- Number and content row -->\n    <div class=\"progress-chart-card-row\">\n      <div class=\"progress-chart-card-number-wrap\">\n        <div class=\"progress-chart-card-number\">{{ formattedValue }}</div>\n        \n        \n        <!-- Badge next to value when chart is shown -->\n        <div\n          *ngIf=\"showChart && showProgressIcon && (type === 'simple' || type === 'featured-icon')\"\n          class=\"progress-chart-card-badge-inline\"\n        >\n          <app-badge\n            [variant]=\"badgeVariant\"\n            size=\"md\"\n            emphasis=\"medium\"\n            [icon]=\"badgeIconName\"\n            [label]=\"progressPercentage\"\n          >\n          </app-badge>\n        </div>\n      </div>\n\n      <!-- Badge for simple and featured-icon variants (when chart is not shown) -->\n      <div\n        *ngIf=\"(type === 'simple' || type === 'featured-icon') && showProgressIcon && !showChart\"\n        class=\"progress-chart-card-badge-wrap\"\n      >\n        <app-badge\n          [variant]=\"badgeVariant\"\n          size=\"md\"\n          emphasis=\"medium\"\n          [icon]=\"badgeIconName\"\n          [label]=\"progressPercentage\"\n        >\n        </app-badge>\n      </div>\n\n      <!-- Chart for any variant when showChart is true -->\n      <app-progress-chart\n        *ngIf=\"showChart\"\n        [trend]=\"progress\"\n        [progress]=\"progressValue\"\n        [animated]=\"true\"\n        [showTarget]=\"showTarget\"\n        [target]=\"target\"\n        [warningThreshold]=\"warningThreshold\"\n        [dangerThreshold]=\"dangerThreshold\"\n      >\n      </app-progress-chart>\n    </div>\n  </div>\n\n  <!-- Footer outside container -->\n  <app-container-footer\n    *ngIf=\"showFooter\"\n    [size]=\"'standard'\"\n    [buttonLabel]=\"footerButtonLabel\"\n    (onButtonClick)=\"onFooterButtonClick()\"\n  >\n  </app-container-footer>\n</div>\n", styles: [".progress-chart-card-wrapper{position:relative;display:inline-block;border-radius:12px;overflow:visible}.progress-chart-card{position:relative;display:flex;flex-direction:column;gap:8px;font-family:var(--font-inter);background:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:12px;box-sizing:border-box}.progress-chart-card.has-footer{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:none}.progress-chart-card-header{display:flex;justify-content:space-between;align-items:center;width:100%;gap:var(--spacing-md);margin-bottom:var(--spacing-sm)}.progress-chart-card-header .progress-chart-card-dropdown{position:relative;top:unset;right:unset;z-index:var(--z-index-dropdown, 1000);flex-shrink:0}.progress-chart-card-dropdown{position:absolute;top:20px;right:20px;z-index:1000}.progress-chart-card-mobile.progress-chart-card-simple .progress-chart-card-dropdown,.progress-chart-card-mobile.progress-chart-card-simple-chart .progress-chart-card-dropdown{top:16px;right:16px}.progress-chart-card-heading{font-weight:500;font-size:14px;line-height:1.43;color:var(--color-neutral-600);margin:0}.progress-chart-card-row{display:flex;align-items:flex-end;gap:16px}.progress-icon{display:flex;align-items:center}.progress-icon .material-symbols-outlined{font-size:var(--icon-size-xl);font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 20}.progress-icon-positive{color:var(--color-success-600)!important}.progress-icon-negative{color:var(--color-error-600)!important}.progress-icon-neutral{color:var(--color-neutral-600)!important}.progress-icon-positive .material-symbols-outlined{color:var(--color-success-600)!important}.progress-icon-negative .material-symbols-outlined{color:var(--color-error-600)!important}.progress-icon-neutral .material-symbols-outlined{color:var(--color-neutral-600)!important}.progress-chart-card-badge-wrap{padding-bottom:4px}.progress-chart-card-number-wrap{flex:1;display:flex;align-items:center;gap:var(--spacing-sm)}.progress-chart-card-desktop .progress-chart-card-number{font-weight:var(--weight-semibold);font-size:var(--display-sm-size);line-height:2.375rem;color:var(--color-neutral-900);margin:0}.progress-chart-card-mobile .progress-chart-card-number{font-weight:var(--weight-semibold);font-size:var(--display-xs-size);line-height:2rem;color:var(--color-neutral-900);margin:0}.progress-chart-card-icon{margin-bottom:8px}.progress-chart-card-desktop.progress-chart-card-simple,.progress-chart-card-desktop.progress-chart-card-simple-chart,.progress-chart-card-desktop.progress-chart-card-featured-icon{width:388px;padding:24px}.progress-chart-card-mobile.progress-chart-card-simple,.progress-chart-card-mobile.progress-chart-card-simple-chart,.progress-chart-card-mobile.progress-chart-card-featured-icon{width:343px;padding:20px 16px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ProgressChartComponent, selector: "app-progress-chart", inputs: ["trend", "progress", "animated", "showTarget", "target", "thresholdStatus", "warningThreshold", "dangerThreshold"] }, { kind: "component", type: DropdownComponent, selector: "app-dropdown", inputs: ["size", "state", "variant", "label", "iconName", "disabled", "menuItems", "header", "avatarSrc", "avatarAlt", "avatarSize", "avatarName", "avatarEmail", "showIcons", "forcePosition"], outputs: ["onItemClick"] }, { kind: "component", type: ContainerFooterComponent, selector: "app-container-footer", inputs: ["size", "buttonLabel"], outputs: ["onButtonClick"] }, { kind: "component", type: FeaturedIconComponent, selector: "app-featured-icon", inputs: ["size", "color", "style", "icon"] }, { kind: "component", type: BadgeComponent, selector: "app-badge", inputs: ["variant", "size", "emphasis", "label", "icon", "dismissible", "disabled"], outputs: ["dismiss"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ProgressChartCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-progress-chart-card', standalone: true, imports: [
                        CommonModule,
                        ProgressChartComponent,
                        DropdownComponent,
                        ContainerFooterComponent,
                        FeaturedIconComponent,
                        BadgeComponent,
                    ], template: "<div class=\"progress-chart-card-wrapper\">\n  <div [ngClass]=\"containerClasses\">\n    <!-- Header for simple variant -->\n    <div *ngIf=\"type === 'simple'\" class=\"progress-chart-card-header\">\n      <h3 class=\"progress-chart-card-heading\">{{ heading }}</h3>\n      <div *ngIf=\"showDropdown\" class=\"progress-chart-card-dropdown\">\n        <app-dropdown\n          [variant]=\"dropdownVariant\"\n          size=\"md\"\n          iconName=\"more_vert\"\n          [menuItems]=\"dropdownMenuItems\"\n          (onItemClick)=\"onDropdownSelect($event)\"\n        >\n        </app-dropdown>\n      </div>\n    </div>\n\n    <!-- Dropdown Menu for other variants -->\n    <div *ngIf=\"showDropdown && type !== 'simple'\" class=\"progress-chart-card-dropdown\">\n      <app-dropdown\n        [variant]=\"dropdownVariant\"\n        size=\"md\"\n        iconName=\"more_vert\"\n        [menuItems]=\"dropdownMenuItems\"\n        (onItemClick)=\"onDropdownSelect($event)\"\n      >\n      </app-dropdown>\n    </div>\n\n    <!-- Featured icon for featured-icon variant -->\n    <div *ngIf=\"type === 'featured-icon'\" class=\"progress-chart-card-icon\">\n      <app-featured-icon\n        [size]=\"iconSize\"\n        [color]=\"iconColor\"\n        [style]=\"iconStyle\"\n        [icon]=\"icon\"\n      >\n      </app-featured-icon>\n    </div>\n\n    <!-- Heading for other variants -->\n    <h3 *ngIf=\"type !== 'simple'\" class=\"progress-chart-card-heading\">{{ heading }}</h3>\n\n    <!-- Number and content row -->\n    <div class=\"progress-chart-card-row\">\n      <div class=\"progress-chart-card-number-wrap\">\n        <div class=\"progress-chart-card-number\">{{ formattedValue }}</div>\n        \n        \n        <!-- Badge next to value when chart is shown -->\n        <div\n          *ngIf=\"showChart && showProgressIcon && (type === 'simple' || type === 'featured-icon')\"\n          class=\"progress-chart-card-badge-inline\"\n        >\n          <app-badge\n            [variant]=\"badgeVariant\"\n            size=\"md\"\n            emphasis=\"medium\"\n            [icon]=\"badgeIconName\"\n            [label]=\"progressPercentage\"\n          >\n          </app-badge>\n        </div>\n      </div>\n\n      <!-- Badge for simple and featured-icon variants (when chart is not shown) -->\n      <div\n        *ngIf=\"(type === 'simple' || type === 'featured-icon') && showProgressIcon && !showChart\"\n        class=\"progress-chart-card-badge-wrap\"\n      >\n        <app-badge\n          [variant]=\"badgeVariant\"\n          size=\"md\"\n          emphasis=\"medium\"\n          [icon]=\"badgeIconName\"\n          [label]=\"progressPercentage\"\n        >\n        </app-badge>\n      </div>\n\n      <!-- Chart for any variant when showChart is true -->\n      <app-progress-chart\n        *ngIf=\"showChart\"\n        [trend]=\"progress\"\n        [progress]=\"progressValue\"\n        [animated]=\"true\"\n        [showTarget]=\"showTarget\"\n        [target]=\"target\"\n        [warningThreshold]=\"warningThreshold\"\n        [dangerThreshold]=\"dangerThreshold\"\n      >\n      </app-progress-chart>\n    </div>\n  </div>\n\n  <!-- Footer outside container -->\n  <app-container-footer\n    *ngIf=\"showFooter\"\n    [size]=\"'standard'\"\n    [buttonLabel]=\"footerButtonLabel\"\n    (onButtonClick)=\"onFooterButtonClick()\"\n  >\n  </app-container-footer>\n</div>\n", styles: [".progress-chart-card-wrapper{position:relative;display:inline-block;border-radius:12px;overflow:visible}.progress-chart-card{position:relative;display:flex;flex-direction:column;gap:8px;font-family:var(--font-inter);background:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:12px;box-sizing:border-box}.progress-chart-card.has-footer{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:none}.progress-chart-card-header{display:flex;justify-content:space-between;align-items:center;width:100%;gap:var(--spacing-md);margin-bottom:var(--spacing-sm)}.progress-chart-card-header .progress-chart-card-dropdown{position:relative;top:unset;right:unset;z-index:var(--z-index-dropdown, 1000);flex-shrink:0}.progress-chart-card-dropdown{position:absolute;top:20px;right:20px;z-index:1000}.progress-chart-card-mobile.progress-chart-card-simple .progress-chart-card-dropdown,.progress-chart-card-mobile.progress-chart-card-simple-chart .progress-chart-card-dropdown{top:16px;right:16px}.progress-chart-card-heading{font-weight:500;font-size:14px;line-height:1.43;color:var(--color-neutral-600);margin:0}.progress-chart-card-row{display:flex;align-items:flex-end;gap:16px}.progress-icon{display:flex;align-items:center}.progress-icon .material-symbols-outlined{font-size:var(--icon-size-xl);font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 20}.progress-icon-positive{color:var(--color-success-600)!important}.progress-icon-negative{color:var(--color-error-600)!important}.progress-icon-neutral{color:var(--color-neutral-600)!important}.progress-icon-positive .material-symbols-outlined{color:var(--color-success-600)!important}.progress-icon-negative .material-symbols-outlined{color:var(--color-error-600)!important}.progress-icon-neutral .material-symbols-outlined{color:var(--color-neutral-600)!important}.progress-chart-card-badge-wrap{padding-bottom:4px}.progress-chart-card-number-wrap{flex:1;display:flex;align-items:center;gap:var(--spacing-sm)}.progress-chart-card-desktop .progress-chart-card-number{font-weight:var(--weight-semibold);font-size:var(--display-sm-size);line-height:2.375rem;color:var(--color-neutral-900);margin:0}.progress-chart-card-mobile .progress-chart-card-number{font-weight:var(--weight-semibold);font-size:var(--display-xs-size);line-height:2rem;color:var(--color-neutral-900);margin:0}.progress-chart-card-icon{margin-bottom:8px}.progress-chart-card-desktop.progress-chart-card-simple,.progress-chart-card-desktop.progress-chart-card-simple-chart,.progress-chart-card-desktop.progress-chart-card-featured-icon{width:388px;padding:24px}.progress-chart-card-mobile.progress-chart-card-simple,.progress-chart-card-mobile.progress-chart-card-simple-chart,.progress-chart-card-mobile.progress-chart-card-featured-icon{width:343px;padding:20px 16px}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], breakpoint: [{
                type: Input
            }], heading: [{
                type: Input
            }], value: [{
                type: Input
            }], valueType: [{
                type: Input
            }], progress: [{
                type: Input
            }], showProgressIcon: [{
                type: Input
            }], showDropdown: [{
                type: Input
            }], dropdownVariant: [{
                type: Input
            }], progressPercentage: [{
                type: Input
            }], badgeColor: [{
                type: Input
            }], showChart: [{
                type: Input
            }], progressValue: [{
                type: Input
            }], showFooter: [{
                type: Input
            }], footerButtonLabel: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconSize: [{
                type: Input
            }], iconColor: [{
                type: Input
            }], iconStyle: [{
                type: Input
            }], showTarget: [{
                type: Input
            }], target: [{
                type: Input
            }], warningThreshold: [{
                type: Input
            }], dangerThreshold: [{
                type: Input
            }] } });

class SidebarComponent {
    constructor() {
        this.logoType = 'actabl';
        this.menuItems = [
            { label: 'Dashboard', icon: 'dashboard', isActive: true },
            { label: 'Analytics', icon: 'analytics', isActive: false },
            { label: 'Reports', icon: 'assessment', isActive: false },
            { label: 'Calendar', icon: 'calendar_today', isActive: false },
            { label: 'Messages', icon: 'message', isActive: false },
            { label: 'Contacts', icon: 'contacts', isActive: false },
            { label: 'Files', icon: 'folder', isActive: false },
        ];
        this.footerItems = [
            { label: 'Help', icon: 'help_outline' },
            { label: 'Settings', icon: 'settings' },
        ];
        this.avatarMenuItems = [
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
    }
    onNavItemClick(label) {
        // Set all items to inactive
        this.menuItems.forEach((item) => (item.isActive = false));
        // Set clicked item to active
        const clickedItem = this.menuItems.find((item) => item.label === label);
        if (clickedItem) {
            clickedItem.isActive = true;
        }
    }
    onAvatarMenuClick(item) {
        console.log('Avatar menu clicked:', item.label);
        // Handle avatar menu actions here
        // For example, navigation to profile, settings, etc.
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: SidebarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: SidebarComponent, isStandalone: true, selector: "app-sidebar", inputs: { logoType: "logoType", avatarUrl: "avatarUrl", avatarInitials: "avatarInitials", menuItems: "menuItems", footerItems: "footerItems" }, ngImport: i0, template: "<div class=\"sidebar-container\">\n  <div class=\"navigation\">\n    <!-- Gradient bar -->\n    <div class=\"gradient-bar\">\n      <div class=\"detail-bar\"></div>\n    </div>\n\n    <!-- Main content -->\n    <div class=\"content\">\n      <!-- Logo box -->\n      <app-logo-box [logoType]=\"logoType\"></app-logo-box>\n\n      <!-- Navigation section -->\n      <div class=\"navigation-section\">\n        <!-- Search -->\n        <div class=\"search-container\">\n          <app-button\n            hierarchy=\"secondary\"\n            icon=\"only\"\n            size=\"sm\"\n            iconName=\"search\"\n          >\n          </app-button>\n        </div>\n\n        <!-- Nav items -->\n        <div class=\"nav-items\">\n          <app-nav-item\n            *ngFor=\"let item of menuItems; let i = index\"\n            [icon]=\"item.icon\"\n            [label]=\"item.label\"\n            [isActive]=\"item.isActive\"\n            (itemClick)=\"onNavItemClick($event)\"\n          >\n          </app-nav-item>\n        </div>\n      </div>\n\n      <!-- Footer -->\n      <div class=\"footer\">\n        <div class=\"footer-navigation\">\n          <app-nav-item\n            *ngFor=\"let item of footerItems\"\n            [icon]=\"item.icon\"\n            [label]=\"item.label\"\n            [isActive]=\"false\"\n          >\n          </app-nav-item>\n        </div>\n\n        <!-- Avatar Dropdown -->\n        <app-dropdown\n          variant=\"avatar\"\n          size=\"md\"\n          avatarSize=\"md\"\n          [avatarSrc]=\"\n            avatarUrl || '/bellhopos/assets/avatars/regionalDirector.png'\n          \"\n          [avatarName]=\"'Daniel Mobara'\"\n          [avatarEmail]=\"'daniel@solsticehospitality.com'\"\n          [menuItems]=\"avatarMenuItems\"\n          [showIcons]=\"true\"\n          forcePosition=\"right-bottom\"\n          (onItemClick)=\"onAvatarMenuClick($event)\"\n        >\n        </app-dropdown>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".sidebar-container{width:100vw;height:100vh;background-color:var(--color-white);position:relative}.navigation{background-color:var(--color-white);display:flex;height:100vh;align-items:flex-start;justify-content:flex-start;position:absolute;left:0;top:0;border-right:1px solid var(--color-neutral-200);z-index:100}.gradient-bar{position:relative;width:var(--spacing-xs);height:100%;flex-shrink:0}.detail-bar{position:absolute;background:linear-gradient(180deg,var(--color-accent-300) 0%,var(--color-brand-400) 51%,var(--color-brand-800) 100%);inset:0}.content{box-sizing:border-box;display:flex;flex-direction:column;gap:var(--spacing-2xl);height:100%;align-items:center;justify-content:flex-start;padding:var(--spacing-md) var(--spacing-md) var(--spacing-lg) var(--spacing-md);position:relative;flex-shrink:0;width:60px}.navigation-section{flex:1 1 0%;display:flex;flex-direction:column;gap:var(--spacing-xl);flex-grow:1;align-items:center;justify-content:flex-start;min-height:1px;min-width:1px;position:relative;flex-shrink:0;width:100%}.search-container{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;flex-shrink:0;width:100%}.nav-items{display:flex;flex-direction:column;gap:6px;align-items:center;justify-content:flex-start;position:relative;flex-shrink:0;width:100%}.footer{display:flex;flex-direction:column;gap:16px;align-items:center;justify-content:center;position:relative;flex-shrink:0;width:100%}.footer-navigation{display:flex;flex-direction:column;gap:6px;align-items:center;justify-content:center;position:relative;flex-shrink:0;width:100%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: NavItemComponent, selector: "app-nav-item", inputs: ["icon", "label", "isActive"], outputs: ["itemClick"] }, { kind: "component", type: LogoBoxComponent, selector: "app-logo-box", inputs: ["logoType"] }, { kind: "component", type: ButtonComponent, selector: "app-button", inputs: ["hierarchy", "type", "icon", "state", "size", "label", "iconName", "disabled", "loading"], outputs: ["onClick"] }, { kind: "component", type: DropdownComponent, selector: "app-dropdown", inputs: ["size", "state", "variant", "label", "iconName", "disabled", "menuItems", "header", "avatarSrc", "avatarAlt", "avatarSize", "avatarName", "avatarEmail", "showIcons", "forcePosition"], outputs: ["onItemClick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: SidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sidebar', standalone: true, imports: [
                        CommonModule,
                        NavItemComponent,
                        LogoBoxComponent,
                        ButtonComponent,
                        AvatarComponent,
                        DropdownComponent,
                    ], template: "<div class=\"sidebar-container\">\n  <div class=\"navigation\">\n    <!-- Gradient bar -->\n    <div class=\"gradient-bar\">\n      <div class=\"detail-bar\"></div>\n    </div>\n\n    <!-- Main content -->\n    <div class=\"content\">\n      <!-- Logo box -->\n      <app-logo-box [logoType]=\"logoType\"></app-logo-box>\n\n      <!-- Navigation section -->\n      <div class=\"navigation-section\">\n        <!-- Search -->\n        <div class=\"search-container\">\n          <app-button\n            hierarchy=\"secondary\"\n            icon=\"only\"\n            size=\"sm\"\n            iconName=\"search\"\n          >\n          </app-button>\n        </div>\n\n        <!-- Nav items -->\n        <div class=\"nav-items\">\n          <app-nav-item\n            *ngFor=\"let item of menuItems; let i = index\"\n            [icon]=\"item.icon\"\n            [label]=\"item.label\"\n            [isActive]=\"item.isActive\"\n            (itemClick)=\"onNavItemClick($event)\"\n          >\n          </app-nav-item>\n        </div>\n      </div>\n\n      <!-- Footer -->\n      <div class=\"footer\">\n        <div class=\"footer-navigation\">\n          <app-nav-item\n            *ngFor=\"let item of footerItems\"\n            [icon]=\"item.icon\"\n            [label]=\"item.label\"\n            [isActive]=\"false\"\n          >\n          </app-nav-item>\n        </div>\n\n        <!-- Avatar Dropdown -->\n        <app-dropdown\n          variant=\"avatar\"\n          size=\"md\"\n          avatarSize=\"md\"\n          [avatarSrc]=\"\n            avatarUrl || '/bellhopos/assets/avatars/regionalDirector.png'\n          \"\n          [avatarName]=\"'Daniel Mobara'\"\n          [avatarEmail]=\"'daniel@solsticehospitality.com'\"\n          [menuItems]=\"avatarMenuItems\"\n          [showIcons]=\"true\"\n          forcePosition=\"right-bottom\"\n          (onItemClick)=\"onAvatarMenuClick($event)\"\n        >\n        </app-dropdown>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".sidebar-container{width:100vw;height:100vh;background-color:var(--color-white);position:relative}.navigation{background-color:var(--color-white);display:flex;height:100vh;align-items:flex-start;justify-content:flex-start;position:absolute;left:0;top:0;border-right:1px solid var(--color-neutral-200);z-index:100}.gradient-bar{position:relative;width:var(--spacing-xs);height:100%;flex-shrink:0}.detail-bar{position:absolute;background:linear-gradient(180deg,var(--color-accent-300) 0%,var(--color-brand-400) 51%,var(--color-brand-800) 100%);inset:0}.content{box-sizing:border-box;display:flex;flex-direction:column;gap:var(--spacing-2xl);height:100%;align-items:center;justify-content:flex-start;padding:var(--spacing-md) var(--spacing-md) var(--spacing-lg) var(--spacing-md);position:relative;flex-shrink:0;width:60px}.navigation-section{flex:1 1 0%;display:flex;flex-direction:column;gap:var(--spacing-xl);flex-grow:1;align-items:center;justify-content:flex-start;min-height:1px;min-width:1px;position:relative;flex-shrink:0;width:100%}.search-container{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;flex-shrink:0;width:100%}.nav-items{display:flex;flex-direction:column;gap:6px;align-items:center;justify-content:flex-start;position:relative;flex-shrink:0;width:100%}.footer{display:flex;flex-direction:column;gap:16px;align-items:center;justify-content:center;position:relative;flex-shrink:0;width:100%}.footer-navigation{display:flex;flex-direction:column;gap:6px;align-items:center;justify-content:center;position:relative;flex-shrink:0;width:100%}\n"] }]
        }], propDecorators: { logoType: [{
                type: Input
            }], avatarUrl: [{
                type: Input
            }], avatarInitials: [{
                type: Input
            }], menuItems: [{
                type: Input
            }], footerItems: [{
                type: Input
            }] } });

class ToggleComponent {
    constructor() {
        this.size = 'md';
        this.showText = false;
        this.label = '';
        this.supportingText = '';
        this.disabled = false;
        this.id = '';
        this.toggleChange = new EventEmitter();
        this._checked = false;
        this._state = 'default';
        // ControlValueAccessor implementation
        this.onChange = (value) => { };
        this.onTouched = () => { };
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._checked = value;
        this.onChange(value);
        this.toggleChange.emit(value);
    }
    get state() {
        if (this.disabled)
            return 'disabled';
        return this._state;
    }
    onToggle() {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.onTouched();
    }
    onMouseEnter() {
        if (this.disabled)
            return;
        this._state = 'hover';
    }
    onMouseLeave() {
        if (this.disabled)
            return;
        this._state = 'default';
    }
    onFocus() {
        if (this.disabled)
            return;
        this._state = 'focus';
    }
    onBlur() {
        if (this.disabled)
            return;
        this._state = 'default';
        this.onTouched();
    }
    // ControlValueAccessor methods
    writeValue(value) {
        this._checked = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ToggleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: ToggleComponent, isStandalone: true, selector: "app-toggle", inputs: { size: "size", showText: "showText", label: "label", supportingText: "supportingText", disabled: "disabled", id: "id" }, outputs: { toggleChange: "toggleChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ToggleComponent),
                multi: true,
            },
        ], ngImport: i0, template: "<div\n  class=\"toggle-wrapper\"\n  [class.toggle-with-text]=\"showText\"\n  [class.toggle-size-sm]=\"size === 'sm'\"\n  [class.toggle-size-md]=\"size === 'md'\"\n>\n  <div\n    class=\"toggle-switch\"\n    [class.toggle-pressed]=\"checked\"\n    [class.toggle-unpressed]=\"!checked\"\n    [class.toggle-sm]=\"size === 'sm'\"\n    [class.toggle-md]=\"size === 'md'\"\n    [class.toggle-disabled]=\"disabled\"\n    [class.toggle-hover]=\"state === 'hover'\"\n    [class.toggle-focus]=\"state === 'focus'\"\n    (click)=\"onToggle()\"\n    (mouseenter)=\"onMouseEnter()\"\n    (mouseleave)=\"onMouseLeave()\"\n    (focus)=\"onFocus()\"\n    (blur)=\"onBlur()\"\n    [tabindex]=\"disabled ? -1 : 0\"\n    [attr.id]=\"id\"\n    role=\"switch\"\n    [attr.aria-checked]=\"checked\"\n    [attr.aria-disabled]=\"disabled\"\n  >\n    <div\n      class=\"toggle-button\"\n      [class.toggle-button-pressed]=\"checked\"\n      [class.toggle-button-unpressed]=\"!checked\"\n      [class.toggle-button-sm]=\"size === 'sm'\"\n      [class.toggle-button-md]=\"size === 'md'\"\n      [class.toggle-button-disabled]=\"disabled\"\n    ></div>\n  </div>\n\n  <div class=\"toggle-text\" *ngIf=\"showText && (label || supportingText)\">\n    <div\n      class=\"toggle-label\"\n      [class.toggle-label-sm]=\"size === 'sm'\"\n      [class.toggle-label-md]=\"size === 'md'\"\n      *ngIf=\"label\"\n    >\n      {{ label }}\n    </div>\n    <div class=\"toggle-supporting-text\" *ngIf=\"supportingText\">\n      {{ supportingText }}\n    </div>\n  </div>\n</div>\n", styles: [".toggle-wrapper{display:flex;align-items:flex-start;gap:0}.toggle-with-text.toggle-size-sm{gap:var(--spacing-md)}.toggle-with-text.toggle-size-md{gap:var(--spacing-lg)}.toggle-switch{display:flex;align-items:center;padding:var(--spacing-xxs);border-radius:9999px;cursor:pointer;transition:all .2s ease;outline:none;border:none;background:transparent}.toggle-switch:focus{outline:none}.toggle-switch.toggle-disabled{cursor:not-allowed}.toggle-switch.toggle-sm{width:36px;height:20px}.toggle-switch.toggle-md{width:44px;height:24px}.toggle-switch.toggle-unpressed{background-color:var(--color-neutral-200);justify-content:flex-start}.toggle-switch.toggle-unpressed.toggle-hover{background-color:var(--color-neutral-200)}.toggle-switch.toggle-unpressed.toggle-focus{background-color:var(--color-neutral-200);box-shadow:0 0 0 2px #fff,0 0 0 4px #2e90fa}.toggle-switch.toggle-unpressed.toggle-disabled{background-color:var(--color-neutral-100)}.toggle-switch.toggle-pressed{background-color:var(--color-brand-600);justify-content:flex-end}.toggle-switch.toggle-pressed.toggle-hover{background-color:var(--color-brand-700)}.toggle-switch.toggle-pressed.toggle-focus{background-color:var(--color-brand-600);box-shadow:0 0 0 2px #fff,0 0 0 4px #2e90fa}.toggle-switch.toggle-pressed.toggle-disabled{background-color:var(--color-neutral-100)}.toggle-button{border-radius:9999px;background-color:var(--color-white);box-shadow:0 0 1px 1px #4049681a,0 3px 4px #4049681a;transition:all .2s ease}.toggle-button.toggle-button-sm{width:16px;height:16px}.toggle-button.toggle-button-md{width:20px;height:20px}.toggle-button.toggle-button-disabled{background-color:var(--color-neutral-300);box-shadow:0 0 1px 1px #4049681a,0 3px 4px #4049681a}.toggle-text{display:flex;flex-direction:column;flex:1}.toggle-label{color:var(--color-neutral-700);font-family:var(--font-inter);font-weight:var(--weight-medium);text-align:left;margin:0;line-height:1.5}.toggle-label.toggle-label-sm{font-size:var(--text-sm-size);line-height:var(--text-sm-line)}.toggle-label.toggle-label-md{font-size:var(--text-md-size);line-height:var(--text-md-line)}.toggle-supporting-text{color:var(--color-neutral-600);font-family:var(--font-inter);font-weight:var(--weight-regular);font-size:var(--text-sm-size);line-height:var(--text-sm-line);text-align:left;margin:0;margin-top:var(--spacing-xxs)}@media (prefers-reduced-motion: reduce){.toggle-switch,.toggle-button{transition:none}}@media (prefers-contrast: high){.toggle-switch.toggle-unpressed,.toggle-switch.toggle-pressed{border:2px solid currentColor}}.toggle-switch:focus-visible{outline:2px solid #2e90fa;outline-offset:2px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: ToggleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-toggle', standalone: true, imports: [CommonModule], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ToggleComponent),
                            multi: true,
                        },
                    ], template: "<div\n  class=\"toggle-wrapper\"\n  [class.toggle-with-text]=\"showText\"\n  [class.toggle-size-sm]=\"size === 'sm'\"\n  [class.toggle-size-md]=\"size === 'md'\"\n>\n  <div\n    class=\"toggle-switch\"\n    [class.toggle-pressed]=\"checked\"\n    [class.toggle-unpressed]=\"!checked\"\n    [class.toggle-sm]=\"size === 'sm'\"\n    [class.toggle-md]=\"size === 'md'\"\n    [class.toggle-disabled]=\"disabled\"\n    [class.toggle-hover]=\"state === 'hover'\"\n    [class.toggle-focus]=\"state === 'focus'\"\n    (click)=\"onToggle()\"\n    (mouseenter)=\"onMouseEnter()\"\n    (mouseleave)=\"onMouseLeave()\"\n    (focus)=\"onFocus()\"\n    (blur)=\"onBlur()\"\n    [tabindex]=\"disabled ? -1 : 0\"\n    [attr.id]=\"id\"\n    role=\"switch\"\n    [attr.aria-checked]=\"checked\"\n    [attr.aria-disabled]=\"disabled\"\n  >\n    <div\n      class=\"toggle-button\"\n      [class.toggle-button-pressed]=\"checked\"\n      [class.toggle-button-unpressed]=\"!checked\"\n      [class.toggle-button-sm]=\"size === 'sm'\"\n      [class.toggle-button-md]=\"size === 'md'\"\n      [class.toggle-button-disabled]=\"disabled\"\n    ></div>\n  </div>\n\n  <div class=\"toggle-text\" *ngIf=\"showText && (label || supportingText)\">\n    <div\n      class=\"toggle-label\"\n      [class.toggle-label-sm]=\"size === 'sm'\"\n      [class.toggle-label-md]=\"size === 'md'\"\n      *ngIf=\"label\"\n    >\n      {{ label }}\n    </div>\n    <div class=\"toggle-supporting-text\" *ngIf=\"supportingText\">\n      {{ supportingText }}\n    </div>\n  </div>\n</div>\n", styles: [".toggle-wrapper{display:flex;align-items:flex-start;gap:0}.toggle-with-text.toggle-size-sm{gap:var(--spacing-md)}.toggle-with-text.toggle-size-md{gap:var(--spacing-lg)}.toggle-switch{display:flex;align-items:center;padding:var(--spacing-xxs);border-radius:9999px;cursor:pointer;transition:all .2s ease;outline:none;border:none;background:transparent}.toggle-switch:focus{outline:none}.toggle-switch.toggle-disabled{cursor:not-allowed}.toggle-switch.toggle-sm{width:36px;height:20px}.toggle-switch.toggle-md{width:44px;height:24px}.toggle-switch.toggle-unpressed{background-color:var(--color-neutral-200);justify-content:flex-start}.toggle-switch.toggle-unpressed.toggle-hover{background-color:var(--color-neutral-200)}.toggle-switch.toggle-unpressed.toggle-focus{background-color:var(--color-neutral-200);box-shadow:0 0 0 2px #fff,0 0 0 4px #2e90fa}.toggle-switch.toggle-unpressed.toggle-disabled{background-color:var(--color-neutral-100)}.toggle-switch.toggle-pressed{background-color:var(--color-brand-600);justify-content:flex-end}.toggle-switch.toggle-pressed.toggle-hover{background-color:var(--color-brand-700)}.toggle-switch.toggle-pressed.toggle-focus{background-color:var(--color-brand-600);box-shadow:0 0 0 2px #fff,0 0 0 4px #2e90fa}.toggle-switch.toggle-pressed.toggle-disabled{background-color:var(--color-neutral-100)}.toggle-button{border-radius:9999px;background-color:var(--color-white);box-shadow:0 0 1px 1px #4049681a,0 3px 4px #4049681a;transition:all .2s ease}.toggle-button.toggle-button-sm{width:16px;height:16px}.toggle-button.toggle-button-md{width:20px;height:20px}.toggle-button.toggle-button-disabled{background-color:var(--color-neutral-300);box-shadow:0 0 1px 1px #4049681a,0 3px 4px #4049681a}.toggle-text{display:flex;flex-direction:column;flex:1}.toggle-label{color:var(--color-neutral-700);font-family:var(--font-inter);font-weight:var(--weight-medium);text-align:left;margin:0;line-height:1.5}.toggle-label.toggle-label-sm{font-size:var(--text-sm-size);line-height:var(--text-sm-line)}.toggle-label.toggle-label-md{font-size:var(--text-md-size);line-height:var(--text-md-line)}.toggle-supporting-text{color:var(--color-neutral-600);font-family:var(--font-inter);font-weight:var(--weight-regular);font-size:var(--text-sm-size);line-height:var(--text-sm-line);text-align:left;margin:0;margin-top:var(--spacing-xxs)}@media (prefers-reduced-motion: reduce){.toggle-switch,.toggle-button{transition:none}}@media (prefers-contrast: high){.toggle-switch.toggle-unpressed,.toggle-switch.toggle-pressed{border:2px solid currentColor}}.toggle-switch:focus-visible{outline:2px solid #2e90fa;outline-offset:2px}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], showText: [{
                type: Input
            }], label: [{
                type: Input
            }], supportingText: [{
                type: Input
            }], disabled: [{
                type: Input
            }], id: [{
                type: Input
            }], toggleChange: [{
                type: Output
            }] } });

class TrendChartMiniComponent {
    constructor() {
        this.trend = 'positive';
        this.data = [20, 45, 30, 60, 35, 70, 40];
        this.animated = true;
        this.variant = 'line-only';
        this.pathData = '';
        this.backgroundPath = '';
        this.width = 112;
        this.height = 56;
    }
    ngOnInit() {
        this.generatePath();
    }
    get containerClasses() {
        const classes = [
            'trend-chart',
            `trend-chart-${this.trend}`,
            `trend-chart-${this.variant}`,
        ];
        if (this.animated) {
            classes.push('trend-chart-animated');
        }
        return classes.join(' ');
    }
    get strokeColor() {
        switch (this.trend) {
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
    get fillColor() {
        switch (this.trend) {
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
    generatePath() {
        const points = this.normalizeData();
        this.pathData = this.generateRealisticPath(points);
        this.backgroundPath = this.generateBackgroundPath();
    }
    normalizeData() {
        const maxValue = Math.max(...this.data);
        const minValue = Math.min(...this.data);
        const range = maxValue - minValue;
        return this.data.map((value, index) => ({
            x: (index / (this.data.length - 1)) * this.width,
            y: this.height - ((value - minValue) / range) * (this.height - 20) - 10,
        }));
    }
    generateRealisticPath(points) {
        if (points.length < 2)
            return '';
        let path = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) {
            const prev = points[i - 1];
            const curr = points[i];
            const tension = 0.5; // realistic2 tension value
            const cp1x = prev.x + (curr.x - prev.x) * tension;
            const cp1y = prev.y;
            const cp2x = curr.x - (curr.x - prev.x) * tension;
            const cp2y = curr.y;
            path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
        }
        return path;
    }
    generateBackgroundPath() {
        const points = this.normalizeData();
        if (points.length < 2)
            return '';
        let path = `M ${points[0].x} ${this.height}`;
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
        path += ` L ${points[points.length - 1].x} ${this.height}`;
        path += ' Z';
        return path;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: TrendChartMiniComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: TrendChartMiniComponent, isStandalone: true, selector: "app-trend-chart-mini", inputs: { trend: "trend", data: "data", animated: "animated", variant: "variant" }, viewQueries: [{ propertyName: "svgElement", first: true, predicate: ["svgElement"], descendants: true, static: true }, { propertyName: "pathElement", first: true, predicate: ["pathElement"], descendants: true }], ngImport: i0, template: "<div [ngClass]=\"containerClasses\">\n  <svg\n    #svgElement\n    [attr.width]=\"width\"\n    [attr.height]=\"height\"\n    [attr.viewBox]=\"'0 0 ' + width + ' ' + height\"\n    class=\"chart-svg\"\n  >\n    <!-- Background gradient area -->\n    <defs>\n      <linearGradient\n        [id]=\"'gradient-' + trend\"\n        x1=\"0%\"\n        y1=\"0%\"\n        x2=\"0%\"\n        y2=\"100%\"\n      >\n        <stop\n          offset=\"0%\"\n          [attr.stop-color]=\"fillColor\"\n          [attr.stop-opacity]=\"variant === 'fill-only' ? '0.4' : '0.2'\"\n        />\n        <stop\n          offset=\"100%\"\n          [attr.stop-color]=\"fillColor\"\n          [attr.stop-opacity]=\"variant === 'fill-only' ? '0.1' : '0.05'\"\n        />\n      </linearGradient>\n    </defs>\n\n    <!-- Background fill (for fill-only and line-fill variants) -->\n    <path\n      *ngIf=\"backgroundPath && variant !== 'line-only'\"\n      class=\"chart-background\"\n      [attr.d]=\"backgroundPath\"\n      [attr.fill]=\"'url(#gradient-' + trend + ')'\"\n    ></path>\n\n    <!-- Stroke line (for line-only and line-fill variants) -->\n    <path\n      *ngIf=\"pathData && variant !== 'fill-only'\"\n      class=\"chart-line\"\n      [attr.d]=\"pathData\"\n      [attr.stroke]=\"strokeColor\"\n      stroke-width=\"2\"\n      fill=\"none\"\n    ></path>\n  </svg>\n</div>\n", styles: [".trend-chart{position:relative;display:inline-block;width:fit-content;height:fit-content}.chart-svg{overflow:visible}@keyframes chartFadeIn{0%{opacity:0;transform:translateY(10px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes backgroundFill{0%{opacity:0;transform:scaleY(0)}to{opacity:1;transform:scaleY(1)}}.trend-chart-animated{animation:chartFadeIn .6s cubic-bezier(.25,.46,.45,.94) forwards}.trend-chart-animated .chart-line{stroke-dasharray:1000;stroke-dashoffset:1000;animation:pathDraw 1.2s cubic-bezier(.25,.46,.45,.94) .3s forwards}@keyframes pathDraw{to{stroke-dashoffset:0}}.trend-chart-animated .chart-background{transform-origin:bottom;animation:backgroundFill .8s cubic-bezier(.25,.46,.45,.94) .3s forwards;opacity:0}.trend-chart-animated.trend-chart-line-only .chart-line{animation:pathDrawSlow 4s cubic-bezier(.25,.46,.45,.94) .3s forwards}@keyframes pathDrawSlow{to{stroke-dashoffset:0}}.progress-container{position:relative;display:flex;align-items:center;justify-content:center;width:96px;height:53px}.progress-text{position:absolute;font-family:var(--font-inter);font-size:18px;font-weight:600;line-height:1.56;text-align:center;color:var(--color-neutral-900);top:50%;left:50%;transform:translate(-50%,-50%);margin-top:4px}.progress-line{transition:stroke-dashoffset 1.5s cubic-bezier(.25,.46,.45,.94)}.trend-chart-animated .progress-line{stroke-dashoffset:120.9;animation:progressDraw 1.5s cubic-bezier(.25,.46,.45,.94) .3s forwards}@keyframes progressDraw{to{stroke-dashoffset:calc(120.9 - (120.9 * var(--progress, 40) / 100))}}.trend-chart-animated .progress-text{opacity:0;animation:fadeInUp .5s cubic-bezier(.25,.46,.45,.94) 1.2s forwards}@keyframes fadeInUp{0%{opacity:0;transform:translate(-50%,-50%) translateY(5px)}to{opacity:1;transform:translate(-50%,-50%) translateY(0)}}.trend-chart:not(.trend-chart-animated) .chart-line{stroke-dasharray:none}.trend-chart:not(.trend-chart-animated) .chart-background{opacity:1}.trend-chart:not(.trend-chart-animated) .progress-text{opacity:1}@media (prefers-reduced-motion: reduce){.trend-chart-animated,.trend-chart-animated .chart-line,.trend-chart-animated .chart-background,.trend-chart-animated .progress-line,.trend-chart-animated .progress-text{animation:none;opacity:1;transform:none;stroke-dasharray:none}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: TrendChartMiniComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-trend-chart-mini', standalone: true, imports: [CommonModule], template: "<div [ngClass]=\"containerClasses\">\n  <svg\n    #svgElement\n    [attr.width]=\"width\"\n    [attr.height]=\"height\"\n    [attr.viewBox]=\"'0 0 ' + width + ' ' + height\"\n    class=\"chart-svg\"\n  >\n    <!-- Background gradient area -->\n    <defs>\n      <linearGradient\n        [id]=\"'gradient-' + trend\"\n        x1=\"0%\"\n        y1=\"0%\"\n        x2=\"0%\"\n        y2=\"100%\"\n      >\n        <stop\n          offset=\"0%\"\n          [attr.stop-color]=\"fillColor\"\n          [attr.stop-opacity]=\"variant === 'fill-only' ? '0.4' : '0.2'\"\n        />\n        <stop\n          offset=\"100%\"\n          [attr.stop-color]=\"fillColor\"\n          [attr.stop-opacity]=\"variant === 'fill-only' ? '0.1' : '0.05'\"\n        />\n      </linearGradient>\n    </defs>\n\n    <!-- Background fill (for fill-only and line-fill variants) -->\n    <path\n      *ngIf=\"backgroundPath && variant !== 'line-only'\"\n      class=\"chart-background\"\n      [attr.d]=\"backgroundPath\"\n      [attr.fill]=\"'url(#gradient-' + trend + ')'\"\n    ></path>\n\n    <!-- Stroke line (for line-only and line-fill variants) -->\n    <path\n      *ngIf=\"pathData && variant !== 'fill-only'\"\n      class=\"chart-line\"\n      [attr.d]=\"pathData\"\n      [attr.stroke]=\"strokeColor\"\n      stroke-width=\"2\"\n      fill=\"none\"\n    ></path>\n  </svg>\n</div>\n", styles: [".trend-chart{position:relative;display:inline-block;width:fit-content;height:fit-content}.chart-svg{overflow:visible}@keyframes chartFadeIn{0%{opacity:0;transform:translateY(10px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes backgroundFill{0%{opacity:0;transform:scaleY(0)}to{opacity:1;transform:scaleY(1)}}.trend-chart-animated{animation:chartFadeIn .6s cubic-bezier(.25,.46,.45,.94) forwards}.trend-chart-animated .chart-line{stroke-dasharray:1000;stroke-dashoffset:1000;animation:pathDraw 1.2s cubic-bezier(.25,.46,.45,.94) .3s forwards}@keyframes pathDraw{to{stroke-dashoffset:0}}.trend-chart-animated .chart-background{transform-origin:bottom;animation:backgroundFill .8s cubic-bezier(.25,.46,.45,.94) .3s forwards;opacity:0}.trend-chart-animated.trend-chart-line-only .chart-line{animation:pathDrawSlow 4s cubic-bezier(.25,.46,.45,.94) .3s forwards}@keyframes pathDrawSlow{to{stroke-dashoffset:0}}.progress-container{position:relative;display:flex;align-items:center;justify-content:center;width:96px;height:53px}.progress-text{position:absolute;font-family:var(--font-inter);font-size:18px;font-weight:600;line-height:1.56;text-align:center;color:var(--color-neutral-900);top:50%;left:50%;transform:translate(-50%,-50%);margin-top:4px}.progress-line{transition:stroke-dashoffset 1.5s cubic-bezier(.25,.46,.45,.94)}.trend-chart-animated .progress-line{stroke-dashoffset:120.9;animation:progressDraw 1.5s cubic-bezier(.25,.46,.45,.94) .3s forwards}@keyframes progressDraw{to{stroke-dashoffset:calc(120.9 - (120.9 * var(--progress, 40) / 100))}}.trend-chart-animated .progress-text{opacity:0;animation:fadeInUp .5s cubic-bezier(.25,.46,.45,.94) 1.2s forwards}@keyframes fadeInUp{0%{opacity:0;transform:translate(-50%,-50%) translateY(5px)}to{opacity:1;transform:translate(-50%,-50%) translateY(0)}}.trend-chart:not(.trend-chart-animated) .chart-line{stroke-dasharray:none}.trend-chart:not(.trend-chart-animated) .chart-background{opacity:1}.trend-chart:not(.trend-chart-animated) .progress-text{opacity:1}@media (prefers-reduced-motion: reduce){.trend-chart-animated,.trend-chart-animated .chart-line,.trend-chart-animated .chart-background,.trend-chart-animated .progress-line,.trend-chart-animated .progress-text{animation:none;opacity:1;transform:none;stroke-dasharray:none}}\n"] }]
        }], propDecorators: { trend: [{
                type: Input
            }], data: [{
                type: Input
            }], animated: [{
                type: Input
            }], variant: [{
                type: Input
            }], svgElement: [{
                type: ViewChild,
                args: ['svgElement', { static: true }]
            }], pathElement: [{
                type: ViewChild,
                args: ['pathElement', { static: false }]
            }] } });

class TrendChartCardComponent {
    constructor() {
        this.type = 'metric';
        this.breakpoint = 'desktop';
        this.heading = 'RevPAR';
        this.value = 125.5;
        this.valueType = 'currency';
        this.trend = 'positive';
        this.showTrendIcon = true;
        this.showDropdown = true;
        this.dropdownVariant = 'icon-only-ghost';
        this.trendPercentage = '12.5%';
        this.showChart = false;
        this.chartData = [95, 105, 110, 108, 115, 120, 125];
        this.showFooter = false;
        this.footerButtonLabel = 'View report';
        this.icon = 'trending_up';
        this.iconSize = 'lg';
        this.iconColor = 'brand';
        this.iconStyle = 'outlined';
        this.dropdownMenuItems = [
            { id: 'view', label: 'View details', icon: 'visibility' },
            { id: 'edit', label: 'Edit', icon: 'edit' },
            { id: 'export', label: 'Export data', icon: 'download' },
            { id: 'divider', label: '', divider: true },
            { id: 'delete', label: 'Delete', icon: 'delete' },
        ];
    }
    get containerClasses() {
        const classes = [
            'trend-chart-card',
            `trend-chart-card-${this.type}`,
            `trend-chart-card-${this.breakpoint}`,
        ];
        if (this.showFooter) {
            classes.push('has-footer');
        }
        return classes.join(' ');
    }
    get formattedValue() {
        switch (this.valueType) {
            case 'currency':
                return `$${this.value.toFixed(2)}`;
            case 'percentage':
                return `${this.value.toFixed(1)}%`;
            default:
                // Special case for guest satisfaction ratings
                if (this.heading.toLowerCase().includes('satisfaction') &&
                    this.value >= 1000) {
                    const rating = (this.value / 1000).toFixed(1);
                    return `${rating}/5`;
                }
                return this.value.toLocaleString();
        }
    }
    get trendIcon() {
        if (this.trend === 'positive')
            return 'trending_up';
        if (this.trend === 'negative')
            return 'trending_down';
        return 'trending_flat';
    }
    get badgeVariant() {
        if (this.trend === 'positive')
            return 'green';
        if (this.trend === 'negative')
            return 'red';
        return 'gray';
    }
    get badgeIconName() {
        if (this.trend === 'positive')
            return 'trending_up';
        if (this.trend === 'negative')
            return 'trending_down';
        return 'trending_flat';
    }
    onDropdownSelect(item) {
        console.log('Dropdown item selected:', item);
        // Handle dropdown actions here
    }
    onFooterButtonClick() {
        console.log('Footer button clicked');
        // Handle footer button action here
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: TrendChartCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: TrendChartCardComponent, isStandalone: true, selector: "app-trend-chart-card", inputs: { type: "type", breakpoint: "breakpoint", heading: "heading", value: "value", valueType: "valueType", trend: "trend", showTrendIcon: "showTrendIcon", showDropdown: "showDropdown", dropdownVariant: "dropdownVariant", trendPercentage: "trendPercentage", showChart: "showChart", chartData: "chartData", showFooter: "showFooter", footerButtonLabel: "footerButtonLabel", icon: "icon", iconSize: "iconSize", iconColor: "iconColor", iconStyle: "iconStyle" }, ngImport: i0, template: "<div class=\"trend-chart-card-wrapper\">\n  <div [ngClass]=\"containerClasses\">\n    <!-- Header for metric variant -->\n    <div *ngIf=\"type === 'metric'\" class=\"trend-chart-card-header\">\n      <h3 class=\"trend-chart-card-heading\">{{ heading }}</h3>\n      <div *ngIf=\"showDropdown\" class=\"trend-chart-card-dropdown\">\n        <app-dropdown\n          [variant]=\"dropdownVariant\"\n          size=\"md\"\n          iconName=\"more_vert\"\n          [menuItems]=\"dropdownMenuItems\"\n          (onItemClick)=\"onDropdownSelect($event)\"\n        >\n        </app-dropdown>\n      </div>\n    </div>\n\n    <!-- Header for simple variant -->\n    <div *ngIf=\"type === 'simple'\" class=\"trend-chart-card-header\">\n      <h3 class=\"trend-chart-card-heading\">{{ heading }}</h3>\n      <div *ngIf=\"showDropdown\" class=\"trend-chart-card-dropdown\">\n        <app-dropdown\n          [variant]=\"dropdownVariant\"\n          size=\"md\"\n          iconName=\"more_vert\"\n          [menuItems]=\"dropdownMenuItems\"\n          (onItemClick)=\"onDropdownSelect($event)\"\n        >\n        </app-dropdown>\n      </div>\n    </div>\n\n    <!-- Dropdown Menu for other variants -->\n    <div *ngIf=\"showDropdown && type !== 'metric' && type !== 'simple'\" class=\"trend-chart-card-dropdown\">\n      <app-dropdown\n        [variant]=\"dropdownVariant\"\n        size=\"md\"\n        iconName=\"more_vert\"\n        [menuItems]=\"dropdownMenuItems\"\n        (onItemClick)=\"onDropdownSelect($event)\"\n      >\n      </app-dropdown>\n    </div>\n\n    <!-- Featured icon for featured-icon variant -->\n    <div *ngIf=\"type === 'featured-icon'\" class=\"trend-chart-card-icon\">\n      <app-featured-icon\n        [size]=\"iconSize\"\n        [color]=\"iconColor\"\n        [style]=\"iconStyle\"\n        [icon]=\"icon\"\n      >\n      </app-featured-icon>\n    </div>\n\n    <!-- Heading for other variants -->\n    <h3 *ngIf=\"type !== 'metric' && type !== 'simple'\" class=\"trend-chart-card-heading\">{{ heading }}</h3>\n\n    <!-- Number and content row -->\n    <div class=\"trend-chart-card-row\">\n      <div class=\"trend-chart-card-number-wrap\">\n        <div class=\"trend-chart-card-number\">{{ formattedValue }}</div>\n        \n        <!-- Trend icon for metric variant -->\n        <span\n          *ngIf=\"type === 'metric' && showTrendIcon\"\n          class=\"trend-icon\"\n          [class]=\"'trend-icon-' + trend\"\n        >\n          <span class=\"material-symbols-outlined\">{{ trendIcon }}</span>\n        </span>\n        \n        <!-- Badge next to value when chart is shown -->\n        <div\n          *ngIf=\"showChart && showTrendIcon && (type === 'simple' || type === 'featured-icon')\"\n          class=\"trend-chart-card-badge-inline\"\n        >\n          <app-badge\n            [variant]=\"badgeVariant\"\n            size=\"md\"\n            emphasis=\"medium\"\n            [icon]=\"badgeIconName\"\n            [label]=\"trendPercentage\"\n          >\n          </app-badge>\n        </div>\n      </div>\n\n      <!-- Badge for simple and featured-icon variants (when chart is not shown) -->\n      <div\n        *ngIf=\"(type === 'simple' || type === 'featured-icon') && showTrendIcon && !showChart\"\n        class=\"trend-chart-card-badge-wrap\"\n      >\n        <app-badge\n          [variant]=\"badgeVariant\"\n          size=\"md\"\n          emphasis=\"medium\"\n          [icon]=\"badgeIconName\"\n          [label]=\"trendPercentage\"\n        >\n        </app-badge>\n      </div>\n\n      <!-- Chart for any variant when showChart is true -->\n      <app-trend-chart-mini\n        *ngIf=\"showChart\"\n        [variant]=\"'line-only'\"\n        [trend]=\"trend\"\n        [data]=\"chartData\"\n        [animated]=\"true\"\n      >\n      </app-trend-chart-mini>\n    </div>\n  </div>\n\n  <!-- Footer outside container -->\n  <app-container-footer\n    *ngIf=\"showFooter\"\n    [size]=\"type === 'metric' ? 'minimal' : 'standard'\"\n    [buttonLabel]=\"footerButtonLabel\"\n    (onButtonClick)=\"onFooterButtonClick()\"\n  >\n  </app-container-footer>\n</div>\n", styles: [".trend-chart-card-wrapper{position:relative;display:inline-block;border-radius:12px;overflow:visible}.trend-chart-card{position:relative;display:flex;flex-direction:column;gap:8px;font-family:var(--font-inter);background:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:12px;box-sizing:border-box}.trend-chart-card.has-footer{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:none}.trend-chart-card-header{display:flex;justify-content:space-between;align-items:center;width:100%;gap:var(--spacing-md);margin-bottom:var(--spacing-sm)}.trend-chart-card-header .trend-chart-card-dropdown{position:relative;top:unset;right:unset;z-index:var(--z-index-dropdown, 1000);flex-shrink:0}.trend-chart-card-dropdown{position:absolute;top:20px;right:20px;z-index:1000}.trend-chart-card-mobile.trend-chart-card-metric .trend-chart-card-dropdown{top:12px;right:12px}.trend-chart-card-mobile.trend-chart-card-simple .trend-chart-card-dropdown,.trend-chart-card-mobile.trend-chart-card-simple-chart .trend-chart-card-dropdown{top:16px;right:16px}.trend-chart-card-heading{font-weight:500;font-size:14px;line-height:1.43;color:var(--color-neutral-600);margin:0}.trend-chart-card-row{display:flex;align-items:flex-end;gap:16px}.trend-icon{display:flex;align-items:center}.trend-icon .material-symbols-outlined{font-size:var(--icon-size-xl);font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 20}.trend-icon-positive{color:var(--color-success-600)!important}.trend-icon-negative{color:var(--color-error-600)!important}.trend-icon-neutral{color:var(--color-neutral-600)!important}.trend-icon-positive .material-symbols-outlined{color:var(--color-success-600)!important}.trend-icon-negative .material-symbols-outlined{color:var(--color-error-600)!important}.trend-icon-neutral .material-symbols-outlined{color:var(--color-neutral-600)!important}.trend-chart-card-badge-wrap{padding-bottom:4px}.trend-chart-card-number-wrap{flex:1;display:flex;align-items:center;gap:var(--spacing-sm)}.trend-chart-card-desktop .trend-chart-card-number{font-weight:var(--weight-semibold);font-size:var(--display-sm-size);line-height:2.375rem;color:var(--color-neutral-900);margin:0}.trend-chart-card-mobile .trend-chart-card-number{font-weight:var(--weight-semibold);font-size:var(--display-xs-size);line-height:2rem;color:var(--color-neutral-900);margin:0}.trend-chart-card-icon{margin-bottom:8px}.trend-chart-card-desktop.trend-chart-card-metric{width:200px;padding:20px}.trend-chart-card-desktop.trend-chart-card-simple,.trend-chart-card-desktop.trend-chart-card-simple-chart,.trend-chart-card-desktop.trend-chart-card-featured-icon{width:388px;padding:24px}.trend-chart-card-mobile.trend-chart-card-metric{width:171.5px;padding:12px}.trend-chart-card-mobile.trend-chart-card-simple,.trend-chart-card-mobile.trend-chart-card-simple-chart,.trend-chart-card-mobile.trend-chart-card-featured-icon{width:343px;padding:20px 16px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: TrendChartMiniComponent, selector: "app-trend-chart-mini", inputs: ["trend", "data", "animated", "variant"] }, { kind: "component", type: DropdownComponent, selector: "app-dropdown", inputs: ["size", "state", "variant", "label", "iconName", "disabled", "menuItems", "header", "avatarSrc", "avatarAlt", "avatarSize", "avatarName", "avatarEmail", "showIcons", "forcePosition"], outputs: ["onItemClick"] }, { kind: "component", type: ContainerFooterComponent, selector: "app-container-footer", inputs: ["size", "buttonLabel"], outputs: ["onButtonClick"] }, { kind: "component", type: FeaturedIconComponent, selector: "app-featured-icon", inputs: ["size", "color", "style", "icon"] }, { kind: "component", type: BadgeComponent, selector: "app-badge", inputs: ["variant", "size", "emphasis", "label", "icon", "dismissible", "disabled"], outputs: ["dismiss"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: TrendChartCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-trend-chart-card', standalone: true, imports: [
                        CommonModule,
                        TrendChartMiniComponent,
                        DropdownComponent,
                        ContainerFooterComponent,
                        FeaturedIconComponent,
                        BadgeComponent,
                    ], template: "<div class=\"trend-chart-card-wrapper\">\n  <div [ngClass]=\"containerClasses\">\n    <!-- Header for metric variant -->\n    <div *ngIf=\"type === 'metric'\" class=\"trend-chart-card-header\">\n      <h3 class=\"trend-chart-card-heading\">{{ heading }}</h3>\n      <div *ngIf=\"showDropdown\" class=\"trend-chart-card-dropdown\">\n        <app-dropdown\n          [variant]=\"dropdownVariant\"\n          size=\"md\"\n          iconName=\"more_vert\"\n          [menuItems]=\"dropdownMenuItems\"\n          (onItemClick)=\"onDropdownSelect($event)\"\n        >\n        </app-dropdown>\n      </div>\n    </div>\n\n    <!-- Header for simple variant -->\n    <div *ngIf=\"type === 'simple'\" class=\"trend-chart-card-header\">\n      <h3 class=\"trend-chart-card-heading\">{{ heading }}</h3>\n      <div *ngIf=\"showDropdown\" class=\"trend-chart-card-dropdown\">\n        <app-dropdown\n          [variant]=\"dropdownVariant\"\n          size=\"md\"\n          iconName=\"more_vert\"\n          [menuItems]=\"dropdownMenuItems\"\n          (onItemClick)=\"onDropdownSelect($event)\"\n        >\n        </app-dropdown>\n      </div>\n    </div>\n\n    <!-- Dropdown Menu for other variants -->\n    <div *ngIf=\"showDropdown && type !== 'metric' && type !== 'simple'\" class=\"trend-chart-card-dropdown\">\n      <app-dropdown\n        [variant]=\"dropdownVariant\"\n        size=\"md\"\n        iconName=\"more_vert\"\n        [menuItems]=\"dropdownMenuItems\"\n        (onItemClick)=\"onDropdownSelect($event)\"\n      >\n      </app-dropdown>\n    </div>\n\n    <!-- Featured icon for featured-icon variant -->\n    <div *ngIf=\"type === 'featured-icon'\" class=\"trend-chart-card-icon\">\n      <app-featured-icon\n        [size]=\"iconSize\"\n        [color]=\"iconColor\"\n        [style]=\"iconStyle\"\n        [icon]=\"icon\"\n      >\n      </app-featured-icon>\n    </div>\n\n    <!-- Heading for other variants -->\n    <h3 *ngIf=\"type !== 'metric' && type !== 'simple'\" class=\"trend-chart-card-heading\">{{ heading }}</h3>\n\n    <!-- Number and content row -->\n    <div class=\"trend-chart-card-row\">\n      <div class=\"trend-chart-card-number-wrap\">\n        <div class=\"trend-chart-card-number\">{{ formattedValue }}</div>\n        \n        <!-- Trend icon for metric variant -->\n        <span\n          *ngIf=\"type === 'metric' && showTrendIcon\"\n          class=\"trend-icon\"\n          [class]=\"'trend-icon-' + trend\"\n        >\n          <span class=\"material-symbols-outlined\">{{ trendIcon }}</span>\n        </span>\n        \n        <!-- Badge next to value when chart is shown -->\n        <div\n          *ngIf=\"showChart && showTrendIcon && (type === 'simple' || type === 'featured-icon')\"\n          class=\"trend-chart-card-badge-inline\"\n        >\n          <app-badge\n            [variant]=\"badgeVariant\"\n            size=\"md\"\n            emphasis=\"medium\"\n            [icon]=\"badgeIconName\"\n            [label]=\"trendPercentage\"\n          >\n          </app-badge>\n        </div>\n      </div>\n\n      <!-- Badge for simple and featured-icon variants (when chart is not shown) -->\n      <div\n        *ngIf=\"(type === 'simple' || type === 'featured-icon') && showTrendIcon && !showChart\"\n        class=\"trend-chart-card-badge-wrap\"\n      >\n        <app-badge\n          [variant]=\"badgeVariant\"\n          size=\"md\"\n          emphasis=\"medium\"\n          [icon]=\"badgeIconName\"\n          [label]=\"trendPercentage\"\n        >\n        </app-badge>\n      </div>\n\n      <!-- Chart for any variant when showChart is true -->\n      <app-trend-chart-mini\n        *ngIf=\"showChart\"\n        [variant]=\"'line-only'\"\n        [trend]=\"trend\"\n        [data]=\"chartData\"\n        [animated]=\"true\"\n      >\n      </app-trend-chart-mini>\n    </div>\n  </div>\n\n  <!-- Footer outside container -->\n  <app-container-footer\n    *ngIf=\"showFooter\"\n    [size]=\"type === 'metric' ? 'minimal' : 'standard'\"\n    [buttonLabel]=\"footerButtonLabel\"\n    (onButtonClick)=\"onFooterButtonClick()\"\n  >\n  </app-container-footer>\n</div>\n", styles: [".trend-chart-card-wrapper{position:relative;display:inline-block;border-radius:12px;overflow:visible}.trend-chart-card{position:relative;display:flex;flex-direction:column;gap:8px;font-family:var(--font-inter);background:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:12px;box-sizing:border-box}.trend-chart-card.has-footer{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:none}.trend-chart-card-header{display:flex;justify-content:space-between;align-items:center;width:100%;gap:var(--spacing-md);margin-bottom:var(--spacing-sm)}.trend-chart-card-header .trend-chart-card-dropdown{position:relative;top:unset;right:unset;z-index:var(--z-index-dropdown, 1000);flex-shrink:0}.trend-chart-card-dropdown{position:absolute;top:20px;right:20px;z-index:1000}.trend-chart-card-mobile.trend-chart-card-metric .trend-chart-card-dropdown{top:12px;right:12px}.trend-chart-card-mobile.trend-chart-card-simple .trend-chart-card-dropdown,.trend-chart-card-mobile.trend-chart-card-simple-chart .trend-chart-card-dropdown{top:16px;right:16px}.trend-chart-card-heading{font-weight:500;font-size:14px;line-height:1.43;color:var(--color-neutral-600);margin:0}.trend-chart-card-row{display:flex;align-items:flex-end;gap:16px}.trend-icon{display:flex;align-items:center}.trend-icon .material-symbols-outlined{font-size:var(--icon-size-xl);font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 20}.trend-icon-positive{color:var(--color-success-600)!important}.trend-icon-negative{color:var(--color-error-600)!important}.trend-icon-neutral{color:var(--color-neutral-600)!important}.trend-icon-positive .material-symbols-outlined{color:var(--color-success-600)!important}.trend-icon-negative .material-symbols-outlined{color:var(--color-error-600)!important}.trend-icon-neutral .material-symbols-outlined{color:var(--color-neutral-600)!important}.trend-chart-card-badge-wrap{padding-bottom:4px}.trend-chart-card-number-wrap{flex:1;display:flex;align-items:center;gap:var(--spacing-sm)}.trend-chart-card-desktop .trend-chart-card-number{font-weight:var(--weight-semibold);font-size:var(--display-sm-size);line-height:2.375rem;color:var(--color-neutral-900);margin:0}.trend-chart-card-mobile .trend-chart-card-number{font-weight:var(--weight-semibold);font-size:var(--display-xs-size);line-height:2rem;color:var(--color-neutral-900);margin:0}.trend-chart-card-icon{margin-bottom:8px}.trend-chart-card-desktop.trend-chart-card-metric{width:200px;padding:20px}.trend-chart-card-desktop.trend-chart-card-simple,.trend-chart-card-desktop.trend-chart-card-simple-chart,.trend-chart-card-desktop.trend-chart-card-featured-icon{width:388px;padding:24px}.trend-chart-card-mobile.trend-chart-card-metric{width:171.5px;padding:12px}.trend-chart-card-mobile.trend-chart-card-simple,.trend-chart-card-mobile.trend-chart-card-simple-chart,.trend-chart-card-mobile.trend-chart-card-featured-icon{width:343px;padding:20px 16px}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], breakpoint: [{
                type: Input
            }], heading: [{
                type: Input
            }], value: [{
                type: Input
            }], valueType: [{
                type: Input
            }], trend: [{
                type: Input
            }], showTrendIcon: [{
                type: Input
            }], showDropdown: [{
                type: Input
            }], dropdownVariant: [{
                type: Input
            }], trendPercentage: [{
                type: Input
            }], showChart: [{
                type: Input
            }], chartData: [{
                type: Input
            }], showFooter: [{
                type: Input
            }], footerButtonLabel: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconSize: [{
                type: Input
            }], iconColor: [{
                type: Input
            }], iconStyle: [{
                type: Input
            }] } });

const COMPONENTS = [
    AppbarComponent,
    BadgeComponent,
    BadgeDotComponent,
    BarChartComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    ContainerComponent,
    ContainerFooterComponent,
    DropdownComponent,
    FeaturedIconComponent,
    LogoBoxComponent,
    NavItemComponent,
    NotificationComponent,
    PageNavigationComponent,
    PageNavigationChildComponent,
    PageNavigationMultiLevelComponent,
    PageNavigationSingleLevelComponent,
    PopoverComponent,
    ProductSwitcherComponent,
    ProgressChartComponent,
    ProgressChartCardComponent,
    PropertySwitcherComponent,
    SidebarComponent,
    ToggleComponent,
    TrendChartCardComponent,
    TrendChartMiniComponent,
];
class BellhoposAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: BellhoposAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.1", ngImport: i0, type: BellhoposAngularModule, imports: [AppbarComponent,
            BadgeComponent,
            BadgeDotComponent,
            BarChartComponent,
            BreadcrumbsComponent,
            ButtonComponent,
            ContainerComponent,
            ContainerFooterComponent,
            DropdownComponent,
            FeaturedIconComponent,
            LogoBoxComponent,
            NavItemComponent,
            NotificationComponent,
            PageNavigationComponent,
            PageNavigationChildComponent,
            PageNavigationMultiLevelComponent,
            PageNavigationSingleLevelComponent,
            PopoverComponent,
            ProductSwitcherComponent,
            ProgressChartComponent,
            ProgressChartCardComponent,
            PropertySwitcherComponent,
            SidebarComponent,
            ToggleComponent,
            TrendChartCardComponent,
            TrendChartMiniComponent], exports: [AppbarComponent,
            BadgeComponent,
            BadgeDotComponent,
            BarChartComponent,
            BreadcrumbsComponent,
            ButtonComponent,
            ContainerComponent,
            ContainerFooterComponent,
            DropdownComponent,
            FeaturedIconComponent,
            LogoBoxComponent,
            NavItemComponent,
            NotificationComponent,
            PageNavigationComponent,
            PageNavigationChildComponent,
            PageNavigationMultiLevelComponent,
            PageNavigationSingleLevelComponent,
            PopoverComponent,
            ProductSwitcherComponent,
            ProgressChartComponent,
            ProgressChartCardComponent,
            PropertySwitcherComponent,
            SidebarComponent,
            ToggleComponent,
            TrendChartCardComponent,
            TrendChartMiniComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: BellhoposAngularModule, imports: [COMPONENTS] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: BellhoposAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: COMPONENTS,
                    exports: COMPONENTS,
                }]
        }] });

// Shared types for bellhop-os-angular library

const ChartCardArgTypes = {
    // Layout & Structure
    type: {
        control: { type: 'radio' },
        options: ['metric', 'metric-with-badge', 'simple-chart', 'featured-icon'],
        description: 'Card variant type',
        table: { category: 'Layout & Structure' }
    },
    breakpoint: {
        control: { type: 'radio' },
        options: ['desktop', 'mobile'],
        description: 'Responsive breakpoint',
        table: { category: 'Layout & Structure' }
    },
    showFooter: {
        control: { type: 'boolean' },
        description: 'Whether to show footer with action button',
        table: { category: 'Layout & Structure' }
    },
    // Content & Data
    heading: {
        control: { type: 'text' },
        description: 'Card heading text',
        table: { category: 'Content & Data' }
    },
    value: {
        control: { type: 'number' },
        description: 'Numeric value to display',
        table: { category: 'Content & Data' }
    },
    valueType: {
        control: { type: 'radio' },
        options: ['currency', 'percentage', 'number'],
        description: 'How to format the value',
        table: { category: 'Content & Data' }
    },
    footerButtonLabel: {
        control: { type: 'text' },
        description: 'Footer button text',
        table: { category: 'Content & Data' }
    },
    // Trend & Indicators
    trend: {
        control: { type: 'radio' },
        options: ['positive', 'negative', 'neutral'],
        description: 'Trend direction for styling and icons',
        table: { category: 'Trend & Indicators' }
    },
    showTrendIcon: {
        control: { type: 'boolean' },
        description: 'Whether to show trend indicator',
        table: { category: 'Trend & Indicators' }
    },
    trendPercentage: {
        control: { type: 'text' },
        description: 'Trend percentage text (e.g., "12.5%")',
        table: { category: 'Trend & Indicators' }
    },
    // Featured Icon (when applicable)
    icon: {
        control: { type: 'text' },
        description: 'Material Icon name for featured icon variant',
        table: { category: 'Featured Icon' },
        if: { arg: 'type', eq: 'featured-icon' }
    },
    iconSize: {
        control: { type: 'radio' },
        options: ['sm', 'md', 'lg', 'xl'],
        description: 'Featured icon size',
        table: { category: 'Featured Icon' },
        if: { arg: 'type', eq: 'featured-icon' }
    },
    iconColor: {
        control: { type: 'radio' },
        options: ['brand', 'success', 'warning', 'error', 'neutral'],
        description: 'Featured icon color theme',
        table: { category: 'Featured Icon' },
        if: { arg: 'type', eq: 'featured-icon' }
    },
    iconStyle: {
        control: { type: 'radio' },
        options: ['filled', 'outlined'],
        description: 'Featured icon style',
        table: { category: 'Featured Icon' },
        if: { arg: 'type', eq: 'featured-icon' }
    },
    // Actions & Interactions
    showDropdown: {
        control: { type: 'boolean' },
        description: 'Whether to show dropdown menu',
        table: { category: 'Actions & Interactions' }
    },
    dropdownVariant: {
        control: { type: 'radio' },
        options: ['icon-only-ghost', 'icon-only-outlined', 'text-with-icon', 'text-only'],
        description: 'Dropdown button variant',
        table: { category: 'Actions & Interactions' },
        if: { arg: 'showDropdown', eq: true }
    }
};
const TrendChartCardArgTypes = {
    ...ChartCardArgTypes,
    type: {
        control: { type: 'radio' },
        options: ['minimal', 'simple', 'simple-chart', 'featured-icon'],
        description: 'Card variant type (Trend Chart specific types)',
        table: { category: 'Layout & Structure' }
    },
    chartData: {
        control: { type: 'object' },
        description: 'Array of numbers for trend chart data',
        table: { category: 'Chart Data' },
        if: { arg: 'type', eq: 'simple-chart' }
    }
};

class IllustrationsComponent {
    constructor() {
        this.size = 'lg';
        this.title = '';
        this.description = '';
        this.svgPath = '/bellhopos/assets/illustrations/Search-not-found.svg';
        this.alt = 'Illustration';
    }
    get illustrationClasses() {
        const classes = ['illustration', `illustration-${this.size}`];
        return classes.join(' ');
    }
    get svgDimensions() {
        switch (this.size) {
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
    }
    get currentSvgPath() {
        return this.svgPath;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: IllustrationsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: IllustrationsComponent, isStandalone: true, selector: "app-illustrations", inputs: { size: "size", title: "title", description: "description", svgPath: "svgPath", alt: "alt" }, ngImport: i0, template: "<div [class]=\"illustrationClasses\">\n  <div class=\"illustration-wrapper\">\n    <div class=\"illustration-svg-container\" \n         [style.width.px]=\"svgDimensions.width\" \n         [style.height.px]=\"svgDimensions.height\">\n      <img \n        [src]=\"currentSvgPath\" \n        [alt]=\"alt\" \n        [style.width.px]=\"svgDimensions.width\"\n        [style.height.px]=\"svgDimensions.height\"\n        class=\"illustration-image\"\n      />\n    </div>\n    <div *ngIf=\"title || description\" class=\"illustration-content\">\n      <h3 *ngIf=\"title\" class=\"illustration-title\">{{ title }}</h3>\n      <p *ngIf=\"description\" class=\"illustration-description\">{{ description }}</p>\n    </div>\n  </div>\n</div>", styles: [".illustration{display:inline-flex;align-items:center;justify-content:center;position:relative}.illustration-wrapper{display:flex;flex-direction:column;align-items:center;gap:var(--spacing-3xl)}.illustration-svg-container{display:flex;align-items:center;justify-content:center;position:relative}.illustration-image{width:100%;height:100%;object-fit:contain}.illustration-content{text-align:center;max-width:480px}.illustration-title{font-family:var(--font-inter);font-size:var(--text-lg-size);font-weight:var(--weight-semibold);line-height:var(--text-lg-line);color:var(--color-neutral-900);margin:0 0 var(--spacing-md) 0}.illustration-description{font-family:var(--font-inter);font-size:var(--text-md-size);font-weight:var(--weight-regular);line-height:var(--text-md-line);color:var(--color-neutral-600);margin:0}.illustration-sm .illustration-svg-container{width:80px;height:80px}.illustration-md .illustration-svg-container{width:120px;height:120px}.illustration-lg .illustration-svg-container{width:160px;height:160px}.illustration-xl .illustration-svg-container{width:200px;height:200px}.illustration-2xl .illustration-svg-container{width:240px;height:240px}.illustration-3xl .illustration-svg-container{width:280px;height:280px}.illustration-4xl .illustration-svg-container{width:320px;height:320px}@media (max-width: 768px){.illustration-4xl .illustration-svg-container{width:400px;height:400px}.illustration-3xl .illustration-svg-container{width:320px;height:320px}.illustration-content{max-width:320px}}@media (max-width: 480px){.illustration-4xl .illustration-svg-container,.illustration-3xl .illustration-svg-container{width:280px;height:280px}.illustration-2xl .illustration-svg-container{width:240px;height:240px}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: IllustrationsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-illustrations', standalone: true, imports: [CommonModule], template: "<div [class]=\"illustrationClasses\">\n  <div class=\"illustration-wrapper\">\n    <div class=\"illustration-svg-container\" \n         [style.width.px]=\"svgDimensions.width\" \n         [style.height.px]=\"svgDimensions.height\">\n      <img \n        [src]=\"currentSvgPath\" \n        [alt]=\"alt\" \n        [style.width.px]=\"svgDimensions.width\"\n        [style.height.px]=\"svgDimensions.height\"\n        class=\"illustration-image\"\n      />\n    </div>\n    <div *ngIf=\"title || description\" class=\"illustration-content\">\n      <h3 *ngIf=\"title\" class=\"illustration-title\">{{ title }}</h3>\n      <p *ngIf=\"description\" class=\"illustration-description\">{{ description }}</p>\n    </div>\n  </div>\n</div>", styles: [".illustration{display:inline-flex;align-items:center;justify-content:center;position:relative}.illustration-wrapper{display:flex;flex-direction:column;align-items:center;gap:var(--spacing-3xl)}.illustration-svg-container{display:flex;align-items:center;justify-content:center;position:relative}.illustration-image{width:100%;height:100%;object-fit:contain}.illustration-content{text-align:center;max-width:480px}.illustration-title{font-family:var(--font-inter);font-size:var(--text-lg-size);font-weight:var(--weight-semibold);line-height:var(--text-lg-line);color:var(--color-neutral-900);margin:0 0 var(--spacing-md) 0}.illustration-description{font-family:var(--font-inter);font-size:var(--text-md-size);font-weight:var(--weight-regular);line-height:var(--text-md-line);color:var(--color-neutral-600);margin:0}.illustration-sm .illustration-svg-container{width:80px;height:80px}.illustration-md .illustration-svg-container{width:120px;height:120px}.illustration-lg .illustration-svg-container{width:160px;height:160px}.illustration-xl .illustration-svg-container{width:200px;height:200px}.illustration-2xl .illustration-svg-container{width:240px;height:240px}.illustration-3xl .illustration-svg-container{width:280px;height:280px}.illustration-4xl .illustration-svg-container{width:320px;height:320px}@media (max-width: 768px){.illustration-4xl .illustration-svg-container{width:400px;height:400px}.illustration-3xl .illustration-svg-container{width:320px;height:320px}.illustration-content{max-width:320px}}@media (max-width: 480px){.illustration-4xl .illustration-svg-container,.illustration-3xl .illustration-svg-container{width:280px;height:280px}.illustration-2xl .illustration-svg-container{width:240px;height:240px}}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], title: [{
                type: Input
            }], description: [{
                type: Input
            }], svgPath: [{
                type: Input
            }], alt: [{
                type: Input
            }] } });

class EmptyStateComponent {
    constructor() {
        this.title = 'No items found';
        this.description = 'There are no items to display at the moment.';
        this.illustrationSize = 'md';
        this.illustrationPath = '/bellhopos/assets/illustrations/Search-not-found.svg';
        this.actions = [];
        this.maxWidth = '512px';
    }
    onActionClick(action) {
        action.action();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: EmptyStateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.1", type: EmptyStateComponent, isStandalone: true, selector: "app-empty-state", inputs: { title: "title", description: "description", illustrationSize: "illustrationSize", illustrationPath: "illustrationPath", actions: "actions", maxWidth: "maxWidth" }, ngImport: i0, template: "<div class=\"empty-state\" [style.max-width]=\"maxWidth\">\n  <div class=\"empty-state-content\">\n    <!-- Illustration -->\n    <div class=\"empty-state-illustration\">\n      <app-illustrations \n        [size]=\"illustrationSize\"\n        [svgPath]=\"illustrationPath\"\n        alt=\"Empty state illustration\">\n      </app-illustrations>\n    </div>\n\n    <!-- Text Content -->\n    <div class=\"empty-state-text\">\n      <h3 class=\"empty-state-title\">{{ title }}</h3>\n      <p class=\"empty-state-description\">{{ description }}</p>\n    </div>\n  </div>\n\n  <!-- Actions -->\n  <div class=\"empty-state-actions\" *ngIf=\"actions.length > 0\">\n    <app-button\n      *ngFor=\"let action of actions\"\n      [hierarchy]=\"action.type\"\n      [type]=\"action.type === 'secondary' ? 'outline' : 'solid'\"\n      [size]=\"'md'\"\n      [label]=\"action.label\"\n      [iconName]=\"action.icon\"\n      [icon]=\"action.icon ? 'leading' : 'none'\"\n      (click)=\"onActionClick(action)\">\n    </app-button>\n  </div>\n</div>", styles: [".empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:512px;margin:0 auto;gap:var(--spacing-5xl)}.empty-state-content{display:flex;flex-direction:column;align-items:center;align-self:stretch;gap:var(--spacing-xl)}.empty-state-illustration{display:flex;justify-content:center;align-items:center}.empty-state-text{display:flex;flex-direction:column;align-items:center;gap:var(--spacing-xs);align-self:stretch;max-width:400px}.empty-state-title{font-family:var(--font-inter);font-size:var(--text-xl-size);font-weight:var(--weight-semibold);line-height:var(--text-xl-line);color:var(--color-neutral-900);margin:0;text-align:center}.empty-state-description{font-family:var(--font-inter);font-size:var(--text-md-size);font-weight:var(--weight-regular);line-height:var(--text-md-line);color:var(--color-neutral-600);margin:0;text-align:center}.empty-state-actions{display:flex;gap:var(--spacing-xl);justify-content:center;flex-wrap:wrap}@media (max-width: 768px){.empty-state{max-width:100%;padding:var(--spacing-lg)}.empty-state-actions{flex-direction:column;width:100%;align-items:stretch}.empty-state-text{max-width:320px}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: IllustrationsComponent, selector: "app-illustrations", inputs: ["size", "title", "description", "svgPath", "alt"] }, { kind: "component", type: ButtonComponent, selector: "app-button", inputs: ["hierarchy", "type", "icon", "state", "size", "label", "iconName", "disabled", "loading"], outputs: ["onClick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.1", ngImport: i0, type: EmptyStateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-empty-state', standalone: true, imports: [CommonModule, IllustrationsComponent, ButtonComponent], template: "<div class=\"empty-state\" [style.max-width]=\"maxWidth\">\n  <div class=\"empty-state-content\">\n    <!-- Illustration -->\n    <div class=\"empty-state-illustration\">\n      <app-illustrations \n        [size]=\"illustrationSize\"\n        [svgPath]=\"illustrationPath\"\n        alt=\"Empty state illustration\">\n      </app-illustrations>\n    </div>\n\n    <!-- Text Content -->\n    <div class=\"empty-state-text\">\n      <h3 class=\"empty-state-title\">{{ title }}</h3>\n      <p class=\"empty-state-description\">{{ description }}</p>\n    </div>\n  </div>\n\n  <!-- Actions -->\n  <div class=\"empty-state-actions\" *ngIf=\"actions.length > 0\">\n    <app-button\n      *ngFor=\"let action of actions\"\n      [hierarchy]=\"action.type\"\n      [type]=\"action.type === 'secondary' ? 'outline' : 'solid'\"\n      [size]=\"'md'\"\n      [label]=\"action.label\"\n      [iconName]=\"action.icon\"\n      [icon]=\"action.icon ? 'leading' : 'none'\"\n      (click)=\"onActionClick(action)\">\n    </app-button>\n  </div>\n</div>", styles: [".empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:512px;margin:0 auto;gap:var(--spacing-5xl)}.empty-state-content{display:flex;flex-direction:column;align-items:center;align-self:stretch;gap:var(--spacing-xl)}.empty-state-illustration{display:flex;justify-content:center;align-items:center}.empty-state-text{display:flex;flex-direction:column;align-items:center;gap:var(--spacing-xs);align-self:stretch;max-width:400px}.empty-state-title{font-family:var(--font-inter);font-size:var(--text-xl-size);font-weight:var(--weight-semibold);line-height:var(--text-xl-line);color:var(--color-neutral-900);margin:0;text-align:center}.empty-state-description{font-family:var(--font-inter);font-size:var(--text-md-size);font-weight:var(--weight-regular);line-height:var(--text-md-line);color:var(--color-neutral-600);margin:0;text-align:center}.empty-state-actions{display:flex;gap:var(--spacing-xl);justify-content:center;flex-wrap:wrap}@media (max-width: 768px){.empty-state{max-width:100%;padding:var(--spacing-lg)}.empty-state-actions{flex-direction:column;width:100%;align-items:stretch}.empty-state-text{max-width:320px}}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], illustrationSize: [{
                type: Input
            }], illustrationPath: [{
                type: Input
            }], actions: [{
                type: Input
            }], maxWidth: [{
                type: Input
            }] } });

/*
 * Public API Surface of bellhopos-angular
 */
// Main module

/**
 * Generated bundle index. Do not edit.
 */

export { AppbarComponent, BadgeComponent, BadgeDotComponent, BarChartComponent, BellhoposAngularModule, BreadcrumbsComponent, ButtonComponent, ChartCardArgTypes, ContainerComponent, ContainerFooterComponent, DropdownComponent, EmptyStateComponent, FeaturedIconComponent, IllustrationsComponent, LogoBoxComponent, NavItemComponent, NotificationComponent, PageNavigationChildComponent, PageNavigationComponent, PageNavigationMultiLevelComponent, PageNavigationSingleLevelComponent, PopoverComponent, ProductSwitcherComponent, ProgressChartCardComponent, ProgressChartComponent, PropertySwitcherComponent, SidebarComponent, ToggleComponent, TrendChartCardArgTypes, TrendChartCardComponent, TrendChartMiniComponent };
//# sourceMappingURL=actabldesign-bellhopos-angular.mjs.map
