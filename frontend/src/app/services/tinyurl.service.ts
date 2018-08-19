import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { API_URL } from "../constants/config";

import { TinyURL } from "../models";

@Injectable({
  providedIn: "root"
})
export class TinyurlService {
  apiDomain = API_URL + "tinyurl/";
  authToken = "";
  res = new TinyURL();
  constructor(private http: HttpClient) {}

  tinyUrl(model: TinyURL) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.apiDomain;
      let httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json; charset=UTF-8"
        })
      };

      this.http
        .post(apiURL, model, httpOptions)
        .toPromise()
        .then(
          res => {
            // Success
            let _result = <TinyURL>res;
            resolve(_result);
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

  validate(code: string) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.apiDomain + code;
      let httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json; charset=UTF-8"
        })
      };

      this.http
        .get(apiURL)
        .toPromise()
        .then(
          res => {
            // Success
            let _result = <TinyURL>res;
            resolve(_result);
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
}
