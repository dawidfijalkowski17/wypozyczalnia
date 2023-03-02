import {MenuItem} from 'primeng/api';
export const menuItems: MenuItem [] = [
        {
            id: '1',
            label: 'Samochody',
            icon: 'car',
            routerLink: '/cars'
        },
        {
            id: '2',
            label: 'Użytkownicy',
            icon: 'admin',
            routerLink: '/users',
        },
        {
            id: '3',
            label: 'Klienci',
            icon: 'admin',
            routerLink: '/clients',

        },
        {
            id: '4',
            label: 'Zamówienia',
            icon: 'admin',
            routerLink: '/orders',
        }
    ]