import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../layouts/Header.tsx";
import { MdOutlineFileDownload } from "react-icons/md";
import {
  getChecklist,
  subscribeChecklist,
  toggleChecklistItem,
  type ChecklistItem,
} from "../mockData";

const Profile = () => {
  const nav = useNavigate();
  const { id } = useParams<{ id: string }>();

  const parsedId = Number(id);
  const tripId = Number.isFinite(parsedId) ? parsedId : 1;
  const [items, setItems] = useState<ChecklistItem[]>(() =>
    tripId ? getChecklist(tripId) : []
  );

  useEffect(() => {
    if (!tripId) return;

    setItems(getChecklist(tripId));

    const unsub = subscribeChecklist(tripId, () => {
      setItems(getChecklist(tripId));
    });

    return unsub;
  }, [tripId]);

  const { doneCount, totalCount, percent } = useMemo(() => {
    const total = items.length;
    const done = items.filter((x) => x.done).length;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);
    return { doneCount: done, totalCount: total, percent: pct };
  }, [items]);

  const toggle = (itemId: string) => {
    if (!tripId) return;
    toggleChecklistItem(tripId, itemId);
  };

  const grouped = useMemo(() => {
    const required = items.filter((x) => x.group === "required");
    const situation = items.filter((x) => x.group === "situation");
    const oftenForgot = items.filter((x) => x.group === "oftenForgot");
    return { required, situation, oftenForgot };
  }, [items]);

  const ChecklistRow = ({ item }: { item: ChecklistItem }) => {
    return (
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M5 2a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H5zm2 6a1 1 0 011-1h3a1 1 0 010 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 010 2H8a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">{item.title}</p>
            <div className="mt-0.5 flex flex-wrap items-center gap-2">
              <p className="text-sm text-slate-600">{item.subtitle}</p>
              {item.exampleLabel && (
                <a
                  href={item.exampleHref || "#"}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  {item.exampleLabel}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={
              item.done
                ? "rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                : "rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700"
            }
          >
            {item.done ? "Готово" : "Не готово"}
          </span>

          <button
            type="button"
            onClick={() => toggle(item.id)}
            className={
              item.done
                ? "inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600"
                : "inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:bg-slate-50"
            }
            aria-label={item.done ? "Mark as not done" : "Mark as done"}
          >
            {item.done ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414l2.793 2.793 6.793-6.793a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <span className="h-5 w-5 rounded-full border-2 border-slate-300" />
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="flex h-full flex-col">
        <Header />

        <div className="bg-[rgb(246,246,248)] py-6 sm:py-8">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h1 className="mb-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Персональный чек-лист
            </h1>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[rgb(51,92,151)]">
                Этот список сформирован на основе ваших данных для шенгенской визы.
              </p>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-200 sm:w-auto"
              >
                <MdOutlineFileDownload className="h-5 w-5" />
                Скачать PDF
              </button>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Общий прогресс заполнения
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {doneCount} из {totalCount} документов готово
                  </p>
                </div>
                <p className="text-2xl font-bold text-blue-600">{percent}%</p>
              </div>

              <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>

            {/* Sections */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-slate-900">
                Обязательные документы
              </h2>
              <div className="mt-4 space-y-3">
                {grouped.required.map((it) => (
                  <ChecklistRow key={it.id} item={it} />
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold text-slate-900">По вашей ситуации</h2>
              <div className="mt-4 space-y-3">
                {grouped.situation.map((it) => (
                  <ChecklistRow key={it.id} item={it} />
                ))}
              </div>
            </div>

            <div className="mt-10 pb-28">
              <h2 className="text-xl font-bold text-slate-900">Часто забывают</h2>
              <div className="mt-4 space-y-3">
                {grouped.oftenForgot.map((it) => (
                  <ChecklistRow key={it.id} item={it} />
                ))}
              </div>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Готовы продолжить?</p>
                  <p className="text-sm text-slate-600">Заполнение анкеты займёт около 10 минут</p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    nav("/dashboard");
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:w-auto"
                >
                  Перейти к анкете
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 001.06 0l4.72-4.72a.75.75 0 000-1.06L8.27 4.27a.75.75 0 00-1.06 1.06L11.44 9.56H3.75a.75.75 0 000 1.5h7.69l-4.23 4.21a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;