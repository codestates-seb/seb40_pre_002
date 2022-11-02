import axios from 'axios';
import { NewQuestion } from '../../types/mainQuestions/questionTypes';
import { getStorageToken } from '../../utils/token/token';

export async function postquestions (title:string, content:string) {

    try{
        const response = await axios.post<number>(
            'https://pioneroroom.com/auth/questionlist',
            {
                questionTitle: title,
                questionContents: content
            },
            {
                headers: {
                    Authorization: getStorageToken()
                }
            });

        return response.data;

    }

     catch(err) {
        alert(err);
    }
}


// export const mainQuestionsAPIs = {
//     getMainQuestions : async() => {
//         const response = await axios.get<Question>(
//             'https://pioneroroom.com/questionlist'
//         )
//         return response;
//     },
// };

// catch (err) {
//         alert(err);
//         navigate(`/`);
//     }
