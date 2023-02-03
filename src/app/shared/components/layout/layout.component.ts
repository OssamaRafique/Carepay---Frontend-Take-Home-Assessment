import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { HeaderMenuItems } from '../../constants';
import { IHeaderMenuItem } from '../../models';

/**
 * Reuseable Layout component
 */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements AfterViewInit {
  /**
   * Menu items as readonly because won't be changing based on user behaviour.
   * @readonly
   */
  public readonly menuItems: IHeaderMenuItem[] = HeaderMenuItems;

  /**
   * Constructor of the class.
   * @param cdr - ChangeDetectorRef
   * @returns Nothing
   */
  constructor(private cdr: ChangeDetectorRef) {}

  /**
   * Hook being used to detach the change detector to avoid unnecessary re-renders
   * @remarks
   * This method is part of the angular lifecycle {@link https://angular.io/api/core/AfterViewInit}.
   * @returns Nothing
   */
  ngAfterViewInit(): void {
    this.cdr.detach();
  }
}
