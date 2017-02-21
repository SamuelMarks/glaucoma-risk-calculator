import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextComponent } from './richtext.component';
import { EmailTplService } from '../api/email_tpl/email-tpl.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RichTextComponent],
  providers: [EmailTplService],
  exports: [RichTextComponent]
})
export class RichTextModule {
}
