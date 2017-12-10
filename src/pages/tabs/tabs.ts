import { Component } from '@angular/core';

import { SendnPage } from '../sendn/sendn';
import { ContactPage } from '../contact/contact';
import { UpcomingPage } from '../upcoming/upcoming';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UpcomingPage;
  tab2Root = SendnPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
