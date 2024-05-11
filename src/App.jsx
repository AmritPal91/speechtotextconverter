import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";

const App = () => {

    const Listening = () => {
        SpeechRecognition.startListening({ continuous: true })
    }
    const {
        transcript,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    const [isCopied, setCopied] = useClipboard(transcript);

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div className="container">
            {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
            <h1>Speech to text converter</h1>

            <p>{transcript}</p>
            <div>
                <button onClick={setCopied}>
                    Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
                </button>
                <button onClick={Listening}>Start Listening</button>
                <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                <button onClick={resetTranscript}>Reset</button>
            </div>
        </div>
    );
};
export default App;