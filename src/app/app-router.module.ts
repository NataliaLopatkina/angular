import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Page1 } from '../components/page1/page1.component';
import { Page2 } from '../components/page2/page2.component';

const routes: Routes = [
    {
        path: 'page-one', component: Page1
    },
    {
        path: 'page-two', component: Page2
    }
]
    
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule{}