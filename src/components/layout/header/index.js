import { Link } from 'gatsby';
import React from 'react';

import css from './index.module.css';

import vitalWatchLogo from '../../../images/vitalWatch-logo.svg';
import external from '../../../images/external.svg';

const nav = [{
  label : "Info",
  to    : "/info"
}, {
  label : "News",
  to    : "/news"
}, {
  label : "Patches",
  to    : '/patches'
}, {
  label : "Official Website",
  to    : 'https://vital.audio',
  icon  : external
}];

export default function Header({ siteTitle }) {
  return <header className={css.header}>
    <div className={css.content}>
      <h1 className={css.logo}>
        <Link to='/'>
          <img src={vitalWatchLogo} alt='Vital' />
        </Link>
      </h1>

      <nav className={css.nav}>
        {nav.map(({ label, to, icon }) =>
          <Link to={to}>
            {label}
            {icon ? <img src={icon}/> : null}
          </Link>
        )}
      </nav>
    </div>
  </header>;
};
