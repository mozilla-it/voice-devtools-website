function commonVoiceBlogPosts() {
  'use strict';

  fetch('https://api.rss2json.com/v1/api.json?rss_url=https://blog.mozilla.org/blog/category/common-voice/feed/')
    .then((res) => res.json())
    .then((data) => renderPosts(data.items,'js-section-blog'));
};

window.addEventListener('DOMContentLoaded', (event) => {
  commonVoiceBlogPosts();
});
