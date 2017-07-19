import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http'
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service'

@Injectable()
export class VcenterService {

  constructor(private http: Http,
  private auth: AuthService) { }

  async getvm() : Promise<any> {
      return new Promise<any>((resolve, reject) => {
         this.auth.getvms().subscribe(data => {
            var head = new Headers();
            head.append('Content-Type', 'application/json');
            head.append('Accept', 'application/json')
            head.append('vmware-use-header-authn', 'test')
            head.append('vmware-api-session-id', data)

            this.http.get('https://hlcorevc01.humblelab.com/rest/vcenter/vm', {
                headers: head
            })
                .map(res => res.json().value)
                .subscribe(data => {
                    resolve(data);
                });
            });
      });
  }
}