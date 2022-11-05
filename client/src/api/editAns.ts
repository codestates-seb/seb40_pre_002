import axios from 'axios';
import { IAnswer } from '../types/Detail/detailAnswerType';
import { getStorageToken } from '../utils/token/token';

export async function editAns(
  paramsId: string | undefined,
  ansId: string | undefined,
  answerContents: string | undefined
) {
  try {
    const response = await axios.patch<IAnswer>(
      `https://pioneroroom.com/auth/questionlist/${paramsId}/edit`,
      { answerId: Number(ansId), answerContents },
      {
        headers: {
          Authorization: getStorageToken(),
        },
      }
    );
    return response.status;
  } catch (err) {
    console.error(err);
  }
}
