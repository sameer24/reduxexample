import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {createPosts} from '../actions/postActions';

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

       // call action
       this.props.createPosts(post);
    }

    render() {
        return (
            <div>
                <h1>AddForm</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title</label>
                        <br></br>
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
                    </div>
                    <br />
                    <div>
                        <label>body</label>
                        <br></br>
                        <textarea name="body" value={this.state.body} onChange={this.onChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createPosts : PropTypes.func.isRequired
}
export default connect(null, {createPosts})(Postform);