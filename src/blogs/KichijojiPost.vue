<template>
  <BlogPostBase
    :title='title'
    :cover='cover'
    :date='date'>
    <div class="col-12 blog-body">
      <p>Word has started to get around in the workplace that I've been going on these short
        excursions, and I find myself getting suggestions about where to go next. One of my
        coworkers (Raushan) was particularly emphatic that I go to Kichijoji: a neighborhood on
        the edge of Tokyo's 23 wards. He listed off so many things to do there that I insisted he
        come along to be my guide. We ended up making a day of it, and invited along several others
        from the office.
      </p>
    </div>
    <div class="clear"></div>
    <div class="col-11">
      <h2>Kichijoji (<span class="japanese">吉祥寺</span>)</h2>
    </div>
    <div class="clear"></div>
    <div class="col-4">
      <ImageCard src="assets/blog3/shotengai.jpg">
       The shotengai near the station
      </ImageCard>
    </div>
    <div class="col-8 blog-body">
      <p>We all met in Kichijoji at 1 PM, and set out for a nearby food stand in the
        shotengai next to the station. Raushan could not remember exactly where the small food stand was,
        so we spent a few minutes wandering up and down the small alleys that flanked the market
        searching for it.
      </p>
      <p>
        It was fun to observe the "behind the scenes" side of the market: sellers darting in and out of
        back doorways with boxes and supplies. Eventually, we gave up on trying to find it on our own,
        and let Google Maps lead the way.
      </p>
    </div>
    <div class="clear" />
    <div class="col-12 blog-body">
      <p>We made it to the stand, and it sold <MoreInfo keyword="shoronpo">A kind of soup dumpling</MoreInfo>,
        which I had never tried before. Shoronpo is a type of dumpling, but the bottom is the consistency
        of a cracker, and the inside is a ball of meat surrounded by soup. If you aren't careful, they tend
        to explode when you bite into them. I made a bit of a mess of the first one,
        but by the last I was a pro. 😉
      </p>
      <p>After we <em>inhaled</em> the dumplings, most of us were still hungry, so we went
          searching for more food near the park. Up one side street we found
        <MoreInfo keyword="Yakitori!">
          Grilled chicken: many ways. Typically sold out of a shop window to passers-by.
        </MoreInfo>
      </p>
    </div>
    <div class="clear" />
    <div class="col-6">
      <ImageCard src="assets/blog3/shoronpo.jpg">
       The Shoronpo. We each ordered a set of 4, and walked to the park to eat them.
      </ImageCard>
    </div>
    <div class="col-6">
      <ImageCard src="assets/blog3/yakitori.jpg">
        I don't look great in this pic, but yay Yakitori! (PC: Saori Mitsuhata)
      </ImageCard>
    </div>
    <div class="clear" />
    <div class="col-8 blog-body">
      <p>Finally, the main event! We came to Kichijoji because of Inokashira Park (pictured at the top).
        The park has a large pond in the center. You can rent swan boats and paddle around for a small
        fee.
      <p>We all climbed into boats, and headed out into the pond. We were an odd number so Adam (another
        of my coworkers) decided to take a row boat by himself. Staying as a group was virtually impossible
        given the congestion, so we quickly became separated. Everyone on the pond was going in their own direction
        which led to mass confusion. We nearly ran out of time before fully circumnavigating the pond, although
        I'd be lying if I said it wasn't fun trying to avoid all of the other boaters!
      </p>
      <p>Once we had all regrouped, we decided to grab ice cream before moving on to the last
        stop on our trip.
      </p>
    </div>
    <div class="col-4">
      <ImageCard src="assets/blog3/matchice.jpg">
        Green because of the matcha tea flavoring.
      </ImageCard>
    </div>
    <div class="clear" />
    <div class="col-4">
      <ImageCard src="assets/blog3/dai_gyoza.jpg">
        Dai-Gyoza: Massive fried dumplings 😋
      </ImageCard>
    </div>
    <div class="col-8 blog-body">
      <p>Our final destination was a restaurant Raushan knew that specialized in
        <MoreInfo keyword="Dai-Gyoza.">
          Gyoza are steamed, or fried dumplings. Dai means big!
        </MoreInfo>
        We waited in a long line that wrapped around the building and into the alley.
        Our decision to wait was validated, though, once we got inside! We ordered several types of
        Gyoza and large bowls or ramen. After we were all thoroughly stuffed, we decided
        to call it a day.
      </p>
      <p>Even after all of that, there are still plenty of things to do in Kichijoji that
        will have to be left for a return visit: not least of all, the shrines, and
        the Studio Ghibli Museum. I would not be surprised if a "Kichijoji: Part 2" shows up
        as a future post.
      </p>
    </div>
    <div class="clear" />
    <div class="col-11">
      <h2>Bonus: After Party</h2>
    </div>
    <div class="clear"></div>
    <div class="col-12 blog-body">
      <p>The night actually continued on after Kichijoji. Monday morning was the super bowl,
        and a contingent from our group was planning to spend the night in
        <MoreInfo keyword="Shimo-Kitazawa">
          Definitely the subject of a future post. This is where at least 6 of my coworkers live,
          and is by far one of the coolest neighborhoods in Tokyo.
        </MoreInfo>
        to get up early for the game. I went along with them, and a few others, to our coworker
        Fernando's apartment. There, we played various Switch games, and had a few drinks before
        finally heading home.
      </p>
    </div>
    <div class="clear"></div>
  </BlogPostBase>
</template>

<script>
import BlogPostBase from '@/components/BlogPostBase.vue'
import ImageCard from '@/components/ImageCard.vue'
import MoreInfo from '@/components/MoreInfo.vue'
export default {
  name: 'KichijojiPost',
  components: {
    BlogPostBase, ImageCard, MoreInfo,
  },
  data: function () {
    return {
      title: 'Kichijoji',
      date: 'February 3rd 2019',
      cover: 'assets/blog3/cover.jpg',
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
