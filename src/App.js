import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, NavLink, Redirect} from "react-router-dom";
import {setFilterValue, setData, setCurrentBook, setTotalItems, setMaxResult, setStartIndex, setPlaceFind} from "./Actions";
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
import { mdiFeatureSearch, mdiChevronDoubleLeft, mdiChevronDoubleRight, mdiChevronLeft, mdiChevronRight, mdiCloseBox } from '@mdi/js';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const mapStateToProps = store => {
    return {
        baseUrl: store.baseUrl,
        api: store.api,
        filterValue: store.filterValue,
        data: store.data,
        currentBook: store.currentBook,
        totalItems: store.totalItems,
        startIndex: store.startIndex,
        maxResults: store.maxResults,
        placeFind: store.placeFind
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setFilterValueAction: filterValue => dispatch(setFilterValue(filterValue)),
        setDataAction: data => dispatch(setData(data)),
        setCurrentBookAction: currentBook => dispatch(setCurrentBook(currentBook)),
        setTotalItemsAction: totalItems => dispatch(setTotalItems(totalItems)),
        setMaxResultAction: maxResult => dispatch(setMaxResult(maxResult)),
        setStartIndexAction: startIndex => dispatch(setStartIndex(startIndex)),
        setPlaceFindAction: placeFind => dispatch(setPlaceFind(placeFind))
    }
};

class App extends Component {
    state = {
        redirect: false,
        isExact: false,
        $valueFind: '',
        valueFind: ''
    }

    getDate = async (name) => {
        name = this.state.isExact ? `"${name.split(' ').join('+')}"` : name;
        if (this.props.placeFind === 1)
            name = `intitle:${name}`;
        if (this.props.placeFind === 2)
            name = `inauthor:${name}`;
        const url = `${this.props.baseUrl}=${name}&key=${this.props.api}&startIndex=${this.props.startIndex}&maxResults=${this.props.maxResults}`
        const api_call = await fetch(url);

        const response = await api_call.json();

        this.props.setTotalItemsAction(response.totalItems);
        this.props.setDataAction(response.items);
        this.setState({$valueFind: name});
    }

    handleChange(event) {
        this.setState({valueFind: event.target.value});
    }

    handleInputChange(event) {
        this.setState({isExact: event.target.checked});
    }

    handleSelectChange(event, value) {
        if (value === 1) {
            this.props.setPlaceFindAction(event.target.value);
        }
        else {
            this.props.setMaxResultAction(+event.target.value);
        }
    }

    checkCanLoadNewData() {
        return this.state.valueFind.length > 1 && this.state.valueFind !== this.state.$valueFind;
    }

    clearFilterValueEvent(event) {
        this.setState({valueFind: ''});
        this.props.setFilterValueAction('');
    }

    keyPressEvent(event) {
        if (event.key === 'Enter' && this.checkCanLoadNewData()) {
            this.props.setFilterValueAction(this.state.valueFind);
        }
    }

    render() {
        return (
            <div>
                <div className="column column-bottom-border">
                    <FormControl className="item-two-on-row">
                        <Input
                            type="text" value={this.state.valueFind}
                            onChange={e => this.handleChange(e)}
                            onKeyPress={e => this.keyPressEvent(e)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton disabled={this.state.valueFind === ''}
                                                onClick={e => this.clearFilterValueEvent(e)}
                                                color="primary">
                                        <Icon className="back-arrow-icon" path={mdiCloseBox}
                                              size={1}/>
                                    </IconButton>
                                    <IconButton disabled={!this.checkCanLoadNewData()}
                                                onClick={e => this.keyPressEvent({key: 'Enter'})}
                                                color="primary">
                                        <Icon className="search-icon-button" path={mdiFeatureSearch}
                                              size={1}/>
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Tooltip title="Точное соответствие" placement="bottom">
                        <FormControlLabel
                                          control={
                                              <Checkbox
                                                  checked={this.state.isExact}
                                                  onChange={e => this.handleInputChange(e)}
                                                  color="primary"
                                              />
                                          }/>
                    </Tooltip>
                    <div className="item-two-on-row">
                        <FormControl className="item-half-on-row">
                            <InputLabel>Выберите место поиска</InputLabel>
                            <Select
                                value={this.props.placeFind}
                                onChange={e => this.handleSelectChange(e, 1)}
                                autoWidth>
                                <MenuItem value={0}>Везде</MenuItem>
                                <MenuItem value={1}>Заголовке</MenuItem>
                                <MenuItem value={2}>Автор</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className="item-half-on-row">
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
                                <div className="column">
                                    <div className="item-five-on-row-with-center">
                                        <IconButton
                                            disabled={this.props.startIndex === 0}
                                            onClick={() => this.props.setStartIndexAction(0)}
                                            color="primary">
                                            <Icon path={mdiChevronDoubleLeft}
                                                  size={1}/>
                                        </IconButton>
                                    </div>
                                    <div className="item-five-on-row-with-center">
                                        <IconButton
                                                    disabled={this.props.startIndex === 0}
                                                    onClick={() => this.props.setStartIndexAction(this.props.startIndex - this.props.maxResults)}
                                                    color="primary">
                                            <Icon path={mdiChevronLeft}
                                                  size={1}/>
                                        </IconButton>
                                    </div>
                                    <div className="item-five-on-row-center">
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
                                    </div>
                                    <div className="item-five-on-row-with-center">
                                        <IconButton
                                            disabled={this.props.startIndex + this.props.maxResults > this.props.totalItems}
                                            onClick={() => this.props.setStartIndexAction(this.props.startIndex + this.props.maxResults)}
                                            color="primary">
                                            <Icon path={mdiChevronRight}
                                                  size={1}/>
                                        </IconButton>
                                    </div>
                                    <div className="item-five-on-row-with-center">
                                        <IconButton
                                            disabled={this.props.startIndex + this.props.maxResults > this.props.totalItems}
                                            onClick={() => this.props.setStartIndexAction(Math.floor(this.props.totalItems / this.props.maxResults) * this.props.maxResults)}
                                            color="primary">
                                            <Icon path={mdiChevronDoubleRight}
                                                  size={1}/>
                                        </IconButton>
                                    </div>
                                </div>
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
                            </div>
                        }
                    </Route>
                    <Route path="/:id" component={BookDetail}/>
                </Router>
            </div>);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.filterValue !== this.props.filterValue) {
            if (this.props.filterValue !== '')
                this.getDate(this.props.filterValue);
            else {
                this.setState({$valueFind: ''});
                this.props.setDataAction([]);
                this.props.setTotalItemsAction(0);
                this.props.setStartIndexAction(0)
            }
        }
        if (prevProps.placeFind !== this.props.placeFind) {
            if (this.props.filterValue !== '')
                this.getDate(this.props.filterValue);
        }
        if (prevProps.startIndex !== this.props.startIndex) {
            if (this.props.filterValue !== '')
                this.getDate(this.props.filterValue);
        }
        if (prevProps.maxResults !== this.props.maxResults) {
            if (this.props.filterValue !== '')
                this.getDate(this.props.filterValue);
        }
        if (prevProps.currentBook !== this.props.currentBook) {
            this.setState({ redirect: this.props.currentBook === null })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);