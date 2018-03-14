import React, {Component} from 'react';
import {Route, Link } from 'react-router-dom'
//import axios from 'axios';
//import axios from '../../axios';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'


// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';

import classes from './Blog.scss';

class Blog extends Component {


    render() {


        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to={'/'} >Home</Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?test'
                                }} >New Post</Link>
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

export default Blog;