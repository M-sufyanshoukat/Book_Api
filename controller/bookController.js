import Book from "../Model/books_model.js";

const fetchAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    console.log(books)
    res.status(200).json(books);

  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

export default fetchAllBooks;
