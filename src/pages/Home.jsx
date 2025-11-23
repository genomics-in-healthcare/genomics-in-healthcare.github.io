import { HeroSection, ImageGallery, LogoList, Section, Container } from '../components/common'
import { siteConfig } from '../data/navigation'
import './Home.css'

function Home() {
  const heroBackground = `${siteConfig.baseurl}/img/logo/homepage_background.png`
  
  const dryLabImages = [
    { src: '/img/data_center.jpg', alt: 'Data Center - CPU and GPU clusters' },
    { src: '/img/office_workspace.jpg', alt: 'Office Workspace - Computational Biology Lab' }
  ]

  const wetLabImages = [
    { src: '/img/wet_lab1.jpg', alt: 'Wet Lab - Molecular Biology Research Facility 1' },
    { src: '/img/wet_lab2.jpg', alt: 'Wet Lab - Molecular Biology Research Facility 2' },
    { src: '/img/wet_lab3.jpg', alt: 'Wet Lab - Molecular Biology Research Facility 3' }
  ]

  const fundingLogos = [
    { src: '/img/logo/hksar.png', alt: 'Hong Kong SAR' },
    { src: '/img/logo/rgc.png', alt: 'RGC' },
    { src: '/img/logo/nsfc.png', alt: 'NSFC' },
    { src: '/img/logo/hkjcct.png', alt: 'Hong Kong Jockey Club Charities Trust' }
  ]

  return (
    <>
      <HeroSection backgroundImage={heroBackground}>
        <h1 className="hero-section__title">
          Our mission is to advance AI and genomic technologies to enable personalized diagnosis and treatment for complex diseases, especially cancer and neuropsychiatric disorders like depression and schizophrenia. We focus on developing and combining AI with biological techniques, including reliable, explainable machine learning and single-cell spatial transcriptomics. Our research is highly interdisciplinary, spanning AI, data science, molecular biology, genetics, genomics, and neuroscience
        </h1>
      </HeroSection>

      {/* Main Content */}
      <div className="md-main-content home-content">
        {/* Interdisciplinary Research Section */}
        <Section variant="centered" className="lab-description-section">
          <h2 className="lab-description-section__title">
            Our Laboratory combines<br />a computational biology lab (the Dry Lab) and a molecular biology lab (the Wet Lab)
          </h2>
          <Container size="small">
            <p className="lab-description-section__text">
              The Dry Lab features a high-performance computing setup, including GPU and CPU clusters, large disk arrays, and filer servers
            </p>
          </Container>
        </Section>

        <ImageGallery images={dryLabImages} layout="row" />

        <Section variant="centered">
          <Container size="small">
            <p className="lab-description-section__text">
              The Wet Lab is equipped for molecular biology research and animal study, including high-throughput sequencers
            </p>
          </Container>
        </Section>

        <ImageGallery images={wetLabImages} layout="row" />
      </div>

      <LogoList logos={fundingLogos} title="Research Supported By" />
    </>
  )
}

export default Home

