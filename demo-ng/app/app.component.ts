import { Component, NgZone, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})

export class AppComponent implements OnInit {
  form: FormGroup;
  text = '';
  extractedValue = '';
  complete = false;
  mask: string;

  americanExpressMask = '[0000] [000000] [00000]';
  defaultMask = '[0000] [0000] [0000] [0000]';

  constructor(private zone: NgZone, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mask = this.defaultMask;
    this.form = this.formBuilder.group({
      phone: ['(555) 555-1234', [], []],
    });
  }

  onTextChange(args) {
    this.text = args.value;
  }

  onExtractedValueChange(args) {
    this.extractedValue = args.value;
    const isAmex = ['34', '37'].includes(this.extractedValue.substr(0, 2));
    if (isAmex && this.mask !== this.americanExpressMask) {
      setTimeout(() => this.mask = this.americanExpressMask, 0);
    } else if (!isAmex && this.mask !== this.defaultMask) {
      setTimeout(() => this.mask = this.defaultMask, 0);
    }
  }

  onCompleteChange(args) {
    this.complete = args.value;
  }
}
