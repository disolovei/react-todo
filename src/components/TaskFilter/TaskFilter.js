import React, { useState } from 'react';
import { connect } from 'react-redux';
import { filterTasks } from '../../redux/actions/todo';

function TaskFilter({ changeFilter }) {
    const [selected, setSelected] = useState('all');

    const selectFilter = (e) => {
        const filterName = ['all', 'done', 'undone'].indexOf(e.target.value) ? e.target.value : 'all';
        setSelected(filterName);
        changeFilter(filterName);
    };

    return (
        <div className="task-filters">
            <button 
                type="button" 
                className={'all' === selected ? 'active' : ''} 
                value="all"
                onClick={selectFilter}
            >Усі</button>
            <button 
                type="button" 
                className={'done' === selected ? 'active' : ''} 
                value="done"
                onClick={selectFilter}
            >Виконані</button>
            <button 
                type="button" 
                className={'undone' === selected ? 'active' : ''} 
                value="undone"
                onClick={selectFilter}
            >Не виконані</button>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        changeFilter: (rule) => dispatch(filterTasks(rule)), 
    };
}

export default connect(null, mapDispatchToProps)(TaskFilter);