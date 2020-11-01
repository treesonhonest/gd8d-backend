import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Gd8DBackendSharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [Gd8DBackendSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent],
})
export class DocsModule {}
