// [CoffeeTable v0.3.0](http://code.alecperkins.net/coffeetable/)
(function(){var q,d,J,y,Q,R,A,B,S,C,T,K,w,U,k,r,L,x,V,D,M,E,t,N,W,F,X,O,G,P,h,z,H,Y,Z,u=Array.prototype.slice;J=[0,3,0];T={autoload_coffee_script:true,autoload_jquery:true,coffeescript_js:"http://cdnjs.cloudflare.com/ajax/libs/coffee-script/1.2.0/coffee-script.min.js",jquery_js:"http://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.1/jquery.min.js",local_storage:true,ls_key:"coffee-table",clear_on_load:false,replay_on_load:false,multi_line:false,indent:"    ",auto_suggest:true,widget_position:"fixed",
widget_top:"5px",widget_right:"5px",widget_id:"CoffeeTable-"+(new Date).getTime(),adopt_log:true,adopt_dir:true};x={UP:38,DOWN:40,ENTER:13,TAB:9,BACKSPACE:8,ESCAPE:27};H='<div id="__ID__">\n    <style type="text/css">\n        #__ID__{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;-webkit-box-shadow:0px 0px 4px #222;-moz-box-shadow:0px 0px 4px #222;box-shadow:0px 0px 4px #222;background:rgba(255,255,255,0.93);padding:0;border:2px solid #fff;z-index:2147483647;font-size:12px;font-family:Verdana,sans-serif;max-height:95%;max-width:60%;color:#000}#__ID__ div,#__ID__ span,#__ID__ applet,#__ID__ object,#__ID__ iframe,#__ID__ h1,#__ID__ h2,#__ID__ h3,#__ID__ h4,#__ID__ h5,#__ID__ h6,#__ID__ p,#__ID__ blockquote,#__ID__ pre,#__ID__ a,#__ID__ abbr,#__ID__ acronym,#__ID__ address,#__ID__ big,#__ID__ cite,#__ID__ code,#__ID__ del,#__ID__ dfn,#__ID__ em,#__ID__ img,#__ID__ ins,#__ID__ kbd,#__ID__ q,#__ID__ s,#__ID__ samp,#__ID__ small,#__ID__ strike,#__ID__ strong,#__ID__ sub,#__ID__ sup,#__ID__ tt,#__ID__ var,#__ID__ b,#__ID__ u,#__ID__ i,#__ID__ center,#__ID__ dl,#__ID__ dt,#__ID__ dd,#__ID__ ol,#__ID__ ul,#__ID__ li,#__ID__ fieldset,#__ID__ form,#__ID__ label,#__ID__ legend,#__ID__ table,#__ID__ caption,#__ID__ tbody,#__ID__ tfoot,#__ID__ thead,#__ID__ tr,#__ID__ th,#__ID__ td,#__ID__ article,#__ID__ aside,#__ID__ canvas,#__ID__ details,#__ID__ embed,#__ID__ figure,#__ID__ figcaption,#__ID__ footer,#__ID__ header,#__ID__ hgroup,#__ID__ menu,#__ID__ nav,#__ID__ output,#__ID__ ruby,#__ID__ section,#__ID__ summary,#__ID__ time,#__ID__ mark,#__ID__ audio,#__ID__ video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}#__ID__ table{border-collapse:collapse;border-spacing:0}#__ID__ caption,#__ID__ th,#__ID__ td{text-align:left;font-weight:normal;vertical-align:middle}#__ID__ q,#__ID__ blockquote{quotes:none}#__ID__ q:before,#__ID__ q:after,#__ID__ blockquote:before,#__ID__ blockquote:after{content:"";content:none}#__ID__ a img{border:none}#__ID__ *{visibility:visible;font-weight:500;-webkit-box-shadow:0px 0px 5px transparent;-moz-box-shadow:0px 0px 5px transparent;box-shadow:0px 0px 5px transparent;text-shadow:transparent 0px 0px 1px;-webkit-border-radius:0;-moz-border-radius:0;-ms-border-radius:0;-o-border-radius:0;border-radius:0;margin:0;padding:0;position:static}#__ID__ ul{text-align:left}#__ID__ .toggle-widget{float:right !important;background:#fff !important;border:1px solid #ccc !important;color:#911 !important;cursor:pointer !important;height:20px !important;width:78px !important;display:block !important;min-width:78px !important;min-height:20px !important;font-size:12px !important;line-height:1em !important;font-weight:500 !important}#__ID__ .toggle-widget:active,#__ID__ .toggle-widget.active{background:#911 !important;color:#fff !important}#__ID__ .coffee-source{font-family:monospace;font-size:15px;min-width:400px;height:22px;margin:4px}#__ID__ .input{display:none}#__ID__ .history{margin:8px;padding:4px;font-family:monospace;list-style-type:circle;overflow-y:scroll}#__ID__ .history li{padding:4px 1em 4px 4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;position:relative}#__ID__ .history li:hover{list-style-type:disc}#__ID__ .history li.cs-error{color:orange}#__ID__ .history li.js-error{color:red}#__ID__ .history li.object span.result{cursor:pointer}#__ID__ .history li.property-value{list-style-type:none}#__ID__ .history li.property-value span.property{color:purple}#__ID__ .history li li{padding-left:3em}#__ID__ .history li button{cursor:pointer}#__ID__ .history li button.load{position:absolute;right:0;top:0;border:1px solid #ccc;padding:2px;background:#fff}#__ID__ .history li button.load:hover{background-color:rgba(255,255,0,0.2)}#__ID__ .history li button.load:active{background-color:rgba(255,255,0,0.8)}#__ID__ .history li button.expand{background:transparent;border:0;width:1em}#__ID__ .history li span.opened{display:none}#__ID__ .history li.open > button span.opened,#__ID__ .history li.open > span.value > button span.opened{display:inline}#__ID__ .history li.open > button span.closed,#__ID__ .history li.open > span.value > button span.closed{display:none}#__ID__ p.instructions{text-align:center}#__ID__ .clear,#__ID__ .replay{padding:4px;text-align:center;cursor:pointer;float:left;color:#555;font-variant:small-caps;display:none}#__ID__ .clear:hover,#__ID__ .replay:hover{color:#911}#__ID__ a{padding:4px;text-align:center;cursor:pointer;float:right;color:#555;font-variant:small-caps;text-decoration:none}#__ID__ input{vertical-align:middle}#__ID__ p.mode{padding:4px;margin:0;float:right;display:inline-block;width:80px;color:#555;font-variant:small-caps;display:none;text-align:right}#__ID__ .autosuggest{-webkit-box-shadow:0px 0px 4px #222;-moz-box-shadow:0px 0px 4px #222;box-shadow:0px 0px 4px #222;position:absolute;top:-2px;left:-260px;display:block;background:rgba(255,255,255,0.9);width:250px;overflow-y:scroll;font-family:monospace}#__ID__ .autosuggest li{padding:4px}#__ID__ .autosuggest li.heading{font-weight:bold;text-decoration:underline;list-style-type:none}#__ID__ .function{color:#292}#__ID__ .number{color:#229}#__ID__ .string{color:#922}#__ID__ .undefined{color:grey;font-style:italic}#__ID__ .object{color:#000}#__ID__ .boolean{color:#299}\n    </style>\n    <button class="toggle-widget" title="CoffeeTable v'+
J.join(".")+'">CoffeeTable</button>\n    <span class="clear">clear</span><span class="replay">replay</span>\n    <a href="http://code.alecperkins.net/coffeetable/" target="_blank">?</a>\n    <p class="mode">multiline <input type="checkbox"></p>\n    <div class="input">\n        <textarea class="coffee-source"></textarea>\n        <p class="instructions"></p>\n        <ul class="autosuggest"></ul>\n        <ul class="history"></ul>\n    </div>\n</div>';d=h=q=null;z=E=K=y=false;r=0;t={jquery_js:false,
coffeescript_js:false};k=[];L=function(a){if(a==null)a={};if(t.jquery_js&&t.coffeescript_js){q=window.jQuery;if((h.adopt_log||h.adopt_dir)&&window.console==null){window.console={};if(h.adopt_log)window.console.log=function(){var b;b=1<=arguments.length?u.call(arguments,0):[];return C.apply(null,b)};if(h.adopt_dir)window.console.dir=function(){var b;b=1<=arguments.length?u.call(arguments,0):[];return B.apply(null,b)}}window.log=C;window.dir=B;H=H.replace(/__ID__/g,h.widget_id);X();h.local_storage&&
V();E=true}return E};C=function(){var a,b,c,e,f;b=1<=arguments.length?u.call(arguments,0):[];c=function(){var j;j=a.toString().replace(/\'/g,"\\'").replace(/\"/g,'\\"');return w("'log: "+j+"'")};e=0;for(f=b.length;e<f;e++){a=b[e];c()}};B=function(){var a,b,c,e;b=1<=arguments.length?u.call(arguments,0):[];c=0;for(e=b.length;c<e;c++){a=b[c];w(a,false,true)}};S=function(){var a,b;b=1<=arguments.length?u.call(arguments,0):[];return function(){var c,e,f;f=[];c=0;for(e=b.length;c<e;c++){a=b[c];f.push(w(a))}return f}()};
R=function(a,b){var c,e,f,j,i,l,g,m,s,v,o;if(b.which===x.ESCAPE||b.which===x.BACKSPACE&&a.length===0&&d.autosuggest_list.html().length!==0)return d.autosuggest_list.html("");else{i=a.split(".");g=[[window,"window"]];v=i.slice(0,i.length-1);m=0;for(s=v.length;m<s;m++){e=v[m];e=e.replace("(","").replace(")","");e.length>0&&g.push([g[g.length-1][0][e],e])}e=[];try{j=RegExp("^"+i[i.length-1]);o=g[g.length-1][0];for(c in o){l=o[c];f=j.exec(c);if((f!=null?f.length:void 0)>0)e.push([c,typeof l])}e.sort();
return W(g,e)}catch(n){}}};W=function(a,b){var c,e,f,j;c="";f=0;for(j=a.length;f<j;f++){e=a[f];c+=e[1]+"."}c="<li class='current-object'>"+c+"</li>";f=0;for(j=b.length;f<j;f++){e=b[f];c+="<li class='"+e[1]+"'>"+e[0]+"</li>"}d.autosuggest_list.html(c);return G()};V=function(){var a,b,c,e,f;if(typeof localStorage!=="undefined"&&localStorage!==null){b=localStorage.getItem(h.ls_key);if(b!=null){b=JSON.parse(b);f=[];c=0;for(e=b.length;c<e;c++){a=b[c];f.push(w(a,!h.replay_on_load))}return f}}else throw"localStorage not supported by this browser. History will not be persisted.";
};O=function(){var a,b,c,e,f,j;a=function(){var i,l,g;g=[];i=0;for(l=k.length;i<l;i++){b=k[i];g.push(b.source)}return g}();k=[];d.history_list.empty();r=0;j=[];e=0;for(f=a.length;e<f;e++){c=a[e];j.push(w(c))}return j};U=function(a,b){var c,e,f;e=function(j,i){return q("<li class='property-value' title='"+typeof i+": "+i+"'>\n    <span class='property'>"+j+":</span>\n    <span class='value "+typeof i+"'>"+i+"</span>\n</li>")};c=function(j,i){var l,g,m,s,v,o;i.children("ul").remove();l=q("<ul></ul>");
i.append(l);m=function(){var n;n=[];for(g in j)n.push(g);return n}();m.sort();o=[];s=0;for(v=m.length;s<v;s++){g=m[s];o.push(function(){var n,p,I;n=g;I=j[g];p=e(n,I);l.append(p);if(typeof I==="object"){n=q('<button class="expand"><span class="closed">+</span><span class="opened">-</span></button>');p.children("span.value").prepend(n);return n.click(function($){$.stopPropagation();if(p.hasClass("open")){p.removeClass("open");return p.find("ul").remove()}else{p.addClass("open");l.show();return c(I,
p)}})}}())}return o};f=q('<button class="expand"><span class="closed">+</span><span class="opened">-</span></button>');a.children("span.result").before(f);return f.click(function(){if(a.hasClass("open")){a.removeClass("open");return a.find("ul").remove()}else{a.addClass("open");return c(b,a)}})};w=function(a,b,c){var e,f,j,i,l,g,m;if(b==null)b=false;if(c==null)c=false;if(a==="localStorage.clear()")return A();else{k.length===0&&d.history_list.empty();r=-1;i=null;l=f=false;g="";if(c){g=a;a="'dir: "+
a.toString().replace("'","\\'")+"'"}else{try{e=CoffeeScript.compile(a,{bare:true})}catch(s){f=true;i=s}if(i==null&&!b)try{g=eval.call(window,e)}catch(v){l=true;i=v}else if(b)g=e}if(i!=null)g=i;k.push({result:g,source:c?a.toString():a});m=k.length-1;a=q("<button class='load' title='load: "+a+"'>^</button>");b=g.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");b=q("<li class='"+typeof g+"' title='"+typeof g+": "+b+"'>\n    "+m+":\n    <span class='result'>"+b+"</span>\n</li>").append(a);
if(l)b.addClass("js-error");else if(f)b.addClass("cs-error");else if(typeof g==="object"||c)U(b,g);a.click(function(){D(false,m);return d.textarea.focus()});b.prependTo(d.history_list);c=function(){var o,n,p;p=[];o=0;for(n=k.length;o<n;o++){j=k[o];p.push(j.source)}return p}();typeof localStorage!=="undefined"&&localStorage!==null&&localStorage.setItem(h.ls_key,JSON.stringify(c));d.clear_history.show();d.replay_history.show();return g}};A=function(){d.history_list.empty();k=[];typeof localStorage!==
"undefined"&&localStorage!==null&&localStorage.removeItem(h.ls_key);F();d.clear_history.hide();return d.replay_history.hide()};F=function(){var a;if(k.length===0){a=z?"type CoffeeScript, press <shift+enter>":"type CoffeeScript, press <enter>";return d.instructions.text(a)}};D=function(a,b){if(a==null)a=false;if(b!=null)r=b+1;if(r===-1||r===0)r=k.length-1;else if(a)r+=1;else r-=1;if(k.length>0){d.textarea.val(k[r].source);d.textarea.selectionStart=0;return d.textarea.selectionEnd=0}};Y=function(){var a;
if(z=!z){a="4em";d.autosuggest_list.hide()}else{a="";h.auto_suggest&&d.autosuggest_list.show()}d.textarea.css("height",a).focus();return F()};G=function(){var a;a=""+(window.innerHeight-140)+"px";d.autosuggest_list.css({"max-height":a,"max-width":""+(window.innerWidth-255)+"px"});return d.history_list.css("max-height",a)};X=function(){var a;a=q(H);d={widget:a,textarea:a.find("textarea"),autosuggest_list:a.find("ul.autosuggest"),history_list:a.find("ul.history"),button:a.find("button"),div:a.find("div"),
clear_history:a.find("span.clear"),replay_history:a.find("span.replay"),a:a.find("a"),toggle_multiline:a.find("input"),p:a.find("p.mode"),instructions:a.find("p.instructions"),li:a.find("li")};d.widget.css({position:""+h.widget_position,top:""+h.widget_top,right:""+h.widget_right});F();Q();a.appendTo("body");return G()};Q=function(){d.button.click(function(){if(y=!y){d.div.show();d.p.show();d.textarea.focus();return d.button.addClass("active")}else{d.div.hide();d.p.hide();return d.button.removeClass("active")}});
d.clear_history.click(function(){return A()});d.replay_history.click(function(){d.history_list.empty();return setTimeout(function(){return O()},100)});d.toggle_multiline.click(function(){return Y()});d.textarea.bind("keydown",function(a){var b;b=d.textarea.val();if(this.selectionStart===0)if(a.which===x.UP)D();else a.which===x.DOWN&&D(true);if(a.which===x.ENTER&&(!z||a.shiftKey)){a.preventDefault();if(b!==""){w(b);return d.textarea.val("")}}else if(a.which===x.TAB){a.preventDefault();a=this.selectionStart;
this.value=this.value.substring(0,a)+h.indent+this.value.substring(a);this.selectionStart=a+h.indent.length;return this.selectionEnd=a+h.indent.length}});d.textarea.bind("keyup",function(a){var b;b=d.textarea.val();if(!h.multi_line&&h.auto_suggest)return R(b,a)});h.multi_line&&d.toggle_multiline.click();return q(window).resize(function(){return G()})};Z=function(){d!=null&&d.widget.remove();window.CoffeeTable=null;return delete window.CoffeeTable};window.CoffeeTable={show:function(){d.widget.show();
return this},hide:function(){d.widget.hide();return this},clear:function(){A();return this},replay:function(){O();return this},deferInit:function(){K=true;return this},init:function(a){var b;if((b=window.CoffeeTable)!=null)b.unload();P(a);N();return this},unload:function(){Z();return this},active:function(){return y},log:function(){var a;a=1<=arguments.length?u.call(arguments,0):[];C.apply(null,a)},dir:function(){var a;a=1<=arguments.length?u.call(arguments,0):[];B.apply(null,a)},exec:function(){var a;
a=1<=arguments.length?u.call(arguments,0):[];return S.apply(null,a)},version:J};P=function(a){var b,c,e;h=T;e=[];for(b in a){c=a[b];e.push(h[b]=c)}return e};M=function(a){var b,c;b=document.getElementsByTagName("head")[0];c=document.createElement("script");c.type="application/javascript";c.src=h[a];c.async=true;c.onload=function(){t[a]=true;return L()};return b.appendChild(c)};N=function(){y=false;t.jquery_js=window.jQuery!=null;t.coffeescript_js=window.CoffeeScript!=null;if(!t.coffeescript_js)if(h.autoload_coffee_script)M("coffeescript_js");
else throw"CoffeeTable requires coffee_script.js";if(!t.jquery_js)if(h.autoload_jquery)M("jquery_js");else throw"CoffeeTable requires jQuery";return L()};document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);if(!K&&!E){P();return N()}},false)}).call(this);