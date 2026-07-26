import{e as b}from"./chunk-7YSDGWT6.js";import{a as c}from"./chunk-NMVRNE5J.js";import{w as y}from"./chunk-GREUBMOM.js";import{L as d,P as h,T as l,sc as u}from"./chunk-BA3TZSAK.js";var E=(()=>{let i=class i{constructor(e,t,a){this.apiService=e,this.router=t,this.http=a}confirm(e){let t=document.createElement("div");t.setAttribute("id","alert-container");let a=` <div
      class="modal fade show"
      id="modal-default"
      tabindex="-1"
      role="dialog"
      style="display: block"
    >
      <div
        class="modal-dialog modal-s modal-dialog-centered"
        role="document"
      >
        <div class="modal-content confirm-dialog" style="border-color: transparent">
          <div class="modal-header  py-0 px-3">
            <h5 class="modal-title">
              ${e.title}
            </h5>
            <a
              href="javascript:void(0)"
              class="close text-dark"
            >
            <svg height="18px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
              </a>
          </div>

          <div class="modal-body text-left h6 mb-0">
              ${e.content}
          </div>
          <div class="px-3">
            <button
              type="button"
              class="mr-auto ${e.classes||"btn btn-danger"}"
              id="action-btn"
            >
              <span id="action-text">${e.actionText||"Yes, Continue"}</span>
              <p id="alert-loading"><span></span><span></span><span></span></p>
            <button
              type="button"
              class="btn btn-light ms-2"
              id="close-btn"
            >
            <span>${e.closeText||"Cancel"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>`;t.innerHTML=a,t.querySelector(".close").addEventListener("click",()=>{document.querySelector("#alert-container").remove()}),t.querySelector("#close-btn").addEventListener("click",()=>{document.querySelector("#alert-container").remove()}),t.querySelector("#action-btn").addEventListener("click",()=>{this.apiService.onGoingRequestFlag="HANDLING_MODAL_REQUEST",this.apiService.isConfirmRequest=!0,t.querySelector("#action-text").remove(),t.querySelector("#alert-loading").classList.add("d-block"),e.action()}),document.body.prepend(t)}navigateTo(e){this.router.navigate([{outlets:{primary:e}}])}getGlobalSettings(){return this.http.get("preloaders").pipe(d(e=>{this.preloaders=e}))}getSiteLogo(){let e=this.preloaders?.settings?.site_logo;return e?`${c.uploadsURL+e}`:`${c.publicPath}assets/logo.png`}printElement(e,t=!1,a=!1){let f=document.querySelector(e),g=document.querySelector("#printFrame"),n="",p=document.querySelectorAll("style");for(let o=0;o<p.length;o++)n+=p[o].innerHTML;let v="",m=document.querySelectorAll('link[rel="stylesheet"]');for(let o=0;o<m.length;o++)v+='<link rel="stylesheet" href="'+m[o].href+'">';n+="@page { size: "+(a?"landscape":"A4")+"; margin: 10mm; }html,body { overflow: visible !important; }.print_report.v-application { display: block; overflow: visible; }.print_report.v-application .v-application--wrap { display: block; }";let s=g.contentDocument;s.open(),s.write('<!DOCTYPE html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1.0">'+v+'<style type="text/css">'+n+"</style></head>");let w=t?`
      <div class="nk-notes mt-5 d-print">
              <div class="row">
                <div class="col-6">
                  <div class="d-flex w-100 flex-nowrap mb-5">
                    <h6 class="mb-0">
                      <b>Prepared by:</b>
                    </h6>
                    <div class="dots-after"></div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="d-flex w-100 flex-nowrap mb-5">
                    <h6 class="mb-0">
                      <b>Reviewed by:</b>
                    </h6>
                    <div class="dots-after"></div>
                  </div>
                </div>

                <div class="col-6"></div>
                <div class="col-6">
                  <div class="d-flex w-100 flex-nowrap mb-5">
                    <h6 class="mb-0">
                      <b>Approved By:</b>
                    </h6>
                    <div class="dots-after"></div>
                  </div>
                </div>
              </div>
            </div>
    `:"";s.write('<body onload="window.print();"><div class="v-application v-application--is-ltr theme--light print_report">'+f.outerHTML+w+"</div></body></html>"),s.close()}closeWorkingDay(){return this.http.get("settings/close-working-day").pipe(d(e=>{this.preloaders.system_date=e.system_date,this.preloaders.isDayActive=!0}))}};i.\u0275fac=function(t){return new(t||i)(l(y),l(b),l(u))},i.\u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"});let r=i;return r})();export{E as a};
