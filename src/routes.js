import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import Post from './pages/Post/Post';
import NotFound from './pages/NotFound/NotFound';
import Category from './pages/Category/Category';
import PostCategory from './pages/PostCategory/PostCategory';
// import ProductListPage from './pages/ProductListPage/ProductListPage';
// import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import About from './pages/About/About';
import Search from './pages/Search/Search';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/post/:id',
        exact: true,
        main: ({ match, history }) => <Post match={match} history={history}/>
    },
    {
        path: '/about',
        exact: false,
        main: () => <About/>
    },
    {
        path: '/category',
        exact: true,
        main: () => <Category/>
    },
    {
        path: '/category/:id',
        exact: false,
        main: ({ match, history }) => <PostCategory match={match} history={history}/>
    },
    {
        path: '/search',
        exact: true,
        main: ({ match, location }) => <Search match={match} location={location}/>
    },
    // {
    //     path: '/product-list',
    //     exact: false,
    //     main: () => <ProductListPage />
    // },
    // {
    //     path: '/product/add',
    //     exact: false,
    //     main: ({ location, history }) => <ProductActionPage location={location} history={history} />
    // },
    // {
    //     path: '/product/:id/edit',
    //     exact: false,
    //     main: ({ match, history }) => <ProductActionPage match={match} history={history} />
    // },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;