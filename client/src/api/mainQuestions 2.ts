import axios from 'axios'
import { Question } from '../types/mainQuestions/questionTypes';

export const mainQuestionsAPIs = {
    getMainQuestions : async() => {
        const response = await axios.get<Question>(
            'https://run.mocky.io/v3/632b1186-677a-422c-91b4-2ab588e9c0ad'
        )
        return response;
    },
};