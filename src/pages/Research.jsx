import { siteConfig } from '../data/navigation'
import './Research.css'

function Research() {
  return (
    <div className="md-main-content">
      <div className="research-container">
        <div className="research-item">
          <div className="research-category" style={{ display: 'none' }}>Project</div>
          <div className="research-content">
            <h4 className="research-title">
              Integrated innovative artificial intelligence, genomic, and biomedical technologies in healthcare: Objective diagnosis, personalized therapy, and determining the etiology of major mental disorders
            </h4>
            <div className="research-description">
              <strong>Funding:</strong> RGC Strategic Topic Grant (STG), HKD $37.236M
            </div>
            <div className="research-description" style={{ textAlign: 'center' }}>
              <img
                src={siteConfig.static('img/logo/rgc.png')}
                alt="RGC"
                style={{ maxWidth: '200px', height: 'auto', margin: '6px', display: 'inline-block' }}
              />
            </div>
            <div className="research-description">
              <strong>Objectives:</strong> Develop innovative AI and genomic technologies for objective diagnosis and personalized treatment of major psychiatric disorders, including major depressive disorder, schizophrenia and bipolar disorder.
            </div>
            <img
              src={siteConfig.static('img/projects/fig1.png')}
              alt="Project 1 image"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>

        <div className="research-item">
          <div className="research-category" style={{ display: 'none' }}>Project</div>
          <div className="research-content">
            <h4 className="research-title">
              Unravelling the black box between air pollution and public health for transformative air quality management
            </h4>
            <div className="research-description">
              <strong>Funding:</strong> RGC Theme-based Research Scheme (TRS), HKD $41.4M
            </div>
            <div className="research-description" style={{ textAlign: 'center' }}>
              <img
                src={siteConfig.static('img/logo/rgc.png')}
                alt="RGC"
                style={{ maxWidth: '200px', height: 'auto', margin: '6px', display: 'inline-block' }}
              />
            </div>
            <div className="research-description">
              <strong>Objectives:</strong>
              <ol>
                <li>Develop integrated approaches that address the global puzzle of what components drive PM2.5 health effects in different regions.</li>
                <li>Generate solid evidence of key PM2.5 toxic components and emission sources to specific index diseases as a foundation for making public policies.</li>
              </ol>
            </div>
            <img
              src={siteConfig.static('img/projects/fig2.png')}
              alt="Project 2 image"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>

        <div className="research-item">
          <div className="research-category" style={{ display: 'none' }}>Project</div>
          <div className="research-content">
            <h4 className="research-title">
              Understanding the molecular mechanism linking mRNA decay and capping with post-transcriptional gene silencing
            </h4>
            <div className="research-description">
              <strong>Funding:</strong> NSFC/RGC Collaborative Research Scheme (NSFC/RGC CRS), HKD $3.6M + RMB 3M
            </div>
            <div className="research-description logo-row" style={{ textAlign: 'center' }}>
              <img
                src={siteConfig.static('img/logo/nsfc.png')}
                alt="NSFC"
                style={{ maxWidth: '180px', height: 'auto', margin: '6px', display: 'inline-block' }}
              />
              <img
                src={siteConfig.static('img/logo/rgc.png')}
                alt="RGC"
                style={{ maxWidth: '200px', height: 'auto', margin: '6px', display: 'inline-block' }}
              />
            </div>
            <div className="research-description">
              <strong>Objectives:</strong>
              <ol>
                <li>Determine if and how the translation process leads to ct-siRNA generation.</li>
                <li>Determine the effects of the defects in mRNA capping on siRNA generation and its interconnection with the translational process.</li>
                <li>Reveal biological functions and mechanisms linking ct-siRNA biogenesis and PTGS of genes with plant stress responses.</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="research-item">
          <div className="research-category" style={{ display: 'none' }}>Project</div>
          <div className="research-content">
            <h4 className="research-title">
              Subtyping and diagnosis of schizophrenia by systems-biology analytics
            </h4>
            <div className="research-description">
              <strong>Funding:</strong> Health and Medical Research Fund (HMRF), HKD $1.420M
            </div>
            <div className="research-description" style={{ textAlign: 'center' }}>
              <img
                src={siteConfig.static('img/logo/hmrf.png')}
                alt="HMRF"
                style={{ maxWidth: '260px', height: 'auto', margin: '6px', display: 'inline-block' }}
              />
            </div>
            <div className="research-description">
              <strong>Objectives:</strong> Define objective subtypes of schizophrenia using systems-biology analytics and develop personalized therapy for schizophrenia treatment.
            </div>
            <div className="research-description">
              <img
                src={siteConfig.static('img/projects/fig3.png')}
                alt="Project 4 image A"
                style={{ maxWidth: '100%', height: 'auto', marginRight: '6px' }}
              />
              <img
                src={siteConfig.static('img/projects/fig4.png')}
                alt="Project 4 image B"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>

        <div className="research-item">
          <div className="research-category" style={{ display: 'none' }}>Project</div>
          <div className="research-content">
            <h4 className="research-title">
              High-resolution single-cell multi-omics: Joint profiling of multiple types of biomolecules in the same single cell
            </h4>
            <div className="research-description">
              <strong>Funding:</strong> RGC Collaborative Research Fund (CRF), HKD $6.412M
            </div>
            <div className="research-description" style={{ textAlign: 'center' }}>
              <img
                src={siteConfig.static('img/logo/rgc.png')}
                alt="RGC"
                style={{ maxWidth: '200px', height: 'auto', margin: '6px', display: 'inline-block' }}
              />
            </div>
            <div className="research-description">
              <strong>Objectives:</strong> Develop an innovative technology for profiling DNA, RNA and proteins in the same single cell at the same time; apply the new technology to cancer research.
            </div>
            <img
              src={siteConfig.static('img/projects/fig5.png')}
              alt="Project 5 image"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Research
