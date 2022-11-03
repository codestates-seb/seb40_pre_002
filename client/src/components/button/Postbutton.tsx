import React from 'react';

interface PostButtonProps {
  onClick: () => void;
  isDisable: boolean;
}

const PostButton = ({ onClick, isDisable }: PostButtonProps) => {
  return (
    <button onClick={onClick} disabled={isDisable}>
      {!isDisable ? ' post your answer' : 'wait'}
    </button>
  );
};
export default PostButton;
