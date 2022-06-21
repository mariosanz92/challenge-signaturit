import { Content, Item } from './Pagination.styled';

type PaginationProps = {
  pageNumbers: number[];
  paginate: (number: number) => void;
  currentPage: number;
};

const Pagination = ({ pageNumbers, paginate, currentPage }: PaginationProps) => {
  return (
    <Content>
      {pageNumbers.map((number: number) => (
        <Item key={number} onClick={() => paginate(number)} currentPage={currentPage === number}>
          {number}
        </Item>
      ))}
    </Content>
  );
};

export default Pagination;
