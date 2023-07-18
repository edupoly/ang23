import { Component } from '@angular/core';

@Component({
  selector: 'abcd',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedGender:string="";
  selectedCountry:string='';
  selectedTechnologies:string[]=[];

  technologies = ['nodejs','angular','reactjs','bootstrap','java','python'];
  countries = ['india','pakistan','srilanka','japan'];

  title = 'ang23app';
  a=100;
  b=200;
  cl=true;
  students = ['anji','satya','deepti','lavanya']
  abc(){
    alert('hello')
  }
  constructor(){
    setInterval(()=>{
      this.cl=!this.cl;
    },1000)
  }
  selectTechnology(e:any){
    if(e.target.checked){
      this.selectedTechnologies.push(e.target.value)
    }
    else{
      var i = this.selectedTechnologies.indexOf(e.target.value);
      this.selectedTechnologies.splice(i,1)
    }
    console.log(this.selectedTechnologies)
  }
}

/*
component ts file
  data 
  event handlers
  logical work
*/

/*
 binding....
  1. data binding
    interpolation
      all javascript expression 
  2. event binding
  3. property binding
  4. twoway data binding
  5. *ngFor
  6. *ngIf
*/