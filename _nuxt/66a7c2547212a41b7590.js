(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1201:function(t,e,n){t.exports=n.p+"img/c4642c3.png"},1335:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-hidden-touch"},[e("div",{staticClass:"wrap-image wrap-image--token"},[e("img",{staticClass:"wrap-image__images",attrs:{src:n(1201),alt:""}})])])}],o=(n(42),n(4)),l=n(298),d=n(14),c=n(109),h=(n(193),n(72),n(35),n(273),n(274),{name:"MSliderButton",props:{value:{type:Number,default:0}},data:function(){return{hovering:!1,dragging:!1,isClick:!1,startX:0,currentX:0,startPosition:0,newPosition:null,oldValue:this.value,showPopper:!1}},computed:{disabled:function(){return this.$parent.sliderDisabled},max:function(){return this.$parent.max},min:function(){return this.$parent.min},step:function(){return this.$parent.step},showTooltip:function(){return this.$parent.showTooltip&&this.showPopper},precision:function(){return this.$parent.precision},currentPosition:function(){return"".concat((this.value-this.min)/(this.max-this.min)*100,"%")},formatValue:function(){return String(this.value)},wrapperStyle:function(){return{left:this.currentPosition}}},watch:{dragging:function(t){this.$parent.dragging=t}},methods:{displayTooltip:function(){this.showPopper=!0},hideTooltip:function(){this.showPopper=!1},handleMouseEnter:function(){this.hovering=!0,this.displayTooltip()},handleMouseLeave:function(){this.hovering=!1,this.hideTooltip()},onButtonDown:function(t){this.disabled||(t.preventDefault(),this.onDragStart(t),window.addEventListener("mousemove",this.onDragging),window.addEventListener("touchmove",this.onDragging),window.addEventListener("mouseup",this.onDragEnd),window.addEventListener("touchend",this.onDragEnd),window.addEventListener("contextmenu",this.onDragEnd))},onLeftKeyDown:function(){this.disabled||(this.newPosition=parseFloat(this.currentPosition)-this.step/(this.max-this.min)*100,this.setPosition(this.newPosition),this.$parent.emitChange())},onRightKeyDown:function(){this.disabled||(this.newPosition=parseFloat(this.currentPosition)+this.step/(this.max-this.min)*100,this.setPosition(this.newPosition),this.$parent.emitChange())},onDragStart:function(t){this.dragging=!0,this.isClick=!0,"touchstart"===t.type&&(t.clientX=t.touches[0].clientX),this.startX=t.clientX,this.startPosition=parseFloat(this.currentPosition),this.newPosition=this.startPosition},onDragging:function(t){if(this.dragging){this.isClick=!1,this.displayTooltip(),this.$parent.resetSize();var e;"touchmove"===t.type&&(t.clientX=t.touches[0].clientX),this.currentX=t.clientX,e=(this.currentX-this.startX)/this.$parent.sliderSize*100,this.newPosition=this.startPosition+e,this.setPosition(this.newPosition)}},onDragEnd:function(){var t=this;this.dragging&&(setTimeout(function(){t.dragging=!1,t.hideTooltip(),t.isClick||(t.setPosition(t.newPosition),t.$parent.emitChange())},0),window.removeEventListener("mousemove",this.onDragging),window.removeEventListener("touchmove",this.onDragging),window.removeEventListener("mouseup",this.onDragEnd),window.removeEventListener("touchend",this.onDragEnd),window.removeEventListener("contextmenu",this.onDragEnd))},setPosition:function(t){if(null!==t&&!isNaN(t)){t<0?t=0:t>100&&(t=100);var e=100/((this.max-this.min)/this.step),n=Math.round(t/e)*e*(this.max-this.min)*.01+this.min;n=parseFloat(n.toFixed(this.precision)),this.$emit("input",n),this.dragging||this.value===this.oldValue||(this.oldValue=this.value)}}}}),m=n(34),v={name:"MSlider",components:{SliderButton:Object(m.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"button",staticClass:"m-slider__button-wrapper",class:{"is-hovered":t.hovering,"is-dragging":t.dragging},style:t.wrapperStyle,attrs:{tabindex:"0"},on:{mouseenter:t.handleMouseEnter,mouseleave:t.handleMouseLeave,mousedown:t.onButtonDown,touchstart:t.onButtonDown,focus:t.handleMouseEnter,blur:t.handleMouseLeave,keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?null:"button"in e&&0!==e.button?null:t.onLeftKeyDown(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"right",39,e.key,["Right","ArrowRight"])?null:"button"in e&&2!==e.button?null:t.onRightKeyDown(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:(e.preventDefault(),t.onLeftKeyDown(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:(e.preventDefault(),t.onRightKeyDown(e))}]}},[n("b-tooltip",{class:{"is-hovered":t.hovering,"is-dragging":t.dragging},attrs:{position:"is-top",label:t.formatValue,active:t.showTooltip,always:""}},[n("span",{staticClass:"m-slider__button"})])],1)},[],!1,null,null,null).exports,SliderMarker:{name:"MMarker",props:{mark:{type:[String,Object]}},render:function(){var t=arguments[0],label="string"==typeof this.mark?this.mark:this.mark.label;return t("div",{class:"m-slider__marks-text",style:this.mark.style||{}},[label])}}},props:{min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},value:{type:Number,default:0},showTooltip:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},marks:{type:Object,default:function(){return{}}}},data:function(){return{sliderValue:null,oldValue:null,dragging:!1,sliderSize:1}},computed:{markList:function(){var t=this;return Object.keys(this.marks).map(parseFloat).sort(function(a,b){return a-b}).filter(function(e){return e<=t.max&&e>=t.min}).map(function(e){return{point:e,position:100*(e-t.min)/(t.max-t.min),mark:t.marks[e]}})},barSize:function(){return"".concat(100*(this.sliderValue-this.min)/(this.max-this.min),"%")},precision:function(){var t=[this.min,this.max,this.step].map(function(t){var e=(""+t).split(".")[1];return e?e.length:0});return Math.max.apply(null,t)},barStyle:function(){return{width:this.barSize,left:"0%"}},sliderDisabled:function(){return this.disabled}},watch:{value:function(t,e){this.dragging||Array.isArray(t)&&Array.isArray(e)&&t.every(function(t,n){return t===e[n]})||this.setValues()},dragging:function(t){t||this.setValues()},sliderValue:function(t){this.$emit("input",t)},min:function(){this.setValues()},max:function(){this.setValues()}},mounted:function(){"number"!=typeof this.value||isNaN(this.value)?this.sliderValue=this.min:this.sliderValue=Math.min(this.max,Math.max(this.min,this.value)),this.oldValue=this.sliderValue,this.$el.setAttribute("aria-valuetext",this.sliderValue),this.resetSize(),window.addEventListener("resize",this.resetSize)},beforeDestroy:function(){window.removeEventListener("resize",this.resetSize)},methods:{valueChanged:function(){return this.value!==this.oldValue},setValues:function(){if(this.min>this.max)console.error("[Error][Slider]min should not be greater than max.");else{var t=this.value;"number"!=typeof t||isNaN(t)||(t<this.min?this.$emit("input",this.min):t>this.max?this.$emit("input",this.max):(this.sliderValue=t,this.valueChanged()&&(this.oldValue=t)))}},setPosition:function(t){this.$refs.button.setPosition(t)},onSliderClick:function(t){if(!this.sliderDisabled&&!this.dragging){this.resetSize();var e=this.$refs.slider.getBoundingClientRect().left;this.setPosition((t.clientX-e)/this.sliderSize*100),this.emitChange()}},resetSize:function(){this.$refs.slider&&(this.sliderSize=this.$refs.slider.clientWidth)},emitChange:function(){var t=this;this.$nextTick(function(){t.$emit("change",t.value)})},getStopStyle:function(t){return{left:t+"%"}}}},f={components:{"m-slider":Object(m.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-slider",attrs:{role:"slider","aria-valuemin":t.min,"aria-valuemax":t.max,"aria-disabled":t.sliderDisabled}},[n("div",{ref:"slider",staticClass:"m-slider__runway",class:{"is-disabled":t.sliderDisabled},on:{click:t.onSliderClick}},[n("div",{staticClass:"m-slider__bar",style:t.barStyle}),t._v(" "),n("slider-button",{ref:"button",model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}}),t._v(" "),t.markList.length>0?[n("div",t._l(t.markList,function(e,r){return n("div",{key:r,staticClass:"m-slider__stop m-slider__marks-stop",style:t.getStopStyle(e.position)})}),0),t._v(" "),n("div",{staticClass:"m-slider__marks"},t._l(t.markList,function(e,r){return n("slider-marker",{key:r,style:t.getStopStyle(e.position),attrs:{mark:e.mark}})}),1)]:t._e()],2)])},[],!1,null,null,null).exports},data:function(){return{sendStrategy:"metamask",gasPriceStep:.1}},computed:Object(d.a)({},Object(c.c)("distribution",["approximateTxCost"]),Object(c.c)("token",["toDecimals","getTokenSymbol"]),Object(c.c)("metamask",["networkConfig"]),Object(c.c)("txHashKeeper",["txExplorerUrl","txHashToRender","txStatusClass"]),Object(c.c)("txStorage",["txsToRender","accountSender","allTxsMined","allTxsHaveSuccess"]),Object(c.d)("distribution",["list","totalTokens","txs","strategy","ipfsHash","loading","isAirdropCreated"]),Object(c.d)("token",["tokenBalance"]),Object(c.d)("metamask",["ethBalance","gasPrice","ethAccount"]),Object(c.d)("txHashKeeper",["topUpTx","leftOversTx","createAirdropTx"]),{gasPriceSlider:{set:function(t){this.$store.commit("metamask/CUSTOM_GAS_PRICE",t)},get:function(){return this.$store.state.metamask.gasPrice.custom}},isGotError:function(){return 0===this.txs.length&&"push"===this.strategy},manyTransactions:function(){return!!this.$route.query.debug||this.txs.length>=4},actionButtonText:function(){if("push"===this.strategy){var t=this.accountSender.signature?"Proceed with self generated key":"Sign Key";return"metamask"===this.sendStrategy?"Proceed with Metamask":t}return"Proceed"},infoText:function(){return"metamask"===this.sendStrategy?"We highly recommend using self-generated key option, since Metamask can be slow and does not always function properly.":"This is the fastest recommended way to use multisender. <br /> <br />\n          1. It will generate a burner key on your device <br />\n          2. After the burner key receives the funds, it will automatically post all txs to the ".concat(this.networkConfig.networkName," blockchain <br />\n          3. Once the multisend is complete, the burner key will send the remaining ").concat(this.networkConfig.currencyName," balance to your address")},url:function(){return"".concat(window.location.origin,"/merkle?ipfs=").concat(this.ipfsHash)},statusText:function(){return this.allTxsHaveSuccess?"Congratulations! You have succesfully finished your multisend.":"Some of your transactions failed. Please, contact support."},statusClass:function(){return this.allTxsHaveSuccess?"is-success":"is-danger"},gasSliderMarks:function(){var t;return t={},Object(l.a)(t,this.gasPrice.low,"Slow"),Object(l.a)(t,this.gasPrice.fast,"Fast"),t}}),mounted:function(){this.$nuxt.$loading.finish(),this.sendStrategy=this.manyTransactions?"selfGenerated":"metamask",this.gasPriceSlider=this.gasPrice.fast},beforeCreate:function(){0===this.$store.state.distribution.list.length&&this.$store.dispatch("router/goToIndex")},methods:{authorizeButtonAction:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(window.onbeforeunload=function(){return"Prevent reload"},"push"!==this.strategy){t.next=15;break}if("metamask"!==this.sendStrategy){t.next=5;break}return this.$store.dispatch("distribution/multisend"),t.abrupt("return");case 5:if(this.accountSender.signature){t.next=9;break}this.$store.dispatch("metamask/generateSignatureForSender"),t.next=13;break;case 9:return t.next=11,this.$store.dispatch("metamask/topUpAuthorizedSignerBalance");case 11:t.sent&&this.$store.dispatch("distribution/multisendWithSignature",{});case 13:t.next=16;break;case 15:this.$store.dispatch("distribution/createMerkleProofAirdrop");case 16:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},_=Object(m.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-half-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__item"},[n("div",{staticClass:"token-info__name"},[t._v("\n          Total number of addresses\n        ")]),t._v(" "),n("div",{staticClass:"token-info__value"},[t._v("\n          "+t._s(t.list.length)+"\n        ")])]),t._v(" "),n("div",{staticClass:"token-info__item"},[n("div",{staticClass:"token-info__name"},[t._v("\n          Total number of tokens to be sent\n        ")]),t._v(" "),n("div",{staticClass:"token-info__value"},[t._v("\n          "+t._s(t.toDecimals(t.totalTokens,null,10))+" "+t._s(t.getTokenSymbol)+"\n        ")])]),t._v(" "),n("div",{staticClass:"token-info__item"},[n("div",{staticClass:"token-info__name"},[t._v("\n          Your token Balance\n        ")]),t._v(" "),n("div",{staticClass:"token-info__value"},[t._v(t._s(t.toDecimals(t.tokenBalance))+" "+t._s(t.getTokenSymbol))])]),t._v(" "),"push"===t.strategy?n("div",{staticClass:"token-info__item"},[n("div",{staticClass:"token-info__name"},[t._v("\n          Total number of transactions needed\n        ")]),t._v(" "),n("div",{staticClass:"token-info__value",attrs:{id:"totalNumberOfTx"}},[t._v("\n          "+t._s(t.txs.length)+"\n        ")])]):t._e(),t._v(" "),n("div",{staticClass:"token-info__item"},[n("div",{staticClass:"token-info__name"},[t._v("Your "+t._s(t.networkConfig.currencyName)+" Balance")]),t._v(" "),n("div",{staticClass:"token-info__value"},[t._v("\n          "+t._s(t.toDecimals(t.ethBalance,18))+" "+t._s(t.networkConfig.currencyName)+"\n        ")])]),t._v(" "),n("div",{staticClass:"token-info__item"},[n("div",{staticClass:"token-info__name"},[t._v("\n          Approximate cost of operation\n        ")]),t._v(" "),n("div",{staticClass:"token-info__value"},[t._v("\n          "+t._s(t.toDecimals(t.approximateTxCost,18))+" "+t._s(t.networkConfig.currencyName)+"\n        ")])]),t._v(" "),n("div",{staticClass:"token-info__item"},[n("div",{staticClass:"token-info__name"},[t._v("\n          Selected network speed (Gas Price)\n        ")]),t._v(" "),n("div",{staticClass:"token-info__value"},[t._v(t._s(t.gasPriceSlider)+" Gwei")])]),t._v(" "),n("div",{staticClass:"token-info__item"},[n("div",{staticClass:"token-info__slider"},[n("m-slider",{attrs:{min:t.gasPrice.low,max:t.gasPrice.fast+1,marks:t.gasSliderMarks,step:t.gasPriceStep},model:{value:t.gasPriceSlider,callback:function(e){t.gasPriceSlider=e},expression:"gasPriceSlider"}})],1)])]),t._v(" "),t.manyTransactions&&"push"===t.strategy?n("div",{staticClass:"token-field"},[n("div",{staticClass:"label"},[t._v("Multisender options for sending transactions")]),t._v(" "),n("div",{staticClass:"field"},[n("b-radio",{attrs:{size:"is-medium","native-value":"selfGenerated"},model:{value:t.sendStrategy,callback:function(e){t.sendStrategy=e},expression:"sendStrategy"}},[t._v("\n          Use self-generated key(recommended)\n        ")]),t._v(" "),"selfGenerated"===t.sendStrategy?n("div",[t._v("\n          Your burner key: "+t._s(t.accountSender.address)+"\n        ")]):t._e()],1),t._v(" "),n("div",{staticClass:"field"},[n("b-radio",{attrs:{size:"is-medium","native-value":"metamask"},model:{value:t.sendStrategy,callback:function(e){t.sendStrategy=e},expression:"sendStrategy"}},[t._v("\n          Use Metamask(might be slow)\n        ")])],1),t._v(" "),n("p",{staticClass:"subtitle",domProps:{innerHTML:t._s(t.infoText)}})]):t._e(),t._v(" "),t.isGotError?t._e():n("div",{staticClass:"token-field"},[n("b-button",{attrs:{id:"confirm-proceed-button",type:"is-info",loading:t.loading,disabled:t.txsToRender.length>0||t.isAirdropCreated,rounded:""},on:{click:t.authorizeButtonAction}},[t._v("\n        "+t._s(t.actionButtonText)+"\n      ")])],1),t._v(" "),t.ipfsHash?n("div",{attrs:{id:"ipfs-status"}},[n("div",[t._v("Airdrop is uploaded to IPFS")]),t._v(" "),n("br")]):t._e(),t._v(" "),t.topUpTx.txHash?n("div",{staticClass:"token-field"},[n("div",{staticClass:"label"},[t._v("Tx Hash of top-up process")]),t._v(" "),n("div",{staticClass:"txs"},[n("div",{staticClass:"txs__item",class:t.txStatusClass(t.topUpTx.status)},[n("div",{staticClass:"txs__status"}),t._v(" "),n("a",{staticClass:"txs__address",attrs:{href:t.txExplorerUrl("topUpTx"),target:"_blank"}},[t._v("\n            "+t._s(t.txHashToRender("topUpTx"))+"\n          ")])])])]):t._e(),t._v(" "),t.txsToRender.length>0?n("div",{staticClass:"token-field"},[n("div",{staticClass:"label"},[t._v("Multisend transactions")]),t._v(" "),n("ol",{staticClass:"txs"},t._l(t.txsToRender,function(e){var r=e.txHash,o=e.status;return n("li",{key:r,staticClass:"txs__item",class:t.txStatusClass(o)},[n("div",{staticClass:"txs__status"}),t._v(" "),n("a",{staticClass:"txs__address",attrs:{href:t.txExplorerUrl("multisendTxs",r),target:"_blank"}},[t._v("\n            "+t._s(t.txHashToRender("multisendTxs",r))+"\n          ")])])}),0)]):t._e(),t._v(" "),t.createAirdropTx.txHash?n("div",{staticClass:"token-field"},[n("div",{staticClass:"label"},[t._v("Hash of creating airdrop transaction")]),t._v(" "),n("div",{staticClass:"txs"},[n("div",{staticClass:"txs__item",class:t.txStatusClass(t.createAirdropTx.status)},[n("div",{staticClass:"txs__status"}),t._v(" "),n("a",{staticClass:"txs__address",attrs:{href:t.txExplorerUrl("createAirdropTx"),target:"_blank"}},[t._v("\n            "+t._s(t.txHashToRender("createAirdropTx"))+"\n          ")])])])]):t._e(),t._v(" "),n("b-message",{attrs:{type:"is-danger",active:t.isGotError},on:{"update:active":function(e){t.isGotError=e}}},[t._v("\n      There is a problem with some of your addresses.\n    ")]),t._v(" "),n("b-message",{attrs:{type:t.statusClass,active:t.allTxsMined},on:{"update:active":function(e){t.allTxsMined=e}}},[t._v("\n      "+t._s(t.statusText)+"\n      "),t.leftOversTx.txHash?n("div",{staticClass:"token-field"},[n("p",{staticClass:"subtitle"},[t._v("\n          We are sending the remaining "+t._s(t.networkConfig.currencyName)+" to your address\n          "+t._s(t.ethAccount)+"\n        ")]),t._v(" "),n("div",{staticClass:"label"},[t._v("Tx Hash of remaining "+t._s(t.networkConfig.currencyName))]),t._v(" "),n("div",{staticClass:"txs"},[n("div",{staticClass:"txs__item",class:t.txStatusClass(t.leftOversTx.status)},[n("div",{staticClass:"txs__status"}),t._v(" "),n("a",{staticClass:"txs__address",attrs:{href:t.txExplorerUrl("leftOversTx"),target:"_blank"}},[t._v("\n              "+t._s(t.txHashToRender("leftOversTx"))+"\n            ")])])])]):t._e()]),t._v(" "),n("br"),t._v(" "),t.isAirdropCreated?n("div",{attrs:{id:"airdrop-url"}},[n("span",[t._v("Your airdrop URL: ")]),t._v(" "),n("a",{attrs:{href:t.url}},[t._v(t._s(t.url))])]):t._e()],1),t._v(" "),t._m(0)])},r,!1,null,null,null);e.default=_.exports}}]);