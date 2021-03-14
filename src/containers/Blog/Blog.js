import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

// import axios from 'axios';
import Posts from './Posts/Posts';
import './Blog.css';
import NewPost from './NewPost/NewPost';
import { Redirect } from 'react-router';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit', // this is an example of advanced Link setup
                                search: '?quick-submit=true' // this line also
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>*/}
                {/*<Route path="/" render={() => <h1>Home 2</h1>}/>*/}
                {/*<Route path="/" exact render={() => <Posts/>}/>*/}
                <Route path="/new-post" component={NewPost}/>
                <Route path="/posts" component={Posts}/>
                <Redirect from="/" to="/posts" />
            </div>
        );
    }
}

export default Blog;
