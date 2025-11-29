import{r as i,R as A,M as R,o as E,e as y,i as d,z as j,I as D,y as k,j as H,H as Z,F as G,p as Q,f as b}from"./vue-Drqzthlj.js";import{t as $,b as P,u as C,_ as X}from"./app-init-By-gZSfT.js";const w=i(!1),J=i(),W=n=>{w.value=!w.value,J.value=n,setTimeout(()=>w.value=!w.value,3e3)},N=i(!1),L=A({today:new Date().toLocaleString("fr-CA").slice(0,10)}),Y=n=>{const r=document.createElement("div");r.setAttribute("id","alert-container");const p=` <div
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
    <div class="modal-backdrop fade show"></div>`;r.innerHTML=p,r.querySelector(".close").addEventListener("click",()=>{document.querySelector("#alert-container").remove()}),r.querySelector("#close-btn").addEventListener("click",()=>{document.querySelector("#alert-container").remove()}),r.querySelector("#action-btn").addEventListener("click",()=>{N.value=!0,r.querySelector("#action-text").remove(),r.querySelector("#alert-loading").classList.add("d-block"),n.action()}),document.body.prepend(r)},ee=()=>L.triage_enabled&&L.triage_enabled=="1";function te(){return{appSettings:L,confirm:Y,hasModal:N,triageEnabled:ee}}const{hasModal:ae}=te(),h=A({}),x=i(null),g=i(0),S=i(!1);function le(n="pos/"){const r=`${P}${n}`,p=localStorage.getItem("token"),c=$.create({baseURL:r,headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest",...p?{Authorization:`Bearer ${p}`}:{}}});S.value&&(c.defaults.onDownloadProgress=a=>{if(a.total){const e=Math.round(a.loaded*100/a.total);g.value=e,e===100&&setTimeout(()=>{g.value=0},400)}},c.defaults.onUploadProgress=a=>{if(a.total){const e=Math.round(a.loaded*100/a.total);g.value=e,e===100&&setTimeout(()=>{g.value=0},400)}});const f=a=>{for(let e in h)if(h[e]===a){delete h[e];break}if(S.value=!1,ae.value){const e=document.querySelector("#alert-container");e&&e.remove()}};return c.interceptors.request.use(async a=>{const e=localStorage.getItem("__branch");return e&&(a.url=C(a.url,{current_branch:JSON.parse(e).id})),x.value&&(h[x.value]=a.url,x.value=null),a},a=>(f(a.config.url),Promise.reject(a))),c.interceptors.response.use(a=>(f(a.config.url),a),async a=>{f(a.config.url);const{status:e}=a.response;if((e===401||e===419)&&(localStorage.clear(),location.pathname!=="/")){try{await $.post(`${P}logout`)}catch{}window.location.pathname="/"}return a.response.status==500&&W({type:"danger",text:"Error. Contact system administrator"}),Promise.reject(a)}),{http:c,onGoingRequestFlag:x,isProcessing:a=>Object.keys(h).includes(a),requestPercentage:g,requireProgress:S}}const oe={class:"quick-search"},se={class:"ac-dropdown ember-view"},ne={class:"dropdown filter-dropdown input-group btn-group"},re={class:"input-group-prepend w-100",tabindex:"-1"},ie={class:"auto-select ac-selected w-100"},ce=["placeholder"],ue=["onClick"],de=["innerHTML"],pe={key:0,class:"py-2"},fe={__name:"ZohoSelect",props:{modelValue:{required:!1},primaryKey:{default:"id"},url:{type:String,required:!1},label:{type:String,required:!0},placeholder:{type:String,required:!0},records:{type:Array,default:function(){return[]}},fetchFlag:{type:String,default:"AUTOCOMPLETE_REQUEST"},isVertical:{type:Boolean}},emits:["selected","update:modelValue"],setup(n,{expose:r,emit:p}){const{http:c,onGoingRequestFlag:f,isProcessing:T}=le(),a=p,e=n,s=i([]),u=i(null),v=i({}),m=i(!1),M=R(()=>T(e.fetchFlag)),F=R(()=>{let t=s.value;const l=u.value&&u.value.toLowerCase();return l&&(t=t.filter(o=>String(o[e.label]).toLowerCase().indexOf(l)>-1)),t});function U(t){const l=t.target;t.target.nodeName=="BUTTON"||t.target.nodeName=="A"?l.click():l.nodeName=="INPUT"&&(u.value=null)}function V(t){const l=t.target;(l.nodeName=="INPUT"||l.classList.contains("search-item"))&&setTimeout(()=>{m.value=!1},1)}function K(t=null){if(s.value&&s.value.length<=1){const l=t||e.url;f.value=e.fetchFlag,c.get(l).then(o=>{o.data.rows?s.value=[...s.value,...o.data.rows]:s.value=[...s.value,...o.data],B()})}}function B(){if(e.modelValue){const t=s.value.find(l=>l[e.primaryKey]==e.modelValue);t&&(u.value=t[e.label],v.value=t)}}function I(t){const l=t.target.value;l.trim().length>2&&(F.value.length||(f.value=e.fetchFlag,c.get(C(e.url,{query:l})).then(o=>{const q=o.data.rows||o.data||[];s.value=[...s.value,...q]})))}function _(t){u.value=t[e.label],t[e.primaryKey]!=v.value[e.primaryKey]&&(v.value=t,a("selected",t),a("update:modelValue",t[e.primaryKey])),m.value=!1}function O(){v.value={},s.value=[]}function z(t){s.value.unshift(t),_(t)}return E(()=>{if(e.records.length&&(s.value=[...e.records]),e.modelValue){const t=s.value.find(l=>l[e.primaryKey]==e.modelValue);t&&(u.value=t[e.label],v.value=t)}}),r({clearAll:O,addRow:z,handleChange:_}),(t,l)=>(b(),y("div",{class:"search-field ember-view",onFocusout:V,onFocusin:U},[d("div",oe,[d("div",se,[d("div",ne,[d("div",re,[d("div",ie,[j(d("input",{placeholder:e.placeholder,class:k(["form-control cursor-pointer search-key-input",{"rounded-bottom-0":m.value,"is-loading":M.value}]),type:"text",autocomplete:"off",spellcheck:"false",autocorrect:"off",autocapitalize:"off",onFocus:l[0]||(l[0]=()=>{m.value=!0,K()}),"onUpdate:modelValue":l[1]||(l[1]=o=>u.value=o),onInput:l[2]||(l[2]=o=>I(o))},null,42,ce),[[D,u.value]])])]),d("div",{class:k(["dropdown-menu dropdown-menu-end w-100 ember-view scrollmenu px-2 scrollable-content",{show:m.value}]),style:{"margin-top":"6px",border:"1px solid #ebeaf2","border-radius":"4px","box-shadow":"0 4px 12px 0 #d7d5e2","background-color":"#fff",width:"300px"}},[(b(!0),y(G,null,Q(F.value,(o,q)=>(b(),y("button",{class:k(["dropdown-item search-item",{active:v.value[e.primaryKey]==o[e.primaryKey]}]),type:"button",onClick:ve=>_(o),key:"item"+q},[d("span",{innerHTML:o?.alias||o[n.label]},null,8,de)],10,ue))),128)),!M.value&&!s.value.length?(b(),y("span",pe,"No data to display")):H("",!0),Z(t.$slots,"footer",{},void 0,!0)],2)])])])],32))}},ge=X(fe,[["__scopeId","data-v-0cf71346"]]);export{ge as Z};
