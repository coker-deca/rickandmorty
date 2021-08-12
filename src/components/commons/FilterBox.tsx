import React, { FC } from "react";
import { Form, Input } from "./style";

interface SearchProps {
  keyword: string;
  setKeyword: (value: string) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SearchBar: FC<SearchProps> = ({ keyword, setKeyword, handleClick }) => {
  return (
    <Form>
      <label htmlFor="query">
        Filters:
        <Input
          type="search"
          name="query"
          placeholder={"search by name"}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </label>
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleClick(event)}
      >
        Filter
      </button>
    </Form>
  );
};

export default SearchBar;
