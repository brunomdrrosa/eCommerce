import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3094738:1623076051/Selec-o-Brasileira.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=8ded0fa")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CRIAR UMA NOVA CONTA</Title>
        <Form>
          <Input placeholder="Nome" />
          <Input placeholder="Sobrenome" />
          <Input placeholder="Nome de usuário" />
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
          <Input placeholder="Confirme a sua senha" />
          <Agreement>
            Ao criar uma conta, autorizo o processamento dos meus dados pessoais
            de acordo com a <b>POLÍTICA DE PRIVACIDADE</b>
          </Agreement>
          <Button>CRIAR CONTA</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
