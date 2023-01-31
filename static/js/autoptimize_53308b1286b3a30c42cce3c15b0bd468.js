/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+o[i]<+n[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.3.2",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;s.migrateDeduplicateWarnings&&r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a,c,d={},l=s.fn.init,p=s.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),l.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&f.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(y,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return p.apply(this,r)},p)Object.prototype.hasOwnProperty.call(p,i)&&(s.find[i]=p[i]);o(s.fn,"size",function(){return this.length},"jQuery.fn.size() is deprecated and removed; use the .length property"),o(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"jQuery.parseJSON is deprecated; use JSON.parse"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&o(s,"trim",function(e){return null==e?"":(e+"").replace(m,"")},"jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(o(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"jQuery.nodeName is deprecated"),o(s,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(o(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()}),o(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[Object.prototype.toString.call(e)]||"object":typeof e},"jQuery.type is deprecated"),o(s,"isFunction",function(e){return"function"==typeof e},"jQuery.isFunction() is deprecated"),o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated")),s.ajax&&(a=s.ajax,c=/(=)\?(?=&|$)|\?\?/,s.ajax=function(){var e=a.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e},e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(c.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&c.test(e.data))&&u("JSON-to-JSONP auto-promotion is deprecated")}));var g=s.fn.removeAttr,h=s.fn.toggleClass,v=/\S+/g;function j(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}s.fn.removeAttr=function(e){var r=this;return s.each(e.match(v),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),g.apply(this,arguments)};var Q,b=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?h.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))}),w=/^[a-z]/,x=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return b=!0,e=r.apply(this,arguments),b=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in b||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o},e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),s.cssNumber||(s.cssNumber={}),Q=s.fn.css,s.fn.css=function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=j(e),n=r,w.test(n)&&x.test(n[0].toUpperCase()+n.slice(1))||s.cssNumber[r]||u('Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))};var A,k,S,M,N=s.data;s.data=function(e,t,r){var n,o,i;if(t&&"object"==typeof t&&2===arguments.length){for(i in n=s.hasData(e)&&N.call(this,e),o={},t)i!==j(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return N.call(this,e,o),t}return t&&"string"==typeof t&&t!==j(t)&&(n=s.hasData(e)&&N.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):N.apply(this,arguments)},s.fx&&(S=s.Tween.prototype.run,M=function(e){return e},s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=M),S.apply(this,arguments)},A=s.fx.interval||13,k="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(k),A},set:function(e){u(k),A=e}}));var R=s.fn.load,H=s.event.add,C=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=C.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),H.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?R.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}function P(e){var t=e.replace(O,"<$1></$2>");t!==e&&T(e)!==T(t)&&u("HTML tags must be properly nested and closed: "+e)}var O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,q=s.htmlPrefilter;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.htmlPrefilter=function(e){return P(e),e.replace(O,"<$1></$2>")}},s.htmlPrefilter=function(e){return P(e),q(e)};var D,_=s.fn.offset;s.fn.offset=function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(u("jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},s.ajax&&(D=s.param,s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)});var E,F,J=s.fn.andSelf||s.fn.addBack;return s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),J.apply(this,arguments)},s.Deferred&&(E=s.Deferred,F=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],s.Deferred=function(e){var i=E(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(F,function(e,t){var r="function"==typeof o[e]&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=E.exceptionHook),s});
(function($){'use strict';$(document).on('click','.sl-button',function(){var button=$(this);var post_id=button.attr('data-post-id');var security=button.attr('data-nonce');var iscomment=button.attr('data-iscomment');var allbuttons;if(iscomment==='1'){allbuttons=$('.sl-comment-button-'+post_id);}else{allbuttons=$('.sl-button-'+post_id);}
var loader=allbuttons.next('.sl-loader');if(post_id!==''){$.ajax({type:'POST',url:simpleLikes.ajaxurl,data:{action:'process_simple_like',post_id:post_id,nonce:security,is_comment:iscomment,},beforeSend:function(){loader.html('');},success:function(response){var icon=response.icon;var count=response.count;allbuttons.html(icon+count);if(response.status==='unliked'){var like_text=simpleLikes.like;allbuttons.prop('title',like_text);allbuttons.removeClass('liked');}else{var unlike_text=simpleLikes.unlike;allbuttons.prop('title',unlike_text);allbuttons.addClass('liked');}
loader.empty();}});}
return false;});})(jQuery);
(function($,w){"use strict";var methods=(function(){var c={bcClass:'sf-breadcrumb',menuClass:'sf-js-enabled',anchorClass:'sf-with-ul',menuArrowClass:'sf-arrows'},ios=(function(){var ios=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);if(ios){$('html').css('cursor','pointer').on('click',$.noop);}
return ios;})(),wp7=(function(){var style=document.documentElement.style;return('behavior'in style&&'fill'in style&&/iemobile/i.test(navigator.userAgent));})(),unprefixedPointerEvents=(function(){return(!!w.PointerEvent);})(),toggleMenuClasses=function($menu,o,add){var classes=c.menuClass,method;if(o.cssArrows){classes+=' '+c.menuArrowClass;}
method=(add)?'addClass':'removeClass';$menu[method](classes);},setPathToCurrent=function($menu,o){return $menu.find('li.'+o.pathClass).slice(0,o.pathLevels).addClass(o.hoverClass+' '+c.bcClass).filter(function(){return($(this).children(o.popUpSelector).hide().show().length);}).removeClass(o.pathClass);},toggleAnchorClass=function($li,add){var method=(add)?'addClass':'removeClass';$li.children('a')[method](c.anchorClass);},toggleTouchAction=function($menu){var msTouchAction=$menu.css('ms-touch-action');var touchAction=$menu.css('touch-action');touchAction=touchAction||msTouchAction;touchAction=(touchAction==='pan-y')?'auto':'pan-y';$menu.css({'ms-touch-action':touchAction,'touch-action':touchAction});},getMenu=function($el){return $el.closest('.'+c.menuClass);},getOptions=function($el){return getMenu($el).data('sfOptions');},over=function(){var $this=$(this),o=getOptions($this);clearTimeout(o.sfTimer);$this.siblings().superfish('hide').end().superfish('show');},close=function(o){o.retainPath=($.inArray(this[0],o.$path)>-1);this.superfish('hide');if(!this.parents('.'+o.hoverClass).length){o.onIdle.call(getMenu(this));if(o.$path.length){$.proxy(over,o.$path)();}}},out=function(){var $this=$(this),o=getOptions($this);if(ios){$.proxy(close,$this,o)();}
else{clearTimeout(o.sfTimer);o.sfTimer=setTimeout($.proxy(close,$this,o),o.delay);}},touchHandler=function(e){var $this=$(this),o=getOptions($this),$ul=$this.siblings(e.data.popUpSelector);if(o.onHandleTouch.call($ul)===false){return this;}
if($ul.length>0&&$ul.is(':hidden')){$this.one('click.superfish',false);if(e.type==='MSPointerDown'||e.type==='pointerdown'){$this.trigger('focus');}else{$.proxy(over,$this.parent('li'))();}}},applyHandlers=function($menu,o){var targets='li:has('+o.popUpSelector+')';if($.fn.hoverIntent&&!o.disableHI){$menu.hoverIntent(over,out,targets);}
else{$menu.on('mouseenter.superfish',targets,over).on('mouseleave.superfish',targets,out);}
var touchevent='MSPointerDown.superfish';if(unprefixedPointerEvents){touchevent='pointerdown.superfish';}
if(!ios){touchevent+=' touchend.superfish';}
if(wp7){touchevent+=' mousedown.superfish';}
$menu.on('focusin.superfish','li',over).on('focusout.superfish','li',out).on(touchevent,'a',o,touchHandler);};return{hide:function(instant){if(this.length){var $this=this,o=getOptions($this);if(!o){return this;}
var not=(o.retainPath===true)?o.$path:'',$ul=$this.find('li.'+o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),speed=o.speedOut;if(instant){$ul.show();speed=0;}
o.retainPath=false;if(o.onBeforeHide.call($ul)===false){return this;}
$ul.stop(true,true).animate(o.animationOut,speed,function(){var $this=$(this);o.onHide.call($this);});}
return this;},show:function(){var o=getOptions(this);if(!o){return this;}
var $this=this.addClass(o.hoverClass),$ul=$this.children(o.popUpSelector);if(o.onBeforeShow.call($ul)===false){return this;}
$ul.stop(true,true).animate(o.animation,o.speed,function(){o.onShow.call($ul);});return this;},destroy:function(){return this.each(function(){var $this=$(this),o=$this.data('sfOptions'),$hasPopUp;if(!o){return false;}
$hasPopUp=$this.find(o.popUpSelector).parent('li');clearTimeout(o.sfTimer);toggleMenuClasses($this,o);toggleAnchorClass($hasPopUp);toggleTouchAction($this);$this.off('.superfish').off('.hoverIntent');$hasPopUp.children(o.popUpSelector).attr('style',function(i,style){return style.replace(/display[^;]+;?/g,'');});o.$path.removeClass(o.hoverClass+' '+c.bcClass).addClass(o.pathClass);$this.find('.'+o.hoverClass).removeClass(o.hoverClass);o.onDestroy.call($this);$this.removeData('sfOptions');});},init:function(op){return this.each(function(){var $this=$(this);if($this.data('sfOptions')){return false;}
var o=$.extend({},$.fn.superfish.defaults,op),$hasPopUp=$this.find(o.popUpSelector).parent('li');o.$path=setPathToCurrent($this,o);$this.data('sfOptions',o);toggleMenuClasses($this,o,true);toggleAnchorClass($hasPopUp,true);toggleTouchAction($this);applyHandlers($this,o);$hasPopUp.not('.'+c.bcClass).superfish('hide',true);o.onInit.call(this);});}};})();$.fn.superfish=function(method,args){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}
else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}
else{return $.error('Method '+method+' does not exist on jQuery.fn.superfish');}};$.fn.superfish.defaults={popUpSelector:'ul,.sf-mega',hoverClass:'sfHover',pathClass:'overrideThisToUse',pathLevels:1,delay:800,animation:{opacity:'show'},animationOut:{opacity:'hide'},speed:'normal',speedOut:'fast',cssArrows:true,disableHI:false,onInit:$.noop,onBeforeShow:$.noop,onShow:$.noop,onBeforeHide:$.noop,onHide:$.noop,onIdle:$.noop,onDestroy:$.noop,onHandleTouch:$.noop};})(jQuery,window);

