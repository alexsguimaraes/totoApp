import React from 'react';
import { connect } from 'react-redux';
import { setText, addTodo } from '../actions';

const TodoForm  = ({text, setText , addTodo}) => {
    return (
        <form className="row" onSubmit={(e) => {e.preventDefault(); addTodo(text)}}>

                <div className = "input-field col s10">
                <input id="todoimput" type="text"
                    value={text}
                    onChange={e => setText(e.target.value) 
                    }
                />
                <label htmlFor="todoinput">Novo Todo</label>
                </div>
                <button className="btn col s2">Salvar</button>
        </form>
    );
}

function mapStateToProps(state){
    return{
        text: state.text

    };
}

const mapDispatchToProps = { setText, addTodo };
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)