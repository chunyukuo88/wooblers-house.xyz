const emphasisColor = `color: cyan`;

export const allQaPairs = {
  public: {},
  secure: [
    {
      question: "Why does your site look so lame",
      answer: `<p>Thoughtful design is time-consuming and <span style="${emphasisColor}">CSS</span> (the technology used for styling) is not a priority. This is my "code playground", and I use it to play with more interesting technologies.</p>`,
    },
    {
      question: "Who is Woobler",
      answer: `<p>The little guy who breaks stuff.</p>`,
    },
    {
      question: "I want captions",
      answer: `<p>Here, have an emoji instead: &nbsp 🤷</p>`,
    },
    {
      question: "Why did you do this",
      answer: `<p>(1) to have my own <span style="${emphasisColor}">photo album</span> and (2) to learn <span style="${emphasisColor}">Amazon Web Services</span>.</p>`,
    },
    {
      question: "How did you slap this together",
      answer: `<p>I began using the <span style="${emphasisColor}">{{contextApi}}</span>. I then switched to <span style="${emphasisColor}">{{redux}}</span>. There's a semi-secret admin page (try to find it!) that uses <span style="${emphasisColor}">{{amplify}}</span> for <span style="${emphasisColor}">{{cognito}}</span> auth and drag-and-drop uploading to <span style="${emphasisColor}">S3</span>. (Before that I used <span style="${emphasisColor}">shell scripts</span> that plugged into the <span style="${emphasisColor}">AWS SDK</span>.)</p><p>I add whatever technologies strike my fancy, like <span style="${emphasisColor}">Google Analytics,</span> <span style="${emphasisColor}">mustache</span> templates or the <span style="${emphasisColor}">SVG animations</span> below.</p><p>This domain was registered via <span style="${emphasisColor}">Route 53</span>.</p>`,
    },
  ],
};
