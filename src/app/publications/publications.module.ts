import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicationsPageRoutingModule } from './publications-routing.module';

import { PublicationsPage } from './publications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicationsPageRoutingModule
  ],
  declarations: [PublicationsPage]
})
export class PublicationsPageModule {}