;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

;(function($) {
  var defaults = {
    mode: 'horizontal',
    slideSelector: '',
    infiniteLoop: true,
    hideControlOnEnd: false,
    speed: 500,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: false,
    captions: false,
    ticker: false,
    tickerHover: false,
    adaptiveHeight: false,
    adaptiveHeightSpeed: 500,
    video: false,
    useCSS: true,
    preloadImages: 'visible',
    responsive: true,
    slideZIndex: 50,
    wrapperClass: 'bx-wrapper',
    touchEnabled: true,
    swipeThreshold: 50,
    oneToOneTouch: true,
    preventDefaultSwipeX: true,
    preventDefaultSwipeY: false,
    ariaLive: true,
    ariaHidden: true,
    keyboardEnabled: false,
    pager: true,
    pagerType: 'full',
    pagerShortSeparator: ' / ',
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,
    controls: true,
    nextText: 'Next',
    prevText: 'Prev',
    nextSelector: null,
    prevSelector: null,
    autoControls: false,
    startText: 'Start',
    stopText: 'Stop',
    autoControlsCombine: false,
    autoControlsSelector: null,
    auto: false,
    pause: 4000,
    autoStart: true,
    autoDirection: 'next',
    stopAutoOnClick: false,
    autoHover: false,
    autoDelay: 0,
    autoSlideForOnePage: false,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    shrinkItems: false,
    onSliderLoad: function() { return true; },
    onSlideBefore: function() { return true; },
    onSlideAfter: function() { return true; },
    onSlideNext: function() { return true; },
    onSlidePrev: function() { return true; },
    onSliderResize: function() { return true; },
  onAutoChange: function() { return true; } //calls when auto slides starts and stops
  };
  $.fn.bxSlider = function(options) {
    if (this.length === 0) {
      return this;
    }
    if (this.length > 1) {
      this.each(function() {
        $(this).bxSlider(options);
      });
      return this;
    }
    var slider = {},
    el = this,
    windowWidth = $(window).width(),
    windowHeight = $(window).height();
    if ($(el).data('bxSlider')) { return; }
    /**
     * ===================================================================================
     * = PRIVATE FUNCTIONS
     * ===================================================================================
     */
    /**
     * Initializes namespace settings to be used throughout plugin
     */
    var init = function() {
      if ($(el).data('bxSlider')) { return; }
      slider.settings = $.extend({}, defaults, options);
      slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
      slider.children = el.children(slider.settings.slideSelector);
      if (slider.children.length < slider.settings.minSlides) { slider.settings.minSlides = slider.children.length; }
      if (slider.children.length < slider.settings.maxSlides) { slider.settings.maxSlides = slider.children.length; }
      if (slider.settings.randomStart) { slider.settings.startSlide = Math.floor(Math.random() * slider.children.length); }
      slider.active = { index: slider.settings.startSlide };
      slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
      if (slider.carousel) { slider.settings.preloadImages = 'all'; }
      slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
      slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
      slider.working = false;
      slider.controls = {};
      slider.interval = null;
      slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
      slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && (function() {
        var div = document.createElement('div'),
        props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
        for (var i = 0; i < props.length; i++) {
          if (div.style[props[i]] !== undefined) {
            slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
            slider.animProp = '-' + slider.cssPrefix + '-transform';
            return true;
          }
        }
        return false;
      }());
      if (slider.settings.mode === 'vertical') { slider.settings.maxSlides = slider.settings.minSlides; }
      el.data('origStyle', el.attr('style'));
      el.children(slider.settings.slideSelector).each(function() {
        $(this).data('origStyle', $(this).attr('style'));
      });
      setup();
    };
    /**
     * Performs all DOM and CSS modifications
     */
    var setup = function() {
      var preloadSelector = slider.children.eq(slider.settings.startSlide); // set the default preload selector (visible)
      el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
      slider.viewport = el.parent();
      if (slider.settings.ariaLive && !slider.settings.ticker) {
        slider.viewport.attr('aria-live', 'polite');
      }
      slider.loader = $('<div class="bx-loading" />');
      slider.viewport.prepend(slider.loader);
      el.css({
        width: slider.settings.mode === 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
        position: 'relative'
      });
      if (slider.usingCSS && slider.settings.easing) {
        el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
      } else if (!slider.settings.easing) {
        slider.settings.easing = 'swing';
      }
      slider.viewport.css({
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      });
      slider.viewport.parent().css({
        maxWidth: getViewportMaxWidth()
      });
      slider.children.css({
        'float': slider.settings.mode === 'horizontal' ? 'left' : 'none',
        listStyle: 'none',
        position: 'relative'
      });
      slider.children.css('width', getSlideWidth());
      if (slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0) { slider.children.css('marginRight', slider.settings.slideMargin); }
      if (slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0) { slider.children.css('marginBottom', slider.settings.slideMargin); }
      if (slider.settings.mode === 'fade') {
        slider.children.css({
          position: 'absolute',
          zIndex: 0,
          display: 'none'
        });
        slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
      }
      slider.controls.el = $('<div class="bx-controls" />');
      if (slider.settings.captions) { appendCaptions(); }
      slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
      if (slider.settings.video) { el.fitVids(); }
    if (slider.settings.preloadImages === 'none') { 
      preloadSelector = null; 
    }
      else if (slider.settings.preloadImages === 'all' || slider.settings.ticker) { 
      preloadSelector = slider.children; 
    }
      if (!slider.settings.ticker) {
        if (slider.settings.controls) { appendControls(); }
        if (slider.settings.auto && slider.settings.autoControls) { appendControlsAuto(); }
        if (slider.settings.pager) { appendPager(); }
        if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) { slider.viewport.after(slider.controls.el); }
      } else {
        slider.settings.pager = false;
      }
    if (preloadSelector === null) {
        start();
      } else {
        loadElements(preloadSelector, start);
      }
    };
    var loadElements = function(selector, callback) {
      var total = selector.find('img:not([src=""]), iframe').length,
      count = 0;
      if (total === 0) {
        callback();
        return;
      }
      selector.find('img:not([src=""]), iframe').each(function() {
        $(this).one('load error', function() {
          if (++count === total) { callback(); }
        }).each(function() {
          if (this.complete || this.src == '') { $(this).trigger('load'); }
        });
      });
    };
    /**
     * Start the slider
     */
    var start = function() {
      if (slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker) {
        var slice    = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides,
        sliceAppend  = slider.children.slice(0, slice).clone(true).addClass('bx-clone'),
        slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
        if (slider.settings.ariaHidden) {
          sliceAppend.attr('aria-hidden', true);
          slicePrepend.attr('aria-hidden', true);
        }
        el.append(sliceAppend).prepend(slicePrepend);
      }
      slider.loader.remove();
      setSlidePosition();
      if (slider.settings.mode === 'vertical') { slider.settings.adaptiveHeight = true; }
      slider.viewport.height(getViewportHeight());
      el.redrawSlider();
      slider.settings.onSliderLoad.call(el, slider.active.index);
      slider.initialized = true;
      if (slider.settings.responsive) { $(window).on('resize', resizeWindow); }
      if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) { initAuto(); }
      if (slider.settings.ticker) { initTicker(); }
      if (slider.settings.pager) { updatePagerActive(slider.settings.startSlide); }
      if (slider.settings.controls) { updateDirectionControls(); }
      if (slider.settings.touchEnabled && !slider.settings.ticker) { initTouch(); }
      if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
        $(document).keydown(keyPress);
      }
    };
    /**
     * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
     */
    var getViewportHeight = function() {
      var height = 0;
      var children = $();
      if (slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight) {
        children = slider.children;
      } else {
        if (!slider.carousel) {
          children = slider.children.eq(slider.active.index);
        } else {
          var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
          children = slider.children.eq(currentIndex);
          for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
            if (currentIndex + i >= slider.children.length) {
              children = children.add(slider.children.eq(i - 1));
            } else {
              children = children.add(slider.children.eq(currentIndex + i));
            }
          }
        }
      }
      if (slider.settings.mode === 'vertical') {
        children.each(function(index) {
          height += $(this).outerHeight();
        });
        if (slider.settings.slideMargin > 0) {
          height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
        }
      } else {
        height = Math.max.apply(Math, children.map(function() {
          return $(this).outerHeight(false);
        }).get());
      }
      if (slider.viewport.css('box-sizing') === 'border-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
              parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
      } else if (slider.viewport.css('box-sizing') === 'padding-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
      }
      return height;
    };
    /**
     * Returns the calculated width to be used for the outer wrapper / viewport
     */
    var getViewportMaxWidth = function() {
      var width = '100%';
      if (slider.settings.slideWidth > 0) {
        if (slider.settings.mode === 'horizontal') {
          width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
        } else {
          width = slider.settings.slideWidth;
        }
      }
      return width;
    };
    /**
     * Returns the calculated width to be applied to each slide
     */
    var getSlideWidth = function() {
      var newElWidth = slider.settings.slideWidth, // start with any user-supplied slide width
      wrapWidth      = slider.viewport.width();    // get the current viewport width
      if (slider.settings.slideWidth === 0 ||
        (slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
        slider.settings.mode === 'vertical') {
        newElWidth = wrapWidth;
      } else if (slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal') {
        if (wrapWidth > slider.maxThreshold) {
          return newElWidth;
        } else if (wrapWidth < slider.minThreshold) {
          newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
        } else if (slider.settings.shrinkItems) {
          newElWidth = Math.floor((wrapWidth + slider.settings.slideMargin) / (Math.ceil((wrapWidth + slider.settings.slideMargin) / (newElWidth + slider.settings.slideMargin))) - slider.settings.slideMargin);
        }
      }
      return newElWidth;
    };
    /**
     * Returns the number of slides currently visible in the viewport (includes partially visible slides)
     */
    var getNumberSlidesShowing = function() {
      var slidesShowing = 1,
      childWidth = null;
      if (slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0) {
        if (slider.viewport.width() < slider.minThreshold) {
          slidesShowing = slider.settings.minSlides;
        } else if (slider.viewport.width() > slider.maxThreshold) {
          slidesShowing = slider.settings.maxSlides;
        } else {
          childWidth = slider.children.first().width() + slider.settings.slideMargin;
          slidesShowing = Math.floor((slider.viewport.width() +
            slider.settings.slideMargin) / childWidth) || 1;
        }
      } else if (slider.settings.mode === 'vertical') {
        slidesShowing = slider.settings.minSlides;
      }
      return slidesShowing;
    };
    /**
     * Returns the number of pages (one full viewport of slides is one "page")
     */
    var getPagerQty = function() {
      var pagerQty = 0,
      breakPoint = 0,
      counter = 0;
      if (slider.settings.moveSlides > 0) {
        if (slider.settings.infiniteLoop) {
          pagerQty = Math.ceil(slider.children.length / getMoveBy());
        } else {
          while (breakPoint < slider.children.length) {
            ++pagerQty;
            breakPoint = counter + getNumberSlidesShowing();
            counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
          }
      return counter;
        }
      } else {
        pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
      }
      return pagerQty;
    };
    /**
     * Returns the number of individual slides by which to shift the slider
     */
    var getMoveBy = function() {
      if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
        return slider.settings.moveSlides;
      }
      return getNumberSlidesShowing();
    };
    /**
     * Sets the slider's (el) left or top position
     */
    var setSlidePosition = function() {
      var position, lastChild, lastShowingIndex;
      if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
        if (slider.settings.mode === 'horizontal') {
          lastChild = slider.children.last();
          position = lastChild.position();
          setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
        } else if (slider.settings.mode === 'vertical') {
          lastShowingIndex = slider.children.length - slider.settings.minSlides;
          position = slider.children.eq(lastShowingIndex).position();
          setPositionProperty(-position.top, 'reset', 0);
        }
      } else {
        position = slider.children.eq(slider.active.index * getMoveBy()).position();
        if (slider.active.index === getPagerQty() - 1) { slider.active.last = true; }
        if (position !== undefined) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
    };
    /**
     * Sets the el's animating property position (which in turn will sometimes animate el).
     * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
     *
     * @param value (int)
     *  - the animating property's value
     *
     * @param type (string) 'slide', 'reset', 'ticker'
     *  - the type of instance for which the function is being
     *
     * @param duration (int)
     *  - the amount of time (in ms) the transition should occupy
     *
     * @param params (array) optional
     *  - an optional parameter containing any variables that need to be passed in
     */
    var setPositionProperty = function(value, type, duration, params) {
      var animateObj, propValue;
      if (slider.usingCSS) {
        propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
        el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
        if (type === 'slide') {
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            el.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              if (!$(e.target).is(el)) { return; }
              el.off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              updateAfterSlideTransition();
            });
          } else { //duration = 0
            updateAfterSlideTransition();
          }
        } else if (type === 'reset') {
          el.css(slider.animProp, propValue);
        } else if (type === 'ticker') {
          el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            el.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              if (!$(e.target).is(el)) { return; }
              el.off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              setPositionProperty(params.resetValue, 'reset', 0);
              tickerLoop();
            });
          } else { //duration = 0
            setPositionProperty(params.resetValue, 'reset', 0);
            tickerLoop();
          }
        }
      } else {
        animateObj = {};
        animateObj[slider.animProp] = value;
        if (type === 'slide') {
          el.animate(animateObj, duration, slider.settings.easing, function() {
            updateAfterSlideTransition();
          });
        } else if (type === 'reset') {
          el.css(slider.animProp, value);
        } else if (type === 'ticker') {
          el.animate(animateObj, duration, 'linear', function() {
            setPositionProperty(params.resetValue, 'reset', 0);
            tickerLoop();
          });
        }
      }
    };
    /**
     * Populates the pager with proper amount of pages
     */
    var populatePager = function() {
      var pagerHtml = '',
      linkContent = '',
      pagerQty = getPagerQty();
      for (var i = 0; i < pagerQty; i++) {
        linkContent = '';
        if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom) {
          linkContent = slider.settings.buildPager(i);
          slider.pagerEl.addClass('bx-custom-pager');
        } else {
          linkContent = i + 1;
          slider.pagerEl.addClass('bx-default-pager');
        }
        pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
      }
      slider.pagerEl.html(pagerHtml);
    };
    /**
     * Appends the pager to the controls element
     */
    var appendPager = function() {
      if (!slider.settings.pagerCustom) {
        slider.pagerEl = $('<div class="bx-pager" />');
        if (slider.settings.pagerSelector) {
          $(slider.settings.pagerSelector).html(slider.pagerEl);
        } else {
          slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
        }
        populatePager();
      } else {
        slider.pagerEl = $(slider.settings.pagerCustom);
      }
      slider.pagerEl.on('click touchend', 'a', clickPagerBind);
    };
    /**
     * Appends prev / next controls to the controls element
     */
    var appendControls = function() {
      slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
      slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
      slider.controls.next.on('click touchend', clickNextBind);
      slider.controls.prev.on('click touchend', clickPrevBind);
      if (slider.settings.nextSelector) {
        $(slider.settings.nextSelector).append(slider.controls.next);
      }
      if (slider.settings.prevSelector) {
        $(slider.settings.prevSelector).append(slider.controls.prev);
      }
      if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
        slider.controls.directionEl = $('<div class="bx-controls-direction" />');
        slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
        slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
      }
    };
    /**
     * Appends start / stop auto controls to the controls element
     */
    var appendControlsAuto = function() {
      slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
      slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
      slider.controls.autoEl = $('<div class="bx-controls-auto" />');
      slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
      slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.append(slider.controls.start);
      } else {
        slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
      }
      if (slider.settings.autoControlsSelector) {
        $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
      } else {
        slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
      }
      updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
    };
    /**
     * Appends image captions to the DOM
     */
    var appendCaptions = function() {
      slider.children.each(function(index) {
        var title = $(this).find('img:first').attr('title');
        if (title !== undefined && ('' + title).length) {
          $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
        }
      });
    };
    /**
     * Click next binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickNextBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToNextSlide();
    };
    /**
     * Click prev binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPrevBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToPrevSlide();
    };
    /**
     * Click start binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStartBind = function(e) {
      el.startAuto();
      e.preventDefault();
    };
    /**
     * Click stop binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStopBind = function(e) {
      el.stopAuto();
      e.preventDefault();
    };
    /**
     * Click pager binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPagerBind = function(e) {
      var pagerLink, pagerIndex;
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) {
        return;
      }
      if (slider.settings.auto  && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      pagerLink = $(e.currentTarget);
      if (pagerLink.attr('data-slide-index') !== undefined) {
        pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
        if (pagerIndex !== slider.active.index) { el.goToSlide(pagerIndex); }
      }
    };
    /**
     * Updates the pager links with an active class
     *
     * @param slideIndex (int)
     *  - index of slide to make active
     */
    var updatePagerActive = function(slideIndex) {
      var len = slider.children.length; // nb of children
      if (slider.settings.pagerType === 'short') {
        if (slider.settings.maxSlides > 1) {
          len = Math.ceil(slider.children.length / slider.settings.maxSlides);
        }
        slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + len);
        return;
      }
      slider.pagerEl.find('a').removeClass('active');
      slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
    };
    /**
     * Performs needed actions after a slide transition
     */
    var updateAfterSlideTransition = function() {
      if (slider.settings.infiniteLoop) {
        var position = '';
        if (slider.active.index === 0) {
          position = slider.children.eq(0).position();
        } else if (slider.active.index === getPagerQty() - 1 && slider.carousel) {
          position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
        } else if (slider.active.index === slider.children.length - 1) {
          position = slider.children.eq(slider.children.length - 1).position();
        }
        if (position) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
      slider.working = false;
      slider.settings.onSlideAfter.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
    };
    /**
     * Updates the auto controls state (either active, or combined switch)
     *
     * @param state (string) "start", "stop"
     *  - the new state of the auto show
     */
    var updateAutoControls = function(state) {
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.html(slider.controls[state]);
      } else {
        slider.controls.autoEl.find('a').removeClass('active');
        slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
      }
    };
    /**
     * Updates the direction controls (checks if either should be hidden)
     */
    var updateDirectionControls = function() {
      if (getPagerQty() === 1) {
        slider.controls.prev.addClass('disabled');
        slider.controls.next.addClass('disabled');
      } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
        if (slider.active.index === 0) {
          slider.controls.prev.addClass('disabled');
          slider.controls.next.removeClass('disabled');
        } else if (slider.active.index === getPagerQty() - 1) {
          slider.controls.next.addClass('disabled');
          slider.controls.prev.removeClass('disabled');
        } else {
          slider.controls.prev.removeClass('disabled');
          slider.controls.next.removeClass('disabled');
        }
      }
    };
  /* auto start and stop functions */
  var windowFocusHandler = function() { el.startAuto(); };
  var windowBlurHandler = function() { el.stopAuto(); };
    /**
     * Initializes the auto process
     */
    var initAuto = function() {
      if (slider.settings.autoDelay > 0) {
        setTimeout(el.startAuto, slider.settings.autoDelay);
      } else {
        el.startAuto();
        $(window).focus(windowFocusHandler).blur(windowBlurHandler);
      }
      if (slider.settings.autoHover) {
        el.hover(function() {
          if (slider.interval) {
            el.stopAuto(true);
            slider.autoPaused = true;
          }
        }, function() {
          if (slider.autoPaused) {
            el.startAuto(true);
            slider.autoPaused = null;
          }
        });
      }
    };
    /**
     * Initializes the ticker process
     */
    var initTicker = function() {
      var startPosition = 0,
      position, transform, value, idx, ratio, property, newSpeed, totalDimens;
      if (slider.settings.autoDirection === 'next') {
        el.append(slider.children.clone().addClass('bx-clone'));
      } else {
        el.prepend(slider.children.clone().addClass('bx-clone'));
        position = slider.children.first().position();
        startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      }
      setPositionProperty(startPosition, 'reset', 0);
      slider.settings.pager = false;
      slider.settings.controls = false;
      slider.settings.autoControls = false;
      if (slider.settings.tickerHover) {
        if (slider.usingCSS) {
          idx = slider.settings.mode === 'horizontal' ? 4 : 5;
          slider.viewport.hover(function() {
            transform = el.css('-' + slider.cssPrefix + '-transform');
            value = parseFloat(transform.split(',')[idx]);
            setPositionProperty(value, 'reset', 0);
          }, function() {
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            ratio = slider.settings.speed / totalDimens;
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(value))));
            tickerLoop(newSpeed);
          });
        } else {
          slider.viewport.hover(function() {
            el.stop();
          }, function() {
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            ratio = slider.settings.speed / totalDimens;
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
            tickerLoop(newSpeed);
          });
        }
      }
      tickerLoop();
    };
    /**
     * Runs a continuous loop, news ticker-style
     */
    var tickerLoop = function(resumeSpeed) {
      var speed = resumeSpeed ? resumeSpeed : slider.settings.speed,
      position = {left: 0, top: 0},
      reset = {left: 0, top: 0},
      animateProperty, resetValue, params;
      if (slider.settings.autoDirection === 'next') {
        position = el.find('.bx-clone').first().position();
      } else {
        reset = slider.children.first().position();
      }
      animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
      params = {resetValue: resetValue};
      setPositionProperty(animateProperty, 'ticker', speed, params);
    };
    /**
     * Check if el is on screen
     */
    var isOnScreen = function(el) {
      var win = $(window),
      viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
      },
      bounds = el.offset();
      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();
      bounds.right = bounds.left + el.outerWidth();
      bounds.bottom = bounds.top + el.outerHeight();
      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };
    /**
     * Initializes keyboard events
     */
    var keyPress = function(e) {
      var activeElementTag = document.activeElement.tagName.toLowerCase(),
      tagFilters = 'input|textarea',
      p = new RegExp(activeElementTag,['i']),
      result = p.exec(tagFilters);
      if (result == null && isOnScreen(el)) {
        if (e.keyCode === 39) {
          clickNextBind(e);
          return false;
        } else if (e.keyCode === 37) {
          clickPrevBind(e);
          return false;
        }
      }
    };
    /**
     * Initializes touch events
     */
    var initTouch = function() {
      slider.touch = {
        start: {x: 0, y: 0},
        end: {x: 0, y: 0}
      };
      slider.viewport.on('touchstart MSPointerDown pointerdown', onTouchStart);
      slider.viewport.on('click', '.bxslider a', function(e) {
        if (slider.viewport.hasClass('click-disabled')) {
          e.preventDefault();
          slider.viewport.removeClass('click-disabled');
        }
      });
    };
    /**
     * Event handler for "touchstart"
     *
     * @param e (event)
     *  - DOM event object
     */
  var onTouchStart = function(e) {
      if (e.type !== 'touchstart' && e.button !== 0) {
        return;
      }
      var lastScrollTop = 0;
        $(window).scroll(function(event){
            var st = $(this).scrollTop();
            if (st > lastScrollTop){ } else {  e.preventDefault();   }
        });
      slider.controls.el.addClass('disabled');
      if (slider.working) {
        slider.controls.el.removeClass('disabled');
      } else {
        slider.touch.originalPos = el.position();
        var orig = e.originalEvent,
        touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
        var chromePointerEvents = typeof PointerEvent === 'function'; 
        if (chromePointerEvents) { 
            if (orig.pointerId === undefined) { 
                return;
            } 
        }
        slider.touch.start.x = touchPoints[0].pageX;
        slider.touch.start.y = touchPoints[0].pageY;
        if (slider.viewport.get(0).setPointerCapture) {
          slider.pointerId = orig.pointerId;
          slider.viewport.get(0).setPointerCapture(slider.pointerId);
        }
        slider.originalClickTarget = orig.originalTarget || orig.target;
        slider.originalClickButton = orig.button;
        slider.originalClickButtons = orig.buttons;
        slider.originalEventType = orig.type;
        slider.hasMove = false;
        slider.viewport.on('touchmove MSPointerMove pointermove', onTouchMove);
        slider.viewport.on('touchend MSPointerUp pointerup', onTouchEnd);
        slider.viewport.on('MSPointerCancel pointercancel', onPointerCancel);
      }
    };
    /**
     * Cancel Pointer for Windows Phone
     *
     * @param e (event)
     *  - DOM event object
     */
    var onPointerCancel = function(e) {
      e.preventDefault();
      /* onPointerCancel handler is needed to deal with situations when a touchend
      doesn't fire after a touchstart (this happens on windows phones only) */
      setPositionProperty(slider.touch.originalPos.left, 'reset', 0);
      slider.controls.el.removeClass('disabled');
      slider.viewport.off('MSPointerCancel pointercancel', onPointerCancel);
      slider.viewport.off('touchmove MSPointerMove pointermove', onTouchMove);
      slider.viewport.off('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };
    /**
     * Event handler for "touchmove"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchMove = function(e) {
      var orig = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x),
      yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y),
      value = 0,
      change = 0;
      slider.hasMove = true;
      if ((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX) {
        e.preventDefault();
      } else if ((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY) {
        e.preventDefault();
      }
      if (e.type !== 'touchmove') {
        e.preventDefault();
      }
      if (slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch) {
        if (slider.settings.mode === 'horizontal') {
          change = touchPoints[0].pageX - slider.touch.start.x;
          value = slider.touch.originalPos.left + change;
        } else {
          change = touchPoints[0].pageY - slider.touch.start.y;
          value = slider.touch.originalPos.top + change;
        }
        setPositionProperty(value, 'reset', 0);
      }
    };
    /**
     * Event handler for "touchend"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchEnd = function(e) {
      e.preventDefault();
      slider.viewport.off('touchmove MSPointerMove pointermove', onTouchMove);
      slider.controls.el.removeClass('disabled');
      var orig    = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      value       = 0,
      distance    = 0;
      slider.touch.end.x = touchPoints[0].pageX;
      slider.touch.end.y = touchPoints[0].pageY;
      if (slider.settings.mode === 'fade') {
        distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
        if (distance >= slider.settings.swipeThreshold) {
          if (slider.touch.start.x > slider.touch.end.x) {
            el.goToNextSlide();
          } else {
            el.goToPrevSlide();
          }
          el.stopAuto();
        }
      } else {
        if (slider.settings.mode === 'horizontal') {
          distance = slider.touch.end.x - slider.touch.start.x;
          value = slider.touch.originalPos.left;
        } else {
          distance = slider.touch.end.y - slider.touch.start.y;
          value = slider.touch.originalPos.top;
        }
        if (!slider.settings.infiniteLoop && ((slider.active.index === 0 && distance > 0) || (slider.active.last && distance < 0))) {
          setPositionProperty(value, 'reset', 200);
        } else {
          if (Math.abs(distance) >= slider.settings.swipeThreshold) {
            if (distance < 0) {
              el.goToNextSlide();
            } else {
              el.goToPrevSlide();
            }
            el.stopAuto();
          } else {
            setPositionProperty(value, 'reset', 200);
          }
        }
      }
      slider.viewport.off('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
      if (slider.hasMove === false && (slider.originalClickButton === 0 || slider.originalEventType === 'touchstart')) {
        $(slider.originalClickTarget).trigger({
          type: 'click',
          button: slider.originalClickButton,
          buttons: slider.originalClickButtons
        });
      }
    };
    /**
     * Window resize event callback
     */
    var resizeWindow = function(e) {
      if (!slider.initialized) { return; }
      if (slider.working) {
        window.setTimeout(resizeWindow, 10);
      } else {
        var windowWidthNew = $(window).width(),
        windowHeightNew = $(window).height();
        if (windowWidth !== windowWidthNew || windowHeight !== windowHeightNew) {
          windowWidth = windowWidthNew;
          windowHeight = windowHeightNew;
          el.redrawSlider();
          slider.settings.onSliderResize.call(el, slider.active.index);
        }
      }
    };
    /**
     * Adds an aria-hidden=true attribute to each element
     *
     * @param startVisibleIndex (int)
     *  - the first visible element's index
     */
    var applyAriaHiddenAttributes = function(startVisibleIndex) {
      var numberOfSlidesShowing = getNumberSlidesShowing();
      if (slider.settings.ariaHidden && !slider.settings.ticker) {
        slider.children.attr('aria-hidden', 'true');
        slider.children.slice(startVisibleIndex, startVisibleIndex + numberOfSlidesShowing).attr('aria-hidden', 'false');
      }
    };
    /**
     * Returns index according to present page range
     *
     * @param slideOndex (int)
     *  - the desired slide index
     */
    var setSlideIndex = function(slideIndex) {
      if (slideIndex < 0) {
        if (slider.settings.infiniteLoop) {
          return getPagerQty() - 1;
        }else {
          return slider.active.index;
        }
      } else if (slideIndex >= getPagerQty()) {
        if (slider.settings.infiniteLoop) {
          return 0;
        } else {
          return slider.active.index;
        }
      } else {
        return slideIndex;
      }
    };
    /**
     * ===================================================================================
     * = PUBLIC FUNCTIONS
     * ===================================================================================
     */
    /**
     * Performs slide transition to the specified slide
     *
     * @param slideIndex (int)
     *  - the destination slide's index (zero-based)
     *
     * @param direction (string)
     *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
     */
    el.goToSlide = function(slideIndex, direction) {
      var performTransition = true,
      moveBy = 0,
      position = {left: 0, top: 0},
      lastChild = null,
      lastShowingIndex, eq, value, requestEl;
      slider.oldIndex = slider.active.index;
      slider.active.index = setSlideIndex(slideIndex);
      if (slider.working || slider.active.index === slider.oldIndex) { return; }
      slider.working = true;
      performTransition = slider.settings.onSlideBefore.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
      if (typeof (performTransition) !== 'undefined' && !performTransition) {
        slider.active.index = slider.oldIndex; // restore old index
        slider.working = false; // is not in motion
        return;
      }
      if (direction === 'next') {
        if (!slider.settings.onSlideNext.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      } else if (direction === 'prev') {
        if (!slider.settings.onSlidePrev.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      }
      slider.active.last = slider.active.index >= getPagerQty() - 1;
      if (slider.settings.pager || slider.settings.pagerCustom) { updatePagerActive(slider.active.index); }
      if (slider.settings.controls) { updateDirectionControls(); }
      if (slider.settings.mode === 'fade') {
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
        slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function() {
          $(this).css('zIndex', slider.settings.slideZIndex);
          updateAfterSlideTransition();
        });
      } else {
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
          if (slider.settings.mode === 'horizontal') {
            lastChild = slider.children.eq(slider.children.length - 1);
            position = lastChild.position();
            moveBy = slider.viewport.width() - lastChild.outerWidth();
          } else {
            lastShowingIndex = slider.children.length - slider.settings.minSlides;
            position = slider.children.eq(lastShowingIndex).position();
          }
        } else if (slider.carousel && slider.active.last && direction === 'prev') {
          eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
          lastChild = el.children('.bx-clone').eq(eq);
          position = lastChild.position();
        } else if (direction === 'next' && slider.active.index === 0) {
          position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
          slider.active.last = false;
        } else if (slideIndex >= 0) {
          requestEl = slideIndex * parseInt(getMoveBy());
          position = slider.children.eq(requestEl).position();
        }
        /* If the position doesn't exist
         * (e.g. if you destroy the slider on a next click),
         * it doesn't throw an error.
         */
        if (typeof (position) !== 'undefined') {
          value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
          setPositionProperty(value, 'slide', slider.settings.speed);
        }
        slider.working = false;
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };
    /**
     * Transitions to the next slide in the show
     */
    el.goToNextSlide = function() {
      if (!slider.settings.infiniteLoop && slider.active.last) { return; }
    if (slider.working === true){ return ;}
      var pagerIndex = parseInt(slider.active.index) + 1;
      el.goToSlide(pagerIndex, 'next');
    };
    /**
     * Transitions to the prev slide in the show
     */
    el.goToPrevSlide = function() {
      if (!slider.settings.infiniteLoop && slider.active.index === 0) { return; }
    if (slider.working === true){ return ;}
      var pagerIndex = parseInt(slider.active.index) - 1;
      el.goToSlide(pagerIndex, 'prev');
    };
    /**
     * Starts the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.startAuto = function(preventControlUpdate) {
      if (slider.interval) { return; }
      slider.interval = setInterval(function() {
        if (slider.settings.autoDirection === 'next') {
          el.goToNextSlide();
        } else {
          el.goToPrevSlide();
        }
      }, slider.settings.pause);
    slider.settings.onAutoChange.call(el, true);
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('stop'); }
    };
    /**
     * Stops the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.stopAuto = function(preventControlUpdate) {
      if (slider.autoPaused) slider.autoPaused = false;
      if (!slider.interval) { return; }
      clearInterval(slider.interval);
      slider.interval = null;
    slider.settings.onAutoChange.call(el, false);
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('start'); }
    };
    /**
     * Returns current slide index (zero-based)
     */
    el.getCurrentSlide = function() {
      return slider.active.index;
    };
    /**
     * Returns current slide element
     */
    el.getCurrentSlideElement = function() {
      return slider.children.eq(slider.active.index);
    };
    /**
     * Returns a slide element
     * @param index (int)
     *  - The index (zero-based) of the element you want returned.
     */
    el.getSlideElement = function(index) {
      return slider.children.eq(index);
    };
    /**
     * Returns number of slides in show
     */
    el.getSlideCount = function() {
      return slider.children.length;
    };
    /**
     * Return slider.working variable
     */
    el.isWorking = function() {
      return slider.working;
    };
    /**
     * Update all dynamic slider elements
     */
    el.redrawSlider = function() {
      slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
      slider.viewport.css('height', getViewportHeight());
      if (!slider.settings.ticker) { setSlidePosition(); }
      if (slider.active.last) { slider.active.index = getPagerQty() - 1; }
      if (slider.active.index >= getPagerQty()) { slider.active.last = true; }
      if (slider.settings.pager && !slider.settings.pagerCustom) {
        populatePager();
        updatePagerActive(slider.active.index);
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };
    /**
     * Destroy the current instance of the slider (revert everything back to original state)
     */
    el.destroySlider = function() {
      if (!slider.initialized) { return; }
      slider.initialized = false;
      $('.bx-clone', this).remove();
      slider.children.each(function() {
        if ($(this).data('origStyle') !== undefined) {
          $(this).attr('style', $(this).data('origStyle'));
        } else {
          $(this).removeAttr('style');
        }
      });
      if ($(this).data('origStyle') !== undefined) {
        this.attr('style', $(this).data('origStyle'));
      } else {
        $(this).removeAttr('style');
      }
      $(this).unwrap().unwrap();
      if (slider.controls.el) { slider.controls.el.remove(); }
      if (slider.controls.next) { slider.controls.next.remove(); }
      if (slider.controls.prev) { slider.controls.prev.remove(); }
      if (slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) { slider.pagerEl.remove(); }
      $('.bx-caption', this).remove();
      if (slider.controls.autoEl) { slider.controls.autoEl.remove(); }
      clearInterval(slider.interval);
      if (slider.settings.responsive) { $(window).off('resize', resizeWindow); }
      if (slider.settings.keyboardEnabled) { $(document).off('keydown', keyPress); }
      $(this).removeData('bxSlider');
    $(window).off('blur', windowBlurHandler).off('focus', windowFocusHandler);
    };
    /**
     * Reload the slider (revert all DOM changes, and re-initialize)
     */
    el.reloadSlider = function(settings) {
      if (settings !== undefined) { options = settings; }
      el.destroySlider();
      init();
      $(el).data('bxSlider', this);
    };
    init();
    $(el).data('bxSlider', this);
    return this;
  };
})(jQuery);
var damenhu=damenhu||{};damenhu.scrolled=0;if(!Element.prototype.closest){Element.prototype.closest=function(s){var el=this;do{if(el.matches(s)){return el;}
el=el.parentElement||el.parentNode;}while(el!==null&&el.nodeType===1);return null;};}
if(window.NodeList&&!NodeList.prototype.forEach){NodeList.prototype.forEach=function(callback,thisArg){var i;var len=this.length;thisArg=thisArg||window;for(i=0;i<len;i++){callback.call(thisArg,this[i],i,this);}};}
damenhu.createEvent=function(eventName){var event;if(typeof window.Event==='function'){event=new Event(eventName);}else{event=document.createEvent('Event');event.initEvent(eventName,true,false);}
return event;};if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(s){var matches=(this.document||this.ownerDocument).querySelectorAll(s),i=matches.length;while(--i>=0&&matches.item(i)!==this){}
return i>-1;};}
damenhu.touchEnabled={init:function(){var matchMedia=function(){var prefixes=['-webkit-','-moz-','-o-','-ms-'];var query=['(',prefixes.join('touch-enabled),('),'heartz',')'].join('');return window.matchMedia&&window.matchMedia(query).matches;};if(('ontouchstart'in window)||(window.DocumentTouch&&document instanceof window.DocumentTouch)||matchMedia()){document.body.classList.add('touch-enabled');}}};damenhu.coverModals={init:function(){if(document.querySelector('.cover-modal')){this.onToggle();this.outsideUntoggle();this.closeOnEscape();this.hideAndShowModals();}},onToggle:function(){document.querySelectorAll('.cover-modal').forEach(function(element){element.addEventListener('toggled',function(event){var modal=event.target,body=document.body;if(modal.classList.contains('active')){body.classList.add('showing-modal');}else{body.classList.remove('showing-modal');body.classList.add('hiding-modal');setTimeout(function(){body.classList.remove('hiding-modal');},500);}});});},outsideUntoggle:function(){document.addEventListener('click',function(event){var target=event.target;var modal=document.querySelector('.cover-modal.active');if(event.target.tagName.toLowerCase()==='a'&&event.target.hash.includes('#')&&modal!==null){this.untoggleModal(modal);setTimeout(function(){var anchor=document.getElementById(event.target.hash.slice(1));anchor.scrollIntoView();},550);}
if(target===modal){this.untoggleModal(target);}}.bind(this));},closeOnEscape:function(){document.addEventListener('keydown',function(event){if(event.keyCode===27){event.preventDefault();document.querySelectorAll('.cover-modal.active').forEach(function(element){this.untoggleModal(element);}.bind(this));}}.bind(this));},hideAndShowModals:function(){var _doc=document,_win=window,modals=_doc.querySelectorAll('.cover-modal'),htmlStyle=_doc.documentElement.style,adminBar=_doc.querySelector('#wpadminbar');function getAdminBarHeight(negativeValue){var height,currentScroll=_win.pageYOffset;if(adminBar){height=currentScroll+adminBar.getBoundingClientRect().height;return negativeValue?-height:height;}
return currentScroll===0?0:-currentScroll;}
function htmlStyles(){var overflow=_win.innerHeight>_doc.documentElement.getBoundingClientRect().height;return{'overflow-y':overflow?'hidden':'scroll',position:'fixed',width:'100%',top:getAdminBarHeight(true)+'px',left:0};}
modals.forEach(function(modal){modal.addEventListener('toggle-target-before-inactive',function(event){var styles=htmlStyles(),offsetY=_win.pageYOffset,paddingTop=(Math.abs(getAdminBarHeight())-offsetY)+'px',mQuery=_win.matchMedia('(max-width: 600px)');if(event.target!==modal){return;}
Object.keys(styles).forEach(function(styleKey){htmlStyle.setProperty(styleKey,styles[styleKey]);});_win.damenhu.scrolled=parseInt(styles.top,10);if(adminBar){_doc.body.style.setProperty('padding-top',paddingTop);if(mQuery.matches){if(offsetY>=getAdminBarHeight()){modal.style.setProperty('top',0);}else{modal.style.setProperty('top',(getAdminBarHeight()-offsetY)+'px');}}}
modal.classList.add('show-modal');});modal.addEventListener('toggle-target-after-inactive',function(event){if(event.target!==modal){return;}
setTimeout(function(){var clickedEl=damenhu.toggles.clickedEl;modal.classList.remove('show-modal');Object.keys(htmlStyles()).forEach(function(styleKey){htmlStyle.removeProperty(styleKey);});if(adminBar){_doc.body.style.removeProperty('padding-top');modal.style.removeProperty('top');}
if(clickedEl!==false){clickedEl.focus();clickedEl=false;}
_win.scrollTo(0,Math.abs(_win.damenhu.scrolled+getAdminBarHeight()));_win.damenhu.scrolled=0;},500);});});},untoggleModal:function(modal){var modalTargetClass,modalToggle=false;if(modal.dataset.modalTargetString){modalTargetClass=modal.dataset.modalTargetString;modalToggle=document.querySelector('*[data-toggle-target="'+modalTargetClass+'"]');}
if(modalToggle){modalToggle.click();}else{modal.classList.remove('active');}}};damenhu.intrinsicRatioVideos={init:function(){this.makeFit();window.addEventListener('resize',function(){this.makeFit();}.bind(this));},makeFit:function(){document.querySelectorAll('iframe, object, video').forEach(function(video){var ratio,iTargetWidth,container=video.parentNode;if(video.classList.contains('intrinsic-ignore')||video.parentNode.classList.contains('intrinsic-ignore')){return true;}
if(!video.dataset.origwidth){video.setAttribute('data-origwidth',video.width);video.setAttribute('data-origheight',video.height);}
iTargetWidth=container.offsetWidth;ratio=iTargetWidth/video.dataset.origwidth;video.style.width=iTargetWidth+'px';video.style.height=(video.dataset.origheight*ratio)+'px';});}};damenhu.modalMenu={init:function(){this.expandLevel();this.keepFocusInModal();},expandLevel:function(){var modalMenus=document.querySelectorAll('.modal-menu');modalMenus.forEach(function(modalMenu){var activeMenuItem=modalMenu.querySelector('.current-menu-item');if(activeMenuItem){damenhuFindParents(activeMenuItem,'li').forEach(function(element){var subMenuToggle=element.querySelector('.sub-menu-toggle');if(subMenuToggle){damenhu.toggles.performToggle(subMenuToggle,true);}});}});},keepFocusInModal:function(){var _doc=document;_doc.addEventListener('keydown',function(event){var toggleTarget,modal,selectors,elements,menuType,bottomMenu,activeEl,lastEl,firstEl,tabKey,shiftKey,clickedEl=damenhu.toggles.clickedEl;if(clickedEl&&_doc.body.classList.contains('showing-modal')){toggleTarget=clickedEl.dataset.toggleTarget;selectors='input, a, button';modal=_doc.querySelector(toggleTarget);elements=modal.querySelectorAll(selectors);elements=Array.prototype.slice.call(elements);if('.menu-modal'===toggleTarget){menuType=window.matchMedia('(min-width: 1000px)').matches;menuType=menuType?'.expanded-menu':'.mobile-menu';elements=elements.filter(function(element){return null!==element.closest(menuType)&&null!==element.offsetParent;});elements.unshift(_doc.querySelector('.close-nav-toggle'));bottomMenu=_doc.querySelector('.menu-bottom > nav');if(bottomMenu){bottomMenu.querySelectorAll(selectors).forEach(function(element){elements.push(element);});}}
lastEl=elements[elements.length-1];firstEl=elements[0];activeEl=_doc.activeElement;tabKey=event.keyCode===9;shiftKey=event.shiftKey;if(!shiftKey&&tabKey&&lastEl===activeEl){event.preventDefault();firstEl.focus();}
if(shiftKey&&tabKey&&firstEl===activeEl){event.preventDefault();lastEl.focus();}}});}};damenhu.primaryMenu={init:function(){this.focusMenuWithChildren();},focusMenuWithChildren:function(){var links,i,len,menu=document.querySelector('.primary-menu-wrapper');if(!menu){return false;}
links=menu.getElementsByTagName('a');for(i=0,len=links.length;i<len;i++){links[i].addEventListener('focus',toggleFocus,true);links[i].addEventListener('blur',toggleFocus,true);}
function toggleFocus(){var self=this;while(-1===self.className.indexOf('primary-menu')){if('li'===self.tagName.toLowerCase()){if(-1!==self.className.indexOf('focus')){self.className=self.className.replace(' focus','');}else{self.className+=' focus';}}
self=self.parentElement;}}}};damenhu.toggles={clickedEl:false,init:function(){this.toggle();this.resizeCheck();this.untoggleOnEscapeKeyPress();},performToggle:function(element,instantly){var target,timeOutTime,classToToggle,self=this,_doc=document,toggle=element,targetString=toggle.dataset.toggleTarget,activeClass='active';if(!_doc.querySelectorAll('.show-modal').length){self.clickedEl=_doc.activeElement;}
if(targetString==='next'){target=toggle.nextSibling;}else{target=_doc.querySelector(targetString);}
if(target.classList.contains(activeClass)){target.dispatchEvent(damenhu.createEvent('toggle-target-before-active'));}else{target.dispatchEvent(damenhu.createEvent('toggle-target-before-inactive'));}
classToToggle=toggle.dataset.classToToggle?toggle.dataset.classToToggle:activeClass;timeOutTime=0;if(target.classList.contains('cover-modal')){timeOutTime=10;}
setTimeout(function(){var focusElement,subMenued=target.classList.contains('sub-menu'),newTarget=subMenued?toggle.closest('.menu-item').querySelector('.sub-menu'):target,duration=toggle.dataset.toggleDuration;if(toggle.dataset.toggleType==='slidetoggle'&&!instantly&&duration!=='0'){damenhuMenuToggle(newTarget,duration);}else{newTarget.classList.toggle(classToToggle);}
if(targetString==='next'){toggle.classList.toggle(activeClass);}else if(target.classList.contains('sub-menu')){toggle.classList.toggle(activeClass);}else{_doc.querySelector('*[data-toggle-target="'+targetString+'"]').classList.toggle(activeClass);}
damenhuToggleAttribute(toggle,'aria-expanded','true','false');if(self.clickedEl&&-1!==toggle.getAttribute('class').indexOf('close-')){damenhuToggleAttribute(self.clickedEl,'aria-expanded','true','false');}
if(toggle.dataset.toggleBodyClass){_doc.body.classList.toggle(toggle.dataset.toggleBodyClass);}
if(toggle.dataset.setFocus){focusElement=_doc.querySelector(toggle.dataset.setFocus);if(focusElement){if(target.classList.contains(activeClass)){focusElement.focus();}else{focusElement.blur();}}}
target.dispatchEvent(damenhu.createEvent('toggled'));if(target.classList.contains(activeClass)){target.dispatchEvent(damenhu.createEvent('toggle-target-after-active'));}else{target.dispatchEvent(damenhu.createEvent('toggle-target-after-inactive'));}},timeOutTime);},toggle:function(){var self=this;document.querySelectorAll('*[data-toggle-target]').forEach(function(element){element.addEventListener('click',function(event){event.preventDefault();self.performToggle(element);});});},resizeCheck:function(){if(document.querySelectorAll('*[data-untoggle-above], *[data-untoggle-below], *[data-toggle-above], *[data-toggle-below]').length){window.addEventListener('resize',function(){var winWidth=window.innerWidth,toggles=document.querySelectorAll('.toggle');toggles.forEach(function(toggle){var unToggleAbove=toggle.dataset.untoggleAbove,unToggleBelow=toggle.dataset.untoggleBelow,toggleAbove=toggle.dataset.toggleAbove,toggleBelow=toggle.dataset.toggleBelow;if(!unToggleAbove&&!unToggleBelow&&!toggleAbove&&!toggleBelow){return;}
if((((unToggleAbove&&winWidth>unToggleAbove)||(unToggleBelow&&winWidth<unToggleBelow))&&toggle.classList.contains('active'))||(((toggleAbove&&winWidth>toggleAbove)||(toggleBelow&&winWidth<toggleBelow))&&!toggle.classList.contains('active'))){toggle.click();}});});}},untoggleOnEscapeKeyPress:function(){document.addEventListener('keyup',function(event){if(event.key==='Escape'){document.querySelectorAll('*[data-untoggle-on-escape].active').forEach(function(element){if(element.classList.contains('active')){element.click();}});}});}};function damenhuDomReady(fn){if(typeof fn!=='function'){return;}
if(document.readyState==='interactive'||document.readyState==='complete'){return fn();}
document.addEventListener('DOMContentLoaded',fn,false);}
damenhuDomReady(function(){damenhu.toggles.init();damenhu.coverModals.init();damenhu.intrinsicRatioVideos.init();damenhu.modalMenu.init();damenhu.primaryMenu.init();damenhu.touchEnabled.init();});function damenhuToggleAttribute(element,attribute,trueVal,falseVal){if(trueVal===undefined){trueVal=true;}
if(falseVal===undefined){falseVal=false;}
if(element.getAttribute(attribute)!==trueVal){element.setAttribute(attribute,trueVal);}else{element.setAttribute(attribute,falseVal);}}
function damenhuMenuToggle(target,duration){var initialParentHeight,finalParentHeight,menu,menuItems,transitionListener,initialPositions=[],finalPositions=[];if(!target){return;}
menu=target.closest('.menu-wrapper');menuItems=menu.querySelectorAll('.menu-item');menuItems.forEach(function(menuItem,index){initialPositions[index]={x:menuItem.offsetLeft,y:menuItem.offsetTop};});initialParentHeight=target.parentElement.offsetHeight;target.classList.add('toggling-target');target.classList.toggle('active');menuItems.forEach(function(menuItem,index){finalPositions[index]={x:menuItem.offsetLeft,y:menuItem.offsetTop};});finalParentHeight=target.parentElement.offsetHeight;target.classList.toggle('active');menu.classList.add('is-toggling');target.classList.toggle('active');menuItems.forEach(function(menuItem,index){var initialPosition=initialPositions[index];if(initialPosition.y===0&&menuItem.parentElement===target){initialPosition.y=initialParentHeight;}
menuItem.style.transform='translate('+initialPosition.x+'px, '+initialPosition.y+'px)';});requestAnimationFrame(function(){requestAnimationFrame(function(){menu.classList.add('is-animating');menuItems.forEach(function(menuItem,index){var finalPosition=finalPositions[index];if(finalPosition.y===0&&menuItem.parentElement===target){finalPosition.y=finalParentHeight;}
if(duration!==undefined){menuItem.style.transitionDuration=duration+'ms';}
menuItem.style.transform='translate('+finalPosition.x+'px, '+finalPosition.y+'px)';});if(duration!==undefined){target.style.transitionDuration=duration+'ms';}});transitionListener=function(){menu.classList.remove('is-animating');menu.classList.remove('is-toggling');target.classList.remove('toggling-target');menuItems.forEach(function(menuItem){menuItem.style.transform='';menuItem.style.transitionDuration='';});target.style.transitionDuration='';target.removeEventListener('transitionend',transitionListener);};target.addEventListener('transitionend',transitionListener);});}
function damenhuFindParents(target,query){var parents=[];function traverse(item){var parent=item.parentNode;if(parent instanceof HTMLElement){if(parent.matches(query)){parents.push(parent);}
traverse(parent);}}
traverse(target);return parents;};
(function($){$(document).ready(function(){"use strict";var example=$('.sf-menu').superfish({delay:100,speed:'fast',autoArrows:false});$('.featured-slider .bxslider').bxSlider({auto:true,pause:'6000',autoHover:true,adaptiveHeight:true,mode:'fade',onSliderLoad:function(){$(".featured-slider .bxslider").css("display","block");$('.featured-slider .entry-header').fadeIn("100");$('.featured-slider .gradient').fadeIn("100");}});$('.gallery-slider').show().bxSlider({auto:true,pause:'6000',autoHover:true,adaptiveHeight:true,mode:'fade',onSliderLoad:function(){$(".single #primary .bx-wrapper").css("visibility","visible");$(".single #primary .gallery-slider").css("display","block");}});$(window).load(function(){$(".custom-share").fadeIn('1000');$(".bottom-right").fadeIn('1000');$(".widget_posts_thumbnail .entry-wrap").fadeIn('1000');$('.sidebar .widget_ad .widget-title').fadeIn("1000");$(".breadcrumbs.is_zhuanti h1").fadeIn('1000');});$(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$('#back-top').css('visibility','visible');}else{$('#back-top').css('visibility','hidden');}});$('#back-top a').click(function(){$('body,html').animate({scrollTop:0},400);return false;});});$('.search-icon > .fa-search').click(function(){$('.header-search').slideDown('fast',function(){});$('.search-icon > .fa-search').toggleClass('active');$('.search-icon > .fa-close').toggleClass('active');});$('.search-icon > .fa-close').click(function(){$('.header-search').slideUp('fast',function(){});$('.search-icon > .fa-search').toggleClass('active');$('.search-icon > .fa-close').toggleClass('active');});});})(jQuery);