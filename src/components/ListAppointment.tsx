import React, { FC } from "react";
import { IListAppointment, IPet } from "../models/IListAppointment";

const ListAppointment: FC<IListAppointment> = props => {
  const { pets } = props;

  const listItems = pets.map((item: IPet) => (
    <div>
      <div>{item.petName}</div>
      <div>{item.ownerName}</div>
    </div>
  ));
  return <div>{listItems}</div>;
};
export default ListAppointment;
