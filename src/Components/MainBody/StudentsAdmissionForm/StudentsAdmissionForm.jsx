import React from "react";
import "./StudentAdmissionForm.css";

const StudentsAdmissionForm = () => {
  return (
    <>
      <div>
        <h2>DECLARATION BY THE STUDENT/PARENT</h2>
        <p className="adm-form">
          Name of Exam.
          :............................................................
          <ul>
            <li>
              declare that the above information is correct and that I have read
              all the rules and regulations of the College and the University to
              which I will abide during the studentship
            </li>
            <li>
              ⮚ I declare that I have not been convicted for any criminal
              offence. No criminal case or proceeding is presently pending
              against me in any court of law. I have not resorted to any act of
              indiscipline during the previous years.
            </li>
            <li>
              I solemnly declare that I have not been debarred from joining any
              educational institution or rusticated from the
              Institution/University/Board last attended.
            </li>
            <li>
              I solemnly declare that I have passed my qualifying examination as
              a regular student of a recognized institution. In all matters, the
              rules & regulations related to the institution
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default StudentsAdmissionForm;
