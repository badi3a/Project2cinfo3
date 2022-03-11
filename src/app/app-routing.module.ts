import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./book-list/book-list.component";
import {MainUserComponent} from "./main-user/main-user.component";
import {NotFoundComponent} from "./not-found/not-found.component";
const ROUTES: Routes=[
  {path:'', component: BookListComponent},
  {path:'book', component: BookListComponent},
  {path:'user', component: MainUserComponent},
  {path:'**', component: NotFoundComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
