import{r as i,V as U,E as S,w as x,o as X,e as k,i as d,z as J,G as Y,y as O,j as ee,I as te,F as ae,q as le,f as w}from"./vue-DivMTRp2.js";import{t as E,b as I,u as B,_ as se,w as oe,x as re,m as ne,e as ie,y as ce}from"./app-init-CbAPb-aW.js";const _=i(!1),ue=i(),de=r=>{_.value=!_.value,ue.value=r,setTimeout(()=>_.value=!_.value,3e3)},j=i(!1),M=U({today:new Date().toLocaleString("fr-CA").slice(0,10)}),fe=r=>{const n=document.createElement("div");n.setAttribute("id","alert-container");const f=` <div
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
    <div class="modal-backdrop fade show"></div>`;n.innerHTML=f,n.querySelector(".close").addEventListener("click",()=>{document.querySelector("#alert-container").remove()}),n.querySelector("#close-btn").addEventListener("click",()=>{document.querySelector("#alert-container").remove()}),n.querySelector("#action-btn").addEventListener("click",()=>{j.value=!0,n.querySelector("#action-text").remove(),n.querySelector("#alert-loading").classList.add("d-block"),r.action()}),document.body.prepend(n)},pe=()=>M.triage_enabled&&M.triage_enabled=="1";function me(){return{appSettings:M,confirm:fe,hasModal:j,triageEnabled:pe}}const{hasModal:ve}=me(),h=U({}),T=i(null),y=i(0),C=i(!1);function he(r="pos/"){const n=`${I}api/${r}`,f=localStorage.getItem("token"),u=E.create({baseURL:n,headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest",...f?{Authorization:`Bearer ${f}`}:{}}});C.value&&(u.defaults.onDownloadProgress=l=>{if(l.total){const t=Math.round(l.loaded*100/l.total);y.value=t,t===100&&setTimeout(()=>{y.value=0},400)}},u.defaults.onUploadProgress=l=>{if(l.total){const t=Math.round(l.loaded*100/l.total);y.value=t,t===100&&setTimeout(()=>{y.value=0},400)}});const p=l=>{for(let t in h)if(h[t]===l){delete h[t];break}if(C.value=!1,ve.value){const t=document.querySelector("#alert-container");t&&t.remove()}};return u.interceptors.request.use(async l=>{const t=localStorage.getItem("__branch");if(t){const s=JSON.parse(t);s&&Object.prototype.hasOwnProperty.call(s,"id")&&(l.url=B(l.url,{current_branch:s.id}))}return T.value&&(h[T.value]=l.url,T.value=null),l},l=>(p(l.config.url),Promise.reject(l))),u.interceptors.response.use(l=>(p(l.config.url),l),async l=>{p(l.config.url);const{status:t}=l.response;if((t===401||t===419)&&(localStorage.clear(),location.pathname!=="/")){try{await E.post(`${I}logout`)}catch{}window.location.pathname="/"}return l.response.status==500&&de({type:"danger",text:"Error. Contact system administrator"}),Promise.reject(l)}),{http:u,onGoingRequestFlag:T,isProcessing:l=>Object.keys(h).includes(l),requestPercentage:y,requireProgress:C}}const ye={class:"quick-search"},ge={class:"ac-dropdown ember-view"},be={class:"dropdown filter-dropdown input-group btn-group"},Se={class:"input-group-prepend w-100",tabindex:"-1"},xe={class:"auto-select ac-selected w-100"},ke=["placeholder"],we=["onClick"],_e=["innerHTML"],Te={key:0,class:"py-2"},qe={__name:"ZohoSelect",props:{modelValue:{required:!1},primaryKey:{default:"id"},url:{type:String,required:!1},label:{type:String,default:"name"},placeholder:{type:String,default:""},records:{type:Array,default:function(){return[]}},selectedRecord:{type:Object,default:null},fetchFlag:{type:String,default:"AUTOCOMPLETE_REQUEST"},isVertical:{type:Boolean},source:{type:String,default:"AUTO"}},emits:["selected","update:modelValue"],setup(r,{expose:n,emit:f}){const{http:u,onGoingRequestFlag:p,isProcessing:F}=he(),l=f,t=r,s=i([]),c=i(null),m=i({}),v=i(!1),K=S(()=>F(t.fetchFlag)),z=S(()=>{if(t.source&&t.source!=="AUTO")return t.source;const e=t.url||"";return e.startsWith("users/")||e.startsWith("shared/")||e.startsWith("branches/")||e.startsWith("departments/")?"POS":window.location.pathname.includes("/assets")?"ASSETS":"POS"}),P=S(()=>{let e;switch(z.value){case"HR":e=ce;break;case"INVENTORY":e=ie;break;case"ACCOMMODATION":e=ne;break;case"ASSETS":e=re;break;default:e=oe;break}return e});function N(e){const a=e?.data;return Array.isArray(a)?a:Array.isArray(a?.rows)?a.rows:Array.isArray(a?.data)?a.data:[]}const V=S(()=>{let e=s.value;const a=c.value&&c.value.toLowerCase();return a&&(e=e.filter(o=>g(o).toLowerCase().indexOf(a)>-1)),e});function g(e={}){return String(e?.alias||e?.[t.label]||e?.name||"")}function D(e){if(!e||e[t.primaryKey]===void 0||e[t.primaryKey]===null)return;const a=s.value.findIndex(o=>o[t.primaryKey]==e[t.primaryKey]);a>-1?s.value.splice(a,1,{...s.value[a],...e}):s.value.unshift(e)}function b(e){D(e),m.value=e||{},c.value=e?g(e):null}function H(e){const a=e.target;e.target.nodeName=="BUTTON"||e.target.nodeName=="A"?a.click():a.nodeName=="INPUT"&&(c.value=null)}function W(e){const a=e.target;(a.nodeName=="INPUT"||a.classList.contains("search-item"))&&setTimeout(()=>{v.value=!1},1)}function q(e=null){const a=e||t.url;s.value&&s.value.length<=1&&a&&(p.value=t.fetchFlag,u.get(a,{...P.value}).then(o=>{s.value=[...s.value,...N(o)],A()}))}function A(){if(t.modelValue){const e=s.value.find(a=>a[t.primaryKey]==t.modelValue);e&&b(e)}}function G(e){const a=e.target.value;a.trim().length>2&&(V.value.length||(p.value=t.fetchFlag,u.get(B(t.url,{query:a,search:a}),{...P.value}).then(o=>{const R=N(o);s.value=[...s.value,...R]})))}function L(e){c.value=g(e),e[t.primaryKey]!=m.value[t.primaryKey]&&(m.value=e,l("selected",e),l("update:modelValue",e[t.primaryKey])),v.value=!1}function $(e=!1){v.value=!1,c.value=null,m.value={},s.value=[],e&&(l("selected",null),l("update:modelValue",null))}function Z(){$(!0)}function Q(e){s.value.unshift(e),L(e)}return x(()=>t.selectedRecord,e=>{e&&t.modelValue!==void 0&&t.modelValue!==null&&e[t.primaryKey]==t.modelValue&&b(e)},{immediate:!0,deep:!0}),x(()=>t.modelValue,e=>{if(e!=null){if(t.selectedRecord&&t.selectedRecord[t.primaryKey]==e){b(t.selectedRecord);return}const a=s.value.find(o=>o[t.primaryKey]==e);a?b(a):t.url&&q()}else c.value=null,m.value={}},{immediate:!1}),x(()=>t.records,e=>{e&&e.length>0&&(s.value=[...e],A())},{deep:!0}),x(()=>t.url,(e,a)=>{e!==a&&($(!0),e&&q(e))}),X(()=>{t.records.length&&(s.value=[...t.records]),A()}),n({clearAll:Z,addRow:Q,handleChange:L}),(e,a)=>(w(),k("div",{class:"search-field ember-view",onFocusout:W,onFocusin:H},[d("div",ye,[d("div",ge,[d("div",be,[d("div",Se,[d("div",xe,[J(d("input",{placeholder:t.placeholder,class:O(["form-control cursor-pointer search-key-input",{"rounded-bottom-0":v.value,"is-loading":K.value}]),type:"text",autocomplete:"off",spellcheck:"false",autocorrect:"off",autocapitalize:"off",onFocus:a[0]||(a[0]=()=>{v.value=!0,q()}),"onUpdate:modelValue":a[1]||(a[1]=o=>c.value=o),onInput:a[2]||(a[2]=o=>G(o))},null,42,ke),[[Y,c.value]])])]),d("div",{class:O(["dropdown-menu dropdown-menu-end w-100 ember-view scrollmenu px-2 scrollable-content",{show:v.value}]),style:{"margin-top":"6px",border:"1px solid #ebeaf2","border-radius":"4px","box-shadow":"0 4px 12px 0 #d7d5e2","background-color":"#fff",width:"300px"}},[(w(!0),k(ae,null,le(V.value,(o,R)=>(w(),k("button",{class:O(["dropdown-item search-item",{active:m.value[t.primaryKey]==o[t.primaryKey]}]),type:"button",onClick:Ae=>L(o),key:"item"+R},[d("span",{innerHTML:g(o)},null,8,_e)],10,we))),128)),!K.value&&!s.value.length?(w(),k("span",Te,"No data to display")):ee("",!0),te(e.$slots,"footer",{},void 0,!0)],2)])])])],32))}},Oe=se(qe,[["__scopeId","data-v-a86894d2"]]);export{Oe as Z};
