import React, { Component } from 'react';
import missingImage from './images/1604222140385.png'

class BookDetail extends Component {
    item = null;
    authors = '';

    constructor(props) {
        super(props);

        this.item = this.props.date;
    }

    render() {
        return (
            <div className="column">
                {
                    this.item.volumeInfo.imageLinks &&
                    <img alt={missingImage} src={this.item.volumeInfo.imageLinks.thumbnail}/>
                }
                <div className="book-info">
                    <span>{this.authors}</span>
                    <h3>{this.item.volumeInfo.title}</h3>
                </div>
            </div>
        )
    }
}
export default BookDetail;