import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gestion Simplifiée',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Odyssea simplifie la gestion de votre établissement. Centralisez toutes vos opérations pour une gestion fluide et sans tracas.
      </>
    ),
  },
  {
    title: 'Optimisation des Ressources',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Maximisez l’efficacité de votre établissement grâce à des outils d’optimisation des ressources, des réservations à la gestion du personnel.
      </>
    ),
  },
  {
    title: 'Suivi en Temps Réel',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Restez informé en temps réel sur toutes les activités de votre établissement. Suivez les performances, les réservations et les besoins en un clin d'œil.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
