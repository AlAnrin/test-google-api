import React, { Component } from 'react';
import missingImage from './images/1604222140385.png'
import {connect} from "react-redux";
import Icon from '@mdi/react';
import {mdiArrowLeft, mdiCloseBox} from '@mdi/js';
import {setCurrentBook} from "./Actions";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const mapStateToProps = store => {
    return {
        currentBook: store.currentBook
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setCurrentBookAction: currentBook => dispatch(setCurrentBook(currentBook)),
    }
}

class BookDetail extends Component {
    formatLanguage(lang) {
        switch(lang) {
            case "en": return "Английский";
            case "ru": return "Русский";
            case "fr": return "Французский";
            case "de": return "Немецкий";
            default: return lang;
        }
    }

    formatDate(date) {
        const arr = date.split('-');
        if (arr.length === 1) return date;
        if (arr.length === 3) return arr[0];
    }

    render() {
        return (
            this.props.currentBook &&
            <div className="column">
                {
                    this.props.currentBook.volumeInfo.imageLinks &&
                    <img alt={missingImage} src={this.props.currentBook.volumeInfo.imageLinks.thumbnail}/>
                }
                <div className="book-info">
                    <div className="column">
                        {
                            this.props.currentBook.volumeInfo.authors &&
                            this.props.currentBook.volumeInfo.authors.map((author, index) =>
                                <div key={index}>
                                    <span>{author}</span>
                                    {
                                        index < this.props.currentBook.volumeInfo.authors.length - 1 &&
                                        <span>, </span>
                                    }
                                </div>
                            )
                        }
                    </div>
                    <h3>{this.props.currentBook.volumeInfo.title}</h3>
                    <span>{this.props.currentBook.volumeInfo.description}</span>
                    <div className="row description">
                        <span><i>Язык:</i> {this.formatLanguage(this.props.currentBook.volumeInfo.language)}</span>
                        <span><i>Дата публикации:</i> {this.formatDate(this.props.currentBook.volumeInfo.publishedDate)}</span>
                        <span><i>Количество страниц:</i> {this.props.currentBook.volumeInfo.pageCount}</span>
                    </div>
                </div>
                <Tooltip title="Назад" aria-label="add">
                    <IconButton className="icon-button back-arrow-icon-button"
                                onClick={() => this.props.setCurrentBookAction(null)}
                                color="primary">
                        <Icon className="back-arrow-icon" path={mdiArrowLeft}
                              size={1}/>
                    </IconButton>
                </Tooltip>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);