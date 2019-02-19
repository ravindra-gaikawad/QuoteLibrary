import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuotesComponent }      from './quotes/quotes.component';
import { AuthorsComponent }   from './authors/authors.component';
import { CategoriesComponent }  from './categories/categories.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: QuotesComponent },
  { path: 'quotes/:id', component: QuotesComponent },
  { path: 'authors/:id/quotes', component: AuthorsComponent },
  { path: 'categories/:id/quotes', component: CategoriesComponent }
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}