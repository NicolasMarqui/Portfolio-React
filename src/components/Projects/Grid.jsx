import React from 'react';
import data from './data';
import './styles.css';
import { Grid } from 'mauerwerk';

class GridProjects extends React.Component {

    state = {
        isMobile: false,
    }

    componentDidMount(){
        this.resize();
    }

    resize() {
        let currentHideNav = (window.innerWidth <= 600);
        console.log(currentHideNav)
        if (currentHideNav) {
            this.setState({isMobile: currentHideNav});
        }
    }

    render(){
        return(
            <div className="gridWrapper">
                <Grid
                className="grid"
                data={data}
                keys={d => d.name}
                heights={d => d.height}
                columns={this.state.isMobile ? 1 : 2}>
                {(data, maximized, toggle) => (
                <div
                    className="cell"
                    style={{ backgroundImage: data.css , backgroundPosition: 'center', backgroundSize: 'cover'}}
                    onClick={toggle}>
                    {maximized && (
                    <div className="details">
                        <div className="circle" style={{ background: data.css,backgroundPosition: 'center', backgroundSize: 'cover' }} ></div>
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>
                        <div className="showButton">
                            <button>Demo</button>
                            <button>Código</button>
                        </div>
                    </div>
                    )}
                    {!maximized && <div className="default"><h1 style={{backgroundColor: 'white', color: 'black'}}>{data.name}</h1></div>}
                </div>
                
                )}
            </Grid>
            </div>
        )
    }
}

export default GridProjects;