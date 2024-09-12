import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  length!: number;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  password: string = '';
  generated: boolean = false;


  onChangeLetter(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumber(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbol(){
    this.includeSymbols = !this.includeSymbols;
  }


  generatePassword(){
    this.password = '';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers= '0123456789';
    const symbols= '!@#$%&*';
    let validChar = '';

    if(this.includeLetters){
      validChar += letters;
    }

    if(this.includeNumbers){
      validChar += numbers;
    }

    if(this.includeSymbols){
      validChar += symbols;
    }

    for(let i=0; i<this.length; i++){
      const index = Math.floor(Math.random() * validChar.length);
      this.password += validChar[index];
    }

    this.generated = true;
    
    if(!this.includeLetters && !this.includeNumbers && !this.includeSymbols){
      this.length = 0;
      this.password = '';
      this.generated = false;
    }


    
  }

  
}
