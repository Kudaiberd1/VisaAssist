import type {
  Trip,
  TripData,
  PersonalInfo,
  VisaInfo,
  VisaSituation,
} from "./features/trips/type.ts";

const emptyPersonalInfo: PersonalInfo = {
  secondName: "",
  firstName: "",
  dateOfBirth: "",
  citizenship: "Российская Федерация",
  passportNumber: "",
  passportIssueDate: "",
  passportExpiryDate: "",
};

const emptyVisaInfo: VisaInfo = {
  country: "",
  visaType: "ШЕНГЕНСКАЯ",
  applicationCity: "",
};

const emptyVisaSituation: VisaSituation = {
  employmentStatus: "",
  planTrip: "",
  hasSponsor: false,
  visaHistory: false,
};

const createEmptyTripData = (): TripData => ({
  personalInfo: { ...emptyPersonalInfo },
  visaInfo: { ...emptyVisaInfo },
  visaSituation: { ...emptyVisaSituation },
    startDate: "",
    endDate: "",
});

let trips: Trip[] = [
  {
    id: 1,
    visaType: "ШЕНГЕНСКАЯ",
    country: "Франция",
    startDate: "15 Июл 2024",
    endDate: "30 Июл 2024",
    progressText: "Заполнение анкеты",
    progress: 65,
    tripData: createEmptyTripData(),
  },
  {
    id: 2,
    visaType: "ШЕНГЕНСКАЯ",
    country: "Италия",
    startDate: "10 Авг 2024",
    endDate: "25 Авг 2024",
    progressText: "Загрузка документов",
    progress: 25,
    tripData: createEmptyTripData(),
  },
  {
    id: 3,
    visaType: "ШЕНГЕНСКАЯ",
    country: "Испания",
    startDate: "20 Янв 2024",
    endDate: "05 Фев 2024",
    progressText: "Виза получена",
    progress: 100,
    tripData: createEmptyTripData(),
  },
];

type Listener = () => void;
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((fn) => fn());
}

