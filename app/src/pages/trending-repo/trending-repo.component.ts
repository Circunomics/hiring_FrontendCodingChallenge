import {Component, OnInit} from '@angular/core';
import {ReposService} from '../../services/repos.service';
import {RepoInterface} from '../../interfaces/repo.interface';
import {BadgeComponent} from '../../components/badge/badge.component';
import {decimalNumbersToStringMapper} from '../../utils/utils';
import {ExtractDayPipe} from '../../pipelines/extract-day.pipe';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-trending-repo',
  imports: [
    BadgeComponent,
    ExtractDayPipe
  ],
  templateUrl: './trending-repo.component.html',
  styleUrl: './trending-repo.component.scss'
})
export class TrendingRepoComponent implements OnInit {
  repos: RepoInterface [] = [];

  constructor(private reposService: ReposService) {
    this.reposService.getRepos().subscribe(res => {
      this.repos = res.items
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
        })
    });
  }

  ngOnInit(): void {

  }
}
