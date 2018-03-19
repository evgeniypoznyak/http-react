import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'


import classes from './Blog.scss';

class Blog extends Component {


    render() {


        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    activeClassName={''}
                                    to={'/posts'} exact
                                >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?test'
                                }} exact>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>


                <Switch>

                    <Route path={'/new-post'} exact  component={NewPost}/>
                    <Route path={'/posts'} component={Posts}/>
                    <Redirect from={'/'} to={'/posts'}/>

                </Switch>

            </div>
        );
    }
}

export default Blog;