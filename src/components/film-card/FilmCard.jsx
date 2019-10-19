
import './film-card.scss';
import React, { Component } from 'react';

class FilmCard extends Component
{

    constructor(props)
    {
        super(props);

        const cssClassesForCompleteBtn = (props.completed === true)
            ? 'btn btn-dafault'
            : 'btn btn-primary';

        this.state = {
            cssClassesForCompleteBtn: cssClassesForCompleteBtn
        }
    }

    render()
    {


        return (
            <div className="content-box film" data-id={this.props.dataId}>
                <p className="film-title">
                    {
                        (this.props.completed === true)
                            ? <span className="strikethrough-text opacity50">this.props.text</span>
                            : this.props.text
                    }
                </p>
                <div className="film-buttons">
                    <button className={this.state.cssClassesForCompleteBtn}
                        disabled={this.props.completed}
                        onClick={() => { this.completeFilm(this.props.dataId); }}>
                        Completada
                    </button>
                    <button className="btn btn-primary"
                        onClick={() => { this.deleteFilm(this.props.dataId); }}>
                        Eliminar
                    </button>
                </div>
            </div>
        );
    }


    completeFilm = (id) =>
    {
        this.props.onCompleteFilm(id);
        this.setState({
            cssClassesForCompleteBtn: 'btn btn-dafault'
        });
    }

    deleteFilm = (id) =>
    {
        this.props.onDeleteFilm(id);
    }
}

export default FilmCard;
