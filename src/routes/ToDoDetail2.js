import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function ToDoDetail2({ toDo, id }) {
  // console.log('toDo : ', toDo);
  // console.log('ownProps : ', ownProps);
  // const params = useParams();
  console.log('id: ', id);
  return <div>ToDoDetail2</div>;
}

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps : ', ownProps);
  return {
    toDo: state,
    id: useParams.id
  };
};

export default connect(mapStateToProps)(ToDoDetail2);
