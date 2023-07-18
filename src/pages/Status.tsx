import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Status.css";
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  const [newReply, setNewReply] = useState("");
  const [replies, setReplies] = useState([
    "Aww, she's adorable! Congratulations! 🎉",
    "I'm more of a dog person myself, but she is cute. 🐶",
    "Does Fluffy have any siblings?",
    "I adopted a kitten last year, best decision ever!",
    "Fluffy is such a cute name! 😻",
    "Remember to feed her well and keep her healthy! 🥘",
  ]);

  // This function is called when the user presses the "Reply" button.
  function createNewReply(event: FormEvent) {
    event.preventDefault();

    setReplies([newReply, ...replies]);
    setNewReply("");
  }

  // This function is called when the user presses the "Enter" key while holding the "Ctrl" or "Cmd" key.
  function handleHotKeySubmit(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      createNewReply(event as any);
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Just adopted a new kitten. Meet Fluffy! 🐱" />
      <Separator />

      <form onSubmit={createNewReply} className="answer-tweet-form" action="">
        <label htmlFor="tweet">
          <img src="https://github.com/codeitamarjr.png" alt="Itamar Junior" />
          <textarea
            name=""
            id="tweet"
            placeholder="Tweet your reply"
            value={newReply}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewReply(event.target.value);
            }}
          ></textarea>
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Reply</span>
        </button>
      </form>

      {replies.map((replies) => (
        <Tweet key={replies} content={replies} />
      ))}
    </main>
  );
}
