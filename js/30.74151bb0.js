"use strict";(self["webpackChunkmanga_project"]=self["webpackChunkmanga_project"]||[]).push([[30],{9030:function(a,e,t){t.r(e),t.d(e,{default:function(){return m}});var s=function(){var a=this,e=a._self._c;return e("div",{staticClass:"rank-container"},[e("div",{staticClass:"rank-nav"},[e("div",{staticClass:"style"},[e("ul",a._l(a.rankNavStyleList,(function(t){return e("li",{key:t.value,ref:t.value,refInFor:!0,class:{active:"all"==t.value},on:{click:function(e){return a.changeSort(t.value)}}},[a._v(" "+a._s(t.name)+" ")])})),0)]),e("div",{staticClass:"time"},[e("ul",a._l(a.rankNavTimeList,(function(t){return e("li",{key:t.value,ref:t.value,refInFor:!0,class:{active:"day"==t.value},on:{click:function(e){return a.changeTime(t.value)}}},[a._v(" "+a._s(t.name)+" ")])})),0)])]),e("div",{ref:"rankList",staticClass:"rank-list"},[e("manga-list",{attrs:{mangaListData:a.rankList}})],1)])},l=[],i=t(7376),n={data(){return{isalldata:0,time_type:"week",sort_type:"all",rank_type:"heat",page:1,pageSize:100,lastStyleValue:"all",lastTimeValue:"day",rankNavStyleList:[{name:"综合榜",value:"all"},{name:"自制榜",value:"self"},{name:"少年榜",value:"boy"},{name:"少女榜",value:"girl"},{name:"新作榜",value:"new"},{name:"黑马榜",value:"dark"},{name:"付费榜",value:"charge"},{name:"免费榜",value:"free"},{name:"完结榜",value:"finish"},{name:"连载榜",value:"serialize"}],rankNavTimeList:[{name:"日榜",value:"day"},{name:"周榜",value:"week"},{name:"月榜",value:"month"},{name:"总榜",value:"total"}],rankList:{}}},components:{MangaList:i.Z},computed:{url(){return`https://www.kanman.com/api/getRankDataForWeb?isalldata=${this.isalldata}&time_type=${this.time_type}&sort_type=${this.sort_type}&rank_type=${this.rank_type}&page=${this.page}&pageSize=${this.pageSize}`}},watch:{url(){this.getRankData()}},created(){this.getRankData()},methods:{changeSort(a){this.sort_type=a,this.$refs.rankList.scrollTop=0,this.$refs[this.lastStyleValue][0].className="",this.$refs[a][0].className="active",this.lastStyleValue=a},changeTime(a){this.time_type=a,this.$refs.rankList.scrollTop=0,this.$refs[this.lastTimeValue][0].className="",this.$refs[a][0].className="active",this.lastTimeValue=a},getRankData(){this.$axios.get(this.url).then((({data:a})=>{this.rankList=a.data}))}}},r=n,u=t(1001),c=(0,u.Z)(r,s,l,!1,null,null,null),m=c.exports}}]);
//# sourceMappingURL=30.74151bb0.js.map