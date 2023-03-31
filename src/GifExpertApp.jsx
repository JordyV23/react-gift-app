import { useState } from "react";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Nanatsu no Taizai']);

  return (
    <>
      <h1>GifExpertApp</h1>

      <ol>
        {categories.map( category => {
          return <li key={category}>{category}</li>
        })
        }
      </ol>
    </>
  );
};
