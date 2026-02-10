import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navCards = [
    {
      title: 'Education',
      description: 'Academic background and achievements',
      route: '/education',
      icon: '🎓',
      color: 'var(--accent)'
    },
    {
      title: 'Experience',
      description: 'Professional work experience',
      route: '/experience',
      icon: '💼',
      color: '#8b5cf6'
    },
    {
      title: 'Skills',
      description: 'Technologies and tools I work with',
      route: '/skills',
      icon: '⚡',
      color: '#f59e0b'
    },
    {
      title: 'Awards',
      description: 'Achievements and recognition',
      route: '/awards',
      icon: '🏆',
      color: '#ec4899'
    },
    {
      title: 'Contact',
      description: 'Get in touch with me',
      route: '/contact',
      icon: '📧',
      color: '#10b981'
    }
  ];

  ngOnInit(): void {
    this.setupParallax();
    this.setupScrollHint();
  }

  setupParallax(): void {
    const cards = document.querySelectorAll('.nav-card');
    
    cards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        cards.forEach((c, i) => {
          if (i !== index) {
            (c as HTMLElement).style.transform = 'scale(0.95)';
            (c as HTMLElement).style.opacity = '0.6';
          }
        });
      });

      card.addEventListener('mouseleave', () => {
        cards.forEach((c) => {
          (c as HTMLElement).style.transform = '';
          (c as HTMLElement).style.opacity = '';
        });
      });
    });
  }

  setupScrollHint(): void {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.body.classList.add('has-scrolled');
      } else {
        document.body.classList.remove('has-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
  }
}
