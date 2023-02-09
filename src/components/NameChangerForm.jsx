import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setName } from "../store";

import API from "../constants";

export function NameChangerForm(props) {
  const [formValue, setFormValue] = useState({
    firstName: props.firstName,
    lastName: props.lastName,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const getToken = useSelector((state) => state.token);

  const closeForm = (e) => {
    e.preventDefault();
    props.setIsOpen(!props.isOpen);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formValue.firstName || !formValue.lastName) {
      setErrorMessage("Veuillez renseigner tous les champs.");
    } else {
      setErrorMessage("");

      fetch(`${API}/user/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken}`,
        },
        body: JSON.stringify(formValue),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res.body);
          const data = {
            firstName: res.body.firstName,
            lastName: res.body.lastName,
          };
          console.log(data);
          dispatch(setName(data));
        });

      props.setIsOpen(!props.isOpen);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        action="submit"
        className="changeNameForm"
      >
        <div className="formLeftSide">
          <div className="input-remember">
            <input
              type="firstName"
              name="firstName"
              onChange={handleInput}
              value={formValue.firstName}
              id="firstName"
            />
          </div>

          <button className="edit-button" type="submit">
            Save
          </button>
        </div>

        <div className="formRightSide">
          <div className="input-remember">
            <input
              type="lastName"
              name="lastName"
              id="lastName"
              onChange={handleInput}
              value={formValue.lastName}
            />
          </div>

          <button className="edit-button" onClick={closeForm}>
            Cancel
          </button>
        </div>
      </form>
      <p className="errorMessage">{errorMessage}</p>
    </div>
  );
}
