import React, { Component,Fragment } from 'react';
import './style.css';
import FuWuItem from './FuWuItem';
import axios from 'axios';

class FuWu extends Component { 
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:[]
        }
        this.inputChange = this.inputChange.bind(this);
        this.addList = this.addList.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5dd40e0033d2d626526305df/ReactDemo01/fuwu').then((res)=>{
            console.log('axios 获取成功:'+JSON.stringify(res))
            this.setState({
                list:res.data.data
            })
        })
            .catch((error)=>{console.log('axios 获取数据失败:' + error)})
    }

    render() { 
        return ( 
            <Fragment>
                <div>
                    <label htmlFor="inp">加服务:</label>
                    <input 
                    id = "inp"
                    value = {this.state.inputValue}
                    className = "input"
                    onChange = {this.inputChange}
                    />
                    <button 
                    onClick={this.addList}
                    >服务</button>
                    <ul>
                        {
                            this.state.list.map((item,index)=>{
                            return (
                                    <FuWuItem 
                                    key = {index+item}
                                    content = {item}
                                    index={index}
                                    deleteItem={this.deleteItem}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            </Fragment>
         );
    }
    //监听input内容
    inputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    //添加服务
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    //删除服务
    deleteItem(index){
        let list = this.state.list;
        list.splice(index,1);
        this.setState({
            list:list
        })
    }

}
 
export default FuWu;