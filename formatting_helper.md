## Sections of helpers for updating resume format

### minified headers with styling for complete example

```html
<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" lang xml:lang><head><meta charset="utf-8"><meta name="generator" content="pandoc"><meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes"><title>Curriculum Vitae - Isaac Newton</title><style>code{white-space:pre-wrap}span.smallcaps{font-variant:small-caps}span.underline{text-decoration:underline}div.column{display:inline-block;vertical-align:top;width:50%}div.hanging-indent{margin-left:1.5em;text-indent:-1.5em}ul.task-list{list-style:none}</style><style type="text/css">a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;color:#0c0604}html{margin:0 auto;max-width:1000px}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}table{border-collapse:collapse;border-spacing:0}body{font:normal normal 400;font-size:14pt;line-height:1.3em;font-family:Latin Modern Roman,Latin Modern Math,serif}ul{position:relative;left:28%;width:65%;margin-bottom:10px}li:before{content:"-";position:relative;left:-.25em}li{padding-left:1.25em;text-indent:-1.25em}li ul{position:relative;left:0;width:100%}h1,h2,h3{font-variant-caps:small-caps;font-weight:500}h1{width:80%;text-align:left;font-size:2em;line-height:1em;position:relative;left:0}h2{font-size:1.1em;color:#482009;margin-top:12pt;position:relative;text-align:left;width:20%;height:0;top:0}h2+h3{margin-top:1.5em}h3{font-size:1em;color:#ad7549;position:relative;height:0;text-align:left;width:18%;left:2%;margin-top:10pt}h4,p{position:relative;left:23%;margin-bottom:7pt;margin-right:0;width:77%;text-align:justify;text-justify:inter-word;clear:both}h4{font-weight:700;margin-top:10pt;text-align:left}h4 code{font-weight:700;color:#424242;letter-spacing:0;font-size:90%;line-height:calc(1.3em / .9);margin-bottom:inherit;position:relative;text-align:right;float:right;clear:none;right:0;margin-left:10px}h2+h4,h3+h4{margin-top:0}blockquote{border-left:3px solid #0c0604;padding-left:10px;position:relative;left:25%;width:70%;margin-bottom:10px;font-style:italic}blockquote p{left:0;width:100%}hr{margin-top:1em;margin-bottom:1em}header+hr{margin-top:.2em}a{color:inherit;color:#063d7f;text-decoration:none}a:visited{color:#063d7f}a:hover{color:#0e1131}em{font-style:italic}strong{font-weight:bolder}#ghbutton{display:none;visibility:hidden}</style></head>


</html>
```

### simple example that works when converting to PDF

