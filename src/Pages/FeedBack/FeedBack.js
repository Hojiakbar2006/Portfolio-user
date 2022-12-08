import React from "react";
import "./FeedBack.css"

export function FeedBack() {
  return (
    <div id="FeedBack">
      <form className="feedForm">
        <h1>Send FeedBack</h1>
        <div>
          <div>
            <input name="" type="text" placeholder="Name" />
            <input name="" type="text" placeholder="Surname" />
          </div>
          <div>
            <input name="" type="email" placeholder="example@gmail.com" />
            <input name="" type="phone" placeholder="Phone number" />
          </div>
        </div>
        <textarea placeholder="Write your Feedback" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
