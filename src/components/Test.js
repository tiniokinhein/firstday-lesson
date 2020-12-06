import React, { Component } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Title from "./Title";
import { POSTS_URL } from "../ApiEndPoint";

class Test extends Component {
  state = {
    posts: [],
  };

  getData = async () => {
    const res = await fetch(POSTS_URL);
    const data = await res.json();

    this.setState({
      posts: data,
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {


    const DataLists = 
        <div class="row row-cols-1 row-cols-md-3">
            {
                this.state.posts.map(s => (
                    <div class="col mb-4">
                        <div class="card">
                            <img src={s.better_featured_image.source_url} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{s.title.rendered}</h5>
                                <p 
                                    class="card-text"
                                    dangerouslySetInnerHTML={{__html: s.excerpt.rendered}}
                                />
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>

    return (
      <Layout>
        <div>
          This is test.
          <Link to="/second">About</Link>
          <img className="dfdf dfdfd" src="images/logo.png" alt="" />
          <Title>My Title {this.state.demo}</Title>
        </div>

        {DataLists}

      </Layout>
    );
  }
}

export default Test;
