import { Component } from '@angular/core';

import { SendnPage } from '../sendn/sendn';
import { AssinedPage } from '../assined/assined';
import { UpcomingPage } from '../upcoming/upcoming';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UpcomingPage;
  tab2Root = AssinedPage;
  tab3Root = SendnPage;

  constructor() {

  }
}
