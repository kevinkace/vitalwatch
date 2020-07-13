import { Link } from 'gatsby';
import React from 'react';

import css from './index.module.css';

import ExtLink from '../../extLink';

import vitalWatchLogo from '../../../images/vitalWatch-logo.svg';
import externalIcon from '../../../images/external.svg';

const nav = [{
  label : "Info",
  to    : "#info"
}, {
  label : "Tweets",
  to    : '#tweets'
}, {
  label : "Videos",
  to    : '#videos'
// }, {
//   label : "Patches",
//   to    : '/patches'
}, {
  label    : "Official Website",
  to       : 'https://vital.audio',
  external : true
}];

export default function Header({ siteTitle }) {
  return <header className={css.header}>
    <div className={css.content}>
      <h1 className={css.logo}>
        <Link to='/'>
          <img src={vitalWatchLogo} alt='VitalWatch' />
        </Link>
      </h1>

      <nav className={css.nav}>
        {nav.map(({ label, to, external }) =>
          external ?
          <ExtLink href={to} key={label} className={css.external}>{label}</ExtLink> :
          <Link to={to} key={label}>
            {label}
          </Link>
        )}
      </nav>
    </div>
  </header>;
};
