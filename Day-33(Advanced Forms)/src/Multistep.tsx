import { useState } from "react";
import Steps from "./Steps";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const [data, setData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (step === 1) {
      if (!data.firstName) newErrors.firstName = "First name required";
      if (!data.lastName) newErrors.lastName = "Last name required";
      if (data.phone.length !== 10) newErrors.phone = "Phone must be 10 digits";
    }

    if (step === 2) {
      if (!data.email.includes("@")) newErrors.email = "Valid email required";
      if (data.password.length < 6) newErrors.password = "Min 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (validate()) setStep(step + 1);
  };

  const back = () => setStep(step - 1);

  const submitForm = () => {
    alert("Form Submitted Successfully");
    console.log(data);
  };

  return (
    <div className="form-box">
      <Steps step={step} />
      {step === 1 && (
        <>
          <div className="field">
            <label>First Name:</label>
            <div>
              <input
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
              <p className="error">{errors.firstName}</p>
            </div>
          </div>

          <div className="field">
            <label>Last Name:</label>
            <div>
              <input
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
              <p className="error">{errors.lastName}</p>
            </div>
          </div>

          <div className="field">
            <label>Mobile:</label>
            <div>
              <input name="phone" value={data.phone} onChange={handleChange} />
              <p className="error">{errors.phone}</p>
            </div>
          </div>

          <button onClick={next}>Next</button>
        </>
      )}
      {step === 2 && (
        <>
          <div className="field">
            <label>Email:</label>
            <div>
              <input name="email" value={data.email} onChange={handleChange} />
              <p className="error">{errors.email}</p>
            </div>
          </div>

          <div className="field">
            <label>Password:</label>
            <div>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
              <p className="error">{errors.password}</p>
            </div>
          </div>

          <div className="btns">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <h3>User Details</h3>
          <p>
            {data.firstName} {data.lastName}
          </p>
          <p>{data.phone}</p>
          <p>{data.email}</p>

          <div className="btns">
            <button onClick={back}>Back</button>
            <button onClick={submitForm}>Submit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default MultiStepForm;
