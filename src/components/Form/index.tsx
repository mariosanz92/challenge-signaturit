import { MutableRefObject, useContext, useEffect, useId, useRef, useState } from 'react';
import ArticleContext from '../../context/Article/ArticleContext';
import IArticle from '../../interfaces/IArticle';
import GenericButton from '../GenericButton';
import Option from '../Option';
import { FormContainer, Input, Textarea, Date, ErrorText, Label } from './Form.styled';
import useValidation from './useValidation';

type FormProps = {
  types: string[];
  onSubmit: () => void;
};

const Form = ({ types, onSubmit }: FormProps) => {
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;
  const id = useId();
  const [selectedType, setSelectedType] = useState<string>('');
  const [submit, setSubmit] = useState<boolean>(false);
  const [newArticle, setNewArticle] = useState<IArticle | {}>({});
  const isAdvanced: boolean = selectedType === 'Advanced';
  const isNotSimple: boolean = selectedType !== 'Simple';

  const { addArticle } = useContext(ArticleContext);

  const { checkValidation, error } = useValidation(selectedType, newArticle);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewArticle({
      ...newArticle,
      id,
      type: selectedType,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    checkValidation(selectedType);

    setSubmit(true);
  };

  useEffect(() => {
    if (selectedType !== '') {
      setNewArticle({});
      formRef.current.reset();
    }
  }, [selectedType]);

  useEffect(() => {
    if (error.status === false) {
      addArticle(newArticle);
      onSubmit();
    }
  }, [submit, error]);

  return (
    <>
      <Option setSelectedType={setSelectedType} selectedType={selectedType} types={types} />
      {error.message && <ErrorText>{error.message}</ErrorText>}
      {selectedType && (
        <FormContainer ref={formRef} onSubmit={handleSubmit}>
          <Input type="text" placeholder="Title" name="title" onChange={handleChange} />
          {isAdvanced && (
            <>
              <Label>
                Only URL are allowed
                <Input type="text" placeholder="Url Image" name="image" onChange={handleChange} />
              </Label>
            </>
          )}

          {isNotSimple && <Textarea placeholder="text" name="text" onChange={handleChange} />}

          <Date type="date" placeholder="Nombre" name="date" onChange={handleChange} />
          <GenericButton text="Create Article" type="submit" />
        </FormContainer>
      )}
    </>
  );
};

export default Form;
