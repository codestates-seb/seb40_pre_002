import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { detailAPIs } from '../api/detail';
import AnswerContent from '../components/Question/AnswerContent';
import AnswerForm from '../components/Question/AnswerForm';
import QuestionContent from '../components/Question/QuestionContent';
import QuestionTitle from '../components/Question/QuestionTitle';

export default function Detail() {
  const { id } = useParams();
  const [question, setQuestion] = useState<any>(null);
  const [answers, setAnswers] = useState<any>(null);

  useEffect(() => {
    detailAPIs.getDetail(id).then((res) => {
      const quest = res.data.Question;
      const ans = res.data.AnswerList;
      setQuestion(quest);
      setAnswers(ans);

      console.log('ans', res.data.Question);
      console.log('question', res.data.AnswerList);
    });
  }, []);

  return (
    <>
      <div>
        <QuestionTitle />
        <QuestionContent />
        <AnswerContent />
        <AnswerForm />
      </div>
    </>
  );
}
