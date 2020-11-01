import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import {setData, setCurrentBook, setTotalItems, setMaxResult} from "./Actions";
import BookCard from './BookCard';
import BookDetail from './BookDetail';

const mapStateToProps = store => {
    return {
        baseUrl: store.baseUrl,
        api: store.api,
        data: store.data,
        currentBook: store.currentBook,
        totalItems: store.totalItems,
        startIndex: store.startIndex,
        maxResults: store.maxResults
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setDataAction: data => dispatch(setData(data)),
        setCurrentBookAction: currentBook => dispatch(setCurrentBook(currentBook)),
        setTotalItemsAction: totalItems => dispatch(setTotalItems(totalItems)),
        setMaxResultAction: maxResult => dispatch(setMaxResult(maxResult))
    }
};

class App extends Component {
    isExact = false;
    valueFind = '';
    placeFind = 0;

    getDate = async (name) => {
        name = this.isExact ? `"${name.split(' ').join('+')}"` : name;
        if (this.placeFind === 1)
            name = `intitle:${name}`;
        if (this.placeFind === 2)
            name = `inauthor:${name}`;
        const url = `${this.props.baseUrl}=${name}&key=${this.props.api}&startIndex=${this.props.startIndex}&maxResults=${this.props.maxResults}`
        const api_call = await fetch(url);

        const response = await api_call.json();

        this.props.setTotalItemsAction(response.totalItems);
        this.props.setDataAction(response.items);
    }

    handleChange(event) {
        this.valueFind = event.target.value;
    }

    handleInputChange(event) {
        this.isExact = event.target.checked;
    }

    handleSelectChange(event, value) {
        if (value === 1)
            this.placeFind = +event.target.value;
        else {
            this.props.setMaxResultAction(+event.target.value);
        }
    }

    keyPressEvent(event) {
        if (event.key === 'Enter' && this.valueFind.length > 1) {
            console.log(this.valueFind);
            this.getDate(this.valueFind);
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <input type="text" value={this.props.valueFind}
                           onChange={e => this.handleChange(e)}
                           onKeyPress={e => this.keyPressEvent(e)}/>
                    <label>
                        <input
                            type="checkbox"
                            checked={this.props.isExact}
                            onChange={e => this.handleInputChange(e)}/>
                        Точное соответствие
                    </label>
                    <label>
                        Выберите место поиска:
                        <select value={this.props.placeFind} onChange={e => this.handleSelectChange(e, 1)}>
                            <option value="0">Везде</option>
                            <option value="1">Заголовке</option>
                            <option value="2">Автор</option>
                        </select>
                    </label>
                </div>
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
                        <div className="pagination">
                            {Math.floor(((this.props.startIndex + 1) / this.props.maxResults) + 1)} / {Math.floor(this.props.totalItems / this.props.maxResults + 1)}

                            <label>
                                Выберите количество на страницу
                                <select value={this.props.maxResults}
                                        onChange={e => this.handleSelectChange(e, 2)}>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="40">40</option>
                                </select>
                            </label>
                        </div>
                        <Route path="/:id" component={BookDetail} date={this.props.currentBook}/>
                    </div>
                </Router>
            </div>);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.maxResults !== this.props.maxResults) {
            if (this.props.data.length !== 0)
                this.getDate(this.valueFind);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);