import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    overflow-x: scroll;
  }
  th,
  td {
    text-align: left;
    border-bottom: 0.063rem solid ${({ theme }) => theme.app.table.border};
    padding: 0.5rem;
  }

  tbody tr td {
    max-width: 12.5rem;
  }
`;
export default Table;
