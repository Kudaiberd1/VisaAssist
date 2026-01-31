import type {TripData} from "../../features/trips/type.ts";

export function validateTripData(tripData: TripData): string[] {
    const errors: string[] = [];

    const p = tripData.personalInfo;
    const v = tripData.visaInfo;
    const s = tripData.visaSituation;

    if (!p.secondName) errors.push("Не указана фамилия (латиницей)");
    if (!p.firstName) errors.push("Не указано имя (латиницей)");
    if (!p.dateOfBirth) errors.push("Не указана дата рождения");
    if (!p.citizenship) errors.push("Не указано гражданство");
    if (!p.passportNumber || p.passportNumber.length < 9)
        errors.push("Проверьте номер загранпаспорта (недостаточно символов)");
    if (!p.passportIssueDate)
        errors.push("Отсутствует дата выдачи паспорта");
    if (!p.passportExpiryDate)
        errors.push("Отсутствует срок действия паспорта");

    if (!v.country) errors.push("Не указана страна назначения");
    if (!v.visaType) errors.push("Не указан тип визы");
    if (!v.applicationCity) errors.push("Не указан город подачи");

    if (!s.employmentStatus) errors.push("Не выбрана занятость");
    if (!s.planTrip) errors.push("Не указан состав поездки");

    return errors;
}