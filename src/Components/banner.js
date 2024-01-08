import bannerStyles from '../Styles/banner.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ivoireFoods from "../ressources/ivoire.png";
import senegalFoods from "../ressources/senegal.png";
import beninFoods from "../ressources/beninfood.png";
import cameroonFoods from "../ressources/cameroun.png";
import { Link } from "react-router-dom";

const Banner = () => {
    return (

     
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showThumbs={false}
            showStatus={false}
        >
            <div className={bannerStyles.bannerItem}>
                <img src={ivoireFoods} alt="" className={bannerStyles.imgFoods} />
                <div className={bannerStyles.heading}>ivoire foods</div>
                <div className={bannerStyles.desc}>
                    Buy vegetables and get potatoes free. Conditions apply
                </div>
                <div className={bannerStyles.cta}>
                    <Link to="/items/vegetables">Shop Now</Link>
                </div>
            </div>
            <div className={bannerStyles.bannerItem}>
                <img src={senegalFoods} alt="" className={bannerStyles.imgFoods} />
                <div className={bannerStyles.heading}>
                Senegal foods
                </div>
                <div className={bannerStyles.desc}>Royal Gala Apples</div>
                <div className={bannerStyles.cta}>
                    <Link to="/items/fruits">Shop Now</Link>
                </div>
            </div>
            <div className={bannerStyles.bannerItem}>
                <img src={beninFoods} alt="" className={bannerStyles.imgFoods} />
                <div className={bannerStyles.heading}>Benin foods</div>
                <div className={bannerStyles.desc}>Start your day with a fruit</div>
                <div className={bannerStyles.cta}>
                    <Link to="/items/fruits">Shop Now</Link>
                </div>
            </div>
            <div className={bannerStyles.bannerItem}>
                <img src={cameroonFoods} alt="" className={bannerStyles.imgFoods} />
                <div className={bannerStyles.heading}>Cameroun foods</div>
                <div className={bannerStyles.desc}>20% discount on French Beans</div>
                <div className={bannerStyles.cta}>
                    <Link to="/items/vegetables">Shop Now</Link>
                </div>
            </div>
        </Carousel>
       

    )
}

export default Banner