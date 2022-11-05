import axios from 'axios';
import { getStorageToken } from '../utils/token/token';
interface deleResponseData {
  message: string;
}
export async function deleAns(
  id: string | undefined,
  answerId: string | undefined
) {
  try {
    const response = await axios.delete<deleResponseData>(
      `https://pioneroroom.com/auth/questionlist/${id}/del/${answerId}`,
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
