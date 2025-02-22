import React from 'react';

const Sermons = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "36px", textAlign: "center" }}>Welcome to Our Sermon Library</h1>
      <p style={{ fontSize: "20px", textAlign: "center" }}>Choose a sermon below to watch or listen to.</p>

      {/* Video Sermons Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "30px", textAlign: "center" }}>Video Sermons</h2>
        <div className="sermon-list">
          <div className="sermon-item" style={{ marginBottom: "30px", textAlign: "center" }}>
            <img
              src="/path/to/video-thumbnail.png" // Replace with actual thumbnail for videos
              alt="Video Sermon Thumbnail"
              style={{ width: "100%", maxWidth: "400px", height: "auto", marginBottom: "10px" }}
            />
            <h3 style={{ fontSize: "24px" }}>Sermon Title 1</h3>
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>Short description of the sermon.</p>
            <video controls style={{ width: "100%", maxWidth: "600px" }}>
              <source src="/path/to/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <br />
            <a href="/path/to/video.mp4" download>
              <button style={{ fontSize: "18px", padding: "10px", marginTop: "10px" }}>
                Download Video
              </button>
            </a>
          </div>

          <div className="sermon-item" style={{ marginBottom: "30px", textAlign: "center" }}>
            <img
              src="/path/to/video-thumbnail.png" // Replace with actual thumbnail for videos
              alt="Video Sermon Thumbnail"
              style={{ width: "100%", maxWidth: "400px", height: "auto", marginBottom: "10px" }}
            />
            <h3 style={{ fontSize: "24px" }}>Sermon Title 2</h3>
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>Short description of the sermon.</p>
            <video controls style={{ width: "100%", maxWidth: "600px" }}>
              <source src="/path/to/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <br />
            <a href="/path/to/video.mp4" download>
              <button style={{ fontSize: "18px", padding: "10px", marginTop: "10px" }}>
                Download Video
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Audio Sermons Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "30px", textAlign: "center" }}>Audio Sermons</h2>
        <div className="sermon-list">
          <div className="sermon-item" style={{ marginBottom: "30px", textAlign: "center" }}>
            <img
              src="/path/to/audio-thumbnail.png" // Replace with actual thumbnail for audio
              alt="Audio Sermon Thumbnail"
              style={{ width: "100%", maxWidth: "400px", height: "auto", marginBottom: "10px" }}
            />
            <h3 style={{ fontSize: "24px" }}>Audio Sermon Title 1</h3>
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>Short description of the audio sermon.</p>
            <audio controls style={{ width: "100%", maxWidth: "600px" }}>
              <source src="/path/to/audio.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <br />
            <a href="/path/to/audio.mp3" download>
              <button style={{ fontSize: "18px", padding: "10px", marginTop: "10px" }}>
                Download Audio
              </button>
            </a>
          </div>

          <div className="sermon-item" style={{ marginBottom: "30px", textAlign: "center" }}>
            <img
              src="/path/to/audio-thumbnail.png" // Replace with actual thumbnail for audio
              alt="Audio Sermon Thumbnail"
              style={{ width: "100%", maxWidth: "400px", height: "auto", marginBottom: "10px" }}
            />
            <h3 style={{ fontSize: "24px" }}>Audio Sermon Title 2</h3>
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>Short description of the audio sermon.</p>
            <audio controls style={{ width: "100%", maxWidth: "600px" }}>
              <source src="/path/to/audio.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <br />
            <a href="/path/to/audio.mp3" download>
              <button style={{ fontSize: "18px", padding: "10px", marginTop: "10px" }}>
                Download Audio
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sermons;
