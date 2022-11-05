import axios from 'axios';
import { IDetailedQnA } from '../types/Detail/detailAnswerType';

export const detailAPIs = {
  getDetail: async (id: string | undefined) => {
    //
    try {
      const response = await axios.get<IDetailedQnA>(
        `https://pioneroroom.com/questionlist/${id}`
      );
      console.log(response);
      if (!response) throw new Error('getDetail response is undefined');
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
