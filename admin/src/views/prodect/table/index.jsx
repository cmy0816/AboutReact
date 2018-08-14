import React from 'react';
import { Table ,Button} from 'antd';
import './index.css';
const renderContent = (value, row, index) => {
    const obj = {
        children: value,
        props: {},
    };
    return obj;
};
const changeState=(data)=>{
    fetch(`/api/setState?id=${data.id}&state=${data.state=='1'?'0':'1'}`).then(res=>{
        res.json().then(data=>{
            console.log(data)
        })
    })
    return (data.state == '1' ? '0' : '1');
}
const columns = [{
    title: '名称',
    dataIndex: 'proTitle',
    render: renderContent,
}, {
    title: '价格',
    dataIndex: 'price',
    render: renderContent,
}, {
    title: '图片',
    dataIndex: 'name',
    width:200,
    render: (text, row, index)=>{
        return (
            <dl className="img-item">
                <dt><img src={row.picSmall} /></dt>
                <dd>
                    <h6>{row.title}</h6>
                </dd>
            </dl>
        )
    }
}, {
    title: '描述',
    dataIndex: 'proSummary',
    width:'200',
    render: (text,row)=>{
        return <span>{row.proSummary}</span>
    }
} , {
    title: '是否上架',
    dataIndex: 'state',
        render: (text, row, index) => {
            return (
                <div className="word" 
                onClick={changeState.bind(this,row)}
                >
                {
                    changeState.call(this, row) === '1'?<span>上架</span>:<span>撤销</span>
                }
                </div>
            )
        }
} , {
    title:'操作',
    render: () => {
        return (
            <div className="active">
                <Button>删除</Button>
                <Button>编辑</Button>
            </div>
        )
    }
}];
class TableList extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            data:[],
            length:0
        }
        this.changeState = changeState;
    }
    getdata(num=1,leng=5){
        fetch(`/api/allData?page=${(num-1)*leng}&pageSize=${leng}`).then((res) => {
            res.json().then(datas => {
                this.setState({
                    data: [...datas.data.data],
                    length: datas.data.length
                })
            })
        });
    }
    changeData(obj){
        let {current,pageSize} = obj;
        this.getdata(current,pageSize);
    }
    componentDidMount(){
        this.getdata();
    }
    render(){
        return <Table className='table' columns={columns} dataSource={this.state.data} pagination={{ pageSize: 5, total: this.state.length&&this.state.length}} scroll={{ y: 400 }} onChange={this.changeData.bind(this)} changeState={this.changeState.bind(this)}/>
    }
}
export default TableList