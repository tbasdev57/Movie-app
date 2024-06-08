import { Search } from '@mui/icons-material';
import React, { useContext } from 'react'
import { SearchTextContext } from '../../Contexts/SearchTextContextProvider';


export default function SearchBar() {
  const [inputValue, setInputValue] = React.useState("");
  const {setSearchText} = useContext(SearchTextContext);

  function handleChange(event : React.ChangeEvent<HTMLInputElement>) {
      const value = event.target.value;
      setInputValue(value);
  }

  function handleClick() { 
      setSearchText(inputValue);
  }

  return (
      <div>
          <input type="text" 
          placeholder="Rechercher"
          onChange={handleChange}
          ></input>
          <button
          onClick={handleClick}>
          <Search/>
          </button>
      </div>
  );
}
