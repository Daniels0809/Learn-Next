import { CardLibrary } from "@/cardLibrary/cardLibrary";
import { AuthorModal } from "@/components/button/AuthorModal";
import { createAuthor, getAuthors, putAuthor } from "@/services/authors";
import React, { useContext, useEffect, useState } from "react";
import { deleteAuthor } from "../../services/authors";
import { getBooks } from "@/services/books";
import { CardBook } from "@/cardLibrary/cardBook";
import { createBook, putBook, deleteBook } from "@/services/books";
import { BookModal } from "@/components/button/BookModal";
import Authors from "@/database/models/authors";
import { useRouter } from "next/router";
import { MyContext } from "@/context/Context";

interface authorProps {
  _id?: string;
  authorId: number;
  name: string;
  nationality: string;
  birthYear: number;
  isActive: boolean;
}

interface bookProps {
  _id?: string;
  idBook: number;
  title: string;
  authorId: number;
  category: string;
  publishedYear: number;
  availableCopies: number;
  img: string;
  createdAt: string;
}

interface dataAuthors {
  ok: boolean;
  datos: authorProps[];
}

interface dataBooks {
  ok: boolean;
  datos: bookProps[];
}

export const Library = () => {
  const { userLogged } = useContext(MyContext);
  const router = useRouter();

useEffect(() => {
  if (!userLogged?.isActive) {
    router.push("/");
  } else if (userLogged.role !== "admin") {
    router.push("/dashboard");
  }
}, [userLogged]);


  const [dataAuthors, setDataAuthors] = useState<dataAuthors>({
    ok: false,
    datos: [],
  });

  const [dataBooks, setDataBooks] = useState<dataBooks>({
    ok: false,
    datos: [],
  });

  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit" | "delete">(
    "create"
  );

  const [selectedAuthor, setSelectedAuthor] = useState<authorProps>({
    authorId: 0,
    name: "",
    nationality: "",
    birthYear: 0,
    isActive: true,
  });

  const [selectedBook, setSelectedBook] = useState<bookProps>({
    idBook: 0,
    title: "",
    authorId: 0,
    category: "",
    publishedYear: new Date().getFullYear(),
    availableCopies: 0,
    img: "",
    createdAt: new Date().toISOString(),
  });

  const openCreateBookModal = () => {
    setModalMode("create");
    setSelectedBook({
      idBook: 0,
      title: "",
      authorId: 0,
      category: "",
      publishedYear: new Date().getFullYear(),
      availableCopies: 0,
      img: "",
      createdAt: new Date().toISOString(),
    });
    setIsBookModalOpen(true);
  };

  const openEditBookModal = (book: bookProps) => {
    setModalMode("edit");
    setSelectedBook(book);
    setIsBookModalOpen(true);
  };

  const handleDeleteBook = (book: bookProps) => {
    setModalMode("delete");
    setSelectedBook(book);
    setIsBookModalOpen(true);
  };

  const handleSubmitBookModal = async () => {
    if (!selectedBook.title || !selectedBook.category) {
      alert("Please complete all fields");
      return;
    }

    if (
      modalMode === "create" &&
      dataBooks.datos.some((book) => book.idBook === selectedBook.idBook)
    ) {
      alert("A book with this ID already exists.");
      return;
    }

    try {
      if (modalMode === "create") {
        await createBook(selectedBook);
      } else if (modalMode === "edit" && selectedBook._id) {
        await putBook(selectedBook);
      } else if (modalMode === "delete" && selectedBook._id) {
        await deleteBook(selectedBook._id);
      }

      const response = await getBooks();
      setDataBooks(response);
      setIsBookModalOpen(false);
    } catch (error) {
      console.log("Error while saving book:", error);
      alert("There was an error while saving the book.");
    }
  };

  const openCreateModal = async () => {
    setModalMode("create");
    setSelectedAuthor({
      authorId: 0,
      name: "",
      nationality: "",
      birthYear: 0,
      isActive: true,
    });
    setIsModalOpen(true);
    const response = await getAuthors();
    setDataAuthors(response);
  };

  const openEditModal = async (author: authorProps) => {
    setModalMode("edit");
    setSelectedAuthor(author);
    setIsModalOpen(true);
    const response = await getAuthors();
    setDataAuthors(response);
  };

  const handleDelete = async (id: string, author: authorProps) => {
    try {
      setModalMode("delete");
      setSelectedAuthor(author);
      setIsModalOpen(true);
      const response = await getAuthors();
      setDataAuthors(response);
    } catch (error) {
      alert("Error deleting author");
    }
  };

  const handleSubmitModal = async () => {
    if (!selectedAuthor.name || !selectedAuthor.nationality) {
      alert("Please complete all fields");
      return;
    }

    if (
      modalMode === "create" &&
      dataAuthors.datos.some(
        (author) => author.authorId === selectedAuthor.authorId
      )
    ) {
      alert("An author whit this ID already exists.");
      return;
    }

    try {
      if (modalMode === "create") {
        await createAuthor(
          selectedAuthor.authorId,
          selectedAuthor.name,
          selectedAuthor.nationality,
          selectedAuthor.birthYear,
          selectedAuthor.isActive
        );
      }
      if (modalMode === "edit" && selectedAuthor._id) {
        await putAuthor({
          _id: selectedAuthor._id,
          name: selectedAuthor.name,
          nationality: selectedAuthor.nationality,
          birthYear: selectedAuthor.birthYear,
          isActive: selectedAuthor.isActive,
        });
      }
      if (modalMode === "delete") {
        await deleteAuthor(selectedAuthor._id as string);
      }

      const response = await getAuthors();
      setDataAuthors(response);
      setIsModalOpen(false);
    } catch (error) {
      console.log("Error while savinf author:", error);
      alert("There was an error while saving the author.");
    }
  };

  useEffect(() => {
    const fechData = async () => {
      const author = await getAuthors();
      const books = await getBooks();
      setDataAuthors(author);
      setDataBooks(books);
    };
    fechData();
  }, []);


