import clsx from 'clsx';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const Systems = [
  {
    title: 'zen.player',
    description: 'Система управления игроками для Roblox.',
    to: '/zen-player/',
  },
];

function SystemCard({title, description, to}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <Link to={to} className={styles.card}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </Link>
    </div>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <ThemedImage
          sources={{
            light: useBaseUrl('img/zen-full-light.svg'),
            dark: useBaseUrl('img/zen-full-dark.svg'),
          }}
          className={styles.heroLogo}
          alt="zen"
        />
        <p className="hero__subtitle">Документация систем zen для Roblox</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="qwertifyed Docs — документация систем"
      description="Документация систем zen для Roblox.">
      <HomepageHeader />
      <main>
        <section className={styles.systems}>
          <div className="container">
            <div className="row">
              {Systems.map((props, idx) => (
                <SystemCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
