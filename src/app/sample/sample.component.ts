import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  buttons=[{name:"1"},{name:"2"}];
  
addbutton()
{
  var newButton={name:""+(this.buttons.length+1)};
  this.buttons.push(newButton);
  
    //  var btn = document.createElement("BUTTON");
  
    //   var t = document.createTextNode(this.i);
  
    //   btn.setAttribute("style","color:green;font-size:14px");
      
    //   btn.appendChild(t);
    //   document.body.appendChild(btn);
    //   this.i++;
}
remove(num)
{
  
    {
      this.buttons.splice(num,1);
    }
  
}
  constructor()
   {
    
  }

  ngOnInit() {
  }

}
