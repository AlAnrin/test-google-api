import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, NavLink, Redirect} from "react-router-dom";
import {setData, setCurrentBook, setTotalItems, setMaxResult} from "./Actions";
import BookCard from './BookCard';
import BookDetail from './BookDetail';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@mdi/react';
import { mdiFeatureSearch } from '@mdi/js';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


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
    state = {
        redirect: false,
        isExact: false,
        valueFind: '',
        placeFind: 0,
    }

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
        this.setState({valueFind: event.target.value});
    }

    handleInputChange(event) {
        this.setState({isExact: event.target.checked});
    }

    handleSelectChange(event, value) {
        if (value === 1)
            this.setState({placeFind: event.target.value});
        else {
            this.props.setMaxResultAction(+event.target.value);
        }
    }

    keyPressEvent(event) {
        if (event.key === 'Enter' && this.state.valueFind.length > 1) {
            console.log(this.state.valueFind);
            this.getDate(this.state.valueFind);
        }
    }

    render() {
        return (
            <div>
                <div className="column column-bottom-border">
                    <FormControl className="item-three-on-row">
                        <Input
                            type="text" value={this.state.valueFind}
                            onChange={e => this.handleChange(e)}
                            onKeyPress={e => this.keyPressEvent(e)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton disabled={this.state.valueFind.length < 1}
                                                onClick={e => this.keyPressEvent({key: 'Enter'})}
                                                color="primary">
                                        <Icon className="search-icon-button" path={mdiFeatureSearch}
                                              size={1}/>
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControlLabel className="item-three-on-row"
                                      control={
                                          <Checkbox
                                              checked={this.state.isExact}
                                              onChange={e => this.handleInputChange(e)}
                                              color="primary"
                                          />
                                      }
                                      label="Точное соответствие"
                    />
                    <FormControl className="item-three-on-row">
                        <InputLabel>Выберите место поиска</InputLabel>
                        <Select
                            value={this.state.placeFind}
                            onChange={e => this.handleSelectChange(e, 1)}
                            autoWidth>
                            <MenuItem value={0}>Везде</MenuItem>
                            <MenuItem value={1}>Заголовке</MenuItem>
                            <MenuItem value={2}>Автор</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Router>
                    {
                        this.state.redirect &&
                        <Redirect to='/'/>
                    }
                    <Route path="/">
                    {
                        this.props.currentBook === null &&
                        <div className="content">
                            <div className="rowDays">
                                {
                                    this.props.data && this.props.data.length !== 0 &&
                                    this.props.data.map(item =>
                                        <NavLink key={item.id} to={item.id}
                                                 onClick={() => this.props.setCurrentBookAction(item)}>
                                            <BookCard date={item}/>
                                        </NavLink>
                                    )
                                }
                            </div>
                            {
                                this.props.data && this.props.data.length !== 0 &&
                                <div className="column">
                                    <label className="item-three-on-row">
                                        <Tooltip title="Текущая страница / общее количество страниц" aria-label="add">
                                            <span>
                                                {
                                                    Math.floor(((this.props.startIndex + 1) / this.props.maxResults) + 1)
                                                }
                                                    /
                                                {
                                                    Math.floor(this.props.totalItems / this.props.maxResults + 1)
                                                }
                                            </span>
                                        </Tooltip>
                                    </label>
                                    <div className="item-three-on-row">
                                        str
                                    </div>
                                    <FormControl className="item-three-on-row">
                                        <InputLabel>Количество книг на страницу</InputLabel>
                                        <Select
                                            value={this.props.maxResults}
                                            onChange={e => this.handleSelectChange(e, 2)}
                                            autoWidth>
                                            <MenuItem value={10}>10</MenuItem>
                                            <MenuItem value={20}>20</MenuItem>
                                            <MenuItem value={40}>40</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            }
                        </div>
                    }
                    </Route>
                    <Route path="/:id" component={BookDetail}/>
                </Router>
            </div>);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.maxResults !== this.props.maxResults) {
            if (this.props.data.length !== 0)
                this.getDate(this.valueFind);
        }
        if (prevProps.currentBook !== this.props.currentBook) {
            this.setState({ redirect: this.props.currentBook === null })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);