import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Meta } from "~/components/Meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const AboutPage: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc:
            "NeurotechJP is the website gathering information of neurotehcnology through interviews with those who are active in the front lines of this area all over the world",
          link: "https://neurotechjp.com",
          image: "/ogp.png",
        }}
      />
      <Header />
      <div className="about-container">
        <div className="about-container--index">
          <div className="about-container--index-title">About NeurotechJP</div>
          <div className="about-container--index-subtitle">
            NeurotechJP is the website in Japanese/English gathering information
            of neurotehcnology through interviews with those who are active in
            the flont lines of this are all over the world.
          </div>
        </div>
        <div className="about-container--index">
          <div className="about-container--index-title">About organaizer</div>
          <div className="about-container--index-subtitle">
            Hayato Waki (Writer, Interviewer) <br />
          </div>
          <div className="about-container--index-subtitle-text">
            At University of Tsukuba in Japan, he worked on the research project
            about BCI. <br /> After experiencing multiple software startups as a
            founder and an engineer in U.S. and Japan, he believes that neurotechnology is the
            most likely to be able to bring our lives destructive innovation.
            <br />
            His passion is to become a person who achieves Science-Fiction with
            creativity and technology.
          </div>
          <div className="about-container--index-sns">
            <a
              href="https://www.linkedin.com/in/wakkihaya/"
              target="_blank"
              className="about-container--index-sns-item"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.facebook.com/waki.hayato.1"
              target="_blank"
              className="about-container--index-sns-item"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a
              href="https://github.com/wakkihaya"
              target="_blank"
              className="about-container--index-sns-item"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
