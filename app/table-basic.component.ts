import {Component} from '@angular/core';
import { LinkCellComponent } from './cells/link-cell.component';

@Component({
  selector: 'table-basic',
  styleUrls: ['table-basic.component.css'],
  templateUrl: 'table-basic.component.html',
})
export class TableBasicComponent {
  columnsDef = [
    { 
      id: 'position'
    },
    { 
      id: 'name'
    },
    { 
      id: 'weight'
    },
    { 
      id: 'symbol',
      dynamicCellComponent: LinkCellComponent
    }
  ];
  displayedColumns = this.columnsDef.map(item => item.id);
  dataSource = ELEMENT_DATA;
}

function TestCallback() {
  console.log('i love one piece');
}

export interface PeriodicElementView {
  name: string;
  position: number;
  weight: number;
  symbol: {
    label: string;
    href: string;
    callback?: Function;
  };
}

const ELEMENT_DATA: PeriodicElementView[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: {
      label: 'H',
      href: 'https://en.wikipedia.org/wiki/Hydrogen',
      callback: TestCallback
    }
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: {
      label: 'He',
      href: 'https://en.wikipedia.org/wiki/Helium'
    }
  },
    {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: {
      label: 'Li',
      href: 'https://en.wikipedia.org/wiki/Lithium'
    }
  }
];


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */