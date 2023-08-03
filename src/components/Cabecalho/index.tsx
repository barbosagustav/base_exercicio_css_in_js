import styled from 'styled-components';

const StyledCabecalho = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`;

const Cabecalho = () => (
  <StyledCabecalho>
    <h1>EBAC Jobs</h1>
  </StyledCabecalho>
);

export default Cabecalho;
