import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {

    //making directive properties bindable from outside
    @Input() defaultTextColor = 'black';
    //can also give alias as directive selector 
    //@Input('appBetterHighlight') onHoverTextColor = 'blue';
    //then in html file : [appBetterHighlight]="'blue'" OR appBetterHighlight="blue"
    //because wih property binding we can omit [] & ''(for value) if only we assign is of type STRING
    @Input() onHoverTextColor = 'blue';

    //Another decorator that allows us to bind to properties on the element on which our directive sits on
    @HostBinding('style.color') textColor: string;

    constructor(private renderer: Renderer2, private elRef: ElementRef) { }
    ngOnInit() {
        this.textColor = this.defaultTextColor;
        //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green');
        //the above approach is better as it is not accessing DOM directly
    }

    //special decorator to listen to the events on element on which our directive sits in
    //events can be DOM events or our custom events
    @HostListener('mouseover') mouseOver(e: any) {
        this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green');
        //With hostbinding no need to use renderer
        this.textColor = this.onHoverTextColor;
    }

    @HostListener('mouseleave') mouseLeave(e: any) {
        this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
        //With hostbinding no need to use renderer
        this.textColor = this.defaultTextColor;
    }




}