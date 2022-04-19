import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Message} from "../../models/message.model";
import {MessageFormService} from "../../services/messageForm.service";
import {MessageFormModel} from "../../models/messageForm.model";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(private messageFormService: MessageFormService) {  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'name': new FormControl(null, [Validators.required]),
      'message': new FormControl(null, [Validators.required]),

    })

    this.message = new Message('danger', '');

  }

  private showMessage(message: Message){
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit(){
     const {email, name, message} = this.form.value;
     const messageForm = new MessageFormModel(email, message, name);


    this.messageFormService.createMessageForm(messageForm).subscribe( () => {
      if(messageForm) {
        this.showMessage({
          text: 'Ваше сообщение отправлено',
          type: 'success'

        })
      }
    })
    console.log(messageForm);

    this.form.reset();


  }

}
