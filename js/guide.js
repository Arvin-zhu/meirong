/**
 * Created by Arvin Zhu on 2016/6/29.
 */
window.onload=function(){
            var count=0;
            $("#container13 .head").on("touchstart",function(){
                if(count==0){
                    $("#wrap")[0].style.height="45%";
                    var wrapH=$("#wrap")[0].offsetHeight;
                    var clientH=document.body.clientHeight;
                    var panelH=clientH-wrapH;
                    $("#panel").css("height",panelH);
                    count=1;
                }else{
                    $("#wrap")[0].style.height="100%";
                    var h=$(".detail .head")[0].offsetHeight;
                    $(".detail").css("marginTop",-h);
                    count=0;
                }
            })
            var map = new AMap.Map("wrap", {
                resizeEnable: true,
            });
            AMap.service(["AMap.PlaceSearch"], function() {
                var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
                    pageSize:100,
                    pageIndex: 1,
                    city: "0512", //城市
                    map: map,
                    panel: "panel"
                });
                //关键字查询
                placeSearch.search("苏州瑞鹏");
            });
}