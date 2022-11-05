import React, { useState } from 'react';
import styled from 'styled-components';
import { editAns } from '../../api/editAns';
import { IAnswer } from '../../types/Detail/detailAnswerType';
import { EditButton } from '../button/Postbutton';

interface EditFormProps {
  paramsId: string | undefined;
  ansId: string | undefined;
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAnswerList: React.Dispatch<React.SetStateAction<IAnswer[]>>;
  answerContent: string;
}

const EditForm = ({
  paramsId,
  ansId,
  setEditOpen,
  setAnswerList,
  answerContent,
}: EditFormProps) => {
  const [editAnswer, setEditAnswer] = useState(answerContent);

  const [isDisable, setIsDisable] = useState(false);

  const getContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target; //이부분
    setEditAnswer(value);
  };

  const handleEditClick = async () => {
    try {
      setIsDisable(true);
      const response = await editAns(paramsId, ansId, editAnswer);
      let arr: IAnswer[];
      setAnswerList((prev) => {
        arr = prev;
        return prev.map((e) => {
          if (e?.answerId === ansId)
            return { ...e, answerContents: editAnswer };
          return e;
        });
      });
      if (response !== 200) {
        setAnswerList((prev) => {
          return arr;
        });
      }
    } catch (err) {
      console.error(err);
    }
    setEditAnswer('');
    setEditOpen(false);
    setIsDisable(false);
  };
  const handleCancel = () => {
    setEditOpen(false);
  };

  return (
    <Answerform>
      <p>Answer</p>
      <Form>
        <textarea
          onChange={getContent}
          name="answerContents"
          value={editAnswer}
        />
        <Div>
          <EditButton onClick={handleEditClick} isDisable={isDisable} />
          <Button onClick={handleCancel}>Cancel</Button>
        </Div>
      </Form>
    </Answerform>
  );
};
const Answerform = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  padding: 5px 20px;
  p {
    font-size: 19px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
      'Segoe UI', 'Liberation Sans', sans-serif;
  }
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
    height: 150px;
  }
`;
const Div = styled.div`
  display: flex;
`;
const Button = styled.button`
  text-decoration: none;
  font-size: 16px;
  font-weight: 800;
  width: 80px;
  height: 60px;
  display: inline-flex;
  color: hsl(206, 100%, 52%);
  margin-top: 5px;
  align-items: center;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: white;
  margin-left: 10px;
  color: #6a737c;
`;
export default EditForm;