```html
<!DOCTYPE html>
<title>Resume</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/casualwriter/casual-markdown/dist/casual-markdown.css">
<script src="https://cdn.jsdelivr.net/gh/casualwriter/casual-markdown/dist/casual-markdown.js"></script>
<style>
  body {
    line-height: 1.5;
    margin: auto;
    padding: 3px;
    max-width: 1024px;
    display: none;
    FONT-FAMILY: "SEGOE UI", ARIAL
  }

  h1 {
    font-size: 200%;
    padding: 16px;
    border: 1px solid lightgrey;
    COLOR: WHITE;
    BACKGROUND: LINEAR-GRADIENT(TO BOTTOM RIGHT, #06C, #FC0)
  }

  h2 {
    border-bottom: 1px solid grey;
    padding: 2px;
    COLOR: TEAL
  }
</style>
<body onload="document.body.innerHTML=md.html(document.body.innerHTML); document.body.style.display='block'; 
              document.getElementById('qrcode').src='https://chart.googleapis.com/chart?cht=qr&chs=177x177&chl='+location.href">
<!-- <img id=qrcode style="float:right; margin:5px; border:1px solid lightgrey; width:70px" /> -->
<!--======= COPY ABOVE CODE AS HEADER, THEN FOLLOW WITH RESUME CONTENT IN MARKDOWN FORMAT =========-->

<!--<img style="float:right;border-radius:50%;width:70px;padding:6px" src="avatar-man.jpg" />-->

<span style="float:right;padding:6px;color:white"> 
  dwebber@email.com <br> mobile: +60 12 XXXX XXXX <br>Nationality: American
</span>

# David Webber (Senior Web Developer)

## EXECUTIVE SUMMARY

* Senior IT professional with 7 years of experience developing in-house company solutions and customised IT software solutions for external clients, web service API integration and web-based applications; key clients include XXXX and XXXX
* Well-versed in all stages of software development life cycle, including requirements gathering, design, development, testing and deployment
* Highly articulate and capable of translating complex ideas into actionable outcomes; meeting business objectives and forging strong relationships with clients, vendors and partners
* Proactive team builder and tactical planner with ability to attract and secure solid working relationships across organisational levels

## TEHNICAL SKILLS

* Languages: Java SE, Java EE, CSharp, HTML5, HTML, CSS
* Software: NetBeans , Eclipse, Envox CT ADE, ASP.NET
* Databases: MySQL, Microsoft SQL Server, PostgreSQL Oracle DB
* Others: Unix (CentOS), AngularJS, Apache Tomcat, IBM WebSphere, Spring Framework

## PROFESSIONAL EXPERIENCE

<span style="float:right;font-weight:700">Nov 2012 - Present</span>
### SENIOR SOFTWARE ENGINEER

 __ABC TECHNOLOGY COMPANY, Hong Kong__

* Develop customised IT solutions for clients and enhance existing in-house systems
* Liaise with clients to conceptualise and plan overall system flow, gather requirements and develop architecture and specifications
* Handle change requests and documentation, and provide second-level support

 __Selected Projects__
 
**IVR System for Company XYZ**

* Role: Team Leader and Main Developer
* Liaised with client's IS/marketing/PABX teams, gathered requirements, developed software, performed SIT and UAT and fixed bugs 
* Analysed and resolved technical issues following system go-live
* Prepared and reviewed project documentation, including project plans, system specifications, SIT and UAT documents, CR, fault reports
* Worked closely with client to standardise deployment procedures and deployment documentation
* Trained client’s IS team to troubleshoot 1st level issues, and provided 2nd level support

**Online Customer Portal for Company 123**

* Role: Team leader and main developer
* Conducted entire SDLC in collaboration with client, and followed through with documentation, SIT and UAT

<span style="float:right;font-weight:700">Jan 2010 - Jan 2012</span>
### WEB DEVELOPER

__WORLWIDE XYZ TECHNOLOGIES, Hong Kong__

* Analysed customer requirements and created roll out strategy for project delivery
* Web developer specializing on CSS development and CSharp programming with ASP.NET
* Custom designed solutions using SQL Server 2010 platform

## EDUCATIONAL & QUALIFICATIONS

* Master of Information Systems, Hong Kong University
* Bachelor’s Degree (Honours) First Class, Computer Science, University of Hong Kong
* Sun Certified Programmer for Java 2 Platform, SE 5.0 (SCJP 5.0)
* Big Data and Hadoop Certification, Simplilearn, In Progress

## MISC. INFORMATION

* Languages: Fluent in English and Cantonese
* Availability: 2 months’ notice
* References available upon request


ps: reference CV sample from https://www.resumewriter.hk/blog/web-developer-cv-sample/
```

