import './Contact.css'

function Contact() {
  return (
    <div className="md-main-content">
      <div className="contact-container">
        <div className="contact-content">
          <p>
            Department of Health Technology and Informatics<br />
            Lee Shau Kee Building, Block Y520, The Hong Kong Polytechnic University<br />
            Yuk Choi Road, Hung Hom<br />
            <br />
            <strong>Email:</strong> <a href="mailto:genomics@polyu.edu.hk">genomics@polyu.edu.hk</a><br />
            <strong>Phone:</strong> +852 3400 8567<br />
            <strong>
              <a
                style={{ color: '#1e3a8a' }}
                href="https://www.google.com/maps/place/%E9%A6%99%E6%B8%AF%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6%E6%9D%8E%E5%85%86%E5%9F%BA%E6%A5%BC/@22.3060237,114.1808547,17z/data=!3m1!4b1!4m6!3m5!1s0x340400e7ea4cd421:0xc9fb261caeaaf54a!8m2!3d22.3060237!4d114.1808547!16s%2Fg%2F11b67ll0tq?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Map
              </a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
