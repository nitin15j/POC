export class LikeComponent {
  private noofLikes: number;
  private isLikeButtonSelected: boolean;

  constructor(_noOfLikes?: number, _islikeButtonSelected?: boolean) {
    this.noofLikes = _noOfLikes;
    this.isLikeButtonSelected = _islikeButtonSelected;
  }

  onClick() {
    if (this.isLikeButtonSelected) {
      this.noofLikes--;
      this.isLikeButtonSelected = false;
    } else {
      this.noofLikes++;
      this.isLikeButtonSelected = true;
    }

    console.log(
      `no. of likes : ${this.noofLikes}, button is on: ${
        this.isLikeButtonSelected
      }`
    );
  }
  get noOfLikes() {
    return this.noOfLikes;
  }

  get isLikeButtonSelectec() {
    return this.isLikeButtonSelected;
  }
}
