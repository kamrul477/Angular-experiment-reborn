

import { ProductService } from './services/product.service';
import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
            <div>
                <h1>{{pageTitle}}</h1>
                <pm-products></pm-products>
                <pm-form></pm-form>
            </div>
`,
    providers: [ProductService]
})
export class AppComponent {
    pageTitle: string = 'ACME Product Management';
}
