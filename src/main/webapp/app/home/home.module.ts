import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Gd8DBackendSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Gd8DBackendSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Gd8DBackendHomeModule {}
