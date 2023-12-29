import { Trans, useTranslation } from "react-i18next";
import LanguageSelector from "./components/language-Selector";

function App() {
  const { t } = useTranslation();

  const { line1, line2 } = t("description");
  return (
    <>
      <div className="bg-blue-200 min-h-screen w-full flex flex-col text-2xl">
        <LanguageSelector />
        <div className="gap-y-20">
          <h1>{t("greeting")}</h1>
          <Trans
            // i18nKey={"description.line1"}
            i18nKey={line1}
            values={{
              c: "Codexyz",
            }}
            components={{ 1: <b /> }}
          ></Trans>
          {/* <p>{line1}</p> */}
          <p>{line2}</p>
        </div>
      </div>
    </>
  );
}

export default App;
