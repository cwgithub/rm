import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VewflowComponent } from './features/components/vewflow/vewflow.component';
import { CoreModule } from './core/core.module';

const routes: Routes = [{ path: 'vexflow', component: VewflowComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), CoreModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
