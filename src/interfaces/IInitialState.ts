import { IArticle } from './IArticle';

export default interface IInitialState {
  articles: IArticle[];
  filtered: null | IArticle[];
  selectedArticle: IArticle | null;
  selectedType: string;
}
