import{S as F,N as L,C as A}from"./DH2dHN1I.js";import{_ as O,m as P,F as V,G as Y,r as k,o as G,v as i,x as t,z as p,A as u,H as o,Z as j,y as a,I,J as M,E as n,i as W,t as l,K as $,R as U,B as D,C as J,D as K}from"./oHqGifPf.js";import{l as Q,f as X,m as Z,s as q,F as tt,_ as et,a as ot}from"./CS5Lf4jr.js";import{M as st,F as lt}from"./DuWI_CRV.js";const it=""+new URL("Cup.C8fuOTcQ.svg",import.meta.url).href,x=r=>(J("data-v-f1664d8f"),r=r(),K(),r),at={class:"md:container md:mx-auto flex flex-col sub"},rt={style:{"min-height":"90vh"}},ct={style:{position:"sticky",top:"0","background-color":"white","z-index":"100"},class:"transition-all duration-300",id:"sticky_image_div"},nt={class:"flex flex-col items-center justify-center bg-white shadow-md rounded-bl-3xl rounded-br-3xl pt-3 pb-4 my_white_div",style:{"margin-bottom":"0px",width:"100%","margin-top":"1px"}},dt={class:"flex mt-1",style:{width:"95%"}},_t={class:"relative ml-auto"},pt={key:0,class:"dynamic_div1",style:{width:"100%","margin-top":"-20px","min-height":"180px"}},ut={class:"flex d1_child"},ht=x(()=>t("div",{style:{width:"40%"}},[t("img",{src:it,alt:"trophy",style:{height:"270px","margin-top":"-40px"}})],-1)),mt={key:0,class:"mt-5 flex flex-col mx-2",style:{width:"60%"}},gt={class:"flex items-center justify-start gap-2",style:{"margin-top":"20px"}},xt={key:0,class:"flex items-center justify-center",style:{"background-color":"black",color:"white","border-radius":"50%",width:"36px",height:"36px"}},ft=x(()=>t("small",{class:"text-white text-xs",style:{"font-size":"10px","line-height":"30px"}},"NEW",-1)),yt=[ft],vt={key:1,class:"flex items-center justify-center",style:{"background-color":"red",color:"white","border-radius":"50%",width:"36px",height:"36px"}},wt=x(()=>t("small",{class:"text-white text-xs",style:{"font-size":"10px","line-height":"30px"}},"HOT",-1)),bt=[wt],kt={class:"paragraph-bold mt-3"},Tt={class:"flex"},Ct={class:"paragraph"},St={class:"paragraph_child"},zt={class:"paragraph_child"},Et={key:0},Nt={class:"carousel__item"},jt=["src"],It={key:0,class:"dots-container"},Mt={key:0,class:"flex flex-col justify-start dynamic_div2 mx-5 mt-5 mb-20 pb-2"},Rt={class:"paragraph-bold mt-3"},Dt={class:"mt-2"},Ht={class:"paragraph_child"},Bt={class:"paragraph_child"},Ft={class:"paragraph_child pt-1 w-[100%]"},Lt={class:"flex items-center justify-end gap-2",style:{"margin-top":"-80px"}},At={key:0,class:"flex items-center justify-center",style:{"background-color":"black",color:"white","border-radius":"50%",width:"36px",height:"36px"}},Ot=x(()=>t("small",{class:"text-white text-xs",style:{"font-size":"10px","line-height":"30px"}},"NEW",-1)),Pt=[Ot],Vt={key:1,class:"flex items-center justify-center",style:{"background-color":"red",color:"white","border-radius":"50%",width:"36px",height:"36px"}},Yt=x(()=>t("small",{class:"text-white text-xs",style:{"font-size":"10px","line-height":"30px"}},"HOT",-1)),Gt=[Yt],Wt={key:0,class:"data_table"},$t={style:{width:"95%","margin-left":"10px","margin-right":"10px","margin-top":"10px"}},Ut={style:{"background-color":"#e7e7e7",height:"29px","border-radius":"23px",filter:"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25))"}},Jt={style:{width:"75%",color:"#000000","text-align":"left","padding-left":"8px","font-size":"14px","font-family":"'Roboto', sans-serif","letter-spacing":"1px","line-height":"auto","border-style":"hidden",outline:"none"}},Kt=x(()=>t("th",{style:{width:"25%",color:"#000000","text-align":"right","font-size":"14px","font-family":"'Roboto', sans-serif","letter-spacing":"1px","line-height":"auto","border-style":"hidden",outline:"none","padding-right":"8px"}}," Unit Price ",-1)),Qt={class:"table_data flex"},Xt={style:{"padding-top":"3px","text-align":"right"}},Zt={class:"table_data2",style:{display:"inline-block","vertical-align":"top"}},qt=x(()=>t("br",null,null,-1)),te={class:"table_data3",style:{display:"inline-block","vertical-align":"top"}},ee={components:{Slider:Z,Multiselect:q},data(){return{scrolled:!1,position:[]}},methods:{handleScroll(){const r=window.scrollY,h=window.innerHeight*.4;r>h&&!this.scrolled&&!this.scrollTimeout?(this.scrolled=!0,this.scrollTimeout=setTimeout(()=>{this.scrollTimeout=null},1e3)):r<279&&this.scrolled&&!this.scrollTimeout&&(this.scrolled=!1,this.scrollTimeout=setTimeout(()=>{this.scrollTimeout=null},1e3))},debounce(r,f,h){let y,w=0;return function(){const b=this,e=arguments,v=new Date().getTime()-w,m=function(){y=null,w=new Date().getTime(),h||r.apply(b,e)},T=h&&!y;clearTimeout(y),T||v>f?(r.apply(b,e),w=new Date().getTime()):y=setTimeout(m,f-v)}}},mounted(){window.addEventListener("scroll",this.debounce(this.handleScroll,250));const r=document.getElementById("sticky_image_div");window.addEventListener("scroll",function(){window.scrollY>=50?r.style.paddingTop="40px":r.style.paddingTop="0"})},destroyed(){window.removeEventListener("scroll",this.debounce(this.handleScroll,250))}},oe=Object.assign(ee,{__name:"[id]",setup(r){Q.add(X);const f=P().$axios,h=V(),y=Y(),w=h.params.id,b=h.params.name,e=k([]),d=k([]),v=k([]),m=k(0),T=async()=>{const g=`/ecatalog/product?productGroupId=${w}`;try{const S=(await f.get(g)).data.products[0];e.value=S,console.log(e.value);const z=e.value.product.map(N=>N.product_image);d.value=z,console.log(d.value);const E=e.value.product;v.value=E,console.log(v.value)}catch(C){console.error(C),y.push("/404")}},H=()=>{m.value=(m.value+1)%d.value.length},B=()=>{m.value=(m.value-1+d.value.length)%d.value.length};return G(()=>{T()}),(g,C)=>{var R;const S=W("router-link"),z=F,E=L,N=A;return l(),i("div",at,[t("div",rt,[p(st,{title:"product",style:{"z-index":"1000"}}),t("div",ct,[t("div",nt,[t("div",dt,[t("div",_t,[p(S,{to:"/"+o(b)},{default:u(()=>[p(o(tt),{icon:["fas","circle-xmark"],size:"2x"})]),_:1},8,["to"])])]),p(j,{name:"fade1"},{default:u(()=>{var s,_,c;return[g.scrolled?(l(),i("div",pt,[t("div",ut,[ht,o(e)?(l(),i("div",mt,[t("div",gt,[o(e).product_group_new==1?(l(),i("div",xt,yt)):n("",!0),o(e).product_group_hot==1?(l(),i("div",vt,bt)):n("",!0)]),t("p",kt,a(((s=o(e))==null?void 0:s.product_group_name)||"-"),1),t("div",Tt,[t("div",Ct,[t("p",St," Color: "+a((_=o(e))!=null&&_.product_group_color&&o(e).product_group_color!==""?o(e).product_group_color:"-"),1),t("p",zt," Material: "+a((c=o(e))!=null&&c.product_group_material&&o(e).product_group_material!==""?o(e).product_group_material:"-"),1)])])])):n("",!0)])])):n("",!0)]}),_:1}),p(j,{name:"fade2",style:{"min-height":"200px"}},{default:u(()=>{var s;return[!g.scrolled&&((s=o(d))==null?void 0:s.length)>0?(l(),i("div",Et,[p(N,{"items-to-show":1,snapAlign:g.center,"wrap-around":"true",class:"mt-1 pt-2 w-96 carousel"},{addons:u(()=>[p(E,null,{next:u(()=>[t("img",{src:et,onClick:H,class:"c_next",height:"50px",alt:""})]),prev:u(()=>[t("img",{src:ot,onClick:B,class:"c_previous",alt:""})]),_:1})]),default:u(()=>[(l(!0),i(I,null,M(o(d),(_,c)=>(l(),$(z,{key:c},{default:u(()=>[t("div",Nt,[t("img",{src:"https://admin.ecatalog.cloud/uploads/ftp/"+_,alt:"trophy",style:{height:"180px"}},null,8,jt)])]),_:2},1024))),128))]),_:1},8,["snapAlign"]),g.scrolled?n("",!0):(l(),i("div",It,[(l(!0),i(I,null,M(o(d),(_,c)=>(l(),i("span",{key:c,class:U(["dot",{active:c===o(m)}])},null,2))),128))]))])):n("",!0)]}),_:1})])]),p(j,{name:"fade3"},{default:u(()=>{var s,_,c;return[!g.scrolled&&o(e)?(l(),i("div",Mt,[t("div",null,[t("p",Rt,a(((s=o(e))==null?void 0:s.product_group_name)||"-"),1),t("div",Dt,[t("p",Ht," Color: "+a((_=o(e))!=null&&_.product_group_color&&o(e).product_group_color!==""?o(e).product_group_color:"-"),1),t("p",Bt," Material: "+a((c=o(e))!=null&&c.product_group_material&&o(e).product_group_material!==""?o(e).product_group_material:"-"),1),t("p",Ft," This medal is made with "+a(o(e).product_group_material)+" and comes in "+a(o(e).product_group_color)+". ",1)]),t("div",Lt,[o(e).product_group_new==1?(l(),i("div",At,Pt)):n("",!0),o(e).product_group_hot==1?(l(),i("div",Vt,Gt)):n("",!0)])])])):n("",!0)]}),_:1}),o(e)?(l(),i("div",Wt,[t("table",$t,[t("thead",null,[t("tr",Ut,[t("th",Jt," Code: "+a(((R=o(e))==null?void 0:R.product_group_sku)||"-"),1),Kt])]),t("tbody",null,[(l(!0),i(I,null,M(o(v),(s,_)=>(l(),i("tr",{key:s.product_id,class:"table_data_row"},[t("td",null,[t("small",Qt,[t("span",null,a(s.product_abc_size)+"  ",1),D("   "),t("span",null," H"+a(s.product_height)+"mm W"+a(s.product_width)+"mm D"+a(s.product_diameter)+"mm ("+a(s.product_color)+")",1)])]),t("td",Xt,[t("small",Zt,[D(" RM"+a(s.product_sale_price)+" ",1),qt,t("span",te," RM"+a(s.product_regular_price),1)])])]))),128))])])])):n("",!0)]),p(lt)])}}}),re=O(oe,[["__scopeId","data-v-f1664d8f"]]);export{re as default};
