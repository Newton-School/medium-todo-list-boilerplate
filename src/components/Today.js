import React from "react";

const Today = (props) => {
  const date = new Date();
;

  const filteredList = props.list.filter((task) => {
    if (date.getFullYear() !== task.date.getFullYear()) {
      return false;
    }
    if (date.getMonth() !== task.date.getMonth()) {
      return false;
    }
    if (date.getDate() !== task.date.getDate()) {
      return false;
    }
    return true;
  });


  return (
    <div id="today-list">
      {filteredList.map((list) => {
        return (

            <div className="box" key={} >
              <div className="task">{} {" "} ({})</div>
            </div>
          
        );
      })}
    </div>
  );
};

export default Today;
