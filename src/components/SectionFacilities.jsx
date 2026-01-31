import { useRef } from "react";
import Img1 from "/images/facilities/clinic2_bbmrbf.jpg";
import Img2 from "/images/facilities/clinic5_kv83cj.jpg";
import Img3 from "/images/facilities/clinic4_lmtil0.jpg";
import Img4 from "/images/facilities/clinic3_mrsrew.jpg";
import Img5 from "/images/facilities/clinic2_bbmrbf.jpg";
import Img6 from "/images/facilities/clinic_mptn6n.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHospital } from "react-icons/fa";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import LibraryIcon from '/icons/library_icon_w.svg'
export default function SectionFacilities() {
    const sliderRef = useRef(null);

    const facilities = [
        {
            id: 1,
            title: 'Lorem Ipsum',
            description: 'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
            image: Img1,
            link: "/"
        },
        {
            id: 2,
            title: 'Etiam rhoncus',
            description: 'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
            image: Img2,
            link: "/"
        },
        {
            id: 3,
            title: 'Duis fermentum',
            description: 'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
            image: Img3,
            link: "/"
        },
        {
            id: 4,
            title: 'Lorem Ipsum',
            description: 'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
            image: Img4,
            link: "/"
        },
        {
            id: 5,
            title: 'Etiam rhoncus',
            description: 'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
            image: Img5,
            link: "/"
        },
        {
            id: 6,
            title: 'Duis fermentum',
            description: 'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
            image: Img6,
            link: "/"
        }
    ]

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4.1,
        slidesToScroll: 1,
        initialSlide: 2, /* Start at 3rd slide (Hide first 2) */
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id='section_facilities'>
            <div className="facilities_wrapper">
                <div className="carousel_handle">
                    <Slider ref={sliderRef} {...settings}>
                        {facilities.map((value, index) => {
                            return (
                                <div className="slide_wrapper" key={index}>
                                    <div className="slide_card">
                                        <img src={value.image} alt={value.title} />
                                        <div className="card_content">
                                            <h3>{value.title}</h3>
                                            <p>{value.description}</p>
                                            <a href={value.link} className="detail_btn">SEE DETAIL</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

                <div className="floating_title">
                    <div className="title_content">
                        <div className="icon_deco">
                            <img src={LibraryIcon} className="library_icon" alt="icon" />
                        </div>
                        <h3>Our Facilities</h3>

                    </div>
                </div>

                <div className="nav_arrows">
                    <button onClick={() => sliderRef.current.slickPrev()} className="nav_btn prev">
                        <FaArrowLeft />
                    </button>
                    <button onClick={() => sliderRef.current.slickNext()} className="nav_btn next">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    )
}
