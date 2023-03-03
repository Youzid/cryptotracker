import { helpers, InheritSymbol, orchestrate , FieldKeyframeState } from "jongleur";
import { Vector3 } from "three";
export const clips = orchestrate(
    {
        sectionOne: { opacity:1, translate:["0%","0%"]  ,config: { damping: false },  },
        sectionTwo: { opacity:0, translate:["-40%","0%"],config: { damping: false },  },
        sectionThree: { opacity:0 , translate:["0%","100%"] ,config: { damping: false }, },
        sectionFour: { opacity:0 , translate:["0%","0%"] ,config: { damping: false },},
        light: { intensity: 0.2,  position: new Vector3( 77.35, 100.76, 40.98) ,config: { damping: true },},
      camera: { position: new Vector3(0, 0, 150), lookAt: new Vector3(0, 0, 0)  },  // a camera object (uses the lookAt field),
      point1:{opacity:0.3 ,config: { damping: false }},
      point2:{opacity:0.3 ,config: { damping: false }},
      point3:{opacity:0.3 ,config: { damping: false }},
      point4:{opacity:0.3 ,config: { damping: false }},
    },
    {
    
      point1:{
        0:{
          opacity: helpers.state(1, "ease-in"),
        },
        2:{
          opacity: helpers.state(0.3, "ease-in"),
        }
        
      },
      point2:{
        1:{
          opacity: helpers.inherit,
        },
        2:{
          opacity: helpers.state(1, "ease-in"),
        },
        3:{
          opacity: helpers.state(0.3, "ease-in"),
        }
      },
      point3:{
        2.5:{
          opacity: helpers.inherit,
        },
        3:{
          opacity: helpers.state(1, "ease-in"),
        },
        4:{
          opacity: helpers.state(0.3, "ease-in"),
        }
      },
      point4:{
        3.5:{
          opacity: helpers.inherit,
        },
        4:{
          opacity: helpers.state(1, "ease-in"),
        },
    
      }
,
        sectionOne:{
       
      
        1: {
            // translate: helpers.state(["0px","1000px"], "ease-in-out", true),
            opacity: helpers.state(0, "ease-in"),
            translate: helpers.state(["0%","-10%"], "ease-in-out"),
        

        },

      },
      sectionTwo:{
      
     
        1.5: {
            // translate: helpers.state(["0px","1000px"], "ease-in-out", true),
            opacity: helpers.state(0, "ease-in"),
            translate: helpers.state(["-10%","0%"], "ease-in-out")   
            

        },
        2: {
            // translate: helpers.state(["0px","1000px"], "ease-in-out", true),
            opacity: helpers.state(1, "ease-in"),
            translate: helpers.state(["0%","0%"], "ease-in-out")           
        },
        2.5: {
            // translate: helpers.state(["0px","1000px"], "ease-in-out", true),
            opacity: helpers.state(0, "ease-in"),
            translate: helpers.state(["0%","-40%"], "ease-in-out")           
        },

      },
      sectionThree:{
        2.5: {
          opacity: helpers.inherit,
          translate: helpers.inherit
        },
        
        3: {
            opacity: helpers.state(1, "ease-in-out"),
            translate: helpers.state(["0%","20%"], "ease-in-out"),
    
        },
        3.5: {
            opacity: helpers.state(0, "ease-in-out"),
            translate: helpers.state(["0%","10%"], "ease-in-out")
        },
        4: {
          opacity: helpers.state(0, "ease-in-out"),
          translate: helpers.state(["0%","-60%"], "ease-in-out")
      },
      },
      sectionFour:{
        3.5: {
          opacity: helpers.inherit,
          translate: helpers.inherit
      },
    
        4: {
            opacity: helpers.state(1, "ease-in-out"),
            translate: helpers.state(["0%","-150%"], "ease-in-out")
        },
        
      },


      light: {
    
  
       0: {
          position: helpers.inherit,
        },
       1.5: {
        position: helpers.inherit,
        intensity: helpers.inherit,
        },
        2: {
          // opacity: helpers.state(1, "ease-in-out"),
          position: helpers.state(new Vector3(77.35, 83.76, 0), 'ease-in-out' ),
          intensity:helpers.state((0.8))
        },
    },


  camera: {
    
   
        2: {
           position: helpers.state(new Vector3(150, 30, 0), 'ease-in-out' ),
           lookAt: helpers.state(new Vector3(0, 0, 40), 'ease-in-out' )
         },
      
        3: {
          position: helpers.state(new Vector3(0, -50, 50), 'ease-in-out' ),
          lookAt: helpers.state(new Vector3(0, 60, 0), 'ease-in-out' )
        },
        4: {
          position: helpers.state(new Vector3(0, 80, 200), 'ease-in-out' ),
          lookAt: helpers.state(new Vector3(0, 40, 0), 'ease-in-out' )
        },
    }, // camera rotates up during the animation,
    },
    {  interpolation: "ease-in-out"  , length: 4 , damping:true }
  );