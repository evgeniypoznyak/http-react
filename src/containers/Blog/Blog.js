import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import Posts from './Posts/Posts'
import asyncComponent from '../../hoc/AsyncComponent';
import classes from './Blog.scss';


const AsyncNewComponent = asyncComponent(() => {
    return import('./NewPost/NewPost')
});


class Blog extends Component {
    state = {
        auth: true,
    }

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
                    {this.state.auth ? <Route path={'/new-post'} exact component={AsyncNewComponent}/> : null}
                    <Route path={'/posts'} component={Posts}/>
                    {/*<Redirect from={'/'} to={'/posts'}/>*/}
                    <Route render={() => <h1>404: Not Found</h1>}/>
                </Switch>

            </div>
        );
    }
}

export default Blog;