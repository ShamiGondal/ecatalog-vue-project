import{E as N,m as T,F as z,G as A,r as x,o as S,v as p,x as t,z as m,H as l,I as L,J as C,K as I,L as b,i as $,t as r,M as j,N as D,y as B,A as O}from"./CyUyOWhW.js";import{u as V}from"./CElcw4Qv.js";import{B as Y,F as H,C as R}from"./6P6JAUmC.js";import{F as U,M as q}from"./CMmkCbYa.js";import"./Dce_dEGD.js";import"./DyGpf05c.js";import"./COfBrIB2.js";function G(o,c){const{title:_,titleTemplate:f,...v}=o;return V({title:_,titleTemplate:f,_flatMeta:v},{...c,transform(a){const i=N({...a._flatMeta});return delete a._flatMeta,{...a,meta:i}}})}const J={class:"md:container md:mx-auto flex flex-col h-[100vh] sub"},K={class:"flex flex-col px-5"},P={style:{"margin-top":"30px"}},W={class:"flex flex-col mt-4"},Q={id:"stikcy_filters",style:{position:"sticky",top:"0",background:"white",transition:"padding-top 0.3s ease","margin-top":"-5px","z-index":"9999999 !important"}},X={class:"filters-container"},Z={class:"flex ml-3"},tt={key:0,class:"flex flex-col items-start w-[20%] h-[101%]",id:"sidebar",style:{position:"sticky",top:"0",height:"calc(100vh - 120px)",transition:"padding-top 0.3s ease"}},et=["onClick"],st={class:"flex flex-wrap items-center justify-center w-[60%] ml-12 gap-4 mt-4"},ot=["src"],at={class:"menu-3"},nt={data(){return{activeItem:""}},methods:{setActiveItem(o){this.activeItem=o}},mounted(){const o=document.getElementById("sidebar"),c=document.getElementById("stikcy_filters");window.addEventListener("scroll",function(){window.scrollY>=400?(o.style.paddingTop="80px",c.style.paddingTop="40px"):(o.style.paddingTop="0",c.style.paddingTop="0")})}},mt=Object.assign(nt,{__name:"[name]",setup(o){const c=T().$axios,_=z(),f=A(),v=_.params.name,a=x([]),i=x([]),u=x([]);let h=[];const F=async()=>{const s=`/ecatalog/products/${v}`;await c.get(s).then(d=>{a.value=d.data.products,i.value=d.data.slideshows,u.value=d.data.merchant,a.value.forEach(y=>{if(y.product_group&&y.product_group.category){const M=y.product_group.category.category_name;h.includes(M)||h.push(M)}});const g=E(u.value.merchant_name),e=g,n="-",k=n;let w;u.value.merchant_logo!=null&&(w=`https://phplaravel-996806-4363314.cloudwaysapps.com/${u.value.merchant_logo}`),G({title:g,ogTitle:e,description:n,ogDescription:k,ogImage:w})}).catch(d=>{console.log(d),f.push("/")})},E=s=>s.charAt(0).toUpperCase()+s.slice(1);return S(()=>{F()}),(s,d)=>{const g=$("router-link");return r(),p("div",J,[t("div",K,[m(q,{title:"product"})]),t("div",P,[l(i)&&l(i).length>0?(r(),L(Y,{key:0,images:l(i),title:"product"},null,8,["images"])):C("",!0)]),t("div",W,[m(R,{class:"mx-5 pb-2",description:"We are one of the largest trophy suppliers in Selangor we provide one-stop solutions for all the needs of trophies and awards.",title:"product"}),t("div",Q,[t("div",X,[m(H,{class:"mx-5",onModalOpened:s.toggleModal},null,8,["onModalOpened"])])]),t("div",Z,[l(h)?(r(),p("div",tt,[(r(!0),p(I,null,b(l(h),(e,n)=>(r(),p("div",{key:n,onClick:k=>s.setActiveItem(e),class:j([{active:s.activeItem===e},"menu-2"]),style:D(n==0?"margin-top: 1rem;":"")},[t("p",null,B(e),1)],14,et))),128))])):C("",!0),t("div",st,[(r(!0),p(I,null,b(l(a),(e,n)=>(r(),p("div",{key:n,class:"flex flex-col items-center justify-center"},[m(g,{to:"/product/"+e.product_id},{default:O(()=>[t("img",{src:"https://phplaravel-996806-4363314.cloudwaysapps.com/"+e.product_image,alt:"trophy",class:"w-15"},null,8,ot),t("p",at,B(e.product_group.product_group_name),1)]),_:2},1032,["to"])]))),128))])])]),m(U,{merchant:l(u)},null,8,["merchant"])])}}});export{mt as default};
