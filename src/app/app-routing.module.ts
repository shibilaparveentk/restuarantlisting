import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestuarantComponent } from './add-restuarant/add-restuarant.component';
import { DeleteRestuarantComponent } from './delete-restuarant/delete-restuarant.component';
import { RestuarantsListComponent } from './restuarants-list/restuarants-list.component';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { ViewRestuarantComponent } from './view-restuarant/view-restuarant.component';


//defining path for component
const routes: Routes = [
  //RestuarantsListComponent
  {
    path: '', component: RestuarantsListComponent
  },

  //ViewRestuarantComponent
  {
    path: 'view-restuarant/:id', component: ViewRestuarantComponent
  },

  //AddRestuarantComponent 
  {
    path: 'add-restuarant', component: AddRestuarantComponent
  },

  //UpdateRestuarantComponent
  {
    path: 'update-restuarant/:id', component: UpdateRestuarantComponent
  },

  //DeleteRestuarantComponent
  {
    path: 'delete-restuarant/:id', component: DeleteRestuarantComponent
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
