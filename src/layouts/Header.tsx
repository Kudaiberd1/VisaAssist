import logo from "../assets/logo.svg"
import { useAuth } from "../store/auth/AuthContext.tsx";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {

    const { isAuth, logout } = useAuth();
    const nav = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);

    const closeMobile = () => setMobileOpen(false);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">

                <div
                    onClick={() => {
                        nav("/");
                        closeMobile();
                    }}
                    className="flex items-center gap-3 cursor-pointer"
                >
                    <img
                        src={logo}
                        className="h-12 w-12 rounded-lg object-contain"
                        alt="VisaAssist"
                    />
                    <span className="text-base font-semibold tracking-tight text-slate-900">
                        VisaAssist
                    </span>
                </div>

                <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
                    <nav className="flex items-center gap-3" aria-label="Primary">
                        <p
                            className="rounded-lg cursor-pointer px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            onClick={() => nav("/")}
                        >
                            Главная
                        </p>
                        <p
                            className="rounded-lg px-3 cursor-pointer py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            onClick={() => nav("/dashboard")}
                        >
                            Мои поездки
                        </p>
                    </nav>
                </div>
                <button
                    type="button"
                    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50"
                    aria-label="Open menu"
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen((v) => !v)}
                >
                    {mobileOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>
                <div className="hidden md:flex items-center gap-2 ms-3">
                    {!isAuth ? (
                        <>
                            <p
                                onClick={() => nav("/login")}
                                className="hidden cursor-pointer h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:inline-flex"
                            >
                                Войти
                            </p>
                            <p
                                onClick={() => nav("/register")}
                                className="inline-flex cursor-pointer h-10 items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            >
                                Зарегистрироваться
                            </p>
                        </>
                    ) : (
                        <>
                            <p
                                onClick={() => nav("/profile")}
                                className="inline-flex h-10 cursor-pointer w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200"
                                title="Профиль"
                            >
                                <CgProfile className={"w-5 h-5"} />
                            </p>

                            <button
                                onClick={() => {nav("/login"); logout()}}
                                className="inline-flex h-10 cursor-pointer w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors hover:bg-red-100"
                                title="Выйти"
                            >
                                <FiLogOut className={"w-5 h-5"} />
                            </button>
                        </>
                    )}
                </div>
            </div>
        {mobileOpen && (
            <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
                <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex flex-col gap-2" aria-label="Mobile">
                        <button
                            type="button"
                            onClick={() => {
                                nav("/");
                                closeMobile();
                            }}
                            className="w-full text-left rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                        >
                            Главная
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                nav("/dashboard");
                                closeMobile();
                            }}
                            className="w-full text-left rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                        >
                            Мои поездки
                        </button>
                    </nav>

                    <div className="mt-4 border-t border-slate-200 pt-4">
                        {!isAuth ? (
                            <div className="flex flex-col gap-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        nav("/login");
                                        closeMobile();
                                    }}
                                    className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
                                >
                                    Войти
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        nav("/register");
                                        closeMobile();
                                    }}
                                    className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                                >
                                    Зарегистрироваться
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        nav("/profile");
                                        closeMobile();
                                    }}
                                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
                                >
                                    <CgProfile className="h-5 w-5" />
                                    Профиль
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        logout();
                                        nav("/login");
                                        closeMobile();
                                    }}
                                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-red-50 px-4 text-sm font-semibold text-red-700 shadow-sm hover:bg-red-100"
                                >
                                    <FiLogOut className="h-5 w-5" />
                                    Выйти
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )}
        </header>
    );
};

export default Header;