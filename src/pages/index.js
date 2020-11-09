import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import css from './index.module.css';
import Tweets from '../components/twitter/tweets';
import Videos from '../components/videos';
import ExtLink from '../components/extLink';
import { Video } from '../components/videos/Video';

import screenshot from "../images/screenshot.png";

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
      <h2>Release Date: November 24, 2020!</h2>

      <img src={screenshot} alt='screenshot of vital synth' />

      <br/>

      <div className={css.details}>

        <div className={css.cost}>
          <h3>Cost &amp; Release Info</h3>
          <ul className={css.prices}>
            <li>
              <strong>Basic - Free</strong>

              <ul>
                <li>80 presets</li>
                <li>25 wavetables</li>
              </ul>
            </li>

            <li>
              <strong>Plus - $25</strong>

              <ul>
                <li>250 presets</li>
                <li>70 wavetables</li>
              </ul>
            </li>

            <li>
              <strong>Pro - $80</strong>

              <ul>
                <li>400+ presets</li>
                <li>150 wavetables</li>
                <li>Unlimited text-to-wavetable</li>
                <li>Exclusive Discord perk</li>
                <li>Developer support</li>
              </ul>
            </li>

            <li>
              <strong>Subscribe - $5 / month</strong>

              <ul>
                <li>$5 / month credit in store</li>
                <li>Subscriber-only preset bank</li>
                <li>Unlimited text-to-wavetable</li>
                <li>Exclusive Discord perk</li>
                <li>Developer support</li>
                <li>First access to new features</li>
                <li>First access to new plugins</li>
              </ul>
            </li>
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
            <li><ExtLink href={'https://www.youtube.com/watch?v=Mwrj9Zaz2Xo'}>text to wavetables</ExtLink>, with multiple lang support</li>
          </ul>
        </div>

        <div>
          <h3>Sound Engine</h3>
          <ul>
            <li>up to 8x oversampling</li>
            <li>full stereo modulation</li>
            <li>future version will work as an insert fx (not V1)</li>
            <li>spectral oscillator warping</li>
            <li>created with <ExtLink href="https://juce.com/">Juce</ExtLink></li>
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
        <p><strong>Beta is closed!</strong> Go buy the synth on November 24 at <ExtLink href='https://vital.audio'>vital.audio</ExtLink></p>
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
          <li>beta channel is closed <em className={css.strike}>you can request to be added as <ExtLink href={'https://discord.com/channels/518489831232503809/638760293035409418'}>beta tester</ExtLink>, but not many are being added at this time</em></li>
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
