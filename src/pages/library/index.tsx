import { CardLibrary } from "@/cardLibrary/cardLibrary";
import { AuthorModal } from "@/components/button/AuthorModal";
import { createAuthor, getAuthors, putAuthor } from "@/services/authors";
import React, { useEffect, useState } from "react";
import { deleteAuthor } from "../../services/authors";
import { getBooks } from "@/services/books";
import { CardBook } from "@/cardLibrary/cardBook";

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
  idBook: number,
  title: string,
  authorId: number,
  category: string,
  publishedYear: number,
  availableCopies: number,
  img: string,
  createdAt: string
}

interface dataAuthors {
  ok: boolean;
  datos: authorProps[];
}

interface dataBooks {
  ok: boolean;
  datos: bookProps[];
}

export const Authors = () => {
  // const [inputAuthorId, setAuthorId] = useState(0);
  // const [inputNameAuthor, setNameAuthor] = useState("");
  // const [inputNationalityAuthor, setNationalityAuthor] = useState("");
  // const [inputBirthYear, setBirthYear] = useState(0);
  // const [inputIsActiveAuthor, setIsActiveAuthor] = useState<boolean>(true);

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
      if (modalMode === "delete"){
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
  const [dataAuthors, setDataAuthors] = useState<dataAuthors>({
    ok: false,
    datos: [],
  });

    const [dataBooks, setDataBooks] = useState<dataBooks>({
    ok: false,
    datos: [],
  });

  useEffect(() => {
  const fechData = async () => {
    const response = await getBooks();
    setDataBooks(response);
  };
  fechData();
}, []);

  useEffect(() => {
  const fechData = async () => {
    const response = await getAuthors();
    setDataAuthors(response);
  };
  fechData();
}, []);

  return (
    <>
     <div>
        <div>
          {""}
          <div className="flex gap-1 ">
            <button
              className="bg-gray-500 gap-3 miButton"
              onClick={openCreateModal}
            >
              Add Book
            </button>
          </div>
          {dataBooks.datos && (
            <div className="bg-black rounded-3xl authorContainer ">
              {dataBooks.datos.map((book: bookProps) => (
                <CardBook
                  title={book.title}
                  authorId={Number(book.authorId)}
                  key={book.idBook}
                  category={book.category}
                  publishedYear={book.publishedYear}
                  img={book.img}
                  createdAt={book.createdAt}
                  buttonText="Edit"
                  
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <AuthorModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        onSubmit={handleSubmitModal}
        title={modalMode === "create" ? "Create Author" : modalMode == "edit"? "Edit Author" : "Delete Author"}
        mode={modalMode}
        author={selectedAuthor}
        setAuthor={setSelectedAuthor}
      />
      <div>
        <div>
          {""}
          <div className="flex gap-1 ">
            <button
              className="bg-gray-500 gap-3 miButton"
              onClick={openCreateModal}
            >
              Add author
            </button>
          </div>
          {dataAuthors.datos && (
            <div className="bg-black rounded-3xl authorContainer ">
              {dataAuthors.datos.map((author: authorProps) => (
                <CardLibrary
                  authorId={Number(author.authorId)}
                  key={author.authorId}
                  name={author.name}
                  nationality={author.nationality}
                  birthYear={author.birthYear}
                  buttonText="Edit"
                  onButtonClick={() => openEditModal(author)}
                  onDelete={() => handleDelete(String(author._id), author)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <AuthorModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        onSubmit={handleSubmitModal}
        title={modalMode === "create" ? "Create Auhtor" : modalMode == "edit"? "Edit Author" : "Delete Author"}
        mode={modalMode}
        author={selectedAuthor}
        setAuthor={setSelectedAuthor}
      />
    </>
  );
};

export default Authors;

