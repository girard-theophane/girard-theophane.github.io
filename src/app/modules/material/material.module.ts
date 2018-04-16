import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule,MatCardModule,MatDividerModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
	imports: 
	[
		MatButtonModule,
		MatToolbarModule,
		FlexLayoutModule,
		MatCardModule,
		MatDividerModule
	],
	exports: 
	[
		MatButtonModule,
		MatToolbarModule,
		FlexLayoutModule,
		MatCardModule,
		MatDividerModule
	],
	declarations: []
})
export class MaterialModule { }
