import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  numbers = '';
  protocol;
  lastval: number;
  curoperator: string;


  public passNum(arg: any): void{

    this.numbers += arg.toString();

  }

  public isEmpty(): boolean{

    return this.numbers.length < 1;

  }

  public isLastValSet(): boolean{

    return this.lastval != null;

  }


  public plusEqual(): void{

  if(!this.isEmpty()){

    if(!this.isLastValSet()){

      this.lastval = Number(this.numbers);
      this.clearCall();

    }
    this.numbers = this.calculate(this.lastval, Number(this.numbers), this.curoperator);

  }

  }

  public divisor(): void{

    if(!this.isEmpty()){

      this.lastval = Number(this.numbers);
      this.clearCall();
      this.curoperator = "/";

    }

  }

  public multiplier(): void{

    if(!this.isEmpty()){

      this.lastval = Number(this.numbers);
      this.clearCall();
      this.curoperator = "*";

    }

  }

  public minus(): void{

    if(!this.isEmpty()){

      this.lastval = Number(this.numbers);
      this.clearCall();
      this.curoperator = "-";

    }

  }

  public clearCall(): void{

    this.numbers = "";


  }

  public insertDot(){

    if(!this.isEmpty() && !this.numbers.includes(".")){

      this.numbers += ".";

    }

  }

  public calculate(num1: number, num2: number, operator: any): string{

    let returnage: number;

    if(operator == "-"){

      returnage = num1 - num2;
      this.lastval = null;
      return returnage.toString();

    }
    if(operator == "/"){

      returnage = num1/num2;
      this.lastval = null;
      return returnage.toString();

    }
    if(operator == "*"){

      returnage = num1*num2;
      this.lastval = null;
      return returnage.toString();

    }

    returnage = num1+num2;
    this.lastval = null;
    return returnage.toString();

  }

}
