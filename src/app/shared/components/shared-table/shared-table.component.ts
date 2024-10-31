import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IButtonConfig } from '../../interfaces/shared';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss']
})
export class SharedTableComponent<T extends { [key: string]: any }>
  implements OnChanges
{
  @Input() tableHeaders: string[] = [];
  @Input() tableBodyContent: T[] = [];
  @Input() displayHeaders: { [key: string]: any } = {};
  @Input() buttons: IButtonConfig[] = [];
  @Input() actionsVisibility: boolean = false;
  filteredTableBodyContent: { row: T; keys: string[] }[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableHeaders'] || changes['tableBodyContent']) {
      this.updatedFilteredTableBodyContent();
    }
  }

  updatedFilteredTableBodyContent(): void {
    if (this.tableBodyContent) {
      this.filteredTableBodyContent = this.tableBodyContent.map((row) => ({
        row,
        keys: this.getFilteredKeys(row),
      }));
    } else {
      this.filteredTableBodyContent = [];
    }
  }

  getFilteredKeys(object: T): string[] {
    return this.tableHeaders.filter(
      (key) => object.hasOwnProperty(key) || key.includes('.')
    );
  }

  getNestedValue(object: T, key: string): any {
    return key.split('.').reduce((o, k) => (o ? o[k] : null), object);
  }

  getButtonsForColumn(column: string): IButtonConfig[] {
    return this.buttons.filter((button) => button.targetColumn === column);
  }
}
