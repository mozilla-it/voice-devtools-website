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

function renderPosts(data,postElemClass) {
    // Filter for actual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
    const posts = data.slice(0, 4).filter(item => item.categories.length > 0) // That's the main trick* !
    // Put things in right spots of card
    let output = '';
    posts.forEach((item) => {
        output += postCard(item);
    })
    document.querySelector(`.${postElemClass}`).innerHTML = output
}