chrome.storage.sync.get('noMobileSetting', function(data) {
    let mobileSetting = data['noMobileSetting'];

    if(mobileSetting === '1'){
        let urls = document.querySelectorAll("a[href*='//m.']");
    
        urls.forEach(function(url){
            let pcUrl = (url.getAttribute("href")).replace("m.","");
            url.setAttribute("href", pcUrl);
        });
    }
});



