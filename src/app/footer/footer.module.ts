import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import ServerStatusModule from '../server-status/server-status.module';

@NgModule({
  imports: [
    CommonModule, ServerStatusModule
  ],
  declarations: [FooterComponent]
})
export class FooterModule { }
