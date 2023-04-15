import { useState } from "react"

export const AddCategory = () => {

  const [inputValue, setinputValue] = useState("One Punch")

  const onInputChange = (event) => {

    setinputValue(event.target.value)
  }

  const onSubmit =(event) =>{
    event.preventDefault();
  }


  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Buscar gifs" 
        value={inputValue}
        onChange={onInputChange}
      />
    </form>

  )
}
