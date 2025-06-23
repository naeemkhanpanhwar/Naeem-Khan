import SectionTitle from "@components/ui/sectionTitle";
import SlideUp from "@utils/animations/slideUp";
import { skillsData } from "@utils/fackData/skillsData";

const Skills = () => {
    return (
        <section id="skills" className="skill-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <SectionTitle className="text-center mb-60">
                            <SectionTitle.Title><span>Skills</span></SectionTitle.Title>
                            <SectionTitle.Title>Discover what I bring to the table</SectionTitle.Title>
                        </SectionTitle>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="skill-items-wrap">
                            <div className="row">
                                {skillsData.map(({ id, icon, title, color }) =>
                                    <Card key={id} icon={icon} title={title} color={color} id={id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

type CardPropsType = {
    title: string,
    icon: React.ComponentType<{ size?: number; color?: string }>,
    color: string,
    id: number
};
const Card = ({ icon: Icon, title, color, id }: CardPropsType) => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
            <SlideUp delay={id}>
                <div className="skill-item">
                    <Icon size={55} color={color} />
                    <h5>{title}</h5>
                </div>
            </SlideUp>
        </div>
    );
};