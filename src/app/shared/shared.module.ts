import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    CommonModule,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
