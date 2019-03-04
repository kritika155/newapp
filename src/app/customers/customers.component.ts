import { Component, OnInit } from '@angular/core';
import { Customer} from '../customer';
import { CUSTOMERS } from '../customermock';
@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers = CUSTOMERS;
  customer: Customer = {
    id: 0, 
    name: '',
    email:'' 

  };
  addCustomer()
  {
    if((this.customer.name.length==0)&&(this.customer.email.length==0))
    {
      alert("Please the form");
    }
    else
         if((this.customer.name.length>0)&&(this.customer.email.length>0))
            {
              
                this.customer.id=this.customers.length+1;
                this.customers.push(this.customer);
                this.customer =  {
                  id: 0, 
                  name: '',
                  email:'' 
              
                };

              
            }
  }
  edit()
  {
    var customerList:Customer[]=[];
    for(var i=0;i<this.customers.length;i++)
    {
      this.selectedCustomer = this.customers[i];

        customerList.push(this.customers[i]);
      
    }
       this.customers=customerList;
  }
  deleteCustomer(num)
  
  {
    var customerList:Customer[]=[];
    for(var i=0;i<this.customers.length;i++)
    {
      if(this.customers[i].id!=num)
      {
        customerList.push(this.customers[i]);
        
      }
      
    }
       this.customers=customerList;
  }
  constructor() { }

  ngOnInit() {
  }
  selectedCustomer: Customer;
  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }
}
