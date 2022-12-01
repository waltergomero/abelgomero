import PropTypes from "prop-types";

const Intro = ({ data }) => {
    return (
        <div
            className="intro-section"
            style={{
                backgroundImage: `url(${data.backgroundImage})`,
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="slider-content">
                            <p className="text animated delay1">
                                {data.subTitle}
                            </p>
                            <h2
                                className="title animated delay2"
                                dangerouslySetInnerHTML={{ __html: data.title }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Intro.propTypes = {
    data: PropTypes.object,
};

export default Intro;
