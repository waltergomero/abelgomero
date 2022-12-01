import React from "react";
import Layout from "../components/layouts";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import GoogleMapContainer from "../containers/global/map";
import ContactPageContainer from "../containers/contact";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const ContactPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Dr. Gomero Urologia" />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <GoogleMapContainer classOption="contact-map-area" />
                        <ContactPageContainer />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ContactPage;
