import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books: Book[] = [];

  newBookTitle: string = '';
  newBookAuthor: string = '';

  ngOnInit(): void {
    let savedBooks = localStorage.getItem('books');
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addNewBook() {
    if (this.newBookTitle.trim() && this.newBookAuthor.trim()) {
      let newBook = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor,
      };

      this.books.push(newBook);

      this.newBookTitle = '';
      this.newBookAuthor = '';

      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }

  deleteBook(id: number) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    this.books.splice(bookIndex, 1);

    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
