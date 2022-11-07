import axios from 'axios';
import { getStorageToken } from '../utils/token/token';

export interface VoteRes {
  vote: number;
  voteUpUsers: [number];
  voteDownUsers: [number];
}

export async function vote(paramsId: string | undefined, vote: number) {
  try {
    const response = await axios.post<VoteRes>(
      `https://pioneroroom.com/auth/questionlist/${paramsId}/vote`,
      {
        vote: vote,
      },
      {
        headers: {
          Authorization: getStorageToken(),
        },
      }
    );
    return response;
  } catch (err) {
    console.error(err);
  }
}
