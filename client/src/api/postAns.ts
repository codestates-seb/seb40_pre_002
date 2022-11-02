import axios from 'axios';
import { NewAnswer } from '../types/Detail/detailAnswerType';
import { getStorageToken } from '../utils/token/token';

export async function postAns(
  id: string | undefined,
  answerContents: NewAnswer
) {
  try {
    const res = await axios.post(
      `https://pioneroroom.com/auth/questionlist/${id}`,
      answerContents,
      {
        headers: {
          Authorization: getStorageToken(),
        },
      }
    );
    return res;
  } catch (err) {
    console.error(err);
  }
}
