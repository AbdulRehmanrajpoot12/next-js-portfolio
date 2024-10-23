import React from "react";

const TabButton = ({ active, selectTab, children}:any) => {

    const buttonClasses = active ? 'text-white border-b border-purple-800' : 'text-slate-300'

  return (
    <button>
        <span onClick={selectTab}>
            <p  className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </span>
    </button>
  );
};

export default TabButton;