export function subscribeTrips(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getTrips(): Trip[] {
  return trips;
}

export function getTripById(id: number): Trip | undefined {
  return trips.find((t) => t.id === id);
}

export function addTrip(input: Omit<Trip, "id">): Trip {
  const maxId = trips.reduce((m, t) => (t.id > m ? t.id : m), 0);
  const newTrip: Trip = {
    ...input,
    id: maxId + 1,
    tripData: input.tripData ?? createEmptyTripData(),
  };

  trips = [newTrip, ...trips];
  notify();
  return newTrip;
}

function isFilledString(v: unknown): boolean {
  return typeof v === "string" && v.trim().length > 0;
}

function calculateOverallTripProgress(tripData: TripData): number {
  const requiredStrings: string[] = [
    tripData.personalInfo.secondName,
    tripData.personalInfo.firstName,
    tripData.personalInfo.dateOfBirth,
    tripData.personalInfo.citizenship,
    tripData.personalInfo.passportNumber,
    tripData.personalInfo.passportIssueDate,
    tripData.personalInfo.passportExpiryDate,

    tripData.visaInfo.country,
    tripData.visaInfo.visaType,
    tripData.visaInfo.applicationCity,

    tripData.visaSituation.employmentStatus,
    tripData.visaSituation.planTrip,
  ];

  const total = requiredStrings.length;
  const filled = requiredStrings.filter(isFilledString).length;

  return Math.round((filled / total) * 100);
}

function progressTextByKey(key: keyof TripData): string {
  if (key === "personalInfo") return "Личная информация";
  if (key === "visaInfo") return "Страна и тип визы";
  return "Ваша ситуация";
}

export function updateTrip(
  id: number,
  patch: Partial<Omit<Trip, "id">>
): Trip {
  const idx = trips.findIndex((t) => t.id === id);
  if (idx === -1) throw new Error("Trip not found");

  const baseTripData: TripData = trips[idx].tripData ?? createEmptyTripData();

  const updated: Trip = {
    ...trips[idx],
    ...patch,
    tripData: {
      ...baseTripData,
      ...(patch.tripData ?? {}),
    },
    id,
  };

  const next = trips.slice();
  next[idx] = updated;
  trips = next;
  notify();
  return updated;
}

type TripDataSectionKey = "personalInfo" | "visaInfo" | "visaSituation";

export function updateTripData<K extends TripDataSectionKey>(
  id: number,
  key: K,
  value: Partial<TripData[K]>
) {
  const trip = getTripById(id);
  if (!trip) throw new Error("Trip not found");

  const baseTripData: TripData = trip.tripData ?? createEmptyTripData();

  const prevSection = baseTripData[key] ?? ({} as TripData[K]);

  const nextTripData = {
    ...baseTripData,
    [key]: {
      ...prevSection,
      ...value,
    },
  } as TripData;

  const patch: Partial<Trip> = {
    tripData: nextTripData,
  };

  if (key === "visaInfo") {
    const v = value as Partial<TripData["visaInfo"]>;
    if (v.country !== undefined) patch.country = v.country;
    if (v.visaType !== undefined) patch.visaType = v.visaType;
  }

  patch.progress = calculateOverallTripProgress(nextTripData);
  patch.progressText = progressTextByKey(key);

  updateTrip(id, patch);
}

export const mockData: Trip[] = trips;

// ===== Checklist (demo, in-memory, per trip) =====
export type ChecklistGroupKey = "required" | "situation" | "oftenForgot";

export type ChecklistItem = {
    id: string;
    title: string;
    subtitle: string;
    exampleLabel?: string;
    exampleHref?: string;
    done: boolean;
    group: ChecklistGroupKey;
};

function defaultChecklist(): ChecklistItem[] {
    return [
        // Required
        {
            id: "passport",
            title: "Заграничный паспорт",
            subtitle: "Действителен > 3 мес. от поездки",
            exampleLabel: "Пример",
            exampleHref: "#",
            done: true,
            group: "required",
        },
        {
            id: "photo",
            title: "Фотографии (2 шт.)",
            subtitle: "Размер 3.5 × 4.5 см, светлый фон",
            exampleLabel: "Пример",
            exampleHref: "#",
            done: false,
            group: "required",
        },
        {
            id: "insurance",
            title: "Медицинская страховка",
            subtitle: "Покрытие от €30,000",
            exampleLabel: "Пример",
            exampleHref: "#",
            done: true,
            group: "required",
        },

        // Situation-based
        {
            id: "work-letter",
            title: "Справка с места работы",
            subtitle: "На бланке компании с печатью",
            exampleLabel: "Пример",
            exampleHref: "#",
            done: false,
            group: "situation",
        },
        {
            id: "bank-statement",
            title: "Выписка из банка",
            subtitle: "Остаток средств за 3 месяца",
            exampleLabel: "Пример",
            exampleHref: "#",
            done: false,
            group: "situation",
        },

        // Often forgotten
        {
            id: "consent",
            title: "Согласие на обработку данных",
            subtitle: "Форма визового центра",
            exampleLabel: "Пример",
            exampleHref: "#",
            done: true,
            group: "oftenForgot",
        },
        {
            id: "tickets",
            title: "Бронь авиабилетов",
            subtitle: "В обе стороны с кодом брони",
            exampleLabel: "Пример",
            exampleHref: "#",
            done: false,
            group: "oftenForgot",
        },
    ];
}

const checklistByTripId = new Map<number, ChecklistItem[]>();
const checklistListenersByTripId = new Map<number, Set<Listener>>();

function notifyChecklist(tripId: number) {
    const set = checklistListenersByTripId.get(tripId);
    if (!set) return;
    set.forEach((fn) => fn());
}

export function getChecklist(tripId: number): ChecklistItem[] {
    if (!checklistByTripId.has(tripId)) {
        checklistByTripId.set(tripId, defaultChecklist());
    }
    return checklistByTripId.get(tripId)!;
}

export function subscribeChecklist(tripId: number, listener: Listener) {
    if (!checklistListenersByTripId.has(tripId)) {
        checklistListenersByTripId.set(tripId, new Set());
    }
    checklistListenersByTripId.get(tripId)!.add(listener);
    return () => {
        checklistListenersByTripId.get(tripId)?.delete(listener);
    };
}

export function setChecklistItemDone(tripId: number, itemId: string, done: boolean) {
    const list = getChecklist(tripId);
    const next = list.map((it) => (it.id === itemId ? { ...it, done } : it));
    checklistByTripId.set(tripId, next);
    notifyChecklist(tripId);
}

export function toggleChecklistItem(tripId: number, itemId: string) {
    const list = getChecklist(tripId);
    const next = list.map((it) => (it.id === itemId ? { ...it, done: !it.done } : it));
    checklistByTripId.set(tripId, next);
    notifyChecklist(tripId);
}