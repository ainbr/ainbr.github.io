(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0x0X":function(e,t,r){"use strict";t.a=function(e){function t(e,t,n){var i=t.trim().split(h);t=i;var a=i.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<a;++s)t[s]=r(e,t[s],n).trim();break;default:var c=s=0;for(t=[];s<a;++s)for(var l=0;l<o;++l)t[c++]=r(e[l]+" ",i[s],n).trim()}return t}function r(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(m,"$1"+e.trim());case 58:return e.trim()+t.replace(m,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(m,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function n(e,t,r,a){var o=e+";",s=2*t+3*r+4*a;if(944===s){e=o.indexOf(":",9)+1;var c=o.substring(e,o.length-1).trim();return c=o.substring(0,e).trim()+c+";",1===R||2===R&&i(c,1)?"-webkit-"+c+c:c}if(0===R||2===R&&!i(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(A,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(c=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+c+o;case 1005:return d.test(o)?o.replace(f,":-webkit-")+o.replace(f,":-moz-")+o:o;case 1e3:switch(t=(c=o.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=o.replace(v,"tb");break;case 232:c=o.replace(v,"tb-rl");break;case 220:c=o.replace(v,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+c+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(c=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:o=o.replace(c,"-webkit-"+c)+";"+o;break;case 207:case 102:o=o.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(c,"-webkit-"+c)+";"+o.replace(c,"-ms-"+c+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return c=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+c+"-ms-flex-"+c+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(k,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(k,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===S.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?n(e.replace("stretch","fill-available"),t,r,a).replace(":fill-available",":stretch"):o.replace(c,"-webkit-"+c)+o.replace(c,"-moz-"+c.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===r+a&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+o}return o}function i(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),N(2!==t?n:n.replace(C,"$1"),r,t)}function a(e,t){var r=n(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(x," or ($1)").substring(4):"("+t+")"}function o(e,t,r,n,i,a,o,s,l,u){for(var f,d=0,p=t;d<P;++d)switch(f=E[d].call(c,e,p,r,n,i,a,o,s,l,u)){case void 0:case!1:case!0:case null:break;default:p=f}if(p!==t)return p}function s(e){return void 0!==(e=e.prefix)&&(N=null,e?"function"!=typeof e?R=1:(R=2,N=e):R=0),s}function c(e,r){var s=e;if(33>s.charCodeAt(0)&&(s=s.trim()),s=[s],0<P){var c=o(-1,r,s,s,I,O,0,0,0,0);void 0!==c&&"string"==typeof c&&(r=c)}var f=function e(r,s,c,f,d){for(var p,h,m,v,x,k=0,C=0,S=0,A=0,E=0,N=0,_=m=p=0,z=0,M=0,F=0,L=0,D=c.length,G=D-1,B="",H="",q="",U="";z<D;){if(h=c.charCodeAt(z),z===G&&0!==C+A+S+k&&(0!==C&&(h=47===C?10:47),A=S=k=0,D++,G++),0===C+A+S+k){if(z===G&&(0<M&&(B=B.replace(u,"")),0<B.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:B+=c.charAt(z)}h=59}switch(h){case 123:for(p=(B=B.trim()).charCodeAt(0),m=1,L=++z;z<D;){switch(h=c.charCodeAt(z)){case 123:m++;break;case 125:m--;break;case 47:switch(h=c.charCodeAt(z+1)){case 42:case 47:e:{for(_=z+1;_<G;++_)switch(c.charCodeAt(_)){case 47:if(42===h&&42===c.charCodeAt(_-1)&&z+2!==_){z=_+1;break e}break;case 10:if(47===h){z=_+1;break e}}z=_}}break;case 91:h++;case 40:h++;case 34:case 39:for(;z++<G&&c.charCodeAt(z)!==h;);}if(0===m)break;z++}switch(m=c.substring(L,z),0===p&&(p=(B=B.replace(l,"").trim()).charCodeAt(0)),p){case 64:switch(0<M&&(B=B.replace(u,"")),h=B.charCodeAt(1)){case 100:case 109:case 115:case 45:M=s;break;default:M=j}if(L=(m=e(s,M,m,h,d+1)).length,0<P&&(x=o(3,m,M=t(j,B,F),s,I,O,L,h,d,f),B=M.join(""),void 0!==x&&0===(L=(m=x.trim()).length)&&(h=0,m="")),0<L)switch(h){case 115:B=B.replace(w,a);case 100:case 109:case 45:m=B+"{"+m+"}";break;case 107:m=(B=B.replace(g,"$1 $2"))+"{"+m+"}",m=1===R||2===R&&i("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=B+m,112===f&&(H+=m,m="")}else m="";break;default:m=e(s,t(s,B,F),m,f,d+1)}q+=m,m=F=M=_=p=0,B="",h=c.charCodeAt(++z);break;case 125:case 59:if(1<(L=(B=(0<M?B.replace(u,""):B).trim()).length))switch(0===_&&(p=B.charCodeAt(0),45===p||96<p&&123>p)&&(L=(B=B.replace(" ",":")).length),0<P&&void 0!==(x=o(1,B,s,r,I,O,H.length,f,d,f))&&0===(L=(B=x.trim()).length)&&(B="\0\0"),p=B.charCodeAt(0),h=B.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){U+=B+c.charAt(z);break}default:58!==B.charCodeAt(L-1)&&(H+=n(B,p,h,B.charCodeAt(2)))}F=M=_=p=0,B="",h=c.charCodeAt(++z)}}switch(h){case 13:case 10:47===C?C=0:0===1+p&&107!==f&&0<B.length&&(M=1,B+="\0"),0<P*$&&o(0,B,s,r,I,O,H.length,f,d,f),O=1,I++;break;case 59:case 125:if(0===C+A+S+k){O++;break}default:switch(O++,v=c.charAt(z),h){case 9:case 32:if(0===A+k+C)switch(E){case 44:case 58:case 9:case 32:v="";break;default:32!==h&&(v=" ")}break;case 0:v="\\0";break;case 12:v="\\f";break;case 11:v="\\v";break;case 38:0===A+C+k&&(M=F=1,v="\f"+v);break;case 108:if(0===A+C+k+T&&0<_)switch(z-_){case 2:112===E&&58===c.charCodeAt(z-3)&&(T=E);case 8:111===N&&(T=N)}break;case 58:0===A+C+k&&(_=z);break;case 44:0===C+S+A+k&&(M=1,v+="\r");break;case 34:case 39:0===C&&(A=A===h?0:0===A?h:A);break;case 91:0===A+C+S&&k++;break;case 93:0===A+C+S&&k--;break;case 41:0===A+C+k&&S--;break;case 40:if(0===A+C+k){if(0===p)switch(2*E+3*N){case 533:break;default:p=1}S++}break;case 64:0===C+S+A+k+_+m&&(m=1);break;case 42:case 47:if(!(0<A+k+S))switch(C){case 0:switch(2*h+3*c.charCodeAt(z+1)){case 235:C=47;break;case 220:L=z,C=42}break;case 42:47===h&&42===E&&L+2!==z&&(33===c.charCodeAt(L+2)&&(H+=c.substring(L,z+1)),v="",C=0)}}0===C&&(B+=v)}N=E,E=h,z++}if(0<(L=H.length)){if(M=s,0<P&&(void 0!==(x=o(2,H,M,r,I,O,L,f,d,f))&&0===(H=x).length))return U+H+q;if(H=M.join(",")+"{"+H+"}",0!=R*T){switch(2!==R||i(H,2)||(T=0),T){case 111:H=H.replace(b,":-moz-$1")+H;break;case 112:H=H.replace(y,"::-webkit-input-$1")+H.replace(y,"::-moz-$1")+H.replace(y,":-ms-input-$1")+H}T=0}}return U+H+q}(j,s,r,0,0);return 0<P&&(void 0!==(c=o(-2,f,s,s,I,O,f.length,0,0,0))&&(f=c)),"",T=0,O=I=1,f}var l=/^\0+/g,u=/[\0\r\f]/g,f=/: */g,d=/zoo|gra/,p=/([,: ])(transform)/g,h=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,b=/:(read-only)/g,v=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,x=/([\s\S]*?);/g,k=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,S=/stretch|:\s*\w+\-(?:conte|avail)/,A=/([^-])(image-set\()/,O=1,I=1,T=0,R=1,j=[],E=[],P=0,N=null,$=0;return c.use=function e(t){switch(t){case void 0:case null:P=E.length=0;break;default:if("function"==typeof t)E[P++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else $=0|!!t}return e},c.set=s,void 0!==e&&s(e),c}},"2mql":function(e,t,r){"use strict";var n=r("TOwV"),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?o:s[e.$$typeof]||i}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=o;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var i=p(r);i&&i!==h&&e(t,i,n)}var o=u(r);f&&(o=o.concat(f(r)));for(var s=c(t),m=c(r),g=0;g<o.length;++g){var y=o[g];if(!(a[y]||n&&n[y]||m&&m[y]||s&&s[y])){var b=d(r,y);try{l(t,y,b)}catch(v){}}}}return t}},"8oxB":function(e,t){var r,n,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c,l=[],u=!1,f=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&p())}function p(){if(!u){var e=s(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||u||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9uj6":function(e,t,r){"use strict";var n=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,i=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return n.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));t.a=i},FtRN:function(e,t,r){e.exports=r.p+"static/preview2-e8c72d5ecfaa8588b66546786e6c0589.png"},Gytx:function(e,t){e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],f=t[l];if(!1===(i=r?r.call(n,u,f,l):void 0)||void 0===i&&u!==f)return!1}return!0}},ME5O:function(e,t,r){"use strict";t.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},PWOi:function(e,t,r){e.exports=r.p+"static/appstore-7abe3a7b8042982f7b7c50f2cda6572d.svg"},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"GlobalStyle",(function(){return m})),r.d(t,"default",(function(){return R}));var n=r("q1tI"),i=r.n(n),a=r("vOnD"),o=r("zwU1"),s=r.n(o),c=r("en6V"),l=r.n(c),u=r("FtRN"),f=r.n(u),d=r("PWOi"),p=r.n(d);function h(){var e,t,r=(e=["\n  /* @import url('https://fonts.googleapis.com/css?family=Kodchasan:400,700'); */\n  /* <link href='https://fonts.googleapis.com/css?family=Kodchasan:400,700' rel='stylesheet' type='text/css'> */\n  body {\n    padding: 0;\n    margin: 0;\n    font-family: Kodchasan;\n  }\n  a {\n    text-decoration: none;\n  }\n  ul {\n    margin: 0 auto;\n    list-style-type: none;\n  }\n"],t||(t=e.slice(0)),e.raw=t,e);return h=function(){return r},r}var m=Object(a.a)(h()),g=a.b.div.withConfig({displayName:"pages__NavigationBar",componentId:"ifild7-0"})(["height:60px;background:white;padding-left:20px;display:flex;justify-content:center;align-items:center;"]),y=a.b.div.withConfig({displayName:"pages__NavigationContainer",componentId:"ifild7-1"})(["width:100%;max-width:1500px;"]),b=a.b.div.withConfig({displayName:"pages__Section",componentId:"ifild7-2"})(["@media only screen and (min-height:1045px) and (min-width:992px){height:calc(100vh - 60px)}background-color:#ff5858;display:flex;justify-content:center;align-items:center;"]),v=a.b.div.withConfig({displayName:"pages__Container",componentId:"ifild7-3"})(["width:100%;max-width:1200px;"]),w=Object(a.b)(v).withConfig({displayName:"pages__Section1",componentId:"ifild7-4"})(["padding:60px;display:flex;justify-content:space-evenly;align-items:center;flex-direction:row;@media only screen and (max-width:992px){-webkit-box-pack:center;justify-content:center;flex-direction:column;}"]),x=a.b.div.withConfig({displayName:"pages__Logo",componentId:"ifild7-5"})(["background:url(",") no-repeat;background-size:133px 40px;width:133px;height:40px;"],s.a),k=a.b.div.withConfig({displayName:"pages__Intro",componentId:"ifild7-6"})(["width:100%;max-width:550px;@media only screen and (max-width:992px){text-align:center;margin:0px 0px 60px;}"]),C=a.b.div.withConfig({displayName:"pages__Headline",componentId:"ifild7-7"})(["color:#ffffff;font-size:32px;line-height:1.2;margin-bottom:30px;"]),S=a.b.div.withConfig({displayName:"pages__Description",componentId:"ifild7-8"})(["color:#ffffff;font-size:18px;letter-spacing:0px;line-height:1.4;margin-bottom:39px;"]),A=a.b.div.withConfig({displayName:"pages__Preview",componentId:"ifild7-9"})(["width:100%;max-width:466px;max-height:530px;display:flex;@media only screen and (max-width:550px){transform:scale(0.8);justify-content:center;align-items:center;}"]),O=a.b.div.withConfig({displayName:"pages__PreviewLayout",componentId:"ifild7-10"})(["width:236px;height:510px;overflow:visible;background-color:#ffffff;border-radius:38px;padding:10px;display:flex;align-items:center;justify-content:space-between;z-index:1;"]),I=a.b.div.withConfig({displayName:"pages__PreviewImage1",componentId:"ifild7-11"})(["background:url(",") no-repeat;background-size:cover;background-repeat:no-repeat;width:236px;height:511px;overflow:visible;border-radius:24px;"],l.a),T=a.b.div.withConfig({displayName:"pages__PreviewImage2",componentId:"ifild7-12"})(["width:210px;height:454px;overflow:visible;border-radius:24px;background-image:url(",");background-size:cover;background-repeat:no-repeat;background-position:center;image-rendering:auto;transform:translateX(-40px);margin-top:38px;@media only screen and (max-width:550px){display:none;}"],f.a);function R(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Kodchasan:400,700",rel:"stylesheet",type:"text/css"}),i.a.createElement(m,null),i.a.createElement(g,null,i.a.createElement(y,null,i.a.createElement(x,null))),i.a.createElement(b,null,i.a.createElement(w,null,i.a.createElement(k,null,i.a.createElement(C,null,"Review what you love,",i.a.createElement("br",null),"to never forget"),i.a.createElement(S,null,"Snap. Slide. Remember. New and easiest way to record your reviews. Get it for free on the App Store and easily manage your information from all edges of the world."),i.a.createElement("a",{href:"https://apps.apple.com/us/app/ainbr-snap-your-emotion/id1516194643"},i.a.createElement("img",{src:p.a}))),i.a.createElement(A,null,i.a.createElement(O,null,i.a.createElement(I,null)),i.a.createElement(T,null)))))}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},en6V:function(e,t,r){e.exports=r.p+"static/preview1-cbca4a274b441045b779b2ba6e57cee8.png"},qT12:function(e,t,r){"use strict";var n="function"==typeof Symbol&&Symbol.for,i=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,g=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case f:case d:case o:case c:case s:case h:return e;default:switch(e=e&&e.$$typeof){case u:case p:case y:case g:case l:return e;default:return t}}case a:return t}}}function C(e){return k(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=l,t.Element=i,t.ForwardRef=p,t.Fragment=o,t.Lazy=y,t.Memo=g,t.Portal=a,t.Profiler=c,t.StrictMode=s,t.Suspense=h,t.isAsyncMode=function(e){return C(e)||k(e)===f},t.isConcurrentMode=C,t.isContextConsumer=function(e){return k(e)===u},t.isContextProvider=function(e){return k(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},t.isForwardRef=function(e){return k(e)===p},t.isFragment=function(e){return k(e)===o},t.isLazy=function(e){return k(e)===y},t.isMemo=function(e){return k(e)===g},t.isPortal=function(e){return k(e)===a},t.isProfiler=function(e){return k(e)===c},t.isStrictMode=function(e){return k(e)===s},t.isSuspense=function(e){return k(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===c||e===s||e===h||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===g||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p||e.$$typeof===v||e.$$typeof===w||e.$$typeof===x||e.$$typeof===b)},t.typeOf=k},vOnD:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return Te}));var n=r("TOwV"),i=r("q1tI"),a=r.n(i),o=(r("Gytx"),r("0x0X")),s=r("ME5O"),c=r("9uj6"),l=r("2mql"),u=r.n(l);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=function(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r},p=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!Object(n.typeOf)(e)},h=Object.freeze([]),m=Object.freeze({});function g(e){return"function"==typeof e}function y(e){return e.displayName||e.name||"Component"}function b(e){return e&&"string"==typeof e.styledComponentId}var v=void 0!==e&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",w="undefined"!=typeof window&&"HTMLElement"in window,x="boolean"==typeof SC_DISABLE_SPEEDY&&SC_DISABLE_SPEEDY||void 0!==e&&({}.REACT_APP_SC_DISABLE_SPEEDY||{}.SC_DISABLE_SPEEDY)||!1,k={},C=function(){return r.nc};function S(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+e+" for more information."+(r.length>0?" Additional arguments: "+r.join(", "):""))}var A=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(v))return n}}(r),a=void 0!==i?i.nextSibling:null;n.setAttribute(v,"active"),n.setAttribute("data-styled-version","5.1.1");var o=C();return o&&n.setAttribute("nonce",o),r.insertBefore(n,a),n},O=function(){function e(e){var t=this.element=A(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}S(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(r){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),I=function(){function e(e){var t=this.element=A(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),T=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),R=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)(i<<=1)<0&&S(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=n;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,a=n;a<i;a++)t+=this.tag.getRule(a)+"/*!sc*/\n";return t},e}(),j=new Map,E=new Map,P=1,N=function(e){if(j.has(e))return j.get(e);var t=P++;return j.set(e,t),E.set(t,e),t},$=function(e){return E.get(e)},_=function(e,t){t>=P&&(P=t+1),j.set(e,t),E.set(t,e)},z="style["+v+'][data-styled-version="5.1.1"]',M=new RegExp("^"+v+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,r){for(var n,i=r.split(","),a=0,o=i.length;a<o;a++)(n=i[a])&&e.registerName(t,n)},L=function(e,t){for(var r=t.innerHTML.split("/*!sc*/\n"),n=[],i=0,a=r.length;i<a;i++){var o=r[i].trim();if(o){var s=o.match(M);if(s){var c=0|parseInt(s[1],10),l=s[2];0!==c&&(_(l,c),F(e,l,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(o)}}},D=w,G={isServer:!w,useCSSOMInjection:!x},B=function(){function e(e,t,r){void 0===e&&(e=G),void 0===t&&(t={}),this.options=f({},G,{},e),this.gs=t,this.names=new Map(r),!this.options.isServer&&w&&D&&(D=!1,function(e){for(var t=document.querySelectorAll(z),r=0,n=t.length;r<n;r++){var i=t[r];i&&"active"!==i.getAttribute(v)&&(L(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return N(e)};var t=e.prototype;return t.reconstructWithOptions=function(t){return new e(f({},this.options,{},t),this.gs,this.names)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(t=this.options,r=t.isServer,n=t.useCSSOMInjection,i=t.target,e=r?new T(i):n?new O(i):new I(i),new R(e)));var e,t,r,n,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(N(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(N(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(N(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=0;i<r;i++){var a=$(i);if(void 0!==a){var o=e.names.get(a),s=t.getGroup(i);if(void 0!==o&&0!==s.length){var c=v+".g"+i+'[id="'+a+'"]',l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+=e+",")})),n+=""+s+c+'{content:"'+l+'"}/*!sc*/\n'}}}return n}(this)},e}(),H=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},q=function(e){return H(5381,e)};var U=/^\s*\/\/.*$/gm;function V(e){var t,r,n,i=void 0===e?m:e,a=i.options,s=void 0===a?m:a,c=i.plugins,l=void 0===c?h:c,u=new o.a(s),f=[],d=function(e){function t(t){if(t)try{e(t+"}")}catch(r){}}return function(r,n,i,a,o,s,c,l,u,f){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===l)return n+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(i[0]+n),"";default:return n+(0===f?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}((function(e){f.push(e)})),p=function(e,n,i){return n>0&&-1!==i.slice(0,n).indexOf(r)&&i.slice(n-r.length,n)!==r?"."+t:e};function g(e,i,a,o){void 0===o&&(o="&");var s=e.replace(U,""),c=i&&a?a+" "+i+" { "+s+" }":s;return t=o,r=i,n=new RegExp("\\"+r+"\\b","g"),u(a||!i?"":i,c)}return u.use([].concat(l,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(r)>0&&(i[0]=i[0].replace(n,p))},d,function(e){if(-2===e){var t=f;return f=[],t}}])),g.hash=l.length?l.reduce((function(e,t){return t.name||S(15),H(e,t.name)}),5381).toString():"",g}var W=a.a.createContext(),X=(W.Consumer,a.a.createContext()),Y=(X.Consumer,new B),K=V();function J(){return Object(i.useContext)(W)||Y}function Z(){return Object(i.useContext)(X)||K}var Q=function(){function e(e,t){var r=this;this.inject=function(e){e.hasNameForId(r.id,r.name)||e.insertRules(r.id,r.name,K.apply(void 0,r.stringifyArgs))},this.toString=function(){return S(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.stringifyArgs=t}return e.prototype.getName=function(){return this.name},e}(),ee=/([A-Z])/g,te=/^ms-/;function re(e){return e.replace(ee,"-$1").toLowerCase().replace(te,"-ms-")}var ne=function(e){return null==e||!1===e||""===e},ie=function e(t,r){var n=[];return Object.keys(t).forEach((function(r){if(!ne(t[r])){if(p(t[r]))return n.push.apply(n,e(t[r],r)),n;if(g(t[r]))return n.push(re(r)+":",t[r],";"),n;n.push(re(r)+": "+(i=r,(null==(a=t[r])||"boolean"==typeof a||""===a?"":"number"!=typeof a||0===a||i in s.a?String(a).trim():a+"px")+";"))}var i,a;return n})),r?[r+" {"].concat(n,["}"]):n};function ae(e,t,r){if(Array.isArray(e)){for(var n,i=[],a=0,o=e.length;a<o;a+=1)""!==(n=ae(e[a],t,r))&&(Array.isArray(n)?i.push.apply(i,n):i.push(n));return i}return ne(e)?"":b(e)?"."+e.styledComponentId:g(e)?"function"!=typeof(s=e)||s.prototype&&s.prototype.isReactComponent||!t?e:ae(e(t),t,r):e instanceof Q?r?(e.inject(r),e.getName()):e:p(e)?ie(e):e.toString();var s}function oe(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return g(e)||p(e)?ae(d(h,[e].concat(r))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:ae(d(e,r))}var se=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},ce=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function le(e,t,r){var n=e[r];se(t)&&se(n)?ue(n,t):e[r]=t}function ue(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var i=0,a=r;i<a.length;i++){var o=a[i];if(se(o))for(var s in o)ce(s)&&le(e,o[s],s)}return e}var fe=/(a)(d)/gi,de=function(e){return String.fromCharCode(e+(e>25?39:97))};function pe(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=de(t%52)+r;return(de(t%52)+r).replace(fe,"$1-$2")}function he(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(g(r)&&!b(r))return!1}return!0}var me=function(){function e(e,t){this.rules=e,this.staticRulesId="",this.isStatic=he(e),this.componentId=t,this.baseHash=q(t),B.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId;if(this.isStatic&&!r.hash){if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))return this.staticRulesId;var i=ae(this.rules,e,t).join(""),a=pe(H(this.baseHash,i.length)>>>0);if(!t.hasNameForId(n,a)){var o=r(i,"."+a,void 0,n);t.insertRules(n,a,o)}return this.staticRulesId=a,a}for(var s=this.rules.length,c=H(this.baseHash,r.hash),l="",u=0;u<s;u++){var f=this.rules[u];if("string"==typeof f)l+=f;else{var d=ae(f,e,t),p=Array.isArray(d)?d.join(""):d;c=H(c,p+u),l+=p}}var h=pe(c>>>0);if(!t.hasNameForId(n,h)){var m=r(l,"."+h,void 0,n);t.insertRules(n,h,m)}return h},e}(),ge=(new Set,function(e,t,r){return void 0===r&&(r=m),e.theme!==r.theme&&e.theme||t||r.theme}),ye=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,be=/(^-|-$)/g;function ve(e){return e.replace(ye,"-").replace(be,"")}function we(e){return"string"==typeof e&&!0}var xe=function(e){return pe(q(e)>>>0)};var ke=a.a.createContext();ke.Consumer;var Ce={};function Se(e,t,r){var n=e.attrs,a=e.componentStyle,o=e.defaultProps,s=e.foldedComponentIds,l=e.shouldForwardProp,u=e.styledComponentId,d=e.target;Object(i.useDebugValue)(u);var p=function(e,t,r){void 0===e&&(e=m);var n=f({},t,{theme:e}),i={};return r.forEach((function(e){var t,r,a,o=e;for(t in g(o)&&(o=o(n)),o)n[t]=i[t]="className"===t?(r=i[t],a=o[t],r&&a?r+" "+a:r||a):o[t]})),[n,i]}(ge(t,Object(i.useContext)(ke),o)||m,t,n),h=p[0],y=p[1],b=function(e,t,r,n){var a=J(),o=Z(),s=e.isStatic&&!t?e.generateAndInjectStyles(m,a,o):e.generateAndInjectStyles(r,a,o);return Object(i.useDebugValue)(s),s}(a,n.length>0,h),v=r,w=y.$as||t.$as||y.as||t.as||d,x=we(w),k=y!==t?f({},t,{},y):t,C=l||x&&c.a,S={};for(var A in k)"$"!==A[0]&&"as"!==A&&("forwardedAs"===A?S.as=k[A]:C&&!C(A,c.a)||(S[A]=k[A]));return t.style&&y.style!==t.style&&(S.style=f({},t.style,{},y.style)),S.className=Array.prototype.concat(s,u,b!==u?b:null,t.className,y.className).filter(Boolean).join(" "),S.ref=v,Object(i.createElement)(w,S)}function Ae(e,t,r){var n=b(e),i=!we(e),o=t.displayName,s=void 0===o?function(e){return we(e)?"styled."+e:"Styled("+y(e)+")"}(e):o,c=t.componentId,l=void 0===c?function(e,t){var r="string"!=typeof e?"sc":ve(e);Ce[r]=(Ce[r]||0)+1;var n=r+"-"+xe(r+Ce[r]);return t?t+"-"+n:n}(t.displayName,t.parentComponentId):c,d=t.attrs,p=void 0===d?h:d,m=t.displayName&&t.componentId?ve(t.displayName)+"-"+t.componentId:t.componentId||l,g=n&&e.attrs?Array.prototype.concat(e.attrs,p).filter(Boolean):p,v=t.shouldForwardProp;n&&e.shouldForwardProp&&(v=v?function(r,n){return e.shouldForwardProp(r,n)&&t.shouldForwardProp(r,n)}:e.shouldForwardProp);var w,x=new me(n?e.componentStyle.rules.concat(r):r,m),k=function(e,t){return Se(w,e,t)};return k.displayName=s,(w=a.a.forwardRef(k)).attrs=g,w.componentStyle=x,w.displayName=s,w.shouldForwardProp=v,w.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):h,w.styledComponentId=m,w.target=n?e.target:e,w.withComponent=function(e){var n=t.componentId,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(t,["componentId"]),a=n&&n+"-"+(we(e)?e:ve(y(e)));return Ae(e,f({},i,{attrs:g,componentId:a}),r)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=n?ue({},e.defaultProps,t):t}}),w.toString=function(){return"."+w.styledComponentId},i&&u()(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,self:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Oe=function(e){return function e(t,r,i){if(void 0===i&&(i=m),!Object(n.isValidElementType)(r))return S(1,String(r));var a=function(){return t(r,i,oe.apply(void 0,arguments))};return a.withConfig=function(n){return e(t,r,f({},i,{},n))},a.attrs=function(n){return e(t,r,f({},i,{attrs:Array.prototype.concat(i.attrs,n).filter(Boolean)}))},a}(Ae,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Oe[e]=Oe(e)}));var Ie=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=he(e)}var t=e.prototype;return t.createStyles=function(e,t,r,n){var i=n(ae(this.rules,t,r).join(""),""),a=this.componentId+e;r.insertRules(a,a,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){B.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function Te(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=oe.apply(void 0,[e].concat(r)),s="sc-global-"+xe(JSON.stringify(o)),c=new Ie(o,s);function l(e){var t=J(),r=Z(),n=Object(i.useContext)(ke),a=Object(i.useRef)(null);null===a.current&&(a.current=t.allocateGSInstance(s));var o=a.current;if(c.isStatic)c.renderStyles(o,k,t,r);else{var u=f({},e,{theme:ge(e,n,l.defaultProps)});c.renderStyles(o,u,t,r)}return Object(i.useEffect)((function(){return function(){return c.removeStyles(o,t)}}),h),null}return a.a.memo(l)}t.b=Oe}).call(this,r("8oxB"))},zwU1:function(e,t,r){e.exports=r.p+"static/logo-28450618d6b1d7f57e9ab4e269dffb0d.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-27b411dc913ac8aac222.js.map