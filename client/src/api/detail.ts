import axios from 'axios';
import { IDetailedQnA } from '../types/Detail/detailAnswerType';

export const detailAPIs = {
  getDetail: async (id: string | undefined) => {
    const response = await axios.get<IDetailedQnA>(
      `https://run.mocky.io/v3/5ebb3b71-542c-4d2a-badb-56d1b6cf3046`
    );
    return response;
  },
};
