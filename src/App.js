import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import {setData} from "./Actions";

const mapStateToProps = store => {
    return {
        baseUrl: store.baseUrl,
        api: store.api,
        data: store.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setDataAction: data => dispatch(setData(data))
    }
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {valueFind: ''};
    }

    getDate = async (name) => {
        const api_call = await fetch(`${this.props.baseUrl}=${name}&key=${this.props.api}`);

        const response = await api_call.json();

        this.props.setDataAction(response.items);
    }

    handleChange(event) {
        this.setState({valueFind: event.target.value})
    }

    keyPressEvent(event) {
        if(event.key === 'Enter'){
            this.getDate(this.props.valueFind);
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
                                    <div key={item.id}>Booook {item.volumeInfo.title}</div>
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