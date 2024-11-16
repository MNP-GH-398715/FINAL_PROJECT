import React from 'react'
import { useState, useEffect } from 'react'
import './BookDetails.css'; // Importing CSS for styling

const BookDetails = () => {
    const [books, setBooks] = useState([
        {
            id: 1,
            Title: "nelambari",
            Description: "A young boy discovers he is a wizard.",
            PublicationYear: 1997,
            Author: { id: 1, name: "sugatha kumari" },
            Category: { id: 1, name: "poem" }
        },
        {
            id: 2,
            Title: "A Game of Thrones",
            Description: "A tale of power and betrayal.",
            PublicationYear: 1996,
            Author: { id: 2, name: "George R.R. Martin" },
            Category: { id: 2, name: "Fantasy" }
        }
    ]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:5165/api/Book'); // Adjust the URL as needed
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="book-details">
            <h1>Book List</h1>
            {books.length === 0 ? (
                <p>No books available.</p>
            ) : (
                <ul>
                    {books.map(book => (
                        <li key={book.id} className="book-item">
                            <h3>{book.title}</h3>
                            <p>Author: {book.author}</p>
                            <p>Description: {book.description}</p>
                            <p>Publication Year: {book.publicationYear}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookDetails;
