import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  selected = 'carne';

  setSelectedTab(tab: string): void {
    this.selected = tab;
  }
}
