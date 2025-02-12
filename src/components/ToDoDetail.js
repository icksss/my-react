import { connect } from 'react-redux';
// import { actionCreator } from '../store/todoStore';
import { remove } from '../store/todoStore';
import { Link } from 'react-router-dom';

function ToDoDetail({ text, id, delClick }) {
  return (
    <li>
      <Link key={id} to={`/detail2/${id}`}>
        {text}
      </Link>
      <button onClick={delClick}>del</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    delClick: () => {
      console.log('ownProps : ', ownProps);
      // dispatch(actionCreator.deleteto(ownProps.id));
      dispatch(remove(ownProps.id));
    }
  };
};

export default connect(null, mapDispatchToProps)(ToDoDetail);
