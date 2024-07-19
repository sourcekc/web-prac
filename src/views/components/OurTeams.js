import React from 'react'
import TeamCard from './TeamCard';

import {ReactComponent as chris} from '../../assets/svg/chris.svg';
import {ReactComponent as david} from '../../assets/svg/david.svg';
import {ReactComponent as emma} from '../../assets/svg/emma.svg';
import {ReactComponent as jenny} from '../../assets/svg/jenny.svg';
import {ReactComponent as michael} from '../../assets/svg/michael.svg';
import {ReactComponent as rachel} from '../../assets/svg/rachel.svg';
import {ReactComponent as sarah} from '../../assets/svg/sarah.svg';
import {ReactComponent as tom} from '../../assets/svg/tom.svg';
import {ReactComponent as tony} from '../../assets/svg/tony.svg';

const teamMembers = [
{ name: "Tony Johnson", position: "Founder & CEO", Image: tony },
{ name: "Rachel Johnson", position: "Co-Founder & CFO", Image: rachel },
{ name: "David Smith", position: "President", Image: david },
{ name: "Jenny Lee", position: "Vice President", Image: jenny },
{ name: "Michael Thompson", position: "Chief Operating Officer", Image: michael },
{ name: "Sarah Davis", position: "Chief Financial Officer", Image: sarah },
{ name: "Chris Anderson", position: "Senior Project Manager", Image: chris },
{ name: "Emma Wilson", position: "Business Development Manager", Image: emma },
{ name: "Tom Brown", position: "Director of Human Resources", Image: tom },
];

const OurTeams = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[12px]">
        {teamMembers.map((member,index)=>(
        <TeamCard
        key={index}
        name={member.name}
        position={member.position}
        Image={member.Image}
        />
    ))}
      
    </div>
  )
}

export default OurTeams
