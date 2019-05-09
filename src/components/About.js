import React, { PureComponent } from 'react';
import styled from 'styled-components';

class About extends PureComponent {
  render() {
    return (
      <div className={this.props.className}>
        <h1>About</h1>
        <h2>This Site</h2>
        <p>I created this site to give myself a platform to build things so I can exercise existing skills and learn new ones. I'm using <a href='https://www.netlify.com/'>Netlify</a> to host this site, which is a <a href='https://reactjs.org/'>React</a> application. One of the technologies I'm experimenting with on this site is <a href='https://www.styled-components.com/'>styled components</a>, and I'm loving it.</p>
        <p>Does the design still look bad? Sorry about that! I'm pretty good at taking a design and building it into a site...if only I had a designer to make me a design...</p>
        <h2>Me</h2>
        <p>First of all, I am second.</p>
        <p>In order of importance: I'm a follower of Christ, a husband, a father of two, an endlessly curious learner, a software engineer and a US Air Force veteran.</p>
        <p>After moving around a few times growing up, my family eventually landed in Nebraska; and I found myself studying computer science at the University of Nebraska&mdash;Lincoln (yes, I'm a Husker fan&mdash;pretty big time&mdash;and I always have been). While earning my degree, I was also earning my commission as an officer in the USAF. After graduation/commissioning, my wife and I moved a couple times while I did some fun stuff with the Air Force before I separated so we could move back home to hopefully settle down. It's wonderful to be close to family, and I'm loving my current job working as a full-stack web developer.</p>
      </div>
    );
  }
}

export default styled(About)`
  text-align: left;
  margin-bottom: 50px;
`;