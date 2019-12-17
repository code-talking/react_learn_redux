import React from 'react';
import './App.css';

import {connect} from 'react-redux';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import * as actions from './actions';

class App extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.setFilter('active');
        // }, 5000);
    }

    render() {
        console.log(this.props.todos);

        return (
            // <div>
            //     <h1>hello world!</h1>
            // </div>

            <div>
                {/* AddTodo组件，从App的props中拿到addTodo这个属性 */}
                <AddTodo addTodo={this.props.addTodo} />
                <TodoList list={this.props.todos} onTodoClick={this.props.toggleTodo} />
                <Filter filter={this.props.filter} setFilter = {this.props.setFilter}></Filter>
            </div>
        );
    };
}

//  reducer中初始的状态，传递给根目录的props
const mapStateToProps = state => {
    return {
        todos: state.todos,
        filter: state.filter,
    };
};

//  reducer中的action，传递给props
const mapDispatchToProps = dispatch => {
    return {

        addTodo : text => {
            dispatch(actions.addTodo(text));
        },

        toggleTodo : id => {
            dispatch(actions.toggleTodo(id));
        },

        setFilter : filter => {
            dispatch(actions.setFilter(filter));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
