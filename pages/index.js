import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { Skills, Projects, Experiences } from '../components/Work';
import { Footer, Contact } from '../components/Footer';
import { about, contact, experiences, intro, navigation, projects, SEO, work } from '../config/config';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <About
        title={about.title}
        description={about.description}
      />
      <Experiences
        title={experiences.title}
        experience_card={experiences.experience_card}
      />
      <Skills
        title={work.title}
        skill_bar={work.skill_bar}
      />

      <Projects
        title={projects.title}
        cards={projects.cards}
      />
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      {/* <Footer /> */}
    </Fragment>
  );
}
