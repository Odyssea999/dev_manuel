import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Planification Simplifiée',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        GoAway simplifie la planification de vos voyages. Créez et organisez vos itinéraires en toute simplicité pour des aventures sans stress.
      </>
    ),
  },
  {
    title: 'Conseils et Recommandations',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Bénéficiez de conseils et recommandations personnalisés pour chaque destination. Explorez des lieux uniques et découvrez des expériences authentiques.
      </>
    ),
  },
  {
    title: 'Connecté et Informé',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Restez connecté et informé pendant vos voyages grâce à GoAway. Accédez à des informations utiles, telles que la météo locale et les conseils de sécurité, où que vous soyez.
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
