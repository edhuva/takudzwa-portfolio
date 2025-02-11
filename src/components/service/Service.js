import React from 'react'

const Service = () => {
  return (
    <section className='flex flex-col  justify-center  mt-96 mb-96 px-auto md:px-24 py-24 bg-blue-200' id ="service">
      <div className='md:mx-auto justify-center mx-auto mb-12'>
        <h2 className='text-4xl md:text-5xl mb-10 text-center header-font' >SERVICES OFFERED</h2>
        <div className='px-20'>
          <div className='w-25  h-1 bg-white mx-auto'></div>
        </div>
      </div>

      <div className='sub-font-color italic font-bold text-center text-2xl md:text-3xl mb-14
      '>
        <h3>Mx Infinite operates in the following sectors</h3>
      </div>
      <div className='parag-color text-center parag-font mb-14 text-xl'>
        <h4>Healthcare | Corporate | Education | Civil Society / NGOs</h4>
      </div>

      <div className='parag-color text-center parag-font text-xl max-w-3xl leading-9 mx-auto'>
        <p className='mb-12 px-2 md:px-0'>All consultancy packages are unique to the customer. Contact us to discuss common access and queer+ inclusivity challenges, and find unique solutions created by a team with first-hand expertise.</p>

        <p className='mb-12 px-2 md:px-0'>Queer+ allyship training packages: want to learn more about how to offer services inclusive to the LGBTIAQ+/Queer+ community? Contact us to discuss tailored training packages to upskill your staff as a team. Allyship training can include, but is not limited to your expert-led training workshop(s), unique materials, branding, policy review, support network setup for your team and/or customers/patients, and M&E framework setup and review.</p>

        <p className='mb-12 px-2 md:px-0'>Patient-driven disability advocacy: be your own best advocate, by consulting with our team of disabled activists, and learn more about access to support services, job opportunities, and how to report instances of discrimination. Led by disabled activists, for and with our community.</p>

        <p className='mb-12 px-2 md:px-0'>Disability advocacy & accessibility workshops: find out more about unique challenges and solutions to accessibility in your workplace for your team and/or patients, and how to build true accessibility practises into your workspace. Training is tailored to key challenges within your team or network, and will help you find key reasonable accommodation strategies.</p>

        <p className='px-2 md:px-0'>Youth disability community support group networks: a unique online (Zoom) monthly support group for patients with any disabilit/ies, offering a safe environment in which to discuss common challenges, and community solutions, led by skilled facilitators. Parents/guardians/caregivers are welcome to join to observe/learn more about common challenges.</p>
      </div>
    </section>
  )
}

export default Service
