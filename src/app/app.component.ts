import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  title = 'Binding';
  about='Angular Interpolation';
  public giveMeRed="red";
  public giveMecolor="blue";
  disable=true;
  disable1=false;
  text1="MEAN: <b>Angular<b>";
  colortext="turquoise";
  name="Sneha";
  disable2=false;
  public successClass="success";
  public failClass="fail";
  public hasError=false;
  onClick(){
    alert("Hai Sneha!");
  }
  //
// imgUrl="https://www.google.com/search?q=angular+logo&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwion_evoNz3AhX8sJUCHSSoB1UQ_AUoAXoECAEQAw&biw=927&bih=973&dpr=1#imgrc=cBQTNGrkcnJ6tM";
  // imgUrl="https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
  // imgUrl="https://angular.io";
  // imgUrl="https://www.vectorlogo.zone/logos/angular/angular-icon.svg"
  imgUrl="https://www.vectorlogo.zone/logos/angular/angular-ar21.svg";
  getAbout(){
    return this.about;
  }
  min(a:number,b:number){
    return Math.min(a,b);
  
  }
  
}
