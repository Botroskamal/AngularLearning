import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './right-section/navbar/search/search.component';
import { CarCardComponent } from './right-section/main-section/car-card/car-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SelectionButtonComponent } from './sidebar/selection-button/selection-button.component';
import { RightSectionComponent } from './right-section/right-section.component';
import { NavbarComponent } from './right-section/navbar/navbar.component';
import { InfoSectionComponent } from './right-section/navbar/info-section/info-section.component';
import { MainSectionComponent } from './right-section/main-section/main-section.component';
import { FilterComponent } from './right-section/main-section/filter/filter.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ButtonHighlightDirective } from './directives/button-highlight.directive';
import { CustomIfDirective } from './directives/custom-if.directive';
import { NameHighlightDirective } from './directives/name-highlight.directive';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanDeactivateGaurd } from './signup/can-deactivate-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CarCardComponent,
    SidebarComponent,
    SelectionButtonComponent,
    RightSectionComponent,
    NavbarComponent,
    InfoSectionComponent,
    MainSectionComponent,
    FilterComponent,
    DashboardComponent,

    HighlightDirective,
    ButtonHighlightDirective,
    CustomIfDirective,
    NameHighlightDirective,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CanDeactivateGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
