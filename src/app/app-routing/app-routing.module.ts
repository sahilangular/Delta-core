import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { DataComponent } from '../data/data.component';


const approute:Routes=([

  {path:'',component:ProductComponent,pathMatch:'full'},
  {path:'data',component:DataComponent}
  
  ])
@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(approute),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
