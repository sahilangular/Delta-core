import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { ProductModule } from '../product/product.module';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @ViewChild ('id') id:any;
  @ViewChild ('name') name:any;
  @ViewChild ('description') description:any;
  
  constructor(public dataservice:DataserviceService,public productservice:ProductserviceService,public route:ActivatedRoute) { }

  
  click(form:any){
    this.dataservice.setdata(form.value)
     this.productservice.data().subscribe()
    this.id.nativeElement.value=""
    this.name.nativeElement.value=""
    this.description.nativeElement.value=""
    
   
   }
   ngOnInit(): void {
    
    // this.productservice.getdata().subscribe()
    // this.dataservice.send.subscribe((val:ProductModule[])=>{
      
    //   this.dataservice.setdata(val)
      
    
    // })
  }

}
