import React from "react";
import "./StudentAdmissionForm.css";

const StudentsAdmissionForm = () => {
  return (
    <>
      <div>
        <h2 className="head">DECLARATION BY THE STUDENT/PARENT</h2>
        <p className="adm-form">
          Name of Exam.
          <input className="ExamName" type="text" />
        </p>
        <ul>
          <li>
            I declare that the above information is correct and that I have read
            all the rules and regulations of the College and the University to
            which I will abide during the studentship
          </li>
          <li>
            I declare that I have not been convicted for any criminal offence.
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
            discipline, attendance etc.,
          </li>
          <li>
            In case of any misbehavior on my part, the Principal/Correspondent
            may cancel take any action on me without any prior intimation. I
            promise to maintain 75% of attendance, otherwise college can take
            any action on me. Yours obediently
          </li>
        </ul>
        <h5 className="second-Head">Your Obediently</h5>
        <br />
        <br />
        <br />
        <h5 className="sig-parent">Signature of the Parent</h5>
        <h5 className="sig-student">Signature of the Students </h5>
      </div>
      <br />
      <br />
      <br />
      <div>
        <p className="dotted"></p>
      </div>
      {/* fee particular details coding starts from here */}
      <div>
        <h3 className="fee-p">Fee Particulars Details</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Total Fee Amount</th>
            <th>Year/Sem</th>
            <th colSpan="2">Management /Convener</th>
            <th>No. of Credits</th>
            <th>Signature of receiver</th>
          </tr>
        </thead>
        <tr>
          <td>1</td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>I</td>
          <td>Reimbursement</td>
          <td>Due Amount</td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td rowSpan="2"></td>
          <td>II/I</td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>II/II</td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>III/I</td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>III/II</td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
            <input className="table-input" type="text" />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td rowSpan="2"></td>
          <td>IV/I</td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>IV/II</td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td>
            <input className="table-input" type="text" />
          </td>
        </tr>
      </table>
    </>
  );
};

export default StudentsAdmissionForm;
