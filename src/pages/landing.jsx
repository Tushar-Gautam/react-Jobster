import main from "../assets/images/main.jpg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/index";
import { Link } from "react-router-dom";

const landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolosr, sit amet consectetur adipisicing elit. Eos, rem.
            Recusandae vitae itaque, laudantium similique architecto rerum optio
            error sunt molestiae veniam laboriosam quae ducimus dolor commodi?
            Numquam, consequatur iure. Dolorem odit voluptates, aut quae
            perspiciatis distinctio deleniti modi accusamus doloremque iste.
            Beatae nostrum maxime, enim quas totam deserunt alias excepturi quae
            similique nulla dolorem facilis voluptas ipsam libero! Itaque.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default landing;
