export interface IDetailedQnA {
  data?: IQuestion;
  answers?: IAnswer[];
  pageInfo?: {
    page?: number;
    size?: number;
    totalElements?: number;
    totalPages?: number;
  };
}

export interface IQuestion {
  questionId?: number;
  questionTitle?: string;
  questionContents?: string;
  view?: string;
  vote?: number;
  createdAt?: string;
  modifiedAt?: string;
  user?: IQuestionUser;
}

export interface IQuestionUser {
  userId?: number;
  email?: string;
  userName?: string;
}

export interface IAnswer {
  answerId: string | undefined;
  answerContents: string;
  createdAt: string;
  modifiedAt: string;
  user: IQuestionUser;
}

export interface NewAnswer {
  answerId?: string | undefined;
  answerContents?: string;
}

export const initialAnswer = {
  answerContents: '',
};
