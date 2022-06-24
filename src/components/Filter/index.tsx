import ArticleContext from '../../context/Article/ArticleContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { Dropdown, SelectedItem, Content, Item, Arrow } from './Filter.styled';
import useOnClickOutside from '../../useOnClickOutside';

const Filter = () => {
  const [options, setOptions] = useState<string[]>(['all articles']);
  const ref = useRef<any>();

  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const articlesContext = useContext(ArticleContext);
  const { filterArticles, clearFilter, articles, selectedType, setType } = articlesContext;

  useOnClickOutside(ref, () => setIsDropdownVisible(false));

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
      <Content ref={ref} isDropdownVisible={isDropdownVisible}>
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
