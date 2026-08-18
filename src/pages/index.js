import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const Systems = [
  {
    title: 'Guard',
    description: 'Система защиты: анти-абуз, фильтрация, логгирование.',
    to: '/guard/',
  },
  {
    title: 'Economy',
    description: 'Экономическая система: валюты, магазины, транзакции.',
    to: '/economy/',
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
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — документация систем`}
      description="Документация систем для Roblox: Guard, Economy и другие.">
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
