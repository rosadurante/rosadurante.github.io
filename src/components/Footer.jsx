import { PERSONAL_DATA } from "../data/personal";
import SocialNetworks from "./SocialNetworks";

export default function Footer ({ lang }) {
  const data = lang ? PERSONAL_DATA[lang] : PERSONAL_DATA.es;
  const mailto = 'mailto:' + data.generic.email;
  const phoneto = 'tel:' + data.generic.phone;

  return (
    <footer className="relative border-t-4 border-lime-500 pt-2 mt-8">
      <p className="text-left">
        <a href={mailto} alt="email" target="_blank"
           className="hover:text-gray-600 mr-4">
          { data.generic.email }
        </a>
        <a href={phoneto} alt="phone" target="_blank"
           className="hover:text-gray-600 mr-4">
          { data.generic.phone }
        </a>
      </p>
      <p className="text-left">&copy; 2024 Rosa Durante</p>
      <SocialNetworks />
    </footer>
  )
}