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
        component: HomeComponent,
        title: 'H.J. Cartwright - Author'
    },
    {
        path: 'books',
        component: BooksComponent,
        title: 'H.J. Cartwright - Books'
    },
    {
        path: 'books/diluted-truths',
        component: BookDetailsComponent,
        title: 'Diluted Truths: The Advocates'
    },
    {
        path: 'books/following-fortunes',
        component: BookDetailsComponent,
        title: 'Following Fortunes: The Advocates'
    },
    {
        path: 'books/fates-demise',
        component: BookDetailsComponent,
        title: 'Fates Demise: The Advocates'
    },
    {
        path: 'books/ensuing-chances',
        component: BookDetailsComponent,
        title: 'Ensuing Chances: The Advocates'
    },
    {
        path: 'books/the-fall-of-rome',
        component: BookDetailsComponent,
        title: 'The Fall of Rome'
    },
    {
        path: 'shop',
        component: ShopComponent,
        title: 'H.J. Cartwright - Shop'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'H.J. Cartwright - About Me'
    },
    {
        path: 'content-warnings',
        component: ContentWarningsComponent,
        title: 'Content Warnings'
    }
];
