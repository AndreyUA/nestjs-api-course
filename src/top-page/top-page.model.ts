export enum TopLevelCategory {
  COURSE = 'COURSE',
  SERVICES = 'SERVICES',
  BOOKS = 'BOOKS',
  PRODUCTS = 'PRODUCTS',
}

export class TopPageModel {
  firstCategory: TopLevelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };
  advantages: Array<{
    title: string;
    description: string;
  }>;
  seoText: string;
  tagsTitle: string;
  tags: Array<string>;
}