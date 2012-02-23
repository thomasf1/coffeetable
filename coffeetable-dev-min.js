// CoffeeTable vDEV: http://code.alecperkins.net/coffeetable/
(function(){var p,b,q,H,I,s,J,y,t,j,l,z,o,K,u,A,B,n,C,L,v,M,D,E,F,h,r,w,N,O,P;J={autoload_coffee_script:true,autoload_jquery:true,coffeescript_js:"http://code.alecperkins.net/coffeetable/lib/coffee_script-1.1.1-min.js",jquery_js:"http://code.alecperkins.net/coffeetable/lib/jquery-1.6.2-min.js",local_storage:true,ls_key:"coffee-table",clear_on_load:false,replay_on_load:false,multi_line:false,indent:"    ",auto_suggest:true,widget_position:"fixed",widget_top:"5px",widget_right:"5px",widget_id:"CoffeeTable-"+
(new Date).getTime()};typeof console!=="undefined"&&console!==null||(console={log:function(){},dir:function(){}});if(window.log==null)window.log=function(){return console.log.apply(console,arguments)};if(window.dir==null)window.dir=function(){return console.dir.apply(console,arguments)};o={UP:38,DOWN:40,ENTER:13,TAB:9,BACKSPACE:8,ESCAPE:27};w='<div id="__ID__"><style type="text/css">#__ID__{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;-moz-box-shadow:0px 0px 4px #222222;-webkit-box-shadow:0px 0px 4px #222222;-o-box-shadow:0px 0px 4px #222222;box-shadow:0px 0px 4px #222222;background:rgba(255,255,255,0.93);padding:0;border:2px solid #fff;z-index:2147483647;font-size:12px;font-family:Verdana,sans-serif;max-height:95%;max-width:900px;color:#000}#__ID__ div,#__ID__ span,#__ID__ applet,#__ID__ object,#__ID__ iframe,#__ID__ h1,#__ID__ h2,#__ID__ h3,#__ID__ h4,#__ID__ h5,#__ID__ h6,#__ID__ p,#__ID__ blockquote,#__ID__ pre,#__ID__ a,#__ID__ abbr,#__ID__ acronym,#__ID__ address,#__ID__ big,#__ID__ cite,#__ID__ code,#__ID__ del,#__ID__ dfn,#__ID__ em,#__ID__ img,#__ID__ ins,#__ID__ kbd,#__ID__ q,#__ID__ s,#__ID__ samp,#__ID__ small,#__ID__ strike,#__ID__ strong,#__ID__ sub,#__ID__ sup,#__ID__ tt,#__ID__ var,#__ID__ b,#__ID__ u,#__ID__ i,#__ID__ center,#__ID__ dl,#__ID__ dt,#__ID__ dd,#__ID__ ol,#__ID__ ul,#__ID__ li,#__ID__ fieldset,#__ID__ form,#__ID__ label,#__ID__ legend,#__ID__ table,#__ID__ caption,#__ID__ tbody,#__ID__ tfoot,#__ID__ thead,#__ID__ tr,#__ID__ th,#__ID__ td,#__ID__ article,#__ID__ aside,#__ID__ canvas,#__ID__ details,#__ID__ embed,#__ID__ figure,#__ID__ figcaption,#__ID__ footer,#__ID__ header,#__ID__ hgroup,#__ID__ menu,#__ID__ nav,#__ID__ output,#__ID__ ruby,#__ID__ section,#__ID__ summary,#__ID__ time,#__ID__ mark,#__ID__ audio,#__ID__ video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}#__ID__ table{border-collapse:collapse;border-spacing:0}#__ID__ caption,#__ID__ th,#__ID__ td{text-align:left;font-weight:normal;vertical-align:middle}#__ID__ q,#__ID__ blockquote{quotes:none}#__ID__ q:before,#__ID__ q:after,#__ID__ blockquote:before,#__ID__ blockquote:after{content:"";content:none}#__ID__ a img{border:none}#__ID__ *{visibility:visible;font-weight:500;-moz-box-shadow:0px 0px 5px transparent;-webkit-box-shadow:0px 0px 5px transparent;-o-box-shadow:0px 0px 5px transparent;box-shadow:0px 0px 5px transparent;text-shadow:transparent 0px 0px 1px;-moz-border-radius:0;-webkit-border-radius:0;-o-border-radius:0;-ms-border-radius:0;-khtml-border-radius:0;border-radius:0;margin:0;padding:0;position:static}#__ID__ ul{text-align:left}#__ID__ .toggle-widget{float:right!important;background:#fff!important;border:1px solid #ccc!important;color:#911!important;cursor:pointer!important;height:20px!important;width:78px!important;display:block!important;min-width:78px!important;min-height:20px!important;font-size:12px!important;line-height:1em!important;font-weight:500!important}#__ID__ .toggle-widget:active,#__ID__ .toggle-widget.active{background:#911!important;color:#fff!important}#__ID__ .coffee-source{font-family:monospace;font-size:15px;min-width:400px;height:22px;margin:4px}#__ID__ .input{display:none}#__ID__ .history{margin:8px;padding:4px 4px 4px 16px;font-family:monospace;list-style-type:circle;overflow-y:scroll}#__ID__ .history li{padding:4px;cursor:pointer}#__ID__ .history li:hover{background-color:rgba(255,255,0,0.2);list-style-type:disc}#__ID__ .history li:active{background-color:rgba(255,255,0,0.8)}#__ID__ .history li.cs-error{color:orange}#__ID__ .history li.js-error{color:red}#__ID__ p.instructions{text-align:center}#__ID__ .clear,#__ID__ .replay{padding:4px;text-align:center;cursor:pointer;float:left;color:#555;font-variant:small-caps;display:none}#__ID__ .clear:hover,#__ID__ .replay:hover{color:#911}#__ID__ a{padding:4px;text-align:center;cursor:pointer;float:right;color:#555;font-variant:small-caps;text-decoration:none}#__ID__ input{vertical-align:middle}#__ID__ p.mode{padding:4px;margin:0;float:right;display:inline-block;width:80px;color:#555;font-variant:small-caps;display:none;text-align:right}#__ID__ .autosuggest{-moz-box-shadow:0px 0px 4px #222222;-webkit-box-shadow:0px 0px 4px #222222;-o-box-shadow:0px 0px 4px #222222;box-shadow:0px 0px 4px #222222;position:absolute;top:-2px;left:-260px;display:block;background:rgba(255,255,255,0.9);width:250px;overflow-y:scroll;font-family:monospace}#__ID__ .autosuggest li{padding:4px}#__ID__ .autosuggest li.heading{font-weight:bold;text-decoration:underline;list-style-type:none}#__ID__ .function{color:#292}#__ID__ .number{color:#229}#__ID__ .string{color:#922}#__ID__ .undefined{color:grey;font-style:italic}#__ID__ .object{color:#000}#__ID__ .boolean{color:#299}</style><button class="toggle-widget">CoffeeTable</button><span class="clear">clear</span><span class="replay">replay</span><a href="http://code.alecperkins.net/coffeetable/" target="_blank">?</a><p class="mode">multiline <input type="checkbox"></p><div class="input"><textarea class="coffee-source"></textarea><p class="instructions"></p><ul class="autosuggest"></ul><ul class="history"></ul></div></div>';
b=h=p=null;r=B=y=q=false;l=0;n={jquery_js:false,coffeescript_js:false};j=[];z=function(){if(n.jquery_js&&n.coffeescript_js){p=window.jQuery;w=w.replace(/__ID__/g,h.widget_id);M();h.local_storage&&K();return B=true}};I=function(a,d){var c,e,f,g,k,i,m;if(d.which===o.ESCAPE||d.which===o.BACKSPACE&&a.length===0&&b.autosuggest_list.html().length!==0)return b.autosuggest_list.html("");else{f=a.split(".");i=[[window,"window"]];m=f.slice(0,f.length-1);g=0;for(k=m.length;g<k;g++){e=m[g];e=e.replace("(","").replace(")",
"");e.length>0&&i.push([i[i.length-1][0][e],e])}e=[];g=RegExp("^"+f[f.length-1]);m=i[i.length-1][0];for(c in m){k=m[c];f=g.exec(c);if((f!=null?f.length:void 0)>0)e.push([c,typeof k])}e.sort();return L(i,e)}};L=function(a,d){var c,e,f,g;c="";f=0;for(g=a.length;f<g;f++){e=a[f];c+=e[1]+"."}c="<li class='current-object'>"+c+"</li>";f=0;for(g=d.length;f<g;f++){e=d[f];c+="<li class='"+e[1]+"'>"+e[0]+"</li>"}b.autosuggest_list.html(c);return E()};K=function(){var a,d,c,e,f;if(typeof localStorage!=="undefined"&&
localStorage!==null){d=localStorage.getItem(h.ls_key);if(d!=null){d=JSON.parse(d);f=[];c=0;for(e=d.length;c<e;c++){a=d[c];f.push(t(a,!h.replay_on_load))}return f}}else throw"localStorage not supported by this browser. History will not be persisted.";};D=function(){var a,d,c,e,f;a=function(){var g,k,i;i=[];g=0;for(k=j.length;g<k;g++){d=j[g];i.push(d.source)}return i}();j=[];b.history_list.empty();l=0;f=[];c=0;for(e=a.length;c<e;c++){d=a[c];f.push(t(d))}return f};t=function(a,d){var c,e,f,g,k,i,m;if(d==
null)d=false;if(a==="localStorage.clear()")return s();else{j.length===0&&b.history_list.empty();l=-1;g=null;k=e=false;try{c=CoffeeScript.compile(a,{bare:true})}catch(R){e=true;g=R}if(g==null&&!d)try{i=eval.call(window,c)}catch(S){k=true;g=S}else if(d)i=c;if(g!=null)i=g;j.push({result:i,source:a});m=j.length-1;c=p("<li class='"+typeof i+"'></li>").text(""+m+": "+i);if(k)c.addClass("js-error");else e&&c.addClass("cs-error");c.click(function(){u(false,m);return b.textarea.focus()});c.prependTo(b.history_list);
e=function(){var x,Q,G;G=[];x=0;for(Q=j.length;x<Q;x++){f=j[x];G.push(f.source)}return G}();typeof localStorage!=="undefined"&&localStorage!==null&&localStorage.setItem(h.ls_key,JSON.stringify(e));b.clear_history.show();return b.replay_history.show()}};s=function(){b.history_list.empty();j=[];typeof localStorage!=="undefined"&&localStorage!==null&&localStorage.removeItem(h.ls_key);v();b.clear_history.hide();return b.replay_history.hide()};v=function(){var a;if(j.length===0){a=r?"type CoffeeScript, press <shift+enter>":
"type CoffeeScript, press <enter>";return b.instructions.text(a)}};u=function(a,d){if(a==null)a=false;if(d!=null)l=d+1;if(l===-1||l===0)l=j.length-1;else if(a)l+=1;else l-=1;if(j.length>0){b.textarea.val(j[l].source);b.textarea.selectionStart=0;return b.textarea.selectionEnd=0}};N=function(){var a;if(r=!r){a="4em";b.autosuggest_list.hide()}else{a="";h.auto_suggest&&b.autosuggest_list.show()}b.textarea.css("height",a).focus();return v()};E=function(){var a;a=""+(window.innerHeight-140)+"px";b.autosuggest_list.css({"max-height":a,
"max-width":""+(window.innerWidth-255)+"px"});return b.history_list.css("max-height",a)};M=function(){var a;a=p(w);b={widget:a,textarea:a.find("textarea"),autosuggest_list:a.find("ul.autosuggest"),history_list:a.find("ul.history"),button:a.find("button"),div:a.find("div"),clear_history:a.find("span.clear"),replay_history:a.find("span.replay"),a:a.find("a"),toggle_multiline:a.find("input"),p:a.find("p.mode"),instructions:a.find("p.instructions"),li:a.find("li")};b.widget.css({position:""+h.widget_position,
top:""+h.widget_top,right:""+h.widget_right});v();H();return a.appendTo("body")};H=function(){b.button.click(function(){if(q=!q){b.div.show();b.p.show();b.textarea.focus();return b.button.addClass("active")}else{b.div.hide();b.p.hide();return b.button.removeClass("active")}});b.clear_history.click(function(){return s()});b.replay_history.click(function(){b.history_list.empty();return setTimeout(function(){return D()},100)});b.toggle_multiline.click(function(){return N()});b.textarea.bind("keydown",
function(a){var d;d=b.textarea.val();if(this.selectionStart===0)if(a.which===o.UP)u();else a.which===o.DOWN&&u(true);if(a.which===o.ENTER&&(!r||a.shiftKey)){a.preventDefault();if(d!==""){t(d);return b.textarea.val("")}}else if(a.which===o.TAB){a.preventDefault();a=this.selectionStart;this.value=this.value.substring(0,a)+h.indent+this.value.substring(a);this.selectionStart=a+h.indent.length;return this.selectionEnd=a+h.indent.length}});b.textarea.bind("keyup",function(a){var d;d=b.textarea.val();if(!h.multi_line&&
h.auto_suggest)return I(d,a)});h.multi_line&&b.toggle_multiline.click();return p(window).resize(function(){return E()})};O=function(){b.widget.remove();window.CoffeeTable=null;return delete window.CoffeeTable};if((P=window.CoffeeTable)!=null)P.unload();window.CoffeeTable={show:function(){b.widget.show();return this},hide:function(){b.widget.hide();return this},clear:function(){s();return this},replay:function(){D();return this},deferInit:function(){y=true;return this},init:function(a){F(a);C();return this},
unload:function(){O();return this},active:function(){return q}};F=function(a){var d,c,e;h=J;e=[];for(d in a){c=a[d];e.push(h[d]=c)}return e};A=function(a){var d,c;d=document.getElementsByTagName("head")[0];c=document.createElement("script");c.type="application/javascript";c.src=h[a];c.async=true;c.onload=function(){n[a]=true;return z()};return d.appendChild(c)};C=function(){q=false;n.jquery_js=window.jQuery!=null;n.coffeescript_js=window.CoffeeScript!=null;if(!n.coffeescript_js)if(h.autoload_coffee_script)A("coffeescript_js");
else throw"CoffeeTable requires coffee_script.js";if(!n.jquery_js)if(h.autoload_jquery)A("jquery_js");else throw"CoffeeTable requires jQuery";return z()};document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);if(!y&&!B){F();return C()}},false)}).call(this);