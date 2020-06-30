import { Directive, ElementRef, OnInit } from '@angular/core';

//using decorator to tell angular it is custom directive
//Below is custom attribute directive
@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {

    constructor(private elRef: ElementRef) { }

    ngOnInit() {
        this.elRef.nativeElement.style.backgroundColor = 'red';
        //the above approach works but it is not advisable to update DOM like this
    }

}