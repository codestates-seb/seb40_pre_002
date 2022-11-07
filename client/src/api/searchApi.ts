import axios from 'axios';
import {
  Question,
  QuestionElement,
} from '../types/mainQuestions/questionTypes';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const searchApi = {
  getSearch: async (value: string) => {
    try {
      const res = await axios.get(
        BASE_URL + `/questionlist/search?keyword=${value}`
      );
      return res.data.data;
    } catch (error) {
      console.error(error);
    }
  },
};
