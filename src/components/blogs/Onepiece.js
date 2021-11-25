import React from 'react';
import onepiece from '../../images/op.png';
import './blog.css';

function Onepiece() {
    return (
        <>
            <div className='onepiece'>
                <div className='image'>
                    <img src={onepiece} alt='op'/>
                </div>
                <div className='title'>One Piece</div>

                <div className='blogs'>The world of One Piece is populated by humans and many other races, such as fish-men and merfolk (two races of fish/human hybrids), dwarves, minks (a race of humanoids with animal features), and giants. It is covered by two vast oceans, which are divided by a massive mountain range called the Red Line, which is also the only continent in the world. The Grand Line a sea that runs perpendicular to the Red Line, further divides them into four seas: North Blue, East Blue, West Blue, and South Blue. Surrounding the Grand Line are two regions called Calm Belts, similar to horse latitudes, which experience almost no wind or ocean currents and are the breeding ground for huge sea creatures called sea kings. Because of this, the calm belts are very effective barriers for those trying to enter the Grand Line. However, navy ships, members of an intergovernmental organization known as the World Government, are able to use a sea-prism stone to mask their presence from the sea kings and can simply pass through the calm belts. All other ships are forced to take a more dangerous route, going through a mountain at the first intersection of the Grand Line and the Red Line, a canal system known as Reverse Mountain. Sea water from each of the four seas runs up that mountain and merges at the top to flow down a fifth canal and into the first half of the Grand Line, called Paradise because how it compared to the second half.<br/> The second half of the Grand Line, beyond the second intersection with the Red Line, is known as the New World.

The currents and weather of the Grand Line's open sea are extremely unpredictable, whereas in the vicinity of islands the climate is stable. <br/><br/>The magnetic fields within the Grand Line cause normal compasses to malfunction, making it even more difficult to navigate, and instead a special compass called a Log Pose must be used. The Log Pose functions by locking on to one island's magnetic field and then locking on to another island's magnetic field. The time for it to set depends on the island. This process can be bypassed by obtaining an Eternal Pose, a Log Pose variation that is permanently set to a specific island and never changes.

The world of One Piece includes animals that function like devices. Transponder Snails are snail-like animals that act like a rotary phone, fax machine, or camera. Dials, the shells of certain sky-dwelling animals, can be used to store kinetic energy, wind, sound, images, heat, and the like and have various applications.</div>

            </div>
        </>
    )
}

export default Onepiece
