let partners;
let breakpoint = 768;


window.addEventListener('DOMContentLoaded',() => {
    // set up collapsible functionality
    partners = document.querySelectorAll('.partner');
    for(var i = 0; i < partners.length; i++){
        if(window.innerWidth > breakpoint){
            partners[i].classList.remove('mzp-c-details');
        }
    }

    //load posts
    let posts = [
        {
            thumbnail: "../images/partners/dlr.png",
            link: "https://www.dlr.de/content/en/articles/news/2020/03/20200701_dlr-and-mozilla-researching-technologies-for-voice-control-of-robots.html",
            pubDate: "2020-07-01",
            title: "DLR Press Release"
        },{
            thumbnail: "../images/partners/voice-thumbnail.png",
            link: "https://foundation.mozilla.org/en/blog/mozilla-welcomes-two-new-fellows-voice-technology/",
            pubDate: "2020-06-10",
            title: "Mozilla Welcomes Two New Fellows in Voice Technology"
        },{
            thumbnail: "https://ffp4g1ylyit3jdyti1hqcvtb-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/Hackathon_Kigali_Kelly_Davis.png",
            link: "https://blog.mozilla.org/press/2019/11/mozilla-and-bmz-announce-cooperation-to-open-up-voice-technology-for-african-languages/",
            pubDate: "2019-11-25",
            title: "Mozilla and BMZ Announce Cooperation to Open Up Voice Technology for African Languages"
        },{
            thumbnail: "https://miro.medium.com/max/1400/0*jxn45UDHL0H-O5bv",
            link: "https://medium.com/mozilla-open-innovation/sustainable-tech-development-needs-local-solutions-voice-tech-ideation-in-kigali-ec8dd33e0823",
            pubDate: "2019-02-22",
            title: "Sustainable tech development needs local solutions: Voice tech ideation in Kigali"
        }
    ];
    renderPosts(posts,'js-partner-news','static')
});

window.onresize = () => {
    //attach/detatch collapsible functionality on resize
    for(let partner of partners){
        if(window.innerWidth > breakpoint){
            partner.classList.remove('mzp-c-details');
        } else {
            partner.classList.add('mzp-c-details');
        }
    }
}