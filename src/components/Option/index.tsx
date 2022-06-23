import { ChangeEvent } from 'react';
import { TextType, Options, Type, Checkbox, Content, Text } from './Option.styled';

type OptionProps = {
  types: string[];
  selectedType: string;
  setSelectedType: (value: string) => void;
};

const Option = ({ types, setSelectedType, selectedType }: OptionProps) => {
  const setChosenType = (event: ChangeEvent<HTMLInputElement>) => {
    if (selectedType === event.target.value) {
      setSelectedType('');
    } else {
      setSelectedType(event.target.value);
    }
  };
  return (
    <>
      {!selectedType && <TextType>Choose a Type:</TextType>}
      <Options>
        {types.map((type) => (
          <Type key={type}>
            <Checkbox type="checkbox" onChange={setChosenType} value={type} checked={selectedType === type} />
            <Content>
              <Text>{type}</Text>
            </Content>
          </Type>
        ))}
      </Options>
    </>
  );
};

export default Option;
