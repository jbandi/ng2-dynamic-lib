import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

// We dont want that the following import is bundled by WebPack
// It should be loaded from a remote url at runtime ...
import LibraryModule from 'example-lib';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    LibraryModule.forRoot()
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
