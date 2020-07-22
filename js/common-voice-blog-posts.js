function commonVoiceBlogPosts() {
  'use strict';

  fetch('https://api.rss2json.com/v1/api.json?rss_url=https://blog.mozilla.org/blog/category/common-voice/feed/')
    .then((res) => res.json())
    .then((data) => {
      // Filter for actual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
      const res = data.items //This is an array with the content. No feed, no info about author etc..
      const posts = res.slice(0,4).filter(item => item.categories.length > 0) // That's the main trick* !

      function shortenText(text,startingPoint ,maxLength) {
        return text.length > maxLength?
          text.slice(startingPoint, maxLength):
          text
      }
      // Put things in right spots of card
      let output = '';
      posts.forEach((item) => {

        output += `
         <section class="mzp-c-card mzp-has-aspect-16-9 mzp-c-card-extra-small">
            <a class="mzp-c-card-block-link" rel="noopener noreferrer" href="${item.link}">
              <div class="mzp-c-card-media-wrapper">
                <img src="${item.thumbnail}" class="mzp-c-card-image">
              </div>
               <div class="mzp-c-card-content">
                <div class="mzp-c-card-tag">${shortenText(item.pubDate,0 ,10)}</div>
                <h2 class="mzp-c-card-title">${item.title}</h2>
               </div>
            </a>
         </section>`
      })
      document.querySelector('.js-section-blog').innerHTML = output
    })
};

window.addEventListener('DOMContentLoaded', (event) => {
  commonVoiceBlogPosts();
});
