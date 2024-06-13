import { createContext, useState } from "react";
import PropTypes from "prop-types";
import queueData from "../data.json"
import { getTotalQueueCount } from ".";

export const QueueContext = createContext(null);

export const QueueContextProvider = ({ children }) => {
    const [list, setList] = useState(getTotalQueueCount(queueData))
    return <QueueContext.Provider value={{ list, setList }}>
        {children}
    </QueueContext.Provider>
}

QueueContextProvider.propTypes = {
    children: PropTypes.node
}