"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{3195:(_,c,a)=>{a.d(c,{r:()=>l});var t=a(8256),s=a(4374),i=a(6895);function p(e,d){if(1&e){const n=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.addProduct())}),t._uU(1," Add to Cart "),t.qZA()}}function m(e,d){if(1&e){const n=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.removeProduct())}),t._uU(1," Remove cart "),t.qZA()}}let l=(()=>{class e{constructor(n){this.shoppingCartService=n,this.onAddCard=new t.vpe,this.onRemoveCard=new t.vpe}isInCart(){return this.shoppingCartService.cart.some(n=>n._id===this.dataCard._id)}addProduct(){this.onAddCard.emit(this.dataCard)}removeProduct(){this.onRemoveCard.emit(this.dataCard._id)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.F))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card-products"]],inputs:{dataCard:"dataCard"},outputs:{onAddCard:"onAddCard",onRemoveCard:"onRemoveCard"},decls:17,vars:8,consts:[[1,"card"],[1,"card-body"],[1,"mt-3","pt-1"],[1,"text-muted","mb-0"],[1,"mdi","mdi-phone","font-size-15","align-middle","pe-2","text-primary"],[1,"text-muted","mb-0","mt-2"],[1,"mdi","font-size-15","align-middle","pe-2","text-primary"],[1,"d-flex","gap-2","pt-4"],["type","button","class","btn btn-primary btn-sm w-50",3,"click",4,"ngIf","ngIfElse"],["remove",""],["type","button",1,"btn","btn-primary","btn-sm","w-50",3,"click"],["type","button",1,"btn","btn-danger","btn-sm","w-50",3,"click"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),t._UZ(4,"i",4),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._UZ(7,"i",6),t._uU(8),t.qZA(),t.TgZ(9,"p",5),t._UZ(10,"i",6),t._uU(11),t.ALo(12,"currency"),t.qZA()(),t.TgZ(13,"div",7),t.YNc(14,p,2,0,"button",8),t.YNc(15,m,2,0,"ng-template",null,9,t.W1O),t.qZA()()()),2&n){const r=t.MAs(16);t.xp6(5),t.hij(" ",o.dataCard.name,""),t.xp6(3),t.hij(" ",o.dataCard.brand,""),t.xp6(3),t.hij(" ",t.xi3(12,5,o.dataCard.price,"S/"),""),t.xp6(3),t.Q6J("ngIf",!o.isInCart())("ngIfElse",r)}},dependencies:[i.O5,i.H9],styles:[".card[_ngcontent-%COMP%]{margin-bottom:24px;box-shadow:0 2px 3px #e4e8f0}.card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #eff0f2;border-radius:1rem}.avatar-md[_ngcontent-%COMP%]{height:4rem;width:4rem}.rounded-circle[_ngcontent-%COMP%]{border-radius:50%!important}.img-thumbnail[_ngcontent-%COMP%]{padding:.25rem;background-color:#f1f3f7;border:1px solid #eff0f2;border-radius:.75rem}.avatar-title[_ngcontent-%COMP%]{align-items:center;background-color:#3b76e1;color:#fff;display:flex;font-weight:500;height:100%;justify-content:center;width:100%}.bg-soft-primary[_ngcontent-%COMP%]{background-color:#3b76e140!important}a[_ngcontent-%COMP%]{text-decoration:none!important}.badge-soft-danger[_ngcontent-%COMP%]{color:#f56e6e!important;background-color:#f56e6e1a}.badge-soft-success[_ngcontent-%COMP%]{color:#63ad6f!important;background-color:#63ad6f1a}.mb-0[_ngcontent-%COMP%]{margin-bottom:0!important}.badge[_ngcontent-%COMP%]{display:inline-block;padding:.25em .6em;font-size:75%;font-weight:500;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.75rem}"]}),e})()}}]);