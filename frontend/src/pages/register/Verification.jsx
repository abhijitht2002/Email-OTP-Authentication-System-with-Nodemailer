import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generate, verify } from "./auth.api";

function Verification() {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [otpSent, setotpSent] = useState(false);

  const navigate = useNavigate();

  const handleGenerate = async () => {
    try {
      if (!email) return console.log("Please enter email");

      const res = await generate(email);
      console.log(res);
      setotpSent(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerify = async () => {
    try {
      const res = await verify(email, otp);
      console.log(res);

      if (res?.message === "Email verification complete") {
        navigate("/register", { state: { email } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={otpSent}
        />
        <button onClick={handleGenerate}>Generate OTP</button>

        {otpSent && (
          <>
            <input
              type="text"
              name="otp"
              placeholder="Enter otp"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
            <button onClick={handleVerify}>verify</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Verification;
