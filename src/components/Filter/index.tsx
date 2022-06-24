import ArticleContext from '../../context/Article/ArticleContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { Dropdown, SelectedItem, Content, Item, Arrow } from './Filter.styled';

const Filter = () => {
  const [options, setOptions] = useState<string[]>(['all articles']);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const articlesContext = useContext(ArticleContext);
  const { filterArticles, clearFilter, articles, selectedType, setType } = articlesContext;

  const handleClick = (type: string): void => {
    setType(type);
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    if (!selectedType) {
      setType('all articles');
    }
  }, []);

  useEffect(() => {
    if (selectedType !== 'all articles') {
      filterArticles(selectedType);
    } else {
      clearFilter();
    }
  }, [selectedType]);

  useEffect(() => {
    articles.map(({ type }) => {
      if (!options.includes(type)) setOptions([...options, type]);
    });
  }, [options]);

  return (
    <Dropdown>
      <SelectedItem onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
        {selectedType}
        <Arrow />
      </SelectedItem>
      <Content isDropdownVisible={isDropdownVisible}>
        {options.map(
          (option) =>
            option !== selectedType && (
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
