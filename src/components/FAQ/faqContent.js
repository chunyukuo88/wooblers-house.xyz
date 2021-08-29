const emphasisColor = `color: cyan`;

export const allQaPairs = {
  public: {},
  secure: [
    {
      question: "Who is Woobler?",
      answer: `<p><span style="${emphasisColor}">{{woobler}}</span> is an affable chap, force of nature, and dump truck enthusiast.</p>`
    },
    {
      question: "Why did you make this site?",
      answer: `<p>The motivation was two-fold: (1) to <span style=\"${emphasisColor}\">replace Imgur</span> and (2) to learn <span style=\"${emphasisColor}\">AWS</span>.</p>`
    },
    {
      question: "What technologies does this site use?",
      answer: `<p>I began using the <span style=\"${emphasisColor}\">{{contextApi}}</span>. I then switched to <span style=\"${emphasisColor}\">{{redux}}</span>. I also added a semi-secret admin page that employs <span style=\"${emphasisColor}\">{{amplify}}</span> for <span style=\"${emphasisColor}\">{{cognito}}</span> authentication and the ability to upload to <span style=\"${emphasisColor}\">S3</span> directly from the site. Before that I used <span style=\"${emphasisColor}\">shell scripts</span> that plugged into the <span style=\"${emphasisColor}\">AWS SDK</span>.</p><p>I also add whatever smaller technologies strike my fancy, like <span style=\"${emphasisColor}\">mustache</span> templates or <span style=\"${emphasisColor}\">SVG animations</span> as seen on this page.</p>`
    },
    {
      question: "Why does this site look so lame?",
      answer: `<p>Pretty websites are time-consuming to make and <span style=\"${emphasisColor}\">CSS</span> (the technology used for styling) is not a priority for this one. This is a \"code playground\" of sorts, and I use it to play with other technologies.</p>`
    }
  ]
}

