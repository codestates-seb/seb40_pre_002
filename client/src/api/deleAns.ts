import axios from 'axios';
import { IAnswer } from '../types/Detail/detailAnswerType';
import { getStorageToken } from '../utils/token/token';
interface deleResponseData {
  message: string;
}
export async function deleAns(id: string | undefined) {
  try {
    const response = await axios.delete<deleResponseData>(
      `https://pioneroroom.com/auth/questionlist/del/${id}`,
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
