import axios from 'axios';
import { IAnswer } from '../types/Detail/detailAnswerType';
import { getStorageToken } from '../utils/token/token';

export async function postAns(id: string | undefined, answerContents: string) {
  try {
    const response = await axios.post<IAnswer>(
      `https://pioneroroom.com/auth/questionlist/${id}`,
      { answerContents },
      {
        headers: {
          Authorization: getStorageToken(),
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
