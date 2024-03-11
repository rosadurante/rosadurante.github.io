import { SOCIAL_LINKS } from "../data/personal"

export default function SocialNetworks() {

  return (
    <>
    <ul className="flex ">
      {SOCIAL_LINKS.map(socialLink => {
        return (
          <li key={socialLink.id} className="p-5">
              <a href={socialLink.link} target="_blank" alt={socialLink.name}>
                {socialLink.icon}
              </a>
          </li>
        )
      })}
    </ul>
    </>
  )
}