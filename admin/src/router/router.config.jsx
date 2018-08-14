import ProdectTable from '@/views/prodect/table';
import ListAdd from '@/views/list/add/index.jsx';
import ListPage from '@/views/list/page'
let router = [{
    path:'/prodect/table',
    component: ProdectTable,
    name:'商品',
    children:[{
        path:'/prodect/table',
        component:ProdectTable,
        name:'商品统计'
    }]
},{
    path: '/list/add',
    component: ListPage,
    name:'列表',
    children:[{
        path:'/list/add',
        component:ListAdd,
        name:'列表添加'
    },{
        path:'/list/page',
        component:ListPage,
        name:'列表展示'
    }]
}];
export default router;