// build time:Mon Mar 01 2021 15:04:27 GMT+0000 (Coordinated Universal Time)
photo={page:1,offset:100,init:function(){var t=this;$.getJSON("/photos/photoslist.json",function(i){t.render(t.page,i)})},render:function(t,i){var r=(t-1)*this.offset;var e=t*this.offset;if(r>=i.length)return;var a,n,o,s,d,c,f="";for(var g=r;g<e&&g<i.length;g++){n=i[g].url;o=i[g].title;f+='<div class="card" style="width:250px">'+'<div class="ImageInCard" style="height:'+250+'px">'+'<a data-fancybox="gallery" href="'+n+'?raw=true" data-caption="'+o+'">'+'<img class="CpicView" srcset="'+n+'-toSmall?raw=true" src="'+n+'?raw=true"/>'+"</a>"+"</div>"+"</div>"}$(".ImageGrid").append(f);this.minigrid()},minigrid:function(){var t=new Minigrid({container:".ImageGrid",item:".card",gutter:12});t.mount();$(window).resize(function(){t.mount()})}};photo.init();
//rebuild by neat 