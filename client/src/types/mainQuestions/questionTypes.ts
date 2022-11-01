export interface Question {
    Questions: QuestionElement[];
    pageInfo: PageInfo;
  }
  
  export interface QuestionElement {
    id: number;
    title: string;
    answers: number;
    views: number;
    username: string;
    createdAt: string;
    modifiedAt: string;
    answeredAt: string;
  }
  
  export interface PageInfo {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
  }

  export interface NewQuestion {
    title: string;
    contents: string;
  }