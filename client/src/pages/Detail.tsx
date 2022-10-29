import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../api/axios';
import QuestionAnswer from '../components/Question/QuestionAnswer';
import QuestionAnswerForm from '../components/Question/QuestionAnswerForm';
import QuestionBody from '../components/Question/QuestionBody';
import QuestionHead from '../components/Question/QuestionHead';

export default function Detail() {
  // const { id } = useParams();
  // //const navigate = useNavigate();

  // const [post, setPost] = useState({});

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(`/questionList/${id}`);
  //     setPost(request.data);
  //   }
  //   fetchData();
  // }, [id]);

  // //데이터가 없다면
  // if (!post) return <div>...loading</div>;

  return (
    <DetailMain>
      
        <QuestionHead />
        <QuestionBody />
        <QuestionAnswer />
        <QuestionAnswerForm />
      
    </DetailMain>
  );
}

const DetailMain = styled.main`
  position: fixed;
  margin-top: 20px;
  margin-left: 20vw;
  width: 60vw;
`