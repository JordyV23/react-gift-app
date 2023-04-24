import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useState } from "react";

export const GiftGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages  = async() => {
    const newImages = await getGifs(category)
    setImages(newImages)
  }


  useEffect(() => {
    getImages()
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <ol>
        {
            images.map(image=>(
                <li key={image.id}>{image.title}</li>
            ))
        }
        
      </ol>
    </>
  );
};
