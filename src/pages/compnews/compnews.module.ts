import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompnewsPage } from './compnews';

@NgModule({
  declarations: [
    CompnewsPage,
  ],
  imports: [
    IonicPageModule.forChild(CompnewsPage),
  ],
})
export class CompnewsPageModule {}
