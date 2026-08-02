import{d as N}from"./datatable-mixin-DIc_e2W_.js";import{O as x}from"./OffCanvas-D-RScrHH.js";import{Z as z}from"./ZohoSelect-CDOAvfJ4.js";import{e as c,i as e,k as q,j as I,u as w,v as S,F,q as B,l,c as _,f as m,z as L,A as H,p as V,x as O}from"./vue-CVFchrEh.js";import{_ as U}from"./app-init-DNy9jk7n.js";import"./ReportHeader-D2JjL9xU.js";import"./PeriodPicker-Vr9DrReq.js";import"./jspdf-DpYPBzJl.js";import"./html2canvas-Ge7aVWlp.js";import"./exceljs-D_3E_aRU.js";const W={async handlePrintFrame(t,o={}){try{const{landscape:n=!1,margin:g="10mm",pageSize:v="A4",title:d="Print Document",onBeforePrint:r=null,onAfterPrint:a=null,includeSignature:i=!1,customCSS:u="",watermark:s=null,printerType:f="standard",posOptions:y={width:"80mm",fontSize:"12px",fontFamily:"monospace",lineHeight:"1.4",padding:"5mm"}}=o,P=document.querySelector(t);if(!P)throw new Error(`Element "${t}" not found`);let p=document.querySelector("#printFrame");p||(p=document.createElement("iframe"),p.id="printFrame",p.style.cssText="position:absolute;width:0;height:0;border:none;",document.body.appendChild(p));let b="",E="";f==="standard"&&(document.querySelectorAll("style").forEach(h=>{b+=h.innerHTML}),document.querySelectorAll('link[rel="stylesheet"]').forEach(h=>{E+=`<link rel="stylesheet" href="${h.href}">`}));const $=f.startsWith("pos");let k=y.width;f==="pos-80mm"||f==="pos"?k="80mm":f==="pos-58mm"&&(k="58mm"),$?b+=`
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        @page {
                            size: ${k} auto;
                            margin: 0;
                        }
                        @media print {
                            html, body {
                                width: ${k};
                                margin: 0 !important;
                                padding: 0 !important;
                                overflow: visible !important;
                                font-family: ${y.fontFamily};
                                font-size: ${y.fontSize};
                                line-height: ${y.lineHeight};
                            }
                            body {
                                padding: ${y.padding};
                            }
                            .pos-receipt {
                                width: 100%;
                                max-width: ${k};
                            }
                            /* POS specific utilities */
                            .pos-center { text-align: center; }
                            .pos-left { text-align: left; }
                            .pos-right { text-align: right; }
                            .pos-bold { font-weight: bold; }
                            .pos-large { font-size: 1.2em; }
                            .pos-small { font-size: 0.85em; }
                            .pos-divider {
                                border-top: 1px dashed #000;
                                margin: 5px 0;
                            }
                            .pos-line {
                                display: flex;
                                justify-content: space-between;
                                margin: 2px 0;
                            }
                            .pos-table {
                                width: 100%;
                                border-collapse: collapse;
                            }
                            .pos-table td,
                            .pos-table th {
                                padding: 2px;
                                text-align: left;
                            }
                            .pos-barcode {
                                text-align: center;
                                margin: 10px 0;
                            }
                            .pos-qr {
                                text-align: center;
                                margin: 10px 0;
                            }
                            /* Hide elements not needed in POS print */
                            .no-print,
                            .pos-no-print {
                                display: none !important;
                            }
                            /* Prevent awkward breaks */
                            .pos-keep-together {
                                page-break-inside: avoid;
                            }
                        }
                    `:b+=`
                        @page { 
                            size: ${n?"landscape":v}; 
                            margin: ${g}; 
                        }
                        @media print {
                            html, body { 
                                overflow: visible !important;
                                height: auto !important;
                            }
                            .print_report.v-application { 
                                display: block; 
                                overflow: visible; 
                            }
                            .print_report.v-application .v-application--wrap { 
                                display: block; 
                            }
                            .no-print { 
                                display: none !important; 
                            }
                            .print-keep-together {
                                page-break-inside: avoid;
                            }
                            .print-page-break {
                                page-break-before: always;
                            }
                        }
                    `,b+=u,s&&!$&&(b+=`
                        .print-watermark {
                            position: fixed;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%) rotate(-45deg);
                            font-size: 80px;
                            color: rgba(0, 0, 0, 0.1);
                            z-index: 9999;
                            pointer-events: none;
                            user-select: none;
                            font-weight: bold;
                        }
                    `);const D=p.contentDocument||p.contentWindow.document;D.open();let T;return $?T=`
                        <div class="pos-receipt">
                            ${P.outerHTML}
                        </div>
                    `:T=`
                        <div class="v-application v-application--is-ltr theme--light print_report">
                            ${s?`<div class="print-watermark">${s}</div>`:""}
                            ${P.outerHTML}
                            ${i?this.generateSignature():""}
                        </div>
                    `,D.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="utf-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width,initial-scale=1.0">
                        <title>${d}</title>
                        ${E}
                        <style type="text/css">${b}</style>
                    </head>
                    <body>
                        ${T}
                    </body>
                    </html>
                `),D.close(),await this.waitForResources(p),r&&typeof r=="function"&&r(p),new Promise((C,A)=>{const h=p.contentWindow;h.matchMedia&&h.matchMedia("print").addListener(M=>{M.matches||(a&&typeof a=="function"&&a(p),C(!0))}),h.onafterprint=()=>{a&&typeof a=="function"&&a(p),C(!0)},setTimeout(()=>{try{h.focus(),h.print()}catch(R){A(R)}},$?500:250)})}catch(n){throw console.error("Print error:",n),n}},waitForResources(t){return new Promise(o=>{const n=t.contentDocument||t.contentWindow.document,g=n.querySelectorAll("img");let v=0;const d=g.length;if(d===0){n.fonts?n.fonts.ready.then(o):setTimeout(o,500);return}const r=()=>{v++,v===d&&(n.fonts?n.fonts.ready.then(o):setTimeout(o,500))};g.forEach(a=>{a.complete?r():(a.onload=r,a.onerror=r)})})},generateSignature(){return`
                <div style="margin-top: 40px; page-break-inside: avoid;">
                    <div style="display: flex; justify-content: space-between; margin-top: 60px;">
                        <div style="text-align: center; min-width: 200px;">
                            <div style="border-top: 1px solid #000; padding-top: 5px;">
                                Signature
                            </div>
                            <div style="margin-top: 5px; font-size: 12px; color: #666;">
                                Date: ${new Date().toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                </div>
            `},formatPOSReceipt(t){const{header:o="",items:n=[],footer:g="",total:v=null,showDate:d=!0,showBarcode:r=!1,barcodeValue:a=""}=t;let i='<div class="pos-receipt">';return o&&(i+=`<div class="pos-center pos-bold pos-large">${o}</div>`,i+='<div class="pos-divider"></div>'),d&&(i+=`<div class="pos-center pos-small">${new Date().toLocaleString()}</div>`,i+='<div class="pos-divider"></div>'),n.length>0&&(i+='<table class="pos-table">',n.forEach(u=>{i+=`
                        <tr>
                            <td>${u.name}</td>
                            <td class="pos-right">${u.price}</td>
                        </tr>
                    `,u.qty&&(i+=`
                            <tr class="pos-small">
                                <td colspan="2">${u.qty} x ${u.unitPrice}</td>
                            </tr>
                        `)}),i+="</table>",i+='<div class="pos-divider"></div>'),v&&(i+=`
                    <div class="pos-line pos-bold pos-large">
                        <span>TOTAL</span>
                        <span>${v}</span>
                    </div>
                    <div class="pos-divider"></div>
                `),r&&a&&(i+=`
                    <div class="pos-barcode">
                        <img src="https://bwipjs-api.metafloor.com/?bcid=code128&text=${a}&scale=2&height=10" alt="Barcode">
                        <div class="pos-small">${a}</div>
                    </div>
                `),g&&(i+=`<div class="pos-center pos-small">${g}</div>`),i+="</div>",i}},Q={name:"DetailsReport",mixins:[N],components:{ZohoSelect:z,OffCanvas:x},data:()=>({fetchUrl:"reports/sales-details",destinations:[],selectedItem:null,itemBreakdown:[],loadingBreakdown:!1}),created(){this.$http.get("items/destinations").then(t=>{this.destinations=t.data.rows||[]})},computed:{grandTotal(){return this.rows.reduce((t,o)=>t+Number(o.amount),0)}},methods:{handleDrawerPrint(){W.handlePrintFrame("#detailed-table")},showItemBreakdown(t){this.selectedItem=t,this.itemBreakdown=[],this.loadingBreakdown=!0;const o={item:t.item_id,from:this.newFilter.from,to:this.newFilter.to,breakdown:"daily"};["category","group","origin","branch_id"].forEach(n=>{this.$helper.empty(this.newFilter[n])||(o[n]=this.newFilter[n])}),this.$http.get(this.encodeQuery(this.fetchUrl,o)).then(n=>{this.itemBreakdown=n.data.rows||[]}).finally(()=>{this.loadingBreakdown=!1})},closeItemBreakdown(){this.selectedItem=null,this.itemBreakdown=[],this.loadingBreakdown=!1}}},j={class:"content__boxed"},G={class:"content__wrap"},Y={class:"d-flex align-items-center mb-1"},Z={class:"ms-1"},X=["value"],J={class:"ms-1"},K={class:"ms-1"},ee={class:"ms-1"},te={class:"ms-1"},oe={class:"card"},se={class:"card-body"},le={class:"table-responsive",id:"PaginationTable"},ne={class:"table table-striped table-sm"},ie=["onClick"],ae={class:"fw-bolder"},re={class:"fw-bolder"},de={class:"fw-bolder"},pe={class:"fw-bolder"},me={class:"fw-bolder"},ce={class:"d-flex ms-auto"},ue={id:"detailed-table"},fe={class:"mb-3"},he={class:"fw-semibold"},ge={key:0},ve={class:"row g-3 mb-3"},ye={class:"col-4"},be={class:"fw-semibold"},we={class:"col-4"},ke={class:"fw-semibold"},$e={class:"col-4"},Se={class:"fw-semibold"},Fe={key:0,class:"py-4 text-center text-muted"},_e={key:1,class:"table-responsive"},Pe={class:"table table-sm align-middle"},De={class:"text-center"},Te={class:"text-primary fw-semibold text-center"},Ce={class:"text-danger fw-semibold text-center"},Ie={class:"text-danger fw-semibold"},Be={key:0};function Ee(t,o,n,g,v,d){const r=_("zoho-select"),a=_("ReportHeader"),i=_("pagination"),u=_("off-canvas");return m(),c(F,null,[e("div",j,[e("div",G,[w(a,{title:"Details Report",onFiltered:t.handlePaginationFilter,onDatesSelected:t.setDateFilter,onExported:t.handleExportAction},{filters:S(()=>[e("div",Y,[e("div",Z,[o[7]||(o[7]=e("label",{for:""},"Group:",-1)),L(e("select",{"onUpdate:modelValue":o[0]||(o[0]=s=>t.newFilter.group=s),class:"form-control form-select"},[o[6]||(o[6]=e("option",{value:"undefined",hidden:"",disabled:""},"ALL",-1)),(m(!0),c(F,null,B(t.destinations,s=>(m(),c("option",{value:s.code,key:s.id},l(s.name),9,X))),128))],512),[[H,t.newFilter.group]])]),e("div",J,[o[8]||(o[8]=e("label",{for:""},"Category:",-1)),w(r,{url:"items/types",label:"name","primary-key":"id",placeholder:"select Category",modelValue:t.newFilter.category,"onUpdate:modelValue":o[1]||(o[1]=s=>t.newFilter.category=s),"fetch-flag":"SEARCHING_FOR_TYPES"},null,8,["modelValue"])]),e("div",K,[o[9]||(o[9]=e("label",{for:""},"Item:",-1)),w(r,{url:"items/search",label:"name","primary-key":"id",placeholder:"select item",modelValue:t.newFilter.item,"onUpdate:modelValue":o[2]||(o[2]=s=>t.newFilter.item=s),"fetch-flag":"SEARCHING_FOR_ITEMS"},null,8,["modelValue"])]),e("div",ee,[o[10]||(o[10]=e("label",{for:""},"Waiter:",-1)),w(r,{url:"users/search?role=waiters",label:"name","primary-key":"id",placeholder:"Select a waiter",modelValue:t.newFilter.waiter,"onUpdate:modelValue":o[3]||(o[3]=s=>t.newFilter.waiter=s),"fetch-flag":"SEARCHING_FOR_WAITERS"},null,8,["modelValue"])]),e("div",te,[o[11]||(o[11]=e("label",{for:""},"Cashier:",-1)),w(r,{url:"users/search?role=cashiers",label:"name","primary-key":"id",placeholder:"select cashier",modelValue:t.newFilter.cashier,"onUpdate:modelValue":o[4]||(o[4]=s=>t.newFilter.cashier=s),"fetch-flag":"SEARCHING_FOR_CASHIERS"},null,8,["modelValue"])])])]),_:1},8,["onFiltered","onDatesSelected","onExported"]),e("div",oe,[e("div",se,[e("div",le,[e("table",ne,[o[17]||(o[17]=e("thead",null,[e("tr",null,[e("th",null,"S/N"),e("th",null,"Item Description"),e("th",null,"Category"),e("th",null,"Source"),e("th",null,"Quantity"),e("th",null,"Unity Price"),e("th",null,"Total Amount")])],-1)),e("tbody",null,[(m(!0),c(F,null,B(t.rows,(s,f)=>(m(),c("tr",{key:s.item_id},[e("td",null,[e("span",null,l(f+1),1)]),e("td",null,[e("a",{class:"btn-link",href:"javascript:void(0)",onClick:V(y=>d.showItemBreakdown(s),["prevent"])},l(s?.item?.name),9,ie)]),e("td",null,[e("span",ae,l(s.item?.type),1)]),e("td",null,[e("span",re,l(s.item.group),1)]),e("td",null,[e("span",null,l(t.$helper.formatNumber(s.quantity))+" "+l(s.item.unit),1)]),e("td",null,[e("span",de,l(t.formatMoney(s.price)),1)]),e("td",null,[e("span",pe,l(t.formatMoney(s.amount)),1)])]))),128)),e("tr",null,[o[12]||(o[12]=e("td",null,null,-1)),o[13]||(o[13]=e("td",null,null,-1)),o[14]||(o[14]=e("td",null,null,-1)),o[15]||(o[15]=e("td",null,null,-1)),o[16]||(o[16]=e("td",null,[e("span",null,"Total:")],-1)),e("td",null,[e("span",me,l(t.formatMoney(d.grandTotal)),1)])])])])]),w(i,{from:t.recordsFrom,to:t.recordsTo,current_page:t.currentPage,row_count_page:t.rowCountPage,onPageUpdate:t.handlePagination,total_records:t.totalRows,page_range:t.pageRange},null,8,["from","to","current_page","row_count_page","onPageUpdate","total_records","page_range"])])])])]),t.selectedItem?(m(),q(u,{key:0,onClose:d.closeItemBreakdown,position:"end stock-offcanvas"},{head:S(()=>[e("span",null,l(t.selectedItem?.item?.name||"Item Details"),1)]),tools:S(()=>[e("div",ce,[e("a",{href:"#",onClick:o[5]||(o[5]=V((...s)=>d.handleDrawerPrint&&d.handleDrawerPrint(...s),["prevent"]))},[...o[18]||(o[18]=[e("i",{class:"uil uil-print fs-4"},null,-1)])])])]),body:S(()=>[e("div",ue,[e("div",fe,[o[19]||(o[19]=e("div",{class:"small text-muted"},"Selected Range",-1)),e("div",he,[O(l(t.$helper.formatDate(t.newFilter.from))+" ",1),t.newFilter.to&&t.newFilter.to!==t.newFilter.from?(m(),c("span",ge," - "+l(t.$helper.formatDate(t.newFilter.to)),1)):I("",!0)])]),e("div",ve,[e("div",ye,[o[20]||(o[20]=e("div",{class:"small text-muted"},"Total Qty",-1)),e("div",be,l(t.$helper.formatNumber(t.selectedItem.quantity||0)),1)]),e("div",we,[o[21]||(o[21]=e("div",{class:"small text-muted"},"Avg Price",-1)),e("div",ke,l(t.formatMoney(t.selectedItem.price||0)),1)]),e("div",$e,[o[22]||(o[22]=e("div",{class:"small text-muted"},"Total Amount",-1)),e("div",Se,l(t.formatMoney(t.selectedItem.amount||0)),1)])]),t.loadingBreakdown?(m(),c("div",Fe,"Loading item sales breakdown...")):(m(),c("div",_e,[e("table",Pe,[o[24]||(o[24]=e("thead",null,[e("tr",null,[e("th",null,"Date"),e("th",{class:"text-center"},"Trx #"),e("th",{class:"text-center"},"Sold Qty"),e("th",{class:"text-danger text-center"},"Del. Qty"),e("th",null,"Avg Price"),e("th",null,"Total Amount"),e("th",{class:"text-danger"},"Del. Total")])],-1)),e("tbody",null,[(m(!0),c(F,null,B(t.itemBreakdown,(s,f)=>(m(),c("tr",{key:`${s.sale_date}-${f}`},[e("td",null,l(t.$helper.formatDate(s.sale_date)),1),e("td",De,l(t.$helper.formatNumber(s.sales_count||0)),1),e("td",Te,l(t.$helper.formatNumber(s.quantity||0)),1),e("td",Ce,l(t.$helper.formatNumber(s.deleted_quantity||0)),1),e("td",null,l(t.formatMoney(s.price||0)),1),e("td",null,l(t.formatMoney(s.amount||0)),1),e("td",Ie,l(t.formatMoney(s.deleted_amount||0)),1)]))),128)),t.itemBreakdown.length?I("",!0):(m(),c("tr",Be,[...o[23]||(o[23]=[e("td",{colspan:"7",class:"py-4 text-center text-muted"}," No sales found for this item in the selected range. ",-1)])]))])])]))])]),_:1},8,["onClose"])):I("",!0)],64)}const Oe=U(Q,[["render",Ee]]);export{Oe as default};
