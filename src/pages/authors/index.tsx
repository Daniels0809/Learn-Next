import { CardLibrary } from "@/cardLibrary/cardLibrary";
import { getAuthors } from "@/services/authors";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const Authors = () => {
  interface authorProps {
    authorId: number;
    name: string;
    nationality: string;
    birthYear: number;
    isActive: boolean;
  }

  interface dataAuthors {
    ok: boolean;
    datos: authorProps[];
  }

  const [dataAuthors, setDataAuthors] = useState<dataAuthors>({
    ok: false,
    datos: [],
  });

  useEffect(() => {
    const fechData = async () => {
      const response = await getAuthors();
      setDataAuthors(response);
    };
    fechData();
  }, []);

  // console.log(dataAuthors.datos);

  const router = useRouter();

  const handleCreate = () => {
    router.push("");
  };

  const handleEdit = () => {};
    
  return (
    <>
      <div>
        <div className="flex gap-1">
          <button className="bg-gray-500 gap-3 miButton" onClick={handleCreate}>
            add author
          </button>
          <button className="bg-gray-500 gap-3 miButton" onClick={handleEdit}>
            edit author
          </button>
        </div>
        <div className="authorContainer">
          {dataAuthors.datos && (
            <div>
              {dataAuthors.datos.map((author: authorProps) => (
                <>
                  <CardLibrary
                    id={String(author.authorId)}
                    key={author.authorId}
                    name={author.name}
                    nationality={author.nationality}
                    birthYear={author.birthYear}
                  />
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Authors;
