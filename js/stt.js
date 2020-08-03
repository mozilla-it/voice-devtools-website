let mz_blog = 'https://blog.mozilla.org/blog/category/emerging-tech/feed';
let moz_hacks = 'https://hacks.mozilla.org/author/rmoraismozilla-com/feed';
var api = 'https://api.rss2json.com/v1/api.json?rss_url=';

window.addEventListener('DOMContentLoaded', () => {
    function sortByDate(a, b) {
        return new Date(b.pubDate) - new Date(a.pubDate)
    }

    let urls = [`${api}${mz_blog}`,`${api}${moz_hacks}`]
                .map(url => fetch(url).then(res => res.json()));
                
    Promise.all(urls).then(async res => {
        return res.map(obj => obj.items).flat().sort(sortByDate);
    }).then( res => renderPosts(res,'js-stt-blog'))
});