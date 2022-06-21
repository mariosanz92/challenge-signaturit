import ArticleContext from '../../context/Article/ArticleContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { Dropdown, SelectedItem, Content, Item, Arrow } from './Filter.styled';

const Filter = () => {
  const [options, setOptions] = useState<string[]>(['all articles']);
  const [searchType, setSearchType] = useState('all articles');
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const articlesContext = useContext(ArticleContext);
  const { filterArticles, clearFilter, articles } = articlesContext;

  const handleClick = (type: string): void => {
    setSearchType(type);
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    if (searchType !== 'all articles') {
      filterArticles(searchType);
    } else {
      clearFilter();
    }
  }, [searchType]);

  useEffect(() => {
    articles.map(({ type }) => {
      if (!options.includes(type)) setOptions([...options, type]);
    });
  }, [options]);

  return (
    <Dropdown>
      <SelectedItem onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
        {searchType}
        <Arrow />
      </SelectedItem>
      <Content isDropdownVisible={isDropdownVisible}>
        {options.map(
          (option) =>
            option !== searchType && (
              <Item key={option} onClick={() => handleClick(option)}>
                {option}
              </Item>
            )
        )}
      </Content>
    </Dropdown>
  );
};

export default Filter;
