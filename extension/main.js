document.addEventListener('DOMContentLoaded', function() {
  console.log("calling...");
  getData();


  function getData() {
	$("button.icon-chat").click();
	var list = {}, position = -1;

    if (position != $("div.drawer-body").scrollTop()) {

        $("div.chat").each(function(i) {

            var img   = $(this).find("img.avatar-image.is-loaded"); 
            var title = $(this).find("div.chat-title"); 
            var tel = img[0].src.match(/u=(\d*)/); 
            list[tel[1]] = {thumb: img[0].src, name: title[0].innerText}; 
        });
        position = $("div.drawer-body").scrollTop();
        $("div.drawer-body").scrollTop(position + 72); 
    }
    console.log(list);
}

})