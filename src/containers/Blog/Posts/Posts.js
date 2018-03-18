import React, {Component} from 'react';
import Post from '../../../components/Post/Post'
import classes from './Posts.scss';
import axios from "../../../axios";


class Posts extends Component {

    state = {
        posts: [],
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                console.log(response);
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Evgeniy'
                    }
                });
                this.setState({posts: updatedPosts});
              //  console.log(response);
            })
            .catch((error) => {
              //  console.log('Error!', error);
              //  this.setState({error: true})
            })
    }

    render() {

        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.state.error) {

           posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}/>;
            });
        }

        return (
            <section className={classes.Posts}>
                {posts}
            </section>
        )

    }

}

export default Posts