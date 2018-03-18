import React, {Component} from 'react';
import {Route, NavLink } from 'react-router-dom'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import {withRouter} from 'react-router-dom';


import classes from './Blog.scss';

class Blog extends Component {


    render() {


        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink activeClassName={''} to={'/'} exact >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?test'
                                }} exact >New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path={'/'} exact component={Posts}/>
                <Route path={'/new-post'} component={NewPost}/>
            </div>
        );
    }
}

export default withRouter(Blog);