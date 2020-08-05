let mz_blog = 'https://blog.mozilla.org/blog/category/emerging-tech/feed';
let moz_hacks = 'https://hacks.mozilla.org/author/rmoraismozilla-com/feed';
var api = 'https://api.rss2json.com/v1/api.json?rss_url=';

let urls = [`${api}${mz_blog}`,`${api}${moz_hacks}`]
.map(url => fetch(url).then(res => res.json()));

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

function sortByDate(a, b) {
  return new Date(b.pubDate) - new Date(a.pubDate)
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

function loadPosts(className){
    Promise.all(urls).then(async res => {
      return res.map(obj => obj.items).flat().sort(sortByDate);
    }).then( res => renderPosts(res,className)).catch(() => {
        document.querySelector(`.${className}`).innerHTML = '<p>An error occured. Check your internet connection and then refresh the page</p>'
    })
}