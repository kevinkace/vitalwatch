import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import css from './index.module.css';
import Tweets from '../components/twitter/tweets';
import Videos from '../components/videos';
import ExtLink from '../components/extLink';
import { Video } from '../components/videos/Video';

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
            <li>very little concrete info</li>
            <li><ExtLink href={'https://discord.com/channels/518489831232503809/518489831869906975/735581286604865556'}>"i can say it definitely will not be donationware"</ExtLink></li>
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

      <div>
        <h3>Beta</h3>
        <ul>
          <li>
            there's currently quite a few beta testers, including some familiar names:
            <ul className={css.flatList}>
              <li>Ace Aura</li>
              <li>Au5</li>
              <li>Azazal</li>
              <li>BVSSIC</li>
              {/* <li>Derpcat</li> */}
              <li>Fox Stevenson</li>
              <li>IMANU</li>
              <li>Inverted Silence</li>
              <li>Kill the Noise</li>
              <li>Mr Bill</li>
              <li>Seamless</li>
              <li>Slynk</li>
              <li>The Living Tombstone</li>
              <li>Woulg</li>
              <li>Xtrullor</li>
            </ul>
          </li>
          <li>you can request to be added as <ExtLink href={'https://discord.com/channels/518489831232503809/638760293035409418'}>beta tester</ExtLink>, but not many are being added at this time</li>
        </ul>
      </div>
    </div>

    <div className={css.sonoj}>
      <h2>Vital Demo @ Sonoj 2019</h2>

      <p>Apparently Vital is much different than what's shown here (Nov 2019), but still worth watching for a glimpse at the work in progress.</p>

      <Video id={'6LQs-R1ksww'} t={571}/>
    </div>

    <Tweets initialNum={6}/>

    <Videos initialNum={3}/>

  </Layout>
)

export default IndexPage
