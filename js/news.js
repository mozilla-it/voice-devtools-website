let newsFeed;
let paginationText;
let currentPage = 1;
let pageCount = 1;
let paginationButtons;
let pageContentContainer;
const postsCount = 6;

const { pathname } = window.location;

function render(){
    /**
     * @purpose: resets the feeds list and updates the page accordingly
     */
    if(currentPage == 1){
        paginationButtons[0].setAttribute('disabled',true);
    } else {
        paginationButtons[0].removeAttribute('disabled')
    }
    let currentPageContent = newsFeed.slice((currentPage-1)*postsCount,(currentPage)*postsCount).map(obj => postCard(obj));
    pageContentContainer.innerHTML = currentPageContent.join('');
    paginationText.innerHTML = `${currentPage} of ${pageCount}`
    
    if(currentPage  == pageCount){
        paginationButtons[1].setAttribute('disabled',true);
    } else {
        paginationButtons[1].removeAttribute('disabled')
    }
}

function previousPage(){
    paginationButtons[1].removeAttribute('disabled');
    window.location.href = `${pathname}?page=${--currentPage}`;
}

function nextPage(){
    paginationButtons[0].removeAttribute('disabled');
    window.location.href = `${pathname}?page=${++currentPage}`;
}

window.addEventListener('DOMContentLoaded',async () => {
    paginationButtons = document.querySelectorAll('.c-news--results__pagination button');
    paginationText = document.querySelector('.c-news--results__pagination span');
    pageContentContainer = document.querySelector('.js-section-blog');
    newsFeed = await Promise.all(urls).then(res =>  res.map(obj => obj.items).flat().sort(sortByDate)).catch(() => {
        return `<p>Failed to load posts. Try refreshing the page</p>`
    });
    pageCount = Math.ceil(newsFeed.length / postsCount);

    let [ pageNum ] =  window.location.search && window.location.search.match(/\d+/) ? window.location.search.match(/\d+/): [ null ];
    pageNum = +pageNum;

    if (pageNum && (pageNum >= 1 && pageNum <= pageCount)){
        currentPage = pageNum
    } else {
        window.location.href = `${pathname}?page=1`;
    }

    if(currentPage == pageCount){
        paginationButtons[1].setAttribute('disabled',true);
    }

    paginationButtons[0].onclick = previousPage;
    paginationButtons[1].onclick = nextPage;
    if(typeof newsFeed === "string"){
        pageContentContainer.innerHTML = newsFeed;
        return;
    }
    render()
})