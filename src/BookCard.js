import React, { Component } from 'react';

class BookCard extends Component {
    item = null;
    constructor(props) {
        super(props);

        this.item = this.props.date;
    }

    render() {
        return (
            <div className="column">
                {
                    this.item.volumeInfo.imageLinks &&
                    <img src={this.item.volumeInfo.imageLinks.smallThumbnail}/>
                }
                <div className="book-info">
                    <h3>{this.item.volumeInfo.title}</h3>
                    <span>{this.item.volumeInfo.description}</span>
                </div>
            </div>
        )
    }
}

export default BookCard;