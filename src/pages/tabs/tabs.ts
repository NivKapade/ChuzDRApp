import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ChatbotPage } from '../chatbot/chatbot';
import { SettingsPage } from '../settings/settings';
import { ChuzDrPage } from '../chuz-dr/chuz-dr';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChuzDrPage;
  tab3Root = ChatbotPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
