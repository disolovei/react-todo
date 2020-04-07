import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions/todo';

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

        fetch(
            "http://todo.capslock.co.ua/api/task?accessToken=alkjsdkljahsdkjasd",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: urlencoded,
            }
        )
            .then(result => result.json())
            .then(res => {
                console.log(res.addedItem);
                this.props.addTask(res.addedItem);
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

export default connect(null, { addTask })(AddTask);