import React, { Component } from "react";
import axios from 'axios'

export default class Search extends Component {


    search = ()=>{
      const {keyWord} = this

      this.props.updateAppState({isLoading:true,isFirst:false})
      axios.get(`http://localhost:3000/search/users?q=${keyWord.value}`)
    }


  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Github用户搜索</h3>
        <div>
          <input ref={c => this.keyWord = c} type="text" placeholder="请输入用户名, 随后搜索" />&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
