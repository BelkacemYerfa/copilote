import { useAuthUser } from "../../../hooks/useAuthUser";
import { useState, useEffect } from "react";
import like from "../../../assets/icons/like.svg";
import dislike from "../../../assets/icons/dislike.svg";
import ai from "../../../assets/icons/ai.svg";

interface ChatMessageProps {
  userId: string;
}

export const ChatMessage = ({ userId }: ChatMessageProps) => {
  const {
    user: { name, email },
  } = useAuthUser();
  //get the user user id
  return (
    <section
      style={{
        backgroundColor: userId === email ? "#FFFFFF" : "#F7F9FB",
      }}
      className="w-full h-fit p-4 "
    >
      <div className="m-auto w-[80%] flex gap-x-4">
        {userId === email ? (
          <img
            src={ai}
            height={40}
            width={40}
            className="rounded-full"
            alt="user"
          />
        ) : (
          <svg
            width="40"
            height="40"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.0994 18.0077C41.476 16.8911 41.6681 15.7219 41.6683 14.5451C41.6682 12.5978 41.1425 10.6857 40.1452 9.00523C38.1414 5.56369 34.4243 3.43892 30.4014 3.43892C29.6088 3.43893 28.8185 3.52152 28.0435 3.68532C27.0012 2.52656 25.7217 1.59898 24.2895 0.963738C22.8573 0.3285 21.3049 3.3867e-05 19.7346 0H19.6641L19.6376 0.000153528C14.7652 0.000153528 10.4441 3.10236 8.94628 7.67571C7.39582 7.98904 5.93108 8.62556 4.65012 9.54266C3.36915 10.4598 2.30153 11.6363 1.51871 12.9935C0.524519 14.684 0.000608369 16.6037 0 18.5582C0.000379943 21.3051 1.03378 23.9541 2.9001 25.9923C2.52337 27.1089 2.33123 28.2781 2.33107 29.4549C2.33125 31.4022 2.85695 33.3143 3.85414 34.9948C5.03998 37.032 6.85091 38.6449 9.0258 39.601C11.2007 40.5571 13.6271 40.807 15.9552 40.3145C16.9977 41.4733 18.2773 42.4009 19.7096 43.0361C21.1419 43.6714 22.6944 43.9999 24.2647 44H24.3353L24.3639 43.9998C29.239 43.9998 33.5587 40.8975 35.0565 36.32C36.607 36.0065 38.0717 35.37 39.3527 34.4529C40.6337 33.5357 41.7013 32.3592 42.4843 31.0021C43.4774 29.313 44.0003 27.3949 44 25.4422C43.9996 22.6954 42.9662 20.0464 41.0999 18.0083L41.0994 18.0077ZM24.3381 41.1235H24.3266C22.3758 41.1228 20.487 40.4476 18.9886 39.2151C19.0776 39.1679 19.1655 39.1187 19.2523 39.0677L28.1313 34.0072C28.3529 33.8827 28.5372 33.7026 28.6653 33.4852C28.7935 33.2677 28.8611 33.0206 28.8612 32.7691V20.4096L32.6141 22.5477C32.6338 22.5574 32.6508 22.5717 32.6635 22.5894C32.6763 22.6072 32.6844 22.6277 32.6872 22.6492V32.8777C32.682 37.4252 28.9473 41.1142 24.3381 41.1235ZM6.38308 33.557C5.64967 32.3057 5.26327 30.8859 5.26277 29.4405C5.26277 28.969 5.3045 28.4964 5.38577 28.0318C5.45178 28.0708 5.56698 28.1403 5.64965 28.1871L14.5287 33.2476C14.75 33.3751 15.0018 33.4423 15.2581 33.4422C15.5144 33.4422 15.7661 33.3749 15.9874 33.2473L26.8278 27.0713V31.3477L26.8279 31.3551C26.828 31.3757 26.8231 31.396 26.8138 31.4144C26.8045 31.4328 26.7909 31.4489 26.7742 31.4612L17.7984 36.5747C16.5283 37.2959 15.0887 37.6757 13.6234 37.6761C12.1565 37.6759 10.7154 37.2952 9.4446 36.5721C8.17383 35.8491 7.11804 34.8091 6.38308 33.5565V33.557ZM4.04719 14.4313C5.02239 12.76 6.56221 11.4803 8.39718 10.8162C8.39718 10.8916 8.39282 11.0252 8.39282 11.118V21.2391L8.39266 21.2474C8.3927 21.4987 8.46015 21.7455 8.58814 21.9628C8.71614 22.18 8.90013 22.36 9.12143 22.4844L19.9618 28.6595L16.209 30.7976C16.1905 30.8097 16.1692 30.817 16.1471 30.819C16.1251 30.821 16.1028 30.8175 16.0824 30.809L7.10562 25.6912C5.83661 24.9659 4.78311 23.9242 4.05069 22.6705C3.31826 21.4169 2.93265 19.9953 2.93248 18.5483C2.93305 17.1035 3.31756 15.6841 4.04765 14.4317L4.04719 14.4313ZM34.8814 21.5111L24.041 15.3353L27.794 13.1979C27.8125 13.1859 27.8337 13.1785 27.8558 13.1765C27.8779 13.1746 27.9001 13.178 27.9205 13.1866L36.8972 18.3C38.1672 19.0242 39.2219 20.0654 39.9552 21.3189C40.6885 22.5724 41.0747 23.9942 41.075 25.4416C41.075 28.8962 38.8903 31.9873 35.6053 33.1805V22.7568C35.6058 22.7529 35.6058 22.7489 35.6058 22.7451C35.6057 22.4947 35.5387 22.2488 35.4115 22.0321C35.2843 21.8155 35.1015 21.6358 34.8814 21.5111ZM38.6167 15.964C38.5294 15.9113 38.4415 15.8595 38.353 15.8089L29.474 10.7483C29.2526 10.621 29.001 10.5539 28.7447 10.5538C28.4885 10.5539 28.2369 10.621 28.0155 10.7483L17.175 16.9243V12.6478L17.1749 12.6405C17.1749 12.5987 17.1949 12.5594 17.2287 12.5343L26.2046 7.42517C27.4742 6.70296 28.9139 6.32276 30.3794 6.32269C34.9946 6.32269 38.7372 10.0155 38.7372 14.5692C38.737 15.0365 38.6967 15.503 38.6167 15.9636V15.964ZM15.1346 23.586L11.3809 21.4478C11.3612 21.4382 11.3442 21.4238 11.3315 21.4061C11.3187 21.3884 11.3106 21.3678 11.3079 21.3463V11.1177C11.3099 6.56647 15.0526 2.8767 19.6657 2.8767C21.6194 2.8771 23.5114 3.55243 25.0133 4.78549C24.9457 4.8219 24.8279 4.88611 24.7496 4.93296L15.8705 9.99342C15.649 10.1178 15.4648 10.2978 15.3366 10.5152C15.2084 10.7326 15.1409 10.9796 15.1408 11.2311V11.2392L15.1346 23.586ZM17.1733 19.249L22.0014 16.4975L26.8295 19.2472V24.7484L22.0014 27.4982L17.1733 24.7484V19.249Z"
              fill="#1c1c1c"
            />
          </svg>
        )}
        <WritingAnimation
          textArray={[
            "Tell me about Snow Dashboard UI Kit. \n",
            "What is it? \n",
            "what can i do with it? \n",
            "Tell me about Snow Dashboard UI Kit. \n",
            "What is it? \n",
            "what can i do with it? \n",
            "Tell me about Snow Dashboard UI Kit. \n",
            "What is it? \n",
            "what can i do with it? \n",
            "Tell me about Snow Dashboard UI Kit. \n",
            "What is it? \n",
            "what can i do with it? \n",
            "Tell me about Snow Dashboard UI Kit. \n",
            "What is it? \n",
            "what can i do with it? \n",
            "Tell me about Snow Dashboard UI Kit. \n",
            "What is it? \n",
            "what can i do with it? \n",
            "Tell me about Snow Dashboard UI Kit. \n",
            "What is it? \n",
            "what can i do with it? \n",
            "Tell me about Snow Dashboard UI Kit. \n",
            "What is it? \n",
            "what can i do with it? \n",
          ]}
        />
        {userId === name ? (
          <div className="flex item-center gap-x-4">
            <img src={like} className="cursor-pointer h-4 w-4 " alt="like" />
            <img
              src={dislike}
              className="cursor-pointer h-4 w-4 "
              alt="dislike"
            />
          </div>
        ) : (
          <div className="flex item-center gap-x-4">modify</div>
        )}
      </div>
    </section>
  );
};

interface Props {
  textArray: string[];
}

const WritingAnimation = ({ textArray }: Props) => {
  const [currentText, setCurrentText] = useState("");
  const [letterCount, setLetterCount] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {});
    const interval = setTimeout(() => {
      if (
        letterCount === textArray[index].length &&
        index === textArray.length - 1
      ) {
        clearInterval(interval);
      } else if (letterCount === textArray[index].length) {
        setIndex((prevIndex) => prevIndex + 1);
        setLetterCount(0);
      } else {
        setCurrentText((prevText) => prevText + textArray[index][letterCount]);
        setLetterCount((prevCount) => prevCount + 1);
      }
    }, 10);
    return () => clearTimeout(interval);
  }, [index, letterCount, textArray]);

  return (
    <div className="w-full">
      <pre className="w-full">{currentText}</pre>
    </div>
  );
};
