import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <h4>
                {this.props.children}
            </h4>
        )
    }
}
