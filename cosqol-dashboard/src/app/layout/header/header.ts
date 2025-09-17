import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header implements OnInit {
  pageTitle: string = 'OVERVIEW';

  private titleMap: { [key: string]: string } = {
      'overview': 'OVERVIEW',
      'profile': 'PROFILE',
      'subscriptions': 'STUDENT SUBSCRIPTION',
      'withdraw': 'WITHDRAW'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      map((event: ActivationEnd) => event.snapshot.routeConfig?.path || '')
    ).subscribe((path) => {
      if (path && this.titleMap[path]) {
        this.pageTitle = this.titleMap[path];
      }
    });
  }
}
