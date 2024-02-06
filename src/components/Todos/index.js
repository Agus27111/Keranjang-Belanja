import PropTypes from "prop-types";
import styles from "./Todos.module.css";

import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";

const Todos = ({ todos, onAddition, onSubstraction }) => {
  return (
    <div className={styles.todos}>
      {todos.map((todo, index, arr) => {
        return (
          <div
            //dont forget key for method map
            key={index}
            //to add class with JS
            className={`${styles.todo} ${
              !(arr.length === index + 1) && `${styles.todoDivider}`
            }`}
          >
            {todo.title}
            <div className={styles.todoIconWrapper}>
              <div className={styles.todoCount}>{todo.count}</div>
              <button
                className={styles.todoActionButton}
                onClick={() => onSubstraction(index)}
              >
                <img src={minusIcon} alt="minus-icon" />
              </button>
              <button
                className={styles.todoActionButton}
                onClick={() => onAddition(index)}
              >
                <img src={plusIcon} alt="plus-icon" />
              </button>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    })
  ),
  onSubstraction: PropTypes.func,
  onAddition: PropTypes.func,
};

export default Todos;
