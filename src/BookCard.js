import React, { Component } from 'react';
import {mdiFileImageOutline} from '@mdi/js';
import Icon from "@mdi/react";

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
            <div className="column book-row column-bottom-border">
                {
                    this.item.volumeInfo.imageLinks ?
                        <img alt={this.item.volumeInfo.title} src={this.item.volumeInfo.imageLinks.thumbnail}/> :
                        <div className="missing-image">
                            <Icon className="missing-image-icon" path={mdiFileImageOutline} size={2}/>
                        </div>
                }
                <div className="row book-info">
                    <span>{this.authors}</span>
                    <h3>{this.item.volumeInfo.title}</h3>
                    {
                        this.item.volumeInfo.description &&
                        <span>
                            {
                                this.item.volumeInfo.description.substring(0, 150)
                            }
                            ...
                        </span>
                    }
                </div>
            </div>
        )
    }
}

export default BookCard;