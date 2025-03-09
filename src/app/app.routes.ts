import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContentWarningsComponent } from './content-warnings/content-warnings.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';

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
        path: 'books/diluted-truths',
        component: BookDetailsComponent
    },
    {
        path: 'books/following-fortunes',
        component: BookDetailsComponent
    },
    {
        path: 'books/fates-demise',
        component: BookDetailsComponent
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
