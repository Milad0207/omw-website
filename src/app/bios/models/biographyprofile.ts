export interface BiographyProfile {
    id: number; 
    languagetype: languagetype; 
    fullname: string; 
    quote: string;
    jobtitle: string;
    jobs: [string];

    life: string;
    pronunciation: string;
    location: string;
    knownfor: string;

    funfact: string;
    mathhero: string;
    mathherounderbullet: string;
    mathherobullet: [string];

    jobdescription: string;
    jobdescriptionbullets: [string];
    references: [string];
    referenceslinks: [string];
    mathherobulletlinks: [string];
    profileimage: string;
    profileimage2: string;
    photocreditimage: string;
    namelink: string;
    namelinktext: string;
    nametext: string;
}

export enum languagetype {
    ENG = "eng",
    SP = "sp"
  }