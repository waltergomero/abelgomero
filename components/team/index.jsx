import PropTypes from "prop-types";

const Team = ({ data }) => {
    return (
        <>
            <div className="team-member">
            <div className="thumb">
                <img
                    src={data.image}
                    alt="hope-HasTech"
                />
            </div>
            <div className="content">
                <div className="member-info">
                    <h4 className="name">{data.name}</h4>
                    <p>{data.excerpt}</p>
                </div>
            </div>
        </div>
        </>
    );
};

Team.propTypes = {
    data: PropTypes.object,
};

export default Team;
