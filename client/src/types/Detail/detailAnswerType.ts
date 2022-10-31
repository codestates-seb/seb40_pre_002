export interface IDetailedQnA {
  Question?: IQuestion;
  AnswerList?: IAnswer[];
  pageInfo?: {
    page?: number;
    size?: number;
    totalElements?: number;
    totalPages?: number;
  };
}

export interface IQuestion {
  title?: string;
  createdAt?: string;
  modifiedAt?: string;
  views?: string;
  contents?: string;
  user?: IQuestionUser;
}

export interface IQuestionUser {
  username?: string;
  email?: string;
}

export interface IAnswer {
  contents?: string;
  views?: number;
  createdAt?: string;
  modifiedAt?: string;
  user?: IQuestionUser;
}
