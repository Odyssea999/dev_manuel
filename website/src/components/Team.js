// src/components/Team.js
import React from 'react';
import styles from './team.module.css';

const teamMembers = [
  {
    name: 'Florvil Elim',
    role: 'Développeur full-stack',
    email: 'elim.florvil@edu.esiee-it.fr',
    bio: 'Elim est un expert en développement web et a travaillé sur de nombreux projets innovants.',
    imgSrc: '/img/team/elim.jpeg',
  },
  {
    name: 'Cohen-Joly Florian',
    role: 'Développeur mobile',
    email: 'florian.cohen-joly@edu.esiee-it.fr',
    bio: 'Florian est un développeur mobile passionné par les nouvelles technologies. Il a travaillé sur de nombreux projets mobiles innovants.',
    imgSrc: '/img/team/flo.png',
  },
  {
    name: 'Adje Abed',
    role: 'Développeur mobile',
    email: 'abed.adje@edu.esiee-it.fr',
    bio: 'Abed est un développeur mobile passionné par les nouvelles technologies. Il a travaillé sur de nombreux projets mobiles innovants.',
    imgSrc: '/img/team/abed.jpeg',
  },
];

const Team = () => {
  return (
    <div className={styles.teamContainer}>
      {teamMembers.map((member, index) => (
        <div key={index} className={styles.teamMember}>
          <img src={member.imgSrc} alt={member.name} className={styles.teamImage} />
          <div className={styles.teamInfo}>
            <h3>{member.name}</h3>
            <p><strong>Rôle:</strong> {member.role}</p>
            <p><strong>Email:</strong> <a href={`mailto:${member.email}`}>{member.email}</a></p>
            <p>{member.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
