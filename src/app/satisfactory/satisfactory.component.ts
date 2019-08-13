import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-satisfactory',
  templateUrl: './satisfactory.component.html',
  styleUrls: ['./satisfactory.component.css']
})
export class SatisfactoryComponent implements OnInit {

  product = this.productService.getProduct(14);

  constructor(private productService: ProductService) { }

  ngOnInit() {
    
  }

}
