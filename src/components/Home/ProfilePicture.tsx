import profile from "assets/profile.png";
import { storage } from "lib/firebase";
import { useAuthCtx } from "providers/AuthProvider";
import React from "react";
import { useDownloadURL } from "react-firebase-hooks/storage";
import ProfileUploader from "./ProfileUploader";

const ProfilePicture = () => {
  const user = useAuthCtx()!;
  const [url] = useDownloadURL(storage.ref(`profile/${user.uid}_200x200`));

  return (
    <div className="has-text-centered">
      <img
        src={url ? url : profile}
        alt="profile"
        style={{ borderRadius: "50%", width: 200, height: 200 }}
      />

      <ProfileUploader />
    </div>
  );
};

export default ProfilePicture;
