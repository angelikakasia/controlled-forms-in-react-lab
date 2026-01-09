import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]); //array
  const [newBook, setNewBook] = useState({
    author: "",
    //object
    title: "",
  });
  console.log(books);
  const handleInputChange = (event) => {
    // const name =event.target.name;
    // const value =event.target.value;
    const { name, value } = event.target;

    setNewBook({
      ...newBook,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // the page doesnt do the full refresh just the component to refresh
    const copyBooks = [...books, newBook]; // copy of the books and it is adding the new book

    setBooks(copyBooks); //update the set of books
    setNewBook({
    author: "",
    title: "",
  })
  };
  return (
    <div className="bookshelfDiv">
      <p>hello</p>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <button type="submit">Add Book</button> 
        {/* map =it takes from an array and you can change it to whatever you want */}
      </form>

      {
        books.map((book, idx) => (   
        
            <div key= {idx}> 
                <p> {book.title} </p>
                <p> {book.author} </p>
            </div>
        ))
      } 
    </div>
  );
};
export default Bookshelf;
