import TicketCard from "../componenets/TicketCard"
const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT Safety 101 Video',
            owner: 'Ania Kubow',
            avatar: "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg",
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video showcasing how to work with NFTs safely, including how to know if one is not genuine.',
            timestamp: '2022-02-11T07:36:17+0000'
        },
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'Build and Sell AI Model',
            owner: 'Ania Kubow',
            avatar: "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg",
            status: 'working on it',
            priority: 2,
            progress: 70,
            description: 'Make a video about AI',
            timestamp: '2022-02-13T07:36:17+0000'
        },
        {
            category: 'Q2 2022',
            color: 'blue',
            title: 'Build a bot',
            owner: 'Ania Kubow',
            avatar: "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg",
            status: 'working on it',
            priority: 3,
            progress: 10,
            description: 'Make a video about making a bot',
            timestamp: '2022-02-15T07:36:17+0000'
        }
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category))
    ]

    console.log("categories")
    console.log(uniqueCategories)

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets &&
                    uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets
                            .filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) => (
                                <TicketCard
                                    id={_index}
                                    color={filteredTicket.color}
                                    ticket={filteredTicket}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard