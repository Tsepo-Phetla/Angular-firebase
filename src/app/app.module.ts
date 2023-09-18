import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceContentComponent } from './experience-content/experience-content.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { SkillsComponent } from './skills/skills.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { PortfolioContentComponent } from './portfolio-content/portfolio-content.component';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';
import { TypingAnimationComponent } from './typing-animation/typing-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DownloadButtonComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    ExperienceComponent,
    ExperienceContentComponent,
    MySkillsComponent,
    SkillsComponent,
    ContentComponentComponent,
    PortfolioContentComponent,
    ScrollButtonComponent,
    TypingAnimationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
