"use strict";(self.webpackChunkangular_bootstrap=self.webpackChunkangular_bootstrap||[]).push([[56],{6056:(G,g,s)=>{s.r(g),s.d(g,{BiosModule:()=>$});var a=s(9808),c=s(6199),i=s(4893),r=s(1810),u=s(520);let f=(()=>{class o{constructor(t){this.http=t,this._jsonURL="./../../assets/data/bioslist.json"}getallbios(){return this.http.get(this._jsonURL)}}return o.\u0275fac=function(t){return new(t||o)(i.LFG(u.eN))},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),d=(()=>{class o{constructor(t,e){this._elementRef=t,this._router=e}ngOnChanges(){var t;if(this.html){this._uniqueId||(this._uniqueId=[...this._elementRef.nativeElement.attributes].find(l=>l.name.startsWith("_ngcontent-")).name),this._elementRef.nativeElement.innerHTML=this.html;const e=this._elementRef.nativeElement.querySelectorAll("*");for(const l of e)if(l.setAttribute(this._uniqueId,""),"A"===l.tagName){const p=null===(t=l.href)||void 0===t?void 0:t.toLowerCase();(null==p?void 0:p.startsWith(location.origin.toLowerCase()))&&l.addEventListener("click",m=>{this._router.navigate([p.substring(location.origin.length)]),m.preventDefault()})}}else this._elementRef.nativeElement.innerHTML=null}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(i.SBq),i.Y36(r.F0))},o.\u0275dir=i.lG2({type:o,selectors:[["","html",""]],inputs:{html:"html"},features:[i.TTD]}),o})();function h(o,n){if(1&o&&(i.TgZ(0,"span"),i._uU(1),i.qZA()),2&o){const t=n.$implicit;i.xp6(1),i.hij(" | ",t," ")}}function b(o,n){1&o&&(i.TgZ(0,"span"),i._uU(1,"Pronunciation: "),i.qZA())}function x(o,n){1&o&&(i.TgZ(0,"span"),i._uU(1,"Pronunciaci\xf3n: "),i.qZA())}function v(o,n){1&o&&(i.TgZ(0,"span"),i._uU(1,"Life: "),i.qZA())}function C(o,n){1&o&&(i.TgZ(0,"span"),i._uU(1,"Vida: "),i.qZA())}function Z(o,n){if(1&o&&(i.TgZ(0,"p",32),i.YNc(1,v,2,0,"span",20),i.YNc(2,C,2,0,"span",20),i._uU(3),i.qZA()),2&o){const t=i.oxw(2);i.xp6(1),i.Q6J("ngIf",!t.isSpanish),i.xp6(1),i.Q6J("ngIf",t.isSpanish),i.xp6(1),i.hij(" ",t.biosprofile.life,"")}}function T(o,n){1&o&&(i.TgZ(0,"span"),i._uU(1,"Location: "),i.qZA())}function P(o,n){1&o&&(i.TgZ(0,"span"),i._uU(1,"Localizaci\xf3n: "),i.qZA())}function O(o,n){if(1&o&&(i.TgZ(0,"p",33),i.YNc(1,T,2,0,"span",20),i.YNc(2,P,2,0,"span",20),i._uU(3),i.qZA()),2&o){const t=i.oxw(2);i.xp6(1),i.Q6J("ngIf",!t.isSpanish),i.xp6(1),i.Q6J("ngIf",t.isSpanish),i.xp6(1),i.hij(" ",t.biosprofile.location,"")}}function M(o,n){1&o&&(i.TgZ(0,"span"),i._uU(1,"Known For: "),i.qZA())}function B(o,n){1&o&&(i.TgZ(0,"span"),i._uU(1,"Conocido/a por: "),i.qZA())}function A(o,n){if(1&o&&(i.TgZ(0,"p",33),i.YNc(1,M,2,0,"span",20),i.YNc(2,B,2,0,"span",20),i._uU(3),i.qZA()),2&o){const t=i.oxw(2);i.xp6(1),i.Q6J("ngIf",!t.isSpanish),i.xp6(1),i.Q6J("ngIf",t.isSpanish),i.xp6(1),i.hij(" ",t.biosprofile.knownfor,"")}}function q(o,n){1&o&&(i.TgZ(0,"h1",34),i._uU(1,"MATH HERO"),i.qZA())}function y(o,n){1&o&&(i.TgZ(0,"h1",34),i._uU(1,"H\xc9ROE MATEM\xc1TICO"),i.qZA())}function U(o,n){if(1&o&&(i.TgZ(0,"li"),i._UZ(1,"html",35),i.qZA()),2&o){const t=n.$implicit;i.xp6(1),i.Q6J("html",t)}}function I(o,n){if(1&o&&(i.TgZ(0,"p",25),i._uU(1),i.qZA()),2&o){const t=i.oxw(2);i.xp6(1),i.hij(" ",t.biosprofile.mathherounderbullet,"")}}function w(o,n){1&o&&(i.TgZ(0,"span"),i._uU(1,"Fun Fact: "),i.qZA())}function Y(o,n){1&o&&(i.TgZ(0,"span"),i._uU(1,"Dato divertido: "),i.qZA())}function N(o,n){if(1&o&&(i.TgZ(0,"p",25),i.YNc(1,w,2,0,"span",20),i.YNc(2,Y,2,0,"span",20),i._uU(3),i.qZA()),2&o){const t=i.oxw(2);i.xp6(1),i.Q6J("ngIf",!t.isSpanish),i.xp6(1),i.Q6J("ngIf",t.isSpanish),i.xp6(1),i.hij(" ",t.biosprofile.funfact,"")}}function J(o,n){if(1&o&&(i.TgZ(0,"div",36),i._UZ(1,"img",18)(2,"div",10),i.qZA()),2&o){const t=i.oxw(2);i.xp6(1),i.s9C("src","../../../../assets/bioimg/"+t.biosprofile.profileimage2,i.LSH)}}function k(o,n){if(1&o&&(i.TgZ(0,"li"),i._UZ(1,"html",35),i.qZA()),2&o){const t=n.$implicit;i.xp6(1),i.Q6J("html",t)}}function Q(o,n){1&o&&(i.TgZ(0,"h2",37)(1,"span",38),i._uU(2,"REFERENCES"),i.qZA()())}function S(o,n){1&o&&(i.TgZ(0,"h2",37)(1,"span",38),i._uU(2,"REFERENCIAS Y CR\xc9DITOS FOTOGR\xc1FICOS"),i.qZA()())}function L(o,n){if(1&o&&(i.TgZ(0,"li"),i._UZ(1,"html",35),i.qZA()),2&o){const t=n.$implicit;i.xp6(1),i.Q6J("html",t)}}function F(o,n){if(1&o&&(i.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"h3",4),i._uU(4,"OURMATHWORLD.COM"),i.qZA(),i.TgZ(5,"p",5),i._uU(6),i.qZA()(),i.TgZ(7,"div",6)(8,"div",7)(9,"div",8)(10,"div"),i._UZ(11,"img",9)(12,"div",10),i.qZA()(),i.TgZ(13,"div",11)(14,"div",12),i.YNc(15,h,2,1,"span",13),i._uU(16,"| "),i.qZA()()(),i.TgZ(17,"div",7)(18,"div",8)(19,"h1",14)(20,"span",15),i._uU(21),i.qZA()()()()(),i.TgZ(22,"div",7)(23,"div",16)(24,"p"),i._uU(25),i.qZA()(),i.TgZ(26,"div",17),i._UZ(27,"img",18)(28,"div",10),i.qZA(),i.TgZ(29,"div",19)(30,"p"),i.YNc(31,b,2,0,"span",20),i.YNc(32,x,2,0,"span",20),i._uU(33),i.qZA(),i.YNc(34,Z,4,3,"p",21),i.YNc(35,O,4,3,"p",22),i.YNc(36,A,4,3,"p",22),i.qZA()(),i.TgZ(37,"div",7)(38,"div",23),i.YNc(39,q,2,0,"h1",24),i.YNc(40,y,2,0,"h1",24),i.TgZ(41,"p",25),i._uU(42),i.qZA(),i.TgZ(43,"ul",26),i.YNc(44,U,2,1,"li",13),i.qZA(),i.YNc(45,I,2,1,"p",27),i.YNc(46,N,4,3,"p",27),i.YNc(47,J,3,1,"div",28),i.qZA(),i.TgZ(48,"div",6)(49,"h1",14)(50,"span",29),i._uU(51),i.qZA()(),i.TgZ(52,"ul",30),i.YNc(53,k,2,1,"li",13),i.qZA(),i.YNc(54,Q,3,0,"h2",31),i.YNc(55,S,3,0,"h2",31),i.TgZ(56,"ul",26),i.YNc(57,L,2,1,"li",13),i.qZA()()()()()),2&o){const t=i.oxw();i.xp6(6),i.Oqu(t.biosprofile.jobtitle),i.xp6(9),i.Q6J("ngForOf",t.biosprofile.jobs),i.xp6(6),i.Oqu(t.biosprofile.fullname),i.xp6(4),i.hij('"',t.biosprofile.quote,'"'),i.xp6(2),i.s9C("src","../../../../assets/bioimg/"+t.biosprofile.profileimage,i.LSH),i.xp6(4),i.Q6J("ngIf",!t.isSpanish),i.xp6(1),i.Q6J("ngIf",t.isSpanish),i.xp6(1),i.lnq(" ","{","",t.biosprofile.pronunciation,"","}",""),i.xp6(1),i.Q6J("ngIf",t.biosprofile.life),i.xp6(1),i.Q6J("ngIf",t.biosprofile.location),i.xp6(1),i.Q6J("ngIf",t.biosprofile.knownfor),i.xp6(3),i.Q6J("ngIf",!t.isSpanish),i.xp6(1),i.Q6J("ngIf",t.isSpanish),i.xp6(2),i.Oqu(t.biosprofile.mathhero),i.xp6(2),i.Q6J("ngForOf",t.biosprofile.mathherobullet),i.xp6(1),i.Q6J("ngIf",t.biosprofile.mathherounderbullet),i.xp6(1),i.Q6J("ngIf",t.biosprofile.funfact),i.xp6(1),i.Q6J("ngIf",t.biosprofile.profileimage2),i.xp6(4),i.Oqu(t.biosprofile.jobdescription),i.xp6(2),i.Q6J("ngForOf",t.biosprofile.jobdescriptionbullets),i.xp6(1),i.Q6J("ngIf",!t.isSpanish),i.xp6(1),i.Q6J("ngIf",t.isSpanish),i.xp6(2),i.Q6J("ngForOf",t.biosprofile.references)}}let j=(()=>{class o{constructor(t,e){this.route=t,this.biosservice=e,this.isSpanish=!1}ngOnInit(){this.bioid=+this.route.snapshot.paramMap.get("id"),this.biosservice.getallbios().subscribe(t=>{this.biosprofile=t.filter(e=>e.id==this.bioid)[0],this.isSpanish=this.biosprofile.languagetype==c.e.SP})}getlinkfromlistbyindex(t){window.open(this.biosprofile.mathherobulletlinks[t],"_blank")}getreferencelinkbyindex(t){window.open(this.biosprofile.referenceslinks[t],"_blank")}getjobnamelink(){window.open(this.biosprofile.namelink,"_blank")}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(r.gz),i.Y36(f))},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-bios-profile"]],decls:1,vars:1,consts:[["class","container ",4,"ngIf"],[1,"container"],[1,"row","biosprofile"],[1,"col","yellowbg"],[1,"text-15","paddingtitle"],[1,"whitetext","text-30"],[1,"col-md-7","col-sm-12"],[1,"row"],[1,"col"],["src","'../../../../assets/OurMathWorld.png","alt","",1,"profile-logo-image"],[2,"width","100%","height","100%","position","absolute","top","0","left","0"],[1,"col-md-8","col-sm-12"],[1,"job-titles","paddingtitle"],[4,"ngFor","ngForOf"],[1,"display-4","m-0"],[1,"text-primary"],[1,"col-md-4","col-sm-12","darkbg","whitetext","text-30","mathheromargin"],[1,"col-md-5","col-sm-12","bio-profile-img-div"],["alt","",1,"bio-profile-img",3,"src"],[1,"col","yellowbg","text-20","shrinkrightmargin"],[4,"ngIf"],["class","lifetext",4,"ngIf"],["class","othertext",4,"ngIf"],[1,"col","yellowbg","mathheromargin"],["class","whitetext text-35",4,"ngIf"],[1,""],[1,"bulletlinks"],["class","",4,"ngIf"],["class","col bio-profile-img-div",4,"ngIf"],[1,"text-primary","text-35"],[1,"bulletlinks","text-20"],["class","m-0",4,"ngIf"],[1,"lifetext"],[1,"othertext"],[1,"whitetext","text-35"],[3,"html"],[1,"col","bio-profile-img-div"],[1,"m-0"],[1,"text-primary","job-reference"]],template:function(t,e){1&t&&i.YNc(0,F,58,25,"div",0),2&t&&i.Q6J("ngIf",e.biosprofile)},directives:[a.O5,a.sg,d],styles:[".biosprofile[_ngcontent-%COMP%]{border-left:2px solid black;border-right:2px solid black;border-bottom:2px solid black;color:#000;margin-bottom:-25px!important}.biosprofile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000}.biosprofile[_ngcontent-%COMP%]   .profile-logo-image[_ngcontent-%COMP%]{width:160px;height:100px;border-radius:50%;overflow:hidden;margin-top:-6px}.biosprofile[_ngcontent-%COMP%]   .job-titles[_ngcontent-%COMP%]{text-align:right;margin-right:10px}.biosprofile[_ngcontent-%COMP%]   .shrinkrightmargin[_ngcontent-%COMP%]{margin-right:-27px}.biosprofile[_ngcontent-%COMP%]   .mathheromargin[_ngcontent-%COMP%]{margin-left:3px}.biosprofile[_ngcontent-%COMP%]   .yellowbg[_ngcontent-%COMP%]{background-color:#f1bc31}.biosprofile[_ngcontent-%COMP%]   .darkbg[_ngcontent-%COMP%]{background-color:#000}.biosprofile[_ngcontent-%COMP%]   .whitetext[_ngcontent-%COMP%]{color:#fff}.biosprofile[_ngcontent-%COMP%]   .bio-profile-img[_ngcontent-%COMP%]{width:100%;height:100%}.biosprofile[_ngcontent-%COMP%]   .bio-profile-img-div[_ngcontent-%COMP%]{margin-left:-15px;margin-right:-15px}.biosprofile[_ngcontent-%COMP%]   .lifetext[_ngcontent-%COMP%]{font-weight:700;margin-bottom:-5px}.biosprofile[_ngcontent-%COMP%]   .othertext[_ngcontent-%COMP%]{margin-bottom:-5px}.biosprofile[_ngcontent-%COMP%]   ul.bulletlinks[_ngcontent-%COMP%]{list-style-type:square;margin-left:30px}.biosprofile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;text-decoration:underline}.biosprofile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:navy}.biosprofile[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]{font-size:35px}.biosprofile[_ngcontent-%COMP%]   .job-reference[_ngcontent-%COMP%]{font-size:16px}.biosprofile[_ngcontent-%COMP%]   .text-15[_ngcontent-%COMP%]{font-size:15px}.biosprofile[_ngcontent-%COMP%]   .text-20[_ngcontent-%COMP%]{font-size:20px}.biosprofile[_ngcontent-%COMP%]   .text-30[_ngcontent-%COMP%]{font-size:30px}.biosprofile[_ngcontent-%COMP%]   .text-35[_ngcontent-%COMP%]{font-size:35px}.biosprofile[_ngcontent-%COMP%]   .paddingtitle[_ngcontent-%COMP%]{padding-top:15px;padding-bottom:15px}.bioprofilelinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000!important;text-decoration:underline!important}.bioprofilelinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:navy!important}.bio-profile-mathhero[_ngcontent-%COMP%]{background-color:#f1bc31;color:#000}.bio-profile-jobdescription[_ngcontent-%COMP%]{color:#000}"]}),o})();var _=s(1976);function E(o,n){if(1&o&&(i.TgZ(0,"div"),i._UZ(1,"img",11),i.qZA()),2&o){const t=i.oxw().$implicit;i.xp6(1),i.s9C("src","../../../../assets/bioimg/"+t.profileimage,i.LSH)}}function R(o,n){if(1&o){const t=i.EpF();i.TgZ(0,"div",2)(1,"div",3),i.YNc(2,E,2,1,"div",4),i.TgZ(3,"div",5)(4,"h4",6),i._uU(5),i.qZA(),i.TgZ(6,"div",7)(7,"p",8),i._UZ(8,"i",9),i._uU(9),i.qZA()(),i.TgZ(10,"a",10),i.NdJ("click",function(){const p=i.CHM(t).$implicit;return i.oxw().gotobiosprofile(p.id)}),i._uU(11,"Read More"),i.qZA()()()()}if(2&o){const t=n.$implicit;i.xp6(2),i.Q6J("ngIf",t.profileimage),i.xp6(3),i.Oqu(t.fullname),i.xp6(4),i.hij(" ",t.jobtitle,"")}}let z=(()=>{class o{constructor(t,e){this.route=t,this.router=e}ngOnInit(){}gotobiosprofile(t){this.router.navigate(["biosprofile",t],{relativeTo:this.route})}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(r.gz),i.Y36(r.F0))},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-bios-list"]],inputs:{bioslist:"bioslist"},decls:2,vars:1,consts:[[1,"row","pb-3"],["class","col-lg-6 col-md-6 col-sm-12 mb-4",4,"ngFor","ngForOf"],[1,"col-lg-6","col-md-6","col-sm-12","mb-4"],[1,"card","border-0","mb-2"],[4,"ngIf"],[1,"card-body","bg-light","p-4"],[1,"card-title"],[1,"d-flex","mb-3"],[1,"mr-2"],[1,"fa","fa-user","text-muted"],[1,"font-weight-bold","hyperlink-text","linkcursor","linkcolor",3,"click"],["alt","",1,"card-img-top-default",3,"src"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.YNc(1,R,12,3,"div",1),i.qZA()),2&t&&(i.xp6(1),i.Q6J("ngForOf",e.bioslist))},directives:[a.sg,a.O5],styles:[""]}),o})(),H=(()=>{class o{constructor(t){this.biosservice=t}ngOnInit(){this.selectedLanguageType=c.e.ENG,this.biosservice.getallbios().subscribe(t=>{this.fullBiographylist=t,this.updatedataBylanguage()})}onLanguageChange(t){this.selectedLanguageType=t==c.e.ENG?c.e.ENG:c.e.SP,this.updatedataBylanguage()}updatedataBylanguage(){this.biographylist=this.fullBiographylist.filter(t=>t.languagetype==this.selectedLanguageType)}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(f))},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-bios"]],decls:11,vars:2,consts:[[1,"container","pt-5"],[1,"d-flex","flex-column","text-center","mb-5","pt-5"],[1,"display-4","m-0"],[1,"buttontogglelayout"],["name","languagetoggle","aria-label","Language",3,"value","change"],["value","eng"],["value","sp"],[3,"bioslist"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),i._uU(3,"Our Mathematical World Bios"),i.qZA()(),i.TgZ(4,"div",3)(5,"mat-button-toggle-group",4),i.NdJ("change",function(p){return e.onLanguageChange(p.value)}),i.TgZ(6,"mat-button-toggle",5),i._uU(7,"English"),i.qZA(),i.TgZ(8,"mat-button-toggle",6),i._uU(9,"Spanish"),i.qZA()()(),i._UZ(10,"app-bios-list",7),i.qZA()),2&t&&(i.xp6(5),i.Q6J("value",e.selectedLanguageType),i.xp6(5),i.Q6J("bioslist",e.biographylist))},directives:[_.A9,_.Yi,z],styles:[""]}),o})();var D=s(3806);let $=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[[a.ez,D.W,r.Bz.forChild([{path:"",component:H},{path:"biosprofile/:id",component:j}])],r.Bz]}),o})()}}]);