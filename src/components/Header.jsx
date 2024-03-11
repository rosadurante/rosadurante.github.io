import { PERSONAL_DATA } from "../data/personal";
import SocialNetworks from "./SocialNetworks";

export default function Header ({ lang }) {
  const data = lang ? PERSONAL_DATA[lang] : PERSONAL_DATA.es;

  return (
    <header>
      <p className="text-left">{ data.generic.email }</p>
      <p className="text-left">{ data.generic.phone }</p>

      <div className="relative">
        <SocialNetworks />
        <h1 className="pt-6 pb-2 text-6xl border-b-4 border-lime-500 text-left">{ data.generic.name }</h1>
      </div>
    </header>
  )
}