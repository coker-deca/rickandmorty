import React, { FC } from "react";
import IconTextInput from "../ui/IconInput";
import { Form, Input } from "./style";

interface SearchProps {
  keyword: string;
  setKeyword: (value: string) => void;
  handleSelectChange: (value: any) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SearchBar: FC<SearchProps> = ({ keyword, setKeyword, handleClick, handleSelectChange }) => {
  const getAllStatus = ['Dead', 'Alive', 'Unknown'];
  const getAllSpecies = ['Humans', 'Dog', 'Others'];
  const getAllGender = ['Female', 'Male', 'Genderless', 'Unknown'];

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
      <div className='row'>
        <IconTextInput title="Status" handleSelectChange={handleSelectChange} options={getAllStatus} />
        <IconTextInput title="Species" handleSelectChange={handleSelectChange} options={getAllSpecies} />
        <IconTextInput title="Gender" handleSelectChange={handleSelectChange} options={getAllGender} />
      </div>
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          handleClick(event)
        }
      >
        Filter
      </button>
    </Form>
  );
};

export default SearchBar;
