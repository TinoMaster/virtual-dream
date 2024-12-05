import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent, SidebarComponent } from '@shared/components/private';

@Component({
  selector: 'app-layout',
  imports: [
    MatSidenavModule,
    SidebarComponent,
    HeaderComponent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  isMobileView: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobileView = result.matches;
      });
  }

  get drawerMode(): 'over' | 'side' {
    return this.isMobileView ? 'over' : 'side';
  }

  get drawerOpened(): boolean {
    return !this.isMobileView;
  }
}
