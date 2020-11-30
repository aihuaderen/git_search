import React, { Component } from "react";
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

    state = {
        users:[],//用户信息
        isLoading:false,
        isFirst:true,
        errorMsg:''
    }

    //更新App的状态
    updateAppState = (stateObj)=>{
      this.setState(stateObj)
    }



  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    );
  }
}
