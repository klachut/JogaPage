import yogaTeacher1 from "../../images/yogaTeacher1.jpg";
import yogaTeacher2 from "../../images/yogaTeacher2.jpg";
import yogaTeacher3 from "../../images/yogaTeacher3.jpg";
import yogaTeacher4 from "../../images/yogaTeacher4.jpg";
import yogaTeacher5 from "../../images/yogaTeacher5.jpg";
import yogaTeacher6 from "../../images/yogaTeacher6.jpg";
const MeetUsPage = () => {
  return (
    <div className="main-container" style={{ marginTop: "100px" }}>
      <h1> Poznaj naszych nauczycieli!</h1>
      <p style={{ margin: 0 }}>
        Nasi nauczyciele to wykwalifikowany zespół doświadczonych prowadzących.
      </p>
      <p style={{ margin: 0, marginBottom: "40px" }}>
        Z nimi masz pewność, że Twoja praktyka będzie bezpieczna i ukoi Twoje
        myśli.
      </p>
      <div className="meetus-page">
        <div
          style={{
            backgroundColor: "",
            padding: "0px 0px 10px 0px ",
            border: "1px solid black",
          }}
        >
          <img src={yogaTeacher1} />
          <div style={{ padding: "20px" }}>
            <p style={{ margin: 0 }}> John Doe </p>
            <p style={{ margin: 0, color: "green" }}> Instruktorka Jogi </p>
            <p style={{ margin: 0 }}> poczta@joga.pl </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "",
            padding: "0px 0px 10px 0px ",
            border: "1px solid black",
          }}
        >
          <img src={yogaTeacher2} />
          <div style={{ padding: "20px" }}>
            <p style={{ margin: 0 }}> John Doe </p>
            <p style={{ margin: 0, color: "green" }}> Instruktorka Jogi </p>
            <p style={{ margin: 0 }}> poczta@joga.pl </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "",
            padding: "0px 0px 10px 0px ",
            border: "1px solid black",
          }}
        >
          <img src={yogaTeacher3} />
          <div style={{ padding: "20px" }}>
            <p style={{ margin: 0 }}> John Doe </p>
            <p style={{ margin: 0, color: "green" }}> Instruktorka Jogi </p>
            <p style={{ margin: 0 }}> poczta@joga.pl </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "",
            padding: "0px 0px 10px 0px ",
            border: "1px solid black",
          }}
        >
          <img src={yogaTeacher4} />
          <div style={{ padding: "20px" }}>
            <p style={{ margin: 0 }}> John Doe </p>
            <p style={{ margin: 0, color: "green" }}> Instruktorka Jogi </p>
            <p style={{ margin: 0 }}> poczta@joga.pl </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "",
            padding: "0px 0px 10px 0px ",
            border: "1px solid black",
          }}
        >
          <img src={yogaTeacher6} />
          <div style={{ padding: "20px" }}>
            <p style={{ margin: 0 }}> John Doe </p>
            <p style={{ margin: 0, color: "green" }}> Instruktorka Jogi </p>
            <p style={{ margin: 0 }}> poczta@joga.pl </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetUsPage;
