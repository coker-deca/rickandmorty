import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

import { Container, InputContainer } from './styles';

type InputType = {
    title: string;
    handleSelectChange: (title: string, value: string) => void;
  options?: string[];
};

const IconTextInput: React.FC<InputType> = ({
    title,
    handleSelectChange,
  options,
}) => (
  <Container>
    <label>
      <span className='title'>{title}</span>
      <InputContainer>
        <div>
          <select className="input" onChange={(e)=>handleSelectChange(title, e.target.value.toLowerCase())}>
            {options?.map((option: string, index: number) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FaCaretDown className="selectIcon" />
        </div>
      </InputContainer>
    </label>
  </Container>
);

export default IconTextInput;
