import*as pe from"@dropins/tools/preact-compat.js";import{useState as X,Children as ae,useRef as ye,useMemo as we,useEffect as ne,useCallback as Z}from"@dropins/tools/preact-compat.js";import{debounce as Le,classes as g,VComponent as H,toLanguageTag as Ne,Slot as j}from"@dropins/tools/lib.js";import{Button as Pe,Icon as ve,Price as Se,Picker as Ue,ColorSwatch as He,ImageSwatch as Ve,TextSwatch as qe,Incrementer as je,Breadcrumbs as Ge,Image as De}from"@dropins/tools/components.js";import{jsxs as U,jsx as n,Fragment as fe}from"@dropins/tools/preact-jsx-runtime.js";import{useText as V}from"@dropins/tools/i18n.js";import{c as xe,d as $e}from"../chunks/getRefinedProduct.js";import{events as ze}from"@dropins/tools/event-bus.js";import{c as Oe}from"../chunks/initialize.js";import"@dropins/tools/fetch-graphql.js";const Fe=e=>pe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},pe.createElement("path",{d:"M7.74512 9.87701L12.0001 14.132L16.2551 9.87701",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"square",strokeLinejoin:"round"})),Ke=e=>pe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},pe.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 5.64001L5.62988 18.37",stroke:"currentColor"}),pe.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 18.37L5.62988 5.64001",stroke:"currentColor"})),Qe=24,ke=16,me=2,Xe="32";var Be=(e=>(e[e.small=16]="small",e[e.medium=24]="medium",e[e.large=64]="large",e))(Be||{});const be=({show:e=1,scrollbar:o=!1,peak:u=!1,arrows:m=!1,controls:h="dots",arrowsOnMainImage:y=!1,loop:p=!1,gap:f=null,direction:l="horizontal",width:K="100%",height:a="100%",defaultIndex:b=0,className:B,children:q,thumbnails:J=null,isZoomed:N,...A})=>{const _=V("PDP.Carousel.label").label,r=V("PDP.Carousel.Slide.label").label,D=V("PDP.Carousel.Previous.label").label,M=V("PDP.Carousel.Next.label").label,S=V("PDP.Carousel.Controls.label").label,Y=V("PDP.Carousel.Controls.Button.label").label,[t,le]=X(()=>ge(e)),x=Math.ceil(ae.count(q)/t),$=u?Qe:0,C=f?Be[f]:0,F=ae.count(q)%t,[v,oe]=X(p?b+1:b),re=ye([]),[ce,se]=X(0),[ee,he]=X(0),de=we(()=>ae.toArray(J),[J]),I=we(()=>{const c=ae.toArray(q).reduce((i,L,k)=>k%t===0?[...i,[L]]:[...i.slice(0,-1),[...i[i.length-1],L]],[]);return!p||c.length===1?c:p&&ae.count(q)%t===0?[c[x-1]].concat(c).concat([c[0],c[1]]):[ae.toArray(q).slice(-t)].concat(c).concat([c[0],c[1]])},[q,t,x,p]),T=ye(null),Q=ye(null),O=h==="thumbnailsRow"||h==="thumbnailsColumn";ne(()=>{const c=document.body,i=Le(()=>{var R,te;se(((R=T.current)==null?void 0:R.offsetWidth)??0),he(((te=T.current)==null?void 0:te.offsetHeight)??0);const k=window.innerWidth,W=ge(e,k);W!==t&&le(W)},50),L=new ResizeObserver(i);return L.observe(c),()=>{L.unobserve(c)}},[t,e]);const d=Z(c=>{const i=p?c-1:c,L=re==null?void 0:re.current[0],k=(L==null?void 0:L.offsetWidth)+ke,W=(L==null?void 0:L.offsetHeight)+ke,R=Q.current,te=h==="thumbnailsRow",Ae=h==="thumbnailsColumn",ie=te?R==null?void 0:R.offsetWidth:R==null?void 0:R.offsetHeight,z=te?k:W;(te||Ae)&&ie&&(z*(i+1)>ie&&(R.style.scrollBehavior="smooth",te?R.scrollLeft=(i+me)*z:R.scrollTop=(i+me)*z),(te?R.scrollLeft:R.scrollTop)>z*i&&(R.style.scrollBehavior="smooth",te?R.scrollLeft=(i-me)*z:R.scrollTop=(i-me)*z))},[h,p]);ne(()=>{d(v)},[v,d]);const s=Z((c,i,L)=>{O&&d(c);const k=T.current,W=$?k.offsetWidth-$:k.offsetWidth-$+C;if(!Array.from(k.querySelectorAll("[data-index]")).filter(ie=>{const z=Number(ie.getAttribute("data-index"));return!isNaN(z)&&z>-1})[c])return;if(L){const ie=c===0?x:0,z=W*(x+(F||t)/t);if(k.scrollLeft>=0&&k.scrollLeft<W-5){s(1,!0);return}if(k.scrollLeft>z-W&&k.scrollLeft<=z){s(x,!0);return}k.style.scrollBehavior="auto",k.scrollLeft=ie===0?0:z,s(ie===0?1:x,!0);return}const Ae=(k.offsetWidth-C)/t*I[c].length-$;k.style.scrollBehavior=i?"smooth":"auto",k.scrollLeft=I[c].length===t?W*c:W*(c-1)+Ae},[C,x,$,t,F,I,d,h]),P=Z(()=>{if(p){const i=v-1;s(i,!0,v===1);return}const c=v<=0?0:v-1;s(c,!0)},[v,s,p]),w=Z(()=>{const c=I.length-1;if(p){const L=v+1;s(L,!0,v===x);return}const i=v>=c?c:v+1;s(i,!0)},[I.length,p,v,s,x]);ne(()=>{const c=i=>{i.key==="ArrowLeft"&&(i.preventDefault(),P()),i.key==="ArrowRight"&&(i.preventDefault(),w())};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[w,P]),ne(()=>{s(p?b+1:b,!1)},[b,s,p]);const E=Le(()=>{const c=T.current,i=$?c.offsetWidth-$:c.offsetWidth-$+C,L=c.scrollLeft/i,k=Math.round(L)-L<1?Math.round(L):Math.ceil(L);if(O&&d(k),p){const W=i*(x+(F||t)/t);if(Math.ceil(c.scrollLeft)>=Math.ceil(W)-5){c.style.scrollBehavior="auto",c.scrollLeft=c.offsetWidth*1+(Math.ceil(c.scrollLeft)-Math.ceil(W)-$);return}if(c.scrollLeft===0){c.style.scrollBehavior="auto",c.scrollLeft=W-c.offsetWidth+$;return}}v!==k&&oe(k)},100);ne(()=>{const c=T.current;return c==null||c.addEventListener("scroll",E),()=>{c==null||c.removeEventListener("scroll",E)}},[E]);const G=(c,i,L)=>n(Pe,{className:g([["pdp-carousel__button",!c],[`pdp-carousel__button--${i}`,!c],[`pdp-carousel__button--${h}`,c]]),style:{"--height":`${ee}px`},variant:"tertiary","aria-label":i==="next"?M:D,onClick:L,disabled:p?!1:i==="next"?v>=I.length-1:v<1,children:n(ve,{className:g([["pdp-carousel__button__icon",!c],[`pdp-carousel__button__icon--${i}`,!c],[`pdp-carousel__button__icon--${h}--${i}`,c]]),size:Xe,source:Fe})}),ue=m&&I.length!=1&&G(O,"prev",P),_e=m&&I.length!=1&&G(O,"next",w),Te=m&&I.length!=1&&G(!1,"prev",P),We=m&&I.length!=1&&G(!1,"next",w);return U("div",{role:"region","aria-roledescription":_,className:g(["pdp-carousel",["pdp-carousel--main-image-controls",y],["pdp-carousel--arrows",m&&!O],[`pdp-carousel--${h}`,O],B]),style:{"--flex-carousel":h==="thumbnailsColumn"?"row-reverse":"column","--gap":O?"0":"var(--spacing-small)","--width":K},...A,children:[n("div",{ref:T,className:g(["pdp-carousel__wrapper",`pdp-carousel__wrapper--${l}`,["pdp-carousel__wrapper--scrollbar",o],["pdp-carousel__wrapper--peak",u]]),style:{"--total-width":h==="thumbnailsColumn"?"81.6%":"100%","--height":h==="thumbnailsColumn"?"auto":a,"--gap":f?`var(--spacing-${f})`:"0px","--per-page":t},tabIndex:0,children:I.map((c,i)=>{const L=c.length<t;return n("div",{role:"group","aria-roledescription":r,"data-index":i,className:g(["pdp-carousel__slide",`pdp-carousel__slide--${l}`,["pdp-carousel__slide--active",v===i],["pdp-carousel__slide--orphan",L]]),style:{"--length":c.length},children:c},i)})}),!O&&U(fe,{children:[ue,_e]}),O&&y&&U(fe,{children:[Te,We]}),h&&I.length!=1&&U("div",{className:g([[`pdp-carousel__controls__container--${h}`,O],["pdp-carousel__controls__container--no-arrows",!m||y]]),style:{"--width":h==="thumbnailsRow"?`${ce}px`:K,"--height":`${ee}px`,"--nr-thumbnails":de.length},children:[(O||N)&&!y&&ue,n("div",{ref:Q,className:g([[`pdp-carousel__controls__wrapper--${h}`,O],["pdp-carousel__controls__wrapper",O]]),children:n("div",{role:"group","aria-label":S,className:g(["pdp-carousel__controls",[`pdp-carousel__controls--${h}`,O]]),children:(p?I.slice(0,x):I).map((c,i)=>{const L=p?x:I.length,k=p?v-1===i:v===i;return O?U("label",{className:g(["pdp-carousel__thumbnail__container"]),ref:W=>{W&&(re.current[i]=W)},children:[n("input",{type:"radio",name:"carousel-thumbnails","aria-label":Y.replace("{key}",String(i+1)).replace("{total}",String(L)),checked:k&&ce!==0,onChange:()=>{s(p?i+1:i,!0)},...A,className:g(["pdp-carousel__thumbnail",["pdp-carousel__thumbnail--selected",k&&ce!==0]])}),n("span",{className:g(["pdp-carousel__thumbnail__span"]),children:de[i]})]},i):n("button",{"aria-label":Y.replace("{key}",String(i+1)).replace("{total}",String(L)),onClick:()=>{s(p?i+1:i,!0)},className:g(["pdp-carousel__controls__button",["pdp-carousel__controls__button--active",k]])},i)})})}),(O||N)&&!y&&_e]})]})};function ge(e,o=0){if(typeof e=="number")return e;const{small:u,medium:m,large:h}=e,p=[{breakpoint:1024,value:h},{breakpoint:786,value:m},{breakpoint:0,value:u}].find(({breakpoint:f})=>o>f);return p?p.value:u}const Ze=({title:e,breadcrumbs:o,galleryContent:u,infoContent:m,productContent:h,sku:y,outOfStock:p,shortDescription:f,description:l,attributes:K,images:a,options:b,price:B,specialPrice:q,className:J,children:N,quantity:A,actions:_,carouselConfig:r,...D})=>{var F,v,oe,re,ce,se,ee,he,de;const M=V("PDP.Product.RegularPrice.label").label,S=V("PDP.Product.SpecialPrice.label").label,Y=V("PDP.Product.OutOfStock.label").label,t=V("PDP.Product.Image.label").label,[le,x]=X(null),$=a!=null&&a.length?a.map((I,T)=>{var Q;return n(H,{node:I,loading:T===0?"eager":"lazy",alt:((Q=e==null?void 0:e.props)==null?void 0:Q.children)&&(t==null?void 0:t.replace("{product}",e.props.children.toString()).replace("{key}",String(T+1)).replace("{total}",String(a.length))),onClick:()=>x(T)},T)}):n("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",className:"pdp-product__images__placeholder","aria-hidden":!0}),C=(F=r==null?void 0:r.thumbnails)!=null&&F.length?r.thumbnails.map((I,T)=>{var Q;return n(H,{node:I,loading:(r==null?void 0:r.thumbnailsLoadingMode)||"lazy",alt:((Q=e==null?void 0:e.props)==null?void 0:Q.children)&&(t==null?void 0:t.replace("{product}",e.props.children.toString()).replace("{key}",String(T+1)).replace("{total}",String(a.length)))},T)}):n("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",className:"pdp-product__images__placeholder","aria-hidden":!0});return U("div",{...D,className:g(["pdp-product",J]),children:[o&&n(H,{node:o,className:"pdp-product__breadcrumbs"}),U("div",{className:"pdp-product__column-container pdp-product__gallery-column",children:[n("div",{className:"pdp-product__column-body",children:(v=r==null?void 0:r.controls)!=null&&v.desktop?n(be,{className:"pdp-product__overlay__carousel",arrows:(a==null?void 0:a.length)>1,controls:(a==null?void 0:a.length)>1?r.controls.desktop:"dots",arrowsOnMainImage:r==null?void 0:r.arrowsOnMainImage,loop:(r==null?void 0:r.loopable)&&(a==null?void 0:a.length)>1,peak:((oe=r==null?void 0:r.thumbnails)==null?void 0:oe.length)>1&&((re=r==null?void 0:r.peak)==null?void 0:re.desktop)||!1,gap:(r==null?void 0:r.gap)||null,width:"100%",height:"100%",defaultIndex:le||0,thumbnails:C,children:$}):n(Je,{className:"pdp-product__images",gap:"small",children:$})}),u&&n(H,{node:u,className:"pdp-product__gallery-content"})]}),U("div",{className:"pdp-product__column-container pdp-product__content-column",children:[U("div",{className:"pdp-product__column-body",children:[U("div",{className:"pdp-product__header",children:[e&&n(H,{node:e,className:"pdp-product__title"}),y&&n(H,{node:y,className:"pdp-product__sku"})]}),U("div",{className:"pdp-product__prices",children:[q&&n(H,{node:q,className:g(["pdp-product__price-special","pdp-product__price"]),"aria-label":S,role:"text"}),B&&n(H,{node:B,className:g(["pdp-product__price-regular","pdp-product__price--grey"]),"aria-label":M,role:"text"})]}),(ce=r==null?void 0:r.controls)!=null&&ce.mobile&&((se=r==null?void 0:r.controls)==null?void 0:se.mobile)==="thumbnailsRow"?n(be,{className:"pdp-product__images pdp-product__images--carousel pdp-product__images--carousel--thumbnails",width:"100%",height:"auto",arrows:(a==null?void 0:a.length)>1,controls:(a==null?void 0:a.length)>1?"thumbnailsRow":null,loop:(r==null?void 0:r.loopable)&&(a==null?void 0:a.length)>1,peak:((ee=r==null?void 0:r.thumbnails)==null?void 0:ee.length)>1&&((he=r==null?void 0:r.peak)==null?void 0:he.mobile)||!1,gap:(r==null?void 0:r.gap)||null,thumbnails:C,children:$}):n(be,{className:"pdp-product__images pdp-product__images--carousel",peak:((de=r==null?void 0:r.peak)==null?void 0:de.mobile)&&(a==null?void 0:a.length)>1,gap:(r==null?void 0:r.gap)||null,width:"100%",height:"auto",arrows:(a==null?void 0:a.length)>1,controls:(a==null?void 0:a.length)>1?"dots":null,loop:(r==null?void 0:r.loopable)&&(a==null?void 0:a.length)>1,children:$}),U("div",{className:g(["pdp-product__actions",["pdp-product__actions--out-of-stock",p]]),children:[p&&n("div",{className:"pdp-product__out-of-stock__text",children:Y}),b&&n(H,{node:b,className:g(["pdp-product__options"])}),A&&n("div",{className:"pdp-product__quantity",children:n(H,{node:A})}),_&&n(H,{node:_,className:g(["pdp-product__buttons"])})]}),f&&n(H,{node:f,className:g(["pdp-product__short_description"])}),l&&n(H,{node:l,className:g(["pdp-product__description"])}),K?n("div",{className:"pdp-product__attributes",children:K}):null]}),m&&n(H,{node:m,className:"pdp-product__info-content"})]}),h&&n(H,{node:h,className:"pdp-product__content"}),le===null?null:n(Ye,{className:"pdp-product__overlay",onClose:()=>x(null),centered:!0,children:n(be,{className:"pdp-product__overlay__carousel",arrows:(a==null?void 0:a.length)>1,width:"100%",height:"100%",defaultIndex:le||0,loop:(r==null?void 0:r.loopable)&&(a==null?void 0:a.length)>1,controls:(a==null?void 0:a.length)>1?"dots":null,isZoomed:!0,children:$})})]})},Je=({children:e,gap:o=null,className:u,style:m,...h})=>{const y=ae.count(e);return n("div",{...h,className:g(["pdp-gallery-grid",u]),style:{"--gap":o?`var(--spacing-${o})`:"0px",...m},children:ae.map(e,(p,f)=>n("div",{className:"pdp-gallery-grid__item",children:n(H,{node:p,loading:f===0?"eager":"lazy"},p.props.src)},y+f))})},Ie=({amount:e,currency:o,locale:u,variant:m,sale:h,minimumAmount:y,maximumAmount:p,className:f,...l})=>n(fe,{children:e||y===p?n("div",{className:"pdp-price-range",...l,children:n(Se,{amount:e||y,currency:o,locale:u,variant:m,sale:h,className:f})}):U("div",{className:"pdp-price-range",...l,children:[n(Se,{amount:y,currency:o,locale:u,className:f}),n("span",{className:"pdp-price-range__label",children:"-"}),n(Se,{amount:p,currency:o,locale:u,className:f})]})}),Ye=({centered:e,onClose:o,className:u,children:m,...h})=>{const y=V("PDP.Overlay.Close.label").label,p=Z(()=>{o==null||o()},[o]);return ne(()=>{const f=l=>{l.key==="Escape"&&p()};return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f)}},[p]),ne(()=>{const f=document.scrollingElement,l=f.style.overflow;return f.style.overflow="hidden",()=>{f.style.overflow=l}},[]),U("div",{...h,className:g(["pdp-overlay",["pdp-overlay--centered",e],u]),children:[n("div",{className:"pdp-overlay__content",children:m}),n(Pe,{"aria-label":y,variant:"tertiary",className:"pdp-overlay__close-button",onClick:p,icon:n(Ke,{})})]})},Ce=["text","image","color","dropdown"],et=e=>e.map(o=>({...o,text:o.label,disabled:!o.inStock})),tt=({options:e,hideSelectedValue:o,onValues:u,onErrors:m,defaultOptions:h,selectionsToUpdate:y,className:p,children:f,...l})=>{const K=V("PDP.Swatches.Required.label").label,[a,b]=X(()=>e==null?void 0:e.reduce((A,_)=>{const{items:r}=_,D=r==null?void 0:r.find(S=>h==null?void 0:h.includes(S.id)),M=r==null?void 0:r.find(S=>S.selected);return D?{...A,[_.id]:{label:D.label,value:D.id}}:M?{...A,[_.id]:{label:M.label,value:M.id}}:A},{}));ne(()=>{y==null||y.forEach(N=>{b(A=>{var D;const _=(D=N==null?void 0:N.items)==null?void 0:D.find(M=>M.selected);return _?{...A,[N.id]:{label:_==null?void 0:_.label,value:_==null?void 0:_.id}}:A})})},[y,b]),we(()=>{const N=e==null?void 0:e.reduce((A,_)=>{var r;return(r=_==null?void 0:_.items)==null||r.forEach(D=>{var S;const M=((S=a[_.id])==null?void 0:S.value)===D.id;_.required&&!M&&(A[_.id]=K)}),A},{});return m==null||m(N),N},[a]);const B=Z((N,A,_)=>{b(r=>{const D={...r,[N]:{label:A,value:_}};return u==null||u(D,_),D})},[u]),q=(N,A)=>{var r;const _=((r=A.selectedOptions[0])==null?void 0:r.label)??"";B(N,_,A.value)},J=Z(({items:N,id:A,required:_,type:r,selected:D,label:M})=>n("div",{className:g(["pdp-swatches__options"]),children:(r==null?void 0:r.toLowerCase())==="dropdown"?n(Ue,{"aria-label":M,handleSelect:S=>q(A,S.target),options:et(N),value:D}):N==null?void 0:N.map(S=>{const Y={key:S.id,id:S.id,name:A,value:S.value,label:S.label,groupAriaLabel:M,selected:D===S.id,outOfStock:!S.inStock,required:_===null?!0:_,onValue:()=>{B(A,S.label,S.id)}};switch(r){case"text":return n(qe,{...Y,label:S.label});case"image":return n(Ve,{...Y,src:S.value,alt:S.label});case"color":return n(He,{...Y,size:"large",color:S.value});default:return console.warn(`Invalid swatch type ${r}`),null}})}),[B]);return n("div",{...l,className:g(["pdp-swatches",p]),children:e==null?void 0:e.map(({type:N,label:A,id:_,multiple:r,required:D,items:M})=>{var S;if(!N){console.warn("Bundle product not supported on UI.");return}return Ce.includes(N)||console.warn(`Invalid swatch type ${N}`),r&&console.warn("Multiple selection swatches are not currently supported."),U("div",{id:`swatch-item-${_}`,"data-slot-key":`product-swatch--${_}`,className:"pdp-swatches__field",children:[n("div",{className:"pdp-swatches__field__label",children:a[_]?o?`${A}`:`${A}: ${a[_].label}`:A}),n(J,{id:_,type:N,required:D,items:M,label:A,selected:(S=a[_])==null?void 0:S.value})]},`swatch-item-${_}`)})})};function nt(e,o="en_US"){if(!Me(e))throw Error("Invalid date string");return e.split(" ")[1]||(e=`${e} 00:00:00`),new Date(e).toLocaleDateString(Ne(o)).toString()}function Me(e){if(![/^\d{4}-\d{2}-\d{2}$/,/^\d{1,2}\/\d{1,2}\/\d{4}$/,/^\d{2}\/\d{2}\/\d{4}$/,/^\d{4}\/\d{2}\/\d{2}$/,/^\d{1,2}\.\d{1,2}\.\d{4}$/,/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/].some(m=>m.test(e)))return!1;const u=new Date(e);return!isNaN(u.getTime())}function rt(e){const o=new URLSearchParams(window.location.search);Object.entries(e).forEach(([m,h])=>{h===null?o.delete(m):o.set(m,String(h))});let u=window.location.pathname;u+=`?${o.toString()}`,u+=window.location.hash,window.history.replaceState({},"",u)}function lt(){const e=new URLSearchParams(window.location.search),o={};return e.forEach((u,m)=>{o[m]=u}),o}function ct(e){var o,u,m,h,y,p,f,l,K,a,b,B;return{productId:Number(e==null?void 0:e.externalId),name:e==null?void 0:e.name,sku:e==null?void 0:e.sku,topLevelSku:e==null?void 0:e.externalParentId,specialToDate:void 0,specialFromDate:void 0,newToDate:void 0,newFromDate:void 0,createdAt:void 0,updatedAt:void 0,manufacturer:void 0,countryOfManufacture:void 0,categories:void 0,productType:void 0,pricing:{regularPrice:((u=(o=e==null?void 0:e.prices)==null?void 0:o.regular)==null?void 0:u.amount)||0,minimalPrice:(h=(m=e==null?void 0:e.prices)==null?void 0:m.final)==null?void 0:h.minimumAmount,maximalPrice:(p=(y=e==null?void 0:e.prices)==null?void 0:y.final)==null?void 0:p.maximumAmount,specialPrice:(l=(f=e==null?void 0:e.prices)==null?void 0:f.final)==null?void 0:l.amount,tierPricing:void 0,currencyCode:((a=(K=e==null?void 0:e.prices)==null?void 0:K.final)==null?void 0:a.currency)||"USD"},canonicalUrl:e==null?void 0:e.url,mainImageUrl:(B=(b=e==null?void 0:e.images)==null?void 0:b[0])==null?void 0:B.url}}const at={PRODUCT_CONTEXT:"productContext"},dt={PRODUCT_PAGE_VIEW:"product-page-view"};function Re(){return window.adobeDataLayer=window.adobeDataLayer||[],window.adobeDataLayer}function it(e,o){const u=Re();u.push({[e]:null}),u.push({[e]:o})}function ot(e,o){Re().push(m=>{const h=m.getState?m.getState():{};m.push({event:e,eventInfo:{...h,...o}})})}function Ee(e){const o=ct(e);it(at.PRODUCT_CONTEXT,o),ot(dt.PRODUCT_PAGE_VIEW)}const st=({sku:e,hideSku:o,hideQuantity:u,hideShortDescription:m,hideDescription:h,hideAttributes:y,hideURLParams:p,hideSelectedOptionValue:f,slots:l,children:K,initialData:a,carousel:b,optionsConfig:B,useACDL:q,onAddToCart:J,...N})=>{var I,T,Q,O;const A=V("PDP.Product.AddToCart.label").label,_=V("PDP.Product.Incrementer.label").label,r=V("PDP.Product.Details.label").label,[D,M]=X(Oe.getConfig().defaultLocale||"en-US"),[S,Y]=X(),[t=null,le]=X(a),[x,$]=X(()=>{const d={sku:e,quantity:1};return t!=null&&t.optionUIDs&&(d.optionsUIDs=t.optionUIDs),d}),[C,F]=X(()=>{var d,s;return!(t!=null&&t.options&&((d=t==null?void 0:t.options)==null?void 0:d.length)>0&&((s=t==null?void 0:t.optionUIDs)==null?void 0:s.length)!==(t==null?void 0:t.options.length))}),v={data:t,values:x,valid:C};ne(()=>{const d=ze.on("locale",s=>{s!==D&&(M(s),xe(e).then(le))});return()=>{d==null||d.off()}},[D,e]),ne(()=>{q&&a&&Object.keys(a).length>0&&Ee(a)},[a]);const oe=Z(d=>{$(s=>({...s,...d}))},[]),re=Z(d=>{var P;let s=Object.keys(d).map(w=>d[w].value).filter(w=>w!==void 0);p||rt({optionsUIDs:s.join(",")}),$(w=>({...w,optionsUIDs:s})),F((s==null?void 0:s.length)===((P=t==null?void 0:t.options)==null?void 0:P.length)),$e(e,s,B==null?void 0:B.anchorOptions).then(w=>{var E;le(w),(E=B==null?void 0:B.anchorOptions)!=null&&E.length&&ce(w,s),q&&(w==null?void 0:w.sku)!==e&&Ee(w)})},[e]),ce=Z((d,s)=>{var E;const P=(d==null?void 0:d.optionUIDs)??[];s.every(G=>P.includes(G))||(Y(d==null?void 0:d.options),$(G=>({...G,optionsUIDs:P})),F((P==null?void 0:P.length)===((E=d==null?void 0:d.options)==null?void 0:E.length)))},[e]),se=Z(d=>{Object.keys(d).length!==0&&F(!1)},[]),ee=we(()=>{var d;return(d=t==null?void 0:t.attributes)==null?void 0:d.map(({label:s,value:P},w)=>{const E=Me(P)?nt(P,D):P.toString();return U("li",{children:[s,": ",n("span",{dangerouslySetInnerHTML:{__html:E}})]},w)})},[t==null?void 0:t.attributes,D]),he=!u&&(t!=null&&t.inStock)?n(j,{name:"Quantity",slot:l==null?void 0:l.Quantity,context:{...v},children:n(je,{name:"quantity",defaultValue:x.quantity.toString(),min:1,"aria-label":_,className:"pdp-product__quantity",onValue:d=>{oe({quantity:Number(d)})}},"quantity")}):void 0,de=()=>{if(t!=null&&t.options)return n(j,{name:"Options",slot:l==null?void 0:l.Options,context:{...v},children:n(tt,{options:t.options,defaultOptions:x.optionsUIDs,selectionsToUpdate:S,hideSelectedValue:f,onValues:re,onErrors:se})})};return n("div",{...N,children:n(Ze,{title:n(j,{name:"Title",slot:l==null?void 0:l.Title,context:{...v},children:t==null?void 0:t.name}),sku:o?void 0:n(j,{name:"SKU",slot:l==null?void 0:l.SKU,context:{...v},children:t==null?void 0:t.sku}),options:de(),breadcrumbs:(l==null?void 0:l.Breadcrumbs)&&n(j,{name:"Breadcrumbs",slot:l==null?void 0:l.Breadcrumbs,context:{...v,setSeparator(d){this._registerMethod((...s)=>{const P=d(...s),w=P&&n(ve,{source:P});this._setProps(E=>({...E,separator:w}))})},appendLink(d){this._registerMethod((...s)=>{const{text:P,...w}=d(...s),E=n("a",{...w,children:P});this._setProps(G=>({...G,categories:[...G.categories||[],E]}))})},appendHTMLElement(d){this._registerMethod((...s)=>{const P=d(...s),w=this._htmlElementToVNode(P);this._setProps(E=>({...E,categories:[...E.categories||[],w]}))})}},render:({separator:d,categories:s})=>n(Ge,{separator:d,categories:s})}),quantity:he,actions:n(j,{name:"Actions",slot:l==null?void 0:l.Actions,context:{...v,appendButton(d){this._registerMethod((...s)=>{const P=d(...s);if(!P)return;const{text:w,icon:E,...G}=P,ue=n(Pe,{type:"button",...G,icon:E&&n(ve,{source:E}),children:w});this._setProps(_e=>({children:[..._e.children||[],ue]}))})}},children:!(l!=null&&l.Actions)&&n(Pe,{size:"medium",type:"submit",icon:n(ve,{source:"Cart"}),disabled:!(t!=null&&t.inStock)||!C,"aria-label":A,onClick:()=>J==null?void 0:J(x),children:A})}),shortDescription:m?void 0:n(j,{name:"ShortDescription",slot:l==null?void 0:l.ShortDescription,context:{...v},children:n("div",{dangerouslySetInnerHTML:{__html:(t==null?void 0:t.shortDescription)??""}})}),description:h?void 0:n(j,{name:"Description",slot:l==null?void 0:l.Description,context:{...v},children:n("div",{dangerouslySetInnerHTML:{__html:(t==null?void 0:t.description)??""}})}),images:((I=t==null?void 0:t.images)==null?void 0:I.map(({label:d,url:s})=>{var P,w;return n(De,{title:d,alt:d,src:s,width:((P=b==null?void 0:b.imageParams)==null?void 0:P.width)??960,height:((w=b==null?void 0:b.imageParams)==null?void 0:w.height)??1191,params:(b==null?void 0:b.imageParams)??{width:960}},s)}))??[],specialPrice:(T=t==null?void 0:t.prices)!=null&&T.visible?n(j,{name:"SpecialPrice",slot:l==null?void 0:l.SpecialPrice,context:{...v},children:n(Ie,{...t.prices.final,locale:Ne(D)})}):void 0,price:(Q=t==null?void 0:t.prices)!=null&&Q.visible&&t.prices.regular&&t.prices.final.amount!==(t==null?void 0:t.prices.regular.amount)?n(j,{name:"RegularPrice",slot:l==null?void 0:l.RegularPrice,context:{...v},children:n(Ie,{...t.prices.regular,locale:Ne(D)})}):void 0,carouselConfig:{...b,thumbnails:b&&Object.keys(b).length?((O=t==null?void 0:t.images)==null?void 0:O.map(({label:d,url:s})=>{var P,w;return n(De,{title:d,alt:d,src:s,width:((P=b==null?void 0:b.thumbnailParams)==null?void 0:P.width)??200,height:((w=b==null?void 0:b.thumbnailParams)==null?void 0:w.height)??248,params:(b==null?void 0:b.thumbnailParams)??{width:200}},s)}))??[]:[]},outOfStock:!(t!=null&&t.inStock),attributes:y?void 0:n(j,{name:"Attributes",slot:l==null?void 0:l.Attributes,context:{...v},children:ee!=null&&ee.length?U(fe,{children:[r,n("ul",{children:ee})]}):null}),galleryContent:(l==null?void 0:l.GalleryContent)&&n(j,{name:"GalleryContent",slot:l.GalleryContent,context:{...v}}),infoContent:(l==null?void 0:l.InfoContent)&&n(j,{name:"InfoContent",slot:l.InfoContent,context:{...v}}),productContent:(l==null?void 0:l.Content)&&n(j,{name:"Content",slot:l.Content,context:{...v}})})})};st.getInitialData=async function({sku:e,optionsConfig:o}){var m,h,y,p,f,l;const u=((m=lt().optionsUIDs)==null?void 0:m.split(","))||((l=(f=(p=(y=(h=Oe)==null?void 0:h.getConfig())==null?void 0:y.models)==null?void 0:p.ProductDetails)==null?void 0:f.initialData)==null?void 0:l.optionsUIDs);return u!=null&&u.length?await $e(e,u,o==null?void 0:o.anchorOptions):await xe(e)};export{st as ProductDetails,st as default};
