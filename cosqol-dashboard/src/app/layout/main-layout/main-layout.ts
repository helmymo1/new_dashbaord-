import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss']
})
export class MainLayout {
  currentPageTitle: string = 'OVERVIEW';

  updateTitle(title: string) {
    this.currentPageTitle = title;
  }
}
