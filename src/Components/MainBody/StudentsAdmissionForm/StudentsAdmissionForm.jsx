import React from "react";
import "./StudentAdmissionForm.css";

const StudentsAdmissionForm = () => {
  return (
    <>
      <div>
        <h2 className="head">DECLARATION BY THE STUDENT/PARENT</h2>
        <p className="adm-form">
          Name of Exam.
          :..........................................................................
          I
        </p>
        <ul>
          <li>
            declare that the above information is correct and that I have read
            all the rules and regulations of the College and the University to
            which I will abide during the studentship
          </li>
          <li>
            ⮚ I declare that I have not been convicted for any criminal offence.
            No criminal case or proceeding is presently pending against me in
            any court of law. I have not resorted to any act of indiscipline
            during the previous years.
          </li>
          <li>
            I solemnly declare that I have not been debarred from joining any
            educational institution or rusticated from the
            Institution/University/Board last attended.
          </li>
          <li>
            I solemnly declare that I have passed my qualifying examination as a
            regular student of a recognized institution. In all matters, the
            rules & regulations related to the institution
          </li>
          <li>
            I solemnly declare that the statements made in this application are
            true to the best of my knowledge and belief. I clearly understand
            that if any of the statement is subsequently found to be untrue. I
            will render myself liable to immediate emoval from the college and I
            may be prosecuted.
          </li>
          <li>
            I do hereby solemnly state that I had carefully read the Rules and
            Regulations stipulated by the college in the prospectus, and I agree
            to abide by them. In case I violate any of the rules of conduct,
            discipline, attendance etc., ⮚ In case of any misbehavior on my
            part, the Principal/Correspondent may cancel take any action on me
            without any prior intimation. I promise to maintain 75% of
            attendance, otherwise college can take any action on me. Yours
            obediently
          </li>
        </ul>
        <h5 className="second-Head">Your Obediently</h5>
      </div>
    </>
  );
};

export default StudentsAdmissionForm;
