import PropTypes from "prop-types"

export const InputBox = ({ inputRef, ...props }) => {
  return (
    <input type='text' ref={inputRef} {...props} />
  )
}

InputBox.propTypes = {
  inputRef: PropTypes.object
}