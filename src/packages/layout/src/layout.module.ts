import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FullLayoutComponent } from './components/container/full-layout.component';
import { SimpleLayoutComponent } from './components/container/simple-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {
  SidebarNavComponent,
  SidebarNavDropdownComponent,
  SidebarNavItemComponent,
  SidebarNavTitleComponent,
  SidebarNavLinkComponent,
} from './components/sidebar/nav';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

import { NavDropdownDirective, NavDropdownToggleDirective } from './directives/nav';

import { layoutReducer } from './state';

const components = [
  SimpleLayoutComponent,
  FullLayoutComponent,

  HeaderComponent,

  SidebarComponent,
  SidebarNavComponent,
  SidebarNavItemComponent,
  SidebarNavDropdownComponent,
  SidebarNavTitleComponent,
  SidebarNavLinkComponent,

  MainComponent,
  FooterComponent
];

const directives = [
  NavDropdownDirective,
  NavDropdownToggleDirective,
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,

    StoreModule.forFeature('layout', layoutReducer),
    EffectsModule.forFeature([]),
  ],
  exports: [
    ...components,
    ...directives,
  ],
  declarations: [
    ...components,
    ...directives,
  ],
  providers: [],
})
export class LayoutModule { }
