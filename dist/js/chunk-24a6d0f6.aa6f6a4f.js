(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24a6d0f6"],{b3e8:function(i,t,e){"use strict";e.r(t);var o=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("div",{staticClass:"fd-nav"},[e("div",{staticClass:"fd-nav-left"},[e("div",{staticClass:"fd-nav-back",on:{click:i.toReturn}},[e("i",{staticClass:"anticon anticon-left"})]),e("div",{staticClass:"fd-nav-title"},[i._v(i._s(i.workFlowDef.name))])]),e("div",{staticClass:"fd-nav-right"},[e("button",{staticClass:"ant-btn button-publish",attrs:{type:"button"},on:{click:i.saveSet}},[e("span",[i._v("发 布")])])])]),e("div",{staticClass:"fd-nav-content"},[e("section",{staticClass:"dingflow-design"},[e("div",{staticClass:"zoom"},[e("div",{class:"zoom-out"+(50==i.nowVal?" disabled":""),on:{click:function(t){return i.zoomSize(1)}}}),e("span",[i._v(i._s(i.nowVal)+"%")]),e("div",{class:"zoom-in"+(300==i.nowVal?" disabled":""),on:{click:function(t){return i.zoomSize(2)}}})]),e("div",{staticClass:"box-scale",style:"transform: scale("+i.nowVal/100+"); transform-origin: 50% 0px 0px;",attrs:{id:"box-scale"}},[e("nodeWrap",{attrs:{nodeConfig:i.nodeConfig,flowPermission:i.flowPermission,isTried:i.isTried,directorMaxLevel:i.directorMaxLevel,tableId:i.tableId},on:{"update:nodeConfig":function(t){i.nodeConfig=t},"update:node-config":function(t){i.nodeConfig=t},"update:flowPermission":function(t){i.flowPermission=t},"update:flow-permission":function(t){i.flowPermission=t},"update:isTried":function(t){i.isTried=t},"update:is-tried":function(t){i.isTried=t}}}),i._m(0)],1)])]),e("el-dialog",{attrs:{title:"提示",visible:i.tipVisible},on:{"update:visible":function(t){i.tipVisible=t}}},[e("div",{staticClass:"ant-confirm-body"},[e("i",{staticClass:"anticon anticon-close-circle",staticStyle:{color:"#f00"}}),e("span",{staticClass:"ant-confirm-title"},[i._v("当前无法发布")]),e("div",{staticClass:"ant-confirm-content"},[e("div",[e("p",{staticClass:"error-modal-desc"},[i._v("以下内容不完善，需进行修改")]),e("div",{staticClass:"error-modal-list"},i._l(i.tipList,(function(t,o){return e("div",{key:o,staticClass:"error-modal-item"},[e("div",{staticClass:"error-modal-item-label"},[i._v("流程设计")]),e("div",{staticClass:"error-modal-item-content"},[i._v(i._s(t.name)+" 未选择"+i._s(t.type))])])})),0)])])]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){i.tipVisible=!1}}},[i._v("我知道了")]),e("el-button",{attrs:{type:"primary"},on:{click:function(t){i.tipVisible=!1}}},[i._v("前往修改")])],1)])],1)},s=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"end-node"},[e("div",{staticClass:"end-node-circle"}),e("div",{staticClass:"end-node-text"},[i._v("流程结束")])])}],n={components:{},data:function(){return{isTried:!1,tipList:[],tipVisible:!1,nowVal:100,processConfig:{},nodeConfig:{},workFlowDef:{},flowPermission:[],directorMaxLevel:0,dialogVisible:!0,tableId:""}},created:function(){var i=this;this.$axios.get("/data.json",{workFlowDefId:this.$route.params.workFlowDefId}).then((function(t){i.processConfig=t.data,i.nodeConfig=i.processConfig.nodeConfig,i.flowPermission=i.processConfig.flowPermission,i.directorMaxLevel=i.processConfig.directorMaxLevel,i.workFlowDef=i.processConfig.workFlowDef,i.tableId=i.processConfig.tableId}))},methods:{toReturn:function(){},reErr:function(i){if(i.childNode){if(1==i.childNode.type)i.childNode.error&&this.tipList.push({name:i.childNode.nodeName,type:"审核人"}),this.reErr(i.childNode);else if(2==i.childNode.type)i.childNode.error&&this.tipList.push({name:i.childNode.nodeName,type:"抄送人"}),this.reErr(i.childNode);else if(3==i.childNode.type)this.reErr(i.childNode.childNode);else if(4==i.childNode.type){this.reErr(i.childNode);for(var t=0;t<i.childNode.conditionNodes.length;t++)i.childNode.conditionNodes[t].error&&this.tipList.push({name:i.childNode.conditionNodes[t].nodeName,type:"条件"}),this.reErr(i.childNode.conditionNodes[t])}}else i.childNode=null},saveSet:function(){this.isTried=!0,this.tipList=[],this.reErr(this.nodeConfig),0==this.tipList.length?this.processConfig.flowPermission=this.flowPermission:this.tipVisible=!0},zoomSize:function(i){if(1==i){if(50==this.nowVal)return;this.nowVal-=10}else{if(300==this.nowVal)return;this.nowVal+=10}}}},a=n,l=(e("b584"),e("2877")),d=Object(l["a"])(a,o,s,!1,null,null,null);t["default"]=d.exports},b584:function(i,t,e){"use strict";var o=e("e1f4"),s=e.n(o);s.a},e1f4:function(i,t,e){}}]);