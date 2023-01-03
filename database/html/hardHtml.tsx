import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import { canvas_string, canvas_string_javascript } from "./constant";

export const HARD_HTML = [
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
        <br />
        <CodeSnippet codeString={canvas_string} language="html" />
        <br />
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
        <br />
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
        <br />
        <CodeSnippet
          codeString="
        <svg id='svg'></svg>
        "
          language="html"
        />
        <br />
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
        <br />
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
];
