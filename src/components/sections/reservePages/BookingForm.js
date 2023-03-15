import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../../../bookingsAPI";
import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Required Field",
  },
});

const Schema = Yup.object({
  fName: Yup.string().required(),
  lName: Yup.string().required(),
  email: Yup.string().email().required(),
  tel: Yup.string().required(),
});

export default function ReservationForm(props) {
  const navigate = useNavigate();

  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const [time, setTime] = useState(props.availableTimes[0]);

  const formik = useFormik({
    initialValues: { fName: "", lName: "", email: "", tel: "" },
    onSubmit(values, helper) {
      console.log(values);
      // helper.resetForm();
    },
    validationSchema: Schema,
  });

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // submitAPI({
    //   fName,
    //   lName,
    //   email,
    //   tel,
    //   people,
    //   date,
    //   occasion,
    //   preferences,
    //   comments,
    //   finalTime: time,
    // });
    navigate("/confirmation");
  }

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <div>
        <label htmlFor="fName">First Name</label> <br></br>
        <input
          type="text"
          id="fName"
          name="fName"
          placeholder="First Name"
          required
          maxLength={50}
          value={formik.values.fName}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.lName ? (
          <p style={{ color: "red" }}>{formik.errors.fName}</p>
        ) : (
          <></>
        )}
      </div>

      <div>
        <label htmlFor="lName">Last Name</label> <br></br>
        <input
          type="text"
          id="lName"
          name="lName"
          placeholder="Last Name"
          required
          maxLength={50}
          value={formik.values.lName}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.lName ? (
          <p style={{ color: "red" }}>{formik.errors.lName}</p>
        ) : (
          <></>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label> <br></br>
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          minLength={4}
          maxLength={200}
          value={formik.values.email}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.email ? (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        ) : (
          <></>
        )}
      </div>

      <div>
        <label htmlFor="phonenum">Phone Number</label> <br></br>
        <input
          type="tel"
          id="phonenum"
          placeholder="(xxx)-xxx-xxxx"
          value={formik.values.tel}
          required
          maxLength={25}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.tel ? (
          <p style={{ color: "red" }}>{formik.errors.tel}</p>
        ) : (
          <></>
        )}
      </div>

      <div>
        <label htmlFor="people">Number of People</label> <br></br>
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={people}
          required
          min={1}
          max={100}
          onChange={(e) => setPeople(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="date">Select Date</label> <br></br>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
        ></input>
      </div>

      <div>
        <label htmlFor="time">Select Time</label> <br></br>
        <select id="time" onChange={(e) => setTime(e.target.value)} required>
          {props.availableTimes.map((times) => (
            <option key={times}>{times}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label> <br></br>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferences">Seating preferences</label> <br></br>
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>

      <div>
        <label htmlFor="comments">Additional Comments</label> <br></br>
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>

      <div>
        <br></br>
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <button aria-label="On Click" className="special-button">
          Book Table
        </button>
      </div>
    </form>
  );
}
