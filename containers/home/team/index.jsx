import SwiperCore, { Pagination } from "swiper";
import HomeData from "../../../data/home.json";
import Team from "../../../components/team";
import SectionTitle from "../../../components/section-title";

const TeamContainer = () => {
    return (
        <div className="team-area team-default-area bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classOption="text-center"
                            subTitle="Nuestro Doctor"
                            title="<span>Reconocido Profesional</span> en la Rama de Urología "
                        />
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div
                        className="col-lg-6"
                        data-aos="fade-up"
                        data-aos-duration="1300" > 
                            {HomeData[4].team &&
                                HomeData[4].team.map((single, key) => {
                                    return (
                                    <Team key={key} data={single}/>                                    
                                    );
                                })}                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamContainer;
