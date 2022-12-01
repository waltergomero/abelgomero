import React from "react";
import Layout from "../components/layouts";
import Header from "../components/layouts/header";
import IntroContainer from "../containers/home/intro";
import HealthFeatureContainer from "../containers/home/health-feature";
import MedicalFeatureContainer from "../containers/home/medical-feature";
import AppointmentContainer from "../containers/home/appointment";
import TeamContainer from "../containers/home/team";
import TestimonialContainer from "../containers/home/testimonial";
import PricingContainer from "../containers/global/pricing";
import BrandContainer from "../containers/global/brand";
import BlogAccordion from "../containers/home/blog-accordion";
import GoogleMapContainer from "../containers/global/map";
 import Footer from "../components/layouts/footer";
// import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Dr. Gomero Urologo" />
                <div className="wrapper home-default-wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                    <IntroContainer />
                    <HealthFeatureContainer />
                    <MedicalFeatureContainer />
                    <AppointmentContainer />
                    <TeamContainer />
                    {/* <TestimonialContainer /> */}
                    <PricingContainer />
                    {/* <BrandContainer /> */}
                    <BlogAccordion />
                    <GoogleMapContainer />
                    </div>
                    <Footer />
                    {/* <ScrollToTop /> */}
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;
