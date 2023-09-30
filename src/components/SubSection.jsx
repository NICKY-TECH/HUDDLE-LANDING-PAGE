function SubSection(props) {
  return (
    <section className="section-card">
      {props.isFirst == "text" ? (
        <div>
          <p className="title-subsection">{props.title}</p>
          <br/>
          <div className="body-subsection">{props.body}</div>
        </div>
      ) : (
        ""
      )}
      {props.isSecond == "image" ? (
        <div className="section-card-image">
          <img src={props.img} style={{ width: "500px", height: "400px" }}/>
        </div>
      ) : (
        ""
      )}
      {props.isFirst == "image" ? (
        <div className="section-card-image">
          <img src={props.img} style={{ width: "500px", height: "400px" }} />
        </div>
      ) : (
        ""
      )}
      {props.isSecond == "text" ? (
        <div>
          <p className="title-subsection">{props.title}</p>
          <br/>
          <div className="body-subsection">{props.body}</div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default SubSection;
