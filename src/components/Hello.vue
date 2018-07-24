<template>
  <div class="col-12 overview">
    <HeroImage src="assets/overview/hero.jpg">
      Campbell's Japan Blog
    </HeroImage>
    <div class="col-3"></div>
    <div class="col-6">
      <p>Hello! You’ve made it to my blog and before you start reading I thought I might
      answer some of the obvious questions you might have right off the bat! If you’d
      like to start reading about my adventures you can click on the navigation tools
      but if you’d like more of an overview of the site, please keep reading.</p>
      <h2>Overview:</h2>
      <p>As I’m sure you are already aware, I have officially moved to Tokyo, Japan which
      was my main motivation for creating this blog. My goal is to keep you updated on
      all of the amazing and unique things I will get to experience while I’m here. I
      felt like setting up a blog on my website would be an excellent way to keep
      everyone informed since I can post stories, share photos and maps, and link people
      to relevant information all in the same place. Okay so that’s the point, but there
      are still a bunch of questions which I will now answer in an FAQ style!</p>

      <div class="FAQ">
        <div class="question">
          Q: “Where exactly are you? How can I send you something for example?”
        </div>
        <div class="answer">
          I’m living in Tokyo, Japan! The specific location has been changing a bit since
          my company has been paying for apartments, however, I am looking to move into a
          permanent place soon. I will share my address here once I know for sure where I
          will be.
        </div>
        <div class="question">
          Q: “Why did you move to Japan?”
        </div>
        <div class="answer">
          There are a bunch of reasons! First and foremost I wanted an opportunity to
          explore Japan and test out/improve my Japanese skills. Japan, if you’ve never been,
          is incredibly rich in natural beauty and I want a chance to explore it! I have been
          learning Japanese for a few years and I wanted to become fluent so I am putting myself
          in the best possible position to work on that. I also wanted to test out living and
          working in another country and I felt like it would be almost impossible to get a
          chance to do this if I didn’t go right away. Moving to Japan has been a long-term goal
          of mine since I started learning Japanese and I feel incredibly fortunate to see that
          dream realized!
        </div>
        <div class="question">
          Q: “Where are you going to be working? Aren’t Japanese companies notoriously
          horrible???”
        </div>
        <div class="answer">
          <p>I will be working at DMM Eikaiwa working on the website for their language teaching
            app. My official job title is Full Stack Developer (link) which basically means I will
            get to work on all parts of their website where they need me. This is exciting for me
            because my web-design skills are probably my weakest in terms of Computer Science topics.
            For a long time I have been looking for an opportunity to grow in this area and Full
            Stack is the perfect position to learn how all the moving parts work.
          </p>
          <p>Japanese companies are traditionally horrible, with long hours of overtime expected
            and a tradition of boring and tedious work environments. My team, however, is entirely
            expats and we are basically separate from the rest of the company. Because of this, the
            team has a western style work environment with flex time, remote work, and NO OVERTIME
            expectations. I also will not be expected to speak Japanese at work (English is the primary
            language), although there are plenty of people there who do.
          </p>
          <p>In addition to all of these things, the company has been especially helpful with relocation
            support. They paid for my flight, housing for 2 months, and will set me up with Japanese
            lessons once I begin working!
          </p>
        </div>
        <div class="question">
          Q: “So where in Japan have you visited?”
        </div>
        <div class="answer">
          Hopefully some sort of fancy map thing will be coming soon to this blog, in the
          meantime that information should be in the sidebar!
        </div>
        <div class="question">
          Q: “Where are you going next?”
        </div>
        <div class="answer">
          Ditto the fancy map thing, however, my goal in the meantime is to keep track of where
          I’m going with frequent updates to the sidebar and comments in the recent blog posts!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroImage from '@/components/HeroImage.vue'
export default {
  name: 'Hello',
  components: { HeroImage }
}
</script>

<style>
.overview {
  padding: 0;
}
.overview h1 {
  font-family: var(--heading-font);
  font-size: 4em;
  text-align: center;
}
.overview h2 {
  border-bottom: 0.25em solid var(--highlight-color);
  font-family: var(--heading-font);
  font-size: 3em;
}
.question {
  padding-top: 0.5em;
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 1em;
  border-bottom: 0.1em solid var(--highlight-bold-color);
}
.answer {
  text-align: justify;
}
</style>
