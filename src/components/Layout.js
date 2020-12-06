import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import RightSidebar from './RightSidebar'

export default class Layout extends Component {
    render() {
        return (
            <>
              <Header />  
                <div className="conatiner">
                    <div className="row">
                        <div className="col-12 col-md-9">{this.props.children}</div>
                        <div className="col-12 col-md-3"><RightSidebar /></div>
                    </div>
                </div>
              <Footer />
            </>
        )
    }
}
