/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import Header from './header';
import css from './index.module.css';

export default function Layout({ children }) {

  return (
    <>
      <Header siteTitle={'Vital Watch'} />

      <main className={css.content}>
        {children}
      </main>

      <footer></footer>
    </>
  )
}
