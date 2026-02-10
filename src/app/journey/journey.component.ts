import { Component, OnInit } from '@angular/core';

export interface JourneyChapter {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  level: number;
  xp: number;
  icon: string;
  color: string;
  description: string;
  achievements: string[];
  skills: string[];
  unlocked: boolean;
  completed: boolean;
}

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  expandedChapter: number | null = null;

  chapters: JourneyChapter[] = [
    {
      id: 'education',
      title: 'Chapter 1: The Foundation',
      subtitle: 'Academic Excellence',
      year: '2021-2025',
      level: 1,
      xp: 0,
      icon: '🎓',
      color: '#06b6d4',
      description: 'Started the journey at Sathyabama Institute of Science and Technology, pursuing Computer Science and Engineering. Built strong fundamentals in programming, algorithms, and software engineering.',
      achievements: [
        'Maintained CGPA of 9.2',
        'Completed B.E. in Computer Science',
        'Mastered core CS concepts'
      ],
      skills: ['Python', 'Data Structures', 'Algorithms', 'Software Engineering'],
      unlocked: true,
      completed: true
    },
    {
      id: 'internship',
      title: 'Chapter 2: First Quest',
      subtitle: 'Network Engineer Intern',
      year: 'Aug 2024 - Feb 2025',
      level: 2,
      xp: 0,
      icon: '🌐',
      color: '#8b5cf6',
      description: 'Joined Nokia Solutions and Networks as a Network Engineer Intern. Learned cloud-native technologies, deployed OpenShift, and contributed to network infrastructure. Gained hands-on experience with DevOps tools.',
      achievements: [
        'Deployed Red Hat OpenShift on bare-metal',
        'Automated test runs with Jenkins',
        'Contributed to L3 call functionality',
        'Authored technical documentation'
      ],
      skills: ['OpenShift', 'Kubernetes', 'Jenkins', 'DevOps', 'CNFs'],
      unlocked: true,
      completed: true
    },
    {
      id: 'pwc',
      title: 'Chapter 3: The Salesforce Adventure',
      subtitle: 'Salesforce Developer',
      year: 'Feb 2025 - Aug 2025',
      level: 3,
      xp: 0,
      icon: '💼',
      color: '#f59e0b',
      description: 'Embarked on a new adventure at PwC, working on Salesforce projects for PepsiCo. Built custom portals, Experience Cloud sites, and automated workflows. Learned enterprise CRM development.',
      achievements: [
        'Built ASM Portal for PepsiCo',
        'Developed YUM Foods Experience Cloud site',
        'Implemented Omni-Channel routing',
        'Supported PMO resource coordination'
      ],
      skills: ['Salesforce', 'Apex', 'SFDX', 'Lightning', 'Flow Automation'],
      unlocked: true,
      completed: true
    },
    {
      id: 'nokia-rnd',
      title: 'Chapter 4: The AI Revolution',
      subtitle: 'Applied R&D Software Engineer',
      year: 'Sep 2025 - Present',
      level: 4,
      xp: 0,
      icon: '🤖',
      color: '#ec4899',
      description: 'Current chapter: Leading innovation at Nokia R&D. Building LLM-driven automation frameworks, AI-powered fault detection, and intelligent systems. Combining AI/ML with telecom expertise.',
      achievements: [
        'Built LLM automation framework',
        'Reduced troubleshooting time by 80%',
        'Developed KPI anomaly detection',
        'Automated fault evaluation system'
      ],
      skills: ['LLM APIs', 'RAG', 'Python', 'Machine Learning', 'K-Means', 'Pandas', 'NumPy'],
      unlocked: true,
      completed: false
    }
  ];

  ngOnInit(): void {
    // Initialize component
  }

  toggleChapter(index: number): void {
    if (this.chapters[index].unlocked) {
      this.expandedChapter = this.expandedChapter === index ? null : index;
    }
  }
}
