import React from "react";
import { connect } from "react-redux";
import { loadedData } from "../../redux/actions/todo";

class Loader extends React.Component {
    fetchTasks() {
        const { saveToStore } = this.props;

        fetch(
            "http://localhost:4000/api/tasks/many?accessToken=lksdflksdf",
        )
            .then((response) => response.json())
            .then((tasks) => {
                saveToStore(tasks.data);
            })
            .catch((error) => console.error(error.message));
    }

    render() {
        this.fetchTasks();
        return <h2>Завантаження списку завдань....</h2>;
    }
}

function mapDispathToProps(dispatch) {
    return {
        saveToStore: (data) => dispatch(loadedData(data)),
    };
}

export default connect(null, mapDispathToProps)(Loader);
