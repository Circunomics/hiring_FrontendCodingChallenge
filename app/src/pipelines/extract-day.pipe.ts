import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractDay'
})
export class ExtractDayPipe implements PipeTransform {

  transform(value: string): string | null {
    const date = new Date(value);
    const today = new Date();

    if (date > today) {
      return null;
    }

    if (date.getFullYear() === today.getFullYear()) {
      if (date.getMonth() === today.getMonth()) {
        this.handleSameMonth(date, today);
      }
      this.handleSameYear(date, today);
    }

    return this.handleDifferntYears(date, today);
  }


  handleSameMonth(date: Date, today: Date): string {
    if (date.getDate() === today.getDate()) {
      return 'today';
    }
    if (date.getDate() === today.getDate() - 1) {
      return 'yesterday';
    }

    return `${today.getDate() - date.getDate()} days ago`;
  }

  handleSameYear(date: Date, today: Date): string {
    if (date.getMonth() === today.getMonth() - 1) {
      return 'last month';
    }

    return `${today.getMonth() - date.getMonth()} months ago`;
  }

  handleDifferntYears(date: Date, today: Date): string {
    if (date.getFullYear() === today.getFullYear() - 1) {
      return 'last year';
    }

    return `${today.getFullYear() - date.getFullYear()} years ago`;
  }
}
