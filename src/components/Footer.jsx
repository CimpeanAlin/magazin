import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
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
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Magazin hand-made</Logo>
        <Desc>
        Descoperiți frumusețea în fiecare detaliu la Hand-Made Boutique - magazinul online pentru produse handmade de înaltă calitate. 
        Bucurați-vă de experiența de cumpărături unică și transformați fiecare achiziție într-o poveste de neuitat.
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
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Acasă</ListItem>
          <ListItem>Noutăți</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Promoții</ListItem>
          <ListItem>Comenzi și Returnări</ListItem>
          <ListItem>Termeni și condiții</ListItem>
          <ListItem>Politica de confidențialitate</ListItem>
          <ListItem>Cookies</ListItem>
          <ListItem>A.N.P.C</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Cluj-Napoca, Județul Cluj
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> 0040 789 564 123
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> handmadeboutique@contact.ro
        </ContactItem>
        <ContactItem> Plata cu cardul</ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
