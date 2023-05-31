import CreatureItem from "../CreatureItem/CreatureItem";

// can put {creatureList/list as prop} as parameter to this argument
//    and then you can skip props

function CreatureList(props){
    console.log('props is:', props);

    return (
        <>
            <h2>All Creatures</h2>
            <ul>
                {props.taco.map(creature => 
                    (<CreatureItem key={creature.id} creature={creature} />
                    // <li key={creature.id}>{creature.name} is from {creature.origin}</li>)
                    ))}
            </ul>
        </>
    )
}

export default CreatureList;