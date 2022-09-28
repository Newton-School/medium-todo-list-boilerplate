import React from "react";

const Next7Days = (props) => {
  const date = new Date();

  const filteredList = props.list.filter((task) => {
  
  });


  return (
    <div id="next-list">
      {filteredList.map((list) => {
        return (
            <div className="box" key={}>
              <div className="task">
                {} ({})
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default Next7Days;
