<template>
  <BlogPostBase
    :title='title'
    :cover='cover'
    :date='date'>
    <div class="col-12 blog-body">
      <p>Hello all! It's been a while since I've written one of these, so I wanted to give
        a quick heads up about what I'm planning to do going forward. I have decided that
        trying to catch everyone up with what I've been doing since my last post in July would
        be virtually impossible. Instead, I am going to try to put out a much smaller post roughly
        weekly with the hope that I can balance interesting stories with a work load that I can
        realistically accomplish.
      </p>
    </div>
   <div class="clear"></div>
  <div class="col-11">
    <h2>Ameya Yokochou (<span class="japanese">アメヤ横丁</span>)</h2>
   </div>
    <div class="col-6 blog-body">
      <p>This weekend I decided to take a trip up to a
        <MoreInfo keyword="Shoutengai">
          A word basically meaning, "market street". An outdoor market.
        </MoreInfo>
        in Ueno, Tokyo, called Ameya Yokochou (Ameyoko for short). After about an hour long train ride, I arrived at
        the market and was surprised by its somewhat local vibe. It felt like a larger, but more managable version of
        <a href="https://en.wikipedia.org/wiki/Takeshita_Street">
          <MoreInfo keyword="Takeshita Dori">
          A very popular street in Harajuku. There are always hundreds of people, and it's a complete tourist trap.
          </MoreInfo>
        </a>, (probably because it is a full market instead of just one, busy street). I actually live near an
        even more local-oriented shoutengai, but it has primarily household goods and a few restaurants.
      </p>
      <p>Ameyoko instantly felt like a perfect middleground between the two types of market.
        It was big enough to have large groups of people, but they all seemed to be there for a reason aside from siteseeing.
      </p>
    </div>
    <ImageCard layout="col-4" src="assets/blog2/ameyoko4.jpg">
      A look down one of the streets of the Shoutengai
    </ImageCard>
    <div class="clear"></div>
    <div class="col-12 blog-body">
      <p>The market is about 3 blocks wide, and runs the distance between the Ueno and Okachimachi stations.
        As I meandered down each street, I was overwhelmed with all of the food options. Hoards of people
        lined up in front of the tiny shops that were set back a short distance from the main thoroughfare.
        Each shop seemed to specialize in someway to set itself apart from the rest. One even had a giant, mechanical bowl of
        noodles to entice passersby. Eventually, I found
        a stand selling
        <MoreInfo keyword="Takoyaki">
          Fried Octopus Balls: chunks of octopus, battered in savory pancake mix, and fried (yum)!
        </MoreInfo>
        (pictured in the center below), which I finished as I explored a bit more.
      </p>
    </div>
    <div class="clear"></div>
    <div class="col-4">
      <ImageCard src="assets/blog2/ameyoko5.jpg">
       A sense of the crowds near the many food shops
      </ImageCard>
    </div>
    <div class="col-4">
      <ImageCard src="assets/blog2/takoyaki2.jpg">
       <span class="japanese">たこ焼き</span>  (Takoyaki!)
      </ImageCard>
    </div>
    <div class="col-4 video-box">
      <video width="100%" height="auto" controls loop muted autoplay>
        <source src="@/assets/blog2/noodles.mp4" type="video/mp4">
        Uh oh! You're browser doesn't support videos!
      </video>
    </div>
    <div class="clear"></div>
    <h2>Mr. Kanso</h2>
    <div class="clear"></div>
    <ImageCard layout="col-6" src="assets/blog2/cans.jpg">
      The assortment of unique canned goods to choose from
    </ImageCard>
    <div class="col-6 blog-body">
      <p>Another motivation for coming to Ameyoko was a small bar I had read about called
        Mr. Kanso. The bar is normal in most ways, except that all of the food they serve comes from
        cans. If you initially react to that premise with skepticism, you're not alone, but the reviews
        claimed it was well worth a visit. I checked my phone, and it was only a block away so I decided to give it a shot.
      </p>
      <p>After being seated, the bartender explained that I could pick any can from the wall behind me,
        and he would prepare and serve it. He also mentioned that he could suggest a pairing if I was unsure.
        As I was perusing the selection, I noticed some more exotic options (including bear?! and horse), and decided
        to pick for myself. I ended up choosing Sardines which paired well with the Japanese beer I'd chosen to start with.
      </p>
    </div>
    <div class="clear"></div>
    <div class="col-6 blog-body">
      <p>The bar was a fairly local spot, and ended up being a great place to practice speaking Japanese. The person
        next to me had been living in German until a few months ago, and wanted a chance to practice English.
        An ad hoc language exchange ensued, and we had a entertaining time trying to decypher what the other was saying.
        I had one last drink, and decided to call it a night.
      </p>
    </div>
    <ImageCard layout="col-6" src="assets/blog2/canplace2.jpg">
      Sardines in oil and an Asahi
    </ImageCard>
    <div class="clear"></div>
    <div class="col-12 blog-body">
      <p>It was nice to visit a place like Ameyoko. I think if I was not living here, it would not have been high enough on
        the list of need-to-see places to make the cut. It was fun to share about in this shorter post! Hopefully I can use
        these smaller ones to paint a more vivid picture of what daily life is like for me in Japan!
      </p>
    </div>
  </BlogPostBase>
</template>

<script>
import BlogPostBase from '@/components/BlogPostBase.vue'
import ImageCard from '@/components/ImageCard.vue'
import MoreInfo from '@/components/MoreInfo.vue'
export default {
  name: 'AmeyokoMarketPost',
  components: {
    BlogPostBase, ImageCard, MoreInfo,
  },
  data: function () {
    return {
      title: 'Ameyoko Market',
      date: 'January 21st 2019',
      cover: 'assets/blog2/cover.jpg',
    }
  },
}
</script>

<style>
.video-box {
  padding: 0.5em;
  border: 1px solid var(--secondary-color);
  border-radius: 5px;
  box-sizing: border-box;
}

.japanese {
  font-family: "M PLUS Rounded 1c";
  color: var(--highlight-bold-dark);
}

video {
  border-radius: 5px;
}

.blog-body {
    padding: 0em 1.5em;
    display: block;
}

.clear {
    display: block;
    clear: left;
    padding-bottom: 1em;
}

.blog-body p {
  text-align: justify;
}
</style>
