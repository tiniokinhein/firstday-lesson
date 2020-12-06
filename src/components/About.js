import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Title from './Title'

export default class About extends Component {
    render() {
        return (
            <Layout>
                <div>
                    This is about.
                    <Link to="/">Back</Link>
                    <Title>About Title</Title>
                </div>
            </Layout>
        )
    }
}
