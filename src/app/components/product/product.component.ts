import { Component, Input } from "@angular/core";
import { Product } from "src/app/types/product";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
})

export default class ProductComponent {
    @Input() product: Product

    details = false
}