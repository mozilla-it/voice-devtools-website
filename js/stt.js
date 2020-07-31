let mz_blog = 'https://blog.mozilla.org/blog/category/emerging-tech/feed';
let moz_hacks = 'https://hacks.mozilla.org/author/rmoraismozilla-com/feed';
var api = 'https://api.rss2json.com/v1/api.json?rss_url=';

window.addEventListener('DOMContentLoaded', () => {
    function sortByDate(a, b) {
        return new Date(b.pubDate) - new Date(a.pubDate)
    }

    Promise.all([
        fetch(`${api}${mz_blog}`).then(res => res.json()),
        fetch(`${api}${moz_hacks}`).then(res => res.json())
    ]).then(async res => {
        return res.map(obj => obj.items).flat().sort(sortByDate);
    }).then( res => renderPosts(res,'js-stt-blog'))
});