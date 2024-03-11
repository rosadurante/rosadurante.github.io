import { PERSONAL_DATA } from "../data/personal";
import SocialNetworks from "./SocialNetworks";

export default function Footer ({ lang }) {
  const data = lang ? PERSONAL_DATA[lang] : PERSONAL_DATA.es;

  return (
    <footer className="relative border-t-4 border-lime-500 pt-2 mt-3">
      <p className="text-left">
        <span>{ data.generic.email }</span>
        <span>{ data.generic.phone }</span>
      </p>
      <p className="text-left">&copy; 2024 Rosa Durante</p>
      <SocialNetworks />
    </footer>
  )
}