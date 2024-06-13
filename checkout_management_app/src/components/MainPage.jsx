import { AddToQueue } from '../components/AddToQueue'
import { QueueList } from '../components/QueueList'
import { useContext, useEffect } from 'react'
import { QueueContext } from '../utils/context'
import { checkoutItem } from '../utils'

const MainPage = () => {
    const { list, setList } = useContext(QueueContext);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const haveCheckoutList = checkoutItem(list)
            setList([...haveCheckoutList]) 
        }, [2000])

        return () => clearInterval(intervalId)
    }, [list])

    return (
        <div className="app_container">
            <AddToQueue />
            {
                list?.length > 0 && (
                    <QueueList list={list} />
                )
            }
        </div>
    )
}

export default MainPage