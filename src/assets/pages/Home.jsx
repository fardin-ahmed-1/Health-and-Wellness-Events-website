import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Services from '../components/Services'
import testimonial1 from '../../../public/images/testimonial-01.jpg'
import testimonial2 from '../../../public/images/testimonial-02.jpg'
import testimonial3 from '../../../public/images/testimonial-04.jpg'
import SectionTitle from '../components/SectionTitle'
import HeroSlider from '../components/HeroSlider'
import YogaSection from '../components/YogaSection'
import { useEffect } from 'react'
import 'aos/dist/aos.css'; 
import Aos from 'aos';


const Home = () => {
  const services = useLoaderData()

  useEffect(()=>{
    Aos.init({duration : 1000});
  },[])

 
  return (
    <div>
      <HeroSlider> </HeroSlider>

      {/* Services content */}

      <div>
        <div className='bg-whiteC pt-16'>
        <div  className='container mx-auto px-6 '>
            <h1  data-aos="fade-down" className='text-4xl font-semibold text-black1 w-full lg:w-[60%] md:w-[70%]'>Specialized Services</h1>
         </div>
        </div>
       <div>
        <Services  services={services}></Services>
        </div>
      </div>

      <div>
       
       <YogaSection> </YogaSection>

      </div>

      {/* Testimonials section */}
      <div className='bg-Testimonials bg-no-repeat bg-cover bg-center'>
        <div className='container mx-auto px-6'>
          <div className='pt-12 pb-16'>

            <SectionTitle subTitle={'Testimonials'} title={'What people say about Doc house'}> </SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 '>
              {/* Item one */}
              <div data-aos="fade-up">
                <div  className='bg-graybg py-10 px-7 '>
                <div className="rating mb-2">
                  <input type="radio" name="rating-1" className="mask mask-star bg-secondary"/>
                  <input type="radio" name="rating-1" className="mask mask-star bg-secondary"  />
                  <input type="radio" name="rating-1" className="mask mask-star bg-secondary"/>
                  <input type="radio" name="rating-1" className="mask mask-star bg-secondary" checked />
                  <input type="radio" name="rating-1" className="mask mask-star bg-secondary"/>
                </div>
                <p className='text-lg italic text-black1'>I appreciate your hospital really good environment and excellent patient care. You are continuously handle patient treatment wonderfully. Thanks for your great service. Please enjoy the chocolates.</p>
                </div>

                <div className='bg-gray1 py-3 px-7 flex gap-x-5'>
                  <img className='w-12 h-12 rounded-full' src={testimonial1} alt="" />
                  <div>
                    <h1 className='text-lg text-whiteC font-medium'>Amanda Kinedy</h1>
                    <h1 className='text-base text-whiteC font-medium'>Hematology</h1>
                  </div>

                </div>
              </div>
              {/* Item Two */}
              <div data-aos="fade-down">
                <div className='bg-graybg py-10 px-7 '>
                <div className="rating mb-2">
                  <input type="radio" name="rating-1" className="mask mask-star bg-secondary"/>
                  <input type="radio" name="rating-1" className="mask mask-star bg-secondary"  />
                  <input type="radio" name="rating-1" className="mask mask-star bg-secondary"/>
                  <input type="radio" name="rating-1" className="mask mask-star bg-secondary" checked />
                  <input type="radio" name="rating-1" className="mask mask-star bg-secondary"/>
                </div>
                <p className='text-lg italic text-black1'>I appreciate your hospital really good environment and excellent patient care. You are continuously handle patient treatment wonderfully. Thanks for your great service. Please enjoy the chocolates.</p>
                </div>

                <div className='bg-gray1 py-3 px-7 flex gap-x-5'>
                  <img className='w-12 h-12 rounded-full' src={testimonial2} alt="" />
                  <div>
                    <h1 className='text-lg text-whiteC font-medium'>Amanda Kinedy</h1>
                    <h1 className='text-base text-whiteC font-medium'>Hematology</h1>
                  </div>

                </div>
              </div>

              {/* Item Three */}
              <div data-aos="fade-up">
                <div className='bg-graybg py-10 px-7 '>
                <div className="rating mb-2">
                  <input type="radio" name="rating-1" className="mask mask-star bg-secondary"/>
                  <input type="radio" name="rating-1" className="mask mask-star bg-secondary"  />
                  <input type="radio" name="rating-1" className="mask mask-star bg-secondary"/>
                  <input type="radio" name="rating-1" className="mask mask-star bg-secondary" checked />
                  <input type="radio" name="rating-1" className="mask mask-star bg-secondary"/>
                </div>
                <p className='text-lg italic text-black1'>I appreciate your hospital really good environment and excellent patient care. You are continuously handle patient treatment wonderfully. Thanks for your great service. Please enjoy the chocolates.</p>
                </div>

                <div className='bg-gray1 py-3 px-7 flex gap-x-5'>
                  <img className='w-12 h-12 rounded-full' src={testimonial3} alt="" />
                  <div>
                    <h1 className='text-lg text-whiteC font-medium'>Amanda Kinedy</h1>
                    <h1 className='text-base text-whiteC font-medium'>Hematology</h1>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home