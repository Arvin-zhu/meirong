/**
 * Created by Arvin Zhu on 2016/6/27.
 */
window.onload= function () {
    waterfull("container2","box");
    document.body.style.backgroundColor="rgb(241,241,241)";
    function waterfull(parent,box){
        var oparent=document.getElementById(parent);
        var obox=getByclass(oparent,box);
        var oboxw=obox[0].offsetWidth;
        var cols=Math.round(document.documentElement.clientWidth/oboxw);
        oparent.style.cssText='width:'+oboxw*cols+'px;margin:0 auto';
        var harr=[];
        for(var i=0;i<obox.length;i++){
            if (i<cols) {
                harr.push(obox[i].offsetHeight)
            }else{
                var minH=Math.min.apply(null,harr);
                var index=getminIndex(harr,minH);
                obox[i].style.position="absolute";
                obox[i].style.top=minH+"px";
                obox[i].style.left=oboxw*index+"px";
                harr[index]+=obox[i].offsetHeight;
                var maxH=Math.max.apply(null,harr);
                oparent.style.height=maxH+"px";
            }
        }
    }
    function getByclass(parent,clsName){
        var boxArr=new Array(),
            oElements=parent.getElementsByTagName('*');
        for(var i=0;i<oElements.length;i++){
            if(oElements[i].className==clsName){
                boxArr.push(oElements[i]);
            }
        }
        return boxArr;
    }
    function getminIndex(arr,val){
        for(var i in arr){
            if (arr[i]==val) {
                return i;
            }
        }
    }
}