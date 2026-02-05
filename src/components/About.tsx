'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

const highlights = [
  {
    icon: (
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 10V3L4 14h7v7l9-11h-7z'
        />
      </svg>
    ),
    title: 'Performance Focused',
    description:
      'Optimizing Core Web Vitals and bundle sizes for lightning-fast experiences',
  },
  {
    icon: (
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
        />
      </svg>
    ),
    title: 'Scalable Architecture',
    description:
      'Building component-based systems that grow with your business needs',
  },
  {
    icon: (
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
        />
      </svg>
    ),
    title: 'Responsive Design',
    description:
      'Creating seamless experiences across all devices and screen sizes',
  },
  {
    icon: (
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
    title: 'Remote Collaboration',
    description:
      'Thriving in distributed teams with clear communication and autonomy',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id='about' className='relative py-32 overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 cyber-grid opacity-30' />
      <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent' />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className='inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-6'
          >
            About Me
          </motion.span>
          <h2 className='section-title'>
            <span className='text-white'>Crafting Digital</span>
            <br />
            <span className='gradient-text'>Experiences</span>
          </h2>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left side - Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='relative'
          >
            <div className='relative group'>
              {/* Animated border */}
              <div className='absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-gradient bg-[length:200%_200%]' />

              <div className='relative glass rounded-2xl p-8'>
                {/* Profile image */}
                <div className='relative w-48 h-48 mx-auto mb-8'>
                  <div className='absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-morph' />
                  <div className='absolute inset-2 bg-[#030014] rounded-full overflow-hidden flex items-center justify-center'>
                    <img
                      src={`${basePath}/file.jpeg`}
                      alt='Profile'
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                <h3 className='text-2xl font-bold text-white text-center mb-2'>
                  Mohamed Reda Ibrahim
                </h3>
                <p className='text-primary text-center mb-6'>
                  Senior Frontend Engineer
                </p>

                <div className='space-y-4 text-gray-300'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full glass flex items-center justify-center text-primary'>
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                      </svg>
                    </div>
                    <span>Cairo, Egypt</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full glass flex items-center justify-center text-primary'>
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                        />
                      </svg>
                    </div>
                    <span>Currently at LovingLoyalty, Denmark</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full glass flex items-center justify-center text-primary'>
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                        />
                      </svg>
                    </div>
                    <span>M.Sc. Computer Engineering (In Progress)</span>
                  </div>
                </div>

                {/* Social links */}
                <div className='flex justify-center gap-4 mt-8'>
                  {[
                    {
                      name: 'GitHub',
                      href: 'https://github.com',
                      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
                    },
                    {
                      name: 'LinkedIn',
                      href: 'https://linkedin.com',
                      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                    },
                    {
                      name: 'Email',
                      href: 'mailto:mhmd.reda186@gmail.com',
                      icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
                    },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className='w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-colors'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='space-y-8'
          >
            <div className='prose prose-invert max-w-none'>
              <p className='text-xl text-gray-300 leading-relaxed'>
                Senior Frontend Engineer with{' '}
                <span className='text-white font-semibold'>4+ years</span> of
                production experience building scalable, high-performance web
                applications.
              </p>
              <p className='text-gray-400 leading-relaxed'>
                Expert in <span className='text-primary'>React</span>,{' '}
                <span className='text-secondary'>TypeScript</span>, and modern
                component-based architectures. Proven track record of delivering
                clean, maintainable code in remote, distributed teams.
              </p>
              <p className='text-gray-400 leading-relaxed'>
                Currently leading frontend development for an enterprise POS
                system serving{' '}
                <span className='text-white font-semibold'>
                  800+ clients worldwide
                </span>
                . Previously architected gamification platforms and analytics
                dashboards for multinational educational organizations.
              </p>
            </div>

            {/* Highlights grid */}
            <div className='grid sm:grid-cols-2 gap-4'>
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className='group p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300'
                >
                  <div className='flex items-start gap-3'>
                    <div className='p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className='font-semibold text-white mb-1'>
                        {item.title}
                      </h4>
                      <p className='text-sm text-gray-400'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
