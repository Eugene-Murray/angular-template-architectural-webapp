import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements AfterViewInit {
  toggleMenu: boolean = false;
  // @ViewChild('navbar') navbar: ElementRef | undefined;
  // @ViewChild('menuIcon') menuIcon: ElementRef | undefined;

  ngAfterViewInit() {
    // if (this.navbar && this.menuIcon) {
    //   this.navbar.nativeElement.style.setProperty('--menu-icon-width', `${this.menuIcon.nativeElement.offsetWidth}px`);
    // }
  }

  onToggleMenu() {
    this.toggleMenu = !this.toggleMenu;
  }
}
