import { Directive, input } from '@angular/core';
import { TypedDirectiveContext } from './types';

@Directive({
  selector: 'ng-template[typedTemplate]',
  standalone: true
})
export class TypedDirective<T> {
  typedTemplate = input.required<T>();

  static ngTemplateContextGuard<TContext>(
    dir: TypedDirective<TContext>,
    ctx: unknown
  ): ctx is TypedDirectiveContext<TContext> {
    return true;
  }
}
