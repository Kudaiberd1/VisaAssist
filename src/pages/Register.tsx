import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth/AuthContext";

export default function Register() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(true);
    const [loading, setLoading] = useState(false);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!agree) return;
        setLoading(true);
        try {
            login();
            navigate("/dashboard");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[rgb(246,246,248)]">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg gap-8 lg:grid-cols-5">

                    <div className="lg:col-span-3">
                        <div className="rounded-3xl sm:bg-white p-8 sm:shadow-sm">
                            <h2 className="text-xl font-semibold text-slate-900">Регистрация</h2>
                            <p className="mt-2 text-sm text-slate-600">
                                Заполните форму — и сразу попадёте в «Мои поездки».
                            </p>

                            <form onSubmit={onSubmit} className="mt-7 space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-slate-700">Имя</label>
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Ваше имя"
                                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-slate-700">Email</label>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-slate-700">Пароль</label>
                                    <input
                                        placeholder="Любой пароль (демо)"
                                        type="password"
                                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                    />
                                </div>

                                <label className="flex items-start gap-3 pt-2 text-sm text-slate-600">
                                    <input
                                        type="checkbox"
                                        checked={agree}
                                        onChange={(e) => setAgree(e.target.checked)}
                                        className="mt-1 h-4 w-4 rounded border-slate-300"
                                    />
                                    <span>
                    Я согласен с условиями сервиса и политикой конфиденциальности (демо).
                  </span>
                                </label>

                                <button
                                    disabled={!agree || loading}
                                    className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading ? "Создаём..." : "Создать аккаунт"}
                                </button>

                                <p className="pt-2 text-sm text-slate-600">
                                    Уже есть аккаунт?{" "}
                                    <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700">
                                        Войти
                                    </Link>
                                </p>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}