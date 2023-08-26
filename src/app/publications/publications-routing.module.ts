import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationsPage } from './publications.page';

const routes: Routes = [
  {
    path: '',
    component: PublicationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicationsPageRoutingModule {}
