import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductListsComponent } from './pages/product-lists/ProductListsComponent';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ecom';
}
