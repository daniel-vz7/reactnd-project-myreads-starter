import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { update } from '../BooksAPI';
import ShelfChanger from './ShelfChanger';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      imageUrl: this.props.imageLinks.smallThumbnail,
      authors: this.props.authors,
      currentShelf: this.props.shelf
    }
  }

  updateShelf = async (bookId, newShelf) => {
    await update({ id: bookId }, newShelf);
    this.props.refreshBooks()
  }

  render() {
    const { id } = this.props;
    const { title, imageUrl, authors, currentShelf } = this.state;
    const thumbnailAttr = `url("${imageUrl}")`;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: thumbnailAttr,
              }}></div>
            <div className="book-shelf-changer">
              <ShelfChanger
                value={currentShelf}
                onChange={this.updateShelf}
                bookId={id}
                />
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors.join('; ')}</div>
        </div>
      </li>
    )
  }
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Book;