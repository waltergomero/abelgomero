//import '../styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/scss/style.scss";
import "../assets/css/icofont.css";
import "swiper/scss/navigation";
import "swiper/scss";
import "../assets/css/animate.css";
import "swiper/scss/pagination";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
        offset: 80,
        duration: 1000,
        once: true,
        easing: "ease",
    });
    AOS.refresh();
}, []);

  return <Component {...pageProps} />
}

export default MyApp
