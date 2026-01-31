import React, { useState } from 'react';
import { FaThumbsUp, FaBriefcase } from 'react-icons/fa';
import Img1 from '/images/ask_doctor/f1_bep9vx.jpg';

const doctorsData = [
    {
        id: 1,
        name: 'dr. Jena Doe',
        specialty: 'Pediatric Surgeon',
        rating: '95%',
        experience: '4 Years',
        category: 'Pediatric',
        image: Img1
    },
    {
        id: 2,
        name: 'dr. John Doe',
        specialty: 'Pediatric Surgeon',
        rating: '95%',
        experience: '4 Years',
        category: 'Pediatric',
        image: 'https://i.pravatar.cc/150?img=11'
    },
    {
        id: 3,
        name: 'dr. Jihan Doe',
        specialty: 'Pediatric Surgeon',
        rating: '95%',
        experience: '4 Years',
        category: 'Pediatric',
        image: 'https://i.pravatar.cc/150?img=5'
    },
    {
        id: 4,
        name: 'dr. James Doe',
        specialty: 'Pediatric Surgeon',
        rating: '95%',
        experience: '4 Years',
        category: 'Pediatric',
        image: 'https://i.pravatar.cc/150?img=13'
    },
    {
        id: 5,
        name: 'dr. Jim Doe',
        specialty: 'Pediatric Surgeon',
        rating: '95%',
        experience: '4 Years',
        category: 'Pediatric',
        image: 'https://i.pravatar.cc/150?img=33'
    },
    {
        id: 6,
        name: 'dr. Jessy Doe',
        specialty: 'Pediatric Surgeon',
        rating: '95%',
        experience: '4 Years',
        category: 'Pediatric',
        image: 'https://i.pravatar.cc/150?img=9'
    }
];

const categories = ['All', 'Orthopedic', 'Nutritionist', 'Pediatric', 'Anaesthetic'];

export default function SectionAskDoctors() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredDoctors = activeCategory === 'All'
        ? doctorsData
        : doctorsData.filter(doc => doc.category === activeCategory);

    return (
        <section id="section_ask_doctors">
            <div className="ask_doctors_wrapper">

                {/* Left Sidebar */}
                <div className="ask_sidebar">
                    <h2 className="section_title">
                        Ask <br /> Doctors
                    </h2>
                    <div className="filter_menu">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`filter_btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Grid */}
                <div className="doctors_grid">
                    {filteredDoctors.map((doctor) => (
                        <div key={doctor.id} className="doctor_card">
                            <div className="card_header">
                                <img src={doctor.image} alt={doctor.name} className="doctor_img" />
                                <div className="doctor_info">
                                    <h3>{doctor.name}</h3>
                                    <p>{doctor.specialty}</p>
                                </div>
                            </div>
                            <div className="card_divider"></div>
                            <div className="card_footer">
                                <div className="doctor_stats">
                                    <span className="stat_item">
                                        <FaThumbsUp className="stat_icon" /> {doctor.rating}
                                    </span>
                                    <span className="stat_item">
                                        <FaBriefcase className="stat_icon" /> {doctor.experience}
                                    </span>
                                </div>
                                <button className="chat_btn">CHAT</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
