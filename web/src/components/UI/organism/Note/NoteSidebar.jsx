import React, { useEffect, useState } from "react";
import { NoteCategory } from "../../molecules/Note";

export const NoteSidebar = ({ categories, className }) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setCategory(categories);
  }, [categories]);

  return (
    <div className={`flex flex-col ${className}`}>
      {category?.map((item) => (
        <NoteCategory title={item.title} items={item.items} />
      ))}
    </div>
  );
};
