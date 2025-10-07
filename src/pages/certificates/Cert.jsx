import React from "react";
import "./cert.scss";
import { ImArrowUpRight2 } from "react-icons/im";

const certificates = [
  {
    id: 1,
    image: "cert1.jpg",
    url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS83S3335015310183765",
  },
  {
    id: 2,
    image: "cert2.jpg",
    url: "https://www.mygreatlearning.com/certificate/CVBGQKHV",
  },
  {
    id: 3,
    image: "cert3.jpg",
    url: "https://www.coursera.org/account/accomplishments/verify/KS6XL3MB8YPY",
  },
  {
    id: 4,
    image: "cert4.jpg",
    url: "https://www.coursera.org/account/accomplishments/verify/V64MZRX43HSB",
  },
  {
    id: 5,
    image: "cert5.jpg",
    url: "https://www.coursera.org/account/accomplishments/verify/7CXA44C8CUNB",
  },
  {
    id: 6,
    image: "cert6.jpg",
    url: "https://graphacademy.neo4j.com/c/fb480b80-92de-419c-a978-ba5195cc9be4/",
  },
];

const Cert = () => {
  return (
    <section className="certificates">
      <h2>Certificates and Learning</h2>
      <div className="container">
        {certificates.map((cert) => (
          <div className="card" key={cert.id}>
            <div className="card-inner" style={{ "--clr": "#190a2c" }}>
              <div className="box">
                <div className="imgBox">
                  <img src={cert.image} alt={`Certificate ${cert.id}`} />
                </div>
                <div className="icon">
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="iconBox">
                    <ImArrowUpRight2 className="cert-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cert;
