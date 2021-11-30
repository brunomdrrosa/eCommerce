import React from "react";
import styled from "styled-components";
import { ShoppingCartOutlined, Search } from "@material-ui/icons";
// import Search from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
`;

const Left = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>PT-BR</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:"gray", fontSize: 16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LOJA DO BRUNO</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTRAR</MenuItem>
          <MenuItem>LOGAR</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
