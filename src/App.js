import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import {setData, setTotalItems} from "./Actions";
import BookCard from './BookCard';

const mapStateToProps = store => {
    return {
        baseUrl: store.baseUrl,
        api: store.api,
        data: store.data,
        totalItems: store.totalItems
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setDataAction: data => dispatch(setData(data)),
        setTotalItemsAction: totalItems => dispatch(setTotalItems(totalItems))
    }
};

class App extends Component {
    valueFind = '';

    getDate = async (name) => {
        const api_call = await fetch(`${this.props.baseUrl}=${name}&key=${this.props.api}`);

        const response = await api_call.json();

        this.props.setTotalItemsAction(response.totalItems);
        this.props.setDataAction(response.items);
    }

    handleChange(event) {
        this.valueFind = event.target.value;
    }

    keyPressEvent(event) {
        if(event.key === 'Enter'){
            console.log(this.valueFind);
            this.getDate(this.valueFind);
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.valueFind}
                       onChange={e => this.handleChange(e)}
                       onKeyPress={e => this.keyPressEvent(e)}/>
                <Router>
                    <div className="content">
                        <div className="rowDays">
                            {
                                this.props.data && this.props.data.length !== 0 &&
                                this.props.data.map(item =>
                                    <BookCard key={item.id} date={item}/>
                                )
                            }
                        </div>
                        {/*<Route path="/:id" component={DayDetail}/>*/}
                    </div>
                </Router>
            </div>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);