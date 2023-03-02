export const MEDIUM_MACHINE_QUESTIONS = [
  {
    question:
      "Write a program that implements a simple image carousel using HTML, CSS, and JavaScript.?",
    answer: (
      <>
        <p className="simple-answer">
          We have a list of images. We want to display one image at a time.
        </p>
        <p className="simple-answer">
          We have three buttons: Previous, Next, and Random. The Previous button
          should display the previous image in the list. The Next button should
          display the next image in the list. The Random button should display a
          random image from the list.
        </p>
        <br />
        <p className="simple-answer">
          We have setInterval() to change the image every 5 seconds
          automatically with help of Next button.
        </p>
        <br />
        <p className="simple-answer">
          We are using css `<b>z-index</b>` property to display the active image
          on top of the other images.
        </p>
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    title: "Image Carousel",
    slug: "image_carousel",
    description:
      "An image carousel is a slideshow for cycling through a series of images, which works like a slideshow. The carousel should display a single image at a time. The carousel should have a button to go to the next image. The carousel should have a button to go to the previous image.",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/215261310-fbe89f15-9f9b-4a75-9eeb-eb42f48429cc.png",
  },
  {
    question:
      "Write a program that lazy load images using JavaScript. The program should load images as the user scrolls down the page.",
    answer: (
      <>
        <p className="simple-answer">
          To lazy load images using JavaScript, you can use the `
          <b>IntersectionObserver</b>` API or the `<b>scroll position</b>` of
          the window.
        </p>
        <br />
        <br />
        <p className="simple-answer">
          In all cases you need to set the `<b>src</b>` attribute of the image
          to the `<b>data-src</b>` attribute.
        </p>
        <br />
        <br />
        <p className="simple-answer">
          When the image is available in the viewport, you can set the `
          <b>src</b>` attribute to the `<b>data-src</b>` attribute.
        </p>
        <br />
        <br />
        <p className="simple-answer">
          You can use the `<b>IntersectionObserver</b>` API to detect when an
          element is in the viewport. The `<b>IntersectionObserver</b>` API
          allows you to register a callback function that is called whenever the
          target element enters or leaves the viewport. The callback function
          receives a list of `<b>IntersectionObserverEntry</b>` objects as a
          parameter. The `<b>IntersectionObserverEntry</b>` objects contain
          information about the intersection between the target element and the
          viewport. You can use the `<b>isIntersecting</b>` property of the `
          <b>IntersectionObserverEntry</b>` object to check if the target
          element is in the viewport.
        </p>
        <br />
        <br />
        <p className="simple-answer">
          You can use the `<b>scroll position</b>` of the window to detect when
          an element is in the viewport. You can use the `<b>offsetTop</b>`
          property of the target element to get the distance between the top of
          the target element and the top of the document. You can use the `
          <b>scrollTop</b>` property of the window to get the distance between
          the top of the window and the top of the document. You can use the `
          <b>innerHeight</b>` property of the window to get the height of the
          window. You can use the `<b>offsetHeight</b>` property of the target
          element to get the height of the target element. You can use the `
          <b>offsetTop</b>` property of the target element to get the distance
          between the top of the target element and the top of the document.
        </p>
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    title: "Lazy Load Images",
    slug: "lazy_load_images",
    description:
      "Lazy loading is a technique that defers loading of non-critical resources at page load time. The technique allows you to improve the page load speed and reduce bandwidth consumption. The program should load images as the user scrolls down the page.",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/211284772-bfd8d4a1-c278-4d41-9675-14aeb86ee7e0.png",
  },
  {
    question:
      "Write a program that user can put nested comments in a comment box using HTML, CSS, and JavaScript.?",
    answer: (
      <>
        <p className="simple-answer">
          By using the `<b>appendChild()</b>` method, we can add a child element
          to the parent element.
        </p>
        <br />
        <p className="simple-answer">
          By default, we have created our first comment box. Where we have a
          reply button. When we click on the reply button, we are opening a
          comment box. In that comment box, we have a comment button. When we
          click on the comment button, we are adding a new comment box.
        </p>
        <br />
        <br />
        <p className="simple-answer">
          With the help of css `<b>:not(:first-child)</b>` selector, we are
          setting the second comment box to display with margin left. So that
          the second comment box will be child of the first comment box and we
          are doing the same for the third comment box. So that the third
          comment box will be child of the second comment box.
        </p>
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    title: "Nested Comments",
    slug: "nested_comments",
    description:
      "A comment box is a web application that allows users to post comments. The comment box should have a text area to enter the comment. The comment box should have a button to post the comment. The comment box should have a button to reply to the comment.",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/215261484-1592b945-3029-48ce-804f-0adccb3df1fa.png",
  },
  {
    question: "Rating system using HTML, CSS, and JavaScript.?",
    answer: (
      <>
        <p className="simple-answer">
          With help of `<b>data-*</b>` attribute, we are storing on which star
          user has clicked or hovered.
        </p>
        <br />
        <p className="simple-answer">
          For hover effect, we are using `<b>onmouseover</b>` event. When user
          is hovering on the star, we are making the star and all the previous
          stars to `<b>orange</b>`. And when user is removing the mouse from the
          star, we are making the star and all the previous stars to `{" "}
          <b>gray</b>` with the help of `<b>onmouseout</b>` event.
        </p>
        <br />
        <p className="simple-answer">
          For click effect, we are using `<b>onclick</b>` event. When user is
          clicking on the star, we are making the star and all the previous
          stars to `<b>orange</b>`.
        </p>
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    title: "Rating System",
    slug: "rating_system",
    description:
      "A rating system is a web application that allows users to rate a product or service. The rating system should have a star rating system.",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/214910462-978f5f3c-6c47-4304-bec7-afe3e54f178a.png",
  },
  {
    question:
      "Implement a feature that uses web workers to offload CPU-intensive tasks and improve performance in a web application.?",

    answer: (
      <>
        <p className="simple-answer">
          A `<b>web worker</b>` is a JavaScript running in the background,
          without affecting the performance of the page.
        </p>
        <p className="simple-answer">
          Web workers are used to perform tasks in background threads.
        </p>
        <br />
        <br />
        <p className="simple-answer">
          If you have a task that takes a long time to complete, you can use a
          web worker to run the task in the background, without blocking the
          main thread.
        </p>
        <p className="simple-answer">
          The main thread can continue running scripts while the web worker runs
          in the background.
        </p>
        <br />
      </>
    ),
    language: ["HTML", "JavaScript"],
    title: "Web Worker Offload CPU Using Worker.js",
    slug: "web_worker_offload_cpu_using_worker_js",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/215307935-2128bc86-462e-4795-83c6-f1b82acf91f5.png",
  },
  {
    question:
      "Implement a feature that uses the browser's geolocation API to display the user's current location.?",
    answer: (
      <>
        <p className="simple-answer">
          The `<b>Geolocation API</b>` is used to get the geographical position
          of a user.
        </p>
        <p className="simple-answer">
          For this feature, you can use the `
          <code> navigator.geolocation.getCurrentPosition()</code>` method.
        </p>
        <p className="simple-answer">
          With the help of <code className="code">getCurrentPosition()</code>{" "}
          method, we can get the current location of the user in the form of
          <code className="code">latitude</code> and
          <code className="code">longitude</code>.
        </p>
        <br />
        <br />
        <p className="simple-answer">
          With the help of <code className="code">latitude</code> and
          <code className="code">longitude</code>, we can get the current
          location of the user with the help of the `<b>Google Maps API</b>`.
        </p>
      </>
    ),
    language: ["HTML", "JavaScript"],
    title: "Geolocation API Display User Location",
    slug: "geolocation_api_display_user_location_with_current_location_details",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/215307956-6dccc22a-0feb-4fb6-9138-226e27ba33c9.png",
  },
];
