import React, { Component } from 'react'
import HeaderComp from './Header';
import SiderComp from './Sider'
import 'bootstrap/dist/css/bootstrap.css';

class CustomLayout extends Component {
    render(){
        return (
            <div class='col-md-12 padding-zero'>
                <HeaderComp>
                </HeaderComp>
                <SiderComp>
                </SiderComp>
            </div>
        )
    }
}

export default CustomLayout