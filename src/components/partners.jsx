import React from 'react';
import {motion} from 'framer-motion'
import { imageVariants, linkVariants, textVariants } from '../animation/animation';

const PartnersSection = () => {
  // Example data for partners and sponsors
  const partners = [
    {
      name: 'Alive & Thrive',
      logo: './images/partners_images/alive_thrive.svg',
      link: 'https://www.aliveandthrive.org',
    },
    {
      name: 'GE Healthcare',
      logo: './images/partners_images/ge_healthcare.svg',
      link: 'https://www.gehealthcare.com',
    },
    {
      name: 'Bill & Melinda Gates Foundation',
      logo: './images/partners_images/bill_melinda_gates.svg',
      link: 'https://www.gatesfoundation.org',
    },
    {
      name: 'Reckitt',
      logo: './images/partners_images/reckitt.svg',
      link: 'https://www.reckitt.com',
    },
    {
      name: 'FHI 360',
      logo: './images/partners_images/fhi360.svg',
      link: 'https://www.fhi360.org',
    },
    {
      name: 'Federal Ministry of Health',
      logo: './images/partners_images/federal_ministry_of_health.svg',
      link: 'https://www.health.gov.ng',
    },
    {
      name: 'Johnson & Johnson',
      logo: './images/partners_images/johnson_and_johnson.svg',
      link: 'https://www.jnj.com',
    },
    {
      name: 'Laerdal',
      logo: './images/partners_images/laerdal.svg',
      link: 'https://laerdal.com',
    },
    {
      name: 'McCann Health',
      logo: './images/partners_images/mccann_health.svg',
      link: 'https://www.mccannhealth.com',
    },
    {
      name: 'Merck for Mothers',
      logo: './images/partners_images/merck_for_mothers.svg',
      link: 'https://www.merckformothers.com',
    },
    {
      name: 'LSTM',
      logo: './images/partners_images/lstm.svg',
      link: 'https://www.lstmed.ac.uk',
    },
    {
      name: 'Medela Cares',
      logo: './images/partners_images/medela_cares.svg',
      link: 'https://www.medela.com',
    },
    {
      name: 'Nutrition International',
      logo: './images/partners_images/nutrition_international.svg',
      link: 'https://www.nutritionintl.org',
    },
    {
      name: 'UNFPA',
      logo: './images/partners_images/unfpa.svg',
      link: 'https://www.unfpa.org',
    },
    {
      name: 'Africa Reach',
      logo: './images/partners_images/africa_reach.svg',
      link: 'https://www.africareach.org',
    },
    {
      name: 'USAID',
      logo: './images/partners_images/usaid.svg',
      link: 'https://www.usaid.gov',
    },
    {
      name: 'Sustainable Markets Initiative',
      logo: './images/partners_images/sustainable_markets_initiative.svg',
      link: 'https://www.sustainable-markets.org',
    },
    {
      name: 'International Confederation of Midwives',
      logo: './images/partners_images/international_confederation_of_midwives.svg',
      link: 'https://www.internationalmidwives.org',
    },
    {
      name: 'United Nations ECOSOC',
      logo: './images/partners_images/un_ecosoc.svg',
      link: 'https://www.un.org/ecosoc',
    },
    {
      name: 'THET',
      logo: './images/partners_images/thet.svg',
      link: 'https://www.thet.org',
    },
    {
      name: 'Réalta na hÉireann',
      logo: './images/partners_images/realta_na_heireann.svg',
      link: 'https://www.gov.ie',
    },
  ];


  return (
    <section className="py-10">
        <motion.article
        variants={textVariants}
        initial='initial'
        whileInView='inView'
        viewport={{once: true, amount:0.5}}
        className='w-fit m-auto text-center flex flex-col items-center max-w-[52rem] pt-[4rem]'>
            <h3 className='font-[600] text-[#292666] text-[0.8rem] px-[1rem] py-[0.5rem] bg-[#05175F40] w-fit rounded-[0.3rem] '>
            Join Us
            </h3>
            <h4 className='my-[1.25rem] text-[#292666] font-[600] lg:text-[2.3rem] text-[1.8rem]'>
            Meet Our Partners & Sponsors
            </h4>
            <p className='font-[400] text-[1.125rem] leading-[1.9rem] text-[#333333]'>
            Through the gracious support and commitment of our partners, we are able to empower hundreds of people in marginalized communities.
            </p>
        </motion.article>
        <article className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 md:px-12 lg:px-20 mt-8">
            {partners.map((partner, index) => (
            <a
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
            >
                <motion.img
               variants={imageVariants}
               initial='initial'
               whileInView='inView'
               viewport={{once: true, amount: 0.3}}
               whileHover={{scale: 1.1, originX: 0, transition: {type: 'spring', stiffness: 300}}}
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-auto object-contain"
                />
            </a>
            ))}
        </article>
    </section>
  );
};

export default PartnersSection;
