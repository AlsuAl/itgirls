import React, { useState } from "react";
import "./Textarea.css";

export default function Textarea(props) {
  const [comments, setComments] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newComment = e.target.comment.value;
    const updatedComment = checkSpam(newComment);
    const updatedComments = [updatedComment, ...comments];
    setComments(updatedComments);
    e.target.comment.value = "";
  };

  const checkSpam = (str) => {
    const lowerCaseStr = str.toLowerCase();
    const filteredStr = lowerCaseStr.replace(/viagra|xxx/gi, "***");
    return filteredStr;
  };

  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="greetings">
          <p>Hi</p>
          <p>how are you?</p>
        </div>
        <div className="yourcomment"></div>
        <textarea className="newcomment" name="comment"></textarea>
        <button className="btn">SEND</button>
      </form>
      <div className="commentList">
        {comments.map((comment, index) => (
          <div
            key={index}
            className={index === 0 ? "highlightedComment" : "comment"}
          >
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
}
