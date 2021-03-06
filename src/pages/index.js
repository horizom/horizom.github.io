import React from 'react';
import clsx from 'clsx';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function Buttons() {
  return (
    <div className={classnames(styles.heroButtons, 'name', 'margin-vert--md')}>
      <div className="col col--4">
        <Link
          className="button button--primary button--lg"
          to="/docs/framework"
        >
          Framework
        </Link>
      </div>
      <div className="col col--4">
        <Link
          className="button button--outline button--primary button--lg"
          to="#"
        >
          CMS (Comming Soon)
        </Link>
      </div>
    </div>
  )
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--light', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col text--left padding-top--lg">
            <h1 className="hero__title">A lightness PHP framework & CMS</h1>
            <p className="hero__subtitle">
              Horizom est un framework PHP & CMS léger qui vous aide à écrire rapidement des applications Web, des API et des backend simples mais puissants (pour les applications multiplateformes).
            </p>
            <Buttons />
          </div>
          <div className="col text--center">
            <img
              className={classnames(styles.heroBannerLogo, 'margin-vert--md')}
              src={'./img/logo.svg'}
              alt="Metro"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Horizon is a PHP lightness framework & CMS that helps you quickly write simple yet powerful web applications, APIs and backend (for cross-platform applications).">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
