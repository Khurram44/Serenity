﻿import { LanguageRow, LanguageForm, LanguageService } from "@/ServerTypes/Administration";
import { Decorators, EntityDialog } from "@serenity-is/corelib"

@Decorators.registerClass('Serene1.Administration.LanguageDialog')
export class LanguageDialog extends EntityDialog<LanguageRow, any> {
    protected getFormKey() { return LanguageForm.formKey; }
    protected getIdProperty() { return LanguageRow.idProperty; }
    protected getLocalTextPrefix() { return LanguageRow.localTextPrefix; }
    protected getNameProperty() { return LanguageRow.nameProperty; }
    protected getService() { return LanguageService.baseUrl; }

    protected form = new LanguageForm(this.idPrefix);
}