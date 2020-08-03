import React, { FC } from "react";
import "../css/styles.css";
import AddAppointment from "./AddAppointments";
import ListAppointment from "./ListAppointment";

const App: FC = () => {
  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <div>
                <AddAppointment />
              </div>
              <div>Search Appointments</div>
              <ListAppointment />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default App;
