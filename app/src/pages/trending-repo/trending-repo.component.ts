import {Component, OnInit, signal} from '@angular/core';
import {ReposService} from '../../services/repos.service';
import {RepoInterface} from '../../interfaces/repo.interface';
import {BadgeComponent} from '../../components/badge/badge.component';
import {decimalNumbersToStringMapper} from '../../utils/utils';
import {ExtractDayPipe} from '../../pipelines/extract-day.pipe';
import {InfiniteScrollDirective} from 'ngx-infinite-scroll';
import {SortingOrderType, SortingReposByType} from '../../types/sorting-order.type';

@Component({
  selector: 'app-trending-repo',
  imports: [
    BadgeComponent,
    ExtractDayPipe,
    InfiniteScrollDirective
  ],
  templateUrl: './trending-repo.component.html',
  styleUrl: './trending-repo.component.scss'
})
export class TrendingRepoComponent implements OnInit {
  repos: RepoInterface [] = [];
  completed = false;
  order: SortingOrderType = 'desc';
  sortBy: SortingReposByType = 'stars';
  placeholders: string [] = Array(25).fill('');
  page = 0;
  loading = signal(false);

  constructor(private reposService: ReposService) {}

  ngOnInit(): void {
    this.loadRepos();
  }

  loadRepos(): void {
    if (this.completed) return;
    this.page++;
    this.loading.set(true);
    this.reposService
      .getRepos(
        this.order,
        this.sortBy,
        this.page
      )
      .subscribe(res => {
        this.completed = !!res.incomplete_results;
        const items = res.items
          .map((item: any) => {
            return {
              description: item.description,
              name: item.name,
              avatar: item.owner?.avatar_url,
              author: item.owner?.login,
              issues: decimalNumbersToStringMapper(item.open_issues_count),
              stars: decimalNumbersToStringMapper(item.stargazers_count),
              submitted: item.created_at
            }
          });

        this.repos = [...this.repos, ...items];
        this.loading.set(false);
      });
  }
}
