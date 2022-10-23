import dayjs from 'dayjs';
import Image from 'next/image';
import * as React from 'react';
import { CgQuote } from 'react-icons/cg';
import { FaAws, FaGoogle } from 'react-icons/fa';
import { GrRobot } from 'react-icons/gr';
import { IoMdHome, IoMdMail } from 'react-icons/io';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { VscFilePdf } from 'react-icons/vsc';

import Certif from '@/components/Certif';
import Educ from '@/components/Educ';
import ExpPro from '@/components/ExpPro';
import ExtraInt from '@/components/ExtraInt';
import Lang from '@/components/Lang';
import ArrowLink from '@/components/links/ArrowLink';

const Cv = () => {
  const [url, setUrl] = React.useState<string>('');
  const [load, setLoad] = React.useState<boolean>(false);
  const ref = React.useRef(null);

  // const handleClick2 = async () => {
  //   try {
  //     const response = await fetch(`/api/print`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'text/html' },
  //       body: new XMLSerializer().serializeToString(document),
  //     });
  //     const file = await response.blob();
  //     const link = document.createElement('a');
  //     link.href = URL.createObjectURL(file);
  //     link.download = 'CV-Jonathan-Vacherat_Lead-Software-Engineer.pdf';
  //     document.body.append(link);
  //     link.click();
  //     link.remove();
  //     // in case the Blob uses a lot of memory
  //     setTimeout(() => URL.revokeObjectURL(link.href), 7000);
  //   } catch (err: any) {
  //     console.log(err.message);
  //   }
  // };

  const handleClick = async () => {
    try {
      setLoad(true);
      const response = await fetch(
        `/api/print?url=${encodeURI(document.location.href)}`,
        {
          method: 'GET',
        }
      );
      const file = await response.blob();
      setLoad(false);
      const link = document.createElement('a');
      link.href = URL.createObjectURL(file);
      link.download = 'CV-Jonathan-Vacherat_Lead-Software-Engineer.pdf';
      document.body.append(link);
      link.click();
      link.remove();
      // in case the Blob uses a lot of memory
      setTimeout(() => URL.revokeObjectURL(link.href), 7000);
    } catch (err: any) {
      console.log(err.message);
      setLoad(false);
    }
  };

  React.useEffect(() => {
    setUrl(document.location.href);
  }, []);

  if (load) {
    return (
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <GrRobot size={80} className='animate-ping' />
          <h1 className='mt-10 animate-pulse text-4xl md:text-6xl'>
            Generating PDF
          </h1>
        </div>
      </section>
    );
  }

  return (
    <div ref={ref} id='cv' className='mx-auto max-w-7xl p-9'>
      <div className='print:hidden'>
        <ArrowLink direction='left' className='my-10 md:text-lg' href='/'>
          Back to Home
        </ArrowLink>
      </div>
      <div className='pb-4 md:grid md:grid-cols-2 lg:grid-cols-3'>
        <div>
          <h1 className='whitespace-nowrap'>Jonathan Vacherat</h1>
          <h2 className='whitespace-nowrap text-gray-600'>
            Lead Software Engineer
          </h2>
          <div className='mt-2 lg:mt-20'>
            <div className='text-gray-500'>
              Last update: {dayjs().format('MMMM D, YYYY')}
            </div>
            <div
              className='flex items-center font-medium text-primary-500 hover:cursor-pointer hover:underline hover:underline-offset-4 print:hidden'
              onClick={handleClick}
            >
              <VscFilePdf className='h-5 w-5 pr-1' />
              Download PDF version
            </div>
            <span className='hidden print:block'>
              Up-to-date version of CV is available at <br />
              <a
                href={url}
                className='whitespace-nowrap font-medium text-primary-500 hover:underline hover:underline-offset-4'
              >
                {url}
              </a>
            </span>
          </div>
        </div>

        <div className='m-2 mx-auto mt-4 w-32 md:mt-2 md:w-48'>
          <Image
            src='/images/photo.jpg'
            alt='Profile picture'
            layout='responsive'
            height={96}
            width={96}
            className='rounded-full'
            priority={true}
          />
        </div>

        <div className='md:col-span-2 lg:col-auto'>
          <div className='flex justify-between border-b border-gray-200 pb-2 text-base font-medium'>
            <div>Residence</div>
            <a
              href='https://goo.gl/maps/A8iRxqwVuiePLa1W6'
              className='flex items-center text-primary-500 hover:underline hover:underline-offset-4'
            >
              <IoMdHome className='h-5 w-5 pr-1' />
              Tokyo
            </a>
          </div>

          <div className='mt-2 flex justify-between border-b border-gray-200 pb-2 text-base font-medium'>
            <div>LinkedIn</div>
            <a
              href='https://www.linkedin.com/in/jonathanvacherat'
              className='flex items-center text-primary-500 hover:underline hover:underline-offset-4'
            >
              <SiLinkedin className='h-5 w-5 pr-1' />
              Jonathan Vacherat
            </a>
          </div>

          <div className='mt-2 flex justify-between border-b border-gray-200 pb-2 text-base font-medium'>
            <div>GitHub</div>
            <a
              href='https://github.com/fffan64'
              className='flex items-center text-primary-500 hover:underline hover:underline-offset-4'
            >
              <SiGithub className='h-5 w-5 pr-1' />
              fffan64
            </a>
          </div>

          <div className='mt-2 flex justify-between pb-6 text-base font-medium'>
            <div>Email</div>
            <a
              href='mailto:jonathan.vacherat@gmail.com'
              className='flex items-center text-primary-500 hover:underline hover:underline-offset-4'
            >
              <IoMdMail className='h-5 w-5 pr-1' />
              jonathan.vacherat@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-between border-y-2 border-gray-500 py-4 text-center'>
        <CgQuote className='h-10 w-10' />
        <span className='mx-14'>{`I'm a full-stack developer with more than 10 years of experience.
        Love serverless & automation, gaming also !
        Married and proud father of two <3`}</span>
        <CgQuote className='h-10 w-10 self-end' />
      </div>

      <div className='mt-8'>
        <h2>Professional Experience</h2>

        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
          <ExpPro
            dateStr='Jun 2017 - ?'
            imgAlt='AXA Logo'
            imgSrcPath='/images/axa_logo.jpg'
            title='AXA Life Japan'
            place='Tokyo, JP'
            description='Lead Software Engineer'
            bulletPoints={[
              'Full AWS serverless app (React SPA on S3 + API Gateway + Lambda)',
              'Migration of legacy apps (Liferay Java, J2EE) to the cloud (AWS / Openshift / springboot / react)',
              'Diverse APIs in both nodejs and springboot',
              'CI/CD Pipeline creation and automation (devOps)',
              'Internalization of coding guidelines and good practices',
              'Event hosting & animation: CTF / Community of Practice',
            ]}
            tags={[
              'Agile',
              'Cloud',
              'AWS',
              'Openshift',
              'Jenkins',
              'Serverless',
              'NodeJs',
              'React',
              'Jest',
              'TypeScript',
              'Java/Springboot',
            ]}
            flagCode='jp'
          />

          <ExpPro
            dateStr='Jun 2015 - Jun 2017'
            imgAlt='Orano Logo'
            imgSrcPath='/images/orano_logo.jpg'
            title='Orano Japan (ex AREVA)'
            place='Tokyo, JP'
            description='IT Engineer'
            bulletPoints={[
              'Administration and maintenance of IT infrastructures (System and Network)',
              'Local and remote user support',
            ]}
            tags={[
              'System',
              'Network',
              'Support',
              'Tools/Scripts',
              'Reporting',
            ]}
            flagCode='jp'
          />

          <ExpPro
            dateStr='Sep 2011 - May 2015'
            imgAlt='Madic Logo'
            imgSrcPath='/images/madic.jpg'
            title='LAFON SAS (MADIC Industries)'
            place='Bordeaux, FR'
            description='R&D Software Engineer'
            bulletPoints={[
              'Gas station management system',
              'Payment terminal system integration',
            ]}
            tags={['C#', 'Centura/SQL Windows', 'SQL Server', 'C/C++']}
            flagCode='fr'
          />

          <ExpPro
            dateStr='Apr 2011 - Jul 2011'
            imgAlt='Akka Logo'
            imgSrcPath='/images/akka.jpg'
            title='AKKA Technologies I&S'
            place='Bordeaux, FR'
            description='R&D Software Engineer'
            bulletPoints={[
              'Generation of real-time 3D scenes 8 point of views',
              'Mission for THALES AVIONICS',
            ]}
            tags={['Shaders / GLSL', 'OpenGL', 'C/C++', '3D Lenses Screen']}
            flagCode='fr'
          />

          <ExpPro
            dateStr='Jan 2011 - Apr 2011'
            imgAlt='Akka Logo'
            imgSrcPath='/images/akka.jpg'
            title='Techniques Effects'
            place='Pau, FR'
            description='Software Developer - 2D/3D Production Assist'
            bulletPoints={[
              '3D multiplayer card game using Shiva3D game engine',
              'Study / concept / art / project management',
            ]}
            tags={['Gaming', '3D', 'Shiva3D engine', 'Scripting LUA']}
            flagCode='fr'
          />
        </div>
      </div>

      <div className='mt-10 border-y-2 border-gray-500 py-8'>
        <h2>Education</h2>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <Educ
            dateStr='2007 - 2010'
            imgAlt='IMERIR Logo'
            imgSrcPath='/images/imerir.jpg'
            title='Computer Engineering Degree'
            place='Perpignan, FR'
            link='https://www.imerir.com/'
            uniName='IMERIR'
            flagCode='fr'
            // bulletPoints={[
            //   'Bachelor of Science in Computing (Student exchange) - Institute of Technology Blanchardstown, Ireland [2009 - 2010]',
            //   'Master in Sciences, Technologies, Health - Universite de Perpignan, France [2008 - 2009]',
            // ]}
            bulletPoints={[
              <>
                <b>Bachelor of Science in Computing</b>{' '}
                <i>(Student exchange)</i> -{' '}
                <a
                  className='text-primary-500 hover:underline hover:underline-offset-4'
                  href='http://www.itb.ie/'
                >
                  Institute of Technology Blanchardstown
                </a>
                <span className='font-thin text-gray-400'>
                  , Ireland [2009 - 2010]
                </span>
              </>,
              <>
                <b>Master in Sciences, Technologies, Health</b> -{' '}
                <a
                  className='text-primary-500 hover:underline hover:underline-offset-4'
                  href='https://www.univ-perp.fr/'
                >
                  Universite de Perpignan
                </a>
                <span className='font-thin text-gray-400'>
                  , France [2008 - 2009]
                </span>
              </>,
            ]}
          />

          <Educ
            dateStr='2005 - 2007'
            title='Undergraduate Technology Degree in Electrical Engineering and Industrial Computing'
            place='Tarbes, FR'
            link='https://www.iut-tarbes.fr/'
            uniName='Universite Toulouse III Tarbes'
            flagCode='fr'
          />
        </div>

        <h2 className='mt-4'>Certifications</h2>
        <ul className='mt-3 ml-3 list-inside list-disc'>
          <li>
            <Certif
              dateStr='Jan 24, 2020'
              title='AWS Certified Developer Associate'
              icon={<FaAws className='inline h-6 w-6 pr-1' />}
              link='https://www.credly.com/badges/279c48c5-674f-4293-8f15-9325c3d47a60/public_url'
            />
          </li>

          <li>
            <Certif
              dateStr='Aug 5, 2021'
              title='Google Cloud Certified Engineer Associate'
              icon={<FaGoogle className='inline h-5 w-5 pr-1' />}
              link='https://www.credential.net/1ccbec45-3612-4cef-84b6-405b2b194a5c'
            />
          </li>
        </ul>
      </div>

      <div className='border-b-2 border-gray-500 py-8'>
        <h2>Languages</h2>
        <div className='flex flex-wrap pt-4'>
          <Lang lang='French' flagCode='fr' skill='100' />
          <Lang lang='English' flagCode='us' skill='100' />
          <Lang lang='Spanish' flagCode='es' skill='75' />
          <Lang lang='Japanese' flagCode='jp' skill='50' />
        </div>
      </div>

      <div className='py-8'>
        <h2>Extra/Interests</h2>
        <p className='break-words pt-4 leading-8'>
          <ExtraInt
            tags={[
              'Gaming',
              'Football',
              'Art/3D',
              'Movie',
              'TV',
              'Shows/Anime',
              'Technology',
            ]}
          />
        </p>
      </div>
    </div>
  );
};

export default Cv;
