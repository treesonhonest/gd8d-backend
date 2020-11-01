import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Gd8DBackendSharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [Gd8DBackendSharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent],
})
export class LogsModule {}
