import {Input, Component} from '@angular/core';


@Component({
  selector: 'link-cell',
  template: `
    <a [href]="href">{{label}}</a>
  `
})
export class LinkCellComponent {
    @Input() label: string;
    @Input() href: string;
}
