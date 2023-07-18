import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";
import { Link } from "react-router-dom";

interface TweetProps {
  content: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/codeitamarjr.png" alt="Itamar Junior" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Itamar Junior</strong>
          <span>@itjunior</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button className="button">
            <ChatCircle />
            18
          </button>
          <button className="button">
            <ArrowClockwise />
            18
          </button>
          <button className="button">
            <Heart />
            18
          </button>
        </div>
      </div>
    </Link>
  );
}
