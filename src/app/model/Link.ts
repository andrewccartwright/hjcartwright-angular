export type Link = {
    id: string;
    path: string;
    text: string;
}

export const links = [
    {
      id: 'home',
      path: '/',
      text: 'Home'
    },
    {
      id: 'books',
      path: '/books',
      text: 'Books'
    },
    {
      id: 'about',
      path: '/about',
      text: 'About'
    },
    {
      id: 'shop',
      path: '/shop',
      text: 'Shop'
    }
]