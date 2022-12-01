import Link  from "next/link";
import PropTypes from "prop-types";
import React from "react";

const Button = ({ classOption, text, path }) => {
    return (
        <React.Fragment>
            <Link
                href={path}
                className={`${classOption}`}
            >
                {text}
            </Link>
        </React.Fragment>
    );
};

Button.propTypes = {
    classOption: PropTypes.string,
    text: PropTypes.string,
    path: PropTypes.string,
};
Button.defaultProps = {
    classOption: "btn",
};

export default Button;
