import Title from "../components/Title";

type skillsProps = skillCategories[];

type skillCategories = {
  category: string;
  Items: SkillItem[];
};

type SkillItem = {
  skillName: string;
  icon?: JSX.Element;
};

const skills: skillsProps = [
  {
    category: "As a Graphic Designer",
    Items: [
      {
        skillName: "Clip Studio Paint",
      },
      {
        skillName: "Other paint softwares",
      },
      {
        skillName: "HTML",
      },
      {
        skillName: "CSS",
      },
      {
        skillName: "Tailwind CSS",
      },
      {
        skillName: "Illustration",
      },
    ],
  },
  {
    category: "As an Interaction Designer",
    Items: [
      {
        skillName: "Javascript",
      },
      {
        skillName: "Typescript",
      },
      {
        skillName: "React",
      },
      { skillName: "Git" },
      { skillName: "Github" },
      { skillName: "Gitlab" },
    ],
  },
  {
    category: "Others",
    Items: [
      {
        skillName: "Japanese (Native level)",
      },
      {
        skillName: "English (Conversational level)",
      },
      {
        skillName: "User interview",
      },
      {
        skillName: "Discussion facilitater",
      },
    ],
  },
];

const SkillList: React.FC<{ skills: skillsProps }> = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {skills.map((category, index) => (
        <div key={index} className="min-w-0 flex-1">
          <h2 className="font-bold">{category.category}</h2>
          <ul>
            {category.Items.map((item, idx) => (
              <li key={idx}>
                {item.icon && item.icon}
                {item.skillName}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const SkillItem = ({ item }: { item: SkillItem }) => (
  <div>
    {item.icon && <span>{item.icon}</span>}
    <span>{item.skillName}</span>
  </div>
);

const About = () => {
  return (
    <div className="">
      <div className="mt-10">
        <Title />
      </div>

      <div className="mt-10 mb-5">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold md:mb-5 sm:mb-2">Motivation</h1>
          <h2 className="sm:text-xl text-2xl mb-2 italic">
            Pluriverse and Empathy
          </h2>
          <p className="sm:text-base md:text-xl mb-10">
            Empathy is the most essential part of my motivation. When I read
            "Designs for the Pluriverse" by Arturo Escobar at first (and still
            going on it!), it makes me much more certain of it. We often
            overlook people different from us. I'm sure we have to decolonise
            authoritative ideas controlling us for better design for our future.
            I would like to know various people and corperate their pluriversal
            perspectives to make a more comfortable society. I am not limited to
            a single approach. I am driven by a desire to solve problems.
            However, because of my academic background, I have an interest in
            human-digital interaction. I have broad interests in interface
            design, so it would be great if I could help you with my design and
            front-end development skills!
          </p>
        </div>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold md:mb-5 sm:mb-2">Skills</h1>
          <p className="mt-3 sm:text-base md:text-xl md:mb-5 sm:mb-3">
            I own basic skills using below them, and am an autonomous
            self-learner.
          </p>
          <SkillList skills={skills} />
          <div className="mt-5 font-light">
            ...Ask me if you wanna know other skills!
          </div>
        </div>
        {/* <div>
          <h1 className="text-2xl mb-10">Timeline</h1>
        </div> */}
      </div>
    </div>
  );
};

export default About;
