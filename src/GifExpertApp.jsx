import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Nanatsu no Taizai",
  ]);

  const onAddCategory = () => {
    setCategories([...categories, 'Jujutsu'])
  };

  return (
    <>
      <h1>GifExpertApp</h1>

    <AddCategory/>

      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      
    </>
  );
};
