
export class UpdateProfileDto {
  fullname: string;
  dob: string;
  constructor(
    fullname: string,
    dob: string,
  ) {
    this.fullname = fullname;
    this.dob = dob;
  }
}
