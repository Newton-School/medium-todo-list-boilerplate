import React from "react";

const Today = (props) => {
  const date = new Date();
;

  const filteredList = props.list.filter((task) => {
   
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
