import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteItem, getItems } from "../actions/itemActions"

import ItemModal from "./ItemModal"

const ShoppingList = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.item.items)
  
  useEffect(() => {
    dispatch(getItems())
  }, [])

  const onDelete = (id) => {
    dispatch(deleteItem(id))
  }
  return (
    <div className="container">
      <div className="wrapper">
      <ItemModal />
        <ul className="shopping-list">
          {
            items.map(({ _id, name }) => (
              <li key={_id} className="item">
                <button 
                  className="del-btn btn"
                  onClick={() => onDelete(_id)}
                >&times;</button>
                <span>{name}</span>
                {/* <button className="done-btn btn">Done</button> */}
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

// ShoppingList.propTypes = {
//   getItems: PropTypes.func.isRequired,
//   item: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//   item: state.item
// })

// export default connect(mapStateToProps, { getItems })(ShoppingList)
export default ShoppingList
