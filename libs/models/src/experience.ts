export interface IExperience {
  role?: string;
  company?: string;
  isShowLocation?: boolean;
  location?: string;
  isShowDate?: boolean;
  fromMonth?: string;
  fromYear?: string;
  toMonth?: string;
  toYear?: string;
  untilNow?: boolean;
  isShowPoints?: boolean;
  points?: string[];
}

export class ExperienceModel {
  constructor(private input: Partial<IExperience>) {}

  getRole(): string | undefined {
    return this.input.role;
  }

  getCompany(): string | undefined {
    return this.input.company;
  }

  getIsShowLocation(): boolean | undefined {
    return this.input.isShowLocation;
  }

  getLocation(): string | undefined {
    return this.input.location;
  }

  getIsShowDate(): boolean | undefined {
    return this.input.isShowDate;
  }

  getFromMonth(): string | undefined {
    return this.input.fromMonth;
  }

  getFromYear(): string | undefined {
    return this.input.fromYear;
  }

  getToMonth(): string | undefined {
    return this.input.toMonth;
  }

  getToYear(): string | undefined {
    return this.input.toYear;
  }

  getUntilNow(): boolean | undefined {
    return this.input.untilNow;
  }

  getIsShowPoints(): boolean | undefined {
    return this.input.isShowPoints;
  }

  getPoints(): string[] | undefined {
    return this.input.points;
  }
}
