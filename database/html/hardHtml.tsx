import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import ListShow from "../../common/listShow/ListShow";
import {
  canvas_string,
  canvas_string_javascript,
  data_value_attributes_example,
  open_dialog_string,
  webrtc_html5_example,
} from "./constant";

export const HARD_HTML = [
  {
    question: "How to optimize the performance of a webpage?",
    answer: (
      <>
        <p className="simple_answers">
          To optimize the performance of a webpage, you will need to use the
          following techniques:
        </p>
        <br />
        <ListShow
          list={[
            "Use a CDN to host static files.",
            "Minify and compress static files.",
            "Use a service worker to cache static files.",
            "Use a preprocessor to compile CSS and JavaScript.",
            "Use a bundler to bundle CSS and JavaScript.",
            "Use a minifier to minify CSS and JavaScript and remove unused code.",
            "Use a linter to check for errors in CSS and JavaScript.",
            "Use a compiler to compile TypeScript to JavaScript.",
            "Lazy load images and videos.",
          ]}
          typeOfList="ol"
        />
      </>
    ),
  },
  {
    question:
      "How do you use the canvas element in HTML to create graphics and animations using JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          To use the canvas element in HTML to create graphics and animations
          using JavaScript, you will need to use the canvas tag{" "}
          <code>&lt;canvas&gt;</code> and specify the canvas id in the{" "}
          <code>id</code> attribute.
        </p>
        <CodeSnippet codeString={canvas_string} language="html" />
        <CodeSnippet
          codeString={canvas_string_javascript}
          language="javascript"
        />
      </>
    ),
  },
  {
    question:
      "How do you use the audio and video elements in HTML to embed media files on a webpage?",
    answer: (
      <>
        <p className="simple_answers">
          To use the audio and video elements in HTML to embed media files on a
          webpage, you will need to use the audio and video tags{" "}
          <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> and specify
          the media source in the <code>src</code> attribute.
        </p>
        <CodeSnippet
          codeString="
        <audio src='audio.mp3' controls></audio>
        <video src='video.mp4' controls></video>
        "
          language="html"
        />
      </>
    ),
  },
  {
    question:
      "How do you use the svg element in HTML to create scalable vector graphics?",
    answer: (
      <>
        <p className="simple_answers">
          To use the svg element in HTML to create scalable vector graphics, you
          will need to use the svg tag <code>&lt;svg&gt;</code> and specify the
          svg id in the <code>id</code> attribute.
        </p>
        <CodeSnippet
          codeString="
        <svg id='svg'></svg>
        "
          language="html"
        />
        <CodeSnippet
          codeString="
        const svg = document.getElementById('svg');
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', '10');
        rect.setAttribute('y', '10');
        rect.setAttribute('width', '100');
        rect.setAttribute('height', '100');
        rect.setAttribute('fill', 'red');
        svg.appendChild(rect);
        "
          language="javascript"
        />
      </>
    ),
  },
  {
    question:
      "How do you use the web workers API in JavaScript to run tasks in the background and improve the performance of a webpage?",
    answer: (
      <>
        <p className="simple_answers">
          To use the web workers API in JavaScript to run tasks in the
          background and improve the performance of a webpage, you will need to
          create a web worker using the <code>Worker()</code> constructor and
          specify the script file in the constructor.
        </p>
        <CodeSnippet
          codeString="
        const worker = new Worker('worker.js');
        worker.postMessage('Hello World');
        worker.onmessage = function (event) {
          console.log(event.data);
        };
        "
          language="javascript"
        />
      </>
    ),
  },
  {
    question:
      "Can you explain how to use the data and value attributes to provide additional information about an HTML element?",
    answer: (
      <>
        <p className="simple_answers">
          Yes, you can use the data and value attributes to provide additional
          information about an HTML element. <br /> The data attribute is used
          to store custom data private to the page or application. <br /> The
          value attribute is used to specify the value of an input element or
          value of a option element in a select element.
        </p>
        <CodeSnippet
          codeString={data_value_attributes_example}
          language="html"
        />
      </>
    ),
  },
  {
    question:
      "How do you use the dialog element to create a dialog box or popup window in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          To use the dialog element to create a dialog box or popup window in
          HTML, you will need to use the dialog tag <code>&lt;dialog&gt;</code>{" "}
          and specify the dialog id in the <code>id</code> attribute.
        </p>
        <CodeSnippet codeString={open_dialog_string} language="html" />
      </>
    ),
  },
  {
    question:
      "How do you use the HTML5 WebRTC API for real-time peer-to-peer communication?",
    answer: (
      <>
        <p className="simple_answers">
          To use the HTML5 WebRTC API for real-time peer-to-peer communication,
          you will need to use the <code>RTCPeerConnection</code> constructor to
          create a peer connection and the <code>getUserMedia()</code> method to
          get the local media stream.
        </p>
        <CodeSnippet codeString={webrtc_html5_example} language="html" />
      </>
    ),
  },
];
