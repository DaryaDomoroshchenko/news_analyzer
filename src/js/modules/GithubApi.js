export default class GithubApi {

  constructor(URL_GITHUB_API) {
    this.URL_GITHUB_API = URL_GITHUB_API;
  }

  getCommits() {
    return fetch(this.URL_GITHUB_API)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  };
}
