import React from 'react';
import fmab from '../../images/fmab.jpg';
import './blog.css';

function Fmab() {
    return (
        <>
            <div className='onepiece'>
                <div className='image'>
                    <img src={fmab} alt='op'/>
                </div>
                <div className='title'>Full Metal Alchemist Brotherhood</div>

                <div className='blogs'>Brothers Edward and Alphonse Elric are raised by their mother Trisha Elric in the remote village of Resembool in the country of Amestris. Their father Hohenheim, a noted and very gifted alchemist, abandoned his family while the boys were still young, and while in Trisha's care they began to show an affinity for alchemy and became curious about its secrets. However, when Trisha died of a lingering illness, they were cared for by their best friend Winry Rockbell and her grandmother Pinako. <br/><br/>The boys traveled the world to advance their alchemic training under Izumi Curtis. Upon returning home, the two decide to try to bring their mother back to life with alchemy. However, human transmutation is a taboo, as it is impossible to do so properly. In the failed transmutation that results in Al's body being completely obliterated, and Ed losing his left leg. In a last ditch attempt to keep his brother alive, Ed sacrifices his right arm to bring Al's soul back and houses it in a nearby suit of armor. After Edward receives automail prosthetics from Winry and Pinako, the brothers decide to burn their childhood home down (symbolizing their determination and decision of "no turning back") and head to the capital city to become government sanctioned State Alchemists. After passing the exam, Edward is dubbed the "Fullmetal Alchemist" by the State Military, and the brothers begin their quest to regain their full bodies back through the fabled Philosopher's Stone, under the direction of Colonel Roy Mustang. Along the way, they discover a deep government conspiracy to hide the true nature of the Philosopher's Stone that involves the homunculi, the alchemists of the neighboring nation of Xing, the scarred man from the war-torn nation of Ishval, and their own father's past.</div>

            </div>
        </>
    )
}

export default Fmab
