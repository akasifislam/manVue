import Welcome from './components/Welcome.vue';
import CategoryList from './components/Category/List.vue'
import CategoryCreate from './components/Category/Add.vue'
import CategoryEdit from './components/Category/Edit.vue'

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'categoryList',
        path: '/category',
        component: CategoryList
    },
    {
        name: 'categoryEdit',
        path: '/category/:id/edit',
        component: CategoryEdit
    },
    {
        name: 'categoryAdd',
        path: '/category/add',
        component: CategoryCreate
    }
]