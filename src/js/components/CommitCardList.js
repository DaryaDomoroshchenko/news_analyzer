export default class CommitCardList {

  constructor(createCommitCard, commitsContainer, COMMITS_NUMBER) {

    this.createCommitCard = createCommitCard;
    this.commitsContainer = commitsContainer;
    this.COMMITS_NUMBER = COMMITS_NUMBER;
  }

  showCommits(commits) {

    if (commits.length >= this.COMMITS_NUMBER) {
      for (let i = 0; i < this.COMMITS_NUMBER; i++) {
        let commitCardElem = this.createCommitCard(commits[i]);
        let commitCard = commitCardElem.createCommitCard(commits[i]);
        this.addCommitCard(commitCard);
      }
    }

    else {
      for (let i = 0; i < commits.length; i++) {
        let commitCardElem = this.createCommitCard(commits[i]);
        let commitCard = commitCardElem.createCommitCard(commits[i]);
        this.addCommitCard(commitCard);
      }
    }
  }

  // Добавляет карточку в список
  addCommitCard(commitCard) {
    this.commitsContainer.appendChild(commitCard);
  }
}
