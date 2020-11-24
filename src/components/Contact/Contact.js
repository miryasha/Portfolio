import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
      render() {
          return (
              <div className='contact-body'>
                  <Grid className='contact-grid'>
                      <Cell col={6}>
                          <h2>Miryasha Asgharpour</h2>
                          <img src='https://www.pngitem.com/pimgs/m/10-106042_male-professional-avatar-icon-hd-png-download.png'
                              alt='avatar'
                              style={{ height: '250px' }} />
                      </Cell>
                      <Cell col={6}>
                          <h2>My Contact</h2>
                          <hr />
                          <div className='contact-list'>
                              <List>
                                  <ListItem>
                                      <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                          <i className='fa fa-github-square' aria-hidden='true' />Miryasha Asghrpour</ListItemContent>
                                  </ListItem>
                                  <ListItem>
                                      <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                          <i className='fa fa-envelope' aria-hidden='true' />yasha6081 at gmail.com</ListItemContent>
                                  </ListItem>
                              </List>
                          </div>
                      </Cell>
                  </Grid>
              </div>
          );
      }
  }
  
  export default Contact;