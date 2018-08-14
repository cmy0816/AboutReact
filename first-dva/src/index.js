import dva from 'dva';
import './index.css';
import createHistory from 'history/createBrowserHistory';
import { message } from 'antd';
// 1. Initialize

const app = dva({
    history: createHistory(),//默认为hash路由 配置之后为history
    initialState:{
        product:[{
            name:'cmy',id:1
        },{
            name:'wln',id:2
        }],
    },
    onError(e){
        message.error(e.message, /* duration */ 3)
    }
});

// 2. Plugins//配置或注册插件
import createLoading from 'dva-loading';
app.use(createLoading(opts));
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default)
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
