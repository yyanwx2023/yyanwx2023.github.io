/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
!function(factory){"function"==typeof define&&define.amd?define(["jquery"],factory):factory(jQuery)}(function($){function encode(s){return config.raw?s:encodeURIComponent(s)}function decode(s){return config.raw?s:decodeURIComponent(s)}function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value))}function parseCookieValue(s){0===s.indexOf('"')&&(s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{s=decodeURIComponent(s.replace(pluses," "))}catch(e){return}try{return config.json?JSON.parse(s):s}catch(e){}}function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value}var pluses=/\+/g,config=$.cookie=function(key,value,options){if(void 0!==value&&!$.isFunction(value)){if(options=$.extend({},config.defaults,options),"number"==typeof options.expires){var days=options.expires,t=options.expires=new Date;t.setDate(t.getDate()+days)}return document.cookie=[encode(key),"=",stringifyCookieValue(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join("")}for(var result=key?void 0:{},cookies=document.cookie?document.cookie.split("; "):[],i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split("="),name=decode(parts.shift()),cookie=parts.join("=");if(key&&key===name){result=read(cookie,value);break}key||void 0===(cookie=read(cookie))||(result[name]=cookie)}return result};config.defaults={},$.removeCookie=function(key,options){return void 0!==$.cookie(key)&&($.cookie(key,"",$.extend({},options,{expires:-1})),!0)}});
jQuery(document).ready(function(a){var i=a.cookie("affwp_ref"),e=(a.cookie("affwp_ref_visit_id"),a.cookie("affwp_campaign"),AFFWP.referral_credit_last);if(1===AFFWP.debug){function f(a){var i=new RegExp(a+"=([^;]+)").exec(document.cookie);return null!=i&&unescape(i[1])}var n=["background: transparent","border-bottom: 2px solid #E34F43","color: black","display: block","line-height: 18px","text-align: left","margin: 4px","font-weight: bold"].join(";");console.affwp=function(){Array.prototype.unshift.call(arguments,"%c * AffiliateWP: ",n+" *"),console.log.apply(console,arguments)},console.affwp("The following data is provided from AffiliateWP debug mode. To disable this information, please deactivate debug mode in AffiliateWP."),console.affwp("Available debug data: \n"+JSON.stringify(Object({ajax_url:affwp_scripts.ajaxurl.length?JSON.stringify(affwp_scripts.ajaxurl):"unavailable",ref:JSON.stringify(AFFWP.referral_var?AFFWP.referral_var:f("affwp_ref")),visit_cookie:f("affwp_ref_visit_id")?JSON.stringify(f("affwp_ref_visit_id")):"unavailable",credit_last:AFFWP.referral_credit_last?JSON.stringify(AFFWP.referral_credit_last):"unavailable",campaign:JSON.stringify(s().campaign?s().campaign:f("affwp_campaign")),currency:affwp_debug_vars.currency.length?JSON.stringify(affwp_debug_vars.currency):"unavailable",version:affwp_debug_vars.version.length?JSON.stringify(affwp_debug_vars.version):"unavailable"}))),console.affwp("Integrations\n"+JSON.stringify(Object("undefined"!=typeof affwp_debug_vars&&affwp_debug_vars.integrations)))}if("1"==e||!i){var r=s()[AFFWP.referral_var],o=s().campaign;if(void 0===r||a.isFunction(r)){var t=window.location.pathname.split("/");a.each(t,function(a,i){AFFWP.referral_var==i&&(r=t[a+1])})}a.isFunction(r)||(void 0===r||a.isNumeric(r)?r&&!i?l(r,o):"1"==e&&r&&i&&r!==i&&(a.removeCookie("affwp_ref"),l(r,o)):a.ajax({type:"POST",data:{action:"affwp_get_affiliate_id",affiliate:r},url:affwp_scripts.ajaxurl,success:function(f){"1"==f.data.success&&("1"==e&&i&&i!=f.data.affiliate_id&&a.removeCookie("affwp_ref"),("1"==e&&i&&i!=f.data.affiliate_id||!i)&&l(f.data.affiliate_id,o))}}).fail(function(a){window.console&&window.console.log&&console.log(a)}))}function l(i,e){c("affwp_ref",i),a.ajax({type:"POST",data:{action:"affwp_track_visit",affiliate:i,campaign:e,url:document.URL,referrer:document.referrer},url:affwp_scripts.ajaxurl,success:function(a){c("affwp_ref_visit_id",a),c("affwp_campaign",e)}}).fail(function(a){window.console&&window.console.log&&console.log(a)})}function c(i,e){"cookie_domain"in AFFWP?a.cookie(i,e,{expires:AFFWP.expiration,path:"/",domain:AFFWP.cookie_domain}):a.cookie(i,e,{expires:AFFWP.expiration,path:"/"})}function s(){for(var a,i=[],e=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),f=0;f<e.length;f++){a=e[f].split("="),i.push(a[0]);var n=void 0===a[1]?0:1,r=a[n].indexOf("#");a[n]=a[n].substring(0,-1!=r?r:a[n].length),i[a[0]]=a[n]}return i}});
var edd_scripts;function edd_load_gateway(payment_mode){jQuery(".edd-cart-ajax").show(),jQuery("#edd_purchase_form_wrap").html('<span class="edd-loading-ajax edd-loading"></span>');var nonce=jQuery("#edd-gateway-"+payment_mode).data(payment_mode+"-nonce"),url=edd_scripts.ajaxurl;0<url.indexOf("?")?url+="&":url+="?",url=url+"payment-mode="+payment_mode,jQuery.post(url,{action:"edd_load_gateway",edd_payment_mode:payment_mode,nonce:nonce},function(response){jQuery("#edd_purchase_form_wrap").html(response),jQuery(".edd-no-js").hide(),jQuery("body").trigger("edd_gateway_loaded",[payment_mode])})}jQuery(document).ready(function($){if($(".edd-no-js").hide(),$("a.edd-add-to-cart").addClass("edd-has-js"),$(document.body).on("click.eddRemoveFromCart",".edd-remove-from-cart",function(event){var $this=$(this),item=$this.data("cart-item"),action=$this.data("action"),id=$this.data("download-id"),nonce=$this.data("nonce"),data={action:action,cart_item:item,nonce:nonce};return $.ajax({type:"POST",data:data,dataType:"json",url:edd_scripts.ajaxurl,xhrFields:{withCredentials:!0},success:function(response){if(response.removed){if(parseInt(edd_scripts.position_in_cart,10)===parseInt(item,10)||edd_scripts.has_purchase_links)return window.location=window.location,!1;$(".edd-cart").each(function(){$(this).find("[data-cart-item='"+item+"']").parent().remove()}),$(".edd-cart").each(function(){var cart_item_counter=0;$(this).find("[data-cart-item]").each(function(){$(this).attr("data-cart-item",cart_item_counter),cart_item_counter+=1})}),$("[id^=edd_purchase_"+id+"]").length&&($("[id^=edd_purchase_"+id+"] .edd_go_to_checkout").hide(),$("[id^=edd_purchase_"+id+"] a.edd-add-to-cart").show().removeAttr("data-edd-loading"),"1"==edd_scripts.quantities_enabled&&$("[id^=edd_purchase_"+id+"] .edd_download_quantity_wrapper").show()),$("span.edd-cart-quantity").text(response.cart_quantity),$(document.body).trigger("edd_quantity_updated",[response.cart_quantity]),edd_scripts.taxes_enabled&&($(".cart_item.edd_subtotal span").html(response.subtotal),$(".cart_item.edd_cart_tax span").html(response.tax)),$(".cart_item.edd_total span").html(response.total),0==response.cart_quantity&&($(".cart_item.edd_subtotal,.edd-cart-number-of-items,.cart_item.edd_checkout,.cart_item.edd_cart_tax,.cart_item.edd_total").hide(),$(".edd-cart").each(function(){var cart_wrapper=$(this).parent();cart_wrapper&&(cart_wrapper.addClass("cart-empty"),cart_wrapper.removeClass("cart-not-empty")),$(this).append('<li class="cart_item empty">'+edd_scripts.empty_cart_message+"</li>")})),$(document.body).trigger("edd_cart_item_removed",[response])}}}).fail(function(response){window.console&&window.console.log&&console.log(response)}).done(function(response){}),!1}),$(document.body).on("click.eddAddToCart",".edd-add-to-cart",function(e){e.preventDefault();var $this=$(this),form=$this.closest("form");$this.prop("disabled",!0);$this.find(".edd-loading");var container=$this.closest("div");$this.attr("data-edd-loading","");form=$this.parents("form").last();var download=$this.data("download-id"),variable_price=$this.data("variable-price"),price_mode=$this.data("price-mode"),nonce=$this.data("nonce"),item_price_ids=[],free_items=!0;if("yes"==variable_price)if(0<form.find(".edd_price_option_"+download+'[type="hidden"]').length)item_price_ids[0]=$(".edd_price_option_"+download,form).val(),form.find(".edd-submit").data("price")&&0<form.find(".edd-submit").data("price")&&(free_items=!1);else{if(!form.find(".edd_price_option_"+download+":checked",form).length)return $this.removeAttr("data-edd-loading"),alert(edd_scripts.select_option),e.stopPropagation(),$this.prop("disabled",!1),!1;form.find(".edd_price_option_"+download+":checked",form).each(function(index){if(item_price_ids[index]=$(this).val(),!0===free_items){var item_price=$(this).data("price");item_price&&0<item_price&&(free_items=!1)}})}else item_price_ids[0]=download,$this.data("price")&&0<$this.data("price")&&(free_items=!1);if(free_items&&form.find(".edd_action_input").val("add_to_cart"),"straight_to_gateway"==form.find(".edd_action_input").val())return form.submit(),!0;var data={action:$this.data("action"),download_id:download,price_ids:item_price_ids,post_data:$(form).serialize(),nonce:nonce};return $.ajax({type:"POST",data:data,dataType:"json",url:edd_scripts.ajaxurl,xhrFields:{withCredentials:!0},success:function(response){var store_redirect="1"==edd_scripts.redirect_to_checkout,item_redirect="1"==form.find("#edd_redirect_to_checkout").val();if(store_redirect&&item_redirect||!store_redirect&&item_redirect)window.location=edd_scripts.checkout_page;else{"1"===edd_scripts.taxes_enabled&&($(".cart_item.edd_subtotal").show(),$(".cart_item.edd_cart_tax").show()),$(".cart_item.edd_total").show(),$(".cart_item.edd_checkout").show(),$(".cart_item.empty").length&&$(".cart_item.empty").hide(),$(".widget_edd_cart_widget .edd-cart").each(function(cart){var target=$(this).find(".edd-cart-meta:first");$(response.cart_item).insertBefore(target);var cart_wrapper=$(this).parent();cart_wrapper&&(cart_wrapper.addClass("cart-not-empty"),cart_wrapper.removeClass("cart-empty"))}),"1"===edd_scripts.taxes_enabled&&($(".edd-cart-meta.edd_subtotal span").html(response.subtotal),$(".edd-cart-meta.edd_cart_tax span").html(response.tax)),$(".edd-cart-meta.edd_total span").html(response.total);$(".edd-cart-item-title",response.cart_item).length;if($("span.edd-cart-quantity").each(function(){$(this).text(response.cart_quantity),$(document.body).trigger("edd_quantity_updated",[response.cart_quantity])}),"none"==$(".edd-cart-number-of-items").css("display")&&$(".edd-cart-number-of-items").show("slow"),"no"!=variable_price&&"multi"==price_mode||($("a.edd-add-to-cart",container).toggle(),$(".edd_go_to_checkout",container).css("display","inline-block")),"multi"==price_mode&&$this.removeAttr("data-edd-loading"),$(".edd_download_purchase_form").length&&("no"==variable_price||!form.find(".edd_price_option_"+download).is("input:hidden"))){var parent_form=$('.edd_download_purchase_form *[data-download-id="'+download+'"]').parents("form");$("a.edd-add-to-cart",parent_form).hide(),"multi"!=price_mode&&parent_form.find(".edd_download_quantity_wrapper").slideUp(),$(".edd_go_to_checkout",parent_form).show().removeAttr("data-edd-loading")}"incart"!=response&&($(".edd-cart-added-alert",container).fadeIn(),setTimeout(function(){$(".edd-cart-added-alert",container).fadeOut()},3e3)),$this.prop("disabled",!1),$(document.body).trigger("edd_cart_item_added",[response])}}}).fail(function(response){window.console&&window.console.log&&console.log(response)}).done(function(response){}),!1}),$("#edd_checkout_form_wrap").on("click",".edd_checkout_register_login",function(){var $this=$(this),data={action:$this.data("action"),nonce:$this.data("nonce")};return $(".edd-cart-ajax").show(),$.post(edd_scripts.ajaxurl,data,function(checkout_response){$("#edd_checkout_login_register").html(edd_scripts.loading),$("#edd_checkout_login_register").html(checkout_response),$(".edd-cart-ajax").hide()}),!1}),$(document).on("click","#edd_purchase_form #edd_login_fields input[type=submit]",function(e){e.preventDefault();var complete_purchase_val=$(this).val();$(this).val(edd_global_vars.purchase_loading),$(this).after('<span class="edd-loading-ajax edd-loading"></span>');var data={action:"edd_process_checkout_login",edd_ajax:1,edd_user_login:$("#edd_login_fields #edd_user_login").val(),edd_user_pass:$("#edd_login_fields #edd_user_pass").val(),edd_login_nonce:$("#edd_login_nonce").val()};$.post(edd_global_vars.ajaxurl,data,function(data){"success"==$.trim(data)?($(".edd_errors").remove(),window.location=edd_scripts.checkout_page):($("#edd_login_fields input[type=submit]").val(complete_purchase_val),$(".edd-loading-ajax").remove(),$(".edd_errors").remove(),$("#edd-user-login-submit").before(data))})}),$("select#edd-gateway, input.edd-gateway").change(function(e){var payment_mode=$("#edd-gateway option:selected, input.edd-gateway:checked").val();return"0"==payment_mode||edd_load_gateway(payment_mode),!1}),"1"==edd_scripts.is_checkout){var chosen_gateway=!1,ajax_needed=!1;$("select#edd-gateway, input.edd-gateway").length&&(chosen_gateway=$("meta[name='edd-chosen-gateway']").attr("content"),ajax_needed=!0),chosen_gateway||(chosen_gateway=edd_scripts.default_gateway),ajax_needed?setTimeout(function(){edd_load_gateway(chosen_gateway)},200):$("body").trigger("edd_gateway_loaded",[chosen_gateway])}$(document).on("click","#edd_purchase_form #edd_purchase_submit [type=submit]",function(e){var eddPurchaseform=document.getElementById("edd_purchase_form");if("function"!=typeof eddPurchaseform.checkValidity||!1!==eddPurchaseform.checkValidity()){e.preventDefault();var complete_purchase_val=$(this).val();$(this).val(edd_global_vars.purchase_loading),$(this).prop("disabled",!0),$(this).after('<span class="edd-loading-ajax edd-loading"></span>'),$.post(edd_global_vars.ajaxurl,$("#edd_purchase_form").serialize()+"&action=edd_process_checkout&edd_ajax=true",function(data){"success"==$.trim(data)?($(".edd_errors").remove(),$(".edd-error").hide(),$(eddPurchaseform).submit()):($("#edd-purchase-button").val(complete_purchase_val),$(".edd-loading-ajax").remove(),$(".edd_errors").remove(),$(".edd-error").hide(),$(edd_global_vars.checkout_error_anchor).before(data),$("#edd-purchase-button").prop("disabled",!1),$(document.body).trigger("edd_checkout_error",[data]))})}}),$(document.body).on("change","#edd_cc_address input.card_state, #edd_cc_address select, #edd_address_country",function(){var $form,$this=$(this),is_checkout="undefined"!=typeof edd_global_vars,field_name="card_state";"edd_address_country"==$(this).attr("id")&&(field_name="edd_address_state");var state_inputs=document.getElementById(field_name);if("card_state"!=$this.attr("id")&&null!=state_inputs){var nonce=$(this).data("nonce"),postData={action:"edd_get_shop_states",country:$this.val(),field_name:field_name,nonce:nonce};$.ajax({type:"POST",data:postData,url:edd_scripts.ajaxurl,xhrFields:{withCredentials:!0},success:function(response){$form=is_checkout?$("#edd_purchase_form"):$this.closest("form");var state_inputs='input[name="card_state"], select[name="card_state"], input[name="edd_address_state"], select[name="edd_address_state"]';if("nostates"==$.trim(response)){var text_field='<input type="text" id='+field_name+' name="card_state" class="card-state edd-input required" value=""/>';$form.find(state_inputs).replaceWith(text_field)}else $form.find(state_inputs).replaceWith(response);is_checkout&&$(document.body).trigger("edd_cart_billing_address_updated",[response])}}).fail(function(data){window.console&&window.console.log&&console.log(data)}).done(function(data){is_checkout&&recalculate_taxes()})}else is_checkout&&recalculate_taxes();return!1}),$(document.body).on("change","#edd_cc_address input[name=card_zip]",function(){"undefined"!=typeof edd_global_vars&&recalculate_taxes()})});
(function(){var container,button,menu,links,i,len;container=document.getElementById('site-navigation');if(!container){return;}
button=container.getElementsByTagName('button')[0];if('undefined'===typeof button){return;}
menu=container.getElementsByTagName('ul')[0];if('undefined'===typeof menu){button.style.display='none';return;}
menu.setAttribute('aria-expanded','false');if(-1===menu.className.indexOf('nav-menu')){menu.className+=' nav-menu';}
button.onclick=function(){if(-1!==container.className.indexOf('toggled')){container.className=container.className.replace(' toggled','');button.setAttribute('aria-expanded','false');menu.setAttribute('aria-expanded','false');}else{container.className+=' toggled';button.setAttribute('aria-expanded','true');menu.setAttribute('aria-expanded','true');}};links=menu.getElementsByTagName('a');for(i=0,len=links.length;i<len;i++){links[i].addEventListener('focus',toggleFocus,true);links[i].addEventListener('blur',toggleFocus,true);}
function toggleFocus(){var self=this;while(-1===self.className.indexOf('nav-menu')){if('li'===self.tagName.toLowerCase()){if(-1!==self.className.indexOf('focus')){self.className=self.className.replace(' focus','');}else{self.className+=' focus';}}
self=self.parentElement;}}
(function(container){var touchStartFn,i,parentLink=container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');if('ontouchstart'in window){touchStartFn=function(e){var menuItem=this.parentNode,i;if(!menuItem.classList.contains('focus')){e.preventDefault();for(i=0;i<menuItem.parentNode.children.length;++i){if(menuItem===menuItem.parentNode.children[i]){continue;}
menuItem.parentNode.children[i].classList.remove('focus');}
menuItem.classList.add('focus');}else{menuItem.classList.remove('focus');}};for(i=0;i<parentLink.length;++i){parentLink[i].addEventListener('touchstart',touchStartFn,false);}}}(container));})();
(function(){var isIe=/(trident|msie)/i.test(navigator.userAgent);if(isIe&&document.getElementById&&window.addEventListener){window.addEventListener('hashchange',function(){var id=location.hash.substring(1),element;if(!(/^[A-z0-9_-]+$/.test(id))){return;}
element=document.getElementById(id);if(element){if(!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))){element.tabIndex=-1;}
element.focus();}},false);}})();
(function($){$(document).ready(function(){"use strict";$(".icon-wechat .weixin").click(function(){$('.icon-wechat .footer-qrcode').toggle();});$(window).load(function(){$(".custom-share").fadeIn('1000');$(".bottom-chat").fadeIn('3000');});});})(jQuery);
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
(function($){var days=24*60*60,hours=60*60,minutes=60;$.fn.countdown=function(prop){var options=$.extend({callback:function(){},timestamp:0},prop);var left,d,h,m,s,positions;init(this,options);positions=this.find('.position');(function tick(){left=Math.floor((options.timestamp-(new Date()))/1000);if(left<0){left=0;}
var posEx=0;d=Math.floor(left/days);if(d>=100){posEx=1;updateTri(0,1,2,d);}else{updateDuo(0+posEx,1+posEx,d);}
left-=d*days;h=Math.floor(left/hours);updateDuo(2+posEx,3+posEx,h);left-=h*hours;m=Math.floor(left/minutes);updateDuo(4+posEx,5+posEx,m);left-=m*minutes;s=left;updateDuo(6+posEx,7+posEx,s);options.callback(d,h,m,s);setTimeout(tick,1000);})();function updateDuo(minor,major,value){switchDigit(positions.eq(minor),Math.floor(value/10)%10);switchDigit(positions.eq(major),value%10);}
function updateTri(first,second,third,value){switchDigit(positions.eq(first),Math.floor(value/100)%100);switchDigit(positions.eq(second),Math.floor(value/10)%10);switchDigit(positions.eq(third),value%10);}
return this;};function init(elem,options){elem.addClass('countdownHolder');$.each(['Days','Hours','Minutes','Seconds'],function(i){var boxName;if(this=="Days"){boxName="d";}
else if(this=="Hours"){boxName="h";}
else if(this=="Minutes"){boxName="m";}
else{boxName="s";}
left=Math.floor((options.timestamp-(new Date()))/1000);if(left<0){left=0;}
d=Math.floor(left/days);var html='<div class="count'+this+'">';if(this=="Days"&&d>=100){html+='<span class="position">'+'<span class="digit static">0</span>'+'</span>';}
html+='<span class="position">'+'<span class="digit static">0</span>'+'</span>'+'<span class="position">'+'<span class="digit static">0</span>'+'</span>'+'<span class="boxName">'+'<span class="'+this+'">'+boxName+'</span>'+'</span>'
$(html).appendTo(elem);});}
function switchDigit(position,number){var digit=position.find('.digit')
if(digit.is(':animated')){return false;}
if(position.data('digit')==number){return false;}
position.data('digit',number);var replacement=$('<span>',{'class':'digit',css:{top:0,opacity:0},html:number});digit.before(replacement).removeClass('static').animate({top:0,opacity:0},'fast',function(){digit.remove();})
replacement.delay(100).animate({top:0,opacity:1},'fast',function(){replacement.addClass('static');});}})(jQuery);
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else{factory(jQuery);}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s);}
function decode(s){return config.raw?s:decodeURIComponent(s);}
function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value));}
function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');}
try{s=decodeURIComponent(s.replace(pluses,' '));return config.json?JSON.parse(s):s;}catch(e){}}
function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value;}
var config=$.cookie=function(key,value,options){if(value!==undefined&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days);}
return(document.cookie=[encode(key),'=',stringifyCookieValue(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}
var result=key?undefined:{};var cookies=document.cookie?document.cookie.split('; '):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=parts.join('=');if(key&&key===name){result=read(cookie,value);break;}
if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie;}}
return result;};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined){return false;}
$.cookie(key,'',$.extend({},options,{expires:-1}));return!$.cookie(key);};}));
+function($){function dwpb_fix_hieght(){var dwpb_height=$('#dwpb').outerHeight();var adminbar_height=$('.admin-bar #wpadminbar').outerHeight();function dwpb_custom_style(){if(!$('#dwpb-custom-style').length){$('<style id="dwpb-custom-style">body.dwpb-push-page.dwpb-open, body.dwpb-push-page.admin-bar.dwpb-open #wpadminbar, .dwpb-twenty-fourteen.dwpb-open.dwpb-push-page .site-header{top:'+dwpb_height+'px}</style>').appendTo('body');$('<style id="dwpb-custom-style-twenty-fourteen">.admin-bar.dwpb-twenty-fourteen.dwpb-open.dwpb-push-page .site-header{top:'+(dwpb_height+adminbar_height)+'px}</style>').appendTo('body');}else{return false;}}
setTimeout(function(){dwpb_custom_style();$('.dwpb-open .dwpb-action').click(function(){dwpb_custom_style();});},1010);}
$(document).ready(function(){$('.dwpb-counter').countdown({timestamp:(new Date()).getTime()+(dwpb.timeleft*1000),callback:function(d,h,m,s){if(d===0&&h===0&&m===0&&s===0){$('.dwpb-message').removeClass('hide');$('.dwpb-countdown').addClass('hide');}}});dwpb_fix_hieght();$('.dwpb-action').click(function(){$('body').toggleClass('dwpb-open');});setTimeout(function(){$('body').addClass('dwpb-open');},1000);if(!$('body').hasClass('dwpb-allow-close')){var cookie=$.cookie('dwpb-hide');if(cookie==='dwpb-hide'){setTimeout(function(){$('body').removeClass('dwpb-open');},1000);}
$('.dwpb-action').click(function(){if(cookie===undefined){$.cookie('dwpb-hide','dwpb-hide',{path:'/'});}else{$.removeCookie('dwpb-hide',{path:'/'});}});}
if($('body').hasClass('dwpb-allow-close')){function remove_promobar(){$('#dwpb, .dwpb-close').remove();$('body').removeClass('dwpb-cover-page dwpb-ramain-top dwpb-open dwpb-push-page dwpb-twenty-fourteen');}
$('.dwpb-close').click(function(){remove_promobar();});$('.dwpb-close').click(function(){if(cookie===undefined){$.cookie('dwpb-close','dwpb-close-'+dwpb.reset_cookie,{path:'/'});}});if($.cookie('dwpb-close')==='dwpb-close-'+dwpb.reset_cookie){remove_promobar();}}});$(window).resize(function(){dwpb_fix_hieght();});}(jQuery);