import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I worked with a range of technologies in the software development world. From back-end to design.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size = '3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js/JavaScript, CSS, HTML
          </ListParagraph>
        </ListContainer> 
      </ListItem>
      <ListItem>
        <DiFirebase size = '3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Python, Java
          </ListParagraph>
        </ListContainer> 
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
