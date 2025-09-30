import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SortingOrderType, SortingReposByType} from '../types/sorting-order.type';
import {Observable, tap} from 'rxjs';
import {RepoInterface} from '../interfaces/repo.interface';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  private baseUrl = 'https://api.github.com/'
  repositories: WritableSignal<RepoInterface []> = signal([]);

  constructor(private http: HttpClient) {
  }


  getRepos(
    order: SortingOrderType = 'desc',
    sort: SortingReposByType = 'stars', page = 1): Observable<any> {
    const params: HttpParams = new HttpParams({
      fromObject: {
        'q': `created>:${new Date().getDate()}`,
        sort,
        order,
        page
      }
    });
    return this.http.get<any>(`${this.baseUrl}search/repositories`, {params: params});
  }
}
