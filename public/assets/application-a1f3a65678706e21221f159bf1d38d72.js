function _remove_add_form(){$("#new_calendar").appendTo("#form_add_name_box"),$("#update_calendar").appendTo("#form_add_name_box"),$("#services_table .tr_add_name").remove(),$("#services_table .tr_update_name").remove()}!function(t,e){t.rails!==e&&t.error("jquery-ujs has already been loaded!");var n,i=t(document);t.rails=n={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",buttonClickSelector:"button[data-remote]",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input[type=file]",linkDisableSelector:"a[data-disable-with]",CSRFProtection:function(e){var n=t('meta[name="csrf-token"]').attr("content");n&&e.setRequestHeader("X-CSRF-Token",n)},refreshCSRFTokens:function(){var e=t("meta[name=csrf-token]").attr("content"),n=t("meta[name=csrf-param]").attr("content");t('form input[name="'+n+'"]').val(e)},fire:function(e,n,i){var r=t.Event(n);return e.trigger(r,i),r.result!==!1},confirm:function(t){return confirm(t)},ajax:function(e){return t.ajax(e)},href:function(t){return t.attr("href")},handleRemote:function(i){var r,o,a,s,l,u,c,h;if(n.fire(i,"ajax:before")){if(s=i.data("cross-domain"),l=s===e?null:s,u=i.data("with-credentials")||null,c=i.data("type")||t.ajaxSettings&&t.ajaxSettings.dataType,i.is("form")){r=i.attr("method"),o=i.attr("action"),a=i.serializeArray();var d=i.data("ujs:submit-button");d&&(a.push(d),i.data("ujs:submit-button",null))}else i.is(n.inputChangeSelector)?(r=i.data("method"),o=i.data("url"),a=i.serialize(),i.data("params")&&(a=a+"&"+i.data("params"))):i.is(n.buttonClickSelector)?(r=i.data("method")||"get",o=i.data("url"),a=i.serialize(),i.data("params")&&(a=a+"&"+i.data("params"))):(r=i.data("method"),o=n.href(i),a=i.data("params")||null);h={type:r||"GET",data:a,dataType:c,beforeSend:function(t,r){return r.dataType===e&&t.setRequestHeader("accept","*/*;q=0.5, "+r.accepts.script),n.fire(i,"ajax:beforeSend",[t,r])},success:function(t,e,n){i.trigger("ajax:success",[t,e,n])},complete:function(t,e){i.trigger("ajax:complete",[t,e])},error:function(t,e,n){i.trigger("ajax:error",[t,e,n])},crossDomain:l},u&&(h.xhrFields={withCredentials:u}),o&&(h.url=o);var p=n.ajax(h);return i.trigger("ajax:send",p),p}return!1},handleMethod:function(i){var r=n.href(i),o=i.data("method"),a=i.attr("target"),s=t("meta[name=csrf-token]").attr("content"),l=t("meta[name=csrf-param]").attr("content"),u=t('<form method="post" action="'+r+'"></form>'),c='<input name="_method" value="'+o+'" type="hidden" />';l!==e&&s!==e&&(c+='<input name="'+l+'" value="'+s+'" type="hidden" />'),a&&u.attr("target",a),u.hide().append(c).appendTo("body"),u.submit()},disableFormElements:function(e){e.find(n.disableSelector).each(function(){var e=t(this),n=e.is("button")?"html":"val";e.data("ujs:enable-with",e[n]()),e[n](e.data("disable-with")),e.prop("disabled",!0)})},enableFormElements:function(e){e.find(n.enableSelector).each(function(){var e=t(this),n=e.is("button")?"html":"val";e.data("ujs:enable-with")&&e[n](e.data("ujs:enable-with")),e.prop("disabled",!1)})},allowAction:function(t){var e,i=t.data("confirm"),r=!1;return i?(n.fire(t,"confirm")&&(r=n.confirm(i),e=n.fire(t,"confirm:complete",[r])),r&&e):!0},blankInputs:function(e,n,i){var r,o,a=t(),s=n||"input,textarea",l=e.find(s);return l.each(function(){if(r=t(this),o=r.is("input[type=checkbox],input[type=radio]")?r.is(":checked"):r.val(),!o==!i){if(r.is("input[type=radio]")&&l.filter('input[type=radio]:checked[name="'+r.attr("name")+'"]').length)return!0;a=a.add(r)}}),a.length?a:!1},nonBlankInputs:function(t,e){return n.blankInputs(t,e,!0)},stopEverything:function(e){return t(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},disableElement:function(t){t.data("ujs:enable-with",t.html()),t.html(t.data("disable-with")),t.bind("click.railsDisable",function(t){return n.stopEverything(t)})},enableElement:function(t){t.data("ujs:enable-with")!==e&&(t.html(t.data("ujs:enable-with")),t.removeData("ujs:enable-with")),t.unbind("click.railsDisable")}},n.fire(i,"rails:attachBindings")&&(t.ajaxPrefilter(function(t,e,i){t.crossDomain||n.CSRFProtection(i)}),i.delegate(n.linkDisableSelector,"ajax:complete",function(){n.enableElement(t(this))}),i.delegate(n.linkClickSelector,"click.rails",function(i){var r=t(this),o=r.data("method"),a=r.data("params"),s=i.metaKey||i.ctrlKey;if(!n.allowAction(r))return n.stopEverything(i);if(!s&&r.is(n.linkDisableSelector)&&n.disableElement(r),r.data("remote")!==e){if(s&&(!o||"GET"===o)&&!a)return!0;var l=n.handleRemote(r);return l===!1?n.enableElement(r):l.error(function(){n.enableElement(r)}),!1}return r.data("method")?(n.handleMethod(r),!1):void 0}),i.delegate(n.buttonClickSelector,"click.rails",function(e){var i=t(this);return n.allowAction(i)?(n.handleRemote(i),!1):n.stopEverything(e)}),i.delegate(n.inputChangeSelector,"change.rails",function(e){var i=t(this);return n.allowAction(i)?(n.handleRemote(i),!1):n.stopEverything(e)}),i.delegate(n.formSubmitSelector,"submit.rails",function(i){var r=t(this),o=r.data("remote")!==e,a=n.blankInputs(r,n.requiredInputSelector),s=n.nonBlankInputs(r,n.fileInputSelector);if(!n.allowAction(r))return n.stopEverything(i);if(a&&r.attr("novalidate")==e&&n.fire(r,"ajax:aborted:required",[a]))return n.stopEverything(i);if(o){if(s){setTimeout(function(){n.disableFormElements(r)},13);var l=n.fire(r,"ajax:aborted:file",[s]);return l||setTimeout(function(){n.enableFormElements(r)},13),l}return n.handleRemote(r),!1}setTimeout(function(){n.disableFormElements(r)},13)}),i.delegate(n.formInputClickSelector,"click.rails",function(e){var i=t(this);if(!n.allowAction(i))return n.stopEverything(e);var r=i.attr("name"),o=r?{name:r,value:i.val()}:null;i.closest("form").data("ujs:submit-button",o)}),i.delegate(n.formSubmitSelector,"ajax:beforeSend.rails",function(e){this==e.target&&n.disableFormElements(t(this))}),i.delegate(n.formSubmitSelector,"ajax:complete.rails",function(e){this==e.target&&n.enableFormElements(t(this))}),t(function(){n.refreshCSRFTokens()}))}(jQuery),function(){var t,e,n,i,r,o,a,s,l,u,c,h,d,p,f,m,v,b,g,y,_,w,S,x,k,T,E,C,L,j,A,H,$,N,P,I,M,O,R,F,D,q,X,z,W,Y,K,Q,B,G=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},J={}.hasOwnProperty,U=function(t,e){function n(){this.constructor=t}for(var i in e)J.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},V=[].slice;L={},h=10,z=!1,m=null,C=null,P=null,f=null,Q=null,y=function(t){var e;return t=new n(t),F(),c(),I(t),z&&(e=W(t.absolute))?(_(e),w(t)):w(t,X)},W=function(t){var e;return e=L[t],e&&!e.transitionCacheDisabled?e:void 0},v=function(t){return null==t&&(t=!0),z=t},w=function(t,e){return null==e&&(e=function(){return function(){}}(this)),Y("page:fetch",{url:t.absolute}),null!=Q&&Q.abort(),Q=new XMLHttpRequest,Q.open("GET",t.withoutHashForIE10compatibility(),!0),Q.setRequestHeader("Accept","text/html, application/xhtml+xml, application/xml"),Q.setRequestHeader("X-XHR-Referer",P),Q.onload=function(){var n;return Y("page:receive"),(n=$())?(d.apply(null,g(n)),M(),e(),Y("page:load")):document.location.href=t.absolute},Q.onloadend=function(){return Q=null},Q.onerror=function(){return document.location.href=t.absolute},Q.send()},_=function(t){return null!=Q&&Q.abort(),d(t.title,t.body),N(t),Y("page:restore")},c=function(){var t;return t=new n(m.url),L[t.absolute]={url:t.relative,body:document.body,title:document.title,positionY:window.pageYOffset,positionX:window.pageXOffset,cachedAt:(new Date).getTime(),transitionCacheDisabled:null!=document.querySelector("[data-no-transition-cache]")},p(h)},A=function(t){return null==t&&(t=h),/^[\d]+$/.test(t)?h=parseInt(t):void 0},p=function(t){var e,n,i,r,o,a;for(i=Object.keys(L),e=i.map(function(t){return L[t].cachedAt}).sort(function(t,e){return e-t}),a=[],r=0,o=i.length;o>r;r++)n=i[r],L[n].cachedAt<=e[t]&&(Y("page:expire",L[n]),a.push(delete L[n]));return a},d=function(e,n,i,r){return document.title=e,document.documentElement.replaceChild(n,document.body),null!=i&&t.update(i),r&&b(),m=window.history.state,Y("page:change"),Y("page:update")},b=function(){var t,e,n,i,r,o,a,s,l,u,c,h;for(o=Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')),a=0,l=o.length;l>a;a++)if(r=o[a],""===(c=r.type)||"text/javascript"===c){for(e=document.createElement("script"),h=r.attributes,s=0,u=h.length;u>s;s++)t=h[s],e.setAttribute(t.name,t.value);e.appendChild(document.createTextNode(r.innerHTML)),i=r.parentNode,n=r.nextSibling,i.removeChild(r),i.insertBefore(e,n)}},D=function(t){return t.innerHTML=t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi,""),t},I=function(t){return(t=new n(t)).absolute!==P?window.history.pushState({turbolinks:!0,url:t.absolute},"",t.absolute):void 0},M=function(){var t,e;return(t=Q.getResponseHeader("X-XHR-Redirected-To"))?(t=new n(t),e=t.hasNoHash()?document.location.hash:"",window.history.replaceState(m,"",t.href+e)):void 0},F=function(){return P=document.location.href},R=function(){return window.history.replaceState({turbolinks:!0,url:document.location.href},"",document.location.href)},O=function(){return m=window.history.state},N=function(t){return window.scrollTo(t.positionX,t.positionY)},X=function(){return document.location.hash?document.location.href=document.location.href:window.scrollTo(0,0)},H=function(t){var e,n;return e=(null!=(n=document.cookie.match(new RegExp(t+"=(\\w+)")))?n[1].toUpperCase():void 0)||"",document.cookie=t+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/",e},Y=function(t,e){var n;return n=document.createEvent("Events"),e&&(n.data=e),n.initEvent(t,!0,!0),document.dispatchEvent(n)},j=function(){return!Y("page:before-change")},$=function(){var t,e,n,i,r,o;return e=function(){var t;return 400<=(t=Q.status)&&600>t},o=function(){return Q.getResponseHeader("Content-Type").match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)},i=function(t){var e,n,i,r,o;for(r=t.head.childNodes,o=[],n=0,i=r.length;i>n;n++)e=r[n],null!=("function"==typeof e.getAttribute?e.getAttribute("data-turbolinks-track"):void 0)&&o.push(e.getAttribute("src")||e.getAttribute("href"));return o},t=function(t){var e;return C||(C=i(document)),e=i(t),e.length!==C.length||r(e,C).length!==C.length},r=function(t,e){var n,i,r,o,a;for(t.length>e.length&&(o=[e,t],t=o[0],e=o[1]),a=[],i=0,r=t.length;r>i;i++)n=t[i],G.call(e,n)>=0&&a.push(n);return a},!e()&&o()&&(n=f(Q.responseText),n&&!t(n))?n:void 0},g=function(e){var n;return n=e.querySelector("title"),[null!=n?n.textContent:void 0,D(e.body),t.get(e).token,"runScripts"]},t={get:function(t){var e;return null==t&&(t=document),{node:e=t.querySelector('meta[name="csrf-token"]'),token:null!=e&&"function"==typeof e.getAttribute?e.getAttribute("content"):void 0}},update:function(t){var e;return e=this.get(),null!=e.token&&null!=t&&e.token!==t?e.node.setAttribute("content",t):void 0}},r=function(){var t,e,n,i,r,o;e=function(t){return(new DOMParser).parseFromString(t,"text/html")},t=function(t){var e;return e=document.implementation.createHTMLDocument(""),e.documentElement.innerHTML=t,e},n=function(t){var e;return e=document.implementation.createHTMLDocument(""),e.open("replace"),e.write(t),e.close(),e};try{if(window.DOMParser)return r=e("<html><body><p>test"),e}catch(a){return i=a,r=t("<html><body><p>test"),t}finally{if(1!==(null!=r&&null!=(o=r.body)?o.childNodes.length:void 0))return n}},n=function(){function t(e){return this.original=null!=e?e:document.location.href,this.original.constructor===t?this.original:void this._parse()}return t.prototype.withoutHash=function(){return this.href.replace(this.hash,"")},t.prototype.withoutHashForIE10compatibility=function(){return this.withoutHash()},t.prototype.hasNoHash=function(){return 0===this.hash.length},t.prototype._parse=function(){var t;return(null!=this.link?this.link:this.link=document.createElement("a")).href=this.original,t=this.link,this.href=t.href,this.protocol=t.protocol,this.host=t.host,this.hostname=t.hostname,this.port=t.port,this.pathname=t.pathname,this.search=t.search,this.hash=t.hash,this.origin=[this.protocol,"//",this.hostname].join(""),0!==this.port.length&&(this.origin+=":"+this.port),this.relative=[this.pathname,this.search,this.hash].join(""),this.absolute=this.href},t}(),i=function(t){function e(t){return this.link=t,this.link.constructor===e?this.link:(this.original=this.link.href,void e.__super__.constructor.apply(this,arguments))}return U(e,t),e.HTML_EXTENSIONS=["html"],e.allowExtensions=function(){var t,n,i,r;for(n=1<=arguments.length?V.call(arguments,0):[],i=0,r=n.length;r>i;i++)t=n[i],e.HTML_EXTENSIONS.push(t);return e.HTML_EXTENSIONS},e.prototype.shouldIgnore=function(){return this._crossOrigin()||this._anchored()||this._nonHtml()||this._optOut()||this._target()},e.prototype._crossOrigin=function(){return this.origin!==(new n).origin},e.prototype._anchored=function(){var t;return(this.hash&&this.withoutHash())===(t=new n).withoutHash()||this.href===t.href+"#"},e.prototype._nonHtml=function(){return this.pathname.match(/\.[a-z]+$/g)&&!this.pathname.match(new RegExp("\\.(?:"+e.HTML_EXTENSIONS.join("|")+")?$","g"))},e.prototype._optOut=function(){var t,e;for(e=this.link;!t&&e!==document;)t=null!=e.getAttribute("data-no-turbolink"),e=e.parentNode;return t},e.prototype._target=function(){return 0!==this.link.target.length},e}(n),e=function(){function t(t){this.event=t,this.event.defaultPrevented||(this._extractLink(),this._validForTurbolinks()&&(j()||K(this.link.href),this.event.preventDefault()))}return t.installHandlerLast=function(e){return e.defaultPrevented?void 0:(document.removeEventListener("click",t.handle,!1),document.addEventListener("click",t.handle,!1))},t.handle=function(e){return new t(e)},t.prototype._extractLink=function(){var t;for(t=this.event.target;t.parentNode&&"A"!==t.nodeName;)t=t.parentNode;return"A"===t.nodeName&&0!==t.href.length?this.link=new i(t):void 0},t.prototype._validForTurbolinks=function(){return null!=this.link&&!(this.link.shouldIgnore()||this._nonStandardClick())},t.prototype._nonStandardClick=function(){return this.event.which>1||this.event.metaKey||this.event.ctrlKey||this.event.shiftKey||this.event.altKey},t}(),u=function(t){return setTimeout(t,500)},k=function(){return document.addEventListener("DOMContentLoaded",function(){return Y("page:change"),Y("page:update")},!0)},E=function(){return"undefined"!=typeof jQuery?jQuery(document).on("ajaxSuccess",function(t,e){return jQuery.trim(e.responseText)?Y("page:update"):void 0}):void 0},T=function(t){var e,i;return(null!=(i=t.state)?i.turbolinks:void 0)?(e=L[new n(t.state.url).absolute])?(c(),_(e)):K(t.target.location.href):void 0},x=function(){return R(),O(),f=r(),document.addEventListener("click",e.installHandlerLast,!0),u(function(){return window.addEventListener("popstate",T,!1)})},S=void 0!==window.history.state||navigator.userAgent.match(/Firefox\/2[6|7]/),s=window.history&&window.history.pushState&&window.history.replaceState&&S,o=!navigator.userAgent.match(/CriOS\//),q="GET"===(B=H("request_method"))||""===B,l=s&&o&&q,a=document.addEventListener&&document.createEvent,a&&(k(),E()),l?(K=y,x()):K=function(t){return document.location.href=t},this.Turbolinks={visit:K,pagesCached:A,enableTransitionCache:v,allowLinkExtensions:i.allowExtensions,supported:l}}.call(this),function(t){t.widget("ui.nestedSortable",t.extend({},t.ui.sortable.prototype,{options:{tabSize:20,disableNesting:"ui-nestedSortable-no-nesting",errorClass:"ui-nestedSortable-error",listType:"ol",listClass:"nested_set",maxLevels:0,noJumpFix:0},_create:function(){return 0==this.noJumpFix&&this.element.height(this.element.height()),this.element.data("sortable",this.element.data("nestedSortable")),t.ui.sortable.prototype._create.apply(this,arguments)},_mouseDrag:function(e){if(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll){var n=this.options,i=!1;this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<n.scrollSensitivity?this.scrollParent[0].scrollTop=i=this.scrollParent[0].scrollTop+n.scrollSpeed:e.pageY-this.overflowOffset.top<n.scrollSensitivity&&(this.scrollParent[0].scrollTop=i=this.scrollParent[0].scrollTop-n.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<n.scrollSensitivity?this.scrollParent[0].scrollLeft=i=this.scrollParent[0].scrollLeft+n.scrollSpeed:e.pageX-this.overflowOffset.left<n.scrollSensitivity&&(this.scrollParent[0].scrollLeft=i=this.scrollParent[0].scrollLeft-n.scrollSpeed)):(e.pageY-t(document).scrollTop()<n.scrollSensitivity?i=t(document).scrollTop(t(document).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<n.scrollSensitivity&&(i=t(document).scrollTop(t(document).scrollTop()+n.scrollSpeed)),e.pageX-t(document).scrollLeft()<n.scrollSensitivity?i=t(document).scrollLeft(t(document).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<n.scrollSensitivity&&(i=t(document).scrollLeft(t(document).scrollLeft()+n.scrollSpeed))),i!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)}this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"==this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"==this.options.axis||(this.helper[0].style.top=this.position.top+"px");for(var r=this.items.length-1;r>=0;r--){var o=this.items[r],a=o.item[0],s=this._intersectsWithPointer(o);if(s&&a!=this.currentItem[0]&&this.placeholder[1==s?"next":"prev"]()[0]!=a&&!t.contains(this.placeholder[0],a)&&("semi-dynamic"==this.options.type?!t.contains(this.element[0],a):!0)){if(this.direction=1==s?"down":"up","pointer"!=this.options.tolerance&&!this._intersectsWithSides(o))break;this._rearrange(e,o),this._clearEmpty(a),this._trigger("change",e,this._uiHash());break}}var l=this.placeholder[0].parentNode.parentNode&&t(this.placeholder[0].parentNode.parentNode).closest(".ui-sortable").length?t(this.placeholder[0].parentNode.parentNode):null,u=this._getLevel(this.placeholder),c=this._getChildLevels(this.helper),h=this.placeholder[0].previousSibling?t(this.placeholder[0].previousSibling):null;if(null!=h)for(;"li"!=h[0].nodeName.toLowerCase()||h[0]==this.currentItem[0];){if(!h[0].previousSibling){h=null;break}h=t(h[0].previousSibling)}return newList=document.createElement(n.listType),t(newList).addClass(n.listClass),this.beyondMaxLevels=0,null!=l&&this.positionAbs.left<l.offset().left?(l.after(this.placeholder[0]),this._clearEmpty(l[0]),this._trigger("change",e,this._uiHash())):null!=h&&this.positionAbs.left>h.offset().left+n.tabSize?(this._isAllowed(h,u+c+1),h.children(n.listType).length||h[0].appendChild(newList),h.children(n.listType)[0].appendChild(this.placeholder[0]),this._trigger("change",e,this._uiHash())):this._isAllowed(l,u+c),this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e){if(this.beyondMaxLevels){for(var n=this.placeholder.parent().closest(this.options.items),i=this.beyondMaxLevels-1;i>0;i--)n=n.parent().closest(this.options.items);this.placeholder.removeClass(this.options.errorClass),n.after(this.placeholder),this._trigger("change",e,this._uiHash())}t.ui.sortable.prototype._mouseStop.apply(this,arguments)},serialize:function(e){var n=this._getItemsAsjQuery(e&&e.connected),i=[];return e=e||{},t(n).each(function(){var n=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[-=_](.+)/),r=(t(e.item||this).parent(e.listType).parent("li").attr(e.attribute||"id")||"").match(e.expression||/(.+)[-=_](.+)/);n&&i.push((e.key||n[1]+"["+(e.key&&e.expression?n[1]:n[2])+"]")+"="+(r?e.key&&e.expression?r[1]:r[2]:"root"))}),!i.length&&e.key&&i.push(e.key+"="),i.join("&")},toHierarchy:function(e){function n(i){var r=(t(i).attr(e.attribute||"id")||"").match(e.expression||/(.+)[-=_](.+)/);if(null!=r){var o={id:r[2]};return t(i).children(e.listType).children("li").length>0&&(o.children=[],t(i).children(e.listType).children("li").each(function(){var e=n(t(this));o.children.push(e)})),o}}e=e||{};var i=(e.startDepthCount||0,[]);return t(this.element).children("li").each(function(){var e=n(t(this));i.push(e)}),i},toArray:function(e){function n(t,e){return t.left-e.left}function i(n,a,s){return right=s+1,t(n).children(e.listType).children("li").length>0&&(a++,t(n).children(e.listType).children("li").each(function(){right=i(t(this),a,right)}),a--),id=t(n).attr(e.attribute||"id").match(e.expression||/(.+)[-=_](.+)/),a===r+1?pid="root":(parentItem=t(n).parent(e.listType).parent("li").attr("id").match(e.expression||/(.+)[-=_](.+)/),pid=parentItem[2]),null!=id&&o.push({item_id:id[2],parent_id:pid,depth:a,left:s,right:right}),s=right+1}e=e||{};var r=e.startDepthCount||0,o=[],a=2;return o.push({item_id:"root",parent_id:"none",depth:r,left:"1",right:2*(t("li",this.element).length+1)}),t(this.element).children("li").each(function(){a=i(this,r+1,a)}),o=o.sort(n)},_clear:function(){t.ui.sortable.prototype._clear.apply(this,arguments);for(var e=this.items.length-1;e>=0;e--){var n=this.items[e].item[0];this._clearEmpty(n)}return!0},_clearEmpty:function(t){t.children[1]&&0==t.children[1].children.length&&t.removeChild(t.children[1])},_getLevel:function(t){var e=1;if(this.options.listType)for(var n=t.closest(this.options.listType);!n.is(".ui-sortable");)e++,n=n.parent().closest(this.options.listType);return e},_getChildLevels:function(e,n){var i=this,r=this.options,o=0;return n=n||0,t(e).children(r.listType).children(r.items).each(function(t,e){o=Math.max(i._getChildLevels(e,n+1),o)}),n?o+1:o},_isAllowed:function(t,e){var n=this.options;null!=t&&t.hasClass(n.disableNesting)?(this.placeholder.addClass(n.errorClass),this.beyondMaxLevels=n.maxLevels<e&&0!=n.maxLevels?e-n.maxLevels:1):n.maxLevels<e&&0!=n.maxLevels?(this.placeholder.addClass(n.errorClass),this.beyondMaxLevels=e-n.maxLevels):(this.placeholder.removeClass(n.errorClass),this.beyondMaxLevels=0)}})),t.ui.nestedSortable.prototype.options=t.extend({},t.ui.sortable.prototype.options,t.ui.nestedSortable.prototype.options)}(jQuery),function(){this.rebuild_sortable_tree=function(t,e,n,i,r){return $.ajax({type:"POST",dataType:"script",url:t,data:{id:e,parent_id:n,prev_id:i,next_id:r},beforeSend:function(){return $(".sortable_tree i.handle").hide()},success:function(){return $(".sortable_tree i.handle").show()},error:function(t,e,n){return console.log(n)}})},this.init_sortable_tree=function(){var t,e,n;return n=$("ol.sortable_tree"),0===n.length?!1:(e=n.data("rebuild_url")||n.data("rebuild-url"),t=n.data("max_levels")||n.data("max-levels"),n.nestedSortable({items:"li",helper:"clone",handle:"i.handle",tolerance:"pointer",maxLevels:t,revert:250,tabSize:25,opacity:.6,placeholder:"placeholder",disableNesting:"no-nest",toleranceElement:"> div",forcePlaceholderSize:!0}),n.on("sortupdate",function(){return function(t,n){var i,r,o,a,s,l;return r=n.item,i="node-id",o=r.data(i),l=r.prev().data(i),a=r.next().data(i),s=r.parent().parent().data(i),rebuild_sortable_tree(e,o,s,l,a)}}(this)),!0)},$(function(){return init_sortable_tree()})}.call(this),function(){}.call(this),$(function(){$("table").tablesorter({debug:!0}),$(".add_name").click(function(){return _remove_add_form(),$("#tr_"+$(this).attr("parent_id")).after("<tr class='tr_add_name'><td colspan='4'></td></tr>"),$("#new_calendar").appendTo(".tr_add_name td"),$("#form_datum").val($(this).attr("datum")),$("#form_parent_id").val($(this).attr("parent_id")),!1}),$(".update_name").click(function(){return _remove_add_form(),$("#tr_"+$(this).attr("id")).after("<tr class='tr_update_name'><td colspan='4'></td></tr>"),$("#update_calendar").appendTo(".tr_update_name td"),$("#form_id").val($(this).attr("id")),$("#form_name").val($(this).attr("name")),!1});var t=$("[rel~=tooltip]"),e=!1,n=!1;t.bind("mouseenter",function(){if(e=$(this),tip=e.attr("title"),n=$('<div id="tooltip"></div>'),!tip||""==tip)return!1;e.removeAttr("title"),n.css("opacity",0).html(tip).appendTo("body");var t=function(){$(window).width()<1.5*n.outerWidth()?n.css("max-width",$(window).width()/2):n.css("max-width",340);var t=e.offset().left+e.outerWidth()/2-n.outerWidth()/2,i=e.offset().top-n.outerHeight()-20;if(0>t?(t=e.offset().left+e.outerWidth()/2-20,n.addClass("left")):n.removeClass("left"),t+n.outerWidth()>$(window).width()?(t=e.offset().left-n.outerWidth()+e.outerWidth()/2+20,n.addClass("right")):n.removeClass("right"),0>i){var i=e.offset().top+e.outerHeight();n.addClass("top")}else n.removeClass("top");n.css({left:t,top:i}).animate({top:"+=10",opacity:1},50)};t(),$(window).resize(t);var i=function(){n.animate({top:"-=10",opacity:0},50,function(){$(this).remove()}),e.attr("title",tip)};e.bind("mouseleave",i),n.bind("click",i)})});