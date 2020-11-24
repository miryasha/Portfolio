import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src='https://www.pngitem.com/pimgs/m/10-106042_male-professional-avatar-icon-hd-png-download.png'
                            alt='avatar'
                            className='avatar-img' />

                        <div className='banner-text'>
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | JavaScript | Nodejs | Express | MERN | MongoDB | MySQL</p>
                            <div className='social-links'>
                                <a href='https://www.linkedin.com/in/miryasha-asgharpour-1bb4911b6/' rel='noopener noreferrer' target='_blank'>
                                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                                </a>

                                <a href='https://github.com/yasha6081' rel='noopener noreferrer' target='_blank'>
                                    <i className='fa fa-github-square' aria-hidden='true' />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;