import{r as c,R as U,M as R,w as A,o as j,c as y,f,z as D,I as H,y as k,l as Z,H as G,F as Q,j as X,e as b}from"./vue-BqIrXbS7.js";import{n as C,b as N,q as K,_ as J}from"./app-init-CogcSZJG.js";const w=c(!1),W=c(),Y=n=>{w.value=!w.value,W.value=n,setTimeout(()=>w.value=!w.value,3e3)},V=c(!1),L=U({today:new Date().toLocaleString("fr-CA").slice(0,10)}),ee=n=>{const r=document.createElement("div");r.setAttribute("id","alert-container");const p=` <div
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
    <div class="modal-backdrop fade show"></div>`;r.innerHTML=p,r.querySelector(".close").addEventListener("click",()=>{document.querySelector("#alert-container").remove()}),r.querySelector("#close-btn").addEventListener("click",()=>{document.querySelector("#alert-container").remove()}),r.querySelector("#action-btn").addEventListener("click",()=>{V.value=!0,r.querySelector("#action-text").remove(),r.querySelector("#alert-loading").classList.add("d-block"),n.action()}),document.body.prepend(r)},te=()=>L.triage_enabled&&L.triage_enabled=="1";function ae(){return{appSettings:L,confirm:ee,hasModal:V,triageEnabled:te}}const{hasModal:le}=ae(),h=U({}),x=c(null),g=c(0),S=c(!1);function oe(n="pos/"){const r=`${N}api/${n}`,p=localStorage.getItem("token"),u=C.create({baseURL:r,headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest",...p?{Authorization:`Bearer ${p}`}:{}}});S.value&&(u.defaults.onDownloadProgress=a=>{if(a.total){const e=Math.round(a.loaded*100/a.total);g.value=e,e===100&&setTimeout(()=>{g.value=0},400)}},u.defaults.onUploadProgress=a=>{if(a.total){const e=Math.round(a.loaded*100/a.total);g.value=e,e===100&&setTimeout(()=>{g.value=0},400)}});const v=a=>{for(let e in h)if(h[e]===a){delete h[e];break}if(S.value=!1,le.value){const e=document.querySelector("#alert-container");e&&e.remove()}};return u.interceptors.request.use(async a=>{const e=localStorage.getItem("__branch");return e&&(a.url=K(a.url,{current_branch:JSON.parse(e).id})),x.value&&(h[x.value]=a.url,x.value=null),a},a=>(v(a.config.url),Promise.reject(a))),u.interceptors.response.use(a=>(v(a.config.url),a),async a=>{v(a.config.url);const{status:e}=a.response;if((e===401||e===419)&&(localStorage.clear(),location.pathname!=="/")){try{await C.post(`${N}logout`)}catch{}window.location.pathname="/"}return a.response.status==500&&Y({type:"danger",text:"Error. Contact system administrator"}),Promise.reject(a)}),{http:u,onGoingRequestFlag:x,isProcessing:a=>Object.keys(h).includes(a),requestPercentage:g,requireProgress:S}}const se={class:"quick-search"},ne={class:"ac-dropdown ember-view"},re={class:"dropdown filter-dropdown input-group btn-group"},ie={class:"input-group-prepend w-100",tabindex:"-1"},ce={class:"auto-select ac-selected w-100"},ue=["placeholder"],de=["onClick"],fe=["innerHTML"],pe={key:0,class:"py-2"},ve={__name:"ZohoSelect",props:{modelValue:{required:!1},primaryKey:{default:"id"},url:{type:String,required:!1},label:{type:String,required:!0},placeholder:{type:String,required:!0},records:{type:Array,default:function(){return[]}},fetchFlag:{type:String,default:"AUTOCOMPLETE_REQUEST"},isVertical:{type:Boolean}},emits:["selected","update:modelValue"],setup(n,{expose:r,emit:p}){const{http:u,onGoingRequestFlag:v,isProcessing:T}=oe(),a=p,e=n,s=c([]),i=c(null),d=c({}),m=c(!1),M=R(()=>T(e.fetchFlag)),F=R(()=>{let t=s.value;const l=i.value&&i.value.toLowerCase();return l&&(t=t.filter(o=>String(o[e.label]).toLowerCase().indexOf(l)>-1)),t});function B(t){const l=t.target;t.target.nodeName=="BUTTON"||t.target.nodeName=="A"?l.click():l.nodeName=="INPUT"&&(i.value=null)}function I(t){const l=t.target;(l.nodeName=="INPUT"||l.classList.contains("search-item"))&&setTimeout(()=>{m.value=!1},1)}function $(t=null){if(s.value&&s.value.length<=1){const l=t||e.url;v.value=e.fetchFlag,u.get(l).then(o=>{o.data.rows?s.value=[...s.value,...o.data.rows]:s.value=[...s.value,...o.data],P()})}}function P(){if(e.modelValue){const t=s.value.find(l=>l[e.primaryKey]==e.modelValue);t&&(i.value=t[e.label],d.value=t)}}function O(t){const l=t.target.value;l.trim().length>2&&(F.value.length||(v.value=e.fetchFlag,u.get(K(e.url,{query:l})).then(o=>{const q=o.data.rows||o.data||[];s.value=[...s.value,...q]})))}function _(t){i.value=t[e.label],t[e.primaryKey]!=d.value[e.primaryKey]&&(d.value=t,a("selected",t),a("update:modelValue",t[e.primaryKey])),m.value=!1}function z(){d.value={},s.value=[]}function E(t){s.value.unshift(t),_(t)}return A(()=>e.modelValue,t=>{if(t!=null){const l=s.value.find(o=>o[e.primaryKey]==t);l?(i.value=l[e.label],d.value=l):e.url&&$()}else i.value=null,d.value={}},{immediate:!1}),A(()=>e.records,t=>{t&&t.length>0&&(s.value=[...t],P())},{deep:!0}),j(()=>{if(e.records.length&&(s.value=[...e.records]),e.modelValue){const t=s.value.find(l=>l[e.primaryKey]==e.modelValue);t&&(i.value=t[e.label],d.value=t)}}),r({clearAll:z,addRow:E,handleChange:_}),(t,l)=>(b(),y("div",{class:"search-field ember-view",onFocusout:I,onFocusin:B},[f("div",se,[f("div",ne,[f("div",re,[f("div",ie,[f("div",ce,[D(f("input",{placeholder:e.placeholder,class:k(["form-control cursor-pointer search-key-input",{"rounded-bottom-0":m.value,"is-loading":M.value}]),type:"text",autocomplete:"off",spellcheck:"false",autocorrect:"off",autocapitalize:"off",onFocus:l[0]||(l[0]=()=>{m.value=!0,$()}),"onUpdate:modelValue":l[1]||(l[1]=o=>i.value=o),onInput:l[2]||(l[2]=o=>O(o))},null,42,ue),[[H,i.value]])])]),f("div",{class:k(["dropdown-menu dropdown-menu-end w-100 ember-view scrollmenu px-2 scrollable-content",{show:m.value}]),style:{"margin-top":"6px",border:"1px solid #ebeaf2","border-radius":"4px","box-shadow":"0 4px 12px 0 #d7d5e2","background-color":"#fff",width:"300px"}},[(b(!0),y(Q,null,X(F.value,(o,q)=>(b(),y("button",{class:k(["dropdown-item search-item",{active:d.value[e.primaryKey]==o[e.primaryKey]}]),type:"button",onClick:me=>_(o),key:"item"+q},[f("span",{innerHTML:o?.alias||o[n.label]},null,8,fe)],10,de))),128)),!M.value&&!s.value.length?(b(),y("span",pe,"No data to display")):Z("",!0),G(t.$slots,"footer",{},void 0,!0)],2)])])])],32))}},ye=J(ve,[["__scopeId","data-v-05bf1514"]]);export{ye as Z};
