/**
 * Complete Angular Dashboard Example
 *
 * This file shows the EXACT working implementation of bellhopos components
 * Copy this code directly into your Angular project for a working dashboard
 */

// ========================================
// APP.MODULE.TS
// ========================================
/*
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BellhoposAngularModule } from '@actabldesign/bellhop-angular';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BellhoposAngularModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/

// ========================================
// APP.COMPONENT.TS
// ========================================
/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-layout" [class.page-nav-collapsed]="pageNavCollapsed">
      <!-- Sidebar - Always visible -->
      <aside class="app-sidebar">
        <app-sidebar></app-sidebar>
      </aside>

      <!-- Main Content Area -->
      <main class="app-main">
        <!-- Header/Appbar -->
        <header class="app-header">
          <app-appbar 
            [isMenuOpen]="!pageNavCollapsed" 
            (menuToggle)="onPageNavToggle()">
          </app-appbar>
        </header>

        <!-- Content Container -->
        <div class="bellhop-content-container">
          <!-- Page Navigation -->
          <nav class="page-nav" [class.collapsed]="pageNavCollapsed">
            <app-page-navigation></app-page-navigation>
          </nav>
          
          <!-- Content Area -->
          <section class="bellhop-content-area">
            <div class="bellhop-content-wrapper-full">
              <router-outlet></router-outlet>
            </div>
          </section>
        </div>
      </main>
    </div>

    <!-- Product Switcher - Rendered at root level to avoid clipping -->
    <app-product-switcher></app-product-switcher>
  `
})
export class AppComponent {
  pageNavCollapsed = false;

  onPageNavToggle(): void {
    this.pageNavCollapsed = !this.pageNavCollapsed;
  }
}
*/

// ========================================
// DASHBOARD.COMPONENT.TS
// ========================================
/*
import { Component } from '@angular/core';

interface DropdownItem {
  label: string;
  value: string;
  icon?: string;
}

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard-container">
      <!-- Dashboard Header -->
      <div class="dashboard-header">
        <h1 class="dashboard-title">Dashboard Overview</h1>
        <div style="display: flex; gap: var(--spacing-md);">
          <app-button 
            [label]="'Export Data'" 
            [hierarchy]="'secondary'"
            [size]="'md'"
            (onClick)="handleExport()">
          </app-button>
          <app-button 
            [label]="'New Report'" 
            [hierarchy]="'primary'"
            [size]="'md'"
            (onClick)="handleNewReport()">
          </app-button>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-value">2,847</span>
          <span class="stat-label">Total Users</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">$12,459</span>
          <span class="stat-label">Revenue</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">98.5%</span>
          <span class="stat-label">Uptime</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">1,429</span>
          <span class="stat-label">Active Sessions</span>
        </div>
      </div>

      <!-- Content Section -->
      <div class="dashboard-section">
        <h2 style="font-size: var(--text-xl-size); font-weight: var(--weight-semibold); color: var(--color-neutral-800); margin-bottom: var(--spacing-lg);">
          Recent Activity
        </h2>

        <!-- Component Examples -->
        <div style="display: flex; flex-direction: column; gap: var(--spacing-xl);">
          
          <!-- Notifications -->
          <div>
            <h3 style="font-size: var(--text-md-size); font-weight: var(--weight-medium); color: var(--color-neutral-700); margin-bottom: var(--spacing-md);">
              System Notifications
            </h3>
            <app-notification 
              [title]="'System Update Complete'" 
              [message]="'All systems have been successfully updated to the latest version.'"
              [isVisible]="showSuccessNotification">
            </app-notification>
          </div>

          <!-- Badges -->
          <div>
            <h3 style="font-size: var(--text-md-size); font-weight: var(--weight-medium); color: var(--color-neutral-700); margin-bottom: var(--spacing-md);">
              Status Badges
            </h3>
            <div style="display: flex; gap: var(--spacing-md);">
              <app-badge [label]="'Active'" [variant]="'success'"></app-badge>
              <app-badge [label]="'Pending'" [variant]="'warning'"></app-badge>
              <app-badge [label]="'Error'" [variant]="'error'"></app-badge>
            </div>
          </div>

          <!-- Dropdown -->
          <div>
            <h3 style="font-size: var(--text-md-size); font-weight: var(--weight-medium); color: var(--color-neutral-700); margin-bottom: var(--spacing-md);">
              Actions Menu
            </h3>
            <app-dropdown 
              [label]="'Quick Actions'"
              [items]="dropdownItems"
              (itemSelected)="handleMenuAction($event)">
            </app-dropdown>
          </div>

          <!-- Toggle -->
          <div>
            <h3 style="font-size: var(--text-md-size); font-weight: var(--weight-medium); color: var(--color-neutral-700); margin-bottom: var(--spacing-md);">
              Settings
            </h3>
            <app-toggle 
              [label]="'Enable Email Notifications'"
              [checked]="emailNotificationsEnabled"
              (toggleChange)="onEmailToggleChange($event)">
            </app-toggle>
            <br><br>
            <app-toggle 
              [label]="'Dark Mode'"
              [checked]="darkModeEnabled"
              (toggleChange)="onDarkModeToggleChange($event)">
            </app-toggle>
          </div>

          <!-- Container Example -->
          <app-container [title]="'User Analytics'">
            <div class="content-grid">
              <div class="content-card">
                <h3>New Users</h3>
                <p>147 new users registered this week</p>
              </div>
              <div class="content-card">
                <h3>User Engagement</h3>
                <p>Average session time increased by 23%</p>
              </div>
              <div class="content-card">
                <h3>Conversion Rate</h3>
                <p>5.2% conversion rate this month</p>
              </div>
            </div>
          </app-container>

        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {
  showSuccessNotification = true;
  emailNotificationsEnabled = true;
  darkModeEnabled = false;
  
  dropdownItems: DropdownItem[] = [
    { label: 'View Report', value: 'view', icon: 'visibility' },
    { label: 'Edit Settings', value: 'edit', icon: 'edit' },
    { label: 'Download Data', value: 'download', icon: 'download' },
    { label: 'Delete Item', value: 'delete', icon: 'delete' }
  ];

  handleExport(): void {
    console.log('Exporting data...');
    // Your export logic here
  }

  handleNewReport(): void {
    console.log('Creating new report...');
    // Your new report logic here
  }

  handleMenuAction(action: string): void {
    console.log('Menu action selected:', action);
    switch (action) {
      case 'view':
        console.log('Opening report view...');
        break;
      case 'edit':
        console.log('Opening edit settings...');
        break;
      case 'download':
        console.log('Starting download...');
        break;
      case 'delete':
        console.log('Deleting item...');
        break;
    }
  }

  onEmailToggleChange(enabled: boolean): void {
    this.emailNotificationsEnabled = enabled;
    console.log('Email notifications enabled:', enabled);
  }

  onDarkModeToggleChange(enabled: boolean): void {
    this.darkModeEnabled = enabled;
    console.log('Dark mode enabled:', enabled);
    // Your theme switching logic here
  }
}
*/

