export interface IArticle {
  title: string;
  text?: string;
  type: string;
  image?: string;
  date: string;
  id: string;
}

export const emptyArticle = { title: '', text: '', date: '', id: '', type: '' };
