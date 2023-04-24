import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Nanatsu no Taizai",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {
        categories.map((category) => (
        <GiftGrid key={category} category={category} />
        ))
      }
    </>
  );
};
