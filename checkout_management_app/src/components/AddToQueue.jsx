import { useRef } from 'react'
import { useContext } from 'react'
import { InputBox } from './InputBox'
import { Button } from './Button'
import toast from 'react-hot-toast'
import { addToQueue, getMinimumCart, getTotalQueueCount } from '../utils'
import { QueueContext } from '../utils/context'

export const AddToQueue = () => {
    const inputRef = useRef(null);
    const { list, setList } = useContext(QueueContext)

    const handleSubmit = (event) => {
        event.preventDefault()

        const count = Number.parseInt(inputRef.current.value);
        if(!count) {
            toast.error("Please add number only.");
            return;
        }
        if(count > 100) {
            toast.error("Items cannot be exceeded over 100");
            return;
        }

        const queueIndex = getMinimumCart(list);
        addToQueue(list, queueIndex, count);
        const modifiedList = getTotalQueueCount(list);
        setList([...modifiedList])
        inputRef.current.value = null;
    }
  return (
    <form onSubmit={handleSubmit}>
        <InputBox inputRef={inputRef} />
        <Button type="submit">Add to Queue</Button>
    </form>
  )
}