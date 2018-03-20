import React, {Component} from 'react';
import classes from './NewPost.scss';
import axios from 'axios';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Evgeniy',

    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
        }
        axios.post('/posts', post).then((response) => {
            console.log(response);
         //   this.props.history.push('/posts');
            this.props.history.replace('/posts');

        })
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {


        return (

            <div className={classes.NewPost}>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title}
                       onChange={(event) => this.setState({title: event.target.value})}/>
                <label>Content</label>
                <textarea rows="4" value={this.state.content}
                          onChange={(event) => this.setState({content: event.target.value})}/>
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Evgeniy">Evgeniy</option>
                    <option value="Katia">Katia</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>


        );
    }
}

export default NewPost;


