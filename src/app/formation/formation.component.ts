import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'app-formation',
	templateUrl: './formation.component.html',
	styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit 
{

	section;
	message: string;
	accordionOpened: boolean;

	constructor() 
	{
		this.accordionOpened = false
		this.message = "hello"
	}
	
	ngOnInit() 
	{
		
	}
	
	ngAfterViewInit()
	{
		// this.section = $('li.accordion');
		// this.section.click(x =>
		// {
		// 	this.toggleAccordion(x)
		// });

		// do your template manipulation here
		// $('.section-title').css("background-color","red");
		// $('.section-title').css("color","red");
	}
	
	toggleAccordion(x) 
	{
		// this.section.removeClass('active');
		// console.log(x);
		
		// $(this.section[x.delegateTarget.childElementCount]).addClass('active');
		// console.log($(this.section[x.delegateTarget.childElementCount - 1]));
		
		
	}

	openAccordion(msg)
	{
		this.accordionOpened = !this.accordionOpened
		this.message = msg
		setTimeout(() => 
		{
			if(!this.accordionOpened)
			{
				this.accordionOpened = !this.accordionOpened
			}
		}, 700);
	}
}
