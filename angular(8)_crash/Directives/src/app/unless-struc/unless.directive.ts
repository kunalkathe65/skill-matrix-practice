import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appUnless]'
})

//opposite of *ngIf
export class UnlessDirective {

    //set() is a method called when a  property changes
    @Input() set appUnless(condition: boolean) {
        if (!condition) {
            this.vcRef.createEmbeddedView(this.tempRef);
        } else {
            this.vcRef.clear();
        }
    }
    constructor(
        private tempRef: TemplateRef<any>,
        private vcRef: ViewContainerRef
    ) { }


}