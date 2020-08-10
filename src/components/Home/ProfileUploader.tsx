import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fs, storage } from "lib/firebase";
import { useAuthCtx } from "providers/AuthProvider";
import React, { useRef, useState } from "react";

const ProfileUploader = () => {
  const { uid } = useAuthCtx()!;
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const inputEl = useRef(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const file = (inputEl as any).current.files[0];

    if (
      !file ||
      typeof file.type !== "string" ||
      file.type.indexOf("image") !== 0
    ) {
      setError(true);
      return;
    }

    setSubmitting(true);

    storage
      .ref(`profile/${uid}`)
      .put(file)
      .then((snap) => {
        snap.ref.getDownloadURL().then((url) => {
          fs.doc(`profile/${uid}`)
            .update({ "personal.photo": url })
            .then(() => {
              setDone(true);
              setSubmitting(false);
            });
        });
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div>
      {done ? (
        <div className="notification is-success is-light">
          Upload complete. You may need to refresh the page to see the image.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Upload profile picture:
            <input type="file" ref={inputEl} />
          </label>
          <br />
          <button
            className="button is-link is-light is-small"
            disabled={submitting}
            type="submit"
          >
            <span className="icon">
              <FontAwesomeIcon icon="arrow-up" />
            </span>
            <span>Upload</span>
          </button>
        </form>
      )}

      {error && (
        <div className="notification is-danger">
          Error occured. Please make sure you've selected valid image file.
        </div>
      )}
    </div>
  );
};

export default ProfileUploader;
