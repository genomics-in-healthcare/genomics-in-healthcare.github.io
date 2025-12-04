import { siteConfig } from '../data/navigation'
import './Home.css'

function Home() {
  const heroBackground = siteConfig.static('img/logo/homepage_background.png')
  
  const fundingLogos = [
    { src: siteConfig.static('img/logo/hksar.png'), alt: 'Hong Kong SAR' },
    { src: siteConfig.static('img/logo/rgc.png'), alt: 'RGC' },
    { src: siteConfig.static('img/logo/nsfc.png'), alt: 'NSFC' },
    { src: siteConfig.static('img/logo/hkjcct.png'), alt: 'Hong Kong Jockey Club Charities Trust' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-section" 
        style={{
          background: `linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(30, 64, 175, 0.05) 100%), url('${heroBackground}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          color: 'white',
          height: '35vh',
          minHeight: '240px',
          maxHeight: '400px',
          width: '100vw',
          maxWidth: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          padding: '32px 0',
          position: 'relative',
          marginTop: '60px',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.1)',
          overflow: 'visible'
        }}
      >
        <div style={{
          textAlign: 'center',
          width: '100%',
          maxWidth: '1200px',
          padding: '0 clamp(16px, 2.5vw, 32px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          boxSizing: 'border-box'
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 400,
            margin: 0,
            lineHeight: 1.5,
            color: '#334155',
            textShadow: '1px 1px 2px rgba(0,0,0,0.06)',
            textAlign: 'center',
            width: '100%',
            display: 'block',
            fontFamily: "'Georgia', 'Times New Roman', 'serif'",
            letterSpacing: '0.02em',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            hyphens: 'auto'
          }}>
            Our mission is to advance AI and genomic technologies to enable personalized diagnosis and treatment for complex diseases, especially cancer and neuropsychiatric disorders like depression and schizophrenia. We focus on developing and combining AI with biological techniques, including reliable, explainable machine learning and single-cell spatial transcriptomics. Our research is highly interdisciplinary, spanning AI, data science, molecular biology, genetics, genomics, and neuroscience
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="md-main-content" style={{ marginTop: 0, position: 'relative', zIndex: 2, paddingTop: 0 }}>
        
        {/* Interdisciplinary Research Section */}
        <section className="lab-description-section" style={{ margin: '24px 0 8px 0', position: 'relative' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px',
            width: '100%',
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 'clamp(16px, 2.5vw, 32px)',
            paddingRight: 'clamp(16px, 2.5vw, 32px)',
            boxSizing: 'border-box'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              margin: 0,
              color: '#334155',
              position: 'relative',
              textAlign: 'center',
              lineHeight: 1.6
            }}>
              <span style={{
                position: 'relative',
                zIndex: 1,
                background: '#f8f9fa',
                padding: 0,
                lineHeight: 1.6
              }}>
                Our Laboratory combines<br />a computational biology lab (the Dry Lab) and a molecular biology lab (the Wet Lab)
              </span>
            </h2>
          </div>
          <div style={{
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
            color: '#334155',
            lineHeight: 1.6,
            fontSize: '1.25rem',
            paddingLeft: 'clamp(16px, 2.5vw, 32px)',
            paddingRight: 'clamp(16px, 2.5vw, 32px)',
            boxSizing: 'border-box'
          }}>
            <p style={{
              margin: '0 0 10px 0',
              fontWeight: 500,
              textAlign: 'center',
              letterSpacing: 'normal',
              color: '#334155'
            }}>
              The Dry Lab features a high-performance computing setup, including GPU and CPU clusters, large disk arrays, and filer servers
            </p>
          </div>
        </section>

        {/* Dry Lab Images */}
        <div className="lab-images" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          margin: '20px 0',
          width: '100%',
          maxWidth: '1000px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(16px, 2.5vw, 32px)',
          paddingRight: 'clamp(16px, 2.5vw, 32px)',
          boxSizing: 'border-box'
        }}>
          <img 
            src={siteConfig.static('img/data_center.jpg')} 
            alt="Data Center - CPU and GPU clusters" 
            style={{
              width: '45%',
              height: '300px',
              objectFit: 'cover',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />
          <img 
            src={siteConfig.static('img/office_workspace.jpg')} 
            alt="Office Workspace - Computational Biology Lab" 
            style={{
              width: '45%',
              height: '300px',
              objectFit: 'cover',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />
        </div>

        {/* Wet Lab Description */}
        <div className="lab-description-text" style={{
          width: '100%',
          maxWidth: '800px',
          margin: '20px auto',
          color: '#334155',
          lineHeight: 1.6,
          fontSize: '1.25rem',
          paddingLeft: 'clamp(16px, 2.5vw, 32px)',
          paddingRight: 'clamp(16px, 2.5vw, 32px)',
          boxSizing: 'border-box'
        }}>
          <p style={{
            margin: '0 0 20px 0',
            fontWeight: 500,
            textAlign: 'center',
            letterSpacing: 'normal',
            color: '#334155'
          }}>
            The Wet Lab is equipped for molecular biology research and animal study, including high-throughput sequencers
          </p>
        </div>

        {/* Wet Lab Images */}
        <div className="lab-images" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
          margin: '20px 0',
          width: '100%',
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          flexWrap: 'wrap',
          paddingLeft: 'clamp(16px, 2.5vw, 32px)',
          paddingRight: 'clamp(16px, 2.5vw, 32px)',
          boxSizing: 'border-box'
        }}>
          <img 
            src={siteConfig.static('img/wet_lab1.jpg')} 
            alt="Wet Lab - Molecular Biology Research Facility 1" 
            style={{
              width: '30%',
              minWidth: '280px',
              height: '300px',
              objectFit: 'cover',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />
          <img 
            src={siteConfig.static('img/wet_lab2.jpg')} 
            alt="Wet Lab - Molecular Biology Research Facility 2" 
            style={{
              width: '30%',
              minWidth: '280px',
              height: '300px',
              objectFit: 'cover',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />
          <img 
            src={siteConfig.static('img/wet_lab3.jpg')} 
            alt="Wet Lab - Molecular Biology Research Facility 3" 
            style={{
              width: '30%',
              minWidth: '280px',
              height: '300px',
              objectFit: 'cover',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />
        </div>
      </div>

      {/* Funding Partners Section */}
      <section style={{
        margin: 0,
        position: 'relative',
        background: '#f8f9fa',
        padding: '16px 0'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(16px, 2.5vw, 32px)',
          boxSizing: 'border-box'
        }}>
          <h2 className="funding-title" style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            margin: '0 0 12px 0',
            color: '#334155',
            textAlign: 'center'
          }}>
            Research Supported By
          </h2>
          <div className="funding-partners" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px'
          }}>
            {fundingLogos.map((logo, index) => (
              <img 
                key={index}
                src={logo.src} 
                alt={logo.alt} 
                style={{
                  height: '40px',
                  width: 'auto',
                  margin: '2px',
                  display: 'inline-block',
                  filter: 'grayscale(0%)',
                  opacity: 0.9,
                  transition: 'opacity 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

