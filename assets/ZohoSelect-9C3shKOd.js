import{r as u,R as E,M as A,w as C,o as Q,e as g,i as p,z as X,I as J,y as F,j as U,H as W,F as Y,p as ee,f as b}from"./vue-OMd96UUg.js";import{m as V,b as I,n as B,_ as te}from"./app-init-D1ny4_WG.js";const S=u(!1),ae=u(),le=n=>{S.value=!S.value,ae.value=n,setTimeout(()=>S.value=!S.value,3e3)},z=u(!1),N=E({today:new Date().toLocaleString("fr-CA").slice(0,10)}),oe=n=>{const r=document.createElement("div");r.setAttribute("id","alert-container");const v=` <div
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
    <div class="modal-backdrop fade show"></div>`;r.innerHTML=v,r.querySelector(".close").addEventListener("click",()=>{document.querySelector("#alert-container").remove()}),r.querySelector("#close-btn").addEventListener("click",()=>{document.querySelector("#alert-container").remove()}),r.querySelector("#action-btn").addEventListener("click",()=>{z.value=!0,r.querySelector("#action-text").remove(),r.querySelector("#alert-loading").classList.add("d-block"),n.action()}),document.body.prepend(r)},se=()=>N.triage_enabled&&N.triage_enabled=="1";function ne(){return{appSettings:N,confirm:oe,hasModal:z,triageEnabled:se}}const{hasModal:re}=ne(),w=E({}),k=u(null),x=u(0),R=u(!1);function ie(n="pos/"){const r=`${I}api/${n}`,v=localStorage.getItem("token"),d=V.create({baseURL:r,headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest",...v?{Authorization:`Bearer ${v}`}:{}}});R.value&&(d.defaults.onDownloadProgress=a=>{if(a.total){const e=Math.round(a.loaded*100/a.total);x.value=e,e===100&&setTimeout(()=>{x.value=0},400)}},d.defaults.onUploadProgress=a=>{if(a.total){const e=Math.round(a.loaded*100/a.total);x.value=e,e===100&&setTimeout(()=>{x.value=0},400)}});const m=a=>{for(let e in w)if(w[e]===a){delete w[e];break}if(R.value=!1,re.value){const e=document.querySelector("#alert-container");e&&e.remove()}};return d.interceptors.request.use(async a=>{const e=localStorage.getItem("__branch");return e&&(a.url=B(a.url,{current_branch:JSON.parse(e).id})),k.value&&(w[k.value]=a.url,k.value=null),a},a=>(m(a.config.url),Promise.reject(a))),d.interceptors.response.use(a=>(m(a.config.url),a),async a=>{m(a.config.url);const{status:e}=a.response;if((e===401||e===419)&&(localStorage.clear(),location.pathname!=="/")){try{await V.post(`${I}logout`)}catch{}window.location.pathname="/"}return a.response.status==500&&le({type:"danger",text:"Error. Contact system administrator"}),Promise.reject(a)}),{http:d,onGoingRequestFlag:k,isProcessing:a=>Object.keys(w).includes(a),requestPercentage:x,requireProgress:R}}const ce={class:"quick-search"},ue={class:"ac-dropdown ember-view"},de={class:"dropdown filter-dropdown input-group btn-group"},pe={class:"input-group-prepend w-100",tabindex:"-1"},fe={class:"auto-select ac-selected w-100"},ve=["placeholder"],me=["onClick"],he=["innerHTML"],ye={key:0,class:"py-2 text-muted"},ge={key:1,class:"py-2 text-muted"},be={__name:"ZohoSelect",props:{modelValue:{required:!1},primaryKey:{type:String,default:"id"},url:{type:String,required:!1},label:{type:String,required:!0},placeholder:{type:String,required:!0},records:{type:Array,default:()=>[]},fetchFlag:{type:String,default:"AUTOCOMPLETE_REQUEST"},isVertical:{type:Boolean,default:!1}},emits:["selected","update:modelValue"],setup(n,{expose:r,emit:v}){const{http:d,onGoingRequestFlag:m,isProcessing:$}=ie(),a=v,e=n,s=u([]),i=u(null),c=u({}),h=u(!1),D=u(!1),L=A(()=>$(e.fetchFlag)),P=A(()=>{let t=s.value;const l=i.value&&i.value.toLowerCase();return l&&(t=t.filter(o=>String(o[e.label]).toLowerCase().includes(l))),t});function O(t){const l=t.target;l.nodeName==="BUTTON"||l.nodeName==="A"?l.click():l.nodeName==="INPUT"&&(c.value[e.primaryKey]||(i.value=null))}function j(t){const l=t.target;(l.nodeName==="INPUT"||l.classList.contains("search-item"))&&setTimeout(()=>{h.value=!1,c.value[e.primaryKey]&&!h.value&&(i.value=c.value[e.label])},200)}function _(t=null){if(s.value.length<=1&&e.url){const l=t||e.url;m.value=e.fetchFlag,d.get(l).then(o=>{const y=o.data.rows||o.data||[],q=new Set(s.value.map(f=>f[e.primaryKey])),M=y.filter(f=>!q.has(f[e.primaryKey]));s.value=[...s.value,...M],D.value=!0,K()}).catch(o=>{console.error("Error fetching data:",o)})}else s.value.length>1&&K()}function K(){if(e.modelValue){const t=s.value.find(l=>l[e.primaryKey]==e.modelValue);t&&(i.value=t[e.label],c.value=t)}}function H(t){const l=t.target.value;l&&l.trim().length>2&&!P.value.length&&e.url&&(m.value=e.fetchFlag,d.get(B(e.url,{query:l})).then(o=>{const y=o.data.rows||o.data||[],q=new Set(s.value.map(f=>f[e.primaryKey])),M=y.filter(f=>!q.has(f[e.primaryKey]));s.value=[...s.value,...M]}).catch(o=>{console.error("Error searching:",o)}))}function T(t){i.value=t[e.label],t[e.primaryKey]!==c.value[e.primaryKey]&&(c.value=t,a("selected",t),a("update:modelValue",t[e.primaryKey])),h.value=!1}function Z(){c.value={},i.value=null,a("update:modelValue",null),a("selected",null)}function G(t){s.value.find(o=>o[e.primaryKey]===t[e.primaryKey])||s.value.unshift(t),T(t)}return C(()=>e.modelValue,t=>{if(t!=null){const l=s.value.find(o=>o[e.primaryKey]==t);l?(i.value=l[e.label],c.value=l):e.url&&_()}else i.value=null,c.value={}},{immediate:!1}),C(()=>e.records,t=>{t&&t.length>0&&(s.value=[...t],K())},{deep:!0}),Q(()=>{if(e.records.length&&(s.value=[...e.records]),e.modelValue){const t=s.value.find(l=>l[e.primaryKey]==e.modelValue);t?(i.value=t[e.label],c.value=t):e.url&&_()}}),r({clearAll:Z,addRow:G,handleChange:T,getDefaultData:_}),(t,l)=>(b(),g("div",{class:"search-field ember-view",onFocusout:j,onFocusin:O},[p("div",ce,[p("div",ue,[p("div",de,[p("div",pe,[p("div",fe,[X(p("input",{placeholder:e.placeholder,class:F(["form-control cursor-pointer search-key-input",{"rounded-bottom-0":h.value,"is-loading":L.value}]),type:"text",autocomplete:"off",spellcheck:"false",autocorrect:"off",autocapitalize:"off",onFocus:l[0]||(l[0]=()=>{h.value=!0,_()}),"onUpdate:modelValue":l[1]||(l[1]=o=>i.value=o),onInput:l[2]||(l[2]=o=>H(o))},null,42,ve),[[J,i.value]])])]),p("div",{class:F(["dropdown-menu dropdown-menu-end w-100 ember-view scrollmenu px-2 scrollable-content",{show:h.value}]),style:{"margin-top":"6px",border:"1px solid #ebeaf2","border-radius":"4px","box-shadow":"0 4px 12px 0 #d7d5e2","background-color":"#fff",width:"300px"}},[(b(!0),g(Y,null,ee(P.value,(o,y)=>(b(),g("button",{class:F(["dropdown-item search-item",{active:c.value[e.primaryKey]==o[e.primaryKey]}]),type:"button",onClick:q=>T(o),key:o[e.primaryKey]||"item"+y},[p("span",{innerHTML:o?.alias||o[e.label]},null,8,he)],10,me))),128)),!L.value&&!s.value.length?(b(),g("div",ye," No data to display ")):U("",!0),L.value?(b(),g("div",ge," Loading... ")):U("",!0),W(t.$slots,"footer",{},void 0,!0)],2)])])])],32))}},_e=te(be,[["__scopeId","data-v-fc7f493c"]]);export{_e as Z};
