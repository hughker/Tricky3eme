$(window).load(function(){if($("#admin_bar_iframe").length){var b=$("<a />",{text:"Edit This",style:"position: fixed;top: 70px;right: 1em;background-color: rgb(16, 206, 223);padding: .75em 1em;color: #FFF;cursor: pointer;"});b.click(function(c){c.preventDefault();var d=window.location.hostname;c=window.location.href+".json";var b=window.location.pathname.split("/");"blogs"===b[1]?(c=b.pop().split("-")[0],window.location.href="https://"+d+"/admin/articles/"+c):$.ajax({url:c,type:"GET",dataType:"json",
success:function(a){a.hasOwnProperty("product")?(a=a.product.id,window.location.href="https://"+d+"/admin/products/"+a):a.hasOwnProperty("collection")?(a=a.collection.id,window.location.href="https://"+d+"/admin/collections/"+a):a.hasOwnProperty("page")?(a=a.page.id,window.location.href="https://"+d+"/admin/pages/"+a):alert("Sorry, but you cannot use this here.")},error:function(){alert("This cannot be used here.")}})});$("body").append(b)}});