import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';

class Resume extends Component {
      render() {
            return (
                  <div>
                        <Grid>
                              <Cell col={4}>
                                    <div style={{ textAlign: 'center' }}>
                                          <img src={require('../../assets/self.jpg')}//my picture
                                                alt='avatar'
                                                style={{ height: '300px', borderRadius: '50%' }} />
                                    </div>

                                    <h2 style={{ paddingTop: '2em' }}>Miryasha Asgharpour</h2>
                                    <h4 style={{ color: 'grey' }}>Web Developer</h4>
                                    <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                                    <p>I started my career in sales and marketing and went onto own a small business. Throughout I always used a data driven strategy in optimizing business operation, sales and inventory. This along my previous training in Finance, and managing IT projects fostered my interest in data science. I am proficient with Excel and Access for business analysis, sales forecasting, inventory. I am comfortable using SQL and Python, HTML and CSS, and have significant experience in using statistical analysis to derive trends from large sales and finance data set. I am skilled expert in client facing customer relationship management and conducting business analysis. </p>
                                    <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                                    <h5>Email</h5>
                                    <p>yahsa6081 at gmail.com</p>
                                    <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                              </Cell>
                              <Cell className='resume-right-col' col={8}>
                                    <h2>Education</h2>
                                    <Education
                                          startYear={2020}
                                          endYear={2020}
                                          schoolName='The University of Texas at Austin'
                                          schoolDescription='Full Stack Web Development'
                                    />

                                    <Education
                                          startYear={2003}
                                          endYear={2005}
                                          schoolName='Islamic Azad University'
                                          schoolDescription='Electrical and Electronics Engineering'
                                    />

                                    

                                    <hr style={{ borderTop: '3px solid #e22947' }} />

                                    <h2>Experience</h2>

                                    <Experience
                                          startYear={2019}
                                          endYear={'Present'}
                                          jobName='Atsign'
                                          jobDescription='Daya Analyst' />

                                    <Experience
                                          startYear={2014}
                                          endYear={2019}
                                          jobName='Tizro'
                                          jobDescription='Regional Sales Marketing Manager' />

                                    <Experience
                                          startYear={2007}
                                          endYear={2014}
                                          jobName='Atra'
                                          jobDescription='Self-employed' />

                                    <Experience
                                          startYear={2005}
                                          endYear={2006}
                                          jobName='Kando'
                                          jobDescription='Associate Sales Manager' />

                                    <hr style={{ borderTop: '3px solid #e22947' }} />

                                    <h2>Skills</h2>

                                    <Skills
                                          skill='HTML/CSS'
                                          progress={90} />

                                    <Skills
                                          skill='JavaScript'
                                          progress={60} />

                                    <Skills
                                          skill='Nodejs'
                                          progress={60} />

                                    <Skills
                                          skill='Express'
                                          progress={50} />

                                    <Skills
                                          skill='MySQL'
                                          progress={40} />

                                    <Skills
                                          skill='MERN'
                                          progress={40} />

                                    <Skills
                                          skill='PWA'
                                          progress={10} />


                              </Cell>
                        </Grid>
                  </div>
            );
      }
}

export default Resume;