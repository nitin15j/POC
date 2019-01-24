import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author/author.service';
import { StyleClassBindingComponent } from './bindings/style-class-binding.component';
import { EventsComponent } from './bindings/events.component';
import { FormsModule } from '@angular/forms';
import { MyPipeComponent } from './my-pipe/my-pipe.component';
import { SummaryPipe } from './my-pipe/summary.pipe';
import { TitleCasePipe } from './my-pipe/title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    StyleClassBindingComponent,
    EventsComponent,
    MyPipeComponent,
    SummaryPipe,
    TitleCasePipe
  ],
  imports: [BrowserModule, FormsModule],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
