import styled from "styled-components";
import Navbar from "../components/Navbar";
import Oferta from "../components/Oferta";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Oferta />
      <Title>Uniformes</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar produtos:</FilterText>
          <Select>
            <Option disabled selected>
              Clubes
            </Option>
            <Option>Nacionais</Option>
            <Option>Internacionais</Option>
            <Option>Seleções</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Tamanho
            </Option>
            <Option>P</Option>
            <Option>M</Option>
            <Option>G</Option>
            <Option>GG</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Ordenar produtos:</FilterText>
          <Select>
            <Option selected>Novos</Option>
            <Option>Menor preço</Option>
            <Option>Maior preço</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;