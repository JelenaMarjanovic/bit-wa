import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { postService } from './../../services/PostService';

class CreatePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: ""
        }
    }

    handleInputTitle = (event) => {
        const titleInput = event.target.value.trim();

        this.setState({
            title: titleInput
        });
    }

    handleInputBody = (event) => {
        const bodyInput = event.target.value.trim();

        this.setState({
            body: bodyInput
        });
    }

    createNewPost = (event) => {
        const { title, body } = this.state;

        if (!!title && !!body) {
            postService.deliverNewPost(title, body);
        } else {
            return;
        }
    }

    render() {
        return (
            <div className="row" >
                <form className="col s12">
                    <h4 className="blue-text text-darken-4 center">NEW POST</h4>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Post Title" type="text" onChange={this.handleInputTitle} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea onChange={this.handleInputBody} placeholder="Content" className="materialize-textarea"></textarea>
                        </div>
                    </div>

                    <Link to="/" className="left blue darken-1 blue-text text-darken-4 btn-large" >
                        <i className="material-icons left">clear</i> Cancel
                    </Link>
                    <Link to="/" className="right blue darken-4 btn-large" onClick={this.createNewPost}>
                        <i className="material-icons right">check</i> <span>Save</span>
                    </Link>
                </form>
            </div>
        );
    }
}

export { CreatePost };