import{r as c,V as U,E as y,w as q,o as G,e as b,i as f,z as Z,G as Q,y as A,j as X,I as J,F as Y,q as ee,f as w}from"./vue-DivMTRp2.js";import{t as $,b as E,u as I,_ as te,w as ae,x as le,m as oe,e as se,y as re}from"./app-init-CNZJwV4E.js";const S=c(!1),ne=c(),ie=r=>{S.value=!S.value,ne.value=r,setTimeout(()=>S.value=!S.value,3e3)},K=c(!1),C=U({today:new Date().toLocaleString("fr-CA").slice(0,10)}),ce=r=>{const n=document.createElement("div");n.setAttribute("id","alert-container");const p=` <div
      class="modal fade show"
      id="modal-default"
      tabindex="-1"
      role="dialog"
      style="display: block"
    >
      <div
        class="modal-dialog modal-dialog-scrollable modal-dialog-centered"
        role="document"
      >
        <div class="modal-content" style="border-color: transparent">
          <div class="modal-header bg-primary">
            <h5 class="modal-title text-white">
              ${r.title}
            </h5>
            <a
              href="javascript:void(0)"
              class="close text-white fs-20"
            >
                <svg height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                    <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </a>
          </div>

          <div class="modal-body text-center h6 mb-0">
          <lord-icon
              src="${r.icon}"
              trigger="loop"
              delay="500"
              colors="primary:#c71f16"
              style="width:100px;height:100px;">
          </lord-icon>
          <br>
              ${r.content}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="mr-auto right btn-label ${r.classes}"
              id="action-btn"
            >
            <i
                class="ri-checkbox-circle-line label-icon align-middle fs-20 ms-2"
              ></i
              >
              <span id="action-text">${r.actionText}</span>
              <p id="alert-loading"><span></span><span></span><span></span></p>
            </button>
            <button
              type="button"
              class="btn btn-light ms-auto"
              id="close-btn"
            >
            <span>${r.closeText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>`;n.innerHTML=p,n.querySelector(".close").addEventListener("click",()=>{document.querySelector("#alert-container").remove()}),n.querySelector("#close-btn").addEventListener("click",()=>{document.querySelector("#alert-container").remove()}),n.querySelector("#action-btn").addEventListener("click",()=>{K.value=!0,n.querySelector("#action-text").remove(),n.querySelector("#alert-loading").classList.add("d-block"),r.action()}),document.body.prepend(n)},ue=()=>C.triage_enabled&&C.triage_enabled=="1";function de(){return{appSettings:C,confirm:ce,hasModal:K,triageEnabled:ue}}const{hasModal:fe}=de(),h=U({}),x=c(null),g=c(0),L=c(!1);function pe(r="pos/"){const n=`${E}api/${r}`,p=localStorage.getItem("token"),u=$.create({baseURL:n,headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest",...p?{Authorization:`Bearer ${p}`}:{}}});L.value&&(u.defaults.onDownloadProgress=l=>{if(l.total){const t=Math.round(l.loaded*100/l.total);g.value=t,t===100&&setTimeout(()=>{g.value=0},400)}},u.defaults.onUploadProgress=l=>{if(l.total){const t=Math.round(l.loaded*100/l.total);g.value=t,t===100&&setTimeout(()=>{g.value=0},400)}});const v=l=>{for(let t in h)if(h[t]===l){delete h[t];break}if(L.value=!1,fe.value){const t=document.querySelector("#alert-container");t&&t.remove()}};return u.interceptors.request.use(async l=>{const t=localStorage.getItem("__branch");if(t){const o=JSON.parse(t);o&&Object.prototype.hasOwnProperty.call(o,"id")&&(l.url=I(l.url,{current_branch:o.id}))}return x.value&&(h[x.value]=l.url,x.value=null),l},l=>(v(l.config.url),Promise.reject(l))),u.interceptors.response.use(l=>(v(l.config.url),l),async l=>{v(l.config.url);const{status:t}=l.response;if((t===401||t===419)&&(localStorage.clear(),location.pathname!=="/")){try{await $.post(`${E}logout`)}catch{}window.location.pathname="/"}return l.response.status==500&&ie({type:"danger",text:"Error. Contact system administrator"}),Promise.reject(l)}),{http:u,onGoingRequestFlag:x,isProcessing:l=>Object.keys(h).includes(l),requestPercentage:g,requireProgress:L}}const ve={class:"quick-search"},me={class:"ac-dropdown ember-view"},he={class:"dropdown filter-dropdown input-group btn-group"},ge={class:"input-group-prepend w-100",tabindex:"-1"},ye={class:"auto-select ac-selected w-100"},be=["placeholder"],we=["onClick"],Se=["innerHTML"],xe={key:0,class:"py-2"},ke={__name:"ZohoSelect",props:{modelValue:{required:!1},primaryKey:{default:"id"},url:{type:String,required:!1},label:{type:String,default:"name"},placeholder:{type:String,default:""},records:{type:Array,default:function(){return[]}},fetchFlag:{type:String,default:"AUTOCOMPLETE_REQUEST"},isVertical:{type:Boolean},source:{type:String,default:"AUTO"}},emits:["selected","update:modelValue"],setup(r,{expose:n,emit:p}){const{http:u,onGoingRequestFlag:v,isProcessing:M}=pe(),l=p,t=r,o=c([]),i=c(null),d=c({}),m=c(!1),O=y(()=>M(t.fetchFlag)),B=y(()=>{if(t.source&&t.source!=="AUTO")return t.source;const e=t.url||"";return e.startsWith("users/")||e.startsWith("shared/")||e.startsWith("branches/")||e.startsWith("departments/")?"POS":window.location.pathname.includes("/assets")?"ASSETS":"POS"}),F=y(()=>{let e;switch(B.value){case"HR":e=re;break;case"INVENTORY":e=se;break;case"ACCOMMODATION":e=oe;break;case"ASSETS":e=le;break;default:e=ae;break}return e});function P(e){const a=e?.data;return Array.isArray(a)?a:Array.isArray(a?.rows)?a.rows:Array.isArray(a?.data)?a.data:[]}const R=y(()=>{let e=o.value;const a=i.value&&i.value.toLowerCase();return a&&(e=e.filter(s=>String(s[t.label]).toLowerCase().indexOf(a)>-1)),e});function j(e){const a=e.target;e.target.nodeName=="BUTTON"||e.target.nodeName=="A"?a.click():a.nodeName=="INPUT"&&(i.value=null)}function z(e){const a=e.target;(a.nodeName=="INPUT"||a.classList.contains("search-item"))&&setTimeout(()=>{m.value=!1},1)}function k(e=null){const a=e||t.url;o.value&&o.value.length<=1&&a&&(v.value=t.fetchFlag,u.get(a,{...F.value}).then(s=>{o.value=[...o.value,...P(s)],N()}))}function N(){if(t.modelValue){const e=o.value.find(a=>a[t.primaryKey]==t.modelValue);e&&(i.value=e[t.label],d.value=e)}}function D(e){const a=e.target.value;a.trim().length>2&&(R.value.length||(v.value=t.fetchFlag,u.get(I(t.url,{query:a,search:a}),{...F.value}).then(s=>{const T=P(s);o.value=[...o.value,...T]})))}function _(e){i.value=e[t.label],e[t.primaryKey]!=d.value[t.primaryKey]&&(d.value=e,l("selected",e),l("update:modelValue",e[t.primaryKey])),m.value=!1}function V(e=!1){m.value=!1,i.value=null,d.value={},o.value=[],e&&(l("selected",null),l("update:modelValue",null))}function H(){V(!0)}function W(e){o.value.unshift(e),_(e)}return q(()=>t.modelValue,e=>{if(e!=null){const a=o.value.find(s=>s[t.primaryKey]==e);a?(i.value=a[t.label],d.value=a):t.url&&k()}else i.value=null,d.value={}},{immediate:!1}),q(()=>t.records,e=>{e&&e.length>0&&(o.value=[...e],N())},{deep:!0}),q(()=>t.url,(e,a)=>{e!==a&&(V(!0),e&&k(e))}),G(()=>{if(t.records.length&&(o.value=[...t.records]),t.modelValue){const e=o.value.find(a=>a[t.primaryKey]==t.modelValue);e&&(i.value=e[t.label],d.value=e)}}),n({clearAll:H,addRow:W,handleChange:_}),(e,a)=>(w(),b("div",{class:"search-field ember-view",onFocusout:z,onFocusin:j},[f("div",ve,[f("div",me,[f("div",he,[f("div",ge,[f("div",ye,[Z(f("input",{placeholder:t.placeholder,class:A(["form-control cursor-pointer search-key-input",{"rounded-bottom-0":m.value,"is-loading":O.value}]),type:"text",autocomplete:"off",spellcheck:"false",autocorrect:"off",autocapitalize:"off",onFocus:a[0]||(a[0]=()=>{m.value=!0,k()}),"onUpdate:modelValue":a[1]||(a[1]=s=>i.value=s),onInput:a[2]||(a[2]=s=>D(s))},null,42,be),[[Q,i.value]])])]),f("div",{class:A(["dropdown-menu dropdown-menu-end w-100 ember-view scrollmenu px-2 scrollable-content",{show:m.value}]),style:{"margin-top":"6px",border:"1px solid #ebeaf2","border-radius":"4px","box-shadow":"0 4px 12px 0 #d7d5e2","background-color":"#fff",width:"300px"}},[(w(!0),b(Y,null,ee(R.value,(s,T)=>(w(),b("button",{class:A(["dropdown-item search-item",{active:d.value[t.primaryKey]==s[t.primaryKey]}]),type:"button",onClick:_e=>_(s),key:"item"+T},[f("span",{innerHTML:s?.alias||s[r.label]},null,8,Se)],10,we))),128)),!O.value&&!o.value.length?(w(),b("span",xe,"No data to display")):X("",!0),J(e.$slots,"footer",{},void 0,!0)],2)])])])],32))}},Ae=te(ke,[["__scopeId","data-v-3d79b4a4"]]);export{Ae as Z};
