import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailTplComponent } from './email-tpl.component';
import { RichTextModule } from '../richtext/richtext.module';
import { EmailTplService } from '../api/email_tpl/email-tpl.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, RichTextModule
  ],
  declarations: [EmailTplComponent],
  providers: [EmailTplService],
  exports: [EmailTplComponent]
})
export class EmailTplModule {
}
