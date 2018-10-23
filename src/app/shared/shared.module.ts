import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MeService } from './me.service';
import { TabService } from './tab.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    providers: [MeService, TabService],
    exports: [
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }
