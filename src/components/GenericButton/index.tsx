import Button from './GenericButton.styled';

type GenericButtonProps = {
  text: string;
  handleClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  color?: string;
  className?: any;
};

const GenericButton = ({ text, handleClick, type, color, className }: GenericButtonProps) => (
  <Button type={type} onClick={handleClick} color={color || '#cdcdcd'} className={className}>
    {text}
  </Button>
);

export default GenericButton;
