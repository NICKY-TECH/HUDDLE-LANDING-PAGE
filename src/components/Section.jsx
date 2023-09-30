import "../styles/destination.css";
import logo from "../images/logo.svg";
import list from "../images/illustration-mockups.svg";
function Section() {
  return (
    <section className="section-one">
      <nav className="nav">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <button className="try">Try it Free</button>
      </nav>
      <div className="main">
        <article className="article-text">
          <h1>
            Build The Community<br/> <br/>
            Your Fan Will Love
          </h1>
          <br/> <br/>
          <p>
            Huddle re-imagines the way we build communities. You have <br />a
            voice, but so does your audience. Create connections with
            <br /> your users as you engage in genuine discussion.{" "}
          </p>
          <br/> <br/>
          <button className="get-started">Get Started For Free</button>
        </article>
        <article className="mock-up">
          <img src={list} style={{ maxWidth:"100%",objectFit:"contain",  height:"auto"}}/>
        </article>
      </div>
    </section>
  );
}

export default Section;
