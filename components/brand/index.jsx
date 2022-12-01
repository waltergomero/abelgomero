import Link from "next/link";
import PropTypes from "prop-types";

const Brand = ({ data }) => {
    return (
        <div className="brand-logo-item">
            <Link href="/">
                <img
                    src={data.image}
                    alt="hope-Brand-Logo"
                />
            </Link>
        </div>
    );
};

Brand.propTypes = {
    data: PropTypes.object,
};

export default Brand;
