import logo from "../assets/logo.png"
import { useAuth } from "../store/auth/AuthContext.tsx";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const { isAuth, logout } = useAuth();
    const nav = useNavigate();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">

                <p onClick={() => nav("/")} className="flex items-center gap-3 cursor-pointer">
                    <img
                        src={logo}
                        className="h-[90px] w-[90px] rounded-lg object-contain"
                        alt="VisaAssist"
                    />
                    <span className="text-base font-semibold tracking-tight text-slate-900 ps-[75px] absolute">
                        VisaAssist
                    </span>
                </p>

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
                <div className="flex items-center gap-2 ms-3">
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
        </header>
    );
};

export default Header;