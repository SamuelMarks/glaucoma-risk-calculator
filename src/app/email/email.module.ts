import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { EmailTplModule } from '../email-tpl/email-tpl.module';

@NgModule({
  imports: [
    CommonModule, HttpModule, FormsModule, EmailTplModule
  ],
  declarations: [EmailComponent]
})
export class EmailModule {
}
