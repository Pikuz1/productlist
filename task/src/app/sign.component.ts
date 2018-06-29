import {Component,OnInit,Input} from "@angular/core";
import {FormServices} from "./services/FormServices";
import {FormGroup,FormBuilder,Validators} from "@angular/forms";
//import {FormMessagesComponent} from "../services/form_messages.component";
import {Router} from "@angular/router";
import {FormDataServices} from './services/formdata.services';
import {User} from './models/user';
@Component({
  moduleId: module.id,
  selector : "sign",
  providers:[
            FormServices,
          //  FormMessagesComponent,
            FormDataServices,
      
           ],
  styles:[`
  .container{
    padding:70px 0px 90px;
    }
  `],
  templateUrl:"signUpComponent.html"
})

export class SignUpComponent implements OnInit{
 @Input()  public _sign = false;
  registerForm:FormGroup;
  model = new User();

  constructor(private _fb:FormBuilder , 
              private _router:Router,
              private _formDataServices:FormDataServices
              )
              {}
  ngOnInit()
  {
  
 this.registerForm = this._fb.group({
     'FirstName':['',[Validators.required,FormServices.Username]],
  //   'LastName':['', [Validators.required,FormServices.lastname]],

      UsersCommunicationEntityObj:this._fb.group({
     'EmailId':['',[Validators.required,FormServices.Email]],
     'MobileNo': ['', [Validators.required, FormServices.Email]]
     }),
     UsersLoginEntityObj:this._fb.group({
     'UserName':['',[Validators.required]],
    'Password':['',[Validators.required,FormServices.Password]],
    //'password_confirm':['',[Validators.required]],
    })
  });
  
}

   save()
  {
    if(this.registerForm.valid && this.registerForm.dirty)
    {
       alert( "Welcome !" + `${this.registerForm.value.FirstName}`);   
         this._formDataServices.AddUsers(this.model)
                   .subscribe(data => {
                 alert('Registration successful');           
                 this._router.navigate(['/Login']);
                  this._sign = true;
                 });
                 }
               }
            }