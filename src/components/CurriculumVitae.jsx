import { ACADEMIC, LANGUAGES } from "../data/personal";
import { EXPERIENCE } from "../data/experience";
import { SKILLS } from "../data/skills";


const CvSection = ({ title, sectionClassName, children }) => {
  let titleClassName = 'pt-4 text-3xl text-lime-500 ';
  titleClassName += 'before:inline-block before:h-2 before:w-12 before:mr-3 before:align-middle before:bg-lime-500'

  return (
    <section className={sectionClassName}>
      <h2 className={titleClassName}>{title}</h2>
      { children }
    </section>
  )
}

const Academic = ({ lang }) => {
  const data = lang ? ACADEMIC[lang] : ACADEMIC.es;
  const title = lang && lang === 'en' ? 'Academics' : 'Formación académica';
  
  return (
    <CvSection title={title} sectionClassName="mt-4 col-span-3">
      <p className="pl-3 pt-3">
        <span>{ data.title } </span>
        <span className="text-gray-700">({data.ends})</span>
      </p>
    </CvSection>
  )
}

const Experience = ({ lang }) => {
  const data = lang ? EXPERIENCE[lang] : EXPERIENCE.es;
  const title = lang && lang === 'en' ? 'Experience' : 'Experiencia laboral';

  return (
    <CvSection title={title} sectionClassName="mt-4 col-span-3">
      <ul>
      { data.map(experience => {
        return (
          <li key={experience.key} className="pt-3">
            <p className="px-3 inline">{experience.position}</p>
            <p className="inline italic text-lime-700">
              { experience.link ? 
                <a className=" hover:text-lime-400" href={experience.link} target="_blank" alt={experience.company}>{experience.company}</a>
                :  <span>{experience.company}</span>
              }
            </p>
            <p className="pl-3 inline text-gray-700">({experience.begins} - {experience.ends})</p>
            <p>{experience.summary}</p>
            <p>{experience.description}</p>
          </li>
        );
      })}
      </ul>
    </CvSection>
  )
}

const Skills = ({ lang }) => {
  const data = lang ? SKILLS[lang] : SKILLS.es;
  const title = lang && lang === 'en' ? 'Skills' : 'Conocimientos';
  const classNameTitle = 'py-1 text-gray-500 before:inline-block before:h-2 before:w-12 before:mr-3 before:align-middle before:bg-gray-500'

  return (
    <CvSection title={title} sectionClassName="mt-4 col-span-2">
      {data.map(group => {
        return (
          <>
            <p className={classNameTitle}>{group.group}</p>
            <ul className="flex flex-wrap py-2">
              {group.items.map((item, index) => {
                return (
                  <li className="my-2">
                    <p className={item.level}>{item.name}</p>
                  </li>
                )
              })}
            </ul>
          </>
        )
      })}
    </CvSection>
  )
}

const Language = ({ lang }) => {
  const data = lang ? LANGUAGES[lang] : LANGUAGES.es;
  const title = lang && lang === 'en' ? 'Languages' : 'Idiomas';

  return (
    <CvSection title={title} sectionClassName="mt-4 col-span-2">
      {data.map(language => {
        return (
          <p className="pl-3 pt-3">{language.name} - <span className="text-gray-700 italic">{language.level}</span></p>
        )
      })}
    </CvSection>
  )
}


export default function CurriculumVitae ({ lang }) {

  return (
    <div className="grid sm:grid-cols-5 sm:grid-flow-row sm:gap-x-6">
      <Academic />
      <Language />
      <Experience />
      <Skills />
    </div>
  )
}