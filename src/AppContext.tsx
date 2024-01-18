"use client";
import React from "react";
import { createContext, useState } from "react";

type AppContextType = {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  paginationPage: number;
  setPaginationPage: React.Dispatch<React.SetStateAction<number>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export const DataContext = createContext({} as AppContextType);

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [sortBy, setSortBy] = useState("points");
  const [paginationPage, setPaginationPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <DataContext.Provider
      value={
        {
          sortBy,
          setSortBy,
          paginationPage,
          setPaginationPage,
          searchTerm,
          setSearchTerm,
        } as AppContextType
      }
    >
      {children}
    </DataContext.Provider>
  );
};
