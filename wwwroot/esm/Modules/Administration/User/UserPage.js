import{a as B,b as k}from"../../../_chunks/chunk-7FXVC7J3.js";import{a as g,c as b}from"../../../_chunks/chunk-WMAR3PB6.js";import{g as T,j as S,k as D,l as h,m as i,n as P}from"../../../_chunks/chunk-VYJLGJ67.js";import"../../../_chunks/chunk-IHLQ5LPA.js";import{c as s,f as d,g as u,h as c,i as f,j as p}from"../../../_chunks/chunk-7V7WNOD5.js";var N=d(p(),1);var C=d(p(),1),L=d(p(),1);var t=d(p(),1);var e=d(p(),1);var x=class x extends e.BaseDialog{constructor(o){super(o),this.permissions=new k({element:this.byId("Permissions"),showRevoke:!0}),h.List({UserID:this.options.userID},r=>{this.permissions.value=r.Entities}),h.ListRolePermissions({UserID:this.options.userID},r=>{this.permissions.rolePermissions=r.Entities}),this.permissions.implicitPermissions=(0,e.getRemoteData)(B.Administration.ImplicitPermissions),this.dialogTitle=(0,e.stringFormat)((0,e.localText)("Site.UserPermissionDialog.DialogTitle"),this.options.username)}getDialogButtons(){return[{text:(0,e.localText)("Dialogs.OkButton"),cssClass:"btn btn-primary",click:s(o=>{h.Update({UserID:this.options.userID,Permissions:this.permissions.value},()=>{this.dialogClose(),window.setTimeout(()=>(0,e.notifySuccess)((0,e.localText)("Site.UserPermissionDialog.SaveSuccess")),0)})},"click")},{text:(0,e.localText)("Dialogs.CancelButton"),click:s(()=>this.dialogClose(),"click")}]}renderContents(){let o=this.useIdPrefix();return b("div",{id:o.Permissions})}};s(x,"UserPermissionDialog");var y=x;var E,I,A;E=[t.Decorators.registerClass()];var n=class n extends(A=t.EntityDialog){constructor(r){super(r);this.form=new D(this.idPrefix);this.form.Password.change(()=>{t.EditorUtils.setRequired(this.form.PasswordConfirm,this.form.Password.value.length>0)}),this.form.Password.addValidationRule(this.uniqueName,l=>{if(this.form.Password.value.length<6)return(0,t.stringFormat)((0,t.localText)(g.Validation.MinRequiredPasswordLength),6)}),this.form.PasswordConfirm.addValidationRule(this.uniqueName,l=>{if(this.form.Password.value!=this.form.PasswordConfirm.value)return(0,t.localText)(g.Validation.PasswordConfirmMismatch)})}getFormKey(){return D.formKey}getIdProperty(){return i.idProperty}getIsActiveProperty(){return i.isActiveProperty}getLocalTextPrefix(){return i.localTextPrefix}getNameProperty(){return i.nameProperty}getService(){return P.baseUrl}getToolbarButtons(){let r=super.getToolbarButtons();return r.push({title:(0,t.localText)(g.Site.UserDialog.EditPermissionsButton),cssClass:"edit-permissions-button",icon:"fa-lock text-green",onClick:s(()=>{new y({userID:this.entity.UserId,username:this.entity.Username}).dialogOpen()},"onClick")}),r}updateInterface(){super.updateInterface(),this.toolbar.findButton("edit-permissions-button").toggleClass("disabled",this.isNewOrDeleted())}afterLoadEntity(){super.afterLoadEntity(),this.form.Password.element.toggleClass("required",this.isNew()).closest(".field").findFirst("sup").toggle(this.isNew()),this.form.PasswordConfirm.element.toggleClass("required",this.isNew()).closest(".field").findFirst("sup").toggle(this.isNew())}};I=u(A),n=f(I,0,"UserDialog",E,n),s(n,"UserDialog"),c(I,1,n);var v=n;var F,R,O;F=[C.Decorators.registerClass()];var a=class a extends(O=C.EntityGrid){getColumnsKey(){return S.columnsKey}getDialogType(){return v}getIdProperty(){return i.idProperty}getIsActiveProperty(){return i.isActiveProperty}getLocalTextPrefix(){return i.localTextPrefix}getService(){return P.baseUrl}constructor(o){super(o)}getDefaultSortBy(){return[i.Fields.Username]}createIncludeDeletedButton(){}getColumns(){var o=super.getColumns(),r=(0,L.tryFirst)(o,m=>m.field==i.Fields.Roles);if(r){var l;T.getLookupAsync().then(m=>{l=m,this.slickGrid.invalidate()}),r.format=m=>{if(!l)return'<i class="fa fa-spinner"></i>';var U=(m.value||[]).map(q=>(l.itemById[q]||{}).RoleName||"");return U.sort(),U.join(", ")}}return o}};R=u(O),a=f(R,0,"UserGrid",F,a),s(a,"UserGrid"),c(R,1,a);var w=a;var se=s(()=>(0,N.gridPageInit)(w),"default");export{se as default};
//# sourceMappingURL=UserPage.js.map
