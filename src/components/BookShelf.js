import React from 'react';
import Book from './Book';

const BookShelf = ({ books, shelfTitle}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} title={book.title} authors={book.authors} imageUrl={book.imageLinks.smallThumbnail}/>
          ))}
        </ol>
      </div>
    </div>
  )
}

//TODO use proptypes

export default BookShelf;