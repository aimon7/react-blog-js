import React, { Component } from 'react';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';

// import axios from 'axios';
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true,
    }

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
                {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                <Route path="/posts" component={Posts}/>
                <Route render={() => <h1>Not Found - 404</h1>} />
                {/*<Redirect from="/" to="/posts" />*/}
            </div>
        );
    }
}

export default Blog;
