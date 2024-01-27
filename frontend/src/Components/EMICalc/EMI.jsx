import React, { useEffect, useState } from "react";
import LoggedInNavbar from "../Navbar/LoggedInNavbar";
import { tenureData } from "./utils/constants";
import { numberWithCommas } from "./utils/config";
import TextInput from "./components/text-input";
import SliderInput from "./components/slider-input";

export function EMI() {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(cost);
  };

  const calculateEMI = (downpayment) => {
    // EMI amount = [P x R x (1+R)^N]/[(1+R)^N-1]
    if (!cost) return;

    const loanAmt = cost - downpayment;
    const rateOfInterest = interest / 100;
    const numOfYears = tenure / 12;

    const EMI =
      (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numOfYears) /
      ((1 + rateOfInterest) ** numOfYears - 1);

    return Number(EMI / 12).toFixed(0);
  };

  const calculateDP = (emi) => {
    if (!cost) return;

    const downPaymentPercent = 100 - (emi / calculateEMI(0)) * 100;
    return Number((downPaymentPercent / 100) * cost).toFixed(0);
  };

  useEffect(() => {
    if (!(cost > 0)) {
      setDownPayment(0);
      setEmi(0);
    }

    const emi = calculateEMI(downPayment);
    setEmi(emi);
  }, [tenure, cost]);

  const updateEMI = (e) => {
    if (!cost) return;

    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    const emi = calculateEMI(dp);
    setEmi(emi);
  };
  const updateDownPayment = (e) => {
    if (!cost) return;

    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));

    const dp = calculateDP(emi);
    setDownPayment(dp);
  };

  const totalDownPayment = () => {
    return numberWithCommas(
      (Number(downPayment) + (cost - downPayment) * (fee / 100)).toFixed(0)
    );
  };

  const totalEMI = () => {
    return numberWithCommas((emi * tenure).toFixed(0));
  };

  return (
    <div className="w-full">
      <LoggedInNavbar />
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <span className="text-4xl ">EMI Calculator</span>

        <div className="flex justify-center items-center flex-col gap-5 my-5">
          <TextInput
            title={"Total Cost of Asset"}
            state={cost}
            setState={setCost}
          />

          <TextInput
            title={"Interest Rate (in %)"}
            state={interest}
            setState={setInterest}
          />

          <TextInput
            title={"Processing Fee (in %)"}
            state={fee}
            setState={setFee}
          />
        </div>

        <div>
          <SliderInput
            title="Down Payment"
            underlineTitle={`Total Down Payment - ${totalDownPayment()}`}
            onChange={updateEMI}
            state={downPayment}
            min={0}
            max={cost}
            labelMin={"0%"}
            labelMax={"100%"}
          />

          <SliderInput
            title="Loan per Month"
            underlineTitle={`Total Loan Amount - ${totalEMI()}`}
            onChange={updateDownPayment}
            state={emi}
            min={calculateEMI(cost)}
            max={calculateEMI(0)}
          />
        </div>

        <span className="">Tenure</span>
        <div className="flex gap-7 items-center justify-center">
          {tenureData.map((t) => {
            return (
              <button
                key={t}
                className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
                onClick={() => setTenure(t)}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EMI;
