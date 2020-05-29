export default class CommitCardList {

  constructor(createCommitCard, commitsContainer, COMMITS_NUMBER) {

    this.createCommitCard = createCommitCard;
    this.commitsContainer = commitsContainer;
    this.COMMITS_NUMBER = COMMITS_NUMBER;
  }

  showCommits(commits) {

    if (commits.length >= this.COMMITS_NUMBER) {
      for (let i = 0; i < this.COMMITS_NUMBER; i++) {
        const commitCardElem = this.createCommitCard(commits[i]);
        const commitCard = commitCardElem.createCommitCard(commits[i]);
        this.addCommitCard(commitCard);
      }
    }

    else {
      for (let commit of commits) {
        const commitCardElem = this.createCommitCard(commit);
        const commitCard = commitCardElem.createCommitCard(commit);
        this.addCommitCard(commitCard);
      }
    }
  }

  // Добавляет карточку в список
  addCommitCard(commitCard) {
    this.commitsContainer.appendChild(commitCard);
  }
}
