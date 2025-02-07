import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tabs4PageRoutingModule } from './tabs4-routing.module';

import { Tabs4Page } from './tabs4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tabs4PageRoutingModule
  ],
  declarations: [Tabs4Page]
})
export class Tabs4PageModule {}
