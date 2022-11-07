import React from 'react';
import styled from 'styled-components';
interface PostButtonProps {
  onClick: () => void;
  isDisable: boolean;
}

export const PostButton = ({ onClick, isDisable }: PostButtonProps) => {
  return (
    <Button onClick={onClick} disabled={isDisable}>
      {!isDisable ? ' post your answer' : 'wait'}
    </Button>
  );
};

export const EditButton = ({ onClick, isDisable }: PostButtonProps) => {
  return (
    <Button onClick={onClick} disabled={isDisable}>
      {!isDisable ? ' save edit' : 'wait'}
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap !important;
  padding: 0.9em;
  margin-top: 15px;
  border-radius: 3px;
  border: 1px solid transparent;
  outline: none;
  color: hsl(0, 0%, 100%);
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  width: 138px;
  height: 37px;
  background-color: hsl(206, 100%, 52%);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  &:hover {
    color: white;
    background-color: hsl(206, 100%, 40%);
  }
`;
