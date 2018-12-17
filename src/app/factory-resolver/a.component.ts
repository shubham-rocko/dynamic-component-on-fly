import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from "@angular/core";
import {FRBComponent} from "./b.component";

@Component({
    selector: 'fr-a-component',
    template: `I am A component that inserts dynamic B component below: <div #vc></div>
    <button (click)="clickToLoadB()"> click to load B</button>
    `
})

export class FRAComponent {
    @ViewChild('vc', {read: ViewContainerRef}) _container: ViewContainerRef;

    constructor(private _resolver: ComponentFactoryResolver) {

    }

    clickToLoadB() {
        const cmpFactory = this._resolver.resolveComponentFactory(FRBComponent);
        this._container.createComponent(cmpFactory);
    }
}