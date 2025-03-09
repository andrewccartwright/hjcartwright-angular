export type Link = {
    id: string;
    path: string;
    text: string;
}

export const links = [
    {
      id: 'home',
      path: '/',
      text: 'HOME'
    },
    {
      id: 'books',
      path: '/books',
      text: 'BOOKS'
    },
    {
      id: 'about',
      path: '/about',
      text: 'ABOUT'
    },
    {
      id: 'shop',
      path: '/shop',
      text: 'SHOP'
    }
]