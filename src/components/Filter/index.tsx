import ArticleContext from '../../context/Article/ArticleContext';
import { useContext, useEffect, useState } from 'react';
import { Container, Select, Option } from './Filter.styled';

const Filter = () => {
  const [options, setOptions] = useState<string[]>(['all articles']);
  const [searchValue, setSearchValue] = useState('all articles');

  const articlesContext = useContext(ArticleContext);
  const { filterArticles, clearFilter, articles } = articlesContext;

  const handleChange = (event: any): any => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue !== 'all articles') {
      filterArticles(searchValue);
    } else {
      clearFilter();
    }
  }, [searchValue]);

  useEffect(() => {
    articles.map(({ type }) => {
      if (!options.includes(type)) setOptions([...options, type]);
    });
  }, [options]);

  return (
    <Container>
      Filter by Type
      <Select onChange={handleChange} value={searchValue}>
        {options &&
          options.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
      </Select>
    </Container>
  );
};

export default Filter;
