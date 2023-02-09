import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { NameChangerForm } from "../components/NameChangerForm";
import { AccountCard } from "../components/AccountCard";

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const getData = useSelector((state) => state);

  useEffect(() => {
    getData.isLogged ? setData(getData) : navigate("/login");
  }, [getData]);

  return (
    <main className="main bg-dark">
      {isOpen ? (
        <div className="header">
          <h1> Welcome back </h1>
          <NameChangerForm
            firstName={data.firstName}
            lastName={data.lastName}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </div>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${data?.firstName} ${data?.lastName}`}
          </h1>
          <button onClick={() => setIsOpen(!isOpen)} className="edit-button">
            Edit Name
          </button>
        </div>
      )}

      <h2 className="sr-only">Accounts</h2>

      <AccountCard
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />

      <AccountCard
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />

      <AccountCard
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}
