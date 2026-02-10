import { Component } from '@angular/core';

export interface TechSkill {
  name: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  techSkills: TechSkill[] = [
    // Programming
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Programming' },
    { name: 'Apex', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg', category: 'Programming' },
    
    // CRM & Platform
    { name: 'Salesforce', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg', category: 'CRM & Platform' },
    { name: 'SFDX', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg', category: 'CRM & Platform' },
    { name: 'Apex Triggers', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg', category: 'CRM & Platform' },
    
    // LLM & AI
    { name: 'LLM APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'LLM & AI' },
    { name: 'RAG', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'LLM & AI' },
    { name: 'JSON', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg', category: 'LLM & AI' },
    { name: 'YAML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg', category: 'LLM & AI' },
    
    // DevOps
    { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', category: 'DevOps' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'DevOps' },
    { name: 'OpenShift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg', category: 'DevOps' },
    
    // Data Science
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', category: 'Data Science' },
    { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', category: 'Data Science' },
    { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg', category: 'Data Science' },
    { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg', category: 'Data Science' },
  ];

  getSkillsByCategory(category: string): TechSkill[] {
    return this.techSkills.filter(skill => skill.category === category);
  }

  getCategories(): string[] {
    return ['Programming', 'CRM & Platform', 'LLM & AI', 'DevOps', 'Data Science'];
  }
}
