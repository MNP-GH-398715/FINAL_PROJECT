import React, { useEffect, useState } from 'react';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);
    const [newAuthor, setNewAuthor] = useState('');

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const response = await fetch('http://localhost:5165/api/Authors');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAuthors(data);
            } catch (error) {
                console.error('Error fetching authors:', error);
            }
        };

        fetchAuthors();
    }, []);

    const addAuthor = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/authors', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newAuthor }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const addedAuthor = await response.json();
            setAuthors((prevAuthors) => [...prevAuthors, addedAuthor]); // Append new author to the list
            setNewAuthor('');
        } catch (error) {
            console.error('Error adding author:', error);
        }
    };

    return (
        <div>
            <h2>AuthorList</h2>
            <ul>
                {authors.map(author => (
                    <li key={author.id}>{author.name}</li>
                ))}
            </ul>
            <form onSubmit={addAuthor}>
                <input
                    type="text"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="New Author Name"
                    required
                />
                <button type="submit">Add Author</button>
            </form>
        </div>
    );
};

export default AuthorList;
