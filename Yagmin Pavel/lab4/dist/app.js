!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1),t(2)},function(e,n,t){},function(e,n){var t={Business:"category=business&",Entertainment:"category=entertainment&",Health:"category=health&",Science:"category=science&",Sports:"category=sports&"},r=document.getElementsByClassName("source-item");function o(){document.getElementById("circularG").style.display="block"}function c(){document.getElementById("circularG").style.display="none"}function a(){document.getElementById("load-more").style.display="none"}function i(){document.getElementById("load-more").style.display="inline"}Array.from(r).forEach(function(e){e.addEventListener("click",function(){var n="https://newsapi.org/v2/top-headlines?country=ru&"+t[e.innerText]+"apiKey=5bf446ed86c34d97908fedb4b1426d48",r=new Request(n);o(),fetch(r).then(function(e){return e.json()}).then(function(e){return e.articles}).then(function(e){var n=document.getElementById("content");n.innerHTML="",c();for(var t=0;t<e.length;t++)n.innerHTML+='<div class="card">\n                        <div class="card__meta">\n                            <div class="card__meta-photo" style="background-image: url('.concat(e[t].urlToImage,');"></div>\n                            <div class="card__meta-info">\n                                <span>').concat(e[t].publishedAt.toString(),'</span>    \n                            </div>\n                        </div>\n                        <div class="card__decription">\n                            <h2 class="card__description-title">').concat(e[t].title,'</h2>\n                            <h3 class="card__description-source">').concat(e[t].source.name,'</h3>\n                            <p class="card__description-content">').concat(e[t].description,'</p>\n                            <p class="card__read-more">\n                                <a href="').concat(e[t].url,'">Read more..</a>\n                            </p>\n                        </div>\n                    </div>');for(var r=document.getElementsByClassName("card"),o=5;o<r.length;o++)r[o].style.display="none";r.length>5?i():a()})})}),document.getElementById("load-more").addEventListener("click",function(){o(),a(),setTimeout(function(){var e=Array.from(document.getElementsByClassName("card")),n=0;if(e.forEach(function(e){"none"!=e.style.display&&n++}),c(),i(),n+5>e.length){for(var t=n;t<e.length;t++)e[t].style.display="flex";n=e.length}else{for(var r=n;r<n+5;r++)e[r].style.display="flex";n+=5}n==e.length&&a()},500)})}]);