const { setUserLogged, setIsActive } = useContext(MyContext);
const route = useRouter();

const handleLogout = () => {
  localStorage.removeItem("userLogged");
  setUserLogged({ name: "", role: "", isActive: false, date: "" });
  setIsActive(false);
  route.push("/")
};

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-300 to-gray-200 text-gray-800">
  {/* Header */}
  <header className="flex justify-between items-center bg-white shadow-md px-8 py-4 sticky top-0 z-10">
    <h1 className="text-2xl font-bold text-gray-800">📚 Admin Panel</h1>
    <div className="flex gap-3">
      <button
        onClick={openCreateBookModal}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
      >
        ➕ Add Book
      </button>
      <button
        onClick={openCreateModal}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
      >
        ✍️ Add Author
      </button>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
      >
        ⎋ Logout
      </button>
    </div>
  </header>

  {/* Contenido principal */}
  <main className="px-8 py-10">
    {/* Books Section */}
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4 border-l-4 border-blue-600 pl-3">
        Books
      </h2>

      {dataBooks.datos && dataBooks.datos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataBooks.datos.map((book: bookProps) => {
            const author = dataAuthors.datos.find(
              (a) => a.authorId === book.authorId
            );
            return (
              <CardBook
                key={book.idBook}
                title={book.title}
                authorId={book.authorId}
                authorName={author ? author.name : "Unknown Author"}
                category={book.category}
                publishedYear={book.publishedYear}
                availableCopies={book.availableCopies}
                img={book.img}
                createdAt={book.createdAt}
                buttonText="Edit"
                onButtonClick={() => openEditBookModal(book)}
                onDelete={() => handleDeleteBook(book)}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 italic">No books found.</p>
      )}
    </section>

    {/* Authors Section */}
    <section>
      <h2 className="text-xl font-semibold mb-4 border-l-4 border-green-600 pl-3">
        Authors
      </h2>

      {dataAuthors.datos && dataAuthors.datos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataAuthors.datos.map((author: authorProps) => (
            <CardLibrary
              key={author.authorId}
              authorId={Number(author.authorId)}
              name={author.name}
              nationality={author.nationality}
              birthYear={author.birthYear}
              buttonText="Edit"
              onButtonClick={() => openEditModal(author)}
              onDelete={() => handleDelete(String(author._id), author)}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">No authors found.</p>
      )}
    </section>
  </main>

  {/* Modals */}
  <AuthorModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    onSubmit={handleSubmitModal}
    title={
      modalMode === "create"
        ? "Create Author"
        : modalMode === "edit"
        ? "Edit Author"
        : "Delete Author"
    }
    mode={modalMode}
    author={selectedAuthor}
    setAuthor={setSelectedAuthor}
  />

  <BookModal
    isOpen={isBookModalOpen}
    onClose={() => setIsBookModalOpen(false)}
    onSubmit={handleSubmitBookModal}
    mode={modalMode}
    book={selectedBook}
    setBook={setSelectedBook}
    authors={dataAuthors.datos}
  />
</div>
    </>
  );
};

export default Library;
