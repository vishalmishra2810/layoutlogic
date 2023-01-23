import React, { useEffect } from "react";
import style from "./Feedback.module.scss";
import emailjs from "@emailjs/browser";
import { getValidation } from "../../utils/helper";
import useClickOutside from "../../utils/hooks/useClickoutSide";

function Feedback({ setShowFeedback, showFeedback }: any) {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const ref = React.useRef(null);
  const closePopup = () => {
    if (ref?.current === null) return;
    if (showFeedback) {
      setShowFeedback(false);
    } else {
      setShowFeedback(true);
    }
  };

  useClickOutside(ref, closePopup);
  const [triggerData, setTriggerData] = React.useState({
    email: "",
    message: "",
  });

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
    setTriggerData((prev: any) => ({
      ...prev,
      email: "",
    }));
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
    setTriggerData((prev: any) => ({
      ...prev,
      message: "",
    }));
  };

  const sendMessage = (emoji?: any) => {
    setLoading(true);
    if (!getValidation(email, message || emoji, setTriggerData)) {
      setLoading(false);
      return;
    }
    var templateParams = {
      message: message || emoji,
      email: email,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
      )
      .then(
        function (response) {
          setEmail("");
          setMessage("");
          setShowFeedback(false);
          setLoading(false);
        },
        function (error) {
          setTriggerData((prev: any) => ({
            ...prev,
            email: "Something went wrong. Please try again later.",
          }));
          setLoading(false);
        }
      );
  };

  const onEmojiClick = (emoji: any) => {
    setMessage(emoji + " ");
    sendMessage(emoji + " ");
  };

  return (
    <div className={style.feedback} ref={ref}>
      <div className={style.feedback_container}>
        <form className={style.feedback_container_form}>
          <div className={style.feedback_container_form_item}>
            <label className={style.feedback_container_form_item_label}>
              Email
            </label>
            <input
              className={style.feedback_container_form_item_input}
              type="email"
              name="email"
              placeholder="Your email..."
              value={email}
              onChange={handleEmailChange}
            />
            {triggerData?.email && (
              <span className={style.feedback_container_form_item_input_error}>
                {triggerData.email}
              </span>
            )}
          </div>
          <div className={style.feedback_container_form_item}>
            <label className={style.feedback_container_form_item_label}>
              Feedback
            </label>
            <textarea
              className={style.feedback_container_form_item_textarea}
              name="message"
              placeholder="Your feedback..."
              value={message}
              onChange={handleMessageChange}
            />
            {triggerData?.message && (
              <span className={style.feedback_container_form_item_input_error}>
                {triggerData.message}
              </span>
            )}
          </div>
        </form>
        <div className={style.feedback_container_form_item_btn}>
          <div className={style.feedback_container_form_emoji}>
            <span
              className={style.feedback_container_form_emoji_item}
              onClick={() => {
                onEmojiClick("🤩");
              }}
            >
              🤩
            </span>
            <span
              className={style.feedback_container_form_emoji_item}
              onClick={() => {
                onEmojiClick("😊");
              }}
            >
              😊
            </span>
            <span
              className={style.feedback_container_form_emoji_item}
              onClick={() => {
                onEmojiClick("😒");
              }}
            >
              😒
            </span>
            <span
              className={style.feedback_container_form_emoji_item}
              onClick={() => {
                onEmojiClick("😡");
              }}
            >
              😡
            </span>
          </div>
          <button
            className={style.feedback_container_form_item_button}
            onClick={sendMessage}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
