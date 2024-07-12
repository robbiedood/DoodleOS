import { useRef } from "react";
import Profile from "components/apps/Messenger/Profile";
import StyledChatProfile from "components/apps/Messenger/StyledChatProfile";
import { useNostrProfile } from "components/apps/Messenger/hooks";
import { useIsVisible } from "hooks/useIsVisible";

const ChatProfile: FC<{ publicKey: string }> = ({ publicKey }) => {
  const elementRef = useRef<HTMLLIElement | null>(null);
  const isVisible = useIsVisible(elementRef);
  const { about, nip05, picture, userName } = useNostrProfile(
    publicKey,
    isVisible
  );

  return (
    <StyledChatProfile ref={elementRef}>
      <Profile
        nip05={nip05}
        picture={picture}
        pubkey={publicKey}
        userName={userName}
      >
        {about && <div className="about">{about}</div>}
        <div className="encryption">
          <span>👋🏻 Do you like this website?</span>
          <span> 💬Let us know what you think!</span>
          <span>📫 Leave your email to receive updates from the website!</span>
        </div>
      </Profile>
    </StyledChatProfile>
  );
};

export default ChatProfile;
