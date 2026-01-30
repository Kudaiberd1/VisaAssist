import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth/AuthContext";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
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
                <div className="items-center justify-center">
                    <div className="rounded-3xl sm:bg-white p-8 mx-auto sm:shadow-sm max-w-lg">
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                            Добро пожаловать
                        </h2>
                        <p className="mt-2 text-sm text-slate-600">
                            В демо-режиме можно ввести любые данные.
                        </p>

                        <form onSubmit={onSubmit} className="mt-7 space-y-4">
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    type="password"
                                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>

                            <div className="flex items-center justify-end pt-1">
                                <button
                                    type="button"
                                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                                    onClick={() => alert("Demo mode: reset password is disabled")}
                                >
                                    Забыли пароль?
                                </button>
                            </div>

                            <button
                                disabled={loading}
                                className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {loading ? "Входим..." : "Войти"}
                            </button>

                            <div className="flex items-center gap-3 py-2">
                                <div className="h-px flex-1 bg-slate-200" />
                                <span className="text-xs text-slate-500">или</span>
                                <div className="h-px flex-1 bg-slate-200" />
                            </div>

                            <button
                                type="button"
                                className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
                                onClick={() => {
                                    login();
                                    navigate("/dashboard");
                                }}
                            >
                                Войти в демо одним кликом
                            </button>

                            <p className="pt-2 text-sm text-slate-600">
                                Нет аккаунта?{" "}
                                <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-700">
                                    Зарегистрироваться
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}