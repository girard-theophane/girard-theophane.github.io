import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./modules/material/material.module";

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormationComponent } from './formation/formation.component';
import { ProfessionnalExpComponent } from './professionnal-exp/professionnal-exp.component';


@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		FormationComponent,
		ProfessionnalExpComponent
	],
	imports: [
		BrowserModule,
		MaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
