import{r as c,U,D as _,w as P,o as z,e as y,i as f,z as H,E as Z,y as q,j as G,I as Q,F as X,q as J,f as b}from"./vue-DdY7LLOf.js";import{q as R,b as $,t as V,_ as W,u as Y,w as ee,m as te,e as ae,x as le}from"./app-init-C-BIfT5t.js";const w=c(!1),oe=c(),se=n=>{w.value=!w.value,oe.value=n,setTimeout(()=>w.value=!w.value,3e3)},E=c(!1),T=U({today:new Date().toLocaleString("fr-CA").slice(0,10)}),ne=n=>{const r=document.createElement("div");r.setAttribute("id","alert-container");const p=` <div
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
              ${n.title}
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
              src="${n.icon}"
              trigger="loop"
              delay="500"
              colors="primary:#c71f16"
              style="width:100px;height:100px;">
          </lord-icon>
          <br>
              ${n.content}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="mr-auto right btn-label ${n.classes}"
              id="action-btn"
            >
            <i
                class="ri-checkbox-circle-line label-icon align-middle fs-20 ms-2"
              ></i
              >
              <span id="action-text">${n.actionText}</span>
              <p id="alert-loading"><span></span><span></span><span></span></p>
            </button>
            <button
              type="button"
              class="btn btn-light ms-auto"
              id="close-btn"
            >
            <span>${n.closeText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>`;r.innerHTML=p,r.querySelector(".close").addEventListener("click",()=>{document.querySelector("#alert-container").remove()}),r.querySelector("#close-btn").addEventListener("click",()=>{document.querySelector("#alert-container").remove()}),r.querySelector("#action-btn").addEventListener("click",()=>{E.value=!0,r.querySelector("#action-text").remove(),r.querySelector("#alert-loading").classList.add("d-block"),n.action()}),document.body.prepend(r)},re=()=>T.triage_enabled&&T.triage_enabled=="1";function ie(){return{appSettings:T,confirm:ne,hasModal:E,triageEnabled:re}}const{hasModal:ce}=ie(),h=U({}),x=c(null),g=c(0),L=c(!1);function ue(n="pos/"){const r=`${$}api/${n}`,p=localStorage.getItem("token"),u=R.create({baseURL:r,headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest",...p?{Authorization:`Bearer ${p}`}:{}}});L.value&&(u.defaults.onDownloadProgress=a=>{if(a.total){const e=Math.round(a.loaded*100/a.total);g.value=e,e===100&&setTimeout(()=>{g.value=0},400)}},u.defaults.onUploadProgress=a=>{if(a.total){const e=Math.round(a.loaded*100/a.total);g.value=e,e===100&&setTimeout(()=>{g.value=0},400)}});const v=a=>{for(let e in h)if(h[e]===a){delete h[e];break}if(L.value=!1,ce.value){const e=document.querySelector("#alert-container");e&&e.remove()}};return u.interceptors.request.use(async a=>{const e=localStorage.getItem("__branch");if(e){const o=JSON.parse(e);o&&Object.prototype.hasOwnProperty.call(o,"id")&&(a.url=V(a.url,{current_branch:o.id}))}return x.value&&(h[x.value]=a.url,x.value=null),a},a=>(v(a.config.url),Promise.reject(a))),u.interceptors.response.use(a=>(v(a.config.url),a),async a=>{v(a.config.url);const{status:e}=a.response;if((e===401||e===419)&&(localStorage.clear(),location.pathname!=="/")){try{await R.post(`${$}logout`)}catch{}window.location.pathname="/"}return a.response.status==500&&se({type:"danger",text:"Error. Contact system administrator"}),Promise.reject(a)}),{http:u,onGoingRequestFlag:x,isProcessing:a=>Object.keys(h).includes(a),requestPercentage:g,requireProgress:L}}const de={class:"quick-search"},fe={class:"ac-dropdown ember-view"},pe={class:"dropdown filter-dropdown input-group btn-group"},ve={class:"input-group-prepend w-100",tabindex:"-1"},me={class:"auto-select ac-selected w-100"},he=["placeholder"],ge=["onClick"],ye=["innerHTML"],be={key:0,class:"py-2"},we={__name:"ZohoSelect",props:{modelValue:{required:!1},primaryKey:{default:"id"},url:{type:String,required:!1},label:{type:String,default:"name"},placeholder:{type:String,default:""},records:{type:Array,default:function(){return[]}},fetchFlag:{type:String,default:"AUTOCOMPLETE_REQUEST"},isVertical:{type:Boolean},source:{type:String,default:"POS"}},emits:["selected","update:modelValue"],setup(n,{expose:r,emit:p}){const{http:u,onGoingRequestFlag:v,isProcessing:C}=ue(),a=p,e=n,o=c([]),i=c(null),d=c({}),m=c(!1),M=_(()=>C(e.fetchFlag)),F=_(()=>{let t;switch(e.source){case"HR":t=le;break;case"INVENTORY":t=ae;break;case"ACCOMMODATION":t=te;break;case"ASSETS":t=ee;break;default:t=Y;break}return t}),O=_(()=>{let t=o.value;const l=i.value&&i.value.toLowerCase();return l&&(t=t.filter(s=>String(s[e.label]).toLowerCase().indexOf(l)>-1)),t});function I(t){const l=t.target;t.target.nodeName=="BUTTON"||t.target.nodeName=="A"?l.click():l.nodeName=="INPUT"&&(i.value=null)}function K(t){const l=t.target;(l.nodeName=="INPUT"||l.classList.contains("search-item"))&&setTimeout(()=>{m.value=!1},1)}function A(t=null){const l=t||e.url;o.value&&o.value.length<=1&&l&&(v.value=e.fetchFlag,u.get(l,{...F.value}).then(s=>{s.data.rows?o.value=[...o.value,...s.data.rows]:o.value=[...o.value,...s.data],N()}))}function N(){if(e.modelValue){const t=o.value.find(l=>l[e.primaryKey]==e.modelValue);t&&(i.value=t[e.label],d.value=t)}}function B(t){const l=t.target.value;l.trim().length>2&&(O.value.length||(v.value=e.fetchFlag,u.get(V(e.url,{query:l}),{...F.value}).then(s=>{const S=s.data.rows||s.data||[];o.value=[...o.value,...S]})))}function k(t){i.value=t[e.label],t[e.primaryKey]!=d.value[e.primaryKey]&&(d.value=t,a("selected",t),a("update:modelValue",t[e.primaryKey])),m.value=!1}function D(){d.value={},o.value=[]}function j(t){o.value.unshift(t),k(t)}return P(()=>e.modelValue,t=>{if(t!=null){const l=o.value.find(s=>s[e.primaryKey]==t);l?(i.value=l[e.label],d.value=l):e.url&&A()}else i.value=null,d.value={}},{immediate:!1}),P(()=>e.records,t=>{t&&t.length>0&&(o.value=[...t],N())},{deep:!0}),z(()=>{if(e.records.length&&(o.value=[...e.records]),e.modelValue){const t=o.value.find(l=>l[e.primaryKey]==e.modelValue);t&&(i.value=t[e.label],d.value=t)}}),r({clearAll:D,addRow:j,handleChange:k}),(t,l)=>(b(),y("div",{class:"search-field ember-view",onFocusout:K,onFocusin:I},[f("div",de,[f("div",fe,[f("div",pe,[f("div",ve,[f("div",me,[H(f("input",{placeholder:e.placeholder,class:q(["form-control cursor-pointer search-key-input",{"rounded-bottom-0":m.value,"is-loading":M.value}]),type:"text",autocomplete:"off",spellcheck:"false",autocorrect:"off",autocapitalize:"off",onFocus:l[0]||(l[0]=()=>{m.value=!0,A()}),"onUpdate:modelValue":l[1]||(l[1]=s=>i.value=s),onInput:l[2]||(l[2]=s=>B(s))},null,42,he),[[Z,i.value]])])]),f("div",{class:q(["dropdown-menu dropdown-menu-end w-100 ember-view scrollmenu px-2 scrollable-content",{show:m.value}]),style:{"margin-top":"6px",border:"1px solid #ebeaf2","border-radius":"4px","box-shadow":"0 4px 12px 0 #d7d5e2","background-color":"#fff",width:"300px"}},[(b(!0),y(X,null,J(O.value,(s,S)=>(b(),y("button",{class:q(["dropdown-item search-item",{active:d.value[e.primaryKey]==s[e.primaryKey]}]),type:"button",onClick:xe=>k(s),key:"item"+S},[f("span",{innerHTML:s?.alias||s[n.label]},null,8,ye)],10,ge))),128)),!M.value&&!o.value.length?(b(),y("span",be,"No data to display")):G("",!0),Q(t.$slots,"footer",{},void 0,!0)],2)])])])],32))}},_e=W(we,[["__scopeId","data-v-30f0ebcb"]]);export{_e as Z};
