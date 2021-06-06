import { SharedModule } from './_shared/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcademicComponent } from './academic/academic.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ResearchComponent } from './research/research.component';
import { InterestsComponent } from './interests/interests.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { OthersComponent } from './others/others.component';
import { ProgrammingComponent } from './programming/programming.component';
import { NgxFontAwesomeModule } from 'ngx-font-awesome';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AcademicComponent,
    ExperienceComponent,
    SkillsComponent,
    ResearchComponent,
    InterestsComponent,
    AboutComponent,
    FooterComponent,
    OthersComponent,
    ProgrammingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxFontAwesomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
