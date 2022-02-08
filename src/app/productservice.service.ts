import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { DataserviceService } from './dataservice.service';
import { ProductModule } from './product/product.module';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(public http:HttpClient,public dataservice:DataserviceService) { }
   data(){
   let product = this.dataservice.getdata()
   console.log(product)
   return this.http.put<ProductModule[]>('https://deltacore-458f8-default-rtdb.firebaseio.com/product.json',
   product )
  }

  getdata(){
   return this.http.get<ProductModule[]>('https://deltacore-458f8-default-rtdb.firebaseio.com/product.json').pipe(
      tap<ProductModule[]>(event=>{
      this.dataservice.fetchdata(event)
      })
    )
  }
}
