import { Input, ViewContainerRef, ComponentFactoryResolver, Directive } from '@angular/core';

@Directive({
  selector: '[dynamicCell]'
})
export class DynamicCellDirective {
  @Input() component: any;
  @Input() inputs: any;

  constructor(private cfr: ComponentFactoryResolver, private vc: ViewContainerRef) {}

  ngOnInit() {
    const componentFactory = this.cfr.resolveComponentFactory(this.component);
    const component = this.vc.createComponent(componentFactory);
    if (this.inputs) {
      Object.keys(this.inputs).forEach(input => {
        component.instance[input] = this.inputs[input];
      });
    }
    
  }
}