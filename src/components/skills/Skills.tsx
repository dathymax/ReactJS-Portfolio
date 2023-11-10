import Skill1 from "../../images/skills/html5.png";
import Skill2 from "../../images/skills/css3.png";
import Skill3 from "../../images/skills/git.png";
import Skill4 from "../../images/skills/js.png";
import Skill5 from "../../images/skills/reactjs.png";
import Skill6 from "../../images/skills/nodejs.png";
import Skill7 from "../../images/skills/nextjs.png";

const skills = [
    {
        image: Skill1
    },
    {
        image: Skill2
    },
    {
        image: Skill3
    },
    {
        image: Skill4
    },
    {
        image: Skill5
    },
    {
        image: Skill6
    },
    {
        image: Skill7
    },
]

const Skills = () => {
    return (
        <div className="my-24">
            <h2 className="text-2xl mb-10 text-primary">My skills</h2>
            <div className="grid grid-cols-7 md:grid-flow-row text-center">
                {skills.map((item, index) => {
                    return (
                        <div
                            className="flex items-center justify-center"
                            key={index}
                        >
                            <img src={item.image} alt="Skill" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
