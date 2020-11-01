import React, { Component } from 'react';
import missingImage from './images/1604222140385.png'

class BookCard extends Component {
    item = null;
    authors = '';

    constructor(props) {
        super(props);

        this.item = this.props.date;
        if (this.item.volumeInfo.authors) {
            for (let i = 0; i < this.item.volumeInfo.authors.length; i++) {
                this.authors += this.item.volumeInfo.authors[i];
                this.authors += (i + 1) < this.item.volumeInfo.authors.length ? ', ' : '';
            }
        }
    }

    render() {
        return (
            <div className="column">
                <img alt={missingImage} src={this.item.volumeInfo?.imageLinks?.smallThumbnail}/>
                <div className="row book-info">
                    <span>{this.authors}</span>
                    <h3>{this.item.volumeInfo.title}</h3>
                    <span>{this.item.volumeInfo.description}</span>
                </div>
            </div>
        )
    }
}

export default BookCard;