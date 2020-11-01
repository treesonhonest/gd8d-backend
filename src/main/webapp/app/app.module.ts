import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Gd8DBackendSharedModule } from 'app/shared/shared.module';
import { Gd8DBackendCoreModule } from 'app/core/core.module';
import { Gd8DBackendAppRoutingModule } from './app-routing.module';
import { Gd8DBackendHomeModule } from './home/home.module';
import { Gd8DBackendEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Gd8DBackendSharedModule,
    Gd8DBackendCoreModule,
    Gd8DBackendHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Gd8DBackendEntityModule,
    Gd8DBackendAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Gd8DBackendAppModule {}
