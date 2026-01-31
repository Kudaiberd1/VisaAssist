export interface Trip {
    id: number;
    visaType: string;
    country: string;
    startDate: string;
    endDate: string;
    progressText: string;
    progress: number;
    tripData?: TripData;
}

export interface TripData {
    personalInfo: PersonalInfo;
    visaInfo: VisaInfo;
    visaSituation: VisaSituation;
    startDate: string;
    endDate: string;
}

export interface PersonalInfo {
    secondName: string;
    firstName: string;
    dateOfBirth: string;
    citizenship: string;
    passportNumber: string;
    passportIssueDate: string;
    passportExpiryDate: string;
}

export interface VisaInfo {
    country: string;
    visaType: string;
    applicationCity: string;
}

export interface VisaSituation {
    employmentStatus: string;
    planTrip: string;
    hasSponsor: boolean;
    visaHistory: boolean;
}