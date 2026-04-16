import{n as o}from"./index-wMLihzgM.js";const r={name:"AccountSelector",props:["group","value","excludes","records","fetchOnLoad"],components:{AccountsList:{name:"AccountsList",components:{},props:["rows","spaces","activeItem","excluded"],emits:["selected"],methods:{createWhitespace(c){return"&nbsp;".repeat(c)}},template:`
        <span style="display: contents">
          <template v-for="(row, i) in rows">
            <a
              href="javascript:void(0)"
              class="p-1 item d-block w-100"
              :key="$helper.generateRandomText(8) + i"
              @click.prevent="$emit('selected', row)"
              :class="{'active': activeItem == row.id}"
              v-if="!excluded || !excluded.includes(row.id)"
            >
              <span> <span v-html="createWhitespace(spaces)"></span>{{ row?.formatted_name }}</span>
            </a>
            <AccountsList
              v-if="row.children && row.children.length"
              :rows="row.children"
              :spaces="spaces + 4"
              :key="$helper.generateRandomText(8) + i"
              @selected="$emit('selected', $event)"
              :activeItem="activeItem"
              :excluded="[...(excluded ? excluded : [])]"
            />
          </template>
        </span>
      `}},data:()=>({rows:[],selectedAccount:null,searchKey:null,activeItem:null}),computed:{accounts(){const c=[],e=this.rows.flatMap(t=>t.accounts),s=t=>{t.forEach(a=>{c.push({id:a.id,name:a.formatted_name,parent_id:a.parent_id}),a.children&&s(a.children)})};return s(e),c},filteredRows(){let c=this.rows;const e=this.searchKey&&this.searchKey.toLowerCase();return e&&(c=this.searchTree(c,e)),c}},created(){this.records&&(this.rows=[...this.records],this.setActiveAccount()),this.fetchOnLoad&&this.getComponentData()},methods:{searchTree(c,e){return c.map(s=>{const t=this.searchTree(s.accounts||s.children||[],e);return String(s.formatted_name).toLowerCase().indexOf(e)>-1||t.length>0?{...s,accounts:t}:null}).filter(s=>s!==null)},getComponentData(){if(!this.rows.length){let c="accounts/tree";this.group&&(c+=`?group=${this.group}`),this.$store.commit("SET_REQUEST_FLAG","GET_ACCOUNTS"),this.$http.get(c).then(e=>{this.rows=e.data,this.setActiveAccount()})}},setActiveAccount(){setTimeout(()=>{if(this.value){const c=this.accounts.find(e=>e.id==this.value);c&&(this.activeItem=this.value,this.selectedAccount=c.name)}},10)},getSelectedAccount(c){this.selectedAccount=c.formatted_name,this.activeItem=c.id,this.$emit("input",c.id)}}};var l=function(){var e=this,s=e._self._c;return s("div",{staticClass:"dropdown filter-dropdown w-100"},[s("div",{staticClass:"auto-select ac-selected dropdown-toggle w-100",attrs:{"data-toggle":"dropdown",tabindex:"-1"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAccount,expression:"selectedAccount"}],staticClass:"form-control",attrs:{autocomplete:"off",spellcheck:"false",placeholder:"Select an account",autocorrect:"off",autocapitalize:"off",type:"text",readonly:""},domProps:{value:e.selectedAccount},on:{focus:function(t){return e.getComponentData()},input:function(t){t.target.composing||(e.selectedAccount=t.target.value)}}}),e._m(0)]),s("div",{staticClass:"dropdown-menu dropdown-menu-right w-100"},[s("div",{staticClass:"p-2 position-relative",staticStyle:{width:"100%"}},[s("div",{staticClass:"options-select"},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKey,expression:"searchKey"}],staticClass:"form-control form-control-sm",attrs:{type:"search",placeholder:"Search for Account"},domProps:{value:e.searchKey},on:{input:function(t){t.target.composing||(e.searchKey=t.target.value)}}})]),s("div",{staticClass:"tame-vertical-container"},[s("div",{staticClass:"options-container mb-1"},[e._l(e.filteredRows,function(t,a){var n,i;return[t!=null&&t.accounts&&((n=t==null?void 0:t.accounts)!=null&&n.length)?s("span",{key:e.$helper.generateRandomText(8)+a,staticClass:"p-1 d-block w-100",attrs:{href:"javascript:void(0)"}},[s("span",[e._v(e._s(t==null?void 0:t.name))])]):e._e(),t!=null&&t.accounts&&((i=t==null?void 0:t.accounts)!=null&&i.length)?s("AccountsList",{key:e.$helper.generateRandomText(8)+a,attrs:{rows:t==null?void 0:t.accounts,spaces:4,activeItem:e.activeItem,excluded:e.excludes&&[...e.excludes?e.excludes:[]]},on:{selected:e.getSelectedAccount}}):e._e()]}),e.rows.length?e._e():s("span",{staticClass:"text-center"},[e._v("No accounts available")])],2)])])])])])},d=[function(){var c=this,e=c._self._c;return e("i",{staticClass:"zf-ac-toggler"},[e("em",{staticClass:"icon ni ni-caret-down-fill m-auto"})])}],u=o(r,l,d,!1,null,null);const m=u.exports;export{m as A};
