import React, {
    createContext, useContext, useMemo, useState
} from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, useSearchParams } from "react-router-dom";
import { CurriculumVitae } from "./cv";
import { Home } from "./home";

export type Language = 'es' | 'en';

export const LanguageContext = createContext<{
    lang: Language;
    acceptedLangs: Language[];
    setLang: (lang: Language) => void;
}>({
    lang: 'es',
    acceptedLangs: ['es', 'en'],
    setLang: () => { }
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState('es' as Language);
    const acceptedLangs = ['es', 'en'] as Language[];
    return <LanguageContext.Provider value={useMemo(() => ({ lang, acceptedLangs, setLang }), [lang, setLang])}>{children}</LanguageContext.Provider>;
};

function App() {
    const [params, setParams] = useSearchParams();
    const cv = params.get("cv");

    // Set default language
    const { setLang, acceptedLangs } = useContext(LanguageContext);

    const browserLang = navigator.language.split("-")[0] as Language;
    if (browserLang && acceptedLangs.find(lang => lang === browserLang)) { setLang(browserLang); }

    return cv ? <CurriculumVitae /> : <Home />;
}

// Mount the App into <div id="app"></div>
const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
    <BrowserRouter>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </BrowserRouter>
);

export default App;