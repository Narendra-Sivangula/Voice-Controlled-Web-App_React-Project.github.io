const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

export const recognition = new SpeechRecognition();

recognition.isStarted = false;

export const startRecognition = () => {
  if (!recognition.isStarted) {
    recognition.isStarted = true;
    recognition.start();
  }
};

export const stopRecognition = () => {
  if (recognition.isStarted) {
    recognition.isStarted = false;
    recognition.stop();
  }
};
