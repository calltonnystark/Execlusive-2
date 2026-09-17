import CertificatesGallery from '@/components/CertificatesGallery';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import About from '@/components/landing/About';
import CTA from '@/components/landing/CTA';
import Experience from '@/components/landing/Experience';
import Hero from '@/components/landing/Hero';
import { certificates as configuredCertificates } from '@/config/Achievements';
import React from 'react';

export default function page() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <Experience />
      <About />
      <section className="mt-20">
        <SectionHeading subHeading="My" heading="Certificates" />
        <div className="mt-8">
          <CertificatesGallery certificates={configuredCertificates} />
        </div>
      </section>
      <CTA />
    </Container>
  );
}
