import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EducationPageComponent } from './pages/education-page/education-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { AwardsPageComponent } from './pages/awards-page/awards-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HeroComponent } from './hero/hero.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { AwardsComponent } from './awards/awards.component';
import { ContactComponent } from './contact/contact.component';
import { JourneyComponent } from './journey/journey.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'home' } },
  { path: 'education', component: EducationPageComponent, data: { animation: 'education' } },
  { path: 'experience', component: ExperiencePageComponent, data: { animation: 'experience' } },
  { path: 'skills', component: SkillsPageComponent, data: { animation: 'skills' } },
  { path: 'awards', component: AwardsPageComponent, data: { animation: 'awards' } },
  { path: 'contact', component: ContactPageComponent, data: { animation: 'contact' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationPageComponent,
    ExperiencePageComponent,
    SkillsPageComponent,
    AwardsPageComponent,
    ContactPageComponent,
    HeroComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    AwardsComponent,
    ContactComponent,
    JourneyComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
