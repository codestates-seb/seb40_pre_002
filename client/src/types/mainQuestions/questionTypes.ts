export interface Question {
  data: QuestionElement[];
  pageInfo: PageInfo;
}

export interface QuestionElement {
      questionId: number;
      questionTitle: string;
      questionContents: string;
      answers: number; // 추가해야함
      views: number;
      username: string;
      createdAt: string;
      modifiedAt: string;
      createdAnsweredAt: string;
      modifiedansweredAt: string;
}

export interface PageInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface NewQuestion {
  questionTitle: string;
  questionContents: string;
}