### complete example

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang xml:lang>
  <head>
    <meta charset="utf-8" />
    <meta name="generator" content="pandoc" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
    <title>Curriculum Vitae - Isaac Newton</title>
    <style>
      code {
        white-space: pre-wrap;
      }

      span.smallcaps {
        font-variant: small-caps;
      }

      span.underline {
        text-decoration: underline;
      }

      div.column {
        display: inline-block;
        vertical-align: top;
        width: 50%;
      }

      div.hanging-indent {
        margin-left: 1.5em;
        text-indent: -1.5em;
      }

      ul.task-list {
        list-style: none;
      }
    </style>
    <style type="text/css">
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        color: #0C0604;
      }

      html {
        margin: 0 auto;
        max-width: 1000px;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      body {
        line-height: 1;
      }

      ol,
      ul {
        list-style: none;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      body {
        font: normal normal 400;
        font-size: 14pt;
        line-height: 1.3em;
        font-family: Latin Modern Roman, Latin Modern Math, serif;
      }

      ul {
        position: relative;
        left: 28%;
        width: 65%;
        margin-bottom: 10px;
      }

      li:before {
        content: "-";
        position: relative;
        left: -0.25em;
      }

      li {
        padding-left: 1.25em;
        text-indent: -1.25em;
      }

      li ul {
        position: relative;
        left: 0;
        width: 100%;
      }

      h1,
      h2,
      h3 {
        font-variant-caps: small-caps;
        font-weight: 500;
      }

      h1 {
        width: 80%;
        text-align: left;
        font-size: 2em;
        line-height: 1em;
        position: relative;
        left: 0%;
      }

      h2 {
        font-size: 1.1em;
        color: #482009;
        margin-top: 12pt;
        position: relative;
        text-align: left;
        width: 20%;
        height: 0px;
        top: 0em;
      }

      h2+h3 {
        margin-top: 1.5em;
      }

      h3 {
        font-size: 1em;
        color: #AD7549;
        position: relative;
        height: 0px;
        text-align: left;
        width: 18%;
        left: 2%;
        margin-top: 10pt;
      }

      p,
      h4 {
        position: relative;
        left: 23%;
        margin-bottom: 7pt;
        margin-right: 0;
        width: 77%;
        text-align: justify;
        text-justify: inter-word;
        clear: both;
      }

      h4 {
        font-weight: bold;
        margin-top: 10pt;
        text-align: left;
      }

      h4 code {
        font-weight: bold;
        color: #424242;
        letter-spacing: 0px;
        font-size: 90%;
        line-height: calc(1.3em / 0.9);
        margin-bottom: inherit;
        position: relative;
        text-align: right;
        float: right;
        clear: none;
        right: 0px;
        margin-left: 10px;
      }

      h2+h4,
      h3+h4 {
        margin-top: 0px;
      }

      blockquote {
        border-left: 3px solid #0C0604;
        padding-left: 10px;
        position: relative;
        left: 25%;
        width: 70%;
        margin-bottom: 10px;
        font-style: italic;
      }

      blockquote p {
        left: 0%;
        width: 100%;
      }

      hr {
        margin-top: 1em;
        margin-bottom: 1em;
      }

      header+hr {
        margin-top: 0.2em;
      }

      a {
        color: inherit;
        color: #063d7f;
        text-decoration: none;
      }

      a:visited {
        color: #063d7f;
      }

      a:hover {
        color: #0e1131;
      }

      em {
        font-style: italic;
      }

      strong {
        font-weight: bolder;
      }

      #ghbutton {
        display: none;
        visibility: hidden;
      }
    </style>
  </head>
  <body>
    <header id="title-block-header">
      <h1 class="title">Curriculum Vitae - Isaac Newton</h1>
    </header>
    <hr />
    <h2 id="contact-information">Contact information</h2>
    <p>Isaac Newton <br />
      <a href="mailto:isaac@applesdofall.org" class="email">isaac@applesdofall.org</a>
      <br />
      <a href="http://en.wikipedia.org/wiki/Isaac_Newton" class="uri">http://en.wikipedia.org/wiki/Isaac_Newton</a>
      <br />
      <a href="tel:+443300580058">+44 (0)33 0058 0058</a>
    </p>
    <h2 id="currently">Currently</h2>
    <p>Standing on the shoulders of giants. Favourite quotes:</p>
    <blockquote>
      <p>What we know is a drop, what we don’t know is an ocean.</p>
      <p>To any action there is always an opposite and equal reaction; in other words, the actions of two bodies upon each other are always equal and always opposite in direction.</p>
    </blockquote>
    <h3 id="specialized-in">Specialized in</h3>
    <p>Laws of motion, gravitation, minting coins, disliking <a href="http://en.wikipedia.org/wiki/Robert_Hooke">Robert Hooke</a>
    </p>
    <h3 id="research-interests">Research interests</h3>
    <p>Interested in the following topics:</p>
    <ul>
      <li>cooling</li>
      <li>power series</li>
      <li>optics</li>
      <li>alchemy</li>
      <li>planetary motions</li>
      <li>apples: <ul>
          <li>granny smith</li>
          <li>McIntosh</li>
        </ul>
      </li>
    </ul>
    <h2 id="education">Education</h2>
    <h4 id="fellow-at-trinity-college-cambridge-1661-death">Fellow at Trinity College, Cambridge <code>1661-death</code>
    </h4>
    <h4 id="sizar-at-trinity-college-cambridge-1661-1667">Sizar at Trinity College, Cambridge <code>1661-1667</code>
    </h4>
    <p>In 1665, discovered the generalised binomial theorem and began to develop a mathematical theory that later became calculus. Obtained BA degree at Cambridge in August 1665, after which the university temporarily closed as a precaution against the Great Plague.</p>
    <h4 id="the-kings-school-grantham-1654-1660">The King’s School, Grantham <code>1654-1660</code>
    </h4>
    <p>Learned, Latin, Ancient Greek and a significant foundation of mathematics.</p>
    <p>Motivated partly by a desire for revenge against a schoolyard bully, became the top-ranked student, distinguishing himself mainly by building sundials and models of windmills.</p>
    <h2 id="awards">Awards</h2>
    <p>President, <em>Royal Society</em>, London, UK </p>
    <p>Associate, <em>French Academy of Science</em>, Paris, France </p>
    <h2 id="publications">Publications</h2>
    <!-- A list is also available [online](http://scholar.google.co.uk/citations?user=LTOTl0YAAAAJ) -->
    <h3 id="journals">Journals</h3>
    <p>
      <strong>1669</strong> Newton Sir I, <em>De analysi per æquationes numero terminorum infinitas</em>
    </p>
    <p>
      <strong>1669</strong>
      <em>Lectiones opticæ</em>
    </p>
    <h3 id="patents">Patents</h3>
    <p>
      <strong>2012</strong> Infinitesimal calculus for solutions to physics problems, <a href="http://www.techdirt.com/articles/20121011/09312820678/if-patents-had-been-around-time-newton.shtml">SMBC</a> patent 001
    </p>
    <h2 id="occupation">Occupation</h2>
    <h4 id="royal-mint-london-1600">Royal Mint, London <code>1600</code>
    </h4>
    <ul>
      <li>Warden</li>
      <li>Minted coins</li>
    </ul>
    <h4 id="lucasian-professor-of-mathematics-cambridge-university-1600">Lucasian professor of Mathematics, Cambridge University <code>1600</code>
    </h4>
  </body>
</html>
```
