import { useState } from 'react';

const VideoModal = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="video-play" onClick={() => setOpen(true)}>▶</button>
      {open && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setOpen(false)}>✕</button>
            <div className="modal-body">Video will be added later.</div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
