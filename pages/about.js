import React from "react";
import Layout from "../components/layouts";
import Header from "../components/layouts/header";
import PageTitleContainer from "../containers/global/page-title/index.jsx";
import Footer from "../components/layouts/footer";
import AboutContainer from "../containers/about";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Abel – Gomero" />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <PageTitleContainer
                            image="/img/photos/about-bg1.jpg"
                            subTitle="Dr. Abel Gomero"
                            title="Dr. Abel <span>Gomero</span>"
                        />
                        <AboutContainer />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
