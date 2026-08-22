import{n as c,k as n,f as d}from"./index-DdrDKI3a.js";import"./vue-D6wRlwRH.js";import"./apexcharts-BR9v9DBQ.js";import"./jspdf-Bb1N-i58.js";const v={name:"TrialBalance",mixins:[n],components:{AccountRow:{name:"AccountRow",mixins:[n],components:{},props:["row","spaces"],methods:{formatBalance(a){return a>0?a:-a},filterChildren(a=[]){return a.filter(t=>t.balance!=0)}},template:`
      <div style="display: contents">
        <tr>
          <td class="text-start">
            <RouterLink class="ember-view" :to="viewDetails(row.row_index)"
              ><span v-html="$helper.createWhitespace(spaces)"></span><span>{{ row.formatted_name }}</span></RouterLink
            >
          </td>
          <td class="text-end">
            <RouterLink class="ember-view" :to="viewDetails(row.row_index)"
              >{{ Number(row.debits) > -Number(row.credits) ? formatMoney(formatBalance(row.balance)) : 0 }}</RouterLink
            >
          </td>
          <td class="text-end">
            <RouterLink class="ember-view" :to="viewDetails(row.row_index)"
              >{{ Number(row.debits) < -Number(row.credits) ? formatMoney(formatBalance(row.balance)) : 0 }}</RouterLink
            >
          </td>
        </tr>
        <template v-if="row?.children && row?.children?.length">
          <AccountRow
            v-for="(child, index) in filterChildren(row.children)"
            :key="$helper.generateRandomText(8) + child.id"
            :row="child"
            :spaces="Number(spaces)*2"
          />
        </template>
      </div>
        `},SixColumnsRow:{name:"SixColumnsRow",mixins:[n],components:{},props:["row"],methods:{formatBalance(a){return a>0?a:-a},filterChildren(a=[]){return a.filter(t=>t.balance!=0)}},template:`
      <div style="display: contents">
        <tr>
          <td class="">{{ row.code }}</td>
          <td class="">{{ row.name }}</td>
          <td class="">
            <RouterLink class="ember-view" :to="viewDetails(row.row_index)"
              >{{ formatMoney(row.debits) }}</RouterLink
            >
          </td>
          <td class="">
            <RouterLink class="ember-view" :to="viewDetails(row.row_index)"
              >{{ formatMoney(-Number(row.credits)) }}</RouterLink
            >
          </td>
          <td class="">
            <RouterLink class="ember-view" :to="viewDetails(row.row_index)"
              >{{ Number(row.debits) > -Number(row.credits) ? formatMoney(formatBalance(row.balance)) : '' }}</RouterLink
            >
          </td>
          <td class="">
            <RouterLink class="ember-view" :to="viewDetails(row.row_index)"
              >{{ Number(row.debits) < -Number(row.credits) ? formatMoney(formatBalance(row.balance)) : '' }}</RouterLink
            >
          </td>
        </tr>
        <template v-if="row.children">
          <SixColumnsRow
            v-for="(child, index) in row.children"
            :key="$helper.generateRandomText(8) + child.id"
            :row="child"
          />
        </template>
        </div>
      `}},computed:{actingRows(){const a=e=>e.flatMap(l=>{const s=[l];return l.children&&s.push(...a(l.children)),s.map(({children:r,...i})=>i)});return a(this.rows.map(e=>e.types).flat()).filter(e=>e.balance!=0)},totalNetDebits(){let a=0;return this.actingRows.forEach(t=>{Number(t.debits)>-Number(t.credits)&&(a+=this.formatBalance(t.balance))}),a},totalNetCredits(){let a=0;return this.actingRows.forEach(t=>{Number(t.debits)<-Number(t.credits)&&(a+=this.formatBalance(t.balance))}),a}},data:()=>({fetchUrl:"reports/accounts/trial-balance",rows:[],columns:2}),created(){this.getData(d(this.fetchUrl,this.newFilter))},methods:{formatBalance(a){return a>0?a:-a},getChildren(a=[]){return a.map(t=>t.children).flat().filter(t=>t.balance!=0)},getData(a){this.$http.get(a).then(t=>{this.rows=t.data})}}};var m=function(){var l;var t=this,e=t._self._c;return e("section",{staticClass:"container-fluids"},[e("div",{staticClass:"nk-content-inner"},[e("div",{staticClass:"nk-content-body"},[e("div",{staticClass:"mx-0"},[e("div",{staticClass:"card card-stretch"},[e("div",{staticClass:"card-inner-group"},[e("div",{staticClass:"nk-block-head nk-block-head-sm"},[e("div",{staticClass:"nk-block-between"},[e("div",{staticClass:"nk-block-head-content"},[e("div",{staticClass:"toggle-wrap nk-block-tools-toggle"},[e("div",{staticClass:"toggle-expand-content"},[e("ul",{staticClass:"nk-block-tools g-1 float-right"},[e("li",[e("PeriodPicker",{attrs:{period:t.currentPeriod},on:{selected:t.handleDatesFilter}})],1),e("li",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.columns,expression:"columns"}],staticClass:"form-control form-select",on:{change:function(s){var r=Array.prototype.filter.call(s.target.options,function(i){return i.selected}).map(function(i){var o="_value"in i?i._value:i.value;return o});t.columns=s.target.multiple?r:r[0]}}},[e("option",{attrs:{value:"2"}},[t._v("Two Columns")]),e("option",{attrs:{value:"6"}},[t._v("Six Columns")])])])])])])]),e("div",{staticClass:"nk-block-head-content"},[e("div",{staticClass:"toggle-wrap nk-block-tools-toggle"},[e("div",{staticClass:"toggle-expand-content"},[e("ul",{staticClass:"nk-block-tools g-1 float-right"},[e("li",[e("button",{staticClass:"btn btn-icon btn-white btn-dim btn-outline-light",attrs:{type:"button"},on:{click:function(s){return t.$helper.handlePrint(".nk-block")}}},[e("em",{staticClass:"icon ni ni-printer"})])])])])])])])]),e("div",{staticClass:"nk-block"},[e("div",{staticClass:"page-header notranslate text-center"},[e("h6",[t._v(t._s(((l=t.appSettings)==null?void 0:l.site_name)||"TAME APPS"))]),e("h4",{staticClass:"reports-headerspacing"},[t._v("Trial Balance")]),e("h5",[e("span",[t._v("As of")]),t._v("  "+t._s(t.$helper.formatDate(t.newFilter.to))+" ")]),e("span",[t._v("Basis: Accrual")]),e("div",{staticClass:"tags"})]),e("div",{staticClass:"reports-table-wrapper fill-container table-container"},[t.columns==2?e("table",{staticClass:"table tb-comparison-table zi-table financial-comparison table-border table-hover"},[t._m(0),e("tbody",[t._l(t.rows,function(s){return[e("tr",{key:s.id,staticClass:"font-weight-bold"},[e("td",{staticClass:"text-start border-right"},[e("span",[t._v(t._s(s.name))])]),e("td",{attrs:{colspan:"2"}},[t._v(" ")])]),t._l(t.getChildren(s==null?void 0:s.types),function(r,i){return e("AccountRow",{key:i+t.$helper.generateRandomText(8)+r.id,attrs:{spaces:4,row:r}})})]}),e("tr",{staticClass:"font-weight-bold"},[t._m(1),e("td",{staticClass:"text-end"},[e("a",{staticClass:"ember-view",attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.formatMoney(t.totalNetDebits)))])]),e("td",{staticClass:"text-end"},[e("a",{staticClass:"ember-view",attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.formatMoney(t.totalNetCredits)))])])])],2)]):t._e(),t.columns==6?e("table",{staticClass:"table table-bordered"},[t._m(2),e("tbody",[t._l(t.rows,function(s){return t._l(t.getChildren(s==null?void 0:s.types),function(r,i){return e("SixColumnsRow",{key:i+t.$helper.generateRandomText(8)+r.id,attrs:{row:r}})})}),e("tr",{staticClass:"font-weight-bold"},[t._m(3),e("td"),e("td"),e("td"),e("td",{},[e("a",{staticClass:"ember-view",attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.formatMoney(t.totalNetDebits)))])]),e("td",{},[e("a",{staticClass:"ember-view",attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.formatMoney(t.totalNetCredits)))])])])],2)]):t._e()])])])])])])])])},p=[function(){var a=this,t=a._self._c;return t("thead",[t("tr",[t("th",{staticClass:"text-left sortable align-middle whitespace-nowrap border-right",attrs:{rowspan:"1",colspan:"1"}},[t("div",{staticClass:"position-relative"},[t("div",{staticClass:"float-left",attrs:{title:"Account"}},[a._v("Account")])])]),t("th",{staticClass:"text-right sortable align-middle whitespace-nowrap"},[t("div",{staticClass:"position-relative"},[t("div",{staticClass:"",attrs:{title:"DEBIT"}},[a._v("DEBIT")])])]),t("th",{staticClass:"text-right sortable align-middle whitespace-nowrap"},[t("div",{staticClass:"position-relative"},[t("div",{staticClass:"",attrs:{title:"CREDIT"}},[a._v("CREDIT")])])])])])},function(){var a=this,t=a._self._c;return t("td",{staticClass:"text-start border-right"},[t("span",[a._v("Total for Trial Balance")])])},function(){var a=this,t=a._self._c;return t("thead",[t("tr",[t("th",{staticClass:"sortable align-middle whitespace-nowrap",attrs:{rowspan:"2"}},[t("div",{staticClass:"position-relative"},[t("div",{staticClass:""},[a._v("Account Number")])])]),t("th",{staticClass:"sortable align-middle whitespace-nowrap",attrs:{rowspan:"2"}},[t("div",{staticClass:"position-relative"},[t("div",{staticClass:""},[a._v("Account Name")])])]),t("th",{staticClass:"sortable align-middle whitespace-nowrap",attrs:{colspan:"2"}},[t("div",{staticClass:"position-relative"},[t("div",{staticClass:"text-center"},[a._v("Movement")])])]),t("th",{staticClass:"sortable align-middle whitespace-nowrap",attrs:{colspan:"2"}},[t("div",{staticClass:"position-relative"},[t("div",{staticClass:"text-center"},[a._v("Balance")])])])]),t("tr",[t("th",{staticClass:"sortable align-middle whitespace-nowrap"},[t("div",{staticClass:"position-relative"},[t("div",{staticClass:""},[a._v("Debit(In)")])])]),t("th",{staticClass:"sortable align-middle whitespace-nowrap"},[t("div",{staticClass:"position-relative"},[t("div",{staticClass:""},[a._v("Credit(Out)")])])]),t("th",{staticClass:"sortable align-middle whitespace-nowrap"},[t("div",{staticClass:"position-relative"},[t("div",{staticClass:""},[a._v("Debit")])])]),t("th",{staticClass:"sortable align-middle whitespace-nowrap"},[t("div",{staticClass:"position-relative"},[t("div",{staticClass:""},[a._v("Credit")])])])])])},function(){var a=this,t=a._self._c;return t("td",{},[t("span",[a._v("Total")])])}],u=c(v,m,p,!1,null,"f30a4561");const C=u.exports;export{C as default};
