import React from 'react';
import './Hero.css';
import Parallax from 'react-springy-parallax';
import GridProjects from '../Projects/Grid';

export default class Hero extends React.Component {
    render(){
        const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 14,
            lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
    
      return (
        <React.Fragment>
            <div className="heroWrapper">
                <Parallax pages={3} ref="parallax" scrolling={false}>
    
                    <Parallax.Layer offset={0} speed={1} style={{ backgroundImage: '#243B4A' , opacity: 0.5}} />
                    {/* <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' , opacity: 0.2}} /> */}
                    <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' , opacity: 0.2}} />
    
                    <Parallax.Layer offset={0} speed={0.5} style={styles} onClick={() => this.refs.parallax.scrollTo(1)} className="layer1">
                    </Parallax.Layer>
                    <Parallax.Layer offset={1} speed={0.5} style={styles} onClick={() => this.refs.parallax.scrollTo(2)}>
                        {/* <div className="layer2">oi</div> */}
                        alo
                    </Parallax.Layer>
                    <Parallax.Layer offset={2} speed={0.5} style={styles} >
                        <GridProjects />
                        <button onClick={() => this.refs.parallax.scrollTo(0)}>Voltar Home</button>
                    </Parallax.Layer>
                </Parallax>
            </div>
        </React.Fragment>
      )
    }
}
