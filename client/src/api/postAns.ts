import axios from 'axios';
import { NewAnswer } from '../types/Detail/detailAnswerType';
import { getStorageToken } from '../utils/token/token';

interface ansRes {
  data: number;
}

export async function postAns(
  id: string | undefined,
  answerContents: NewAnswer
) {
  try {
    const response = await axios.post<ansRes>(
      `https://pioneroroom.com/auth/questionlist/${id}`,
      answerContents,
      {
        headers: {
          Authorization: getStorageToken(),
        },
      }
    );
    console.log('post ans data', response);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
