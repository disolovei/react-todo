import React from 'react';
import { connect } from 'react-redux';
import { loadedData } from '../../redux/actions';

function Loader({ saveToStore }) {
    setTimeout(() => {
        saveToStore({
            0: {
                title: 'Створити додаток на React',
                description: 'Порожньо',
                resolved: true,
            },
            1: {
                title: 'Пофіксити баг із ре-рендерингом списку завдань',
                description: 'Порожньо',
                resolved: false,
            },
            2: {
                title: 'Пофіксити баг із ре-рендерингом списку завдань',
                description: 'Порожньо',
                resolved: false,
            },
        });
    }, 1000);

    return <h2>Завантаження списку завдань....</h2>;
}

function mapDispathToProps(dispatch) {
    return { 
        saveToStore: (data) => dispatch(loadedData(data)),
    };
}

export default connect(null, mapDispathToProps)(Loader);