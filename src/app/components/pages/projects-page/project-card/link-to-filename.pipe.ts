import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkToFilename'
})
export class LinkToFilenamePipe implements PipeTransform {

  /**
   * Extract the filename from {{value}} if it is a valid URL
   * @param value
   */
  transform(value: string): string {
    return value.split("/").pop()?.split(".")[0] ?? "";
  }

}
