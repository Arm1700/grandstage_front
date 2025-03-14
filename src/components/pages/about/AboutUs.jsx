import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AboutUs() {
    const nav = useNavigate();

    return (
        <section className="bgColorArticle relative pb-5 flex flex-col gap-10">
            <article
                className="grid lg:grid-cols-[50%_50%] lg:grid-rows-[80%_50%] grid-cols-1 max-w-[1200px] mx-auto relative">
                {/* Левый блок с текстом */}
                <div className="flex flex-col relative px-auto text-pseudo items-center justify-center py-10">
                    <div className="flex flex-col gap-[20px] px-5">
                        <p className="text-2xl text-center font-bold font-roboto-slab text-color12">About Us</p>
                        <p className="text-custom-15 opacity-80 text-color12 leading-7">
                            At Grand Educational Center, we create a warm and welcoming place where kids can learn,
                            play, and grow. Here, children can do their homework, get help with tutoring, and join many
                            fun activities, including chess, learning Armenian and English, taekwondo, art, football,
                            dance, and hip-hop. We believe that every child deserves the chance to explore their talents
                            and try new things. That's why we offer a variety of programs to help kids build confidence,
                            learn important skills, and stay active. At our center, kids also enjoy healthy, delicious
                            meals to keep their energy up, as well as cozy spaces to relax, rest, and recharge. We make
                            sure every child feels safe, supported, and inspired to do their best. At Grand Educational
                            Center, children grow in a positive environment filled with care, creativity, and
                            encouragement. It's more than a learning space—it's a place where kids can be happy,
                            healthy, and ready for the future!
                        </p>
                    </div>
                </div>

                {/* Правый блок с изображением */}
                <div
                    className="flex flex-col xlBig:mx-1 mx-5 lg:sticky static border-[1px] top-1 mt-8 h-min gap-[10px] bg-pseudo">
                    <img
                        src="/images/DSC07939.jpg" // Замените на вашу картинку
                        alt="About Us"
                        className="rounded-lg shadow-lg"
                        style={{
                            width: '100%',
                            maxWidth: '100%',
                            height: 'auto',
                            maxHeight: '60vh',
                            objectFit: 'cover',
                            aspectRatio: '4/3',
                        }}
                    />
                    <div className="flex flex-col justify-start items-start px-[10%] py-[20px] gap-[10px]">
                        <button
                            onClick={() => nav(`/contacts`)}
                            className="self-center w-full py-[10px] px-[25px] rounded-[4px] text-white uppercase font-bold text-sm bg-primary">
                            Contact Us
                        </button>
                        <ul className="flex px-[9px] justify-center items-center gap-3 w-full pt-3">
                            <li className="flex items-center justify-center w-[32px] h-[32px] border-2 rounded-full opacity-50">
                                <a href="https://www.facebook.com/">
                                    <i className="fa fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="flex items-center justify-center w-[32px] h-[32px] border-2 rounded-full opacity-50">
                                <a href="https://www.instagram.com/">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li className="flex items-center justify-center w-[32px] h-[32px] border-2 rounded-full opacity-50">
                                <a href="https://www.youtube.com/">
                                    <i className="fa fa-youtube-play"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </article>
            <article
                className='flex flex-col items-center justify-center text-justify px-5 gap-2 pb-10 max-w-[1200px] mx-auto text-custom-15 text-color66'>
                <div className="w-full  sm:block flex flex-col items-center justify-center gap-3">
                    <img
                        src={'/images/Picture1.jpg'}
                        alt="Academy Founder"
                        className='float-left sm:mr-6 sm:mb-3 w-auto sm:max-w-[400px] sm:max-w-auto'
                    />
                    <p className="xlMin:text-custom-28 text-[20px] text-color12 font-bold mb-4 text-center">
                        Hey there, my name is Varduhi Alexanyan. I am the founder of Grand Educational Center.
                    </p>
                    <p>
                        Varduhi Aleksanyan is a professional dancer, a highly qualified trainer, an international judge,
                        a choreographer and a TV personality. Born in Yerevan, Armenia she began Latin and Ballroom
                        dance training at the age of 11 at "Matador Dance Club" under the direction of Gevorg Markosyan.
                        As a teenager Varduhi revealed her passion and talent for ballroom dance concentrating
                        exclusively on dancing, competing in local and international championships and making a career
                        of professional dancer and trainer. At the age of 19 Varduhi had already become 7 time champion
                        of the Republic of Armenia, 4 time
                        champion of South Caucusus and Bronz Medalist of Eastern Europe. In 2007, Varduhi Aleksanyan
                        graduated from the Armenian State University of Physical Culture with excellence, receiving the
                        Bachelor's and Master's degrees. Since then, she has worked as a sport dancing lecturer at the
                        Gymnastics and Sport Dancing Chair after Hrant Shahinyan of the Armenian State University of
                        Physical Culture. In 2007-2010, received the title of a judge of international category and a professional dancer
                        by the World Dance Council. For her numerous achievements in sport dances, Varduhi received the
                        title of Sports Master of the Republic of Armenia in 2008. Also participated in a number of
                        international trainings: the "Courses for Professional Athletes", Moscow, 2007;the "World Dance
                        Council", Blackpool, Great Britain, 2008; the"Improvement of High Qualified Athletes of Latin
                        Dancing", the Professional Development seminar, Moscow, 2008; the Seminar of the International
                        Olympic Committee, Olympia, Greece, 2010.Since 2010, Varduhi has been a member of the jury of
                        the "Ballroom" and "So You Think You Can Dance" TV shows broadcast on "Shant TV" channel.
                        Since 2012 has been a hostess of the «Morning with Shant», also of "The National Singer", "Duet"
                        TV shows (Season 2014) on the "Shant" TV company.In 2014, Varduhi has been awarded the Degree of
                        Doctor of Philosophy (PhD) in Pedagogy (Thesis entitled "The Physical Training Methods in Sport
                        Dancing") She has been always involved in the most popular dance and music activities of
                        Armenia, such as "American Suite" (jazz, contemporary) and "Waiting for Spring" (Afro-jazz,
                        neo-classical ) dance performances as a solo dancer. An expert -commentator of the Armenian broadcast of
                        the "Dance Eurovision 2007", a commentator
                        of the Armenian broadcast of the «New Wave 2014» international song contest, the choreography of
                        the Armenian show for the "Eurovision Song Contest 2015" and much more. Now Varduhi Aleksanyan
                        is the founder and the trainer of her school of performing arts "Grand Stage Dance", a
                        professional platform where she can pass all her knowledge and experience to the new generation
                        or simply dance lovers. From 2019 owner of Grand Education Centre and Aleksanyan Family Child
                        Care.
                    </p>
                </div>
            </article>
        </section>
    );
}
