import { siteConfig } from '../data/navigation'
import './Software.css'

function Software() {
  return (
    <div className="software-container">
        <p className="intro-text">
          The software tools here were developed in the Zhang lab over many years by grant support from NSF, NIH, The Alzheimer's Association and Monsanto Corporation.
        </p>

        <h2 className="section-header">
          <strong>Computational Biology</strong>
        </h2>

        <div className="software-item">
          <div className="software-name">AmpSeq-SSR</div>
          <div className="software-description">
            An accurate and efficient method for large-scale SSR genotyping and applications
            {' '}(<a href={`${siteConfig.baseurl}/software/AmpSeq-SSR-scripts.zip`}>software</a>,
            {' '}<a href={`${siteConfig.baseurl}/SSR_ST2.pdf`}>supplemental table</a>)
          </div>
        </div>

        <div className="software-item">
          <div className="software-name">miRvial</div>
          <div className="software-description">
            A computational method and software package for detecting and characterizing microRNAs of diverse genomic origins
            {' '}(<a href={`${siteConfig.baseurl}/software/miRvial.tgz`}>software</a>)
          </div>
        </div>

        <div className="software-item">
          <div className="software-name">BlocBuster</div>
          <div className="software-description">
            An allele-specific and network-based GWAS method
            {' '}(<a href="http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003766" target="_blank" rel="noopener noreferrer">paper1</a>,
            {' '}paper2,
            {' '}<a href="http://www.blocbuster.org" target="_blank" rel="noopener noreferrer">software</a>)
          </div>
        </div>

        <div className="software-item">
          <div className="software-name">mgRF</div>
          <div className="software-description">
            Module-guided Random Forests for integration of genotypic variation and gene expression for analyzing complex traits
            {' '}(<a href="http://www.ploscompbiol.org/article/info%3Adoi%2F10.1371%2Fjournal.pcbi.1002956" target="_blank" rel="noopener noreferrer">paper</a>,
            {' '}<a href={`${siteConfig.baseurl}/software/mgrf.tar.bz`}>software</a>)
          </div>
        </div>

        <div className="software-item">
          <div className="software-name">miRank</div>
          <div className="software-description">
            MicroRNA prediction with a novel ranking algorithm based on random walks
            {' '}(<a href="http://bioinformatics.oxfordjournals.org/content/24/13/i50.full" target="_blank" rel="noopener noreferrer">paper</a>,
            {' '}<a href={`${siteConfig.baseurl}/software/miRank.tgz`}>software and data files</a>)
          </div>
        </div>

        <div className="software-item">
          <div className="software-name">Qcut and HQcut</div>
          <div className="software-description">
            Finding communities in networks; also with scripts for visualizing clustering results and for constructing and clustering gene co-expression networks
            {' '}(<a href="http://www.biomedcentral.com/content/pdf/1752-0509-4-8.pdf" target="_blank" rel="noopener noreferrer">paper1</a>,
            {' '}<a href="http://www.researchgate.net/publication/5500334_Identifying_network_communities_with_a_high_resolution" target="_blank" rel="noopener noreferrer">paper2</a>,
            {' '}<a href={`${siteConfig.baseurl}/software/qcut.tar`}>software</a>)
          </div>
        </div>

        <div className="software-item">
          <div className="software-name">WordSpy</div>
          <div className="software-description">
            A steganalysis-based, genome scale motif finding method (software)
          </div>
        </div>

        <div className="software-item">
          <div className="software-name">Rearrangement clustering</div>
          <div className="software-description">
            A method with application to gene expression analysis
            {' '}(<a href="http://jmlr.org/papers/volume7/climer06a/climer06a.pdf" target="_blank" rel="noopener noreferrer">paper</a>,
            {' '}<a href="http://cic.cs.wustl.edu/TSP_k/" target="_blank" rel="noopener noreferrer">software</a>)
          </div>
        </div>

        <div className="software-item">
          <div className="software-name">DBTree</div>
          <div className="software-description">
            A bi-directional regression tree approach to modeling transcriptional regulation
            {' '}(<a href="http://www.ncbi.nlm.nih.gov/pubmed/16303796?dopt=Abstract" target="_blank" rel="noopener noreferrer">paper</a>,
            {' '}<a href={`${siteConfig.baseurl}/software/bdtree-1.01.tar`}>software</a>)
          </div>
        </div>

        <div className="software-item">
          <div className="software-name">Iterated loop matching</div>
          <div className="software-description">
            A method for RNA folding with pseudonots
            {' '}(<a href={`${siteConfig.baseurl}/software/ilm.tar.gz`}>software</a>)
          </div>
        </div>

        <div className="software-item">
          <div className="software-name">Degenerate multiple PCR primers</div>
          <div className="software-description">
            A method for selecting degenerate multiple PCR primers
            {' '}(<a href="http://www.cs.wustl.edu/~zhang/projects/mips.zip" target="_blank" rel="noopener noreferrer">software</a>)
          </div>
        </div>

        <h2 className="section-header">
          <strong>Optimization and Search</strong>
        </h2>

        <div className="software-item">
          <div className="software-name">Cut-and-solve for the ATSP</div>
          <div className="software-description">
            (<a href="http://www.cse.wustl.edu/~sclimer/i-right5.htm#download" target="_blank" rel="noopener noreferrer">software</a>)
          </div>
        </div>

        <div className="software-item">
          <div className="software-name">MaxSolver</div>
          <div className="software-description">
            An exact max-SAT solver
            {' '}(<a href="http://cic.cs.wustl.edu/maxsolver/index.htm" target="_blank" rel="noopener noreferrer">software</a>)
          </div>
        </div>

        <div className="software-item">
          <div className="software-name">Backbone guided WalkSAT</div>
          <div className="software-description">
            A method with dynamic noise strategy for SAT and Max-SAT
            {' '}(<a href="http://www.cs.wustl.edu/~zhang/projects/backboneGuidedSearch/bgwalksat/index.html" target="_blank" rel="noopener noreferrer">software</a>)
          </div>
        </div>
    </div>
  )
}

export default Software
