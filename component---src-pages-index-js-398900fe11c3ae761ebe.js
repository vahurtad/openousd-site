(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("3nLz");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var n,i=r(a("v06X")),o=r(a("XEEL")),s=r(a("uDP2")),l=r(a("j8BX")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function C(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+c+o+s+a+r+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(A,(0,l.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},A=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.onClick,f=e.loading,p=e.draggable,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},g,{onLoad:o,onError:d,onClick:u,ref:t,loading:f,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));A.propTypes={style:d.default.object,onError:d.default.func,onClick:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,S=e.itemProp,C=e.loading,L=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:z?1:0,transition:R?"opacity "+b+"ms":"none"},s),V="boolean"==typeof h?"lightgray":h,x={transitionDelay:b+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&x,{},s,{},f),T={title:t,alt:this.state.isVisible?"":a,style:N,className:p,itemProp:S};if(g){var X=g,W=X[0];return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),V&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&x)}),W.base64&&c.default.createElement(I,{src:W.base64,spreadProps:T,imageVariants:X,generateSources:w}),W.tracedSVG&&c.default.createElement(I,{src:W.tracedSVG,spreadProps:T,imageVariants:X,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,y(X),c.default.createElement(A,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:S,loading:C,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:C},W,{imageVariants:X}))}}))}if(m){var B=m,K=B[0],G=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:K.width,height:K.height},i);return"inherit"===i.display&&delete G.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(K.srcSet)},V&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:V,width:K.width,opacity:this.state.imgLoaded?0:1,height:K.height},R&&x)}),K.base64&&c.default.createElement(I,{src:K.base64,spreadProps:T,imageVariants:B,generateSources:w}),K.tracedSVG&&c.default.createElement(I,{src:K.tracedSVG,spreadProps:T,imageVariants:B,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,y(B),c.default.createElement(A,{alt:a,title:t,width:K.width,height:K.height,sizes:K.sizes,src:K.src,crossOrigin:this.props.crossOrigin,srcSet:K.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:S,loading:C,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:C},K,{imageVariants:B}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),O=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});z.propTypes={resolutions:R,sizes:O,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([O,d.default.arrayOf(O)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onClick:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var V=z;t.default=V},AFuS:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAACoElEQVQozx2RbUzMARzH/83JXXdRV1dhYrbQi2aWYWNmNrzIm0hSUpGeWUUO1Tk9XJzuutxdpamUoc0sFQppPelK5ZpCNVcpXcW84K2Hj/+8+G3f7ffZ97ff9yt867jI5848ahrvEWwdYX3ZFKusU6wsdeBr/MThh7NoOp2oX82xrWoGb8Mka6wzbK2eRv24j7k+K78GCnF2FjHerEHIqX3ATksf8mIHy0yzKMvm8C1xoDQ60Ntm+L1wnz9j2fx2lPJjsY3LXfMozbOoKudRmBfYYbXzpLGSHx1avr/MRZDoP+EiXpVYviArcyIvX8CzYAxvER6y34VbKn7m+7F4JYC/VhXf32nZdPsrXnkfUZVN42acQqkf54DxGYZyE4Lyag/KnHY81G1ISmf+j9wwzpKSRarbavlm3ozzzB6caXv5WuDPoBhRQNUiroUTuIuc/MYH3PXv2aJpRXauVTTUDaDQ2XEvGkZxfZRlVweRZ/cg1Y3gXTLGOssQOeG5ZIVpuHH9AvtMTQjXJkWuH9fs13jpBgkx9xBa1IxLZguCKqsBT/VTvDVduGt6kV54gTzzCZ6n7iAtGEbItbErRE9QRBWB6XcJOKZDKBzB75KNyPw2TDUdpN9sxF/dhCSnF2GNfgg/bTc+hgk88u1IM56jUHejSK5HrunHL6ackMBwdoeZEbR2VoRbxXffEXTWRsURCyfz+lDmv2VlXBXbr9Qh+DeMsKF+kLV1b1htaBLbbmf5zRY8S2pwK61HlW0iOCyJjSm5SIvuEXDegI+2HplllHUGG14WMaKKdqTGR+wvzkDwSYrGJyEKZXIs0qRYfBOOI0uNR5KWiCwtFteUeIRkUSdGoYiPQEiJY3lCNEvFvTT1NG6nTuAWc5QVkYfwCD3IPxhctpELRzeNAAAAAElFTkSuQmCC","aspectRatio":2.1093366093366095,"src":"/static/163117dc2ac838196c109cdf712b38cc/a4fe2/mural.png","srcSet":"/static/163117dc2ac838196c109cdf712b38cc/ae0e1/mural.png 375w,\\n/static/163117dc2ac838196c109cdf712b38cc/5a67f/mural.png 750w,\\n/static/163117dc2ac838196c109cdf712b38cc/a4fe2/mural.png 1500w,\\n/static/163117dc2ac838196c109cdf712b38cc/684cb/mural.png 1717w","sizes":"(max-width: 1500px) 100vw, 1500px"}}}}}')},Kfvu:function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.OutboundLink=l,t.trackCustomEvent=function(e){var t=e.category,a=e.action,r=e.label,n=e.value,i=e.nonInteraction,o=void 0===i||i,s=e.transport,l=e.hitCallback,c=e.callbackTimeout,d=void 0===c?1e3:c;if("undefined"!=typeof window&&window.ga){var u={eventCategory:t,eventAction:a,eventLabel:r,eventValue:n,nonInteraction:o,transport:s};l&&"function"==typeof l&&(u.hitCallback=function(e,t){void 0===t&&(t=1e3);var a=!1,r=function(){a||(a=!0,e())};return setTimeout(r,t),r}(l,d)),window.ga("send","event",u)}};var n=r(a("j8BX")),i=r(a("uDP2")),o=r(a("q1tI")),s=r(a("17x9"));function l(e){var t=e.eventCategory,a=e.eventAction,r=e.eventLabel,s=e.eventValue,l=(0,i.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return o.default.createElement("a",(0,n.default)({},l,{onClick:function(n){"function"==typeof e.onClick&&e.onClick(n);var i=!0;return(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)&&(i=!1),e.target&&"_self"!==e.target.toLowerCase()&&(i=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:a||"click",eventLabel:r||e.href,eventValue:s,transport:i?"beacon":"",hitCallback:function(){i&&(document.location=e.href)}}):i&&(document.location=e.href),!1}}))}l.propTypes={href:s.default.string,target:s.default.string,eventCategory:s.default.string,eventAction:s.default.string,eventLabel:s.default.string,eventValue:s.default.number,onClick:s.default.func}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),o=a("Kfvu"),s=a("Bl7J"),l=a("AFuS"),c=a("9eSz"),d=a.n(c),u=function(){var e=l.data;return n.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid,alt:"Live Learn Love mural at Roosevelt Middle School"})},f=a("vrFN"),p=(a("ykqd"),a("7vrA")),g=a("3Z9Z"),m=a("JI6e"),h=a("cWnB");t.default=function(){return n.a.createElement(s.a,{pageClassName:"index-page"},n.a.createElement(f.a,{title:"Home"}),n.a.createElement("div",{className:"hero mx-auto"},n.a.createElement(u,null)),n.a.createElement(p.a,null,n.a.createElement(g.a,{className:"descriptions justify-content-center"},n.a.createElement(m.a,{xs:11,md:5,className:"px-md-5 py-md-4 px-3 py-3"},n.a.createElement("h1",{className:""},"What Is OpenOUSD?"),n.a.createElement("p",null,"OpenOUSD is a project created out of OpenOakland, a volunteer run group with the mission of increasing access to government through technology. OpenOUSD aims to bring greater transparency to the Oakland Unified School District's central office so that the community can fully participate in discussions about how it can best serve our students.")),n.a.createElement(m.a,{xs:11,md:5,className:"px-md-5 py-md-4 px-3 py-3"},n.a.createElement("h1",{className:""},"What Are Central Programs?"),n.a.createElement("p",null,"We define a central program as any activity managed by OUSD's central office rather than individual school sites. For example, a staff member working at a school site but hired by the central office would be considered part of a central program. There are more than 50 centrally managed programs at OUSD."),n.a.createElement(i.Link,{to:"/central-programs/"},n.a.createElement(h.a,{variant:"primary",size:"lg",className:"cta",onClick:function(e){return Object(o.trackCustomEvent)({category:"Home Card",action:"Explore Central Programs",label:" What Are Central Programs?"})}},"Explore Central Programs")))),n.a.createElement(g.a,null,n.a.createElement(m.a,{xs:11,sm:10,className:"mx-auto mt-3"},n.a.createElement("div",{className:"footnote"},n.a.createElement("p",null,"The image above is the Live Learn Love mural at Roosevelt Middle School."),n.a.createElement("p",null,' "Change will not come if we wait for some other person or'," ","some other time.",n.a.createElement("br",null),"We are the ones we've been waiting for.",n.a.createElement("br",null),'We are the change the we seek."'),n.a.createElement("p",null,"- B.H. OBAMA"),n.a.createElement("p",null,"Artists: V. Lopez / J. C. Bustamante / B. C. Conner"),n.a.createElement("p",null,"Source: ",n.a.createElement("a",{href:"https://localwiki.org/oakland/Live_Learn_Love_mural"},"Oakland Wiki")))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-398900fe11c3ae761ebe.js.map