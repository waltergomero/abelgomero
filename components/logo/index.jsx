import Link  from "next/link";
import PropTypes from "prop-types";

const Logo = ({ image, classOption }) => {
    return (
        <Link className={`${classOption}`} href={process.env.PUBLIC_URL + "/"}>
            <img
                className="sticky-img" src="/img/logo.png"
                // src={process.env.PUBLIC_URL + image}
                alt="Logo"
            />
        </Link>
    );
};

Logo.propTypes = {
    image: PropTypes.string,
    classOption: PropTypes.string,
};

Logo.defaultProps = {
    classOption: "text-center",
};

export default Logo;
