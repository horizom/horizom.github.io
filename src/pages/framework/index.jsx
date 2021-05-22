import React from 'react';
import clsx from 'clsx';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.css';

export default function index() {
    const { siteConfig } = useDocusaurusContext();
    
    return (
    <Layout
        title={`Horizom Framework - ${siteConfig.title}`}
        description="Horizon is a PHP lightness framework that helps you quickly write simple yet powerful web applications, APIs."
    >
        <header className={clsx('hero hero--light', styles.heroBanner)}>
            <div className="container">
                <div className="row">
                <div className="col text--left padding-top--lg">
                    <h1 className="hero__title">A PHP lightness framework</h1>
                    <p className="hero__subtitle">
                    Horizon is a PHP lightness framework that helps you quickly write simple yet powerful web applications, APIs.
                    </p>
                    <Link
                        className="button button--primary button--lg"
                        to="/docs/framework"
                    >
                        Get Started
                    </Link>
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
        <main>
            <section className={styles.features}>
                <div className="container">
                    
                </div>
            </section>
        </main>
    </Layout>
    );
}
