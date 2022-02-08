import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ProductModule } from './product.module';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productservice:ProductserviceService,public dataservice:DataserviceService) { }
  product!:ProductModule[] 
  ngOnInit(): void {
    this.productservice.getdata().subscribe()
    this.dataservice.send.subscribe((val:ProductModule[])=>{
      this.product=val
      this.dataservice.setdata1(val)
      console.log(this.product)
    })
  }

}
