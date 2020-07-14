import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import css from './index.module.css';
import Tweets from '../components/twitter/tweets';
import Videos from '../components/videos';
import ExtLink from '../components/extLink';


const IndexPage = () => (
  <Layout>
    <SEO title='Home' />

    <div className={css.intro}>
      <p>
        An <strong>unofficial</strong> fan site dedicated to Vital, an upcoming synth by Matt Tytel - the maker of <ExtLink href='https://tytel.org/helm/'>Helm</ExtLink>.
      </p>
      <p>
        If you're looking for leaked info, then you've come to the wrong place. <br/>
        This is just a collection of the best publicly released info from <ExtLink href='https://discord.gg/dpZxr98'>Discord</ExtLink>, <ExtLink href='https://twitter.com/matttytel/'>Twitter</ExtLink>, <ExtLink href='https://www.youtube.com/channel/UCB-pG-YPZmRHFQBNwk0qeDA'>YouTube</ExtLink>, and the <ExtLink href='https://vital.audio'>official website</ExtLink>.
      </p>
    </div>


    <div className={css.section} id='info'>
      <h2>What we Know</h2>

      <p>There's not a lot of public info, but here's what I've been able to put together from the Vital site, Twitter account, and Discord.</p>

      <br/>

      <div className={css.details}>

        <div>
          <h3>Cost &amp; Release Info</h3>
          <ul>
            <li>literally 0 solid info</li>
            <li>no release date, though expected sometime in 2020</li>
            <li>currently not open-source</li>
            <li>unlikely to be free</li>
            <li>may have purchasable content (patches, wavetables)</li>
            <li>planned to be released 2020</li>
          </ul>
        </div>

        <div>
          <h3>Wavetables</h3>
          <ul>
            <li>import your own samples</li>
            <li>create new wavetables with the built-in editor</li>
            <li>warp existing wavetables into new ones</li>
            <li>create wavetables from text</li>
            <li>257 frames, but can also play between frames</li>
          </ul>
        </div>

        <div>
          <h3>Sound Engine</h3>
          <ul>
            <li>up to 8x oversampling</li>
            <li>full stereo modulation</li>
            <li>can be used as an insert fx</li>
            <li>spectral oscillator warping</li>
            <li>created with </li>
          </ul>
        </div>

        <div>
          <h3>UI and Visual</h3>
          <ul>
            <li>GPU optimized</li>
            <li>60 FPS</li>
            <li>graphics are vector based, not a sprite sheet</li>
            <li>you may be able to customize colors, but won't be themeable in the same way that Serum is</li>
          </ul>
        </div>
      </div>
    </div>

  <Tweets initialNum={6}/>

  <Videos initialNum={3}/>

  </Layout>
)

export default IndexPage
