import './Join.css'

function Join() {
  return (
    <div className="join-container">
        <p className="intro-text">
          We welcome applicants with backgrounds in Computer Science and Engineering, Biology, Computational Biology, Genomics, Biomedical Engineering, Medicine and related disciplines to join the Hong Kong Jockey Club STEM Laboratory of Genomics and AI in Healthcare.
        </p>

        <h2 className="section-header">
          <strong>Opportunities</strong>
        </h2>

        <div className="card-grid">
          <div className="card">
            <div className="card-title">Research Assistant Professors</div>
            <div className="card-body">Lead or co-lead projects at the interface of AI and genomics; mentor junior researchers.</div>
          </div>

          <div className="card">
            <div className="card-title">(Senior) Research Fellows</div>
            <div className="card-body">Drive cutting-edge methods and applications; collaborate across computational and wet-lab teams.</div>
          </div>

          <div className="card">
            <div className="card-title">Postdoctoral Fellows</div>
            <div className="card-body">Develop algorithms, models and experiments for genomic medicine and AI for healthcare.</div>
          </div>

          <div className="card">
            <div className="card-title">Research Assistants</div>
            <div className="card-body">Support data analysis, software engineering and/or molecular experiments.</div>
          </div>

          <div className="card">
            <div className="card-title">PhD and Master's students</div>
            <div className="card-body">Pursue graduate research in computational genomics, systems biology, and AI.</div>
          </div>

          <div className="card">
            <div className="card-title">Undergraduate Interns</div>
            <div className="card-body">Gain hands-on research experience in computational biology or molecular biology.</div>
          </div>
        </div>

        <h2 className="section-header">
          <strong>About the Laboratory</strong>
        </h2>

        <div className="card-grid">
          <div className="card">
            <div className="card-title">Computational Laboratory</div>
            <div className="card-body">Cluster with CPUs, H100/A800/A6000 GPUs, file servers and petabyte-scale storage.</div>
          </div>

          <div className="card">
            <div className="card-title">Molecular Biology Laboratory</div>
            <div className="card-body">Instruments for genomics, cellular/molecular mechanism studies and conventional techniques.</div>
          </div>
        </div>

        <h2 className="section-header">
          <strong>Application</strong>
        </h2>

        <div className="contact-box">
          Prospective applicants may send inquiry to: <strong>genomics@polyu.edu.hk</strong>
        </div>
      </div>
  )
}

export default Join
