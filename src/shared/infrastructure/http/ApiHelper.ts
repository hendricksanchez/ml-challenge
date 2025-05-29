export class ApiHelper {
  static readonly API_URL: string = process.env.API_URL!;

  static prepareUrl(pathname: string) {
    return `${this.API_URL}/${pathname}`;
  }
}
