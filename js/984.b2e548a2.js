"use strict";(self["webpackChunkmanga_project"]=self["webpackChunkmanga_project"]||[]).push([[984],{6984:function(t,s,e){e.r(s),e.d(s,{default:function(){return v}});var r=function(){var t=this,s=t._self._c;return s("div",[s("search-component")],1)},a=[],i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"search-container"},[s("header",[s("i",{staticClass:"back wd-icon-thin-arrow-left",on:{click:function(s){return t.back()}}}),s("div",{staticClass:"search-box"},[s("div",{staticClass:"searchIco"},[s("svg",{staticClass:"icon",attrs:{t:"1664782037558",viewBox:"0 0 1040 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1401",width:"20",height:"20"}},[s("path",{attrs:{d:"M176.439478 676.824953c-139.585105-133.763516-139.585105-351.411535 0-485.179145 67.62826-64.84589 157.511383-100.492762 253.15572-100.492762 95.567589 0 185.449689 35.647895 253.078972 100.492762 139.585105 133.76761 139.585105 351.415628 0 485.179145-67.62826 64.777329-157.511383 100.484575-253.15572 100.484575C333.950861 777.309528 244.067738 741.602282 176.439478 676.824953L176.439478 676.824953 176.439478 676.824953zM1024.212848 955.665659 756.059552 698.643887c142.644791-161.752987 136.315642-403.047566-22.757307-555.514049-83.911108-80.436984-193.845916-120.617102-303.707047-120.617102-109.937878 0-219.880873 40.180118-303.779701 120.617102-167.754678 160.728658-167.754678 421.408749 0 582.215178 83.898829 80.364329 193.8408 120.613008 303.702953 120.613008 98.632391 0 196.124819-34.149774 275.908934-98.794074l268.225951 257.017678L1024.212848 955.665659 1024.212848 955.665659zM1024.212848 955.665659","p-id":"1402"}})])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.str,expression:"str"}],staticClass:"searchText",attrs:{type:"text",placeholder:"搜书名、作者、主角，一搜即有"},domProps:{value:t.str},on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.searchConfirm.apply(null,arguments)},input:function(s){s.target.composing||(t.str=s.target.value)}}})]),s("span",{staticClass:"searchConfirm",on:{click:t.searchConfirm}},[t._v("搜索")])]),s("main",[""!==t.str?s("div",{staticClass:"searchList"},t._l(t.searchResult.data,(function(e){return s("div",{key:e.comic_id,attrs:{id:e.comic_id},on:{click:function(s){return t.turnToComic(e.comic_id,e.comic_author)}}},[t._v(" "+t._s(e.comic_name)+" ")])})),0):t._e(),s("div",{staticClass:"hot-search"},[t._m(0),s("div",{staticClass:"hot-search-content"},[s("ul",t._l(t.hotSearch.data,(function(e,r){return s("li",{key:e.comic_id,on:{click:function(s){return t.turnToComic(e.comic_id,e.comic_author)}}},[s("span",{staticClass:"hotNum"},[t._v(t._s(r+1))]),s("span",{staticClass:"hotName",attrs:{id:e.comic_id}},[t._v(t._s(e.comic_name))])])})),0)])]),s("div",{staticClass:"history"},[s("div",{staticClass:"history-head"},[s("h4",[t._v("搜索历史")]),s("span",{on:{click:t.clearHistory}},[t._v("清除历史")])]),s("div",{staticClass:"history-content"},t._l(t.hisArr,(function(e){return s("div",{key:e.value,staticClass:"historyContentList",on:{click:t.searchHistory}},[t._v(" "+t._s(e.value)+" ")])})),0)])])])},c=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"hot-search-head"},[s("h4",[t._v("热门搜索")])])}],o=(e(7658),e(881)),h={data(){return{str:"",searchResult:{},hotSearch:{},hisArr:[]}},created(){this.getSearch=(0,o.Z)(this.getSearch,1e3),this.getHotSearch=(0,o.Z)(this.getHotSearch,1e3),this.hisArr=JSON.parse(localStorage.getItem("history"))||[]},mounted(){this.getHotSearch(),this.getSearch()},computed:{url(){return`https://www.kanman.com/api/getsortlist/?search_key=${this.str}`}},watch:{url(){this.getSearch()}},methods:{getSearch(){this.$axios.get(`https://www.kanman.com/api/getsortlist/?search_key=${this.str}`).then((({data:t})=>{this.searchResult={...t},console.log("搜索结果==>",this.searchResult)}))},searchConfirm(){this.getSearch(),this.hisArr=[...this.hisArr,{value:this.str}],localStorage.setItem("history",JSON.stringify(this.hisArr)),this.$router.push({path:"/searchR",query:{keyword:this.str}}),this.str=""},getHotSearch(){this.$axios.get("https://www.kanman.com/api/gettopsearch").then((({data:t})=>{t.data.pop(),this.hotSearch={...t}}))},turnToComic(t,s){this.$router.push({path:"/info",query:{id:t,author:s}})},clearHistory(){this.hisArr=[];let t=[];localStorage.setItem("history",JSON.stringify(t))},searchHistory(t){this.str=t.target.textContent},back(){this.$router.go(-1)}}},n=h,l=e(1001),u=(0,l.Z)(n,i,c,!1,null,null,null),d=u.exports,m={name:"searchView",components:{SearchComponent:d}},p=m,_=(0,l.Z)(p,r,a,!1,null,null,null),v=_.exports}}]);
//# sourceMappingURL=984.b2e548a2.js.map