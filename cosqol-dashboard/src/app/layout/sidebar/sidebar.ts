import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
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
