import React from "react";
import "./Form.css";

const AdmissionPage = () => {
  return (
    <>
      <button onClick={() => window.print()}>PRINT</button>

      {/* HEADER SECTION */}
      <div className="header_content">
        <img
          className="logo"
          src="https://www.reviewadda.com/assets/uploads/college/logo/LOGO_10640.jpg"
          alt=""
        />
        <div>
          <h1 className="text_color">Nawab Shah Alam Khan College Of </h1>
          <h2 className="text_color">Engineering and Technology</h2>
          <h3 className="color">Malakpet, Hydrabad-500024</h3>
          <h4>
            Estd.2008:: Approved by AICTE, New Delhi:: Affiliated to
            JNTU-Hydrabad
          </h4>
          <hr />
        </div>
      </div>

      <div></div>

      {/* for office use only container */}

      <div className="conatiner1">
        {/* pasport photo */}
        <h3 className="pic">
          Passport <br />
          Size
          <br /> Photo
        </h3>
        <div className="container2">
          <div className="container_content">
            <h6>
              <i>For Office Use Only</i>
            </h6>
            <h6>For Payment details (details of DD/Pay Order)</h6>
          </div>

          <div className="for_office_useOnly">
            <label>1.DD.No</label>
            <input type="text" className="border-1" />
            <label>Amount</label>
            <input type="text" className="border-1"></input>
            <label>Date</label>
            <input type="text" className="border-1"></input>
            <label>Bank</label>
            <input type="text" className="border-1"></input>

            <br />

            <br />
            <label>2.DD.No</label>
            <input type="text" className="border-1"></input>
            <label>Amount</label>
            <input type="text" className="border-1" />
            <label>Date</label>
            <input type="text" className="border-1"></input>
            <label>Bank</label>
            <input type="text" className="border-1" />

            <br />
            <br />
            <br />
            <br />

            <label>NSAKCET Regd No</label>
            <input type="text" size="40" className="border-1"></input>
            <h6 className="signature">
              Signature <br />
              Officer Incharge of Addmission Counter
            </h6>
          </div>
        </div>

        {/* ADDMISSION DETAILS SECTION  */}

        <div className="Add">
          <h4 className="Admisson">Admission Details</h4>
        </div>
        <div className="Details">
          <label>*Hall Ticket No</label>
          <input type="text" className="border-1" size="150"></input>
          <br /> <br />
          <label>*Name of the Candidate (Mr/Mrs/Miss):</label>
          <input type="text" className="border-1" size="126"></input>
          <h6 className="Letter">(IN BLOCK LETTERS AS PER SSC)</h6>
          <label>*Aadhar ID (UID) :</label>
          <input type="text" className="border-1" size="70"></input>
          <label>*Pan Card (if nay) :</label>
          <input type="text" className="border-1" size="55"></input>
          <br /> <br />
          <label>*Name of the Father:</label>
          <input type="text" className="border-1" size="145"></input>
          <h6 className="Letter">(IN BLOCK LETTERS AS PER SSC)</h6>
          <label>*Name of the Mother:</label>
          <input type="text" className="border-1" size="145"></input>
          <h6 className="Letter">(IN BLOCK LETTERS AS PER SSC)</h6>
          <br />
          <label>*Date of Birth ( AS PER SSC):</label>
          <input type="Date" className="border-1"></input>
          <div class="radio">
            Sex:
            <input type="radio" /> <label>male / </label>
            <label>
              <input type="radio" /> female
            </label>
          </div>
        </div>
        <br />

        {/* TYPE OF ADMISSION SECTION */}

        <div>
          <h5 className="Type-of">
            Type of Admission : Management/Convener/Spot
          </h5>
        </div>
        <div className="Details">
          <label>Admission Category:</label>
          <input type="text" className="border-1" size="85"></input>
          <label>Caste:</label>
          <input type="text" className="border-1" size="50"></input>
          <h6 className="Letter">(IN BLOCK LETTERS AS PER SSC)</h6>
          <label>Religion:</label>
          <input type="text" className="border-1" size="85"></input>
          <label> Nationality:</label>
          <input type="text" className="border-1" size="55"></input> <br />{" "}
          <br />
          <label>Mother tongue:</label>
          <input type="text" className="border-1" size="85"></input>
          <label> Blood Group:</label>
          <input type="text" className="border-1" size="45"></input>
          <br /> <br />
          <label>E-mail ID:</label>
          <input
            type="text"
            className="border-1"
            size="155"
          ></input> <br /> <br />
          <label>Father Occupation:</label>
          <input type="text" className="border-1" size="85"></input>
          <label> Phone:</label>
          <input type="text" className="border-1" size="50"></input>
          <br /> <br />
          <label>Mother Occupation:</label>
          <input type="text" className="border-1" size="85"></input>
          <label> Phone:</label>
          <input type="text" className="border-1" size="45"></input>
          <br /> <br />
          <label>Identification Marks:</label>
          <input
            type="text"
            className="border-1"
            size="145"
          ></input> <br /> <br />
        </div>

        {/* ACADEMIC DETAILS SECTION  */}

        <div className="Add">
          <h4 className="Admisson">
            Academic Details (ssc/CBSC/X/ICSE Std.Details)
          </h4>
        </div>
        <div className="Details">
          <label>Board Of Exam:</label>
          <input
            type="text"
            className="border-1"
            size="155"
          ></input> <br /> <br />
          <label>Name Of School:</label>
          <input
            type="text"
            className="border-1"
            size="155"
          ></input> <br /> <br />
          <label> Hall Ticket No:</label>
          <input type="text" className="border-1" size="40"></input>
          <label>Total Marks Obtained:</label>
          <input type="text" className="border-1" size="40"></input>
          <label> Maximum Marks:</label>
          <input type="text" className="border-1" size="19"></input>
          <br /> <br />
          <label> Passing Month :</label>
          <input type="text" className="border-1" size="35"></input>
          <label>Year:</label>
          <input type="text" className="border-1" size="20"></input>
          <label> Percentage Marks Scored:</label>
          <input type="text" className="border-1" size="30"></input>
          <label> Grade:</label>
          <input type="text" className="border-1" size="5"></input>
          <h6 className="Letter">
            (Note:-Attach Attested Photo Copy of 10th std Marks Card)
          </h6>
        </div>
      </div>
    </>
  );
};

export default AdmissionPage;
