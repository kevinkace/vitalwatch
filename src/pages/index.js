import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import css from './index.module.css';
import Tweets from '../components/twitter/tweets';

function ExLink({ href, children }) {
  return <a href={href} target='_blank' rel='noreferrer'>{children}</a>;
}

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />

    <div className={css.intro}>
      <p>This is an <strong>unofficial</strong> fan site dedicated to Vital, an upcoming synth by Matt Tytel - the maker of <ExLink href='https://tytel.org/helm/'>Helm</ExLink>.</p>

      <p>Official website <ExLink href='https://vital.audio'>vital.audio</ExLink>, Twitter <ExLink href='https://twitter.com/matttytel/'>@matttytel</ExLink>, <ExLink href='https://discord.gg/dpZxr98'>Discord</ExLink>, and <ExLink href='https://www.youtube.com/channel/UCB-pG-YPZmRHFQBNwk0qeDA'>YouTube</ExLink>.
      </p>
    </div>


    <div className={css.section} >
      <h2>What we Know</h2>

      <p>There's not a lot of public info about Vital, but here's what I've been able to put together from the Vital site, Twitter account, and Discord.</p>

      <br/>

      <h3>Cost &amp; Content</h3>
      <ul>
        <li>literally 0 solid info</li>
        <li>currently not open-source</li>
        <li>unlikely to be free</li>
        <li>may have purchasable content (patches, wavetables)</li>
      </ul>

      <h3>Wavetables</h3>
      <ul>
        <li>import your own samples</li>
        <li>create new wavetables with the built-in editor</li>
        <li>warp existing wavetables into new ones</li>
        <li>create wavetables from text</li>
        <li>257 frames, but can also play between frames</li>
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

    <Tweets max={6}/>

  </Layout>
)

export default IndexPage
