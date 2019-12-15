import React from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';

class App extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.setFilter('active');
        }, 5000);
    }

    render() {
        console.log(this.props.todos);
        console.log(this.props.filter);

        return (
            <div>
                <h1>hello world!</h1>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        filter: state.filter,
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        setFilter: filter => {
            dispatch({type: 'SET_FILTER', filter: filter});
        },
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
