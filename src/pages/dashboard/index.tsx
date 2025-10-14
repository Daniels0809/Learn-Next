import { MyContext } from "@/context/Context";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getBooks } from "@/services/books"; // 👈 servicio para obtener libros
import { CardBook } from "@/cardLibrary/cardBook"
import { Button } from "@heroui/react";
import { getAuthors } from "@/services/authors";

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

interface dataBooks {
  ok: boolean;
  datos: bookProps[];
}

interface dataAuthors {
  ok: boolean;
  datos: authorProps[];
}
const Dashboard = () => {
  const router = useRouter();
  const { userLogged } = useContext(MyContext);

    const [dataAuthors, setDataAuthors] = useState<dataAuthors>({
      ok: false,
      datos: [],
    });
  const [books, setDataBooks] = useState<dataBooks>({
    ok: false,
    datos: [],
  });

  // 🧠 Redirección si no está logueado
  useEffect(() => {
    if (!userLogged) {
      router.push("/");
    }
  }, [userLogged, router]);

  // 📚 Cargar libros al montar el componente
  useEffect(() => {
    const fechData = async () => {
       const author = await getAuthors();
      const books = await getBooks();
      setDataAuthors(author);
      setDataBooks(books);
    };
    fechData();
  }, []);

  // 🔚 Logout
  const handleLogout = () => {
    localStorage.removeItem("userLogged");
    router.push("/"); // 👈 redirige al index principal
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">📚 Library Dashboard</h1>

          <div className="flex items-center gap-4">
            <p className="text-gray-600">
              Welcome, <span className="font-semibold">{userLogged?.name}</span>
              <br />
              <span className="text-sm text-gray-500">
                Role: {userLogged?.role}
              </span>
            </p>
            <Button
              color="danger"
              variant="shadow"
              onPress={handleLogout}
              className="font-semibold"
            >
              Logout
            </Button>
          </div>
        </div>

        {/* 🧾 Lista de libros */}
        {books.datos && books.datos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {books.datos.map((book: bookProps) => {
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
                        
                      />
                    );
                  })}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No books available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
