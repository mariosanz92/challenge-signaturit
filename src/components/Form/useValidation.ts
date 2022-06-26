import { IArticle } from '../../interfaces/IArticle';

const useValidation = (newArticle: IArticle) => {
  const checkImageValidation = (urlImage: string) => {
    const isValidImage: string | boolean =
      urlImage && urlImage.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) !== null;

    if (!isValidImage && urlImage !== '') {
      return { message: 'Image field does not have a valid URL', status: true };
    } else {
      return { message: '', status: false };
    }
  };

  const checkValidation = (name: string): { message: string; status: boolean } => {
    let currentError: { message: string; status: boolean } = { message: '', status: false };

    const emptyNewArticle: boolean = Object.keys(newArticle).length === 0;
    if (emptyNewArticle) currentError = { message: 'Empty fields are not allowed', status: true };

    const types: {
      [index: string]: string[];
    } = {
      Simple: ['title', 'date'],
      Custom: ['title', 'text', 'date'],
      Advanced: ['title', 'text', 'image', 'date'],
    };

    types[name].forEach((field: string) => {
      if (newArticle[field as keyof IArticle] === '' || !newArticle.hasOwnProperty(field)) {
        currentError = { message: 'Empty fields are not allowed', status: true };
      } else if (field === 'image' && newArticle.image !== '') {
        currentError = checkImageValidation(newArticle.image!);
      }
    });

    return currentError;
  };
  return { checkValidation };
};

export default useValidation;
