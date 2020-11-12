(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04519f82"],{"09b5":function(e,i,t){"use strict";t.d(i,"a",(function(){return n})),t.d(i,"e",(function(){return s})),t.d(i,"d",(function(){return a})),t.d(i,"f",(function(){return c})),t.d(i,"c",(function(){return r})),t.d(i,"b",(function(){return l}));var n={initapp:{}};n.initapp.html='<div id="app">\n  <clipper-basic class="my-clipper" src="example.jpg" />\n</div>',n.initapp.js="new Vue({\n  el: '#app'\n})",n.initapp.css=".my-clipper {\n  width: 100%;\n  max-width: 700px;\n}",n.upload={},n.upload.html='<div id="app">\n  <input type="file" @change="upload($event)">\n  <clipper-basic class="my-clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n  </clipper-basic>\n</div>',n.upload.js="new Vue({\n  el: '#app',\n  data: {\n    imgURL: ''\n  },\n  methods: {\n    upload: function(e){\n      if (e.target.files.length !== 0) {\n        if(this.imgURL) URL.revokeObjectURL(this.imgURL)\n        this.imgURL = window.URL.createObjectURL(e.target.files[0]);\n      }\n    }\n  }\n})",n.upload.css=".placeholder {\n  text-align: center;\n  padding: 20px;\n  background-color: lightgray;\n}",n.upload2={},n.upload2.html='<div id="app">\n  <clipper-upload v-model="imgURL">upload image</clipper-upload>\n  <clipper-basic class="my-clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n  </clipper-basic>\n</div>',n.upload2.js="new Vue({\n    el: '#app',\n    data: {\n      imgURL: ''\n    }\n})",n.result={},n.result.html='<button @click="getResult">clip image</button>\n<clipper-basic class="my-clipper" ref="clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n</clipper-basic>\n<div>\n    <div>result:</div>\n    <img class="result" :src="resultURL" alt="">\n</div>',n.result.js1="data: {\n  imgURL: '',\n  resultURL: ''\n}",n.result.js='getResult: function () {\n  const canvas = this.$refs.clipper.clip();//call component\'s clip method\n  this.resultURL = canvas.toDataURL("image/jpeg", 1);//canvas->image\n}',n.preview={},n.preview.html='<clipper-basic \n  class="my-clipper" \n  ref="clipper" \n  :src="imgURL" \n  preview="my-preview" >\n  <div class="placeholder" slot="placeholder">No image</div>\n</clipper-basic>\n<div>\n  <div>preview:</div>\n  <clipper-preview name="my-preview" class="my-clipper">\n    <div class="placeholder" slot="placeholder">preview area</div>\n  </clipper-preview>\n</div>',n.full='<meta charset="utf-8">\n<title>vuejs-clipper demo</title>\n<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"><\/script>\n<script src="./vuejs-clipper.umd.js"><\/script>\n<link rel="stylesheet" href="./vuejs-clipper.css">\n<div id="app">\n    <button>\n      <clipper-upload v-model="imgURL">upload image</clipper-upload>\n    </button>\n    <button @click="getResult">clip image</button>\n    <clipper-basic class="my-clipper" ref="clipper" :src="imgURL" preview="my-preview">\n        <div class="placeholder" slot="placeholder">No image</div>\n    </clipper-basic>\n    <div>\n        <div>preview:</div>\n        <clipper-preview name="my-preview" class="my-clipper">\n            <div class="placeholder" slot="placeholder">preview area</div>\n        </clipper-preview>\n    </div>\n    <div>\n        <div>result:</div>\n        <img class="result" :src="resultURL" alt="">\n    </div>\n</div>\n<script>\n    new Vue({\n        el: \'#app\',\n        data: {\n            imgURL: \'\',\n            resultURL: \'\'\n        },\n        methods: {\n            getResult: function () {\n                const canvas = this.$refs.clipper.clip();//call component\'s clip method\n                this.resultURL = canvas.toDataURL("image/jpeg", 1);//canvas->image\n            }\n        }\n    })\n<\/script>\n<style>\n    .my-clipper {\n        width: 100%;\n        max-width: 700px;\n    }\n\n    .placeholder {\n        text-align: center;\n        padding: 20px;\n        background-color: lightgray;\n    }\n</style>';var s={html:'<clipper-basicref="clipper" \n  ref="clipper"\n  :style="basicStyle" \n  src="long.jpg"\n  @load="imgLoad" \n/>',js:"data: () => {\n  return {\n      maxWidth: 700,\n      maxHeight: 500,\n      based: 850\n  };\n},\nmethods: {\n  imgLoad: function() {\n      const imgRatio = this.$refs.clipper.imgRatio;\n      if(imgRatio < 1) this.based =  this.maxHeight*imgRatio;\n      else this.based = this.maxWidth;\n  },\n},\ncomputed: {\n  basicStyle : function() {\n      return {\n          maxWidth: this.based + 'px'\n      }\n  }\n}",html2:'<clipper-basic\n  src="long.jpg"\n  :wrapRatio="1"\n/>'},a={const:"const canvas = this.$refs.clipper.clip();",durl:'const jpgURL = canvas.toDataURL("image/jpeg")//to jpg\nconst pngURL = canvas.toDataURL("image/png", 1)//to png',blob:"canvas.toBlob(function(blob) {\n  //...\n});",url:"const vm = this;\nconst canvas = this.$refs.clipper.clip();\ncanvas.toBlob(function(blob){\n    if(vm.resultURL)\n      URL.revokeObjectURL(vm.resultURL)\n    vm.resultURL = URL.createObjectURL(blob)\n})",urles6:"this.$refs.clipper.clip().toBlob(blob=>{\n  if(this.resultURL) URL.revokeObjectURL(this.resultURL)\n  this.resultURL = URL.createObjectURL(blob)\n})",reader:"const vm = this;\nconst canvas = this.$refs.clipper.clip();\ncanvas.toBlob(function(blob){\n    const reader = new FileReader()\n    reader.addEventListener('load' ,function(){\n        vm.resultURL = this.result;\n    })\n    reader.readAsDataURL(blob);\n})"},c={ex1:'<clipper-fixed \n  src="ex2.jpg" \n  shadow="transparent" \n  border-color="transparent"\n  :grid="false"\n/>'},r={basicHtml:'<clipper-basic ref="clipper" src="ex2.jpg" />',basic:"//click buttons",fixed:"//click buttons"},l={script:"const canvas = this.$refs.clipper.clip({ wPixel: <pixel> })"}},"11bf":function(e,i,t){"use strict";var n=t("224c"),s=t.n(n);s.a},"224c":function(e,i,t){},"857a":function(e,i,t){var n=t("1d80"),s=/"/g;e.exports=function(e,i,t,a){var c=String(n(e)),r="<"+i;return""!==t&&(r+=" "+t+'="'+String(a).replace(s,"&quot;")+'"'),r+">"+c+"</"+i+">"}},9911:function(e,i,t){"use strict";var n=t("23e7"),s=t("857a"),a=t("af03");n({target:"String",proto:!0,forced:a("link")},{link:function(e){return s(this,"a","href",e)}})},ab2a:function(e,i,t){"use strict";t("e260"),t("d3b7"),t("3ca3"),t("9911"),t("ddb0"),t("2b3d");i["a"]={methods:{clipToURL:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"image/jpeg",t=1;return new Promise((function(n,s){var a=e.$refs.clipper.clip({maxWPixel:1920});a.toBlob?a.toBlob((function(i){e.clipResult&&URL.revokeObjectURL(e.clipResult),e.clipResult=URL.createObjectURL(i),e.link=e.clipResult,e.resultDone(),n()}),i,t):(e.clipResult=a.toDataURL(i,t),e.link=e.clipResult,e.resultDone(),n())}))},resultDone:function(){this.done=!0}}}},af03:function(e,i,t){var n=t("d039");e.exports=function(e){return n((function(){var i=""[e]('"');return i!==i.toLowerCase()||i.split('"').length>3}))}},b237:function(e,i,t){"use strict";t.r(i);var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"list-content content"},[e._m(0),t("div",{staticClass:"area"},[e._m(1),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.const,expression:"code.const"}]},[t("code",{staticClass:"javascript"})]),t("p",[e._v("If you don't know how to get the result from clipping component, see the "),t("router-link",{attrs:{to:"/examples/quick-start"}},[e._v("quick start")]),e._v(".")],1)]),t("div",{staticClass:"area"},[t("h3",[e._v("canvas.toDataURL")]),t("p",[e._v("canvas to base64 encoded string, synchronous.")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.durl,expression:"code.durl"}]},[t("code",{staticClass:"javascript"})])]),t("div",{staticClass:"area"},[t("h3",[e._v("canvas.toBlob")]),e._m(2),t("p",[e._v("canvas to blob, asynchronous.")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.blob,expression:"code.blob"}]},[t("code",{staticClass:"javascript"})]),t("h3",[e._v("URL.createObjectURL")]),t("p",[e._v("Blob to image url(DOMString), using URL.createObjectURL, synchronous.")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.url,expression:"code.url"}]},[t("code",{staticClass:"javascript"})]),t("p",[e._v("simplified")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.urles6,expression:"code.urles6"}]},[t("code",{staticClass:"javascript"})]),t("h3",[e._v("FileReader")]),t("p",[e._v("Blob to image url(base64 encoded string), using FileReader, asynchronous.")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.reader,expression:"code.reader"}]},[t("code",{staticClass:"javascript"})])]),t("div",{staticClass:"area"},[t("p",[t("button",{on:{click:e.clip}},[e._v("clip image")])]),t("p",[t("img",{staticClass:"sample",attrs:{src:e.clipResult,alt:""}})]),t("clipper-fixed",{ref:"clipper",staticClass:"sample",attrs:{src:e.src}})],1)])},s=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"area"},[t("h2",[e._v("Canvas to Image")]),t("p",[e._v("Since clipper component's result is only a canvas element, you might want to transform canvas to image for more usages.")]),t("p",[e._v("There are many ways you can transform canvas into images (image URL), here are some examples.")])])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("First, we get the result (canvas) from clipping component and save it as "),t("i",[e._v("const canvas")])])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[t("b",[e._v("IE not supported.")])])}],a=t("09b5"),c=t("ab2a"),r={extends:{mixins:[c["a"]]},data:function(){return{src:"ex1.jpg",clipResult:"",code:a["d"]}},methods:{clip:function(){this.clipToURL()}}},l=r,p=(t("11bf"),t("2877")),o=Object(p["a"])(l,n,s,!1,null,"2efc7839",null);i["default"]=o.exports}}]);
//# sourceMappingURL=chunk-04519f82.faa2bcfb.js.map