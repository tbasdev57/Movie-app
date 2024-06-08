import React from "react";

export const SearchTextContext = React.createContext({
  searchText: "",
  setSearchText: (searchText: string) => {},
});

export default function SearchTextContextProvider(props: {
  children: React.ReactNode;
}) {
  const [searchText, setSearchText] = React.useState("");
  return (
    <SearchTextContext.Provider value={{ searchText, setSearchText }}>
      {props.children}
    </SearchTextContext.Provider>
  );
}
