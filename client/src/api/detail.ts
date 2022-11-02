import axios from 'axios';
import { IDetailedQnA } from '../types/Detail/detailAnswerType';

export const detailAPIs = {
  getDetail: async (id: string | undefined) => {
    const response = await axios.get<IDetailedQnA>(
      `https://pioneroroom.com/questionlist/${id}`
    );
    console.log(response);
    return response;
    
  },
};
