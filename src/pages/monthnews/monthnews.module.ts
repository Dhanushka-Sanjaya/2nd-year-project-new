import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonthnewsPage } from './monthnews';

@NgModule({
  declarations: [
    MonthnewsPage,
  ],
  imports: [
    IonicPageModule.forChild(MonthnewsPage),
  ],
})
export class MonthnewsPageModule {}
