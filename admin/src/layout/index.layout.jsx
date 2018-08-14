import { Layout, Icon, Avatar, Button} from 'antd';
import React from 'react';
import Menu from './component/menu'
import Container from '@/components/Container.jsx';
const { Header, Sider, Content } = Layout;
class SiderDemo extends React.Component {
    constructor(props) {
        super(props)
    }
    
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    upload(){
        window.localStorage.clear();
        window.location.href='/'
    }
    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{"position":'absolute','right':'-1100px'}}/>
                <Button onClick={this.upload.bind(this)}>退出登录</Button>
                <Menu/>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Container {...this.props}/>
          </Content>
                </Layout>
            </Layout>
        );
    }
}

export default SiderDemo