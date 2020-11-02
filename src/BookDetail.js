import React, { Component } from 'react';
import missingImage from './images/1604222140385.png'
import {connect} from "react-redux";
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import {setCurrentBook} from "./Actions";

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
    authors = '';

    render() {
        return (
            this.props.currentBook &&
            <div className="column">
                {
                    this.props.currentBook.volumeInfo.imageLinks &&
                    <img alt={missingImage} src={this.props.currentBook.volumeInfo.imageLinks.thumbnail}/>
                }
                <div className="book-info">
                    <span>{this.authors}</span>
                    <h3>{this.props.currentBook.volumeInfo.title}</h3>
                </div>
                <button className="back-arrow-icon-button" onClick={() => this.props.setCurrentBookAction(null)}>
                    <Icon className="back-arrow-icon" path={mdiArrowLeft}
                          size={1}/>
                </button>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);