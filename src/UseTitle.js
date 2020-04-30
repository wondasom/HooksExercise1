import React, { useState, useEffect } from "react";

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default (UseTitle = () => {
  const titleUpdater = useTitle("Loading...");
  // setTimeout(()=>titleUpdater("Home"), 5000);
  return (
    <div className="UseTitle">
      <h1>UseTitle</h1>
    </div>
  );
});
