(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{XT3z:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=(e("y9jh"),function(){function l(){this.filterPost="",this.editing={},this.listAdmin=[{id:2323,name:"bache",gravedad:3,description:"Es un bache bien cabron que lleva varios dias asi",lat:25.7582117,lng:-108.9833722,phone:8188080}],this.temp=[],this.expanded={},this.selected=[]}return l.prototype.updateFilter=function(l){console.log("entro");var n=l.target.value.toLowerCase(),e=this.temp.filter(function(l){return-1!==l.gravedad.toLowerCase().indexOf(n)||-1!==l.description.toLowerCase().indexOf(n)||-1!==l.phone.toLowerCase().indexOf(n)||-1!==l.name.toLowerCase().indexOf(n)||!n});console.log(e),this.listAdmin=e,this.table.offset=0},l.prototype.ngOnInit=function(){for(var l=0;l<5;l++){var n={id:this.getRandomInt(100,2),name:"bache"+(l+1),gravedad:this.getRandomInt(4,1),description:"Es un bache bien cabron que lleva varios dias asi",lat:25.7582117,lng:-108.9833722,phone:this.getRandomInt(1e6,2)};this.listAdmin.push(n)}},l.prototype.getRandomInt=function(l,n){return Math.floor(Math.random()*(n-l))+l},l.prototype.onPage=function(l){clearTimeout(this.timeout),this.timeout=setTimeout(function(){},100)},l.prototype.delete=function(){},l}()),a=function(){return function(){}}(),o=e("pMnS"),i=e("Ip0R"),d=e("ZYCi"),r=e("R/X1"),c=e("3/HP"),s=e("FO+L"),m=e("nhM1"),p=e("BARL"),f=e("Y0Co"),v=e("8iEZ"),g=u["\u0275crt"]({encapsulation:0,styles:[[".alt[_ngcontent-%COMP%]{height:146px}.text-18[_ngcontent-%COMP%]{font-size:18px}.pos-icon[_ngcontent-%COMP%]{color:#a6acaf;position:absolute;font-size:19px;top:9px;right:20px}"]],data:{}});function h(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.rowIndex+1)})}function b(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"div",[["style","color: green;font-size: 25px;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,0,"a",[["class","fas fa-square"]],null,null,null,null,null))],null,null)}function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"div",[["style","color: orange;font-size: 25px;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,0,"a",[["class","fas fa-square"]],null,null,null,null,null))],null,null)}function x(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"div",[["style","color: red;font-size: 25px;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,0,"a",[["class","fas fa-square"]],null,null,null,null,null))],null,null)}function T(l){return u["\u0275vid"](0,[(l()(),u["\u0275and"](16777216,null,null,1,null,b)),u["\u0275did"](1,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,C)),u["\u0275did"](3,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,x)),u["\u0275did"](5,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](0,null,null,0))],function(l,n){l(n,1,0,1===n.context.row.gravedad),l(n,3,0,2===n.context.row.gravedad),l(n,5,0,3===n.context.row.gravedad)},null)}function w(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](0,null,[" "," "]))],null,function(l,n){l(n,0,0,n.context.row.name)})}function R(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](0,null,[" "," "]))],null,function(l,n){l(n,0,0,n.context.row.description)})}function D(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](0,null,[" "," "]))],null,function(l,n){l(n,0,0,n.context.row.phone)})}function q(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,3,"button",[["class","btn btn-info m-1"],["type","button"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,1).onClick()&&t),t},null,null)),u["\u0275did"](1,16384,null,0,d.l,[d.k,d.a,[8,null],u.Renderer2,u.ElementRef],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](2,2),(l()(),u["\u0275eld"](3,0,null,null,0,"a",[["class","fas fa-eye"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,3,"button",[["class","btn btn-success m-1"],["type","button"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,5).onClick()&&t),t},null,null)),u["\u0275did"](5,16384,null,0,d.l,[d.k,d.a,[8,null],u.Renderer2,u.ElementRef],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](6,2),(l()(),u["\u0275eld"](7,0,null,null,0,"a",[["class","fas fa-pencil-alt"]],null,null,null,null,null)),(l()(),u["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-danger"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.delete(l.context.row)&&u),u},null,null)),(l()(),u["\u0275eld"](9,0,null,null,0,"a",[["class","fas fa-trash-alt"]],null,null,null,null,null))],function(l,n){var e=l(n,2,0,"/Reportes/",n.context.row.id);l(n,1,0,e);var u=l(n,6,0,"/Reportes/",n.context.row.id);l(n,5,0,u)},null)}function y(l){return u["\u0275vid"](0,[u["\u0275qud"](402653184,1,{tableExp:0}),u["\u0275qud"](402653184,2,{table:0}),(l()(),u["\u0275eld"](2,0,null,null,8,"div",[["class","alt"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,7,"div",[["class","main-container"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,2,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,1,"h3",[["class","m-0"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Reportes"])),(l()(),u["\u0275eld"](8,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(l()(),u["\u0275eld"](9,0,null,null,1,"p",[["class","text-18"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Ve la lista de reportes, edita, habilita/deshabilita o agrega nuevos."])),(l()(),u["\u0275eld"](11,0,null,null,55,"div",[["class","main-container"]],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,2,"div",[["class","col-12 col-sm-12 col-md-6 col-lg-6"]],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,0,"em",[["class","fa-2x mr-2 fas fa-search pos-icon"]],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,0,"input",[["class","form-control mb-2"],["placeholder","Buscar..."],["style","border-radius: 21px;"],["type","text"]],null,[[null,"keyup"]],function(l,n,e){var u=!0;return"keyup"===n&&(u=!1!==l.component.updateFilter(e)&&u),u},null,null)),(l()(),u["\u0275eld"](16,0,null,null,0,"div",[["class","col text-right"]],null,null,null,null,null)),(l()(),u["\u0275eld"](17,0,null,null,49,"div",[["class","card card-default mt-4"]],null,null,null,null,null)),(l()(),u["\u0275eld"](18,0,null,null,48,"div",[["class","card-body "]],null,null,null,null,null)),(l()(),u["\u0275eld"](19,0,null,null,47,"ngx-datatable",[["class","bootstrap expandable material fullscreen  ngx-datatable"],["style","height: calc(90vh - 270px); box-shadow: none; width: 100%;"]],[[2,"fixed-header",null],[2,"fixed-row",null],[2,"scroll-vertical",null],[2,"virtualized",null],[2,"scroll-horz",null],[2,"selectable",null],[2,"checkbox-selection",null],[2,"cell-selection",null],[2,"single-selection",null],[2,"multi-selection",null],[2,"multi-click-selection",null]],[[null,"page"],["window","resize"]],function(l,n,e){var t=!0,a=l.component;return"window:resize"===n&&(t=!1!==u["\u0275nov"](l,20).onWindowResize()&&t),"page"===n&&(t=!1!==a.onPage(e)&&t),t},r.b,r.a)),u["\u0275did"](20,5750784,[[2,4],[1,4],["table",4]],4,c.DatatableComponent,[[1,s.ScrollbarHelper],[1,m.DimensionsHelper],u.ChangeDetectorRef,u.ElementRef,u.KeyValueDiffers,p.ColumnChangesService],{rows:[0,"rows"],scrollbarV:[1,"scrollbarV"],scrollbarH:[2,"scrollbarH"],rowHeight:[3,"rowHeight"],columnMode:[4,"columnMode"],headerHeight:[5,"headerHeight"],footerHeight:[6,"footerHeight"]},{page:"page"}),u["\u0275qud"](603979776,3,{columnTemplates:1}),u["\u0275qud"](335544320,4,{rowDetail:0}),u["\u0275qud"](335544320,5,{groupHeader:0}),u["\u0275qud"](335544320,6,{footer:0}),(l()(),u["\u0275eld"](25,0,null,null,6,"ngx-datatable-column",[["name","#"]],null,null,null,null,null)),u["\u0275did"](26,540672,[[3,4]],3,f.DataTableColumnDirective,[p.ColumnChangesService],{name:[0,"name"],canAutoResize:[1,"canAutoResize"],width:[2,"width"]},null),u["\u0275qud"](335544320,7,{cellTemplate:0}),u["\u0275qud"](335544320,8,{headerTemplate:0}),u["\u0275qud"](335544320,9,{treeToggleTemplate:0}),(l()(),u["\u0275and"](0,[[7,2]],null,1,null,h)),u["\u0275did"](31,16384,null,0,v.DataTableColumnCellDirective,[u.TemplateRef],null,null),(l()(),u["\u0275eld"](32,0,null,null,6,"ngx-datatable-column",[["name","Gravedad"]],null,null,null,null,null)),u["\u0275did"](33,540672,[[3,4]],3,f.DataTableColumnDirective,[p.ColumnChangesService],{name:[0,"name"],canAutoResize:[1,"canAutoResize"],width:[2,"width"]},null),u["\u0275qud"](335544320,10,{cellTemplate:0}),u["\u0275qud"](335544320,11,{headerTemplate:0}),u["\u0275qud"](335544320,12,{treeToggleTemplate:0}),(l()(),u["\u0275and"](0,[[10,2]],null,1,null,T)),u["\u0275did"](38,16384,null,0,v.DataTableColumnCellDirective,[u.TemplateRef],null,null),(l()(),u["\u0275eld"](39,0,null,null,6,"ngx-datatable-column",[["name","\xbfQu\xe9 es?"]],null,null,null,null,null)),u["\u0275did"](40,540672,[[3,4]],3,f.DataTableColumnDirective,[p.ColumnChangesService],{name:[0,"name"],canAutoResize:[1,"canAutoResize"],width:[2,"width"]},null),u["\u0275qud"](335544320,13,{cellTemplate:0}),u["\u0275qud"](335544320,14,{headerTemplate:0}),u["\u0275qud"](335544320,15,{treeToggleTemplate:0}),(l()(),u["\u0275and"](0,[[13,2]],null,1,null,w)),u["\u0275did"](45,16384,null,0,v.DataTableColumnCellDirective,[u.TemplateRef],null,null),(l()(),u["\u0275eld"](46,0,null,null,6,"ngx-datatable-column",[["name","Descripci\xf3n"]],null,null,null,null,null)),u["\u0275did"](47,540672,[[3,4]],3,f.DataTableColumnDirective,[p.ColumnChangesService],{name:[0,"name"]},null),u["\u0275qud"](335544320,16,{cellTemplate:0}),u["\u0275qud"](335544320,17,{headerTemplate:0}),u["\u0275qud"](335544320,18,{treeToggleTemplate:0}),(l()(),u["\u0275and"](0,[[16,2]],null,1,null,R)),u["\u0275did"](52,16384,null,0,v.DataTableColumnCellDirective,[u.TemplateRef],null,null),(l()(),u["\u0275eld"](53,0,null,null,6,"ngx-datatable-column",[["name","Tel\xe9fono"]],null,null,null,null,null)),u["\u0275did"](54,540672,[[3,4]],3,f.DataTableColumnDirective,[p.ColumnChangesService],{name:[0,"name"]},null),u["\u0275qud"](335544320,19,{cellTemplate:0}),u["\u0275qud"](335544320,20,{headerTemplate:0}),u["\u0275qud"](335544320,21,{treeToggleTemplate:0}),(l()(),u["\u0275and"](0,[[19,2]],null,1,null,D)),u["\u0275did"](59,16384,null,0,v.DataTableColumnCellDirective,[u.TemplateRef],null,null),(l()(),u["\u0275eld"](60,0,null,null,6,"ngx-datatable-column",[["class","d-flex justify-content-center align-items-center text-center"],["name","Acciones"]],null,null,null,null,null)),u["\u0275did"](61,540672,[[3,4]],3,f.DataTableColumnDirective,[p.ColumnChangesService],{name:[0,"name"]},null),u["\u0275qud"](335544320,22,{cellTemplate:0}),u["\u0275qud"](335544320,23,{headerTemplate:0}),u["\u0275qud"](335544320,24,{treeToggleTemplate:0}),(l()(),u["\u0275and"](0,[[22,2]],null,1,null,q)),u["\u0275did"](66,16384,null,0,v.DataTableColumnCellDirective,[u.TemplateRef],null,null)],function(l,n){l(n,20,0,n.component.listAdmin,!0,!0,60,"force",50,50),l(n,26,0,"#",!1,50),l(n,33,0,"Gravedad",!1,100),l(n,40,0,"\xbfQu\xe9 es?",!1,120),l(n,47,0,"Descripci\xf3n"),l(n,54,0,"Tel\xe9fono"),l(n,61,0,"Acciones")},function(l,n){l(n,19,1,[u["\u0275nov"](n,20).isFixedHeader,u["\u0275nov"](n,20).isFixedRow,u["\u0275nov"](n,20).isVertScroll,u["\u0275nov"](n,20).isVirtualized,u["\u0275nov"](n,20).isHorScroll,u["\u0275nov"](n,20).isSelectable,u["\u0275nov"](n,20).isCheckboxSelection,u["\u0275nov"](n,20).isCellSelection,u["\u0275nov"](n,20).isSingleSelection,u["\u0275nov"](n,20).isMultiSelection,u["\u0275nov"](n,20).isMultiClickSelection])})}function k(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-home",[],null,null,null,y,g)),u["\u0275did"](1,114688,null,0,t,[],null,null)],function(l,n){l(n,1,0)},null)}var S=u["\u0275ccf"]("app-home",t,k,{},{},[]),z=e("ZYjt"),H=e("F8xH");e.d(n,"ReportModuleNgFactory",function(){return M});var M=u["\u0275cmf"](a,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,S]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[u.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,s.ScrollbarHelper,s.ScrollbarHelper,[z.DOCUMENT]),u["\u0275mpd"](4608,m.DimensionsHelper,m.DimensionsHelper,[]),u["\u0275mpd"](4608,p.ColumnChangesService,p.ColumnChangesService,[]),u["\u0275mpd"](1073742336,d.o,d.o,[[2,d.u],[2,d.k]]),u["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),u["\u0275mpd"](1073742336,H.NgxDatatableModule,H.NgxDatatableModule,[]),u["\u0275mpd"](1073742336,a,a,[]),u["\u0275mpd"](1024,d.i,function(){return[[{path:"",component:t}]]},[])])})}}]);