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
        <h1 className="pt-6 pb-1 text-6xl border-b-4 border-lime-500">
          <p className="first-letter:text-lime-500 inline">{ data.generic.name }</p> <p className="first-letter:text-lime-500 inline">{ data.generic.surname }</p>
        </h1>
        <h3 className="pt-1 text-2xl text-right">{ data.generic.position }</h3>
      </div>
    </header>
  )
}