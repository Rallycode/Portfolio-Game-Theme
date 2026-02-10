import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  year = new Date().getFullYear();
  isScrolling = false;
  scrollTimeout: any;

  ngOnInit(): void {
    this.setupSmoothScroll();
  }

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    if (Math.abs(event.deltaY) > 50) {
      this.isScrolling = true;
      document.body.classList.add('is-scrolling');
      
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        this.isScrolling = false;
        document.body.classList.remove('is-scrolling');
      }, 150);
    }
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    this.isScrolling = true;
    document.body.classList.add('is-scrolling');
    
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
      document.body.classList.remove('is-scrolling');
    }, 150);
  }

  setupSmoothScroll(): void {
    let isScrolling = false;
    let scrollTimeout: any;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        document.body.classList.add('smooth-scrolling');
      }
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        document.body.classList.remove('smooth-scrolling');
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });
  }
}