// ========================================
// REQUIRED STYLES.CSS
// ========================================
/*
Add this to your src/styles.css:

@import '@actabldesign/bellhopos-styles/src/index.css';

// Optional: Additional global styles
* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: var(--font-inter);
  font-size: var(--text-sm-size);
  line-height: var(--text-sm-line);
  color: var(--color-neutral-800);
  background-color: var(--color-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  font-family: inherit;
  font-size: inherit;
}
*/

// ========================================
// COMPONENT API REFERENCE
// ========================================

/**
 * CORRECT COMPONENT SELECTORS AND PROPERTIES
 *
 * ✅ BUTTON
 * <app-button
 *   [label]="'Button Text'"           // Required: string
 *   [hierarchy]="'primary'"           // 'primary' | 'secondary' | 'tertiary'
 *   [size]="'md'"                     // 'sm' | 'md' | 'lg'
 *   [disabled]="false"                // boolean
 *   (onClick)="handleClick()">        // Event emitter
 * </app-button>
 *
 * ✅ BADGE
 * <app-badge
 *   [label]="'Status'"                // Required: string
 *   [variant]="'success'">            // 'success' | 'warning' | 'error' | 'neutral'
 * </app-badge>
 *
 * ✅ CONTAINER
 * <app-container [title]="'Title'">   // Required: string
 *   Content goes here
 * </app-container>
 *
 * ✅ NOTIFICATION
 * <app-notification
 *   [title]="'Title'"                 // Required: string
 *   [message]="'Message'"             // string
 *   [isVisible]="true">               // boolean
 * </app-notification>
 *
 * ✅ DROPDOWN
 * <app-dropdown
 *   [label]="'Actions'"               // string
 *   [items]="dropdownItems"           // DropdownItem[]
 *   (itemSelected)="handleAction($event)"> // Event emitter
 * </app-dropdown>
 *
 * ✅ TOGGLE
 * <app-toggle
 *   [label]="'Enable Feature'"        // string
 *   [checked]="true"                  // boolean
 *   (toggleChange)="onChange($event)"> // Event emitter
 * </app-toggle>
 *
 * ✅ APPBAR
 * <app-appbar
 *   [isMenuOpen]="false"              // boolean
 *   (menuToggle)="onToggle()">        // Event emitter
 * </app-appbar>
 *
 * ✅ SIDEBAR & PAGE NAVIGATION
 * <app-sidebar></app-sidebar>
 * <app-page-navigation></app-page-navigation>
 *
 */

export {};
