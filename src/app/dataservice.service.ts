import { Injectable,EventEmitter } from '@angular/core';
import { ProductModule } from './product/product.module';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  send = new EventEmitter<ProductModule[]>()
  private product: ProductModule[] = []
  constructor() { }
  getdata() {

    return this.product

  }
  setdata(data: any) {
    console.log( "-----------",this.product)
  this.product.push(data)
}
setdata1(data: any) {
  console.log( "-----------",this.product)
this.product=data
}

  fetchdata(inputvalue: ProductModule[]) {
    this.send.emit(inputvalue)

  }
}
