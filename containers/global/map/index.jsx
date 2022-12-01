import GoogleMap from "../../../components/map";
import PropTypes from "prop-types";

const GoogleMapContainer = ({ classOption }) => {
    return (
        <>
        <h6 className="text-center"> Direccion:  Jiron Pureza MZ-5 Lote-6, Urb. Pro, Los Olivos, Lima</h6>
        <div className={`map-area ${classOption}`}>
            <GoogleMap />
        </div>
        </>

    );
};

GoogleMapContainer.propTypes = {
    classOption: PropTypes.string,
};

GoogleMapContainer.defaultProps = {
    classOption: "map-area",
};

export default GoogleMapContainer;
