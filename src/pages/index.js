import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import css from './index.module.css';
import Tweet from '../components/tweet/tweet';

function ExLink({ href, children }) {
  return <a href={href} target='_blank' rel='noreferrer'>{children}</a>;
}

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />

    <div className={css.intro}>
      <p>This is an unofficial fan site dedicated to Vital, an upcoming synth by Matt Tytel - the maker of <ExLink href='https://tytel.org/helm/'>Helm</ExLink>.</p>

      <p>Official website <ExLink href='https://vital.audio'>vital.audio</ExLink>, Twitter <ExLink href='https://twitter.com/matttytel/'>@matttytel</ExLink>, <ExLink href='https://discord.gg/dpZxr98'>Discord</ExLink>, and <ExLink href='https://www.youtube.com/channel/UCB-pG-YPZmRHFQBNwk0qeDA'>YouTube</ExLink>.
      </p>
    </div>


    <div className={css.section} >
      <h2>What we Know</h2>

      <p>There's not a lot of public info about Vital, but here's what I've been able to put together from the Vital site, Twitter account, and Discord.</p>
    </div>


    <div className={css.section} >

      <h3>Wavetables</h3>
      <ul>
        <li>import your own samples</li>
        <li>Create new wavetables with the built-in editor</li>
        <li>warp existing wavetables into new ones</li>
        <li>create wavetables from text</li>
      </ul>

      <h3>Sound Engine</h3>
      <ul>
        <li>up to 8x oversampling</li>
        <li>full stereo modulation</li>
        <li>can be used as an insert fx</li>
        <li>spectral oscillator warping</li>
      </ul>

      <h3>UI and Visual</h3>
      <ul>
        <li>GPU optimized</li>
        <li>60 FPS</li>
        <li>graphics are vector based, not a sprite sheet</li>
        <li>you may be able to customize colors, but won't be themeable in the same way that Serum is</li>
      </ul>

    </div>

    <Tweet/>



  </Layout>
)

export default IndexPage
