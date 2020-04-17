import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './Components/shoppingcart/shoppingcart.component';
import { HeaderComponent } from './Components/header/header.component';
import { MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatBadgeModule,
  MatInputModule,
  MatTableModule,
  MatMenuModule
 } from '@angular/material';


@NgModule({
  declarations: [ShoppingCartComponent, HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule
  ]
})
export class CoreModule { }
