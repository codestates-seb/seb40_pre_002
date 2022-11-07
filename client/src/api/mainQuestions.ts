import axios from 'axios'
import { Question } from '../types/mainQuestions/questionTypes';

export const mainQuestionsAPIs = {
    getMainQuestions : async() => {
        const response = await axios.get<Question>(
            'https://pioneroroom.com/questionlist'
        )
        return response;
    },
};