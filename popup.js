$(function(){
    const $btn = $("#btn");

    chrome.storage.sync.get('noMobileSetting', function(data) {
        let mobileSetting = data['noMobileSetting'];

        if(mobileSetting != undefined && mobileSetting === '1'){
            $btn.prop("checked",true);
        }
    });

    $btn.click(function(){
        if($btn.prop("checked") === true){
            chrome.storage.sync.set({'noMobileSetting': '1'});
        }else{
            chrome.storage.sync.set({'noMobileSetting': '0'});
        }
    });
});
