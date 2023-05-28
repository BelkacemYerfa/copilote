import { useAuthUser } from "../../hooks/useAuthUser";
import { ChatMessage } from "../shared/Input/ChatMessage";
import { ChatInput } from "../shared/Input/ChatInput";

interface RoomProps {
  id: string;
}

const Room = ({ id }: RoomProps) => {
  const { user } = useAuthUser();
  return (
    <section className="relative basis-full md:basis-[80%]  overflow-y-scroll ChatMessagesHolder ">
      <div className="w-full pb-[5.5rem]">
        <ChatMessage userId={user.name} />
      </div>
      <section className="fixed bottom-0 w-[80%] bg-white ">
        <section className=" w-[90%] m-auto flex flex-col gap-y-3 ">
          <section className=" bottom-0 p-4 rounded-md">
            <ChatInput />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Room;
