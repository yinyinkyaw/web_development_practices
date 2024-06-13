import PropTypes from "prop-types"

export const QueueList = ({ list }) => {
  return (
    <div className="queue_list_container">
      {list?.length > 0 && (
        list.map((info, index) => (
          <div className="queue_list" key={index}>
            <h3>{info.category}</h3>
            <div className="customer_list">
              {
                info.customers.length > 0 && (
                  info.customers.map((customer, index) => (
                    <div className="customer" key={index}>{customer}</div>
                  ))
                )
              }
            </div>
          </div>
        ))
      )}
    </div>
  )
}

QueueList.propTypes = {
  list: PropTypes.array
}