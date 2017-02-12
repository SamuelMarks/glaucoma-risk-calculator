import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IRiskQuiz } from './risk-quiz.model';
import { ModalDirective, ComponentsHelper } from 'ng2-bootstrap';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-risk-quiz',
  templateUrl: './risk-quiz.component.html',
  styleUrls: ['./risk-quiz.component.css']
})
export class RiskQuizComponent implements OnInit {
  private submitted: boolean = false;
  public model: IRiskQuiz = <IRiskQuiz>{};
  public riskQuizForm: any;
  public ocular_diseases: Array<string> = [
    'trauma', 'inflammation', 'pseudoexfoliation', 'pigment dispersion syndrome'
  ];

  @ViewChild('childModal') public childModal:ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

  constructor(private componentsHelper: ComponentsHelper, private vcr: ViewContainerRef) {
    componentsHelper.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.childModal.show();
  }

  ocular_diseases_selected(values: Array<{id: string, name: string}>) {
    this.model.ocular_disease_history = values.map(v => v.id);
  }
}
