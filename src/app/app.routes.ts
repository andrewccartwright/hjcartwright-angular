import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContentWarningsComponent } from './content-warnings/content-warnings.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'books',
        component: BooksComponent
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'content-warnings',
        component: ContentWarningsComponent
    }
];
