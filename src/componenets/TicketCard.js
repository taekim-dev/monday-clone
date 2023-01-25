import { Link } from 'react-router-dom'
import AvatarDisplay from "./AvatarDisplay"
import StatusDisplay from "./StatusDisplay"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import DeleteBlock from "./DeleteBlock"

const TicketCard = ({color, ticket}) => {


    console.log("color: " + color)

    return (
        <div className="ticket-card">
            <Link to={`/ticket/`} id="link">
                <div className="ticket-color"></div>
                <h3>{ticket.title}</h3>
                <AvatarDisplay />
                <StatusDisplay />
                <PriorityDisplay />
                <ProgressDisplay />
            </Link>
            <DeleteBlock />
        </div>
    )
}

export default TicketCard