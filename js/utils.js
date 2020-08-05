function postCard(post) {
    return `
    <section class="mzp-c-card mzp-has-aspect-16-9 mzp-c-card-extra-small">
       <a class="mzp-c-card-block-link" rel="noopener noreferrer" href="${post.link}">
         <div class="mzp-c-card-media-wrapper">
           <img src="${post.thumbnail}" alt="" class="mzp-c-card-image">
         </div>
          <div class="mzp-c-card-content">
           <div class="mzp-c-card-tag">${post.pubDate.split(" ")[0]}</div>
           <h2 class="mzp-c-card-title">${post.title}</h2>
          </div>
       </a>
    </section>`
}

function renderPosts(data,postElemClass,type) {
    /**
     * @param data: list of post objects with structure
     * {
     *  thumbnail: thubmnail image url,
     *  link: link to post,
     *  pubDate: publication date (ISO format) as string,
     *  title: post title
     * }
     * @param postElemClass: class of html where post cards will be inserted into
     * @param type: 'static' -> for static feeds. defaults to RSS if unset.
     */

    const posts = data.slice(0, 4).filter(item => {
      if(type !== 'static'){
        // Filter for actual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
        // That's the main trick* !
        return item.categories.length > 0
      }else{
        return true;
      }
    }) 
    // Put things in right spots of card
    let output = '';
    posts.forEach((item) => {
        output += postCard(item);
    })
    document.querySelector(`.${postElemClass}`).innerHTML = output
}