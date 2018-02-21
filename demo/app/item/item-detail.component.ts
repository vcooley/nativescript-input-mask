import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    testText = '2';
    mask = '[000]-[aaa]';
    extractedValue: string;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    }

    onExtractedValueChange(args) {
        console.log('Extracted value changed:  ', args.value);
        this.extractedValue = args.value;
    }

    onTextChange(args) {
        console.log('Text changed: ', args.value);
    }
}
