import { lazy } from 'react';

export const routes = [
    {
        path: '/',
        component: lazy(() => import('../pages/auth/Login')),
        protected: false,
    }
]