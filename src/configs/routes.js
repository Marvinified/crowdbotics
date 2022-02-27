import { lazy } from 'react';

export const routes = [
    {
        path: '/',
        component: lazy(() => import('../pages/auth/Login')),
        protected: true,
        exact: true
    },
    {
        path: '/login',
        component: lazy(() => import('../pages/auth/Login')),
        protected: false,
    },
    {
        path: '/register',
        component: lazy(() => import('../pages/auth/Register')),
        protected: false,
    }
]