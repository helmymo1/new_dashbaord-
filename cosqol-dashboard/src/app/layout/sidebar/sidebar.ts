import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class Sidebar {
  @Output() pageChanged = new EventEmitter<string>();
  activePage: string = 'overview';

  showPage(pageId: string) {
    this.activePage = pageId;
    const titleMap: { [key: string]: string } = {
        overview: 'OVERVIEW',
        profile: 'PROFILE',
        subscriptions: 'STUDENT SUBSCRIPTION',
        withdraw: 'WITHDRAW'
    };
    this.pageChanged.emit(titleMap[pageId]);
  }
}
