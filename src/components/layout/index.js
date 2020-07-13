/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import Header from './header';
import ExtLink from '../extLink';

import css from './index.module.css';

export default function Layout({ children }) {

  return (
    <div className={css.layout}>
      <Header siteTitle={'Vital Watch'} />

      <main className={css.content}>
        {children}
      </main>

      <footer className={css.footer}>
        <p className={css.content}>
          Like or hate the site? Let me know: <ExtLink href="https://twitter.com/vitalwatchinfo">@vitalwatchinfo</ExtLink>
        </p>
      </footer>
    </div>
  )
}
