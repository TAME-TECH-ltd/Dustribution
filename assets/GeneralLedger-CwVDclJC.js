import{n,k as o,f as l}from"./index-CsibAE9i.js";import"./vue-D6wRlwRH.js";import"./apexcharts-BR9v9DBQ.js";import"./jspdf-Bb1N-i58.js";const c={name:"GeneralLedger",mixins:[o],components:{AccountRow:{name:"AccountRow",mixins:[o],components:{},props:["row"],template:`
      <div style="display: contents">
        <tr>
          <td class="text-start border-right">{{ row.formatted_name }}</td>
          <td class="text-end">
            <RouterLink class="ember-view" :to="viewDetails(row.row_index)"
              >{{ formatMoney(row.debits) }}</RouterLink
            >
          </td>
          <td class="text-end">
            <RouterLink class="ember-view" :to="viewDetails(row.row_index)"
              >{{ formatMoney(-Number(row.credits)) }}</RouterLink
            >
          </td>
          <td class="text-end">
            <RouterLink class="ember-view" :to="viewDetails(row.row_index)"
              >{{ row.balance == 0 ? formatMoney(row.balance) : Number(row.debits) > -Number(row.credits) ? formatMoney(row.balance) : '(' + formatMoney(-Number(row.balance)) + ')' }}</RouterLink
            >
          </td>
        </tr>
        <template v-if="row.children">
          <AccountRow
            v-for="(child, index) in row.children"
            :key="$helper.generateRandomText(8) + child.id"
            :row="child"
          />
        </template>
        </div>
      `}},data:()=>({fetchUrl:"reports/accounts/general-ledger",rows:[]}),computed:{},created(){this.getData(l(this.fetchUrl,this.newFilter))},methods:{calculateTotal(a){let t=0;const e=a.flatMap(s=>s.kids),i=s=>{s.forEach(r=>{t+=Number(r.balance),r.kids&&i(r.kids)})};return i(e),t},getData(a){this.$http.get(a).then(t=>{this.rows=t.data})}}};var d=function(){var i;var t=this,e=t._self._c;return e("section",{staticClass:"container-fluids"},[e("div",{staticClass:"nk-content-inner"},[e("div",{staticClass:"nk-content-body"},[e("div",{staticClass:"mx-0"},[e("div",{staticClass:"card card-stretch"},[e("div",{staticClass:"card-inner-group"},[e("div",{staticClass:"nk-block-head nk-block-head-sm"},[e("div",{staticClass:"nk-block-between"},[e("div",{staticClass:"nk-block-head-content"},[e("div",{staticClass:"toggle-wrap nk-block-tools-toggle"},[e("div",{staticClass:"toggle-expand-content"},[e("ul",{staticClass:"nk-block-tools g-1 float-right"},[e("li",[e("PeriodPicker",{attrs:{period:t.currentPeriod},on:{selected:t.handleDatesFilter}})],1)])])])]),e("div",{staticClass:"nk-block-head-content"},[e("div",{staticClass:"toggle-wrap nk-block-tools-toggle"},[e("div",{staticClass:"toggle-expand-content"},[e("ul",{staticClass:"nk-block-tools g-1 float-right"},[e("li",[e("button",{staticClass:"btn btn-icon btn-white btn-dim btn-outline-light",attrs:{type:"button"},on:{click:function(s){return t.$helper.handlePrint(".nk-block")}}},[e("em",{staticClass:"icon ni ni-printer"})])])])])])])])]),e("div",{staticClass:"nk-block"},[e("div",{staticClass:"page-header notranslate text-center"},[e("h6",[t._v(t._s(((i=t.appSettings)==null?void 0:i.site_name)||"TAME APPS"))]),e("h4",{staticClass:"reports-headerspacing"},[t._v("General Ledger")]),e("h5",[e("span",[t._v("From")]),t._v(" "+t._s(t.$helper.formatDate(t.newFilter.from))+" "),e("span",[t._v("To")]),t._v("  "+t._s(t.$helper.formatDate(t.newFilter.to))+" ")]),e("span",[t._v("Basis: Accrual")]),e("div",{staticClass:"tags"})]),e("div",{staticClass:"reports-table-wrapper fill-container table-container"},[e("table",{staticClass:"table tb-comparison-table zi-table financial-comparison table-no-border table-hover"},[t._m(0),e("tbody",t._l(t.rows,function(s){return e("AccountRow",{key:t.$helper.generateRandomText(8)+s.id,attrs:{row:s}})}),1)])])])])])])])])])},p=[function(){var a=this,t=a._self._c;return t("thead",[t("tr",[t("th",{staticClass:"text-left sortable align-middle whitespace-nowrap border-right",attrs:{rowspan:"1",colspan:"1"}},[t("div",{staticClass:"position-relative"},[t("div",{staticClass:"float-left",attrs:{title:"Account"}},[a._v("Account")])])]),t("th",{staticClass:"text-right sortable align-middle whitespace-nowrap"},[t("div",{staticClass:"position-relative"},[t("div",{staticClass:"",attrs:{title:"DEBIT"}},[a._v("DEBIT")])])]),t("th",{staticClass:"text-right sortable align-middle whitespace-nowrap"},[t("div",{staticClass:"position-relative"},[t("div",{staticClass:"",attrs:{title:"CREDIT"}},[a._v("CREDIT")])])]),t("th",{staticClass:"text-right sortable align-middle whitespace-nowrap"},[t("div",{staticClass:"position-relative"},[t("div",{staticClass:"",attrs:{title:"BALANCE"}},[a._v("BALANCE")])])])])])}],v=n(c,d,p,!1,null,"f99b8644");const u=v.exports;export{u as default};
