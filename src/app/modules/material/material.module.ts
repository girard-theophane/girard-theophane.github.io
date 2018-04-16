import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule,MatCardModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
	imports: 
	[
		MatButtonModule,
		MatToolbarModule,
		FlexLayoutModule,
		MatCardModule
	],
	exports: 
	[
		MatButtonModule,
		MatToolbarModule,
		FlexLayoutModule,
		MatCardModule
	],
	declarations: []
})
export class MaterialModule { }
