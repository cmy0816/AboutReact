import { Menu, Icon} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import router from '@/router/router.config'
const SubMenu = Menu.SubMenu;

class App extends React.Component {
    state = {
        collapsed: false,
    }
    render() {
        return (
            <div style={{ width: '100%' }}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <Link to='/'>首页</Link>
                    </Menu.Item>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><Link to='/'>功能</Link></span>}>
                        {
                            router.map((item,index) =>{
                                if(item.children){
                                    return <SubMenu key={index} title={<Link to={item.path}>{item.name}</Link>}>
                                    {
                                        item.children.map((value,key)=>{
                                                return <Menu.Item key={key+index}><Link to={value.path}>{value.name}</Link></Menu.Item>
                                        })
                                    }
                                    </SubMenu>
                                }else{
                                    return <Menu.Item key={index}><Link to={item.path}>{item.name}</Link></Menu.Item>
                                }
                            })
                        }
                        
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
export default App;