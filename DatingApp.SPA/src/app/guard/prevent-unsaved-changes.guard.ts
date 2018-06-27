import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate <MemberEditComponent> {

    canDeactivate(component: MemberEditComponent) {
        if (component.editForm.dirty) {
            return confirm('You have unsaved changes on the page. Continue?');
        }
        return true;
    }
}
