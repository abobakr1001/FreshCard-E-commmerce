"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[290],{1731:(b,p,n)=>{n.d(p,{J:()=>C});var d=n(5619);const a_baseUrlData="https://ecommerce.routemisr.com/api/v1";var m=n(9468),t=n(9862),h=n(2425);let C=(()=>{class _{constructor(e,c){this._HttpClient=e,this._ToastrService=c,this.cartNumber=new d.X(0),this.whishNumber=new d.X(0),this.whishList=new d.X([])}getUserOrders(e){return this._HttpClient.get(a_baseUrlData+"/orders/user/"+e)}addToCart(e){this.sendToCart(e).subscribe({next:c=>{"success"===c.status&&(this._ToastrService.success(c.message),this.cartNumber.next(c.numOfCartItems))}})}SetcheckOut(e,c){return this._HttpClient.post(a_baseUrlData+`/orders/checkout-session/${e}?url=https://ahmed-menisy.github.io/FreshCart`,c)}getProducts(e=1){return this._HttpClient.get(a_baseUrlData+`/products?page=${e}`)}getProductById(e){return this._HttpClient.get(a_baseUrlData+"/products/"+e)}getCategories(){return this._HttpClient.get(a_baseUrlData+"/categories")}getCategoriesById(e){return this._HttpClient.get(a_baseUrlData+"/categories/"+e)}getSubCategoriesToCat(e){return this._HttpClient.get(a_baseUrlData+`/categories/${e}/subcategories`)}sendToCart(e){return this._HttpClient.post(a_baseUrlData+"/cart",{productId:e})}getCartData(){return this._HttpClient.get(a_baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(a_baseUrlData+"/cart")}updatePoductCount(e,c){return this._HttpClient.put(a_baseUrlData+"/cart/"+e,{count:c})}deletePoductCart(e){return this._HttpClient.delete(a_baseUrlData+"/cart/"+e)}getBrands(e=1){return this._HttpClient.get(a_baseUrlData+`/brands?page=${e}`)}getBrandData(e){return this._HttpClient.get(a_baseUrlData+`/brands/${e}`)}setWishlist(e){return this._HttpClient.post(a_baseUrlData+"/wishlist",{productId:e})}removeWishlist(e){return this._HttpClient.delete(a_baseUrlData+`/wishlist/${e}`)}getWishlist(){return this._HttpClient.get(a_baseUrlData+"/wishlist")}setAddresses(e){return this._HttpClient.post(a_baseUrlData+"/addresses",e)}getAddresses(){return this._HttpClient.get(a_baseUrlData+"/addresses")}removeAddresses(e){return this._HttpClient.delete(a_baseUrlData+`/addresses/${e}`)}static#t=this.\u0275fac=function(c){return new(c||_)(m.LFG(t.eN),m.LFG(h._W))};static#e=this.\u0275prov=m.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()},5290:(b,p,n)=>{n.r(p),n.d(p,{CartComponent:()=>c});var d=n(6814),a=n(2956),m=n(1651),t=n(9468),h=n(1731);function C(i,g){if(1&i){const r=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"div",14),t._UZ(3,"img",15),t.TgZ(4,"div",16)(5,"h3",17),t._uU(6),t.ALo(7,"cuttext"),t.qZA(),t.TgZ(8,"span",18),t._uU(9),t.qZA(),t.TgZ(10,"button",19),t.NdJ("click",function(){const o=t.CHM(r).$implicit,u=t.oxw(2);return t.KtG(u.deleteProduct(o.product._id))}),t._UZ(11,"i",7),t.TgZ(12,"span"),t._uU(13,"Remove"),t.qZA()()()()(),t.TgZ(14,"div",20)(15,"div",21)(16,"button",22),t.NdJ("click",function(){const o=t.CHM(r).$implicit,u=t.oxw(2);return t.KtG(u.changeCount(1,o.count,o.product._id))}),t._uU(17," + "),t.qZA(),t.TgZ(18,"span"),t._uU(19),t.qZA(),t.TgZ(20,"button",22),t.NdJ("click",function(){const o=t.CHM(r).$implicit,u=t.oxw(2);return t.KtG(u.changeCount(-1,o.count,o.product._id))}),t._uU(21," - "),t.qZA()()(),t._UZ(22,"hr",23),t.qZA()}if(2&i){const r=g.$implicit;t.xp6(3),t.Q6J("src",r.product.imageCover,t.LSH)("alt",r.product.title),t.xp6(3),t.Oqu(t.xi3(7,5,r.product.title,10)),t.xp6(3),t.hij("Price: ",r.price," "),t.xp6(10),t.hij(" ",r.count," ")}}const _=function(i){return{userid:i}};function v(i,g){if(1&i){const r=t.EpF();t.TgZ(0,"section",4)(1,"h1",5),t._uU(2,"Shop Cart"),t.qZA(),t.TgZ(3,"button",6),t.NdJ("click",function(){t.CHM(r);const l=t.oxw();return t.KtG(l.clearCart())}),t._UZ(4,"i",7),t._uU(5," Clear Cart "),t.qZA(),t.TgZ(6,"span",8),t._uU(7),t.qZA(),t.YNc(8,C,23,8,"div",9),t.TgZ(9,"button",10),t._uU(10," Online Payment "),t._UZ(11,"img",11),t.qZA()()}if(2&i){const r=t.oxw();t.xp6(7),t.hij(" Total Price :",r.totalCartPrice," "),t.xp6(1),t.Q6J("ngForOf",r.cartDetails),t.xp6(1),t.Q6J("queryParams",t.VKq(3,_,r.userId))}}function e(i,g){1&i&&(t.TgZ(0,"h2",24),t._uU(1,"Your Cart Is Empty..."),t.qZA())}let c=(()=>{class i{constructor(r){this._EcomdataService=r,this.cartDetails=[],this.totalCartPrice=0,this.userId=""}ngOnInit(){this._EcomdataService.getCartData().subscribe({next:r=>{"success"===r.status&&(this.cartDetails=r.data.products,this.totalCartPrice=r.data.totalCartPrice,this._EcomdataService.cartNumber.next(r.numOfCartItems),this.userId=r.data._id)},error:r=>{console.log(r.error.message)}})}changeCount(r,s,l){const o=s+r;o>0&&this._EcomdataService.updatePoductCount(l,o).subscribe({next:u=>{"success"===u.status&&(this.cartDetails=u.data.products,this.totalCartPrice=u.data.totalCartPrice)}})}deleteProduct(r){this._EcomdataService.deletePoductCart(r).subscribe({next:s=>{"success"===s.status&&(this.cartDetails=s.data.products,this.totalCartPrice=s.data.totalCartPrice,this._EcomdataService.cartNumber.next(s.numOfCartItems))}})}clearCart(){this._EcomdataService.clearCart().subscribe({next:r=>{"success"===r.message&&(this.cartDetails=[],this._EcomdataService.cartNumber.next(0))}})}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(h.J))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:6,vars:2,consts:[["class","bg-main-light p-4 w-75 mx-auto rounded shadow cart-area",4,"ngIf","ngIfElse"],["cartMsg",""],[1,"border","rounded","shadow-sm","p-3","mt-5","mx-auto","w-50"],["routerLink","/allorders",1,"main-btn","w-100"],[1,"bg-main-light","p-4","w-75","mx-auto","rounded","shadow","cart-area"],[1,"text-center","h3"],[1,"btn","btn-outline-danger","btn-sm","d-block","ms-auto",3,"click"],[1,"fas","fa-trash"],[1,"text-main","mb-3"],["class","row g-4 align-items-center",4,"ngFor","ngForOf"],["routerLink","/shopaddress",1,"main-btn","py-0",3,"queryParams"],["src","./assets/images/visa-1.svg","alt","visa card"],[1,"row","g-4","align-items-center"],[1,"col-md-9"],[1,"item","d-flex","gap-3","align-items-center"],["width","70",3,"src","alt"],[1,"item-details"],[1,"h6","small"],[1,"text-main"],[1,"btn-remove","d-block","text-main",3,"click"],[1,"col-md-3"],[1,"hstack","gap-3","justify-content-end"],[1,"btn-count",3,"click"],[1,"my-3"],[1,"text-center"]],template:function(s,l){if(1&s&&(t.YNc(0,v,12,5,"section",0),t.YNc(1,e,2,0,"ng-template",null,1,t.W1O),t.TgZ(3,"section",2)(4,"button",3),t._uU(5,"My Orders"),t.qZA()()),2&s){const o=t.MAs(2);t.Q6J("ngIf",l.cartDetails.length)("ngIfElse",o)}},dependencies:[d.ez,d.sg,d.O5,m.r,a.rH],styles:[".btn-remove[_ngcontent-%COMP%]{cursor:pointer;background-color:transparent;border:unset}.cart-area[_ngcontent-%COMP%]{max-height:80vh;overflow-y:auto}.btn-count[_ngcontent-%COMP%]{all:unset;border-radius:5px;border:1px solid #0aad0a;color:#000;display:block;padding:3px 10px;cursor:pointer}"]})}return i})()}}]);