import { Component, NgZone, OnInit } from "@angular/core";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})

export class AppComponent implements OnInit {
  text = '';
  extractedValue = '';
  complete = false;
  mask: string;

  americanExpressMask = '[0000] [000000] [00000]';
  defaultMask = '[0000] [0000] [0000] [0000]';

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.mask = this.defaultMask;
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
