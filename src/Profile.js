import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import avatar from '../src/eu.jpeg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  background-color: #87CEEB;
  border-radius: 10px;
  margin-top:10%;
  width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
  text-align: center; /* Adicionado para centralizar o avatar */
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border: solid 2px blue;
  border-radius: 50%;
  margin-bottom: 20px; /* Alterado para 20px */
`;


const Name = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #0000FF;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Bio = styled.p`
  font-size: 18px;
  text-align: center;
  color: #4B0082;
  margin-bottom: 20px;
`;

const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Skill = styled.div`
  background-color: #0077b5;
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  margin: 5px;
  font-size: 14px;
  font-weight: bold;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialLink = styled.a`
  margin: 0 10px;
`;

const SocialLinkIcon = styled(FontAwesomeIcon)`
  color: #000;
  font-size: 24px;

  &:hover {
    color: #0077b5;
  }
`;



function Profile() {
return (
<Container>
  <Card>
<Avatar src={avatar} alt="My Profile Picture" />
<Name>WILTON GONÇALVES</Name>
<Bio>
  <strong>
  Olá, eu sou um desenvolvedor Web<br/>
   apaixonado por criar coisas incríveis na internet.<br/>
    Estou sempre aprendendo novas tecnologias e<br/> amo trabalhar em projetos desafiadores.
  </strong>
</Bio>
<SkillsContainer>
<Skill>HTML</Skill>
<Skill>CSS</Skill>
<Skill>JavaScript</Skill>
<Skill>React.js</Skill>
<Skill>WordPress</Skill>
</SkillsContainer>
<SocialContainer>
<SocialLink href="https://www.facebook.com/WiltonGoncalvesSantana/" target="_blank">
<SocialLinkIcon icon={faFacebook} />
</SocialLink>
<SocialLink href="https://www.instagram.com/will_gons/" target="_blank">
<SocialLinkIcon icon={faInstagram} />
</SocialLink>
<SocialLink href="https://github.com/Wilton-compactcode" target="_blank">
<SocialLinkIcon icon={faGithub} />
</SocialLink>
<SocialLink href="https://www.linkedin.com/in/wilton-goncalves-santana-dev-web/" target="_blank">
<SocialLinkIcon icon={faLinkedin} />
</SocialLink>
<SocialLink href="https://api.whatsapp.com/send?phone=5511980660741&text=Ol%C3%A1,%20eu%20gostaria%20de%20um%20or%C3%A7amento" target="_blank">
<SocialLinkIcon icon={faWhatsapp} />
</SocialLink>
</SocialContainer>
</Card>
</Container>
);
};

export default Profile;