import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
//import {withRouter} from 'react-router-dom';
import FullPost from './FullPost/FullPost'


import classes from './Blog.scss';

class Blog extends Component {


    render() {


        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink activeClassName={''} to={'/'} exact>Home</NavLink>
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
                    <Route path={'/'} exact component={Posts}/>
                    <Route path={'/new-post'} exact  component={NewPost}/>
                    <Route path={'/:id'} component={ FullPost }/>
                </Switch>

            </div>
        );
    }
}

export default Blog;