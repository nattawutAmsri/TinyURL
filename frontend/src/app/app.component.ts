import { Component } from '@angular/core';
import { BASE_URL } from './constants/config';
import {TinyurlService} from './services/tinyurl.service';
import { TinyURL } from './models/index';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  result = new TinyURL;
  form = new TinyURL;
  constructor(private tinyurlService: TinyurlService,private activatedRoute: ActivatedRoute) {
    this.form.shortBaseUrl = BASE_URL;
    let code = this.activatedRoute.snapshot.paramMap.get("code");
    // console.log(this.activatedRoute.snapshot);
  }

  onClickGenerate() {
    this.form.shortBaseUrl = BASE_URL;


    if(this.form.originalUrl != "" && this.form.originalUrl !=null){
      this.tinyurlService.tinyUrl(this.form).then( (resp) => {
        this.form = <TinyURL>resp;
      }).catch((err) =>{
        this.form = new TinyURL;
        alert(err);
      });
    } else {
      alert("Invalid URL! Please check your url");
    }
  }
}
