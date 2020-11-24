import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className='projects-grid'>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url("picture") center / cover' }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                        PWAOfflineBudgetTrackers
                            </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                        <a href='https://github.com/yasha6081/PWAOfflineBudgetTrackers' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url("picture") center / cover' }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            Code Quiz
                            </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                        <a href='https://github.com/yasha6081/pasta_la_vista' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url("picture") center / cover' }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            Password Generator
                            </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                        <a href='https://github.com/yasha6081/Password-Generator' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url("picture") center / cover' }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                        Workout Tracker
                            </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                        <a href='https://github.com/yasha6081/Workout_Tracker' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
      
      }
    }

    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab> Projects</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className='content'>{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;