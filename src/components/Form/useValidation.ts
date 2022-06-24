import { useEffect, useState } from 'react';

const useValidation = (selectedType: string, newArticle: any) => {
  const [error, setError] = useState<{ message: string; status: boolean }>({ message: '', status: true });

  useEffect(() => {
    setError({ message: '', status: true });
  }, [selectedType]);

  const checkImageValidation = (urlImage: string) => {
    const isValidImage: string | boolean =
      urlImage && urlImage.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) !== null;

    if (!isValidImage && urlImage !== '') {
      setError({ message: 'Image field does not have a valid URL', status: true });
    }
  };

  const checkValidation = (name: string): void => {
    setError({ message: '', status: false });

    const emptyNewArticle: boolean = Object.keys(newArticle).length === 0;
    emptyNewArticle && setError({ message: 'Empty fields are not allowed', status: true });

    const types: {
      [index: string]: string[];
    } = {
      Simple: ['title', 'date'],
      Custom: ['title', 'text', 'date'],
      Advanced: ['title', 'text', 'image', 'date'],
    };

    types[name].forEach((field) => {
      if (newArticle[field] === '' || !newArticle.hasOwnProperty(field)) {
        setError({ message: 'Empty fields are not allowed', status: true });
      } else if (field === 'image' && newArticle.image !== '') {
        checkImageValidation(newArticle.image);
      }
    });
  };
  return { error, checkValidation };
};

export default useValidation;
