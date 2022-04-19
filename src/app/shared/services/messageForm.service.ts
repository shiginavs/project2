import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MessageFormModel} from "../models/messageForm.model";

@Injectable()

export class MessageFormService{
  constructor( private http: HttpClient) {
  }

  createMessageForm(messageForm: MessageFormModel){
    return this.http.post('http://localhost:3001/messageForm', messageForm);
  }


}
