import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Timeline.css";

export function Timeline() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([
    "Working on a new project. Exciting things to come! 💻🚀",
    "Just finished a 5k run! 🏃‍♂️💨",
    "The sunset today is breathtaking! 🌅",
    "Can't believe it's already July. This year is flying by!",
    "Nothing beats a good book on a rainy day. 📚☔️",
    "The latest episode of my favorite show was intense! 📺😮",
  ]);

  // This function is called when the user presses the "Reply" button.
  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }

  // This function is called when the user presses the "Enter" key while holding the "Ctrl" or "Cmd" key.
  function handleHotKeySubmit(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      // The "as any" is a workaround to a TypeScript limitation.
      createNewTweet(event as any);
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form" action="">
        <label htmlFor="tweet">
          <img src="https://github.com/codeitamarjr.png" alt="Itamar Junior" />
          <textarea
            name=""
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
          ></textarea>
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />
      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  );
}
