import React from "react";
import { connect } from "react-redux";
import { loadedData } from "../../redux/actions/todo";
import { withCookies } from "react-cookie";
import axios from "axios";

class Loader extends React.Component {
    fetchTasks() {
        axios({
            method: "get",
            url: `http://localhost:4000/api/tasks/many?userID=${this.props.cookies.get("auth")}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Cache-Control": "no-cache",
            },
        })
            .then((tasks) => {
                this.props.saveToStore(tasks.data.data);
            })
            .catch((error) => console.error(error.message));
    }

    componentDidMount() {
        this.fetchTasks();
    }

    render() {
        return <h2>Завантаження списку завдань....</h2>;
    }
}

function mapDispathToProps(dispatch) {
    return {
        saveToStore: (data) => dispatch(loadedData(data)),
    };
}

export default connect(null, mapDispathToProps)(withCookies(Loader));
