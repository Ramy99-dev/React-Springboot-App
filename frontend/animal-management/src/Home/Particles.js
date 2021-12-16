import Particles from 'react-particles-js';
const Particle  = () => {
    return ( 
        <Particles className="particles"
    params={{
	    "particles": {
            "color":{"value":"#FFD700"},
	        "number": {
	            "value": 20,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	           
	        },
	        "modes": {
	            "repulse": {
	                "distance": 100,
	                "duration": 80
	            }
	        }
	    }
	}} />
     );
}
 
export default Particle;

