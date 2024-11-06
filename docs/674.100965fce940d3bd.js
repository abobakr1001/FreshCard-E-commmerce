"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[674],{1731:(f,p,a)=>{a.d(p,{J:()=>g});var c=a(5619);const i_baseUrlData="https://ecommerce.routemisr.com/api/v1";var _=a(9468),m=a(9862),t=a(2425);let g=(()=>{class l{constructor(e,o){this._HttpClient=e,this._ToastrService=o,this.cartNumber=new c.X(0),this.whishNumber=new c.X(0),this.whishList=new c.X([])}getUserOrders(e){return this._HttpClient.get(i_baseUrlData+"/orders/user/"+e)}addToCart(e){this.sendToCart(e).subscribe({next:o=>{"success"===o.status&&(this._ToastrService.success(o.message),this.cartNumber.next(o.numOfCartItems))}})}SetcheckOut(e,o){return this._HttpClient.post(i_baseUrlData+`/orders/checkout-session/${e}?url=https://ahmed-menisy.github.io/FreshCart`,o)}getProducts(e=1){return this._HttpClient.get(i_baseUrlData+`/products?page=${e}`)}getProductById(e){return this._HttpClient.get(i_baseUrlData+"/products/"+e)}getCategories(){return this._HttpClient.get(i_baseUrlData+"/categories")}getCategoriesById(e){return this._HttpClient.get(i_baseUrlData+"/categories/"+e)}getSubCategoriesToCat(e){return this._HttpClient.get(i_baseUrlData+`/categories/${e}/subcategories`)}sendToCart(e){return this._HttpClient.post(i_baseUrlData+"/cart",{productId:e})}getCartData(){return this._HttpClient.get(i_baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(i_baseUrlData+"/cart")}updatePoductCount(e,o){return this._HttpClient.put(i_baseUrlData+"/cart/"+e,{count:o})}deletePoductCart(e){return this._HttpClient.delete(i_baseUrlData+"/cart/"+e)}getBrands(e=1){return this._HttpClient.get(i_baseUrlData+`/brands?page=${e}`)}getBrandData(e){return this._HttpClient.get(i_baseUrlData+`/brands/${e}`)}setWishlist(e){return this._HttpClient.post(i_baseUrlData+"/wishlist",{productId:e})}removeWishlist(e){return this._HttpClient.delete(i_baseUrlData+`/wishlist/${e}`)}getWishlist(){return this._HttpClient.get(i_baseUrlData+"/wishlist")}setAddresses(e){return this._HttpClient.post(i_baseUrlData+"/addresses",e)}getAddresses(){return this._HttpClient.get(i_baseUrlData+"/addresses")}removeAddresses(e){return this._HttpClient.delete(i_baseUrlData+`/addresses/${e}`)}static#t=this.\u0275fac=function(o){return new(o||l)(_.LFG(m.eN),_.LFG(t._W))};static#e=this.\u0275prov=_.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},3674:(f,p,a)=>{a.r(p),a.d(p,{WhishlistComponent:()=>D});var c=a(6814),i=a(2956),_=a(2425),m=a(1651),t=a(9468),g=a(1731);function l(r,h){1&r&&t._UZ(0,"i",21)}function v(r,h){if(1&r&&(t.TgZ(0,"li"),t.YNc(1,l,1,0,"i",20),t.qZA()),2&r){const s=h.$implicit,n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",s<=n.ratingsAverage)}}function e(r,h){1&r&&(t.TgZ(0,"li"),t._UZ(1,"i",22),t.qZA())}const o=function(r){return["/products",r]},x=function(){return[1,2,3,4,5]};function U(r,h){if(1&r){const s=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"div",6)(3,"span",7),t.NdJ("click",function(){const d=t.CHM(s).$implicit,C=t.oxw(2);return t.KtG(C.removeFromWhish(d._id))}),t._UZ(4,"i",8),t.qZA(),t.TgZ(5,"header",9),t._UZ(6,"img",10),t.TgZ(7,"h4",11),t._uU(8),t.qZA(),t.TgZ(9,"h3",12),t._uU(10),t.ALo(11,"cuttext"),t.qZA()(),t.TgZ(12,"footer",13)(13,"span",14),t._uU(14),t.ALo(15,"currency"),t.qZA(),t.TgZ(16,"div",15)(17,"ul",16),t.YNc(18,v,2,1,"li",17),t.YNc(19,e,2,0,"li",18),t.qZA(),t.TgZ(20,"span"),t._uU(21),t.qZA()()()(),t.TgZ(22,"button",19),t.NdJ("click",function(){const d=t.CHM(s).$implicit,C=t.oxw(2);return t.KtG(C.addToCart(d._id))}),t._uU(23," + Add To Cart "),t.qZA()()()}if(2&r){const s=h.$implicit;t.xp6(5),t.Q6J("routerLink",t.VKq(15,o,s._id)),t.xp6(1),t.Q6J("src",s.imageCover,t.LSH)("alt",s.title),t.xp6(2),t.Oqu(s.category.name),t.xp6(2),t.Oqu(t.xi3(11,9,s.title,3)),t.xp6(4),t.hij(" ",t.xi3(15,12,s.price,"EGP")," "),t.xp6(4),t.Q6J("ngForOf",t.DdM(17,x)),t.xp6(1),t.Q6J("ngIf",s.ratingsAverage%1!=0),t.xp6(2),t.hij(" ",s.ratingsAverage," ")}}function b(r,h){if(1&r&&(t.TgZ(0,"section")(1,"div",2),t.YNc(2,U,24,18,"div",3),t.qZA()()),2&r){const s=t.oxw();t.xp6(2),t.Q6J("ngForOf",s.whishList)}}function T(r,h){1&r&&(t.TgZ(0,"h1",23),t._uU(1,"Your WhishList Is Empty..."),t.qZA())}let D=(()=>{class r{constructor(s,n){this._EcomdataService=s,this._ToastrService=n,this.whishList=[]}ngOnInit(){this._EcomdataService.getWishlist().subscribe({next:s=>{"success"===s.status&&(this.whishList=s.data,this._EcomdataService.whishNumber.next(s.data.length))}})}addToCart(s){this._EcomdataService.addToCart(s)}removeFromWhish(s){this._EcomdataService.removeWishlist(s).subscribe({next:n=>{"success"===n.status&&(this._ToastrService.success(n.message,"",{positionClass:"toast-bottom-right"}),this.whishList=this.whishList.filter(u=>n.data.includes(u._id)),this._EcomdataService.whishNumber.next(this.whishList.length))}})}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(g.J),t.Y36(_._W))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-whishlist"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["whish",""],[1,"row","row-cols-1","row-cols-md-2","row-cols-lg-4","row-cols-xl-6","justify-content-center"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[1,"product"],[1,"ptorcut-area","position-relative"],["role","button",1,"heart",3,"click"],[1,"fa-solid","fa-heart-crack"],["role","button",3,"routerLink"],["loading","lazy",1,"w-100",3,"src","alt"],[1,"h6","font-sm","text-main"],[1,"h6","small"],[1,"hstack","justify-content-between"],[1,"small"],[1,"d-flex","font-sm","align-items-center"],[1,"d-flex","mb-0","list-unstyled"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"add-btn","main-btn","w-100",3,"click"],["class","fas fa-star rating-color",4,"ngIf"],[1,"fas","fa-star","rating-color"],[1,"fas","fa-star-half","rating-color"],[1,"text-center","my-3","display-3"]],template:function(n,u){if(1&n&&(t.YNc(0,b,3,1,"section",0),t.YNc(1,T,2,0,"ng-template",null,1,t.W1O)),2&n){const d=t.MAs(2);t.Q6J("ngIf",u.whishList.length)("ngIfElse",d)}},dependencies:[c.ez,c.sg,c.O5,c.H9,i.rH,m.r,_.Rh],styles:[".product[_ngcontent-%COMP%]:hover   .heart[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.product[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%]{position:absolute;top:5px;right:5px;z-index:99;font-size:40px;color:#0aad0a;opacity:0;transform:translateY(20px);transition:opacity 1s,transform 1s}"]})}return r})()}}]);