import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 70%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LOJA DO BRUNO</Logo>
        <Desc>
          Fundada em Dezembro de 2021, nossa loja vende uniformes de times de
          futebol, incluindo camisas de times nacionais e internacionais, também
          realizamos a venda de camisas de seleções de futebol, navegue no nosso
          site e garanta agora mesmo a camisa do seu time pelo menor preço.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Úteis</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Carrinho</ListItem>
          <ListItem>Clubes Nacionais</ListItem>
          <ListItem>Clubes Internacionais</ListItem>
          <ListItem>Uniformes de Seleções</ListItem>
          <ListItem>Minha Conta</ListItem>
          <ListItem>Rastreamento de pedido</ListItem>
          <ListItem>Lista de Desejos</ListItem>
          <ListItem>Termos</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contato</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Porto Alegre, RS
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +55 51 99999-9999
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contato@lojadobruno.com
        </ContactItem>
        <Payment src="https://loja.daten.com.br/image/catalog/forma%20de%20pagamento%20daten%20-%20logos-cartoes_.jpg" />
      </Right>
    </Container>
  );
};

export default Footer;
