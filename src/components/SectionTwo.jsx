import "../styles/destination.css";
import Section from "./Section";
import SubSection from "./SubSection";
import memo from "../images/illustration-grow-together.svg";
import convo from "../images/illustration-flowing-conversation.svg";
import users from "../images/illustration-your-users.svg";

function SectionTwo() {
  return (
    <section className="section-two">
      <SubSection
        isFirst="text"
        title="Grow Together"
        isSecond="image"
        body=" Generate meaningful discussions with your audience and build a strong, loyal community. 
  Think of the insightful conversations you miss out on with a feedback form."
        img={memo}
      />

      <SubSection
        isFirst="image"
        title="Flowing Conversations"
        isSecond="text"
        body="You wouldn't paginate a conversation in real life, so why do it online? Our threads 
  have just-in-time loading for a more natural flow."
        img={convo}
      />

<SubSection
        isFirst="text"
        title="Your Users"
        isSecond="image"
        body=" It takes no time at all to integrate Huddle with your app's authentication solution. 
  This means, once signed in to your app, your users can start chatting immediately."
        img={users}
      />
    </section>
  );
}

export default SectionTwo;
