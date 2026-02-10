import { Component } from '@angular/core';

export interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  expanded?: boolean;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  expandedIndex: number | null = null;

  toggleJob(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  isExpanded(index: number): boolean {
    return this.expandedIndex === index;
  }

  jobs: Job[] = [
    {
      company: 'Nokia Solutions and Networks (CNS R&D)',
      role: 'Applied R&D Software Engineer',
      location: 'Bangaluru',
      period: '09/2025 – Present',
      bullets: [
        'Built an LLM-driven automation framework to integrate multiple internal tools and transform JSON-based outputs into static dashboards, enabling near real-time monitoring and consolidated diagnostics.',
        'Reduced troubleshooting time by ~80% by automating analysis workflows and eliminating repetitive manual data correlation.',
        'Developed an automated fault evaluation system using API-driven LLM inference, YAML-based rule orchestration, and Jira CSV inputs to assess fault severity and impacted areas.',
        'Eliminated manual RPN and FCEA scoring by implementing retrieval with human feedback, standardizing fault assessment and reducing operational effort.',
        'Built an automated KPI anomaly detection pipeline using unsupervised K-Means clustering to analyze large-scale KPI data across telecom networks.',
        'Automated feature preprocessing, cluster validation, and anomaly scoring, reducing manual KPI inspection through telecom-contextual anomaly classification.'
      ]
    },
    {
      company: 'PwC',
      role: 'Salesforce Developer',
      location: 'Bengaluru, India',
      period: '02/2025 – 08/2025',
      bullets: [
        'ASM Application (PepsiCo North America – Sales Cloud): Designed custom layouts and configured field-level security for an internal portal used by Area Sales Managers. Enabled real-time tracking of sales rep activities, client meetings, and integrated dashboards for performance monitoring and report generation.',
        'YUM Foods Portal (PepsiCo North America – Service Cloud): Developed a customer-facing Experience Cloud website to support Pepsi machine service and machine requests across Subway & YUM brands (Taco Bell, Pizza Hut, KFC). Implemented brand-based article visibility logic, Omni-Channel routing, chatbot support.',
        'PMO & Resource Coordination: Supported the PMO team in hiring and onboarding for the Pepsi project, managing demand data and assisting leadership with resource allocation. Took voluntary ownership alongside primary project work to ensure smooth onboarding and delivery readiness.'
      ]
    },
    {
      company: 'Nokia Solutions and Networks (MN RAN CP Integration)',
      role: 'Network Engineer Intern',
      location: 'Bengaluru, India',
      period: '08/2024 – 02/2025',
      bullets: [
        'Deployed and upgraded Red Hat OpenShift (OCP) on bare-metal servers using AI-assisted installation tools and deployed CNFs (vCU, vDU) on OCP environments.',
        'Executed UAT and automated CRT/CDRT test runs using Jenkins, improving release quality and validation coverage.',
        'Authored feature test plans and troubleshooting documentation, reducing manual investigation effort for the team.',
        'Reported defects via Pronto and supported "Cell on Air" enablement, contributing to L3 call functionality and network readiness.'
      ]
    }
  ];
}
