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
  bindingTest = '123';

  americanExpressMask = '[0000] [000000] [00000]';
  visaMask = '[0000] [0000] [0000] [0000]';

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.mask = this.visaMask;
  }

  onTextChange(args) {
    this.text = args.value;
  }

  onExtractedValueChange(args) {
    this.extractedValue = args.value;
    const isAmex = ['34', '37'].includes(this.extractedValue.substr(0, 2));
    if (isAmex && this.mask !== this.americanExpressMask) {
      this.mask = this.americanExpressMask;
    } else if (!isAmex && this.mask !== this.visaMask) {
      this.mask = this.visaMask;
    }
  }

  onCompleteChange(args) {
    this.complete = args.value;
  }
}
