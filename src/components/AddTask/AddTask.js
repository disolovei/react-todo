import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions/todo';
import axios from 'axios';
import { withCookies } from 'react-cookie';

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        };

        this.submitHandler = this.submitHandler.bind(this);
        this.inputTitleHandler = this.inputTitleHandler.bind(this);
        this.inputDescriptionHandler = this.inputDescriptionHandler.bind(this);
    }

    sendDataToServer() {
        const { title, description } = this.state;

        const urlencoded = new URLSearchParams();
        urlencoded.append("title", title);
        urlencoded.append("description", description);
        urlencoded.append("userID", this.props.cookies.get('auth'));

        axios({
            method: "post",
            url: "http://localhost:4000/api/tasks?accessToken=alkjsdkljahsdkjasd",
            data: urlencoded,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Cache-Control": "no-cache",
            },
        })
            .then(res => {
                this.props.addTask(res.data.addedItem);
                this.setState({
                    title: "",
                    description: "",
                });
            })
            .catch(err => {
                console.error(err);
            });
    }

    submitHandler(e) {
        e.preventDefault();
        const { title, description } = this.state;
        
        if ( ! title ) {
            return false;
        }

        if ( ! description ) {
            return false;
        }

        this.sendDataToServer();
    }

    inputTitleHandler(e) {
        this.setState({
            title: e.target.value
        });
    }

    inputDescriptionHandler(e) {
        this.setState({
            description: e.target.value
        });
    }

    render() {
        return (
            <React.Fragment>
                <h2>Додати завдання</h2>
                <form onSubmit={this.submitHandler}>
                    <label>
                        <input 
                        type="text" 
                        name="title" 
                        placeholder="Заголовок" 
                        value={this.state.title || ''} 
                        onChange={this.inputTitleHandler} 
                    />
                    </label>
                    <label>
                        <textarea 
                            name="description" 
                            placeholder="Короткий опис" 
                            value={this.state.description || ''} 
                            onChange={this.inputDescriptionHandler}
                        />
                    </label>
                    <button type="submit">Додати</button>
                </form>
            </React.Fragment>
        );
    }
}

export default connect(null, { addTask })(withCookies(AddTask));