import Container from './Label.styled';

type LabelProps = {
  text: string;
  color?: string;
};

const Label = ({ text, color }: LabelProps) => <Container color={color}>{text}</Container>;

export default Label;
