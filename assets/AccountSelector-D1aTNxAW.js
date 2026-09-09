import{n as o}from"./index-B3YJlG-4.js";const r={name:"AccountSelector",props:["group","value","excludes","records","fetchOnLoad"],components:{AccountsList:{name:"AccountsList",components:{},props:["rows","spaces","activeItem","excluded"],emits:["selected"],methods:{createWhitespace(s){return"&nbsp;".repeat(s)}},template:`
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
      `}},data:()=>({rows:[],selectedAccount:null,searchKey:null,activeItem:null}),computed:{accounts(){const s=[],e=this.rows.flatMap(t=>t.accounts),c=t=>{t.forEach(a=>{s.push({id:a.id,name:a.formatted_name,parent_id:a.parent_id,currency_id:a.currency_id,currency:a.currency}),a.children&&c(a.children)})};return c(e),s},filteredRows(){let s=this.rows;const e=this.searchKey&&this.searchKey.toLowerCase();return e&&(s=this.searchTree(s,e)),s}},created(){this.records&&(this.rows=[...this.records],this.setActiveAccount()),this.fetchOnLoad&&this.getComponentData()},methods:{searchTree(s,e){return s.map(c=>{const t=this.searchTree(c.accounts||c.children||[],e);return String(c.formatted_name).toLowerCase().indexOf(e)>-1||t.length>0?{...c,accounts:t}:null}).filter(c=>c!==null)},getComponentData(){if(!this.rows.length){let s="accounts/tree";this.group&&(s+=`?group=${this.group}`),this.$store.commit("SET_REQUEST_FLAG","GET_ACCOUNTS"),this.$http.get(s).then(e=>{this.rows=e.data,this.setActiveAccount()})}},setActiveAccount(){setTimeout(()=>{if(this.value){const s=this.accounts.find(e=>e.id==this.value);s&&(this.activeItem=this.value,this.selectedAccount=s.name)}},10)},getSelectedAccount(s){this.selectedAccount=s.formatted_name,this.activeItem=s.id,this.$emit("input",s.id),this.$emit("selected",s),this.$emit("change",s)}}};var l=function(){var e=this,c=e._self._c;return c("div",{staticClass:"dropdown filter-dropdown w-100"},[c("div",{staticClass:"auto-select ac-selected dropdown-toggle w-100",attrs:{"data-toggle":"dropdown",tabindex:"-1"}},[c("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAccount,expression:"selectedAccount"}],staticClass:"form-control",attrs:{autocomplete:"off",spellcheck:"false",placeholder:"Select an account",autocorrect:"off",autocapitalize:"off",type:"text",readonly:""},domProps:{value:e.selectedAccount},on:{focus:function(t){return e.getComponentData()},input:function(t){t.target.composing||(e.selectedAccount=t.target.value)}}}),e._m(0)]),c("div",{staticClass:"dropdown-menu dropdown-menu-right w-100"},[c("div",{staticClass:"p-2 position-relative",staticStyle:{width:"100%"}},[c("div",{staticClass:"options-select"},[c("div",{staticClass:"form-group"},[c("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKey,expression:"searchKey"}],staticClass:"form-control form-control-sm",attrs:{type:"search",placeholder:"Search for Account"},domProps:{value:e.searchKey},on:{input:function(t){t.target.composing||(e.searchKey=t.target.value)}}})]),c("div",{staticClass:"tame-vertical-container"},[c("div",{staticClass:"options-container mb-1"},[e._l(e.filteredRows,function(t,a){var n,i;return[t!=null&&t.accounts&&((n=t==null?void 0:t.accounts)!=null&&n.length)?c("span",{key:e.$helper.generateRandomText(8)+a,staticClass:"p-1 d-block w-100",attrs:{href:"javascript:void(0)"}},[c("span",[e._v(e._s(t==null?void 0:t.name))])]):e._e(),t!=null&&t.accounts&&((i=t==null?void 0:t.accounts)!=null&&i.length)?c("AccountsList",{key:e.$helper.generateRandomText(8)+a,attrs:{rows:t==null?void 0:t.accounts,spaces:4,activeItem:e.activeItem,excluded:e.excludes&&[...e.excludes?e.excludes:[]]},on:{selected:e.getSelectedAccount}}):e._e()]}),e.rows.length?e._e():c("span",{staticClass:"text-center"},[e._v("No accounts available")])],2)])])])])])},d=[function(){var s=this,e=s._self._c;return e("i",{staticClass:"zf-ac-toggler"},[e("em",{staticClass:"icon ni ni-caret-down-fill m-auto"})])}],u=o(r,l,d,!1,null,null);const m=u.exports;export{m as A};
