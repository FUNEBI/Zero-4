import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
@HostListener('window:scroll', ['$event'])
export class NavComponent {

  onWindowScroll() {
      let element = document.querySelector('.navbar') as HTMLElement;
      if (window.scrollY > element.clientHeight) {
        element.classList.add('navbar-inverse');
      } else {
        element.classList.remove('navbar-inverse');
      }
      
    }
}
