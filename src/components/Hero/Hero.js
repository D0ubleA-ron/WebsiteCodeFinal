import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Welcome To <br/>
      My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Aaron Deo, I am a second year UBC student majoring in Computer Science with a minor in Data Sciences . This is my personal website to showcase personal projects I am working on and/or completed!
      </SectionText>
      <Button onClick={() => window.location = "mailto:aarondeo30@gmail.com"}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;