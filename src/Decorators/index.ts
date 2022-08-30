
interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  startEvent(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer
    this.playButton = videoPlayerElements.playButton
    this.stopButton = videoPlayerElements.stopButton
  }

  startEvent(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle()
    })
    this.stopButton.addEventListener('click', () => {
    this.stop()
    })
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play()
      this.playButton.innerText = 'parar'
    } else {
      this.videoPlayer.pause()
      this.playButton.innerText = 'iniciar'
    }
  }
  stop(): void {
    this.videoPlayer.pause()
    this.videoPlayer.currentTime = 0
    this.playButton.innerText = 'iniciar'
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video-container > video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
})

videoPlayer.startEvent()

