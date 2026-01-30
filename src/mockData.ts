import type {Trip} from "./components/Card.tsx";

export const mockData: Trip[] = [
    {
        id: 1,
        visaType: 'ШЕНГЕНСКАЯ ВИЗА',
        country: 'Франция',
        status: 'В процессе',
        startDate: '15 Июл 2024',
        endDate: '30 Июл 2024',
        progressText: 'Заполнение анкеты',
        progress: 65,
        paymentStatus: 'Оплачено',
    },
    {
        id: 2,
        visaType: 'ШЕНГЕНСКАЯ ВИЗА',
        country: 'Италия',
        status: 'В процессе',
        startDate: '10 Авг 2024',
        endDate: '25 Авг 2024',
        progressText: 'Загрузка документов',
        progress: 25,
        paymentStatus: 'Ожидает оплаты',
    },
    {
        id: 3,
        visaType: 'ШЕНГЕНСКАЯ ВИЗА',
        country: 'Испания',
        status: 'Завершена',
        startDate: '20 Янв 2024',
        endDate: '05 Фев 2024',
        progressText: 'Виза получена',
        progress: 100,
        paymentStatus: 'Оплачено',
    }
];